/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 16.7.1
 */
Bridge.assembly("TestBridge", function ($asm, globals) {
    "use strict";

    /** @namespace Test */

    /**
     * https://getmdl.io/started/index.html
     https://getbootstrap.com/docs/4.0/getting-started/introduction/
     *
     * @public
     * @class Test.Form1
     * @augments System.Windows.Forms.Form
     */
    Bridge.define("Test.Form1", {
        inherits: [System.Windows.Forms.Form],
        statics: {
            methods: {
                GetObject: function () {
                    return null;
                }
            }
        },
        fields: {
            dt: null,
            /**
             * Required designer variable.
             *
             * @instance
             * @private
             * @memberof Test.Form1
             * @type System.ComponentModel.IContainer
             */
            components: null,
            button1: null,
            panel1: null,
            button2: null,
            button3: null,
            button4: null,
            button5: null,
            textBox1: null,
            checkBox1: null,
            label1: null,
            linkLabel1: null,
            comboBox1: null,
            listBox1: null,
            groupBox1: null,
            textBox2: null,
            label2: null,
            button6: null,
            dataGridView1: null,
            progressBar1: null,
            button7: null,
            button8: null,
            textBox3: null,
            label3: null,
            button10: null,
            button11: null,
            button12: null,
            button13: null,
            button14: null,
            Column1: null,
            Column2: null,
            button9: null,
            button15: null,
            textBox4: null,
            label4: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Form.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            button1_Click: function (sender, e) {
                alert("Hello World");
            },
            linkLabel1_LinkClicked: function (sender, e) {

            },
            button8_Click: function (sender, e) {
                var value = { v : 1 };
                if (System.Int32.tryParse((this.textBox3.Text || "") + "", value)) {
                    this.progressBar1.Value = (this.progressBar1.Value + value.v) | 0;
                } else {
                    this.progressBar1.Value = (this.progressBar1.Value + 1) | 0;
                }
            },
            button7_Click: function (sender, e) {
                var value = { v : 1 };
                if (System.Int32.tryParse((this.textBox3.Text || "") + "", value)) {
                    this.progressBar1.Value = (this.progressBar1.Value - value.v) | 0;
                } else {
                    this.progressBar1.Value = (this.progressBar1.Value - 1) | 0;
                }
            },
            button10_Click: function (sender, e) {
                if (this.dt == null) {
                    this.dt = new System.Data.DataTable();

                    this.dt.Columns.Add("Column1");
                    this.dt.Columns.Add("Column2");

                    this.dataGridView1.DataSource = this.dt;
                }

                var row = this.dt.NewRow();

                row.setItem("Column1", "1");
                row.setItem("Column2", "Hello World!");

                this.dt.Rows.Add(row);

                this.dt.AcceptChanges();

            },
            button11_Click: function (sender, e) {
                this.dataGridView1.Tag = "card,table table-dark";
            },
            button12_Click: function (sender, e) {
                this.dataGridView1.Tag = "card,table";
            },
            button13_Click: function (sender, e) {
                this.dataGridView1.Tag = "card,table table-striped";
            },
            button14_Click: function (sender, e) {
                this.dataGridView1.Tag = "card,table table-striped table-dark";
            },
            button9_Click: function (sender, e) {
                var arg = Bridge.as(e, ClassicForms.ServerSentEventArgs);

                if (arg != null) {
                    var result = arg.Result;
                }

            },
            preRun: function (form) {
                var frm = Bridge.as(form, Test.Form1);

                return frm.textBox4.Text;
            },
            button15_Click: function (sender, e) {

            },
            /**
             * Clean up any resources being used.
             *
             * @instance
             * @protected
             * @override
             * @this Test.Form1
             * @memberof Test.Form1
             * @param   {boolean}    disposing    true if managed resources should be disposed; otherwise, false.
             * @return  {void}
             */
            Dispose: function (disposing) {
                if (disposing && (this.components != null)) {
                    this.components.System$IDisposable$dispose();
                }
                System.Windows.Forms.Form.prototype.Dispose.call(this, disposing);
            },
            /**
             * Required method for Designer support - do not modify
             the contents of this method with the code editor.
             *
             * @instance
             * @private
             * @this Test.Form1
             * @memberof Test.Form1
             * @return  {void}
             */
            InitializeComponent: function () {
                this.button1 = new System.Windows.Forms.Button();
                this.panel1 = new System.Windows.Forms.Panel();
                this.button6 = new System.Windows.Forms.Button();
                this.button2 = new System.Windows.Forms.Button();
                this.button3 = new System.Windows.Forms.Button();
                this.button4 = new System.Windows.Forms.Button();
                this.button5 = new System.Windows.Forms.Button();
                this.textBox1 = new System.Windows.Forms.TextBox();
                this.checkBox1 = new System.Windows.Forms.CheckBox();
                this.label1 = new System.Windows.Forms.Label();
                this.linkLabel1 = new System.Windows.Forms.LinkLabel();
                this.comboBox1 = new System.Windows.Forms.ComboBox();
                this.listBox1 = new System.Windows.Forms.ListBox();
                this.groupBox1 = new System.Windows.Forms.GroupBox();
                this.textBox2 = new System.Windows.Forms.TextBox();
                this.label2 = new System.Windows.Forms.Label();
                this.dataGridView1 = new System.Windows.Forms.DataGridView();
                this.Column1 = new System.Windows.Forms.DataGridViewTextBoxColumn();
                this.Column2 = new System.Windows.Forms.DataGridViewTextBoxColumn();
                this.progressBar1 = new System.Windows.Forms.ProgressBar();
                this.button7 = new System.Windows.Forms.Button();
                this.button8 = new System.Windows.Forms.Button();
                this.textBox3 = new System.Windows.Forms.TextBox();
                this.label3 = new System.Windows.Forms.Label();
                this.button10 = new System.Windows.Forms.Button();
                this.button11 = new System.Windows.Forms.Button();
                this.button12 = new System.Windows.Forms.Button();
                this.button13 = new System.Windows.Forms.Button();
                this.button14 = new System.Windows.Forms.Button();
                this.button9 = new System.Windows.Forms.Button();
                this.button15 = new System.Windows.Forms.Button();
                this.textBox4 = new System.Windows.Forms.TextBox();
                this.label4 = new System.Windows.Forms.Label();
                this.panel1.SuspendLayout();
                Bridge.cast((this.dataGridView1), System.ComponentModel.ISupportInitialize).System$ComponentModel$ISupportInitialize$BeginInit();
                this.SuspendLayout();
                //
                // button1
                //
                this.button1.Location = new System.Drawing.Point.$ctor1(11, 9);
                this.button1.Name = "button1";
                this.button1.Size = new System.Drawing.Size.$ctor1(66, 24);
                this.button1.TabIndex = 0;
                this.button1.Tag = "btn btn-primary";
                this.button1.Text = "Primary";
                this.button1.UseVisualStyleBackColor = true;
                this.button1.addClick(Bridge.fn.cacheBind(this, this.button1_Click));
                //
                // panel1
                //
                this.panel1.BackColor = System.Drawing.Color.Gainsboro.$clone();
                this.panel1.Controls.add(this.button6);
                this.panel1.Location = new System.Drawing.Point.$ctor1(9, 39);
                this.panel1.Name = "panel1";
                this.panel1.Size = new System.Drawing.Size.$ctor1(260, 139);
                this.panel1.TabIndex = 1;
                this.panel1.Tag = "card";
                //
                // button6
                //
                this.button6.Location = new System.Drawing.Point.$ctor1(3, 3);
                this.button6.Name = "button6";
                this.button6.Size = new System.Drawing.Size.$ctor1(91, 24);
                this.button6.TabIndex = 17;
                this.button6.Tag = "btn btn-warning";
                this.button6.Text = "Warning";
                this.button6.UseVisualStyleBackColor = true;
                //
                // button2
                //
                this.button2.Location = new System.Drawing.Point.$ctor1(83, 9);
                this.button2.Name = "button2";
                this.button2.Size = new System.Drawing.Size.$ctor1(87, 24);
                this.button2.TabIndex = 2;
                this.button2.Tag = "btn btn-secondary";
                this.button2.Text = "Secondary";
                this.button2.UseVisualStyleBackColor = true;
                //
                // button3
                //
                this.button3.Location = new System.Drawing.Point.$ctor1(175, 9);
                this.button3.Name = "button3";
                this.button3.Size = new System.Drawing.Size.$ctor1(83, 24);
                this.button3.TabIndex = 3;
                this.button3.Tag = "btn btn-success";
                this.button3.Text = "Success";
                this.button3.UseVisualStyleBackColor = true;
                //
                // button4
                //
                this.button4.Enabled = false;
                this.button4.Location = new System.Drawing.Point.$ctor1(263, 9);
                this.button4.Name = "button4";
                this.button4.Size = new System.Drawing.Size.$ctor1(87, 24);
                this.button4.TabIndex = 4;
                this.button4.Tag = "btn btn-danger";
                this.button4.Text = "Danger";
                this.button4.UseVisualStyleBackColor = true;
                //
                // button5
                //
                this.button5.Location = new System.Drawing.Point.$ctor1(356, 9);
                this.button5.Name = "button5";
                this.button5.Size = new System.Drawing.Size.$ctor1(91, 24);
                this.button5.TabIndex = 5;
                this.button5.Tag = "btn btn-warning";
                this.button5.Text = "Warning";
                this.button5.UseVisualStyleBackColor = true;
                //
                // textBox1
                //
                this.textBox1.Location = new System.Drawing.Point.$ctor1(63, 319);
                this.textBox1.Name = "textBox1";
                this.textBox1.Size = new System.Drawing.Size.$ctor1(100, 20);
                this.textBox1.TabIndex = 6;
                this.textBox1.Tag = "form-control";
                //
                // checkBox1
                //
                this.checkBox1.AutoSize = true;
                this.checkBox1.Location = new System.Drawing.Point.$ctor1(63, 343);
                this.checkBox1.Name = "checkBox1";
                this.checkBox1.Size = new System.Drawing.Size.$ctor1(80, 17);
                this.checkBox1.TabIndex = 7;
                this.checkBox1.Tag = "form-check,form-check-input,form-check-label";
                this.checkBox1.Text = "checkBox1";
                this.checkBox1.UseVisualStyleBackColor = true;
                //
                // label1
                //
                this.label1.AutoSize = true;
                this.label1.Location = new System.Drawing.Point.$ctor1(173, 297);
                this.label1.Name = "label1";
                this.label1.Size = new System.Drawing.Size.$ctor1(35, 13);
                this.label1.TabIndex = 8;
                this.label1.Text = "label1";
                //
                // linkLabel1
                //
                this.linkLabel1.AutoSize = true;
                this.linkLabel1.Location = new System.Drawing.Point.$ctor1(173, 321);
                this.linkLabel1.Name = "linkLabel1";
                this.linkLabel1.Size = new System.Drawing.Size.$ctor1(55, 13);
                this.linkLabel1.TabIndex = 9;
                this.linkLabel1.TabStop = true;
                this.linkLabel1.Text = "linkLabel1";
                this.linkLabel1.addLinkClicked(Bridge.fn.cacheBind(this, this.linkLabel1_LinkClicked));
                //
                // comboBox1
                //
                this.comboBox1.FormattingEnabled = true;
                this.comboBox1.ItemHeight = 13;
                this.comboBox1.Items.AddRange(System.Array.init(["Item 1", "Item 2", "Item 3"], System.Object));
                this.comboBox1.Location = new System.Drawing.Point.$ctor1(63, 362);
                this.comboBox1.Name = "comboBox1";
                this.comboBox1.Size = new System.Drawing.Size.$ctor1(100, 21);
                this.comboBox1.TabIndex = 10;
                this.comboBox1.Tag = "form-control";
                //
                // listBox1
                //
                this.listBox1.FormattingEnabled = true;
                this.listBox1.Items.AddRange(System.Array.init(["Apple", "Orange", "Mango"], System.Object));
                this.listBox1.Location = new System.Drawing.Point.$ctor1(295, 39);
                this.listBox1.Name = "listBox1";
                this.listBox1.Size = new System.Drawing.Size.$ctor1(437, 43);
                this.listBox1.TabIndex = 11;
                this.listBox1.Tag = "form-control";
                //
                // groupBox1
                //
                this.groupBox1.Location = new System.Drawing.Point.$ctor1(9, 184);
                this.groupBox1.Name = "groupBox1";
                this.groupBox1.Size = new System.Drawing.Size.$ctor1(263, 100);
                this.groupBox1.TabIndex = 12;
                this.groupBox1.TabStop = false;
                this.groupBox1.Tag = "card,card-header,card-body";
                this.groupBox1.Text = "groupBox1";
                //
                // textBox2
                //
                this.textBox2.Location = new System.Drawing.Point.$ctor1(63, 295);
                this.textBox2.Name = "textBox2";
                this.textBox2.ReadOnly = true;
                this.textBox2.Size = new System.Drawing.Size.$ctor1(100, 20);
                this.textBox2.TabIndex = 13;
                this.textBox2.Tag = "form-control";
                this.textBox2.Text = "this is readonly";
                //
                // label2
                //
                this.label2.AutoSize = true;
                this.label2.Location = new System.Drawing.Point.$ctor1(6, 297);
                this.label2.Name = "label2";
                this.label2.Size = new System.Drawing.Size.$ctor1(55, 13);
                this.label2.TabIndex = 14;
                this.label2.Text = "Readonly:";
                //
                // dataGridView1
                //
                this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
                this.dataGridView1.Columns.AddRange(System.Array.init([this.Column1, this.Column2], System.Windows.Forms.DataGridViewColumn));
                this.dataGridView1.Location = new System.Drawing.Point.$ctor1(295, 90);
                this.dataGridView1.Margin = new System.Windows.Forms.Padding.$ctor1(2);
                this.dataGridView1.Name = "dataGridView1";
                this.dataGridView1.Size = new System.Drawing.Size.$ctor1(437, 100);
                this.dataGridView1.TabIndex = 17;
                this.dataGridView1.Tag = "card,table,thead-dark";
                //
                // Column1
                //
                this.Column1.DataPropertyName = "Column1";
                this.Column1.HeaderText = "Column1";
                this.Column1.Name = "Column1";
                //
                // Column2
                //
                this.Column2.DataPropertyName = "Column2";
                this.Column2.HeaderText = "Column2";
                this.Column2.Name = "Column2";
                //
                // progressBar1
                //
                this.progressBar1.Location = new System.Drawing.Point.$ctor1(295, 238);
                this.progressBar1.Margin = new System.Windows.Forms.Padding.$ctor1(2);
                this.progressBar1.Name = "progressBar1";
                this.progressBar1.Size = new System.Drawing.Size.$ctor1(347, 33);
                this.progressBar1.TabIndex = 18;
                this.progressBar1.Tag = "progress,progress-bar";
                this.progressBar1.Value = 50;
                //
                // button7
                //
                this.button7.Location = new System.Drawing.Point.$ctor1(295, 276);
                this.button7.Name = "button7";
                this.button7.Size = new System.Drawing.Size.$ctor1(74, 27);
                this.button7.TabIndex = 19;
                this.button7.Tag = "btn btn-primary";
                this.button7.Text = "Decrease";
                this.button7.UseVisualStyleBackColor = true;
                this.button7.addClick(Bridge.fn.cacheBind(this, this.button7_Click));
                //
                // button8
                //
                this.button8.Location = new System.Drawing.Point.$ctor1(570, 276);
                this.button8.Name = "button8";
                this.button8.Size = new System.Drawing.Size.$ctor1(74, 27);
                this.button8.TabIndex = 20;
                this.button8.Tag = "btn btn-primary";
                this.button8.Text = "Increase";
                this.button8.UseVisualStyleBackColor = true;
                this.button8.addClick(Bridge.fn.cacheBind(this, this.button8_Click));
                //
                // textBox3
                //
                this.textBox3.Location = new System.Drawing.Point.$ctor1(443, 280);
                this.textBox3.Name = "textBox3";
                this.textBox3.Size = new System.Drawing.Size.$ctor1(100, 20);
                this.textBox3.TabIndex = 21;
                this.textBox3.Tag = "form-control";
                //
                // label3
                //
                this.label3.AutoSize = true;
                this.label3.Location = new System.Drawing.Point.$ctor1(371, 283);
                this.label3.Name = "label3";
                this.label3.Size = new System.Drawing.Size.$ctor1(66, 13);
                this.label3.TabIndex = 22;
                this.label3.Text = "Increase By:";
                //
                // button10
                //
                this.button10.Location = new System.Drawing.Point.$ctor1(295, 195);
                this.button10.Name = "button10";
                this.button10.Size = new System.Drawing.Size.$ctor1(74, 27);
                this.button10.TabIndex = 24;
                this.button10.Tag = "btn btn-primary";
                this.button10.Text = "New Row";
                this.button10.UseVisualStyleBackColor = true;
                this.button10.addClick(Bridge.fn.cacheBind(this, this.button10_Click));
                //
                // button11
                //
                this.button11.Location = new System.Drawing.Point.$ctor1(374, 195);
                this.button11.Name = "button11";
                this.button11.Size = new System.Drawing.Size.$ctor1(74, 27);
                this.button11.TabIndex = 25;
                this.button11.Tag = "btn btn-primary";
                this.button11.Text = "Make Dark";
                this.button11.UseVisualStyleBackColor = true;
                this.button11.addClick(Bridge.fn.cacheBind(this, this.button11_Click));
                //
                // button12
                //
                this.button12.Location = new System.Drawing.Point.$ctor1(453, 195);
                this.button12.Name = "button12";
                this.button12.Size = new System.Drawing.Size.$ctor1(74, 27);
                this.button12.TabIndex = 26;
                this.button12.Tag = "btn btn-primary";
                this.button12.Text = "Make Default";
                this.button12.UseVisualStyleBackColor = true;
                this.button12.addClick(Bridge.fn.cacheBind(this, this.button12_Click));
                //
                // button13
                //
                this.button13.Location = new System.Drawing.Point.$ctor1(533, 195);
                this.button13.Name = "button13";
                this.button13.Size = new System.Drawing.Size.$ctor1(91, 27);
                this.button13.TabIndex = 27;
                this.button13.Tag = "btn btn-primary";
                this.button13.Text = "Make Stripped";
                this.button13.UseVisualStyleBackColor = true;
                this.button13.addClick(Bridge.fn.cacheBind(this, this.button13_Click));
                //
                // button14
                //
                this.button14.Location = new System.Drawing.Point.$ctor1(629, 195);
                this.button14.Name = "button14";
                this.button14.Size = new System.Drawing.Size.$ctor1(91, 27);
                this.button14.TabIndex = 28;
                this.button14.Tag = "btn btn-primary";
                this.button14.Text = "Dark Stripped";
                this.button14.UseVisualStyleBackColor = true;
                this.button14.addClick(Bridge.fn.cacheBind(this, this.button14_Click));
                //
                // button9
                //
                this.button9.Location = new System.Drawing.Point.$ctor1(629, 353);
                this.button9.Name = "button9";
                this.button9.Size = new System.Drawing.Size.$ctor1(103, 30);
                this.button9.TabIndex = 29;
                this.button9.Tag = "btn btn-primary";
                this.button9.Text = "Simple Get";
                this.button9.UseVisualStyleBackColor = true;
                this.button9.addClick(Bridge.fn.cacheBind(this, this.button9_Click));
                //
                // button15
                //
                this.button15.Location = new System.Drawing.Point.$ctor1(520, 353);
                this.button15.Name = "button15";
                this.button15.Size = new System.Drawing.Size.$ctor1(103, 30);
                this.button15.TabIndex = 30;
                this.button15.Tag = "btn btn-primary";
                this.button15.Text = "Simple Post";
                this.button15.UseVisualStyleBackColor = true;
                this.button15.addClick(Bridge.fn.cacheBind(this, this.button15_Click));
                //
                // textBox4
                //
                this.textBox4.Location = new System.Drawing.Point.$ctor1(342, 359);
                this.textBox4.Name = "textBox4";
                this.textBox4.Size = new System.Drawing.Size.$ctor1(172, 20);
                this.textBox4.TabIndex = 31;
                this.textBox4.Tag = "form-control";
                //
                // label4
                //
                this.label4.AutoSize = true;
                this.label4.Location = new System.Drawing.Point.$ctor1(279, 362);
                this.label4.Name = "label4";
                this.label4.Size = new System.Drawing.Size.$ctor1(57, 13);
                this.label4.TabIndex = 32;
                this.label4.Text = "Post Data:";
                //
                // Form1
                //
                this.AutoScaleDimensions = new System.Drawing.SizeF.$ctor1(6.0, 13.0);
                this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
                this.BackColor = System.Drawing.Color.White.$clone();
                this.ClientSize = new System.Drawing.Size.$ctor1(745, 388);
                this.Controls.add(this.label4);
                this.Controls.add(this.textBox4);
                this.Controls.add(this.button15);
                this.Controls.add(this.button9);
                this.Controls.add(this.button14);
                this.Controls.add(this.button13);
                this.Controls.add(this.button12);
                this.Controls.add(this.button11);
                this.Controls.add(this.button10);
                this.Controls.add(this.label3);
                this.Controls.add(this.textBox3);
                this.Controls.add(this.button8);
                this.Controls.add(this.button7);
                this.Controls.add(this.progressBar1);
                this.Controls.add(this.dataGridView1);
                this.Controls.add(this.label2);
                this.Controls.add(this.textBox2);
                this.Controls.add(this.groupBox1);
                this.Controls.add(this.listBox1);
                this.Controls.add(this.comboBox1);
                this.Controls.add(this.linkLabel1);
                this.Controls.add(this.label1);
                this.Controls.add(this.checkBox1);
                this.Controls.add(this.textBox1);
                this.Controls.add(this.button5);
                this.Controls.add(this.button4);
                this.Controls.add(this.button3);
                this.Controls.add(this.button2);
                this.Controls.add(this.panel1);
                this.Controls.add(this.button1);
                this.Name = "Form1";
                this.Text = "Form";
                this.panel1.ResumeLayout(false);
                Bridge.cast((this.dataGridView1), System.ComponentModel.ISupportInitialize).System$ComponentModel$ISupportInitialize$EndInit();
                this.ResumeLayout(false);
                this.PerformLayout();

            }
        }
    });

    Bridge.define("TestBridge.Class1", {
        main: function Main () {
            var x = new Test.Form1();
            x.Show();
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJUZXN0QnJpZGdlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyIuLi9UZXN0L0Zvcm0xLmNzIiwiQ2xhc3MxLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkF3SVlBLE9BQU9BOzs7Ozs7Ozs7Ozs7Ozt3QkFqSTJDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQXNCbERBOzs7O3FDQUd1QkEsUUFBZUE7Z0JBR3RDQTs7OENBSWdDQSxRQUFlQTs7O3FDQUt4QkEsUUFBZUE7Z0JBRXRDQTtnQkFDQUEsSUFBR0Esc0JBQWFBLGlDQUF3QkE7b0JBRXBDQSxxREFBc0JBOztvQkFJdEJBOzs7cUNBSW1CQSxRQUFlQTtnQkFFdENBO2dCQUNBQSxJQUFJQSxzQkFBYUEsaUNBQXdCQTtvQkFFckNBLHFEQUFzQkE7O29CQUl0QkE7OztzQ0FNb0JBLFFBQWVBO2dCQUV2Q0EsSUFBR0EsV0FBTUE7b0JBRUxBLFVBQUtBLElBQUlBOztvQkFFVEE7b0JBQ0FBOztvQkFFQUEsZ0NBQTJCQTs7O2dCQUcvQkEsVUFBVUE7O2dCQUVWQTtnQkFDQUE7O2dCQUVBQSxpQkFBWUE7O2dCQUVaQTs7O3NDQUl3QkEsUUFBZUE7Z0JBRXZDQTs7c0NBR3dCQSxRQUFlQTtnQkFFdkNBOztzQ0FHd0JBLFFBQWVBO2dCQUV2Q0E7O3NDQUd3QkEsUUFBZUE7Z0JBRXZDQTs7cUNBSXVCQSxRQUFlQTtnQkFFdENBLFVBQVVBOztnQkFFVkEsSUFBR0EsT0FBT0E7b0JBRU5BLGFBQWFBOzs7OzhCQUtDQTtnQkFFbEJBLFVBQVVBOztnQkFFVkEsT0FBT0E7O3NDQVNpQkEsUUFBZUE7Ozs7Ozs7Ozs7Ozs7OytCQS9IWEE7Z0JBRTVCQSxJQUFJQSxhQUFhQSxDQUFDQSxtQkFBY0E7b0JBRTVCQTs7Z0JBRUpBLHVEQUFhQTs7Ozs7Ozs7Ozs7OztnQkFXYkEsZUFBZUEsSUFBSUE7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Z0JBQ0FBLG1CQUFtQkEsSUFBSUE7Z0JBQ3ZCQTtnQkFDQUE7Ozs7Z0JBSUFBLHlCQUF5QkEsSUFBSUE7Z0JBQzdCQTtnQkFDQUEscUJBQXFCQSxJQUFJQTtnQkFDekJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSx1QkFBdUJBLEFBQXdCQTs7OztnQkFJL0NBLHlCQUF5QkEsSUFBSUE7Z0JBQzdCQTtnQkFDQUEscUJBQXFCQSxJQUFJQTtnQkFDekJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSx1QkFBdUJBLEFBQXdCQTs7OztnQkFJL0NBLHlCQUF5QkEsSUFBSUE7Z0JBQzdCQTtnQkFDQUEscUJBQXFCQSxJQUFJQTtnQkFDekJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSx1QkFBdUJBLEFBQXdCQTs7OztnQkFJL0NBLHlCQUF5QkEsSUFBSUE7Z0JBQzdCQTtnQkFDQUEscUJBQXFCQSxJQUFJQTtnQkFDekJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSx1QkFBdUJBLEFBQXdCQTs7OztnQkFJL0NBLHlCQUF5QkEsSUFBSUE7Z0JBQzdCQTtnQkFDQUEscUJBQXFCQSxJQUFJQTtnQkFDekJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSx1QkFBdUJBLEFBQXdCQTs7OztnQkFJL0NBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSxzQkFBc0JBLEFBQXdCQTs7OztnQkFJOUNBLHlCQUF5QkEsSUFBSUE7Z0JBQzdCQTtnQkFDQUEscUJBQXFCQSxJQUFJQTtnQkFDekJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSx1QkFBdUJBLEFBQXdCQTs7OztnQkFJL0NBLHlCQUF5QkEsSUFBSUE7Z0JBQzdCQTtnQkFDQUEscUJBQXFCQSxJQUFJQTtnQkFDekJBO2dCQUNBQTs7OztnQkFJQUE7Z0JBQ0FBLHVCQUF1QkEsSUFBSUE7Z0JBQzNCQTtnQkFDQUEsbUJBQW1CQSxJQUFJQTtnQkFDdkJBO2dCQUNBQTs7OztnQkFJQUEsMkJBQTJCQSxJQUFJQTtnQkFDL0JBLHFCQUFxQkE7Z0JBQ3JCQSxpQkFBaUJBO2dCQUNqQkEsa0JBQWtCQSxJQUFJQTtnQkFDdEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLEFBQUNBLFlBQTBDQSxDQUFDQTtnQkFDNUNBO2dCQUNBQTs7Ozs7Ozs7WUM5YUFBLFFBQVFBLElBQUlBO1lBQ1pBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIENsYXNzaWNGb3JtcztcclxuXHJcbiNpZiAhQlJJREdFXHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5Db21wb25lbnRNb2RlbDtcclxudXNpbmcgU3lzdGVtLkRhdGE7XHJcbnVzaW5nIFN5c3RlbS5EcmF3aW5nO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkZvcm1zO1xyXG4jZWxzZVxyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5EcmF3aW5nO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Gb3JtcztcclxudXNpbmcgU3lzdGVtLkRhdGE7XHJcbiNlbmRpZlxyXG5cclxubmFtZXNwYWNlIFRlc3Rcclxue1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIGh0dHBzOi8vZ2V0bWRsLmlvL3N0YXJ0ZWQvaW5kZXguaHRtbFxyXG4gICAgLy8vIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzQuMC9nZXR0aW5nLXN0YXJ0ZWQvaW50cm9kdWN0aW9uL1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIEZvcm0xIDogRm9ybVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBGb3JtMSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uMV9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiNpZiBCUklER0UgICAgICAgICBcclxuICAgICAgICAgICAgUmV0eXBlZC5kb20uYWxlcnQoXCJIZWxsbyBXb3JsZFwiKTsgICAgICAgICAgICBcclxuI2VuZGlmXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgbGlua0xhYmVsMV9MaW5rQ2xpY2tlZChvYmplY3Qgc2VuZGVyLCBMaW5rTGFiZWxMaW5rQ2xpY2tlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uOF9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGludCB2YWx1ZSA9IDE7XHJcbiAgICAgICAgICAgIGlmKGludC5UcnlQYXJzZSh0ZXh0Qm94My5UZXh0ICsgXCJcIiwgb3V0IHZhbHVlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIxLlZhbHVlICs9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIxLlZhbHVlICs9IDE7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b243X0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW50IHZhbHVlID0gMTtcclxuICAgICAgICAgICAgaWYgKGludC5UcnlQYXJzZSh0ZXh0Qm94My5UZXh0ICsgXCJcIiwgb3V0IHZhbHVlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIxLlZhbHVlIC09IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIxLlZhbHVlIC09IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgRGF0YVRhYmxlIGR0O1xyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uMTBfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihkdCA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkdCA9IG5ldyBEYXRhVGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkdC5Db2x1bW5zLkFkZChcIkNvbHVtbjFcIik7XHJcbiAgICAgICAgICAgICAgICBkdC5Db2x1bW5zLkFkZChcIkNvbHVtbjJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YUdyaWRWaWV3MS5EYXRhU291cmNlID0gZHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciByb3cgPSBkdC5OZXdSb3coKTtcclxuXHJcbiAgICAgICAgICAgIHJvd1tcIkNvbHVtbjFcIl0gPSBcIjFcIjtcclxuICAgICAgICAgICAgcm93W1wiQ29sdW1uMlwiXSA9IFwiSGVsbG8gV29ybGQhXCI7XHJcblxyXG4gICAgICAgICAgICBkdC5Sb3dzLkFkZChyb3cpO1xyXG5cclxuICAgICAgICAgICAgZHQuQWNjZXB0Q2hhbmdlcygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b24xMV9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzEuVGFnID0gXCJjYXJkLHRhYmxlIHRhYmxlLWRhcmtcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b24xMl9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzEuVGFnID0gXCJjYXJkLHRhYmxlXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uMTNfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhR3JpZFZpZXcxLlRhZyA9IFwiY2FyZCx0YWJsZSB0YWJsZS1zdHJpcGVkXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uMTRfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhR3JpZFZpZXcxLlRhZyA9IFwiY2FyZCx0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWRhcmtcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtTZXJ2ZXJTaWRlXVxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b245X0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGFyZyA9IGUgYXMgU2VydmVyU2VudEV2ZW50QXJncztcclxuXHJcbiAgICAgICAgICAgIGlmKGFyZyAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXJnLlJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgb2JqZWN0IHByZVJ1bihGb3JtIGZvcm0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZnJtID0gZm9ybSBhcyBGb3JtMTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmcm0udGV4dEJveDQuVGV4dCBhcyBvYmplY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBGdW5jPG9iamVjdD4gR2V0T2JqZWN0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1NlcnZlclNpZGVdXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjE1X0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgVGVzdDtcclxuXHJcbm5hbWVzcGFjZSBUZXN0QnJpZGdlXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBDbGFzczFcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgTWFpbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgeCA9IG5ldyBGb3JtMSgpO1xyXG4gICAgICAgICAgICB4LlNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0KfQo=
