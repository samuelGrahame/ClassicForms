#if BRIDGE
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace System.Data
{
    public enum DataType
    {
        Object,
        DateTime,
        String,
        Integer,
        Long,
        Float,
        Double,
        Decimal,
        Bool,
        Byte,
        Short
    }

    public class DataTable
    {

        public static bool DynamicGetValue = false;
        public List<DataColumn> Columns = new List<DataColumn>();
        public List<int> _searchResults = new List<int>();

        public bool _searchActive = false;
        private string _searchString;

        public string SearchString
        {
            get { return _searchString; }
        }

        public void Search(string searchData, DataGridView view)
        {
            if (view == null)
            {
                _searchString = string.Empty;
                _searchActive = false;
                _searchResults = new List<int>();
                RequireOnDataChangeEvent();

                return;
            }
            _searchString = searchData.ToLower();
            _searchActive = !string.IsNullOrWhiteSpace(_searchString);


            if (_searchActive)
            {
                _searchResults = new List<int>();
                int count = view.ColumnCount();

                var UseFormat = new List<Tuple<bool, string>>();
                for (int x = 0; x < count; x++)
                {
                    var gridCol = view.GetColumn(x);
                    if (gridCol.Visible)
                    {
                        string FormatString = gridCol.FormatString;
                        UseFormat.Add(new Tuple<bool, string>(string.IsNullOrWhiteSpace(FormatString), FormatString));
                    }
                    else
                    {
                        UseFormat.Add(new Tuple<bool, string>(false, string.Empty));
                    }
                }

                for (int y = 0; y < _RowCount; y++)
                {
                    for (int x = 0; x < count; x++)
                    {
                        var gridCol = view.GetColumn(x);
                        if (gridCol.Visible)
                        {
                            var Column = gridCol.Column;
                            var helperWhatToDo = UseFormat[x];

                            string value;

                            if (helperWhatToDo.Item1)
                            {
                                value = Column.GetDisplayValue(y);
                            }
                            else
                            {
                                value = Column.GetDisplayValue(y, helperWhatToDo.Item2);
                            }

                            if (!string.IsNullOrWhiteSpace(value) && value.ToLower().StartsWith(searchData))
                            {
                                _searchResults.Add(y);
                                break;
                            }
                        }
                    }
                }
            }
            else
            {
                _searchResults = new List<int>();
            }

            RequireOnDataChangeEvent();
        }


        public event EventHandler OnDataSourceChanged = null;

        private bool _inDataChange = false;
        private bool _requestedOnDataChange = false;

        public void RequireOnDataChangeEvent()
        {
            if (!_inDataChange)
            {
                _requestedOnDataChange = false;
                if (OnDataSourceChanged != null)
                    OnDataSourceChanged(this, null);
            }
            else
            {
                _requestedOnDataChange = true;
            }
        }

        public void ClearRows()
        {
            _RowCount = 0;
            for (int i = 0; i < Columns.Count; i++)
            {
                ClearCells(Columns[i]);
            }
        }

        private int _ColCount;

        public int ColumnCount
        {
            get
            {
                return _ColCount;
            }
        }

        public int _RowCount;

        public int RowCount
        {
            get
            {
                if (_searchActive)
                {
                    return _searchResults.Count;
                }
                return _RowCount;
            }
        }

        private List<DataRow> NewRows = new List<DataRow>();

        public void ClearCells<T>(DataColumn _column)
        {
            dynamic _col = _column;
            _col.Cells = new List<T>();
        }

        public void ClearCells(DataColumn _column)
        {
            switch (_column.DataType)
            {
                default:
                case DataType.Object:
                    ClearCells<object>(_column);
                    break;

                case DataType.DateTime:
                    ClearCells<DateTime?>(_column);
                    break;

                case DataType.String:
                    ClearCells<string>(_column);
                    break;

                case DataType.Integer:
                    ClearCells<int?>(_column);
                    break;

                case DataType.Long:
                    ClearCells<long?>(_column);
                    break;

                case DataType.Float:
                    ClearCells<float?>(_column);
                    break;

                case DataType.Double:
                    ClearCells<double?>(_column);
                    break;

                case DataType.Decimal:
                    ClearCells<decimal?>(_column);
                    break;

                case DataType.Bool:
                    ClearCells<bool?>(_column);
                    break;

                case DataType.Byte:
                    ClearCells<byte?>(_column);
                    break;

                case DataType.Short:
                    ClearCells<short?>(_column);
                    break;
            }
            RequireOnDataChangeEvent();
        }

        public DataColumn GetColumnByDataType(DataType type = DataType.Object)
        {
            switch (type)
            {
                default:
                case DataType.Object:
                    return new DataColumnObject();

                case DataType.DateTime:
                    return new DataColumnDateTime();

                case DataType.String:
                    return new DataColumnString();

                case DataType.Integer:
                    return new DataColumnInteger();

                case DataType.Long:
                    return new DataColumnLong();

                case DataType.Float:
                    return new DataColumnFloat();

                case DataType.Double:
                    return new DataColumnDouble();

                case DataType.Decimal:
                    return new DataColumnDecimal();

                case DataType.Bool:
                    return new DataColumnBool();

                case DataType.Byte:
                    return new DataColumnByte();

                case DataType.Short:
                    return new DataColumnShort();
            }
        }

        public void AddColumn(string fieldName, DataType type = DataType.Object)
        {
            var col = GetColumnByDataType(type);
            col.FieldName = fieldName;

            Columns.Add(col);
            _ColCount = Columns.Count;

            RequireOnDataChangeEvent();
        }

        public DataRow this[int rowIndex]
        {
            get
            {
                return new DataRow(this, rowIndex);
            }
        }

        public void BeginNewRow(int EstimatedNewRows)
        {
            NewRows = new List<DataRow>(EstimatedNewRows);
            BeginDataUpdate();
        }

        public DataRow AddRow()
        {
            var dr = new DataRow(this, _RowCount++);
            int colLength = Columns.Count;
            for (int x = 0; x < colLength; x++)
            {
                dynamic col = Columns[x];
                col.Cells.add(null);
            }

            RequireOnDataChangeEvent();

            return dr;
        }

        public void AddRow(params object[] row)
        {
            if (row.Length == ColumnCount)
            {
                _RowCount++;
                int colLength = Columns.Count;
                for (int x = 0; x < colLength; x++)
                {
                    dynamic col = Columns[x];
                    col.Cells.add(row[x]);
                }
                RequireOnDataChangeEvent();
            }
        }

        public DataRow NewRow()
        {
            var dr = new DataRow(this);

            NewRows.Add(dr);

            return dr;
        }

        public void AcceptNewRows()
        {
            if (NewRows == null || NewRows.Count == 0)
                return;
            int colLength = Columns.Count;
            int rowLength = NewRows.Count;
            int colN1 = colLength - 1;

            for (int x = 0; x < colLength; x++)
            {
                dynamic col = Columns[x];
                var DataCells = new object[rowLength];

                if (x == 0)
                {
                    for (int y = 0; y < rowLength; y++)
                    {
                        NewRows[y].RowIndex = _RowCount++;
                        DataCells[y] = NewRows[y].batchData[x];
                    }
                }
                else if (x == colN1)
                {
                    for (int y = 0; y < rowLength; y++)
                    {
                        DataCells[y] = NewRows[y].batchData[x];
                        NewRows[y].batchData = null;
                    }
                }
                else
                {
                    for (int y = 0; y < rowLength; y++)
                    {
                        DataCells[y] = NewRows[y].batchData[x];
                    }
                }
                col.Cells.AddRange(DataCells);
            }
            NewRows.Clear();

            EndDataUpdate();
        }

        public void BeginDataUpdate()
        {
            _inDataChange = true;
            _requestedOnDataChange = false;
        }

        public void EndDataUpdate()
        {
            _inDataChange = false;
            if (_requestedOnDataChange)
            {
                _requestedOnDataChange = false;
                if (OnDataSourceChanged != null)
                    OnDataSourceChanged(this, null);
            }
        }

        public void RejectNewRows()
        {
            NewRows.Clear();
            _inDataChange = false;
        }
    }

    public class DataRow
    {
        public DataTable ParentTable;
        public int RowIndex = -1;
        public object[] batchData;

        public DataRow GetOfflineDataRow()
        {
            var dr = new DataRow(ParentTable.ColumnCount);
            var data = new object[ParentTable.ColumnCount];
            for (int i = 0; i < ParentTable.ColumnCount; i++)
            {
                data[i] = this[i];
            }
            dr.batchData = data;
            return dr;
        }

        public DataRow()
        {
        }

        public DataRow(int columnLength)
        {
            ParentTable = null;
            RowIndex = -1;
            batchData = new object[columnLength];
        }

        public DataRow(DataTable parentTable, int rowIndex = -1)
        {
            ParentTable = parentTable;
            RowIndex = rowIndex;
            if (rowIndex == -1)
            {
                batchData = new object[parentTable.ColumnCount];
            }
        }

        public void SetValue(string fieldName, object value)
        {
            for (int i = 0; i < ParentTable.ColumnCount; i++)
            {
                if (ParentTable.Columns[i].FieldName == fieldName)
                {
                    if (RowIndex == -1)
                    {
                        if (batchData[i] != value)
                        {
                            batchData[i] = value;
                            ParentTable.RequireOnDataChangeEvent();
                        }

                        return;
                    }
                    dynamic col = ParentTable.Columns[i];
                    if (col.Cells._items[RowIndex] != value)
                    {
                        col.Cells._items[RowIndex] = value;
                        ParentTable.RequireOnDataChangeEvent();
                    }
                    return;
                }
            }
        }

        public object GetValue(string fieldName)
        {
            for (int i = 0; i < ParentTable.ColumnCount; i++)
            {
                if (ParentTable.Columns[i].FieldName == fieldName)
                {
                    if (RowIndex == -1)
                    {
                        return batchData[i];
                    }
                    dynamic col = ParentTable.Columns[i];
                    return col.Cells._items[RowIndex];
                }
            }
            return null;
        }

        public object GetValue(int columnIndex)
        {
            if (RowIndex == -1)
            {
                return batchData[columnIndex];
            }
            dynamic col = ParentTable.Columns[columnIndex];
            return col.Cells._items[RowIndex];
        }

        public void SetValue(int columnIndex, object value)
        {
            if (RowIndex == -1)
            {
                if (batchData[columnIndex] != value)
                {
                    batchData[columnIndex] = value;
                    ParentTable.RequireOnDataChangeEvent();
                }

                return;
            }
            dynamic col = ParentTable.Columns[columnIndex];
            if (col.Cells._items[RowIndex] != value)
            {
                col.Cells._items[RowIndex] = value;
                ParentTable.RequireOnDataChangeEvent();
            }
        }

        public object this[int columnIndex]
        {
            get
            {
                return GetValue(columnIndex);
            }
            set
            {
                SetValue(columnIndex, value);
            }
        }
    }

    public class DataColumn
    {
        public string FieldName;
        public DataType DataType;
        public dynamic Self;

        public DataColumn()
        {
            Self = this;
        }

        //public List<object> Cells = new List<object>();
        public string GetDisplayValue(int rowIndex, string formatString)
        {
            switch (DataType)
            {
                default:
                case DataType.Object:
                    return string.Format(formatString, (((DataColumnObject)this).Cells[rowIndex]));

                case DataType.DateTime:
                    dynamic obj = ((DataColumnDateTime)this).Cells[rowIndex];
                    if (obj == null)
                    {
                        return string.Empty;
                    }
                    DateTime d;
                    if (obj is DateTime)
                    {
                        d = (DateTime)obj;
                        if (d == DateTime.MinValue)
                            return string.Empty;
                        return string.Format(formatString, d);
                    }
                    if (DateTime.TryParse(obj, out d))
                    {
                        if (d == DateTime.MinValue)
                            return string.Empty;
                        return string.Format(formatString, d);
                    }
                    var str = obj as string;
                    if (string.IsNullOrWhiteSpace(str))
                    {
                        return string.Empty;
                    }
                    return string.Format(formatString, str);

                case DataType.String:
                    return string.Format(formatString, ((DataColumnString)this).Cells[rowIndex]);

                case DataType.Integer:
                    return string.Format(formatString, ((DataColumnInteger)this).Cells[rowIndex]);

                case DataType.Long:
                    return string.Format(formatString, ((DataColumnLong)this).Cells[rowIndex]);

                case DataType.Float:
                    return string.Format(formatString, ((DataColumnFloat)this).Cells[rowIndex]);

                case DataType.Double:
                    return string.Format(formatString, ((DataColumnDouble)this).Cells[rowIndex]);

                case DataType.Decimal:
                    return string.Format(formatString, ((DataColumnDecimal)this).Cells[rowIndex]);

                case DataType.Byte:
                    return string.Format(formatString, ((DataColumnByte)this).Cells[rowIndex]);

                case DataType.Short:
                    return string.Format(formatString, ((DataColumnShort)this).Cells[rowIndex]);

                case DataType.Bool:
                    return string.Format(formatString, ((DataColumnBool)this).Cells[rowIndex]);
            }
        }

        public object GetCellValue(int rowIndex)
        {
            if (Self.Cells.Count <= rowIndex)
            {
                return null;
            }

            switch (DataType)
            {
                default:
                case DataType.Object:
                    return ((DataColumnObject)this).Cells[rowIndex];

                case DataType.DateTime:
                    return ((DataColumnDateTime)this).Cells[rowIndex];

                case DataType.String:
                    return ((DataColumnString)this).Cells[rowIndex];

                case DataType.Integer:
                    return (((DataColumnInteger)this).Cells[rowIndex]);

                case DataType.Long:
                    return (((DataColumnLong)this).Cells[rowIndex]);

                case DataType.Float:
                    return (((DataColumnFloat)this).Cells[rowIndex]);

                case DataType.Double:
                    return (((DataColumnDouble)this).Cells[rowIndex]);

                case DataType.Decimal:
                    return (((DataColumnDecimal)this).Cells[rowIndex]);

                case DataType.Byte:
                    return (((DataColumnByte)this).Cells[rowIndex]);

                case DataType.Bool:
                    return (((DataColumnBool)this).Cells[rowIndex]);

                case DataType.Short:
                    return (((DataColumnShort)this).Cells[rowIndex]);
            }
        }


        public string GetDisplayValue(int rowIndex)
        {
            if (Self.Cells.Count <= rowIndex)
            {
                return null;
            }
            if (DataTable.DynamicGetValue)
                return this.ToDynamic().Cells.getItem(rowIndex);
            else
            {
                switch (DataType)
                {
                    default:
                    case DataType.Object:
                        return Convert.ToString(((DataColumnObject)this).Cells[rowIndex]);

                    case DataType.DateTime:
                        return Convert.ToString(((DataColumnDateTime)this).Cells[rowIndex]);

                    case DataType.String:
                        return ((DataColumnString)this).Cells[rowIndex];

                    case DataType.Integer:
                        return Convert.ToString(((DataColumnInteger)this).Cells[rowIndex]);

                    case DataType.Long:
                        return Convert.ToString(((DataColumnLong)this).Cells[rowIndex]);

                    case DataType.Float:
                        return Convert.ToString(((DataColumnFloat)this).Cells[rowIndex]);

                    case DataType.Double:
                        return Convert.ToString(((DataColumnDouble)this).Cells[rowIndex]);

                    case DataType.Decimal:
                        return Convert.ToString(((DataColumnDecimal)this).Cells[rowIndex]);

                    case DataType.Byte:
                        return Convert.ToString(((DataColumnByte)this).Cells[rowIndex]);

                    case DataType.Bool:
                        return Convert.ToString(((DataColumnBool)this).Cells[rowIndex]);

                    case DataType.Short:
                        return Convert.ToString(((DataColumnShort)this).Cells[rowIndex]);
                }
            }


        }
    }

    public class DataColumnString : DataColumn
    {
        public DataColumnString()
        {
            base.DataType = DataType.String;
        }

        public List<string> Cells = new List<string>();
    }

    public class DataColumnDateTime : DataColumn
    {
        public DataColumnDateTime()
        {
            base.DataType = DataType.DateTime;
        }

        public List<DateTime?> Cells = new List<DateTime?>();
    }

    public class DataColumnInteger : DataColumn
    {
        public DataColumnInteger()
        {
            base.DataType = DataType.Integer;
        }

        public List<int?> Cells = new List<int?>();
    }

    public class DataColumnLong : DataColumn
    {
        public DataColumnLong()
        {
            base.DataType = DataType.Long;
        }

        public List<long?> Cells = new List<long?>();
    }

    public class DataColumnObject : DataColumn
    {
        public DataColumnObject()
        {
            base.DataType = DataType.Object;
        }

        public List<object> Cells = new List<object>();
    }

    public class DataColumnDecimal : DataColumn
    {
        public DataColumnDecimal()
        {
            base.DataType = DataType.Decimal;
        }

        public List<decimal?> Cells = new List<decimal?>();
    }

    public class DataColumnFloat : DataColumn
    {
        public DataColumnFloat()
        {
            base.DataType = DataType.Float;
        }

        public List<float?> Cells = new List<float?>();
    }

    public class DataColumnDouble : DataColumn
    {
        public DataColumnDouble()
        {
            base.DataType = DataType.Double;
        }

        public List<double?> Cells = new List<double?>();
    }

    public class DataColumnBool : DataColumn
    {
        public DataColumnBool()
        {
            base.DataType = DataType.Bool;
        }

        public List<bool?> Cells = new List<bool?>();
    }

    public class DataColumnByte : DataColumn
    {
        public DataColumnByte()
        {
            base.DataType = DataType.Byte;
        }

        public List<byte?> Cells = new List<byte?>();
    }

    public class DataColumnShort : DataColumn
    {
        public DataColumnShort()
        {
            base.DataType = DataType.Short;
        }

        public List<short?> Cells = new List<short?>();
    }
}
#endif