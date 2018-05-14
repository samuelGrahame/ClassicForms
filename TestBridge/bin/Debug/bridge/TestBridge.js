/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 16.8.2
 */
Bridge.assembly("TestBridge", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.frmCustomer", {
        inherits: [System.Windows.Forms.Form],
        fields: {
            button2: null,
            dataGridView1: null,
            Id: null,
            Test: null,
            button3: null,
            button1: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Form.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            InitializeComponent: function () {
                this.button1 = new System.Windows.Forms.Button();
                this.button2 = new System.Windows.Forms.Button();
                this.dataGridView1 = new System.Windows.Forms.DataGridView();
                this.Id = new System.Windows.Forms.DataGridViewTextBoxColumn();
                this.Test = new System.Windows.Forms.DataGridViewTextBoxColumn();
                this.button3 = new System.Windows.Forms.Button();
                Bridge.cast((this.dataGridView1), System.ComponentModel.ISupportInitialize).System$ComponentModel$ISupportInitialize$BeginInit();
                this.SuspendLayout();
                //
                // button1
                //
                this.button1.Location = new System.Drawing.Point.$ctor1(12, 73);
                this.button1.Name = "button1";
                this.button1.Size = new System.Drawing.Size.$ctor1(160, 55);
                this.button1.TabIndex = 0;
                this.button1.Tag = "btn btn-primary";
                this.button1.Text = "Show Me in a Form";
                this.button1.UseVisualStyleBackColor = true;
                this.button1.addClick(Bridge.fn.cacheBind(this, this.button1_Click));
                //
                // button2
                //
                this.button2.Location = new System.Drawing.Point.$ctor1(12, 12);
                this.button2.Name = "button2";
                this.button2.Size = new System.Drawing.Size.$ctor1(160, 55);
                this.button2.TabIndex = 1;
                this.button2.Tag = "btn btn-primary";
                this.button2.Text = "Show Me in a Dialog";
                this.button2.UseVisualStyleBackColor = true;
                this.button2.addClick(Bridge.fn.cacheBind(this, this.button2_Click));
                //
                // dataGridView1
                //
                this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
                this.dataGridView1.Columns.AddRange(System.Array.init([this.Id, this.Test], System.Windows.Forms.DataGridViewColumn));
                this.dataGridView1.Location = new System.Drawing.Point.$ctor1(12, 134);
                this.dataGridView1.Name = "dataGridView1";
                this.dataGridView1.Size = new System.Drawing.Size.$ctor1(673, 267);
                this.dataGridView1.TabIndex = 2;
                this.dataGridView1.Tag = "table";
                //
                // Id
                //
                this.Id.DataPropertyName = "Id";
                this.Id.HeaderText = "Id";
                this.Id.Name = "Id";
                //
                // Test
                //
                this.Test.DataPropertyName = "Test";
                this.Test.HeaderText = "Test";
                this.Test.Name = "Test";
                //
                // button3
                //
                this.button3.Location = new System.Drawing.Point.$ctor1(525, 73);
                this.button3.Name = "button3";
                this.button3.Size = new System.Drawing.Size.$ctor1(160, 55);
                this.button3.TabIndex = 3;
                this.button3.Tag = "btn btn-primary";
                this.button3.Text = "Add New Row";
                this.button3.UseVisualStyleBackColor = true;
                //
                // frmCustomer
                //
                this.ClientSize = new System.Drawing.Size.$ctor1(697, 413);
                this.Controls.add(this.button3);
                this.Controls.add(this.dataGridView1);
                this.Controls.add(this.button2);
                this.Controls.add(this.button1);
                this.Location = new System.Drawing.Point.$ctor1(50, 50);
                this.Name = "frmCustomer";
                this.Tag = "modal-content";
                Bridge.cast((this.dataGridView1), System.ComponentModel.ISupportInitialize).System$ComponentModel$ISupportInitialize$EndInit();
                this.ResumeLayout(false);

            },
            textBox1_TextChanged: function (sender, e) {

            },
            textBox2_TextChanged: function (sender, e) {

            },
            textBox3_TextChanged: function (sender, e) {

            },
            button1_Click: function (sender, e) {
                var x = new Test.frmCustomer();
                x.Show();
            },
            button2_Click: function (sender, e) {
                var x = new Test.frmCustomer();
                x.ShowDialog();
            }
        }
    });

    Bridge.define("TestBridge.Class1", {
        main: function Main () {
            var x = new Test.frmCustomer();
            x.Show();
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJUZXN0QnJpZGdlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyIuLi9UZXN0L2ZybUN1c3RvbWVyLmNzIiwiQ2xhc3MxLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQW9CWUE7Ozs7O2dCQUtBQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEscUJBQXFCQSxJQUFJQTtnQkFDekJBLFVBQVVBLElBQUlBO2dCQUNkQSxZQUFZQSxJQUFJQTtnQkFDaEJBLGVBQWVBLElBQUlBO2dCQUNuQkEsQUFBQ0EsWUFBMENBLENBQUNBO2dCQUM1Q0E7Ozs7Z0JBSUFBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSxzQkFBc0JBLEFBQXdCQTs7OztnQkFJOUNBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSxzQkFBc0JBLEFBQXdCQTs7OztnQkFJOUNBLGlEQUFpREE7Z0JBQ2pEQSxvQ0FBb0NBLG1CQUNwQ0EsU0FDQUE7Z0JBQ0FBLDhCQUE4QkEsSUFBSUE7Z0JBQ2xDQTtnQkFDQUEsMEJBQTBCQSxJQUFJQTtnQkFDOUJBO2dCQUNBQTs7OztnQkFJQUE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Ozs7Z0JBSUFBLGtCQUFrQkEsSUFBSUE7Z0JBQ3RCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBO2dCQUNBQTtnQkFDQUEsQUFBQ0EsWUFBMENBLENBQUNBO2dCQUM1Q0E7Ozs0Q0FJOEJBLFFBQWVBOzs7NENBS2ZBLFFBQWVBOzs7NENBS2ZBLFFBQWVBOzs7cUNBS3RCQSxRQUFlQTtnQkFFdENBLFFBQVFBLElBQUlBO2dCQUNaQTs7cUNBR3VCQSxRQUFlQTtnQkFFdENBLFFBQVFBLElBQUlBO2dCQUNaQTs7Ozs7OztZQ3BIQUEsUUFBUUEsSUFBSUE7WUFDWkEiLAogICJzb3VyY2VzQ29udGVudCI6IFsidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Gb3JtcztcclxuXHJcbm5hbWVzcGFjZSBUZXN0XHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBmcm1DdXN0b21lciA6IEZvcm1cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b24yO1xyXG4gICAgICAgIHByaXZhdGUgRGF0YUdyaWRWaWV3IGRhdGFHcmlkVmlldzE7XHJcbiAgICAgICAgcHJpdmF0ZSBEYXRhR3JpZFZpZXdUZXh0Qm94Q29sdW1uIElkO1xyXG4gICAgICAgIHByaXZhdGUgRGF0YUdyaWRWaWV3VGV4dEJveENvbHVtbiBUZXN0O1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjM7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uMTtcclxuXHJcbiAgICAgICAgcHVibGljIGZybUN1c3RvbWVyKCkgOiBiYXNlKClcclxuICAgICAgICB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEluaXRpYWxpemVDb21wb25lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3MSA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXcoKTtcclxuICAgICAgICAgICAgdGhpcy5JZCA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXdUZXh0Qm94Q29sdW1uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuVGVzdCA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXdUZXh0Qm94Q29sdW1uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgKChTeXN0ZW0uQ29tcG9uZW50TW9kZWwuSVN1cHBvcnRJbml0aWFsaXplKSh0aGlzLmRhdGFHcmlkVmlldzEpKS5CZWdpbkluaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5TdXNwZW5kTGF5b3V0KCk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24xXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTIsIDczKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLk5hbWUgPSBcImJ1dHRvbjFcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSgxNjAsIDU1KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLlRhYkluZGV4ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLlRhZyA9IFwiYnRuIGJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5UZXh0ID0gXCJTaG93IE1lIGluIGEgRm9ybVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b24xX0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjJcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgxMiwgMTIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuTmFtZSA9IFwiYnV0dG9uMlwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDE2MCwgNTUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVGFiSW5kZXggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVGFnID0gXCJidG4gYnRuLXByaW1hcnlcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLlRleHQgPSBcIlNob3cgTWUgaW4gYSBEaWFsb2dcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uMl9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBkYXRhR3JpZFZpZXcxXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmRhdGFHcmlkVmlldzEuQ29sdW1uSGVhZGVyc0hlaWdodFNpemVNb2RlID0gU3lzdGVtLldpbmRvd3MuRm9ybXMuRGF0YUdyaWRWaWV3Q29sdW1uSGVhZGVyc0hlaWdodFNpemVNb2RlLkF1dG9TaXplO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFHcmlkVmlldzEuQ29sdW1ucy5BZGRSYW5nZShuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuRGF0YUdyaWRWaWV3Q29sdW1uW10ge1xyXG4gICAgICAgICAgICB0aGlzLklkLFxyXG4gICAgICAgICAgICB0aGlzLlRlc3R9KTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcxLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDEyLCAxMzQpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFHcmlkVmlldzEuTmFtZSA9IFwiZGF0YUdyaWRWaWV3MVwiO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFHcmlkVmlldzEuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY3MywgMjY3KTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcxLlRhYkluZGV4ID0gMjtcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcxLlRhZyA9IFwidGFibGVcIjtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIElkXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLklkLkRhdGFQcm9wZXJ0eU5hbWUgPSBcIklkXCI7XHJcbiAgICAgICAgICAgIHRoaXMuSWQuSGVhZGVyVGV4dCA9IFwiSWRcIjtcclxuICAgICAgICAgICAgdGhpcy5JZC5OYW1lID0gXCJJZFwiO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gVGVzdFxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5UZXN0LkRhdGFQcm9wZXJ0eU5hbWUgPSBcIlRlc3RcIjtcclxuICAgICAgICAgICAgdGhpcy5UZXN0LkhlYWRlclRleHQgPSBcIlRlc3RcIjtcclxuICAgICAgICAgICAgdGhpcy5UZXN0Lk5hbWUgPSBcIlRlc3RcIjtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjNcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCg1MjUsIDczKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLk5hbWUgPSBcImJ1dHRvbjNcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSgxNjAsIDU1KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlRhYkluZGV4ID0gMztcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlRhZyA9IFwiYnRuIGJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5UZXh0ID0gXCJBZGQgTmV3IFJvd1wiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gZnJtQ3VzdG9tZXJcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuQ2xpZW50U2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY5NywgNDEzKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b24zKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5kYXRhR3JpZFZpZXcxKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b24yKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b24xKTtcclxuICAgICAgICAgICAgdGhpcy5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCg1MCwgNTApO1xyXG4gICAgICAgICAgICB0aGlzLk5hbWUgPSBcImZybUN1c3RvbWVyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuVGFnID0gXCJtb2RhbC1jb250ZW50XCI7XHJcbiAgICAgICAgICAgICgoU3lzdGVtLkNvbXBvbmVudE1vZGVsLklTdXBwb3J0SW5pdGlhbGl6ZSkodGhpcy5kYXRhR3JpZFZpZXcxKSkuRW5kSW5pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLlJlc3VtZUxheW91dChmYWxzZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIHRleHRCb3gxX1RleHRDaGFuZ2VkKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgdGV4dEJveDJfVGV4dENoYW5nZWQob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCB0ZXh0Qm94M19UZXh0Q2hhbmdlZChvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjFfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgeCA9IG5ldyBmcm1DdXN0b21lcigpO1xyXG4gICAgICAgICAgICB4LlNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b24yX0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHggPSBuZXcgZnJtQ3VzdG9tZXIoKTtcclxuICAgICAgICAgICAgeC5TaG93RGlhbG9nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgVGVzdDtcclxuXHJcbm5hbWVzcGFjZSBUZXN0QnJpZGdlXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBDbGFzczFcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgTWFpbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgeCA9IG5ldyBmcm1DdXN0b21lcigpO1xyXG4gICAgICAgICAgICB4LlNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0KfQo=
