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
        private bool _allowSizeChange = true; // not yet implemented.
        private bool _allowMoveChange = true; // not yet implemented.
        private bool _mouseDownOnBorder = false;
        private FormMovementModes _formMovementModes = FormMovementModes.None;
        public static HTMLDivElement _formOverLay = null;
        private Button btnClose;

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
            };


            
            document.body.appendChild(_formOverLay);
        }

        // what we need to do is support modals      
        private static List<FormCollection> _formCollections = new List<FormCollection>();

        private class FormCollection
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

        private WindowState _windowState;

        public WindowState WindowState
        {
            get { return _windowState; }
            set { _windowState = value; }
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

            if (WindowState == WindowState.Minimized)
            {
                _minimizedForms.Remove(this);
                CalculateMinmizedFormsLocation();
            }

            this.Dispose();

            _inClose = false;
        }

        private static void CalculateMinmizedFormsLocation()
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
                if (item.Element == null || item.WindowState != WindowState.Minimized)
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
                
                CalculateZOrder();

                OnShowed();

                Resizing();

                OnLoad(EventArgs.Empty);
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
                var rec = document.body.getBoundingClientRect().As<ClientRect>();

                this.Location = new Point((int)((rec.width * 0.5d) - (this.Size.Width * 0.5d)), (int)((rec.height * 0.5d) + (this.Size.Height * 0.5d)));
            }
        }

        private void _showStartNewLevel()
        {            
            _formCollections.Add(new FormCollection(this));
            _showForm();
            CalculateZOrder();

            //if (StartPosition == FormStartPosition.Center)
            //{
            //    CentreForm();
            //}

            OnShowed();
            
            Resizing();

            ActiveForm = this;

            Element.focus();

            OnLoad(EventArgs.Empty);
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

        public Form() : base()
        {            
            Element.setAttribute("scope", "form");
            
            TabStop = false;

            this.Location = new Point(0, 0);

            btnClose = new Button()
            {
                Tag = "Close"
            };
            btnClose.Element.setAttribute("scope", "closeform");            
            Controls.Add(btnClose);

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

        private FormBorderStyle _formBorderStyle;

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
            if (_allowMoveChange || _allowSizeChange)
            {
                if (_allowSizeChange)
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
