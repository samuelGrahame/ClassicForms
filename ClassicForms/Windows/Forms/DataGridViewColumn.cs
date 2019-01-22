using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Retyped.dom;

namespace System.Windows.Forms
{
    public enum GridViewSortMode
    {
        None,
        Asc,
        Desc
    }

    public class GridViewCellApparence
    {
        public bool IsBold = false;
        public string Alignment = "left";
        public string Forecolor = null;
        public string Backcolor = null;


        public GridViewCellApparence()
        {
        }

        public GridViewCellApparence(bool isBold)
        {
            IsBold = isBold;
        }

        public GridViewCellApparence(bool isBold, string alignment)
        {
            IsBold = isBold;
            Alignment = alignment;
        }

        public GridViewCellApparence(bool isBold, string alignment, string forecolor)
        {
            IsBold = isBold;
            Alignment = alignment;
            Forecolor = forecolor;
        }
    }

    public abstract class GridViewCellDisplay
    {
        public bool UseDefaultElement;

        public virtual HTMLElement OnCreate(DataGridView gridView, int dataRowIndex, int columnIndex)
        {
            return null;
        }

        public virtual HTMLElement OnCreateDefault(HTMLElement originalElement, DataGridView gridView, int dataRowIndex, int columnIndex)
        {
            return originalElement;
        }
    }

    public class DataGridViewColumn
    {
        public string Name;
        public DataColumn Column;
        public DataGridView View;
        public string HeaderText;
        public bool Visible = true;
        public float CachedX;
        public string FormatString = string.Empty;
        public GridViewCellApparence HeadingApparence = new GridViewCellApparence();
        public GridViewCellApparence BodyApparence = new GridViewCellApparence();
        public GridViewCellDisplay CellDisplay = null;
        public GridViewSortMode SortedMode = GridViewSortMode.None;

        private string cfieldName;

        public string DataPropertyName
        {
            get
            {
                if (Column == null)
                    return cfieldName;
                cfieldName = Column.FieldName;
                return Column.FieldName;
            }
            set
            {
                if (Column != null)
                {
                    cfieldName = Column.FieldName;
                }
                else
                {
                    cfieldName = value;
                }
            }
        }

        //public TextInput FilterEdit = null;

        private object filterValue;

        public object FilterValue
        {
            get { return filterValue; }
            set
            {
                if (filterValue != value)
                {
                    filterValue = value;
                    if (View.ShowAutoFilterRow)
                    {
                        View.CalculateVisibleRows();
                    }
                }
            }
        }

        public bool ValueMatchFilter(int index)
        {
            if (filterValue == null)
                return true;

            if (Column == null)
                return false;

            object abc = GetDisplayValueByDataRowHandle(index);

            

            switch (Column.GetTypeCode())
            {
                default:
                case DataTypeCode.Object:
                case DataTypeCode.Integer:
                case DataTypeCode.Long:
                case DataTypeCode.Float:
                case DataTypeCode.Double:
                case DataTypeCode.Decimal:
                case DataTypeCode.Bool:
                case DataTypeCode.Byte:
                case DataTypeCode.Short:
                    return abc == filterValue;

                case DataTypeCode.DateTime:
                case DataTypeCode.String:
                    return (abc + "").ToLower().StartsWith((filterValue + "").ToLower());
            }
        }

        public bool AllowEdit = true;
        public bool ReadOnly = false;

        //public DataGridViewColumnCustomEditor CustomEditor;

        //public TextInput GetNewInput()
        //{
        //    TextInput input = null;
        //    if (CustomEditor != null)
        //    {
        //        input = CustomEditor.GetNewEditor();
        //    }

        //    if (input == null)
        //    {
        //        if (Column.DataType == DataType.Object)
        //            return null;

        //        switch (Column.DataType)
        //        {
        //            case DataType.Integer:
        //            case DataType.Long:
        //            case DataType.Float:
        //            case DataType.Double:
        //            case DataType.Decimal:
        //            case DataType.Bool:
        //            case DataType.Byte:
        //            case DataType.Short:
        //                return new NumberInput();
        //            case DataType.DateTime:
        //                return new DateInput();
        //            default:
        //            case DataType.String:
        //                return new TextInput();
        //        }
        //    }

        //    return input;
        //}

        public int GetDataColumnIndex()
        {
            var length = View.DataSource.Columns.Count;
            for (int i = 0; i < length; i++)
            {
                if (View.DataSource.Columns[i] == Column)
                    return i;
            }
            return -1;
        }

        public string GetDisplayValueByDataRowHandle(int RowHandle)
        {
            if (Column == null)
                return string.Empty;

            if (string.IsNullOrWhiteSpace(FormatString))
            {
                return Column.GetDisplayValue(RowHandle);
            }
            else
            {
                return Column.GetDisplayValue(RowHandle, FormatString);
            }
        }

        public object GetCellValueByDataRowHandle(int RowHandle)
        {
            if (Column == null)
                return null;
            return Column.GetCellValue(RowHandle);
        }

        public object GetCellValue(int RowHandle)
        {
            if (Column == null)
                return null;

            if (View.VisibleRowHandles != null)
            {
                RowHandle = View.VisibleRowHandles[RowHandle];
            }

            return Column.GetCellValue(RowHandle);
        }

        public string GetDisplayValue(int RowHandle)
        {
            if (Column == null)
                return null;

            if (View.VisibleRowHandles != null)
            {
                RowHandle = View.VisibleRowHandles[RowHandle];
            }

            if (string.IsNullOrWhiteSpace(FormatString))
            {
                return Column.GetDisplayValue(RowHandle);
            }
            else
            {
                return Column.GetDisplayValue(RowHandle, FormatString);
            }
        }

        private int _width;

        public int Width
        {
            get
            {
                return _width;
            }
            set
            {
                if (value < 24)
                    value = 24;
                if (_width != value)
                {
                    _width = value;
                    View.RenderGrid();
                }
            }
        }

        public DataGridViewColumn(DataGridView view, int width = 100)
        {
            View = view;
            _width = width;
        }
    }
}
