using System;
using System.ComponentModel;

namespace System.Windows.Forms
{

    public sealed class LayoutEventArgs : EventArgs
    {
        private readonly IComponent affectedComponent;
        private readonly string affectedProperty;

        public LayoutEventArgs(IComponent affectedComponent, string affectedProperty)
        {
            this.affectedComponent = affectedComponent;
            this.affectedProperty = affectedProperty;
        }

        public LayoutEventArgs(Control affectedControl, string affectedProperty) : this((IComponent)affectedControl, affectedProperty)
        {
        }

        public IComponent AffectedComponent =>
            this.affectedComponent;

        public Control AffectedControl =>
            (this.affectedComponent as Control);

        public string AffectedProperty =>
            this.affectedProperty;
    }
}
