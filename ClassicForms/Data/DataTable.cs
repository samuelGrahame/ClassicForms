#if BRIDGE
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace System.Data
{
    public enum DataTypeCode
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

        public DataTable()
        {
            Columns = new DataColumnCollection(this);
            Rows = new DataRowCollection(this);
        }

        public static bool DynamicGetValue = false;
        public DataColumnCollection Columns;
        public List<int> _searchResults = new List<int>();

        public DataRowCollection Rows;

        public bool _searchActive = false;
        private string _searchString;

        public string SearchString
        {
            get { return _searchString; }
        }

        private class SearchMatch
        {
            public bool Visible;
            public string Format;
            public SearchMatch(bool visible, string format)
            {
                Visible = visible;
                Format = format;
            }
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

                var UseFormat = new List<SearchMatch>();
                for (int x = 0; x < count; x++)
                {
                    var gridCol = view.GetColumn(x);
                    if (gridCol.Visible)
                    {
                        string FormatString = gridCol.FormatString;
                        UseFormat.Add(new SearchMatch(string.IsNullOrWhiteSpace(FormatString), FormatString));
                    }
                    else
                    {
                        UseFormat.Add(new SearchMatch(false, string.Empty));
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

                            if (helperWhatToDo.Visible)
                            {
                                value = Column.GetDisplayValue(y);
                            }
                            else
                            {
                                value = Column.GetDisplayValue(y, helperWhatToDo.Format);
                            }

                            if (!string.IsNullOrWhiteSpace(value) && value.ToLower().StartsWith(_searchString))
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
        
        public void ClearCells(DataColumn _column)
        {
            _column.Cells.Clear();
            Rows.Clear();
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
                Columns[x].Cells.Add(null);                
            }

            RequireOnDataChangeEvent();

            return dr;
        }

        public void AddRow(params object[] row)
        {
            if (row.Length == Columns.Count)
            {
                var dr = new DataRow(this, _RowCount++);
                int colLength = Columns.Count;
                for (int x = 0; x < colLength; x++)
                {
                    Columns[x].Cells.Add(row[x]);                    
                }
                Rows.Add(dr);
            }
        }

        public DataRow NewRow()
        {
            var dr = new DataRow(this);

            NewRows.Add(dr);

            return dr;
        }

        public void AcceptChanges()
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

            Rows.AddRange(NewRows.ToArray());

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
            var dr = new DataRow(ParentTable.Columns.Count);
            var data = new object[ParentTable.Columns.Count];
            for (int i = 0; i < ParentTable.Columns.Count; i++)
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
                batchData = new object[parentTable.Columns.Count];
            }
        }

        public void SetValue(string fieldName, object value)
        {
            for (int i = 0; i < ParentTable.Columns.Count; i++)
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
            for (int i = 0; i < ParentTable.Columns.Count; i++)
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
        public Type DataType;
        private DataTypeCode dataTypeCode;
        public List<dynamic> Cells = new List<dynamic>();

        private bool HasTypeCode = false;

        public DataTypeCode GetTypeCode()
        {
            if(HasTypeCode)
            {
                if(DataType == typeof(object))
                {
                    HasTypeCode = true;
                    return dataTypeCode = Data.DataTypeCode.Object;
                }
                if (DataType == typeof(DateTime))
                {
                    HasTypeCode = true;
                    return dataTypeCode = Data.DataTypeCode.DateTime;
                }
                if (DataType == typeof(string))
                {
                    HasTypeCode = true;
                    return dataTypeCode = Data.DataTypeCode.String;
                }
                if (DataType == typeof(int))
                {
                    HasTypeCode = true;
                    return dataTypeCode = Data.DataTypeCode.Integer;
                }
                if (DataType == typeof(long))
                {
                    HasTypeCode = true;
                    return dataTypeCode = Data.DataTypeCode.Long;
                }
                if (DataType == typeof(float))
                {
                    HasTypeCode = true;
                    return dataTypeCode = Data.DataTypeCode.Float;
                }
                if (DataType == typeof(double))
                {
                    HasTypeCode = true;
                    return dataTypeCode = Data.DataTypeCode.Double;
                }
                if (DataType == typeof(decimal))
                {
                    HasTypeCode = true;
                    return dataTypeCode = Data.DataTypeCode.Decimal;
                }
                if (DataType == typeof(bool))
                {
                    HasTypeCode = true;
                    return dataTypeCode = Data.DataTypeCode.Bool;
                }
                if (DataType == typeof(byte))
                {
                    HasTypeCode = true;
                    return dataTypeCode = Data.DataTypeCode.Byte;
                }
                if (DataType == typeof(short))
                {
                    HasTypeCode = true;
                    return dataTypeCode = Data.DataTypeCode.Short;
                }
                HasTypeCode = true;
                return dataTypeCode = Data.DataTypeCode.Object;
            }
            else
            {
                return dataTypeCode;
            }
            //DataType
        }


        //public List<object> Cells = new List<object>();
        public string GetDisplayValue(int rowIndex, string formatString)
        {
            switch (GetTypeCode())
            {
                default:
                case DataTypeCode.Object:
                    return string.Format(formatString, Cells[rowIndex]);

                case DataTypeCode.DateTime:
                    dynamic obj = Cells[rowIndex];
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

                case DataTypeCode.String:
                    return string.Format(formatString, Cells[rowIndex]);

                case DataTypeCode.Integer:
                    return string.Format(formatString, Cells[rowIndex]);

                case DataTypeCode.Long:
                    return string.Format(formatString, Cells[rowIndex]);

                case DataTypeCode.Float:
                    return string.Format(formatString, Cells[rowIndex]);

                case DataTypeCode.Double:
                    return string.Format(formatString, Cells[rowIndex]);

                case DataTypeCode.Decimal:
                    return string.Format(formatString, Cells[rowIndex]);

                case DataTypeCode.Byte:
                    return string.Format(formatString, Cells[rowIndex]);

                case DataTypeCode.Short:
                    return string.Format(formatString, Cells[rowIndex]);

                case DataTypeCode.Bool:
                    return string.Format(formatString, Cells[rowIndex]);
            }
        }

        public object GetCellValue(int rowIndex)
        {
            if (Cells.Count <= rowIndex)
            {
                return null;
            }
            return Cells[rowIndex];            
        }


        public string GetDisplayValue(int rowIndex)
        {
            if (Cells.Count <= rowIndex)
            {
                return null;
            }
            if (DataTable.DynamicGetValue)
                return this.ToDynamic().Cells.getItem(rowIndex);
            else
            {
                return Convert.ToString(Cells[rowIndex]);
            }


        }
    }
}
#endif