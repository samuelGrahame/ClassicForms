using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms.Layout;
using static Retyped.dom;

namespace System.Windows.Forms
{
    public class Control : IArrangedElement, IComponent
    {
        public string Name { get { return Element.getAttribute("Name"); } set { Element.setAttribute("Name", value); } }
        private Point _location;

        protected virtual void OnChildGotTabbed()
        {
            if (this.Parent != null)
                this.Parent.OnChildGotTabbed();
        }

        public Control GetNextControl(Control ctl, bool forward, bool isParent = false)
        {
            if (ctl == null)
                return null;
            if (ctl.Parent == null)
                return null;
            Control diffControl = null;
            int diff = int.MaxValue;
            foreach (Control child in ctl.Parent.Children)
            {
                if (child == ctl)
                    continue;                
                // change to once closest
                if ((child.TabStop || isParent) && (forward ? child.TabIndex > ctl.TabIndex : child.TabIndex <= ctl.TabIndex))
                {
                    int preDiff;
                    if(forward)
                    {
                        preDiff = child.TabIndex - ctl.TabIndex;
                    }
                    else
                    {
                        preDiff = ctl.TabIndex - child.TabIndex;
                    }
                    if(preDiff < diff)
                    {
                        diffControl = child;
                        diff = preDiff;
                    }
                }
            }
            if(diffControl == null)
            {
                if (ctl.Parent.Parent == null)
                    return null;
                var control = GetNextControl(ctl.Parent, forward, true);

                if (control == null)
                    return null;
                Control controlFound = null;
                while((controlFound = control.TabIndexControl(forward)) == null)
                {
                    control = GetNextControl(control, forward, true);
                    if (control == null)
                        return null;
                }
                return controlFound;
            }
            else
            {
                return diffControl;
            }
        }

        public void Focus()
        {
            var frm = FindForm();
            if(frm != null)
            {
                frm.ActiveControl = this;
            }
        }

        public string AccessibleName { get => Element.getAttribute("placeholder"); set => Element.setAttribute("placeholder", value); }

        internal Control TabIndexControl(bool forward, bool checkAll = false)
        {
            Control selected = null;
            int index = forward ? int.MaxValue : int.MinValue;
            foreach (Control item in Controls)
            {
                if((checkAll || item.TabStop) && (forward ? item.TabIndex < index : item.TabIndex > index))
                {
                    index = item.TabIndex;
                    selected = item;
                }
            }

            return selected;
        }

        protected AutoSizeMode GetAutoSizeMode() =>
    CommonProperties.GetAutoSizeMode(this);

        protected void SetAutoSizeMode(AutoSizeMode mode)
        {
            CommonProperties.SetAutoSizeMode(this, mode);
        }
        public AutoSizeMode AutoSizeMode
        {
            get =>
                this.GetAutoSizeMode();
            set
            {
                if (!ClientUtils.IsEnumValid(value, (int)value, 0, 1))
                {
                    throw new InvalidEnumArgumentException("value", (int)value, typeof(AutoSizeMode));
                }
                if (this.GetAutoSizeMode() != value)
                {
                    this.SetAutoSizeMode(value);
                    if (this.ParentInternal != null)
                    {
                        if (this.ParentInternal.LayoutEngine == DefaultLayout.Instance)
                        {
                            this.ParentInternal.LayoutEngine.InitLayout(this, BoundsSpecified.Size);
                        }
                        LayoutTransaction.DoLayout(this.ParentInternal, this, PropertyNames.AutoSize);
                    }
                }
            }
        }

        public Point Location
        {
            get { return _location; } // new Point(_location.X - Margin.Left, _location.Y - Margin.Top);
            set
            {
                var prev = _location;
                _location = value;// new Point(value.X + Margin.Left, value.Y + Margin.Top);
                
                Element.style.left = _location.X + "px";
                Element.style.top = _location.Y + "px";

                if (prev.X != value.X || prev.Y != value.Y)
                {
                    CommonProperties.UpdateSpecifiedBounds(this, value.X, value.Y, this.Width, this.Height);
                    OnLocationChanged(EventArgs.Empty);
                }

            }
        }

        public virtual Size MaximumSize { get; set; }
        public virtual Size MinimumSize { get; set; }

        public int Width {
            get
            {
                return Size.Width;
            }
            set
            {
                Size = new Size(value, Size.Height);
            }
        }

        public int Height
        {
            get
            {
                return Size.Height;
            }
            set
            {
                Size = new Size(Size.Width, value);
            }
        }

        public bool RenderTransparent;

        public void Invalidate()
        {
            // TODO: Paint.. Support.
        }

        protected virtual void OnMove(EventArgs e)
        {
            if (Move != null)
            {
                Move(this, e);
            }
            if (this.RenderTransparent)
            {
                this.Invalidate();
            }
        }

        protected virtual void OnLocationChanged(EventArgs e)
        {
            this.OnMove(EventArgs.Empty);
            if (LocationChanged != null)
            {
                LocationChanged(this, e);
            }
        }


        protected virtual void OnResize(EventArgs e)
        {
            // TODO: if (((this.controlStyle & ControlStyles.ResizeRedraw) == ControlStyles.ResizeRedraw) || this.GetState(0x400000))
            //{
            //    this.Invalidate();
            //}
            LayoutTransaction.DoLayout(this, this, PropertyNames.Bounds);
            if (Resize != null)
            {
                Resize(this, e);
            }
        }


        internal virtual void OnControlAdded(Control control)
        {

        }

        internal virtual Control ParentInternal
        {
            get =>
                this._parent;
            set
            {
                if (this._parent != value)
                {
                    if (value != null)
                    {
                        value.Controls.Add(this);
                    }
                    else
                    {
                        this._parent.Controls.Remove(this);
                    }
                }
            }
        }

        internal virtual void OnControlRemoved(Control control)
        {

        }

        //public virtual AnchorStyles Anchor { get; set; }

        [DefaultValue(5)]//[SRCategory("CatLayout"), Localizable(true), DefaultValue(5), SRDescription("ControlAnchorDescr"), RefreshProperties(RefreshProperties.Repaint)]
        public virtual AnchorStyles Anchor
        {
            get =>
                DefaultLayout.GetAnchor(this);
            set
            {
                DefaultLayout.SetAnchor(this.ParentInternal, this, value);
            }
        }

        private bool _visible;
        public bool Visible { get { return _visible; } set {
                _visible = value;
                Element.style.visibility = _visible ? "inherit" : "hidden";
            } }
        [DefaultValue(0)]//[SRCategory("CatLayout"), Localizable(true), RefreshProperties(RefreshProperties.Repaint), , SRDescription("ControlDockDescr")]
        public virtual DockStyle Dock
        {
            get =>
                DefaultLayout.GetDock(this);
            set
            {
                if (value != this.Dock)
                {
                    this.SuspendLayout();
                    try
                    {
                        DefaultLayout.SetDock(this, value);
                        this.OnDockChanged(EventArgs.Empty);
                    }
                    finally
                    {
                        this.ResumeLayout();
                    }
                }
            }
        }

        protected virtual void OnDockChanged(EventArgs e)
        {
            if (DockChanged != null)
            {
                DockChanged(this, e);
            }
        }


        internal Control _parent;

        //public Control Parent { get { return _parent; } }

        //[SRCategory("CatBehavior"), Browsable(false), DesignerSerializationVisibility(DesignerSerializationVisibility.Hidden), SRDescription("ControlParentDescr")]
        public Control Parent
        {
            get
            {
                //IntSecurity.GetParent.Demand();
                return this.ParentInternal;
            }
            set
            {
                this.ParentInternal = value;
            }
        }

        public Form GetForm()
        {
            if (this.Parent == null)
                return null;

            if (this.Parent is Form)
            {
                return this.Parent.As<Form>();
            }
            else
            {
                return this.Parent.GetForm();
            }
        }

        private Size _size;
        // new Size(_size.Width + Margin.Right, _size.Height + Margin.Bottom); 
        public Size Size { get { return _size; } set {
                var prev = _size;
                _size = value;// new Size(value.Width - Margin.Right, value.Height - Margin.Bottom);

                if (_autoSize)
                {
                    Element.style.width = "auto";
                    Element.style.height = "auto";
                }
                else
                {
                    //Resize
                    Element.style.width = _size.Width + "px";
                    Element.style.height = _size.Height + "px";

                    if (value != prev)
                    {
                        CommonProperties.UpdateSpecifiedBounds(this, this.Location.X, this.Location.Y, value.Width, value.Height);
                        OnResize(EventArgs.Empty);
                    }
                }
            } }

        protected virtual bool GetDefaultTabStop()
        {
            return true;
        }

        protected bool _tabStop;
        public virtual bool TabStop { get { return _tabStop; } set {
                _tabStop = value;
                TabIndex = _tabIndex;
            } }

        protected int _tabIndex;
        public virtual int TabIndex { get { return _tabIndex; } set {
                _tabIndex = value;
                if (TabStop)
                {
                    Element.tabIndex = value;
                }
                else
                {
                    Element.removeAttribute("tabIndex");
                }
            } }
        public virtual string Text { get; set; }

        private Color _backColor;
        public virtual Color BackColor
        {
            get { return _backColor; }
            set
            {
                _backColor = value;
                Element.style.backgroundColor = _backColor.ToHtml();
            }
        }

        private bool _enabled = true;
        public virtual bool Enabled
        {
            get { return _enabled; }
            set
            {
                _enabled = value;
                ApplyDisabled();
            }
        }

        private bool _readonly = false;
        public virtual bool ReadOnly
        {
            get { return _readonly; }
            set
            {
                _readonly = value;
                ApplyReadonly();
            }
        }

        protected void ApplyDisabled(HTMLElement element = null)
        {
            if (element == null)
            {
                element = Element;
            }
            if (Enabled)
            {
                if (element.classList.contains("disabled"))
                {
                    element.classList.remove("disabled");
                    element.removeAttribute("disabled");
                }
            }
            else
            {
                if (!element.classList.contains("disabled"))
                {
                    element.classList.add("disabled");
                    element.setAttribute("disabled", "");
                }
            }
        }

        private Color _foreColor;
        public virtual Color ForeColor
        {
            get { return _foreColor; }
            set
            {
                _foreColor = value;
                Element.style.color = _foreColor.ToHtml();
            }
        }

        protected void ApplyReadonly(HTMLElement element = null)
        {
            if (element == null)
            {
                element = Element;
            }
            if (ReadOnly)
            {
                if (!element.classList.contains("readonly"))
                {
                    element.classList.add("readonly");
                    element.setAttribute("readonly", "");
                }
            }
            else
            {
                if (element.classList.contains("readonly"))
                {
                    element.classList.remove("readonly");
                    element.removeAttribute("readonly");
                }
            }
        }

        protected object _tag;

        /// <summary>
        /// Use Tag as Class Name
        /// </summary>
        public virtual object Tag
        {
            get { return _tag; }
            set
            {
                _tag = value;
                if (_tag is string)
                {
                    Element.className = (_tag + "");
                }
                else
                {
                    Element.className = "";
                }
                ApplyDisabled();
            }
        }

        public ControlCollection Controls { get; }
        private Font _font;
        public virtual Font Font { get { return _font; } set {
                _font = value;
                Font.SetFont(_font, Element);                
            } }
        private bool _autoSize;
        protected bool _init;
        public virtual bool AutoSize { get { return _autoSize; } set {
                if (_init)
                {
                    _autoSize = value;

                    Size = _size;
                }
            } }

        public Font GetCurrentInheritFont()
        {
            if (Font != null)
                return Font;
            if (Parent == null)
                return null;
            return Parent.GetCurrentInheritFont();
        }

        internal HTMLElement Element;
        internal static Control ClickedOnControl;

        static Control()
        {
            document.body.style.overflow = "hidden";
            window.onmousemove = (ev) =>
            {
                if (ClickedOnControl != null)
                {
                    ev.stopPropagation();

                    ClickedOnControl.OnMouseMove(MouseEventArgs.CreateFromMouseEvent(ev, ClickedOnControl));
                }
                return null;
            };

            window.onkeydown = (ev) =>
            {
                if(ev.keyCode == 9)
                {
                    if (Form.ActiveForm != null)
                    {
                        bool NotshiftKey = !ev.shiftKey;

                        var frm = Form.ActiveForm;
                        if (frm.ActiveControl != null)
                        {
                            ev.stopPropagation();
                            ev.preventDefault();
                            var prevActive = frm.ActiveControl;
                            var nextControl = frm.ActiveControl.GetNextControl(frm.ActiveControl, NotshiftKey);
                            if(nextControl != null)
                            {
                                if (prevActive == null || prevActive.Parent != nextControl.Parent)
                                {
                                    nextControl.OnChildGotTabbed();
                                }
                                frm.ActiveControl = nextControl;

                            }
                            else
                            {
                                //Control control = frm;
                                //control = control.TabIndexControl(NotshiftKey, true);
                                //if (control != null)
                                //{
                                //    if (!control.TabStop)
                                //    {
                                //        control = frm.ActiveControl.GetNextControl(control, NotshiftKey);
                                //    }

                                //    if (control != null)
                                //    {
                                //        ev.stopPropagation();
                                //        ev.preventDefault();

                                //        control.OnChildGotTabbed();
                                //        frm.ActiveControl = control;
                                //    }
                                //}
                            }
                        }
                        else
                        {                
                            //TODO - finish tab looping
                            //Control control = frm;
                            //control = control.TabIndexControl(NotshiftKey, true);
                            //if (control != null)
                            //{
                            //    if (!control.TabStop)
                            //    {
                            //        control = frm.ActiveControl.GetNextControl(control, NotshiftKey);
                            //    }

                            //    if (control != null)
                            //    {
                            //        ev.stopPropagation();
                            //        ev.preventDefault();

                            //        control.OnChildGotTabbed();
                            //        frm.ActiveControl = control;                                    
                            //    }
                            //}                            
                        }
                    }
                }
                
                return null;
            };

            window.onmouseup = (ev) =>
            {
                if (ClickedOnControl != null)
                {
                   ev.stopPropagation();

                    ClickedOnControl.OnMouseUp(MouseEventArgs.CreateFromMouseEvent(ev, ClickedOnControl));

                    ClickedOnControl = null;
                }
                return null;
            };
            window.onresize = (ev) =>
            {
                bool containsMin = false;
                foreach (var item in AllOpenedForms())
                {
                    if (item.WindowState == FormWindowState.Maximized)
                        item.SnapToWindow();
                    else if (item.WindowState == FormWindowState.Minimized)
                        containsMin = true;

                }
                if (containsMin)
                    Form.CalculateMinmizedFormsLocation();

                return null;
            };
        }

        public static List<Form> AllOpenedForms()
        {
            var list = new List<Form>();

            foreach (var item in Form._formCollections)
            {
                list.Add(item.FormOwner);
                if (item.VisibleForms != null && item.VisibleForms.Count > 0)
                    list.AddRange(item.VisibleForms);
            }

            return list;
        }

        public Form FindForm()
        {
            if (Parent == null)
                return null;
            if (Parent is Form)
                return Parent.As<Form>();
            else
                return Parent.FindForm();
        }

        internal Control(HTMLElement element)
        {
            Element = element;

            Controls = new ControlCollection(this);

            Element.style.overflow = "hidden";

            Element.style.position = "absolute";
            Element.style.boxSizing = "borderbox";

            Element.style.padding = "0";
           // Element.style.margin = "1px";

            Element.style.fontSize = "inherit";
            Element.style.fontFamily = "inherit";

            Visible = true;

            TabStop = GetDefaultTabStop();

            Element.onclick = (ev) =>
            {
                OnClick(EventArgs.Empty);
                return null;
            };

            Element.onmousedown = (ev) =>
            {
                ClickedOnControl = this;
                ev.stopPropagation();

                var evar = MouseEventArgs.CreateFromMouseEvent(ev, this);

                if (lastMouseDownEvent == null)
                {
                    lastMouseDownEvent = Stopwatch.StartNew();
                    OnMouseDown(evar);                    
                }                    
                else
                {
                    if(lastMouseDownEvent.ElapsedMilliseconds <= Settings.WinFormDoubleClickDelayMS)
                    {
                        lastMouseDownEvent = null;
                        if(!Settings.WinFormOnDoubleClickDontDispatchMouseDown)
                            OnMouseDown(evar);
                        OnMouseDoubleClick(evar);
                    }
                    else
                        OnMouseDown(evar);
                }

                return null;
            };

            Element.onfocus = (ev) =>
            {
                var frm = this.FindForm();
                try
                {
                    frm.ActiveControl = this;
                }
                catch (Exception)
                {

                }

                OnGotFocus(EventArgs.Empty);

                return null;
            };

            Element.onblur = (ev) =>
            {                
                OnLostFocus(EventArgs.Empty);

                return null;
            };

            Element.onmouseleave = (ev) =>
            {
                ev.stopPropagation();

                if (ClickedOnControl == null)
                {                    
                    document.body.style.cursor = null;
                }

                OnMouseLeave(EventArgs.Empty);

                return null;
            };

            Element.onmouseenter = (ev) =>
            {
                ev.stopPropagation();

                OnMouseEnter(EventArgs.Empty);

                return null;
            };

            Element.onmousemove = (ev) =>
            {
                if (ClickedOnControl == null)
                {
                    ev.stopPropagation();

                    OnMouseMove(MouseEventArgs.CreateFromMouseEvent(ev, this));
                }

                return null;
            };
            SetMargins(GetDefaultMargins());
            AutoSizeMode = AutoSizeMode.GrowOnly;
            _init = true;
        }

        protected virtual Padding GetDefaultMargins()
        {
            return new Padding(3);
        }

        internal void SetMargins(Padding margin)
        {
            margin = LayoutUtils.ClampNegativePaddingToZero(margin);
            //if(margin == Padding.Empty)
            //{
            //    Element.style.marginLeft = null;
            //    Element.style.marginTop = null;
            //    Element.style.marginRight = null;
            //    Element.style.marginBottom = null;
            //}
            //else
            //{
            //    Element.style.marginLeft = margin.Left + "px";
            //    Element.style.marginTop = margin.Top + "px";
            //    Element.style.marginRight = margin.Right + "px";
            //    Element.style.marginBottom = margin.Bottom + "px";
            //}
            CommonProperties.SetMargin(this, margin);
        }        

        protected virtual void OnClick(EventArgs e)
        {
            if (Click != null)
                Click(this, e);
        }

        protected virtual void OnMouseDown(MouseEventArgs e)
        {
            if (MouseDown != null)
                MouseDown(this, e);
        }

        protected virtual void OnMouseMove(MouseEventArgs e)
        {
            if (MouseMove != null)
                MouseMove(this, e);
        }

        internal void InvokeLoad()
        {
            OnLoad(EventArgs.Empty);
        }

        protected virtual void OnLoad(EventArgs e)
        {
            document.activeElement?.As<HTMLElement>().blur();

            if (Load != null)
                Load(this, e);
        }

        public event EventHandler Load;        

        protected virtual void OnMouseUp(MouseEventArgs e)
        {
            if (MouseUp != null)
                MouseUp(this, e);
        }
        
        public Padding Margin
        {
            get =>
                CommonProperties.GetMargin(this);
            set
            {                
                //var prevlocation = Location;
                //var prevSize = Size;

                SetMargins(value);

                this.OnMarginChanged(EventArgs.Empty);

                //Location = prevlocation;
                //Size = prevSize;
            }
        }

        protected virtual void OnMarginChanged(EventArgs e)
        {
            if (MarginChanged != null)
            {
                MarginChanged(this, e);
            }
        }

        public event EventHandler MarginChanged;

        public Padding Padding { get; set; }

        public Rectangle Bounds => new Rectangle(Location, Size);

        public ArrangedElementCollection Children => new ArrangedElementCollection(new Collections.ArrayList(this.Controls._items));

        public IArrangedElement Container => this.Parent;

        public Rectangle DisplayRectangle => new Rectangle(0, 0, this.ClientSize.Width, this.ClientSize.Height);
        public virtual Size ClientSize { get { return Size; } set { Size = value; } }

        private bool _participatesInLayout = true;
        public bool ParticipatesInLayout => _participatesInLayout;

        private PropertyStore _properties = new PropertyStore();
        public PropertyStore Properties => _properties;

        public ISite Site { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public event EventHandler Click;
        public event EventHandler Resize;
        public event EventHandler LocationChanged;
        public event EventHandler Move;
        public event EventHandler DockChanged;
        public event MouseEventHandler MouseDown;
        public event MouseEventHandler MouseMove;
        public event MouseEventHandler MouseUp;
        public event MouseEventHandler MouseDoubleClick;
        public event EventHandler Disposed;
        public event EventHandler MouseLeave;
        public event EventHandler MouseEnter;
        public event EventHandler GotFocus;
        public event EventHandler LostFocus;

        private Stopwatch lastMouseDownEvent;

        protected virtual void OnGotFocus(EventArgs e)
        {
            if (GotFocus != null)
                GotFocus(this, e);
        }

        protected virtual void OnLostFocus(EventArgs e)
        {
            if (LostFocus != null)
                LostFocus(this, e);
        }

        protected virtual void OnMouseLeave(EventArgs e)
        {
            if (MouseLeave != null)
                MouseLeave(this, e);
        }

        protected virtual void OnMouseEnter(EventArgs e)
        {
            if (MouseEnter != null)
                MouseEnter(this, e);
        }

        protected virtual void OnMouseDoubleClick(MouseEventArgs e)
        {
            if (MouseDoubleClick != null)
                MouseDoubleClick(this, e);
        }

        protected byte layoutSuspendCount;

        public void SuspendLayout()
        {
            this.layoutSuspendCount = (byte)(this.layoutSuspendCount + 1);
            if (this.layoutSuspendCount == 1)
            {
                this.OnLayoutSuspended();
            }
        }

        internal virtual void OnLayoutSuspended()
        {
        }


        public void ResumeLayout()
        {
            this.ResumeLayout(true);
        }

        internal virtual void OnLayoutResuming(bool performLayout)
        {
            if (this.ParentInternal != null)
            {
                this.ParentInternal.OnChildLayoutResuming(this, performLayout);
            }
        }

        internal virtual void OnChildLayoutResuming(Control child, bool performLayout)
        {
            if (this.ParentInternal != null)
            {
                this.ParentInternal.OnChildLayoutResuming(child, performLayout);
            }
        }

        public void ResumeLayout(bool performLayout)
        {
            bool flag = false;
            if (this.layoutSuspendCount > 0)
            {
                if (this.layoutSuspendCount == 1)
                {
                    this.layoutSuspendCount = (byte)(this.layoutSuspendCount + 1);
                    try
                    {
                        this.OnLayoutResuming(performLayout);
                    }
                    finally
                    {
                        this.layoutSuspendCount = (byte)(this.layoutSuspendCount - 1);
                    }
                }
                this.layoutSuspendCount = (byte)(this.layoutSuspendCount - 1);
                if (((this.layoutSuspendCount == 0) && this.GetState(0x200)) & performLayout)
                {
                    this.PerformLayout();
                    flag = true;
                }
            }
            if (!flag)
            {
                this.SetState2(0x40, true);
            }
            if (!performLayout)
            {
                this.OnInitLayout();
                CommonProperties.xClearPreferredSizeCache(this);
                ControlCollection controls = Controls;
                if (controls != null)
                {
                    for (int i = 0; i < controls.Count; i++)
                    {
                        controls[i].OnInitLayout();
                        this.LayoutEngine.InitLayout(controls[i], BoundsSpecified.All);
                        CommonProperties.xClearPreferredSizeCache(controls[i]);
                    }
                }
            }
        }
        private static readonly int PropControlsCollection = PropertyStore.CreateKey();
        internal void SetState2(int flag, bool value)
        {
            this.state2 = value ? (this.state2 | flag) : (this.state2 & ~flag);
        }

        public DefaultLayout LayoutEngine = new DefaultLayout();

        public EventHandler LayoutChanged;
        protected virtual void OnLayout(LayoutEventArgs levent)
        {
            //if (this.IsActiveX)
            //{
            //    this.ActiveXViewChanged();
            //}
            // LayoutEventHandler handler = (LayoutEventHandler)base.Events[EventLayout];
            if (LayoutChanged != null)
            {
                LayoutChanged(this, levent);
            }
            if (this.LayoutEngine.Layout(this, levent) && (this.ParentInternal != null))
            {
                this.ParentInternal.SetState(0x800000, true);
            }
        }


        internal void SetState(int flag, bool value)
        {
            this.state = value ? (this.state | flag) : (this.state & ~flag);
        }
        private bool _disposing = false;

        public bool Disposing => _disposing;
        internal bool GetAnyDisposingInHierarchy()
        {
            Control parent = this;
            while (parent != null)
            {
                if (parent.Disposing)
                {
                    return true;
                }
                parent = parent.Parent;
            }
            return false;
        }

        internal bool CacheTextInternal;
        internal void PerformLayout(LayoutEventArgs args)
        {
            if (!this.GetAnyDisposingInHierarchy())
            {
                if (this.layoutSuspendCount > 0)
                {
                    this.SetState(0x200, true);
                    if ((this.cachedLayoutEventArgs == null) || (this.GetState2(0x40) && (args != null)))
                    {
                        this.cachedLayoutEventArgs = args;
                        if (this.GetState2(0x40))
                        {
                            this.SetState2(0x40, false);
                        }
                    }
                    this.LayoutEngine.ProcessSuspendedLayoutEventArgs(this, args);
                }
                else
                {
                    this.layoutSuspendCount = 1;
                    try
                    {
                        this.CacheTextInternal = true;
                        this.OnLayout(args);
                    }
                    finally
                    {
                        this.CacheTextInternal = false;
                        this.SetState(0x800200, false);
                        this.layoutSuspendCount = 0;
                        if ((this.ParentInternal != null) && this.ParentInternal.GetState(0x800000))
                        {
                            LayoutTransaction.DoLayout(this.ParentInternal, this, PropertyNames.PreferredSize);
                        }
                    }
                }
            }
        }

        internal LayoutEventArgs cachedLayoutEventArgs;

        public virtual void OnInitLayout()
        {

        }

        public virtual void PerformLayout()
        {
            if (this.cachedLayoutEventArgs != null)
            {
                this.PerformLayout(this.cachedLayoutEventArgs);
                this.cachedLayoutEventArgs = null;
                this.SetState2(0x40, false);
            }
            else
            {
                this.PerformLayout(null, null);
            }
        }

        public int state;
        public int state2;

        internal bool GetState(int flag) =>
    ((this.state & flag) > 0);
        private bool GetState2(int flag) =>
    ((this.state2 & flag) > 0);


        internal Size ApplySizeConstraints(Size proposedSize) =>
    this.ApplyBoundsConstraints(0, 0, proposedSize.Width, proposedSize.Height).Size;

        internal virtual Size GetPreferredSizeCore(Size proposedSize) =>
    CommonProperties.GetSpecifiedBounds(this).Size;


        public virtual Size GetPreferredSize(Size proposedSize)
        {
            Size preferredSizeCore;
            if (this.GetState(0x1800))
            {
                return CommonProperties.xGetPreferredSizeCache(this);
            }
            proposedSize = LayoutUtils.ConvertZeroToUnbounded(proposedSize);
            proposedSize = this.ApplySizeConstraints(proposedSize);
            if (this.GetState2(0x800))
            {
                Size size2 = CommonProperties.xGetPreferredSizeCache(this);
                if (!size2.IsEmpty && (proposedSize == LayoutUtils.MaxSize))
                {
                    return size2;
                }
            }
            this.CacheTextInternal = true;
            try
            {
                preferredSizeCore = this.GetPreferredSizeCore(proposedSize);
            }
            finally
            {
                this.CacheTextInternal = false;
            }
            preferredSizeCore = this.ApplySizeConstraints(preferredSizeCore);
            if (this.GetState2(0x800) && (proposedSize == LayoutUtils.MaxSize))
            {
                CommonProperties.xSetPreferredSizeCache(this, preferredSizeCore);
            }
            return preferredSizeCore;
        }



        internal virtual Rectangle ApplyBoundsConstraints(int suggestedX, int suggestedY, int proposedWidth, int proposedHeight)
        {
            if (!(this.MaximumSize != Size.Empty) && !(this.MinimumSize != Size.Empty))
            {
                return new Rectangle(suggestedX, suggestedY, proposedWidth, proposedHeight);
            }
            Size b = LayoutUtils.ConvertZeroToUnbounded(this.MaximumSize);
            Rectangle rectangle = new Rectangle(suggestedX, suggestedY, 0, 0)
            {
                Size = LayoutUtils.IntersectSizes(new Size(proposedWidth, proposedHeight), b)
            };
            rectangle.Size = LayoutUtils.UnionSizes(rectangle.Size, this.MinimumSize);
            return rectangle;
        }


        public void PerformLayout(IArrangedElement affectedElement, string propertyName)
        {
            PerformLayout(new LayoutEventArgs(affectedElement, propertyName));            
        }

        [EditorBrowsable(EditorBrowsableState.Advanced)]
        protected virtual void SetBoundsCore(int x, int y, int width, int height, BoundsSpecified specified)
        {
            if (this.ParentInternal != null)
            {
                this.ParentInternal.SuspendLayout();
            }
            try
            {
                if (((this.Location.X != x) || (this.Location.Y != y)) || ((this.Width != width) || (this.Height != height)))
                {
                    CommonProperties.UpdateSpecifiedBounds(this, x, y, width, height, specified);
                    Rectangle rectangle = this.ApplyBoundsConstraints(x, y, width, height);
                    
                   

                    //y = rectangle.Y;
                    //if (!this.IsHandleCreated)
                    //{
                    //    this.UpdateBounds(x, y, width, height);
                    //}
                    if (!this.GetState(0x10000))
                    {
                        Location = rectangle.Location;
                        Size = rectangle.Size;


                        //int flags = 20;
                        //if ((this.x == x) && (this.y == y))
                        //{
                        //    flags |= 2;
                        //}
                        //if ((this.width == width) && (this.height == height))
                        //{
                        //    flags |= 1;
                        //}
                        this.OnBoundsUpdate(Location.X, Location.Y, Size.Width, Size.Height);
                        //SafeNativeMethods.SetWindowPos(new HandleRef(this.window, this.Handle), NativeMethods.NullHandleRef, x, y, width, height, flags);
                    }
                }
            }
            finally
            {
              //  this.InitScaling(specified);
                if (this.ParentInternal != null)
                {
                    CommonProperties.xClearPreferredSizeCache(this.ParentInternal);
                    this.ParentInternal.LayoutEngine.InitLayout(this, specified);
                    this.ParentInternal.ResumeLayout(true);
                }
            }
        }

        internal virtual void OnBoundsUpdate(int x, int y, int width, int height)
        {
        }


        void IArrangedElement.SetBounds(Rectangle bounds, BoundsSpecified specified)
        {
            //ISite site = this.Site;
            //IComponentChangeService service = null;
            //PropertyDescriptor member = null;
            //PropertyDescriptor descriptor2 = null;
            //bool flag = false;
            //bool flag2 = false;
            //if ((site != null) && site.DesignMode)
            //{
            //    service = (IComponentChangeService)site.GetService(typeof(IComponentChangeService));
            //    if (service != null)
            //    {
            //        member = TypeDescriptor.GetProperties(this)[PropertyNames.Size];
            //        descriptor2 = TypeDescriptor.GetProperties(this)[PropertyNames.Location];
            //        try
            //        {
            //            if (((member != null) && !member.IsReadOnly) && ((bounds.Width != this.Width) || (bounds.Height != this.Height)))
            //            {
            //                //if (!(site is INestedSite))
            //                //{
            //                //    service.OnComponentChanging(this, member);
            //                //}
            //                flag = true;
            //            }
            //            if (((descriptor2 != null) && !descriptor2.IsReadOnly) && ((bounds.X != this.x) || (bounds.Y != this.y)))
            //            {
            //                //if (!(site is INestedSite))
            //                //{
            //                //    service.OnComponentChanging(this, descriptor2);
            //                //}
            //                flag2 = true;
            //            }
            //        }
            //        catch (InvalidOperationException)
            //        {
            //        }
            //    }
            //}
            this.SetBoundsCore(bounds.X, bounds.Y, bounds.Width, bounds.Height, specified);
            //if ((site != null) && (service != null))
            //{
            //    try
            //    {
            //        if (flag)
            //        {
            //            service.OnComponentChanged(this, member, null, null);
            //        }
            //        if (flag2)
            //        {
            //            service.OnComponentChanged(this, descriptor2, null, null);
            //        }
            //    }
            //    catch (InvalidOperationException)
            //    {
            //    }
            //}
        }

        //public void SetBounds(Rectangle rectange, BoundsSpecified specified)
        //{
        //    SetBounds(rectange.X, rectange.Y, rectange.Width, rectange.Height, specified);
        //}

        public void SetBounds(int x, int y, int width, int height, BoundsSpecified specified)
        {
            if ((specified & BoundsSpecified.X) == BoundsSpecified.None)
            {
                x = this.Location.X;
            }
            if ((specified & BoundsSpecified.Y) == BoundsSpecified.None)
            {
                y = this.Location.Y;
            }
            if ((specified & BoundsSpecified.Width) == BoundsSpecified.None)
            {
                width = this.Size.Width;
            }
            if ((specified & BoundsSpecified.Height) == BoundsSpecified.None)
            {
                height = this.Size.Height;
            }
            if (((this.Location.X != x) || (this.Location.Y != y)) || ((this.Size.Width != width) || (this.Size.Height != height)))
            {
                this.SetBoundsCore(x, y, width, height, specified);
                LayoutTransaction.DoLayout(this.ParentInternal, this, PropertyNames.Bounds);                
            }
            else
            {
                //this.InitScaling(specified);
            }
        }

        public void Dispose()
        {
            if (_disposing)
                return;
            _disposing = true;

            if (Disposed != null)
                Disposed(this, EventArgs.Empty);

            foreach (var item in Controls)
            {
                item?.Dispose();
            }
        }
    }
}
