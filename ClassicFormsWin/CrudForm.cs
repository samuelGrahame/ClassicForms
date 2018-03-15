using ClassicForms;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Drawing;

namespace ClassicForms
{
    public class CrudForm : Form
    {
        public ICrud CrudObject;               

        private bool _isMouseDown = false;
        private Point _mouseDownPoint;
        private Point _location;

        public virtual T GetCrud<T>() where T : ICrud, new()
        {
            return (T)CrudObject;
        }

        protected override void OnMouseDown(MouseEventArgs e)
        {
            base.OnMouseDown(e);
            _mouseDownPoint = e.Location;
            _location = this.Location;
            _isMouseDown = true;

        }

        protected override void OnMouseMove(MouseEventArgs e)
        {
            base.OnMouseMove(e);
            if (_isMouseDown)
            {
                this.Location = new Point(_location.X + (e.Location.X - _mouseDownPoint.X), _location.Y + (e.Location.Y - _mouseDownPoint.Y));
                _mouseDownPoint = e.Location;
                _location = this.Location;
            }
        }

        protected override void OnMouseUp(MouseEventArgs e)
        {
            base.OnMouseUp(e);

            _isMouseDown = false;
        }        
    }
}
