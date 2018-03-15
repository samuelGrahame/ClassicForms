/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 16.8.2
 */
Bridge.assembly("TestBridge", function ($asm, globals) {
    "use strict";

    Bridge.define("ClassicForms.Customer", {
        inherits: [ClassicForms.ICrud],
        fields: {
            Id: System.Int64(0),
            LastName: null,
            FirstName: null,
            Address: null
        },
        alias: ["IsNew", "ClassicForms$ICrud$IsNew"],
        methods: {
            IsNew: function () {
                return this.Id.lt(System.Int64(1));
            }
        }
    });

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
        fields: {
            dt: null,
            _isMouseDown: false,
            point: null,
            location: null,
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
            serverButton1: null
        },
        ctors: {
            init: function () {
                this.point = new System.Drawing.Point();
                this.location = new System.Drawing.Point();
                this._isMouseDown = false;
            },
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
            serverButton1_Sending: function (sender, e) {
                e.Data = "this is a test";
                e.ContentType = "text/plain";
            },
            serverButton1_Sent: function (sender, e) {
                if (e.ex != null) {

                }
            },
            Form1_MouseDown: function (sender, e) {
                this.point = e.Location.$clone();
                this.location = this.Location.$clone();

                this._isMouseDown = true;
            },
            Form1_MouseMove: function (sender, e) {
                if (this._isMouseDown) {
                    this.Location = new System.Drawing.Point.$ctor1(((this.location.X + (((e.Location.X - this.point.X) | 0))) | 0), ((this.location.Y + (((e.Location.Y - this.point.Y) | 0))) | 0));
                    this.point = e.Location.$clone();
                    this.location = this.Location.$clone();
                }
            },
            Form1_MouseUp: function (sender, e) {
                this._isMouseDown = false;
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
                this.serverButton1 = new ClassicForms.ServerButton();
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
                // serverButton1
                //
                this.serverButton1.Location = new System.Drawing.Point.$ctor1(642, 350);
                this.serverButton1.Name = "serverButton1";
                this.serverButton1.Size = new System.Drawing.Size.$ctor1(90, 26);
                this.serverButton1.TabIndex = 29;
                this.serverButton1.Text = "Ajax Call";
                this.serverButton1.UseVisualStyleBackColor = true;
                this.serverButton1.addSending(Bridge.fn.cacheBind(this, this.serverButton1_Sending));
                this.serverButton1.addSent(Bridge.fn.cacheBind(this, this.serverButton1_Sent));
                //
                // Form1
                //
                this.AutoScaleDimensions = new System.Drawing.SizeF.$ctor1(6.0, 13.0);
                this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
                this.BackColor = System.Drawing.Color.White.$clone();
                this.ClientSize = new System.Drawing.Size.$ctor1(745, 388);
                this.Controls.add(this.serverButton1);
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
                this.Tag = "modal-content";
                this.Text = "Form";
                this.addMouseDown(Bridge.fn.cacheBind(this, this.Form1_MouseDown));
                this.addMouseMove(Bridge.fn.cacheBind(this, this.Form1_MouseMove));
                this.addMouseUp(Bridge.fn.cacheBind(this, this.Form1_MouseUp));
                this.panel1.ResumeLayout(false);
                Bridge.cast((this.dataGridView1), System.ComponentModel.ISupportInitialize).System$ComponentModel$ISupportInitialize$EndInit();
                this.ResumeLayout(false);
                this.PerformLayout();

            }
        }
    });

    Bridge.define("Test.frmCustomer", {
        inherits: [ClassicForms.CrudForm],
        fields: {
            textBox1: null,
            label1: null,
            label2: null,
            textBox2: null,
            label3: null,
            button1: null,
            button2: null,
            button3: null,
            button4: null,
            checkBox1: null,
            tabControl1: null,
            tabPage1: null,
            tabPage2: null,
            button5: null,
            button6: null,
            textBox3: null
        },
        props: {
            Customer: {
                get: function () {
                    return this.GetCrud(ClassicForms.Customer) || Bridge.cast(((this.CrudObject = new ClassicForms.Customer())), ClassicForms.Customer);
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                ClassicForms.CrudForm.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            InitializeComponent: function () {
                this.textBox1 = new System.Windows.Forms.TextBox();
                this.label1 = new System.Windows.Forms.Label();
                this.label2 = new System.Windows.Forms.Label();
                this.textBox2 = new System.Windows.Forms.TextBox();
                this.label3 = new System.Windows.Forms.Label();
                this.textBox3 = new System.Windows.Forms.TextBox();
                this.button1 = new System.Windows.Forms.Button();
                this.button2 = new System.Windows.Forms.Button();
                this.button3 = new System.Windows.Forms.Button();
                this.button4 = new System.Windows.Forms.Button();
                this.checkBox1 = new System.Windows.Forms.CheckBox();
                this.tabControl1 = new System.Windows.Forms.TabControl();
                this.tabPage1 = new System.Windows.Forms.TabPage();
                this.button5 = new System.Windows.Forms.Button();
                this.tabPage2 = new System.Windows.Forms.TabPage();
                this.button6 = new System.Windows.Forms.Button();
                this.tabControl1.SuspendLayout();
                this.tabPage1.SuspendLayout();
                this.tabPage2.SuspendLayout();
                this.SuspendLayout();
                //
                // textBox1
                //
                this.textBox1.Location = new System.Drawing.Point.$ctor1(197, 80);
                this.textBox1.Name = "textBox1";
                this.textBox1.Size = new System.Drawing.Size.$ctor1(235, 20);
                this.textBox1.TabIndex = 0;
                this.textBox1.Tag = "form-control";
                this.textBox1.addTextChanged(Bridge.fn.cacheBind(this, this.textBox1_TextChanged));
                //
                // label1
                //
                this.label1.AutoSize = true;
                this.label1.Location = new System.Drawing.Point.$ctor1(89, 83);
                this.label1.Name = "label1";
                this.label1.Size = new System.Drawing.Size.$ctor1(61, 13);
                this.label1.TabIndex = 1;
                this.label1.Text = "Last Name:";
                //
                // label2
                //
                this.label2.AutoSize = true;
                this.label2.Location = new System.Drawing.Point.$ctor1(89, 109);
                this.label2.Name = "label2";
                this.label2.Size = new System.Drawing.Size.$ctor1(60, 13);
                this.label2.TabIndex = 3;
                this.label2.Text = "First Name:";
                //
                // textBox2
                //
                this.textBox2.Location = new System.Drawing.Point.$ctor1(197, 106);
                this.textBox2.Name = "textBox2";
                this.textBox2.Size = new System.Drawing.Size.$ctor1(235, 20);
                this.textBox2.TabIndex = 2;
                this.textBox2.Tag = "form-control";
                this.textBox2.addTextChanged(Bridge.fn.cacheBind(this, this.textBox2_TextChanged));
                //
                // label3
                //
                this.label3.AutoSize = true;
                this.label3.Location = new System.Drawing.Point.$ctor1(89, 135);
                this.label3.Name = "label3";
                this.label3.Size = new System.Drawing.Size.$ctor1(48, 13);
                this.label3.TabIndex = 5;
                this.label3.Text = "Address:";
                //
                // textBox3
                //
                this.textBox3.Location = new System.Drawing.Point.$ctor1(197, 132);
                this.textBox3.Name = "textBox3";
                this.textBox3.Size = new System.Drawing.Size.$ctor1(235, 20);
                this.textBox3.TabIndex = 4;
                this.textBox3.Tag = "form-control";
                this.textBox3.addTextChanged(Bridge.fn.cacheBind(this, this.textBox3_TextChanged));
                //
                // button1
                //
                this.button1.Location = new System.Drawing.Point.$ctor1(12, 12);
                this.button1.Name = "button1";
                this.button1.Size = new System.Drawing.Size.$ctor1(75, 23);
                this.button1.TabIndex = 6;
                this.button1.Tag = "btn btn-primary";
                this.button1.Text = "Insert";
                this.button1.UseVisualStyleBackColor = true;
                this.button1.addClick(Bridge.fn.cacheBind(this, this.button1_Click));
                //
                // button2
                //
                this.button2.Location = new System.Drawing.Point.$ctor1(93, 12);
                this.button2.Name = "button2";
                this.button2.Size = new System.Drawing.Size.$ctor1(75, 23);
                this.button2.TabIndex = 7;
                this.button2.Tag = "btn btn-primary";
                this.button2.Text = "Update";
                this.button2.UseVisualStyleBackColor = true;
                this.button2.addClick(Bridge.fn.cacheBind(this, this.button2_Click));
                //
                // button3
                //
                this.button3.Location = new System.Drawing.Point.$ctor1(174, 12);
                this.button3.Name = "button3";
                this.button3.Size = new System.Drawing.Size.$ctor1(75, 23);
                this.button3.TabIndex = 8;
                this.button3.Tag = "btn btn-primary";
                this.button3.Text = "Delete";
                this.button3.UseVisualStyleBackColor = true;
                this.button3.addClick(Bridge.fn.cacheBind(this, this.button3_Click));
                //
                // button4
                //
                this.button4.Location = new System.Drawing.Point.$ctor1(255, 12);
                this.button4.Name = "button4";
                this.button4.Size = new System.Drawing.Size.$ctor1(75, 23);
                this.button4.TabIndex = 9;
                this.button4.Tag = "btn btn-primary";
                this.button4.Text = "Select";
                this.button4.UseVisualStyleBackColor = true;
                this.button4.addClick(Bridge.fn.cacheBind(this, this.button4_Click));
                //
                // checkBox1
                //
                this.checkBox1.AutoSize = true;
                this.checkBox1.Location = new System.Drawing.Point.$ctor1(197, 158);
                this.checkBox1.Name = "checkBox1";
                this.checkBox1.Size = new System.Drawing.Size.$ctor1(134, 17);
                this.checkBox1.TabIndex = 10;
                this.checkBox1.Text = "Is Supplier of Inventory";
                this.checkBox1.UseVisualStyleBackColor = true;
                //
                // tabControl1
                //
                this.tabControl1.Controls.add(this.tabPage1);
                this.tabControl1.Controls.add(this.tabPage2);
                this.tabControl1.Location = new System.Drawing.Point.$ctor1(92, 181);
                this.tabControl1.Name = "tabControl1";
                this.tabControl1.SelectedIndex = 0;
                this.tabControl1.Size = new System.Drawing.Size.$ctor1(340, 220);
                this.tabControl1.TabIndex = 11;
                this.tabControl1.Tag = "nav nav-tabs,nav-item nav-link";
                //
                // tabPage1
                //
                this.tabPage1.Controls.add(this.button5);
                this.tabPage1.Location = new System.Drawing.Point.$ctor1(4, 22);
                this.tabPage1.Name = "tabPage1";
                this.tabPage1.Padding = new System.Windows.Forms.Padding.$ctor1(3);
                this.tabPage1.Size = new System.Drawing.Size.$ctor1(332, 194);
                this.tabPage1.TabIndex = 0;
                this.tabPage1.Tag = "form-control";
                this.tabPage1.Text = "tabPage1";
                this.tabPage1.UseVisualStyleBackColor = true;
                //
                // button5
                //
                this.button5.Location = new System.Drawing.Point.$ctor1(6, 6);
                this.button5.Name = "button5";
                this.button5.Size = new System.Drawing.Size.$ctor1(126, 23);
                this.button5.TabIndex = 0;
                this.button5.Tag = "btn btn-primary";
                this.button5.Text = "Button Page 1";
                this.button5.UseVisualStyleBackColor = true;
                //
                // tabPage2
                //
                this.tabPage2.Controls.add(this.button6);
                this.tabPage2.Location = new System.Drawing.Point.$ctor1(4, 22);
                this.tabPage2.Name = "tabPage2";
                this.tabPage2.Padding = new System.Windows.Forms.Padding.$ctor1(3);
                this.tabPage2.Size = new System.Drawing.Size.$ctor1(332, 194);
                this.tabPage2.TabIndex = 1;
                this.tabPage2.Tag = "form-control";
                this.tabPage2.Text = "tabPage2";
                this.tabPage2.UseVisualStyleBackColor = true;
                //
                // button6
                //
                this.button6.Location = new System.Drawing.Point.$ctor1(6, 6);
                this.button6.Name = "button6";
                this.button6.Size = new System.Drawing.Size.$ctor1(126, 23);
                this.button6.TabIndex = 1;
                this.button6.Tag = "btn btn-primary";
                this.button6.Text = "Button Page 2";
                this.button6.UseVisualStyleBackColor = true;
                //
                // frmCustomer
                //
                this.ClientSize = new System.Drawing.Size.$ctor1(697, 413);
                this.Controls.add(this.tabControl1);
                this.Controls.add(this.checkBox1);
                this.Controls.add(this.button4);
                this.Controls.add(this.button3);
                this.Controls.add(this.button2);
                this.Controls.add(this.button1);
                this.Controls.add(this.label3);
                this.Controls.add(this.textBox3);
                this.Controls.add(this.label2);
                this.Controls.add(this.textBox2);
                this.Controls.add(this.label1);
                this.Controls.add(this.textBox1);
                this.Name = "frmCustomer";
                this.Tag = "modal-content";
                this.tabControl1.ResumeLayout(false);
                this.tabPage1.ResumeLayout(false);
                this.tabPage2.ResumeLayout(false);
                this.ResumeLayout(false);
                this.PerformLayout();

            },
            textBox1_TextChanged: function (sender, e) {
                this.Customer.LastName = this.textBox1.Text;
            },
            textBox2_TextChanged: function (sender, e) {
                this.Customer.FirstName = this.textBox2.Text;
            },
            textBox3_TextChanged: function (sender, e) {
                this.Customer.Address = this.textBox3.Text;
            },
            button1_Click: function (sender, e) {

            },
            button2_Click: function (sender, e) {

            },
            button3_Click: function (sender, e) {

            },
            button4_Click: function (sender, e) {

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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJUZXN0QnJpZGdlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyIuLi9UZXN0L0N1c3RvbWVyLmNzIiwiLi4vVGVzdC9Gb3JtMS5jcyIsIi4uL1Rlc3QvZnJtQ3VzdG9tZXIuY3MiLCJDbGFzczEuY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBa0JZQSxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQ1gyQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQXNCbERBOzs7O3FDQUd1QkEsUUFBZUE7Z0JBR3RDQTs7OENBSWdDQSxRQUFlQTs7O3FDQUt4QkEsUUFBZUE7Z0JBRXRDQTtnQkFDQUEsSUFBR0Esc0JBQWFBLGlDQUF3QkE7b0JBRXBDQSxxREFBc0JBOztvQkFJdEJBOzs7cUNBSW1CQSxRQUFlQTtnQkFFdENBO2dCQUNBQSxJQUFJQSxzQkFBYUEsaUNBQXdCQTtvQkFFckNBLHFEQUFzQkE7O29CQUl0QkE7OztzQ0FNb0JBLFFBQWVBO2dCQUV2Q0EsSUFBR0EsV0FBTUE7b0JBRUxBLFVBQUtBLElBQUlBOztvQkFFVEE7b0JBQ0FBOztvQkFFQUEsZ0NBQTJCQTs7O2dCQUcvQkEsVUFBVUE7O2dCQUVWQTtnQkFDQUE7O2dCQUVBQSxpQkFBWUE7O2dCQUVaQTs7O3NDQUl3QkEsUUFBZUE7Z0JBRXZDQTs7c0NBR3dCQSxRQUFlQTtnQkFFdkNBOztzQ0FHd0JBLFFBQWVBO2dCQUV2Q0E7O3NDQUd3QkEsUUFBZUE7Z0JBRXZDQTs7NkNBRytCQSxRQUFlQTtnQkFFOUNBO2dCQUNBQTs7MENBRzRCQSxRQUFlQTtnQkFFM0NBLElBQUdBLFFBQVFBOzs7O3VDQVNjQSxRQUFlQTtnQkFFeENBLGFBQVFBO2dCQUNSQSxnQkFBV0E7O2dCQUVYQTs7dUNBR3lCQSxRQUFlQTtnQkFFeENBLElBQUdBO29CQUVDQSxnQkFBZ0JBLElBQUlBLDRCQUFNQSxvQkFBYUEsQ0FBQ0EsaUJBQWVBLDJCQUFVQSxvQkFBYUEsQ0FBQ0EsaUJBQWVBO29CQUM5RkEsYUFBUUE7b0JBQ1JBLGdCQUFXQTs7O3FDQUlRQSxRQUFlQTtnQkFFdENBOzs7Ozs7Ozs7Ozs7OytCQTNJNEJBO2dCQUU1QkEsSUFBSUEsYUFBYUEsQ0FBQ0EsbUJBQWNBO29CQUU1QkE7O2dCQUVKQSx1REFBYUE7Ozs7Ozs7Ozs7Ozs7Z0JBV2JBLGVBQWVBLElBQUlBO2dCQUNuQkEsY0FBY0EsSUFBSUE7Z0JBQ2xCQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGlCQUFpQkEsSUFBSUE7Z0JBQ3JCQSxjQUFjQSxJQUFJQTtnQkFDbEJBLGtCQUFrQkEsSUFBSUE7Z0JBQ3RCQSxpQkFBaUJBLElBQUlBO2dCQUNyQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGlCQUFpQkEsSUFBSUE7Z0JBQ3JCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsY0FBY0EsSUFBSUE7Z0JBQ2xCQSxxQkFBcUJBLElBQUlBO2dCQUN6QkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGNBQWNBLElBQUlBO2dCQUNsQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBLEFBQUNBLFlBQTBDQSxDQUFDQTtnQkFDNUNBOzs7O2dCQUlBQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Ozs7Z0JBSTlDQSx3QkFBd0JBO2dCQUN4QkEseUJBQXlCQTtnQkFDekJBLHVCQUF1QkEsSUFBSUE7Z0JBQzNCQTtnQkFDQUEsbUJBQW1CQSxJQUFJQTtnQkFDdkJBO2dCQUNBQTs7OztnQkFJQUEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Ozs7Z0JBSUFBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBOzs7O2dCQUlBQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUE7Z0JBQ0FBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBOzs7O2dCQUlBQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUEseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBOzs7O2dCQUlBQTtnQkFDQUEsMEJBQTBCQSxJQUFJQTtnQkFDOUJBO2dCQUNBQSxzQkFBc0JBLElBQUlBO2dCQUMxQkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Ozs7Z0JBSUFBO2dCQUNBQSx1QkFBdUJBLElBQUlBO2dCQUMzQkE7Z0JBQ0FBLG1CQUFtQkEsSUFBSUE7Z0JBQ3ZCQTtnQkFDQUE7Ozs7Z0JBSUFBO2dCQUNBQSwyQkFBMkJBLElBQUlBO2dCQUMvQkE7Z0JBQ0FBLHVCQUF1QkEsSUFBSUE7Z0JBQzNCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSwrQkFBK0JBLEFBQTBEQTs7OztnQkFJekZBO2dCQUNBQTtnQkFDQUEsOEJBQThCQTtnQkFJOUJBLDBCQUEwQkEsSUFBSUE7Z0JBQzlCQTtnQkFDQUEsc0JBQXNCQSxJQUFJQTtnQkFDMUJBO2dCQUNBQTs7OztnQkFJQUE7Z0JBQ0FBLDZCQUE2QkE7Z0JBSTdCQSx5QkFBeUJBLElBQUlBO2dCQUM3QkE7Z0JBQ0FBLHFCQUFxQkEsSUFBSUE7Z0JBQ3pCQTtnQkFDQUE7Ozs7Z0JBSUFBLDBCQUEwQkEsSUFBSUE7Z0JBQzlCQTtnQkFDQUEsc0JBQXNCQSxJQUFJQTtnQkFDMUJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBOzs7O2dCQUlBQSx5QkFBeUJBLElBQUlBO2dCQUM3QkE7Z0JBQ0FBO2dCQUNBQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUE7Z0JBQ0FBLHVCQUF1QkEsSUFBSUE7Z0JBQzNCQTtnQkFDQUEsbUJBQW1CQSxJQUFJQTtnQkFDdkJBO2dCQUNBQTs7OztnQkFJQUEsaURBQWlEQTtnQkFDakRBLG9DQUFvQ0EsbUJBQ3BDQSxjQUNBQTtnQkFDQUEsOEJBQThCQSxJQUFJQTtnQkFDbENBLDRCQUE0QkEsSUFBSUE7Z0JBQ2hDQTtnQkFDQUEsMEJBQTBCQSxJQUFJQTtnQkFDOUJBO2dCQUNBQTs7OztnQkFJQUE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUEsNkJBQTZCQSxJQUFJQTtnQkFDakNBLDJCQUEyQkEsSUFBSUE7Z0JBQy9CQTtnQkFDQUEseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQTtnQkFDQUE7Ozs7Z0JBSUFBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSxzQkFBc0JBLEFBQXdCQTs7OztnQkFJOUNBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSxzQkFBc0JBLEFBQXdCQTs7OztnQkFJOUNBLHlCQUF5QkEsSUFBSUE7Z0JBQzdCQTtnQkFDQUEscUJBQXFCQSxJQUFJQTtnQkFDekJBO2dCQUNBQTs7OztnQkFJQUE7Z0JBQ0FBLHVCQUF1QkEsSUFBSUE7Z0JBQzNCQTtnQkFDQUEsbUJBQW1CQSxJQUFJQTtnQkFDdkJBO2dCQUNBQTs7OztnQkFJQUEseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHVCQUF1QkEsQUFBd0JBOzs7O2dCQUkvQ0EseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHVCQUF1QkEsQUFBd0JBOzs7O2dCQUkvQ0EseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHVCQUF1QkEsQUFBd0JBOzs7O2dCQUkvQ0EseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHVCQUF1QkEsQUFBd0JBOzs7O2dCQUkvQ0EseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHVCQUF1QkEsQUFBd0JBOzs7O2dCQUkvQ0EsOEJBQThCQSxJQUFJQTtnQkFDbENBO2dCQUNBQSwwQkFBMEJBLElBQUlBO2dCQUM5QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsOEJBQThCQSxBQUEwQ0E7Z0JBQ3hFQSwyQkFBMkJBLEFBQXVDQTs7OztnQkFJbEVBLDJCQUEyQkEsSUFBSUE7Z0JBQy9CQSxxQkFBcUJBO2dCQUNyQkEsaUJBQWlCQTtnQkFDakJBLGtCQUFrQkEsSUFBSUE7Z0JBQ3RCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSxrQkFBa0JBLEFBQTJDQTtnQkFDN0RBLGtCQUFrQkEsQUFBMkNBO2dCQUM3REEsZ0JBQWdCQSxBQUEyQ0E7Z0JBQzNEQTtnQkFDQUEsQUFBQ0EsWUFBMENBLENBQUNBO2dCQUM1Q0E7Z0JBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkM1WDBCQSxPQUFPQSx1Q0FBdUJBLFlBQVVBLENBQUNBLG1CQUFhQSxJQUFJQTs7Ozs7Ozs7Z0JBSHBGQTs7Ozs7Z0JBT0FBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxjQUFjQSxJQUFJQTtnQkFDbEJBLGNBQWNBLElBQUlBO2dCQUNsQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGNBQWNBLElBQUlBO2dCQUNsQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsaUJBQWlCQSxJQUFJQTtnQkFDckJBLG1CQUFtQkEsSUFBSUE7Z0JBQ3ZCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUEseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBO2dCQUNBQSw2QkFBNkJBLEFBQXdCQTs7OztnQkFJckRBO2dCQUNBQSx1QkFBdUJBLElBQUlBO2dCQUMzQkE7Z0JBQ0FBLG1CQUFtQkEsSUFBSUE7Z0JBQ3ZCQTtnQkFDQUE7Ozs7Z0JBSUFBO2dCQUNBQSx1QkFBdUJBLElBQUlBO2dCQUMzQkE7Z0JBQ0FBLG1CQUFtQkEsSUFBSUE7Z0JBQ3ZCQTtnQkFDQUE7Ozs7Z0JBSUFBLHlCQUF5QkEsSUFBSUE7Z0JBQzdCQTtnQkFDQUEscUJBQXFCQSxJQUFJQTtnQkFDekJBO2dCQUNBQTtnQkFDQUEsNkJBQTZCQSxBQUF3QkE7Ozs7Z0JBSXJEQTtnQkFDQUEsdUJBQXVCQSxJQUFJQTtnQkFDM0JBO2dCQUNBQSxtQkFBbUJBLElBQUlBO2dCQUN2QkE7Z0JBQ0FBOzs7O2dCQUlBQSx5QkFBeUJBLElBQUlBO2dCQUM3QkE7Z0JBQ0FBLHFCQUFxQkEsSUFBSUE7Z0JBQ3pCQTtnQkFDQUE7Z0JBQ0FBLDZCQUE2QkEsQUFBd0JBOzs7O2dCQUlyREEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBOzs7O2dCQUk5Q0Esd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBOzs7O2dCQUk5Q0Esd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBOzs7O2dCQUk5Q0Esd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBOzs7O2dCQUk5Q0E7Z0JBQ0FBLDBCQUEwQkEsSUFBSUE7Z0JBQzlCQTtnQkFDQUEsc0JBQXNCQSxJQUFJQTtnQkFDMUJBO2dCQUNBQTtnQkFDQUE7Ozs7Z0JBSUFBLDhCQUE4QkE7Z0JBQzlCQSw4QkFBOEJBO2dCQUM5QkEsNEJBQTRCQSxJQUFJQTtnQkFDaENBO2dCQUNBQTtnQkFDQUEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQTs7OztnQkFJQUEsMkJBQTJCQTtnQkFDM0JBLHlCQUF5QkEsSUFBSUE7Z0JBQzdCQTtnQkFDQUEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBLHFCQUFxQkEsSUFBSUE7Z0JBQ3pCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Ozs7Z0JBSUFBLDJCQUEyQkE7Z0JBQzNCQSx5QkFBeUJBLElBQUlBO2dCQUM3QkE7Z0JBQ0FBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Ozs7Z0JBSUFBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBOzs7O2dCQUlBQSxrQkFBa0JBLElBQUlBO2dCQUN0QkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Ozs0Q0FJOEJBLFFBQWVBO2dCQUU3Q0EseUJBQW9CQTs7NENBR1VBLFFBQWVBO2dCQUU3Q0EsMEJBQXFCQTs7NENBR1NBLFFBQWVBO2dCQUU3Q0Esd0JBQW1CQTs7cUNBSUlBLFFBQWVBOzs7cUNBTWZBLFFBQWVBOzs7cUNBTWZBLFFBQWVBOzs7cUNBTWZBLFFBQWVBOzs7Ozs7OztZQzNRdENBLFFBQVFBLElBQUlBO1lBQ1pBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIENsYXNzaWNGb3JtcztcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENsYXNzaWNGb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQ3VzdG9tZXIgOiBJQ3J1ZFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBsb25nIElkO1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgTGFzdE5hbWU7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBGaXJzdE5hbWU7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBBZGRyZXNzO1xyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBJc05ldygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gSWQgPCAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDbGFzc2ljRm9ybXM7XHJcblxyXG4jaWYgIUJSSURHRVxyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uQ29tcG9uZW50TW9kZWw7XHJcbnVzaW5nIFN5c3RlbS5EYXRhO1xyXG51c2luZyBTeXN0ZW0uRHJhd2luZztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Gb3JtcztcclxuI2Vsc2VcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uRHJhd2luZztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRm9ybXM7XHJcbnVzaW5nIFN5c3RlbS5EYXRhO1xyXG4jZW5kaWZcclxuXHJcbm5hbWVzcGFjZSBUZXN0XHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBodHRwczovL2dldG1kbC5pby9zdGFydGVkL2luZGV4Lmh0bWxcclxuICAgIC8vLyBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy80LjAvZ2V0dGluZy1zdGFydGVkL2ludHJvZHVjdGlvbi9cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBGb3JtMSA6IEZvcm1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgRm9ybTEoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjFfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4jaWYgQlJJREdFICAgICAgICAgXHJcbiAgICAgICAgICAgIFJldHlwZWQuZG9tLmFsZXJ0KFwiSGVsbG8gV29ybGRcIik7ICAgICAgICAgICAgXHJcbiNlbmRpZlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGxpbmtMYWJlbDFfTGlua0NsaWNrZWQob2JqZWN0IHNlbmRlciwgTGlua0xhYmVsTGlua0NsaWNrZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjhfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbnQgdmFsdWUgPSAxO1xyXG4gICAgICAgICAgICBpZihpbnQuVHJ5UGFyc2UodGV4dEJveDMuVGV4dCArIFwiXCIsIG91dCB2YWx1ZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyMS5WYWx1ZSArPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyMS5WYWx1ZSArPSAxO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uN19DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGludCB2YWx1ZSA9IDE7XHJcbiAgICAgICAgICAgIGlmIChpbnQuVHJ5UGFyc2UodGV4dEJveDMuVGV4dCArIFwiXCIsIG91dCB2YWx1ZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyMS5WYWx1ZSAtPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyMS5WYWx1ZSAtPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIERhdGFUYWJsZSBkdDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjEwX0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoZHQgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZHQgPSBuZXcgRGF0YVRhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZHQuQ29sdW1ucy5BZGQoXCJDb2x1bW4xXCIpO1xyXG4gICAgICAgICAgICAgICAgZHQuQ29sdW1ucy5BZGQoXCJDb2x1bW4yXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFHcmlkVmlldzEuRGF0YVNvdXJjZSA9IGR0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcm93ID0gZHQuTmV3Um93KCk7XHJcblxyXG4gICAgICAgICAgICByb3dbXCJDb2x1bW4xXCJdID0gXCIxXCI7XHJcbiAgICAgICAgICAgIHJvd1tcIkNvbHVtbjJcIl0gPSBcIkhlbGxvIFdvcmxkIVwiO1xyXG5cclxuICAgICAgICAgICAgZHQuUm93cy5BZGQocm93KTtcclxuXHJcbiAgICAgICAgICAgIGR0LkFjY2VwdENoYW5nZXMoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uMTFfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhR3JpZFZpZXcxLlRhZyA9IFwiY2FyZCx0YWJsZSB0YWJsZS1kYXJrXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uMTJfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhR3JpZFZpZXcxLlRhZyA9IFwiY2FyZCx0YWJsZVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjEzX0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3MS5UYWcgPSBcImNhcmQsdGFibGUgdGFibGUtc3RyaXBlZFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjE0X0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3MS5UYWcgPSBcImNhcmQsdGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1kYXJrXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgc2VydmVyQnV0dG9uMV9TZW5kaW5nKG9iamVjdCBzZW5kZXIsIFNldmVyU2VuZGluZ0V2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZS5EYXRhID0gXCJ0aGlzIGlzIGEgdGVzdFwiO1xyXG4gICAgICAgICAgICBlLkNvbnRlbnRUeXBlID0gXCJ0ZXh0L3BsYWluXCI7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgc2VydmVyQnV0dG9uMV9TZW50KG9iamVjdCBzZW5kZXIsIFNlcnZlclNlbnRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGUuZXggIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgYm9vbCBfaXNNb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgICBwdWJsaWMgUG9pbnQgcG9pbnQ7XHJcbiAgICAgICAgcHVibGljIFBvaW50IGxvY2F0aW9uO1xyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgRm9ybTFfTW91c2VEb3duKG9iamVjdCBzZW5kZXIsIE1vdXNlRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb2ludCA9IGUuTG9jYXRpb247XHJcbiAgICAgICAgICAgIGxvY2F0aW9uID0gdGhpcy5Mb2NhdGlvbjtcclxuXHJcbiAgICAgICAgICAgIF9pc01vdXNlRG93biA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgRm9ybTFfTW91c2VNb3ZlKG9iamVjdCBzZW5kZXIsIE1vdXNlRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihfaXNNb3VzZURvd24pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuTG9jYXRpb24gPSBuZXcgUG9pbnQobG9jYXRpb24uWCArIChlLkxvY2F0aW9uLlggLSBwb2ludC5YKSwgbG9jYXRpb24uWSArIChlLkxvY2F0aW9uLlkgLSBwb2ludC5ZKSk7XHJcbiAgICAgICAgICAgICAgICBwb2ludCA9IGUuTG9jYXRpb247XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbiA9IHRoaXMuTG9jYXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBGb3JtMV9Nb3VzZVVwKG9iamVjdCBzZW5kZXIsIE1vdXNlRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfaXNNb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDbGFzc2ljRm9ybXM7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBUZXN0XHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBmcm1DdXN0b21lciA6IENydWRGb3JtXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5UZXh0Qm94IHRleHRCb3gxO1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuTGFiZWwgbGFiZWwxO1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuTGFiZWwgbGFiZWwyO1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuVGV4dEJveCB0ZXh0Qm94MjtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkxhYmVsIGxhYmVsMztcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b24xO1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uIGJ1dHRvbjI7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uMztcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b240O1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuQ2hlY2tCb3ggY2hlY2tCb3gxO1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuVGFiQ29udHJvbCB0YWJDb250cm9sMTtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLlRhYlBhZ2UgdGFiUGFnZTE7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5UYWJQYWdlIHRhYlBhZ2UyO1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uIGJ1dHRvbjU7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uNjtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLlRleHRCb3ggdGV4dEJveDM7XHJcblxyXG4gICAgICAgIHB1YmxpYyBmcm1DdXN0b21lcigpIDogYmFzZSgpXHJcbiAgICAgICAgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBJbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDdXN0b21lciBDdXN0b21lciB7Z2V0e3JldHVybiBHZXRDcnVkPEN1c3RvbWVyPigpID8/IChDdXN0b21lcikoQ3J1ZE9iamVjdCA9IG5ldyBDdXN0b21lcigpKTt9fVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgSW5pdGlhbGl6ZUNvbXBvbmVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRCb3gxID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLlRleHRCb3goKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbDEgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuTGFiZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbDIgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuTGFiZWwoKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Qm94MiA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5UZXh0Qm94KCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwzID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkxhYmVsKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEJveDMgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuVGV4dEJveCgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMiA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tCb3gxID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkNoZWNrQm94KCk7XHJcbiAgICAgICAgICAgIHRoaXMudGFiQ29udHJvbDEgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuVGFiQ29udHJvbCgpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYlBhZ2UxID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLlRhYlBhZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYlBhZ2UyID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLlRhYlBhZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYkNvbnRyb2wxLlN1c3BlbmRMYXlvdXQoKTtcclxuICAgICAgICAgICAgdGhpcy50YWJQYWdlMS5TdXNwZW5kTGF5b3V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMudGFiUGFnZTIuU3VzcGVuZExheW91dCgpO1xyXG4gICAgICAgICAgICB0aGlzLlN1c3BlbmRMYXlvdXQoKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIHRleHRCb3gxXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLnRleHRCb3gxLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDE5NywgODApO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRCb3gxLk5hbWUgPSBcInRleHRCb3gxXCI7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEJveDEuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDIzNSwgMjApO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRCb3gxLlRhYkluZGV4ID0gMDtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Qm94MS5UYWcgPSBcImZvcm0tY29udHJvbFwiO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRCb3gxLlRleHRDaGFuZ2VkICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMudGV4dEJveDFfVGV4dENoYW5nZWQpO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gbGFiZWwxXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmxhYmVsMS5BdXRvU2l6ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwxLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDg5LCA4Myk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwxLk5hbWUgPSBcImxhYmVsMVwiO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsMS5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNjEsIDEzKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbDEuVGFiSW5kZXggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsMS5UZXh0ID0gXCJMYXN0IE5hbWU6XCI7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBsYWJlbDJcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwyLkF1dG9TaXplID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbDIuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoODksIDEwOSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwyLk5hbWUgPSBcImxhYmVsMlwiO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsMi5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNjAsIDEzKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbDIuVGFiSW5kZXggPSAzO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsMi5UZXh0ID0gXCJGaXJzdCBOYW1lOlwiO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gdGV4dEJveDJcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMudGV4dEJveDIuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTk3LCAxMDYpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRCb3gyLk5hbWUgPSBcInRleHRCb3gyXCI7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEJveDIuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDIzNSwgMjApO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRCb3gyLlRhYkluZGV4ID0gMjtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Qm94Mi5UYWcgPSBcImZvcm0tY29udHJvbFwiO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRCb3gyLlRleHRDaGFuZ2VkICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMudGV4dEJveDJfVGV4dENoYW5nZWQpO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gbGFiZWwzXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmxhYmVsMy5BdXRvU2l6ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwzLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDg5LCAxMzUpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsMy5OYW1lID0gXCJsYWJlbDNcIjtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbDMuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDQ4LCAxMyk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwzLlRhYkluZGV4ID0gNTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbDMuVGV4dCA9IFwiQWRkcmVzczpcIjtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIHRleHRCb3gzXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLnRleHRCb3gzLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDE5NywgMTMyKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Qm94My5OYW1lID0gXCJ0ZXh0Qm94M1wiO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRCb3gzLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSgyMzUsIDIwKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Qm94My5UYWJJbmRleCA9IDQ7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEJveDMuVGFnID0gXCJmb3JtLWNvbnRyb2xcIjtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Qm94My5UZXh0Q2hhbmdlZCArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLnRleHRCb3gzX1RleHRDaGFuZ2VkKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjFcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgxMiwgMTIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuTmFtZSA9IFwiYnV0dG9uMVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDc1LCAyMyk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5UYWJJbmRleCA9IDY7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVGV4dCA9IFwiSW5zZXJ0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjFfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uMlxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDkzLCAxMik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5OYW1lID0gXCJidXR0b24yXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNzUsIDIzKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLlRhYkluZGV4ID0gNztcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLlRhZyA9IFwiYnRuIGJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5UZXh0ID0gXCJVcGRhdGVcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uMl9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24zXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTc0LCAxMik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5OYW1lID0gXCJidXR0b24zXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNzUsIDIzKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlRhYkluZGV4ID0gODtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlRhZyA9IFwiYnRuIGJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5UZXh0ID0gXCJEZWxldGVcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uM19DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b240XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMjU1LCAxMik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5OYW1lID0gXCJidXR0b240XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNzUsIDIzKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LlRhYkluZGV4ID0gOTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LlRhZyA9IFwiYnRuIGJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5UZXh0ID0gXCJTZWxlY3RcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uNF9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBjaGVja0JveDFcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tCb3gxLkF1dG9TaXplID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0JveDEuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTk3LCAxNTgpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQm94MS5OYW1lID0gXCJjaGVja0JveDFcIjtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0JveDEuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDEzNCwgMTcpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQm94MS5UYWJJbmRleCA9IDEwO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQm94MS5UZXh0ID0gXCJJcyBTdXBwbGllciBvZiBJbnZlbnRvcnlcIjtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0JveDEuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gdGFiQ29udHJvbDFcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMudGFiQ29udHJvbDEuQ29udHJvbHMuQWRkKHRoaXMudGFiUGFnZTEpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYkNvbnRyb2wxLkNvbnRyb2xzLkFkZCh0aGlzLnRhYlBhZ2UyKTtcclxuICAgICAgICAgICAgdGhpcy50YWJDb250cm9sMS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCg5MiwgMTgxKTtcclxuICAgICAgICAgICAgdGhpcy50YWJDb250cm9sMS5OYW1lID0gXCJ0YWJDb250cm9sMVwiO1xyXG4gICAgICAgICAgICB0aGlzLnRhYkNvbnRyb2wxLlNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnRhYkNvbnRyb2wxLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSgzNDAsIDIyMCk7XHJcbiAgICAgICAgICAgIHRoaXMudGFiQ29udHJvbDEuVGFiSW5kZXggPSAxMTtcclxuICAgICAgICAgICAgdGhpcy50YWJDb250cm9sMS5UYWcgPSBcIm5hdiBuYXYtdGFicyxuYXYtaXRlbSBuYXYtbGlua1wiO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gdGFiUGFnZTFcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMudGFiUGFnZTEuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNSk7XHJcbiAgICAgICAgICAgIHRoaXMudGFiUGFnZTEuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoNCwgMjIpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYlBhZ2UxLk5hbWUgPSBcInRhYlBhZ2UxXCI7XHJcbiAgICAgICAgICAgIHRoaXMudGFiUGFnZTEuUGFkZGluZyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5QYWRkaW5nKDMpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYlBhZ2UxLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSgzMzIsIDE5NCk7XHJcbiAgICAgICAgICAgIHRoaXMudGFiUGFnZTEuVGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnRhYlBhZ2UxLlRhZyA9IFwiZm9ybS1jb250cm9sXCI7XHJcbiAgICAgICAgICAgIHRoaXMudGFiUGFnZTEuVGV4dCA9IFwidGFiUGFnZTFcIjtcclxuICAgICAgICAgICAgdGhpcy50YWJQYWdlMS5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b241XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoNiwgNik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5OYW1lID0gXCJidXR0b241XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMTI2LCAyMyk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5UYWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuVGV4dCA9IFwiQnV0dG9uIFBhZ2UgMVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gdGFiUGFnZTJcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMudGFiUGFnZTIuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNik7XHJcbiAgICAgICAgICAgIHRoaXMudGFiUGFnZTIuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoNCwgMjIpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYlBhZ2UyLk5hbWUgPSBcInRhYlBhZ2UyXCI7XHJcbiAgICAgICAgICAgIHRoaXMudGFiUGFnZTIuUGFkZGluZyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5QYWRkaW5nKDMpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYlBhZ2UyLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSgzMzIsIDE5NCk7XHJcbiAgICAgICAgICAgIHRoaXMudGFiUGFnZTIuVGFiSW5kZXggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnRhYlBhZ2UyLlRhZyA9IFwiZm9ybS1jb250cm9sXCI7XHJcbiAgICAgICAgICAgIHRoaXMudGFiUGFnZTIuVGV4dCA9IFwidGFiUGFnZTJcIjtcclxuICAgICAgICAgICAgdGhpcy50YWJQYWdlMi5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b242XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoNiwgNik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5OYW1lID0gXCJidXR0b242XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMTI2LCAyMyk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5UYWJJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuVGV4dCA9IFwiQnV0dG9uIFBhZ2UgMlwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gZnJtQ3VzdG9tZXJcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuQ2xpZW50U2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY5NywgNDEzKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy50YWJDb250cm9sMSk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuY2hlY2tCb3gxKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b240KTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b24zKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b24yKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b24xKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5sYWJlbDMpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLnRleHRCb3gzKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5sYWJlbDIpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLnRleHRCb3gyKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5sYWJlbDEpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLnRleHRCb3gxKTtcclxuICAgICAgICAgICAgdGhpcy5OYW1lID0gXCJmcm1DdXN0b21lclwiO1xyXG4gICAgICAgICAgICB0aGlzLlRhZyA9IFwibW9kYWwtY29udGVudFwiO1xyXG4gICAgICAgICAgICB0aGlzLnRhYkNvbnRyb2wxLlJlc3VtZUxheW91dChmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMudGFiUGFnZTEuUmVzdW1lTGF5b3V0KGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy50YWJQYWdlMi5SZXN1bWVMYXlvdXQoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLlJlc3VtZUxheW91dChmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuUGVyZm9ybUxheW91dCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCB0ZXh0Qm94MV9UZXh0Q2hhbmdlZChvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEN1c3RvbWVyLkxhc3ROYW1lID0gdGV4dEJveDEuVGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCB0ZXh0Qm94Ml9UZXh0Q2hhbmdlZChvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEN1c3RvbWVyLkZpcnN0TmFtZSA9IHRleHRCb3gyLlRleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgdGV4dEJveDNfVGV4dENoYW5nZWQob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDdXN0b21lci5BZGRyZXNzID0gdGV4dEJveDMuVGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtTZXJ2ZXJTaWRlKENydWRDb21tYW5kLklOU0VSVCldXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjFfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtTZXJ2ZXJTaWRlKENydWRDb21tYW5kLlVQREFURSldXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjJfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtTZXJ2ZXJTaWRlKENydWRDb21tYW5kLkRFTEVURSldXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjNfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtTZXJ2ZXJTaWRlKENydWRDb21tYW5kLlNFTEVDVCldXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjRfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBUZXN0O1xyXG5cclxubmFtZXNwYWNlIFRlc3RCcmlkZ2Vcclxue1xyXG4gICAgcHVibGljIGNsYXNzIENsYXNzMVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBNYWluKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gbmV3IGZybUN1c3RvbWVyKCk7XHJcbiAgICAgICAgICAgIHguU2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXQp9Cg==
