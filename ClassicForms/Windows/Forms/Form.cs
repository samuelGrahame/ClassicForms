using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System.Windows.Forms
{
    public class Form : ContainerControl
    {
        private int _formTopBorder = 31;
        private int _formBottonBorder = 1;
        private int _formLeftBorder = 1;
        private int _formRightBorder = 1;
        private bool _allowSizeChange = true;
        private bool _allowMoveChange = true;

        private bool _mouseDownOnBorder = false;
        private FormMovementModes _formMovementModes = FormMovementModes.None;
        public static HTMLDivElement _formOverLay = null;
        
        internal Control _activeControl = null;
        public Control ActiveControl { get => _activeControl; set {
                if(_activeControl != value)
                {
                    SetActiveControl(value);       
                    if(_activeControl != null && _activeControl.Element != null)
                        _activeControl.Element.focus();
                }
            }
        }

        internal void SetActiveControl(Control control)
        {
            if (_activeControl != null)
            {
                _activeControl.Element.blur();
            }
            _activeControl = control;
        }


        [DefaultValue(1)]
        public FormStartPosition StartPosition { get; set; }

        static Form()
        {
            document.body.style.userSelect = "none";

            _formOverLay = new HTMLDivElement();

            _formOverLay.style.height = "100%";
            _formOverLay.style.width = "100%";
            _formOverLay.style.top = "0";
            _formOverLay.style.left = "0";
            _formOverLay.style.opacity = "0.3";
            _formOverLay.style.backgroundColor = "grey";
            _formOverLay.style.position = "absolute";
            _formOverLay.style.visibility = "visible";

            _formOverLay.onmousedown = (ev) =>
            {        
                if (document.activeElement != null)
                {
                    //FormPopup
                    document.activeElement.As<HTMLElement>().focus();
                    ev.preventDefault();                    
                }
                return null;
            };


            
            document.body.appendChild(_formOverLay);
        }

        protected override Padding GetDefaultMargins()
        {
            return Padding.Empty;
        }

        // what we need to do is support modals      
        internal static List<FormCollection> _formCollections = new List<FormCollection>();

        internal class FormCollection
        {
            public Form FormOwner;
            public List<Form> VisibleForms = new List<Form>();

            public FormCollection(Form formOwner)
            {
                FormOwner = formOwner;
            }
        }
        private static Form _ActiveForm;
        private static Form _PrevActiveForm;

        public static Form ActiveForm
        {
            get { return _ActiveForm; }
            set
            {
                if (_ActiveForm != value)
                {
                    _PrevActiveForm = _ActiveForm;

                    if (_ActiveForm != null)
                    {
                        //_ActiveForm.OnLostFocus();
                        if (_ActiveForm.Element != null)
                        {
                            //if (_ActiveForm.InDesign)
                            //{
                            //    _ActiveForm.BodyOverLay.style.visibility = "collapse";
                            //    return;
                            //}
                            //_ActiveForm.BodyOverLay.style.visibility = "visible";
                        }
                    }
                    _ActiveForm = value;
                    if (_ActiveForm != null)
                    {
                        //_ActiveForm.OnGotFocus();
                        if (_ActiveForm.Element != null)
                        {
                            //_ActiveForm.BodyOverLay.style.visibility = "collapse";
                            _ActiveForm.BringToFront();
                        }
                    }
                    //if (_PrevActiveForm is FormPopup && ((_ActiveForm != null && !(_ActiveForm is FormPopup)) || _ActiveForm == null))
                    //{
                    //    CloseFormPopups();
                    //}
                }
            }
        }

        protected virtual void OnClosing()
        {

        }

        public List<DialogOption> DialogResults = new List<DialogOption>();

        private FormCollection GetFormCollectionFromForm(Form form)
        {
            for (int i = 0; i < _formCollections.Count; i++)
            {
                if (this == _formCollections[i].FormOwner)
                    return _formCollections[i];
                var visibleForms = _formCollections[i].VisibleForms;
                for (int x = 0; x < visibleForms.Count; x++)
                {
                    if (visibleForms[x] == this)
                        return _formCollections[i];
                }
            }

            return null;
        }

        private bool _isDialog;
        private bool _inClose;
        private bool _inDialogResult = false;
        private bool _hasShown = false;
        private FormWindowState _preWindowState;

        private FormWindowState _windowState;
        private FormWindowState _prevwindowState;

        public int Left { get => Location.X; set => Location = new Point(value, Location.Y); }
        public int Top { get => Location.Y; set => Location = new Point(Location.X, value); }

        public FormWindowState WindowState
        {
            get { return _windowState; }
            set {
                SetWindowState(value); }
        }
        private int prev_left, prev_top, prev_width, prev_height;
        private void SetWindowState(FormWindowState state)
        {           
            if(!_hasShown)
            {
                _preWindowState = state;
                return;
            }
            if (state == _windowState)
                return;

            _prevwindowState = _windowState;

            if (_prevwindowState == FormWindowState.Minimized)
            {
                //Body.style.opacity = PreviousOpacity;
                                
                _minimizedForms.Remove(this);                

                CalculateMinmizedFormsLocation();
            }

            if (!_allowSizeChange)
                return;

            if ((_windowState = state) == FormWindowState.Normal)
            {
                Element.style.overflow = "visible";
                _htmlwindowMaxAndRestoreStateButton.setAttribute("scope", "form-max");
                SuspendLayout();
                this.Location = new Point(prev_left, prev_top);
                this.Size = new Size(prev_width, prev_height);                
                ResumeLayout();                
            }
            else if (_windowState == FormWindowState.Maximized)
            {
                Element.style.overflow = "visible";
                _htmlwindowMaxAndRestoreStateButton.setAttribute("scope", "form-restore");
                if (_prevwindowState == FormWindowState.Normal)
                {
                    prev_left = Left;
                    prev_top = Top;
                    prev_width = Width;
                    prev_height = Height;
                }

                //Style.borderWidth = "0";

                SnapToWindow();
            }
            else if (_windowState == FormWindowState.Minimized)
            {
                _htmlwindowMaxAndRestoreStateButton.setAttribute("scope", "form-max");
                if (_prevwindowState == FormWindowState.Normal)
                {
                    prev_left = Left;
                    prev_top = Top;
                    prev_width = Width;
                    prev_height = Height;
                }
                else
                {
                   //Style.borderWidth = "1px";
                }

                //HeadingTitle.style.marginRight = "0";
                //HeadingTitle.style.left = "3px";
                //HeadingTitle.style.transform = "translate(0, -50%)";

                //var offset = (ShowClose ? 45.5f : 0);                
                Element.style.overflow = "hidden";
                Width = 150; //  (float)Math.Max(GetTextWidth(Text, "10pt Tahoma") + 32, 100) + offset;
                Height = 30;

                //Heading.classList.add("form-heading-min");

                //if (ButtonMinimize != null)
                //{
                //    ButtonMinimize.innerHTML = "+";
                //}

                //previousDisplay = Body.style.display;
                //Body.style.display = "none";

                _minimizedForms.Add(this);

                CalculateMinmizedFormsLocation();
            }

            Resizing();
        }

        internal void SnapToWindow()
        {
            SuspendLayout();
            this.Location = new Point(0, 0);
            this.Size = new Size(GetWindowWidth(), GetWindowHeight());
            ResumeLayout();
        }

        public static void CalculateZOrder()
        {
            GetActiveFormCollection();

            if (_formCollections == null)
                return;
            _formCollections.Remove(null);
            var count = _formCollections.Count;
            int zIndex = 1;

            //var frag = Document.CreateDocumentFragment();

            _formOverLay.style.opacity = count == 0 ? "" : count == 1 ? "0" : "0.4";

            for (int x = 0; x < count; x++)
            {
                //if(Helper.NotDesktop)
                //{
                //    if(x == count - 1)
                //    {
                //        frag.AppendChild(FormOverLay);
                //        zIndex = CalculateZOrder(FormCollections[x], zIndex, frag);
                //    }
                //}
                //else
                //{
                //}
                if (x == count - 1)
                {
                    //frag.AppendChild(FormOverLay);
                    _formOverLay.style.zIndex = Convert.ToString(zIndex);
                    zIndex++;
                }
                zIndex = CalculateZOrder(_formCollections[x], zIndex); // frag
            }
            //zIndex = CalculateZOrder(standAloneForms, zIndex); // frag

            //WindowHolder.Empty();
            //WindowHolder.AppendChild(frag);

            if (ActiveForm != null)
            {
                ActiveForm.Element.focus();
            }
        }
        private static List<Form> ToClean = new List<Form>();
        private static int CalculateZOrder(FormCollection formCollection, int zIndex) // , DocumentFragment frag
        {
            List<Form> TopMostForms = new List<Form>();

            var VisibleForms = formCollection.VisibleForms;
            if (VisibleForms != null)
            {
                for (int i = 0; i < VisibleForms.Count; i++)
                {
                    if (VisibleForms[i].Element == null)
                    {
                        ToClean.Add(VisibleForms[i]);
                    }
                    else
                    {
                        //if (VisibleForms[i].TopMost)
                        //    TopMostForms.Add(VisibleForms[i]);
                    }
                }
                for (int i = 0; i < ToClean.Count; i++)
                {
                    if (VisibleForms.Contains(ToClean[i]))
                    {
                        VisibleForms.Remove(ToClean[i]);
                        ToClean[i] = null;
                    }
                }

                ToClean.Remove(null);

                if (formCollection.FormOwner != null)
                {
                    //formCollection.FormOwner.ManagePlaceHolders();
                    formCollection.FormOwner.Element.style.zIndex = Convert.ToString(zIndex);
                    zIndex++;
                    //frag.AppendChild(formCollection.FormOwner);

                    //if(Helper.NotDesktop)
                    //{
                    //    if(VisibleForms.Count == 0)
                    //    {
                    //        formCollection.FormOwner.ManagePlaceHolders();
                    //        frag.AppendChild(formCollection.FormOwner);
                    //        return zIndex;
                    //    }
                    //}
                    //else
                    //{
                    //    formCollection.FormOwner.ManagePlaceHolders();
                    //    frag.AppendChild(formCollection.FormOwner);
                    //}
                }

                for (int i = 0; i < TopMostForms.Count; i++)
                {
                    var form = TopMostForms[i];
                    VisibleForms.Remove(form);
                    VisibleForms.Add(form);
                }
                int length = VisibleForms.Count;
                for (int i = 0; i < length; i++)
                {
                    if (VisibleForms[i] != null &&
                        VisibleForms[i].Element != null)
                    {
                        //VisibleForms[i].ManagePlaceHolders();
                        VisibleForms[i].Element.style.zIndex = Convert.ToString(zIndex);
                        zIndex++;
                        //frag.AppendChild(VisibleForms[i]);

                        //if(Helper.NotDesktop)
                        //{
                        //    if(length - 1 == i)
                        //    {
                        //        VisibleForms[i].ManagePlaceHolders();
                        //        frag.AppendChild(VisibleForms[i]);
                        //        return zIndex;
                        //    }
                        //}else
                        //{
                        //    VisibleForms[i].ManagePlaceHolders();
                        //    frag.AppendChild(VisibleForms[i]);
                        //}
                    }
                }
            }

            return zIndex;
        }
        public DialogResult DialogResult = DialogResult.None;
        public void Close()
        {            
            if ((_isDialog && _inDialogResult) || _inClose)
                return;

            _inClose = true;

            OnClosing();

            ToClean.Add(this);

            var ownerFormCollection = GetFormCollectionFromForm(this);

            if (ownerFormCollection != null)
            {
                if (ownerFormCollection.FormOwner == this)
                {
                    ownerFormCollection.FormOwner = null;
                    for (int i = 0; i < ownerFormCollection.VisibleForms.Count; i++)
                    {
                        if (ownerFormCollection.VisibleForms[i] == this)
                            continue;
                        ownerFormCollection.VisibleForms[i].Close();
                    }
                    if (_formCollections.Count == 1)
                    {
                        _formCollections = new List<FormCollection>();
                    }
                }
                else
                {
                    ownerFormCollection.VisibleForms.Remove(this);
                }
            }

            if (Element != null)
            {
                //if (!ForReuse)
                //{
                //    if (Settings.FormFadeDuration > 0)
                //    {
                //        Self.fadeOut(Settings.FormFadeDuration, closeAction);
                //    }
                //    else
                //    {
                //        closeAction();
                //    }
                //}
                //else
                //{
                //    Content.style.visibility = "collapse";
                //}
                Element.style.visibility = "collapse";
            }

            CalculateZOrder();

            ActiveForm = _PrevActiveForm;
            if (_isDialog)
            {
                _inDialogResult = true;
                if (DialogResult != DialogResult.None &&
                DialogResults != null && DialogResults.Count > 0)
                {
                    for (int i = 0; i < DialogResults.Count; i++)
                    {
                        DialogResults[i].InvokeIfResult(DialogResult);
                    }
                }
            }

            OnFormClosed();

            OnClosed();

            if (WindowState == FormWindowState.Minimized)
            {
                _minimizedForms.Remove(this);
                CalculateMinmizedFormsLocation();
            }

            this.Dispose();

            _inClose = false;
        }

        internal static void CalculateMinmizedFormsLocation()
        {
            if (_minimizedForms.Count > 0 && _minimizedForms.Contains(null))
                _minimizedForms.Remove(null);
            var RemoveList = new List<Form>();
            int count = 0;
            float widthTotal = 0;
            int y = 30;

            var viewSize = document.body.getBoundingClientRect().As<ClientRect>();

            foreach (var item in _minimizedForms)
            {
                if (item.Element == null || item.WindowState != FormWindowState.Minimized)
                {
                    RemoveList.Add(item);
                }
                else
                {
                    var ToIncrement = 3 + item.Size.Width;

                    if (widthTotal + ToIncrement > viewSize.width)
                    {
                        widthTotal = 0;
                        count = 0;
                        y += 33;
                    }

                    //item.Location = new Vector2(widthTotal, "(100% - " + (y + 2) + "px)");
                    item.Element.style.left = $"{widthTotal}px";
                    item.Element.style.top = "calc(100% - " + (y + 2) + "px)";

                    count++;

                    widthTotal += ToIncrement;
                }
            }
            foreach (var item in RemoveList)
            {
                _minimizedForms.Remove(item);
            }
        }

        private static List<Form> _minimizedForms = new List<Form>();
        protected virtual void OnFormClosed()
        {

        }

        protected virtual void OnClosed()
        {

        }

        private static FormCollection GetActiveFormCollection()
        {
            for (int i = _formCollections.Count - 1; i >= 0; i--)
            {
                var frmCol = _formCollections[i];
                if (frmCol.FormOwner == null)
                {
                    for (int x = 0; x < frmCol.VisibleForms.Count; x++)
                    {
                        if (frmCol.VisibleForms[x] != null)
                        {
                            frmCol.VisibleForms[x].Close();
                        }
                    }
                    _formCollections.RemoveAt(i);
                }
                else
                {
                    return frmCol;
                }
            }

            return null;
        }

        public void BringToFront()
        {
            var activeCollect = GetActiveFormCollection();
            if (activeCollect != null)
            {
                if (activeCollect.FormOwner == this)
                    return;
                var visibleForms = activeCollect.VisibleForms;
                if (visibleForms != null && visibleForms.Count > 1)
                {
                    visibleForms.Remove(this);
                    visibleForms.Add(this);
                }

                CalculateZOrder();
            }
        }

        private void PreShown()
        {
            _showForm();

            CalculateZOrder();

            _hasShown = true;

            OnShowed();

            Resizing();

            OnLoad(EventArgs.Empty);

            if (_preWindowState != _windowState)
            {
                SetWindowState(_preWindowState);
            }

            CalculateFormWindowButtons();
        }

        public void Show()
        {            
            if (_isDialog)
                return;
            if ((_formCollections == null || _formCollections.Count == 0))
            {
                _showStartNewLevel();
                return;
            }

            var activeCollect = GetActiveFormCollection();
            var visbileForms = activeCollect.VisibleForms;

            if (!visbileForms.Contains(this))
            {
                visbileForms.Add(this);
                _showForm();
                
                PreShown();                
            }

            ActiveForm = this;            
        }

        public void ShowDialog(params DialogOption[] dialogResults)
        {            
            _inDialogResult = false;

            _isDialog = true;
            //if (StartPosition != FormStartPosition.Manual)
            //{
            //    if (!Helper.NotDesktop)
            //        StartPosition = FormStartPosition.Center;
            //}
            _showStartNewLevel();

            if (dialogResults != null && dialogResults.Length > 0)
            {
                DialogResults.AddRange(dialogResults);
            }
        }

        private void _showForm()
        {
            document.body.appendChild(this.Element);   
            if(StartPosition == FormStartPosition.CenterScreen)
            {                
                this.Location = new Point((int)((window.innerWidth * 0.5d) - (this.Size.Width * 0.5d)), (int)((window.innerHeight * 0.5d) - (this.Size.Height * 0.5d)));
            }
        }

        public static int GetWindowHeight()
        {
            return (int)window.innerHeight;
        }

        public static int GetWindowWidth()
        {
            return (int)window.innerWidth;
        }

        private void _showStartNewLevel()
        {            
            _formCollections.Add(new FormCollection(this));
            
            PreShown();
            
            ActiveForm = this;
            Element.focus();
        }

        protected virtual void OnShowed()
        {
            
        }

        protected void Resizing()
        {

        }

        private int _prevX;
        private int _prevY;

        private int _prevFormX;
        private int _prevFormY;

        private HTMLDivElement _htmlcloseButton;
        private HTMLDivElement _htmlwindowMaxAndRestoreStateButton;
        private HTMLDivElement _htmlMinimizeButton;

        private HTMLDivElement CreateFormWindowButton(FormWindowButton formWindowButton)
        {
            var div = new HTMLDivElement();
            div.style.position = "absolute";
            div.classList.add("form-button");

            Action onClick = null;

            switch (formWindowButton)
            {
                case FormWindowButton.Close:
                    div.setAttribute("scope", "form-close");
                    onClick = () =>
                    {
                        this.Close();
                    };
                    break;
                case FormWindowButton.MaxAndRestore:
                    div.setAttribute("scope", "form-max");
                    onClick = () =>
                    {
                        if(WindowState == FormWindowState.Maximized)
                        {
                            WindowState = FormWindowState.Normal;
                        }else if (WindowState == FormWindowState.Minimized)
                        {
                            WindowState = _prevwindowState;
                        }
                        else
                        {
                            WindowState = FormWindowState.Maximized;
                        }
                    };
                    break;
                case FormWindowButton.Minimize:
                    div.setAttribute("scope", "form-min");
                    onClick = () =>
                    {
                        WindowState = FormWindowState.Minimized;
                    };
                    break;
                default:
                    break;
            }
            div.onmousedown = (ev) =>
            {
                if (ClickedOnControl == null)
                    ev.stopPropagation();
                return null;
            };
            div.onmousemove = (ev) =>
            {
                if (ClickedOnControl == null)
                    ev.stopPropagation();
                return null;
            };
            div.onmouseup = (ev) =>
            {
                ev.stopPropagation();
                return null;
            };
            div.onmouseenter = (ev) =>
            {
                if (ClickedOnControl == null)
                {
                    ev.stopPropagation();
                    document.body.style.cursor = null;
                }
                    
                return null;

            };
            
            div.onclick = (ev) =>
            {
                ev.stopPropagation();
                if(onClick != null)
                    onClick();
                return null;
            };

            Element.appendChild(div);

            return div;
        }

        private enum FormWindowButton
        {
            Close,
            MaxAndRestore,
            Minimize            
        }

        private void CalculateFormWindowButtons()
        {
            if(!_hasShown)
            {
                return;
            }

            if(!ControlBox || FormBorderStyle == FormBorderStyle.None)
            {
                _htmlwindowMaxAndRestoreStateButton.style.visibility = "hidden";
                _htmlMinimizeButton.style.visibility = "hidden";
                _htmlcloseButton.style.visibility = "hidden";
            }
            else
            {
                bool restoreVisiable = false;
                bool minimizeVisable = false;
                if (!_allowSizeChange || !_maximizeBox)
                {
                    _htmlwindowMaxAndRestoreStateButton.style.visibility = "hidden";                    
                }
                else
                {
                    _htmlwindowMaxAndRestoreStateButton.style.visibility = "inherit";
                    restoreVisiable = true;
                }
                if (!_minimizeBox)
                {
                    _htmlMinimizeButton.style.visibility = "hidden";
                }
                else
                {
                    _htmlMinimizeButton.style.visibility = "inherit";
                    minimizeVisable = true;
                }
                _htmlcloseButton.style.visibility = "inherit";

                int bonusSize = (int)(_formTopBorder * 0.5f);

                string top = -(_formTopBorder - 1) + "px";                
                string height = _formTopBorder - 2 + "px";
                int increment = _formTopBorder + bonusSize - 1;
                string width = increment - 1 + "px";

                _htmlcloseButton.style.top = top;
                _htmlcloseButton.style.height = height;
                _htmlcloseButton.style.lineHeight = height;
                _htmlcloseButton.style.width = width;

                if (restoreVisiable)
                {
                    _htmlwindowMaxAndRestoreStateButton.style.top = top;
                    _htmlwindowMaxAndRestoreStateButton.style.height =  height;
                    _htmlwindowMaxAndRestoreStateButton.style.lineHeight = height;
                    _htmlwindowMaxAndRestoreStateButton.style.width = width;
                }
                if(minimizeVisable)
                {
                    _htmlMinimizeButton.style.top = top;
                    _htmlMinimizeButton.style.height = height;
                    _htmlMinimizeButton.style.lineHeight = height;
                    _htmlMinimizeButton.style.width = width;
                }
                int leftPlus = increment;
                if (Settings.WinFormButtonSide == Settings.WinFormButtonSides.Left)
                {
                    _htmlcloseButton.style.left = "1px";                    
                    if(restoreVisiable)
                    {
                        leftPlus += increment;
                        _htmlwindowMaxAndRestoreStateButton.style.left = leftPlus + "px";
                    }
                    if (minimizeVisable)
                    {
                        leftPlus += increment;
                        _htmlMinimizeButton.style.left = leftPlus + "px";
                    }
                }
                else
                {
                    _htmlcloseButton.style.left = "calc(100% - " + leftPlus + "px)";
                    
                    if (restoreVisiable)
                    {
                        leftPlus += increment;
                        _htmlwindowMaxAndRestoreStateButton.style.left = "calc(100% - " + leftPlus + "px)";
                    }
                    if (minimizeVisable)
                    {
                        leftPlus += increment;
                        _htmlMinimizeButton.style.left = "calc(100% - " + leftPlus + "px)";
                    }
                }
            }

            
        }

        private bool _maximizeBox = true;
        public virtual bool MaximizeBox { get => _maximizeBox; set {
                if(_maximizeBox != value)
                {
                    _maximizeBox = value;
                    CalculateFormWindowButtons();
                }
            } }

        private bool _minimizeBox = true;
        public virtual bool MinimizeBox
        {
            get => _minimizeBox; set
            {
                if (_minimizeBox != value)
                {
                    _minimizeBox = value;
                    CalculateFormWindowButtons();
                }
            }
        }

        public Form() : base()
        {            
            Element.setAttribute("scope", "form");
            Element.style.overflow = "visible";
            
            TabStop = false;

            this.Location = new Point(0, 0);

            _htmlcloseButton = CreateFormWindowButton(FormWindowButton.Close);
            _htmlwindowMaxAndRestoreStateButton = CreateFormWindowButton(FormWindowButton.MaxAndRestore);
            _htmlMinimizeButton = CreateFormWindowButton(FormWindowButton.Minimize);

            //WinFormButtonSide


            //btnClose = new Button()
            //{
            //    Tag = "Close"
            //};
            //btnClose.Element.setAttribute("scope", "closeform");            
            //Controls.Add(btnClose);

            _setBorderWidth();
        }

        private bool _controlBox = true;

        public bool ControlBox
        {
            get { return _controlBox; }
            set {
                if(_controlBox != value)
                {
                    _controlBox = value;
                    _processWinFormView();
                }                
            }
        }

        private FormBorderStyle _formBorderStyle = FormBorderStyle.Sizable;

        [DefaultValue(4)]
        public FormBorderStyle FormBorderStyle
        {
            get { return _formBorderStyle; }
            set {
                if(_formBorderStyle != value)
                {
                    _formBorderStyle = value;
                    _processWinFormView();
                }                
            }
        }

        

        private enum FormMovementModes
        {
            None,
            Move,
            TopLeft,
            Left,
            BottomLeft,
            Top,
            TopRight,
            Right,
            BottomRight,
            Bottom
        }

        private FormMovementModes GetMovementMode(MouseEventArgs e)
        {
            if (WindowState == FormWindowState.Minimized)
            {
                document.body.style.cursor = null;
                return FormMovementModes.Move;
            }                

            if (_allowMoveChange || _allowSizeChange)
            {
                if (_allowSizeChange && WindowState == FormWindowState.Normal)
                {
                    if (e.X >= 0 && e.X <= 3 && e.Y >= 0 && e.Y <= 3)
                    {
                        document.body.style.cursor = "nw-resize";
                        return FormMovementModes.TopLeft;
                    } else if (e.X >= 0 && e.X <= 2 && e.Y > 3 && e.Y < Size.Height - 3)
                    {
                        document.body.style.cursor = "w-resize";
                        return FormMovementModes.Left;
                    }
                    else if (e.X >= 0 && e.X <= 3 && e.Y >= Size.Height - 3 && e.Y <= Size.Height)
                    {
                        document.body.style.cursor = "sw-resize";
                        return FormMovementModes.BottomLeft;
                    }
                    else if (e.X > 3 && e.X < Size.Width - 3 && e.Y >= 0 && e.Y < 3)
                    {
                        document.body.style.cursor = "n-resize";
                        return FormMovementModes.Top;
                    }
                    else if (e.X >= Size.Width - 3 && e.X <= Size.Width && e.Y >= 0 && e.Y < 3)
                    {
                        document.body.style.cursor = "ne-resize";
                        return FormMovementModes.TopRight;
                    }
                    else if (e.X > Size.Width - 3 && e.X <= Size.Width && e.Y > 3 && e.Y < Size.Height - 3)
                    {
                        document.body.style.cursor = "e-resize";
                        return FormMovementModes.Right;
                    }
                    else if (e.X >= Size.Width - 3 && e.X <= Size.Width && e.Y >= Size.Height - 3 && e.Y <= Size.Height)
                    {
                        document.body.style.cursor = "se-resize";
                        return FormMovementModes.BottomRight;
                    }
                    else if (e.X > 3 && e.X < Size.Width - 3 && e.Y > Size.Height - 3 && e.Y <= Size.Height)
                    {
                        document.body.style.cursor = "s-resize";
                        return FormMovementModes.Bottom;
                    }
                }

                if (!_mouseDownOnBorder && _allowMoveChange && e.X > 1 && e.X <= Size.Width - _formRightBorder && e.Y > 1 && e.Y <= _formTopBorder)
                {
                    document.body.style.cursor = "move";
                    return FormMovementModes.Move;                    
                }
            }

            document.body.style.cursor = null;

            return FormMovementModes.None;
        }

        protected override void OnMouseDown(MouseEventArgs e)
        {
            ActiveForm = this;
            // work out area... of click.
            //document.body.style.userSelect = null;

            _formMovementModes = GetMovementMode(e);
            if (WindowState == FormWindowState.Minimized)
            {
                _formMovementModes = FormMovementModes.None;
                WindowState = _prevwindowState;
            }                            

            if ((_mouseDownOnBorder = (_formMovementModes != FormMovementModes.None)))
            {
                //document.body.style.userSelect = "none";
                _prevX = Location.X - (e.X + Location.X);
                _prevY = Location.Y - (e.Y + Location.Y);

                _prevFormX = Location.X;
                _prevFormY = Location.Y;
            }
            
            base.OnMouseDown(e);
        }


        protected override void OnMouseUp(MouseEventArgs e)
        {
            //document.body.style.userSelect = null;
            _mouseDownOnBorder = false;

            document.body.style.cursor = null;

            base.OnMouseUp(e);
        }

        protected override void OnMouseDoubleClick(MouseEventArgs e)
        {
            if(WindowState == FormWindowState.Normal)
            {
                var movement = GetMovementMode(e);
                if (movement == FormMovementModes.Move)
                {
                    WindowState = FormWindowState.Maximized;
                }
            }
            
            base.OnMouseDoubleClick(e);
        }

        protected override void OnMouseMove(MouseEventArgs e)
        {
            // is mouse down???
            if(_mouseDownOnBorder)
            {
                var prev = Location;
                var newY = (Location.Y + e.Y) + _prevY;
                var newX = (Location.X + e.X) + _prevX;

                if (_formMovementModes == FormMovementModes.Move)
                {
                    if (WindowState == FormWindowState.Maximized)
                    {
                        WindowState = FormWindowState.Normal;                        
                        newX = e.X - (prev_width / 2);
                        _prevX = newX - e.X;
                    }

                    Location = new Point(newX, newY);
                }else if(_formMovementModes == FormMovementModes.TopLeft)
                {                    
                    SuspendLayout();
                    Location = new Point(newX, newY);
                    Size = new Size(Size.Width + (prev.X - Location.X), Size.Height + (prev.Y - Location.Y));
                    ResumeLayout(true);
                }else if(_formMovementModes == FormMovementModes.Top)
                {
                    SuspendLayout();
                    Location = new Point(Location.X, newY);
                    Size = new Size(Size.Width, Size.Height - (newY - prev.Y));
                    ResumeLayout(true);                    
                }else if(_formMovementModes == FormMovementModes.TopRight)
                {
                    SuspendLayout();
                    Location = new Point(Location.X, newY);
                    Size = new Size(e.X, Size.Height - (newY - prev.Y));
                    ResumeLayout(true);
                }else if(_formMovementModes == FormMovementModes.Left)
                {
                    SuspendLayout();
                    Location = new Point(newX, Location.Y);
                    Size = new Size(Size.Width - (newX - prev.X), Size.Height);
                    ResumeLayout(true);
                }else if(_formMovementModes == FormMovementModes.BottomLeft)
                {
                    SuspendLayout();
                    Location = new Point(newX, Location.Y);
                    Size = new Size(Size.Width - (newX - prev.X), e.Y);
                    ResumeLayout(true);
                }else if(_formMovementModes == FormMovementModes.Bottom)
                {                    
                    Size = new Size(Size.Width, e.Y);                    
                }else if(_formMovementModes == FormMovementModes.Right)
                {
                    Size = new Size(e.X, Size.Height);                    
                }else if(_formMovementModes== FormMovementModes.BottomRight)
                {
                    Size = new Size(e.X, e.Y);                    
                }

            }
            else
            {
                GetMovementMode(e);
            }
            base.OnMouseMove(e);
        }

        private void _processWinFormCloseButton()
        {
            
        }

        private void _processWinFormView()
        {
            var clientSize = ClientSize;
            // need to allow for custom size per style - currently set as windows 10.
            switch (_formBorderStyle)
            {
                case FormBorderStyle.None:
                    _formTopBorder = 0;
                    _formBottonBorder = 0;
                    _formLeftBorder = 0;
                    _formRightBorder = 0;
                    _allowSizeChange = false;

                    break;
                case FormBorderStyle.FixedSingle:
                    _allowSizeChange = false;
                    if (!ControlBox)
                    {
                        _formTopBorder = 1;
                    }
                    else
                    {
                        _formTopBorder = 31;
                    }                        
                    _formBottonBorder = 1;
                    _formLeftBorder = 1;
                    _formRightBorder = 1;
                    break;
                case FormBorderStyle.Fixed3D:
                    _allowSizeChange = false;
                    if (!ControlBox)
                    {
                        _formTopBorder = 3;
                        _formBottonBorder = 3;
                        _formLeftBorder = 3;
                        _formRightBorder = 3;
                    }
                    else
                    {
                        _formTopBorder = 31;
                        _formBottonBorder = 1;
                        _formLeftBorder = 1;
                        _formRightBorder = 1;
                    }
                    break;
                case FormBorderStyle.FixedDialog:

                    _allowSizeChange = false;
                    if (!ControlBox)
                    {
                        _formTopBorder = 2;
                        _formBottonBorder = 2;
                        _formLeftBorder = 2;
                        _formRightBorder = 2;
                    }
                    else
                    {
                        _formTopBorder = 31;
                        _formBottonBorder = 1;
                        _formLeftBorder = 1;
                        _formRightBorder = 1;
                    }

                    
                    break;
                case FormBorderStyle.Sizable:
                    if(!ControlBox)
                    {
                        _formTopBorder = 8;
                    }
                    else
                    {
                        _formTopBorder = 31;
                    }
                    _formBottonBorder = 1;
                    _formLeftBorder = 1;
                    _formRightBorder = 1;
                    _allowSizeChange = true;
                    break;
                case FormBorderStyle.FixedToolWindow:
                    if (!ControlBox)
                    {
                        _formTopBorder = 1;
                    }
                    else
                    {
                        _formTopBorder = 31;
                    }
                    _formBottonBorder = 0;
                    _formLeftBorder = 0;
                    _formRightBorder = 0;
                    _allowSizeChange = false;
                    break;
                case FormBorderStyle.SizableToolWindow:
                    if (!ControlBox)
                    {
                        _formTopBorder = 8;
                    }
                    else
                    {
                        _formTopBorder = 31;
                    }
                    _formBottonBorder = 1;
                    _formLeftBorder = 1;
                    _formRightBorder = 1;
                    _allowSizeChange = true;
                    break;
                default:
                    break;
            }

            _setBorderWidth();

            ClientSize = clientSize;

            CalculateFormWindowButtons();
        }

        private void _setBorderWidth()
        {
            Element.style.borderTopWidth = _formTopBorder + "px";
            Element.style.borderBottomWidth = _formBottonBorder + "px";
            Element.style.borderLeftWidth = _formLeftBorder + "px";
            Element.style.borderRightWidth = _formRightBorder + "px";


        }
        
        public override Font Font { get { return base.Font; } set {                
                base.Font = value;                
            } }

        private Size GetClientSize(Size size)
        {
            return new Size(size.Width - (_formLeftBorder + _formRightBorder), size.Height - (_formTopBorder + _formBottonBorder));
        }

        private Size SetSize(Size clientSize)
        {
            return new Size(clientSize.Width + (_formLeftBorder + _formRightBorder), clientSize.Height + (_formTopBorder + _formBottonBorder));
        }

        protected virtual void Dispose(bool disposing)
        {

        }
        public override Size ClientSize { get { return GetClientSize(Size); } set { Size = SetSize(value); } }
        public override string Text { get; set; }        
    }
}
