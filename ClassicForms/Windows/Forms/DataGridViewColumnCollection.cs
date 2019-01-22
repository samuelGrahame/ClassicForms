using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{
    public class DataGridViewColumnCollection
    {
        private List<DataGridViewColumn> dataGridViewColumns;
        private DataGridView owner;

        public int Count => dataGridViewColumns.Count;

        public int IndexOf(DataGridViewColumn dataGridViewColumn)
        {
            return dataGridViewColumns.IndexOf(dataGridViewColumn);
        }

        public void Insert(int index, DataGridViewColumn dataGridViewColumn)
        {
            if (dataGridViewColumn == null) return;

            dataGridViewColumns.Insert(index, dataGridViewColumn);
        }

        public void Remove(DataGridViewColumn dataGridViewColumn)
        {
            if (dataGridViewColumn == null) return;
            dataGridViewColumns.Remove(dataGridViewColumn);
        }

        public void Add(DataGridViewColumn dataGridViewColumn)
        {
            if (dataGridViewColumn == null) return;

            dataGridViewColumn.View = owner;
            dataGridViewColumns.Add(dataGridViewColumn);
        }

        public DataGridViewColumn this[int index]   // Indexer declaration  
        {
            get { return dataGridViewColumns[index]; }
        }

        public DataGridViewColumnCollection(DataGridView dataGridView)
        {
            owner = dataGridView;
            dataGridViewColumns = new List<DataGridViewColumn>();
        }

        public void AddRange(params DataGridViewColumn[] gridViewColumns)
        {
            if (gridViewColumns == null || gridViewColumns.Length == 0)
                return;

            foreach (var item in gridViewColumns)
            {
                item.View = owner;
            }
            dataGridViewColumns.AddRange(gridViewColumns);
        }
    }
}
