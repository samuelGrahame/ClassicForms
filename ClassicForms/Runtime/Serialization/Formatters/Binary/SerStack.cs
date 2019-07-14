using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal sealed class SerStack
    {
        // Fields
        internal int next;
        internal object[] objects;
        internal string stackId;
        internal int top;

        // Methods
        internal SerStack()
        {
            this.objects = new object[5];
            this.top = -1;
            this.stackId = "System";
        }

        internal SerStack(string stackId)
        {
            this.objects = new object[5];
            this.top = -1;
            this.stackId = stackId;
        }

        internal int Count() =>
            (this.top + 1);

        internal void Dump()
        {
            for (int i = 0; i < this.Count(); i++)
            {
                object obj2 = this.objects[i];
            }
        }

        internal void IncreaseCapacity()
        {
            int num = this.objects.Length * 2;
            object[] destinationArray = new object[num];
            Array.Copy(this.objects, 0, destinationArray, 0, this.objects.Length);
            this.objects = destinationArray;
        }

        internal bool IsEmpty()
        {
            if (this.top > 0)
            {
                return false;
            }
            return true;
        }

        internal object Peek()
        {
            if (this.top < 0)
            {
                return null;
            }
            return this.objects[this.top];
        }

        internal object PeekPeek()
        {
            if (this.top < 1)
            {
                return null;
            }
            return this.objects[this.top - 1];
        }

        internal object Pop()
        {
            if (this.top < 0)
            {
                return null;
            }
            object obj2 = this.objects[this.top];
            int top = this.top;
            this.top = top - 1;
            this.objects[top] = null;
            return obj2;
        }

        internal void Push(object obj)
        {
            if (this.top == (this.objects.Length - 1))
            {
                this.IncreaseCapacity();
            }
            int index = this.top + 1;
            this.top = index;
            this.objects[index] = obj;
        }
    }
}
