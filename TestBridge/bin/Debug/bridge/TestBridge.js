/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 17.7.0
 */
Bridge.assembly("TestBridge", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.Examples.frmCalculator", {
        inherits: [System.Windows.Forms.Form],
        fields: {
            prev: null,
            keyValuePairs: null,
            currentMod: null,
            /**
             * Required designer variable.
             *
             * @instance
             * @private
             * @memberof Test.Examples.frmCalculator
             * @type System.ComponentModel.IContainer
             */
            components: null,
            textBox1: null,
            button1: null,
            button2: null,
            button3: null,
            button4: null,
            button5: null,
            button6: null,
            button7: null,
            button8: null,
            button9: null,
            button10: null,
            button11: null,
            button12: null,
            button13: null,
            button14: null,
            button15: null,
            button16: null,
            button17: null,
            button18: null,
            button19: null,
            button20: null
        },
        ctors: {
            init: function () {
                this.keyValuePairs = new (System.Collections.Generic.Dictionary$2(System.Windows.Forms.Control,Test.Examples.frmCalculator.ScaleInfo)).ctor();
            },
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Form.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            frmCalculator_Load: function (sender, e) {
                var $t, $t1;
                var client = this.ClientSize.$clone();

                $t = Bridge.getEnumerator(this.Controls);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        var location = item.Location.$clone();
                        var size = item.Size.$clone();


                        this.keyValuePairs.setItem(item, ($t1 = new Test.Examples.frmCalculator.ScaleInfo(), $t1.LeftPercent = location.X / client.Width, $t1.TopPercent = location.Y / client.Height, $t1.WidthPercent = size.Width / client.Width, $t1.HeightPercent = size.Height / client.Height, $t1));

                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            OnResize: function (e) {
                var $t;
                var client = this.ClientSize.$clone();

                $t = Bridge.getEnumerator(this.Controls);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        if (this.keyValuePairs.containsKey(item)) {
                            var scaleInfo = this.keyValuePairs.getItem(item);
                            item.Location = new System.Drawing.Point.$ctor1(Bridge.Int.clip32(client.Width * scaleInfo.LeftPercent), Bridge.Int.clip32(client.Height * scaleInfo.TopPercent));
                            item.Size = new System.Drawing.Size.$ctor2(Bridge.Int.clip32(client.Width * scaleInfo.WidthPercent), Bridge.Int.clip32(client.Height * scaleInfo.HeightPercent));
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }


                System.Windows.Forms.Form.prototype.OnResize.call(this, e);
            },
            button15_Click: function (sender, e) {
                this.textBox1.Text = (this.textBox1.Text || "") + (Bridge.cast(sender, System.Windows.Forms.Control).Text || "");
            },
            button9_Click: function (sender, e) {
                var mod = Bridge.cast(sender, System.Windows.Forms.Control).Text;

                if (System.String.isNullOrWhiteSpace(this.prev)) {
                    this.currentMod = mod;
                    this.prev = this.textBox1.Text;
                    this.textBox1.Text = "";
                } else {
                    if (Bridge.referenceEquals(mod, "=")) {
                        var value1 = { v : System.Decimal(0) };
                        var value2 = { v : System.Decimal(0) };
                        System.Decimal.tryParse(this.prev, null, value1);
                        System.Decimal.tryParse(this.textBox1.Text, null, value2);
                        this.prev = "";

                        if (Bridge.referenceEquals(this.currentMod, "+")) {
                            this.textBox1.Text = (value1.v.add(value2.v)).toString();
                        } else if (Bridge.referenceEquals(this.currentMod, "-")) {
                            this.textBox1.Text = (value1.v.sub(value2.v)).toString();
                        } else if (Bridge.referenceEquals(this.currentMod, "÷")) {
                            this.textBox1.Text = (value1.v.div(value2.v)).toString();
                        } else if (Bridge.referenceEquals(this.currentMod, "X")) {
                            this.textBox1.Text = (value1.v.mul(value2.v)).toString();
                        }
                        this.currentMod = "";
                    }
                }
            },
            /**
             * Clean up any resources being used.
             *
             * @instance
             * @protected
             * @override
             * @this Test.Examples.frmCalculator
             * @memberof Test.Examples.frmCalculator
             * @param   {boolean}    disposing    true if managed resources should be disposed; otherwise, false.
             * @return  {void}
             */
            Dispose$1: function (disposing) {
                if (disposing && (this.components != null)) {
                    this.components.System$IDisposable$Dispose();
                }
                System.Windows.Forms.Form.prototype.Dispose$1.call(this, disposing);
            },
            /**
             * Required method for Designer support - do not modify
             the contents of this method with the code editor.
             *
             * @instance
             * @private
             * @this Test.Examples.frmCalculator
             * @memberof Test.Examples.frmCalculator
             * @return  {void}
             */
            InitializeComponent: function () {
                this.textBox1 = new System.Windows.Forms.TextBox();
                this.button1 = new System.Windows.Forms.Button();
                this.button2 = new System.Windows.Forms.Button();
                this.button3 = new System.Windows.Forms.Button();
                this.button4 = new System.Windows.Forms.Button();
                this.button5 = new System.Windows.Forms.Button();
                this.button6 = new System.Windows.Forms.Button();
                this.button7 = new System.Windows.Forms.Button();
                this.button8 = new System.Windows.Forms.Button();
                this.button9 = new System.Windows.Forms.Button();
                this.button10 = new System.Windows.Forms.Button();
                this.button11 = new System.Windows.Forms.Button();
                this.button12 = new System.Windows.Forms.Button();
                this.button13 = new System.Windows.Forms.Button();
                this.button14 = new System.Windows.Forms.Button();
                this.button15 = new System.Windows.Forms.Button();
                this.button16 = new System.Windows.Forms.Button();
                this.button17 = new System.Windows.Forms.Button();
                this.button18 = new System.Windows.Forms.Button();
                this.button19 = new System.Windows.Forms.Button();
                this.button20 = new System.Windows.Forms.Button();
                this.SuspendLayout();
                this.textBox1.BackColor = System.Drawing.Color.White.$clone();
                this.textBox1.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 12.0, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.textBox1.Location = new System.Drawing.Point.$ctor1(12, 12);
                this.textBox1.Name = "textBox1";
                this.textBox1.ReadOnly = true;
                this.textBox1.Size = new System.Drawing.Size.$ctor2(282, 26);
                this.textBox1.TabIndex = 0;
                this.button1.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 11.25, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button1.Location = new System.Drawing.Point.$ctor1(12, 112);
                this.button1.Name = "button1";
                this.button1.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button1.TabIndex = 1;
                this.button1.Text = "7";
                this.button1.UseVisualStyleBackColor = false;
                this.button1.addClick(Bridge.fn.cacheBind(this, this.button15_Click));
                this.button2.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 11.25, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button2.Location = new System.Drawing.Point.$ctor1(84, 112);
                this.button2.Name = "button2";
                this.button2.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button2.TabIndex = 2;
                this.button2.Text = "8";
                this.button2.UseVisualStyleBackColor = false;
                this.button2.addClick(Bridge.fn.cacheBind(this, this.button15_Click));
                this.button3.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 11.25, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button3.Location = new System.Drawing.Point.$ctor1(156, 112);
                this.button3.Name = "button3";
                this.button3.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button3.TabIndex = 3;
                this.button3.Text = "9";
                this.button3.UseVisualStyleBackColor = false;
                this.button3.addClick(Bridge.fn.cacheBind(this, this.button15_Click));
                this.button4.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 11.25, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button4.Location = new System.Drawing.Point.$ctor1(228, 112);
                this.button4.Name = "button4";
                this.button4.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button4.TabIndex = 4;
                this.button4.Text = "X";
                this.button4.UseVisualStyleBackColor = true;
                this.button4.addClick(Bridge.fn.cacheBind(this, this.button9_Click));
                this.button5.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 11.25, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button5.Location = new System.Drawing.Point.$ctor1(228, 180);
                this.button5.Name = "button5";
                this.button5.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button5.TabIndex = 8;
                this.button5.Text = "−";
                this.button5.UseVisualStyleBackColor = true;
                this.button5.addClick(Bridge.fn.cacheBind(this, this.button9_Click));
                this.button6.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 11.25, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button6.Location = new System.Drawing.Point.$ctor1(156, 180);
                this.button6.Name = "button6";
                this.button6.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button6.TabIndex = 7;
                this.button6.Text = "6";
                this.button6.UseVisualStyleBackColor = false;
                this.button6.addClick(Bridge.fn.cacheBind(this, this.button15_Click));
                this.button7.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 11.25, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button7.Location = new System.Drawing.Point.$ctor1(84, 180);
                this.button7.Name = "button7";
                this.button7.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button7.TabIndex = 6;
                this.button7.Text = "5";
                this.button7.UseVisualStyleBackColor = false;
                this.button7.addClick(Bridge.fn.cacheBind(this, this.button15_Click));
                this.button8.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 11.25, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button8.Location = new System.Drawing.Point.$ctor1(12, 180);
                this.button8.Name = "button8";
                this.button8.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button8.TabIndex = 5;
                this.button8.Text = "4";
                this.button8.UseVisualStyleBackColor = false;
                this.button8.addClick(Bridge.fn.cacheBind(this, this.button15_Click));
                this.button9.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 15.75, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button9.Location = new System.Drawing.Point.$ctor1(228, 248);
                this.button9.Name = "button9";
                this.button9.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button9.TabIndex = 12;
                this.button9.Text = "+";
                this.button9.UseVisualStyleBackColor = true;
                this.button9.addClick(Bridge.fn.cacheBind(this, this.button9_Click));
                this.button10.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 11.25, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button10.Location = new System.Drawing.Point.$ctor1(156, 248);
                this.button10.Name = "button10";
                this.button10.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button10.TabIndex = 11;
                this.button10.Text = "3";
                this.button10.UseVisualStyleBackColor = false;
                this.button10.addClick(Bridge.fn.cacheBind(this, this.button15_Click));
                this.button11.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 11.25, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button11.Location = new System.Drawing.Point.$ctor1(84, 248);
                this.button11.Name = "button11";
                this.button11.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button11.TabIndex = 10;
                this.button11.Text = "2";
                this.button11.UseVisualStyleBackColor = false;
                this.button11.addClick(Bridge.fn.cacheBind(this, this.button15_Click));
                this.button12.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 11.25, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button12.Location = new System.Drawing.Point.$ctor1(12, 248);
                this.button12.Name = "button12";
                this.button12.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button12.TabIndex = 9;
                this.button12.Text = "1";
                this.button12.UseVisualStyleBackColor = false;
                this.button12.addClick(Bridge.fn.cacheBind(this, this.button15_Click));
                this.button13.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 11.25, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button13.Location = new System.Drawing.Point.$ctor1(228, 316);
                this.button13.Name = "button13";
                this.button13.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button13.TabIndex = 13;
                this.button13.Text = "=";
                this.button13.UseVisualStyleBackColor = true;
                this.button13.addClick(Bridge.fn.cacheBind(this, this.button9_Click));
                this.button14.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 14.25, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, (0));
                this.button14.Location = new System.Drawing.Point.$ctor1(156, 316);
                this.button14.Name = "button14";
                this.button14.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button14.TabIndex = 14;
                this.button14.Text = ".";
                this.button14.UseVisualStyleBackColor = true;
                this.button15.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 11.25, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button15.Location = new System.Drawing.Point.$ctor1(84, 316);
                this.button15.Name = "button15";
                this.button15.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button15.TabIndex = 15;
                this.button15.Text = "0";
                this.button15.UseVisualStyleBackColor = false;
                this.button15.addClick(Bridge.fn.cacheBind(this, this.button15_Click));
                this.button16.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 11.25, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button16.Location = new System.Drawing.Point.$ctor1(12, 316);
                this.button16.Name = "button16";
                this.button16.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button16.TabIndex = 16;
                this.button16.Text = "±";
                this.button16.UseVisualStyleBackColor = true;
                this.button17.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 11.25, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button17.Location = new System.Drawing.Point.$ctor1(12, 44);
                this.button17.Name = "button17";
                this.button17.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button17.TabIndex = 17;
                this.button17.Text = "CE";
                this.button17.UseVisualStyleBackColor = true;
                this.button18.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 11.25, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button18.Location = new System.Drawing.Point.$ctor1(84, 44);
                this.button18.Name = "button18";
                this.button18.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button18.TabIndex = 18;
                this.button18.Text = "C";
                this.button18.UseVisualStyleBackColor = true;
                this.button19.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 11.25, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button19.Location = new System.Drawing.Point.$ctor1(156, 44);
                this.button19.Name = "button19";
                this.button19.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button19.TabIndex = 19;
                this.button19.Text = "DEL";
                this.button19.UseVisualStyleBackColor = true;
                this.button20.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 15.75, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.button20.Location = new System.Drawing.Point.$ctor1(228, 44);
                this.button20.Name = "button20";
                this.button20.Size = new System.Drawing.Size.$ctor2(66, 62);
                this.button20.TabIndex = 20;
                this.button20.Text = "÷";
                this.button20.UseVisualStyleBackColor = true;
                this.button20.addClick(Bridge.fn.cacheBind(this, this.button9_Click));
                this.AutoScaleDimensions = new System.Drawing.SizeF.$ctor3(6.0, 13.0);
                this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
                this.ClientSize = new System.Drawing.Size.$ctor2(306, 388);
                this.Controls.add(this.button20);
                this.Controls.add(this.button19);
                this.Controls.add(this.button18);
                this.Controls.add(this.button17);
                this.Controls.add(this.button16);
                this.Controls.add(this.button15);
                this.Controls.add(this.button14);
                this.Controls.add(this.button13);
                this.Controls.add(this.button9);
                this.Controls.add(this.button10);
                this.Controls.add(this.button11);
                this.Controls.add(this.button12);
                this.Controls.add(this.button5);
                this.Controls.add(this.button6);
                this.Controls.add(this.button7);
                this.Controls.add(this.button8);
                this.Controls.add(this.button4);
                this.Controls.add(this.button3);
                this.Controls.add(this.button2);
                this.Controls.add(this.button1);
                this.Controls.add(this.textBox1);
                this.Name = "frmCalculator";
                this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
                this.Text = "Calculator";
                this.addLoad(Bridge.fn.cacheBind(this, this.frmCalculator_Load));
                this.ResumeLayout$1(false);
                this.PerformLayout$1();

            }
        }
    });

    Bridge.define("Test.Examples.frmCalculator.ScaleInfo", {
        $kind: "nested class",
        fields: {
            LeftPercent: 0,
            TopPercent: 0,
            WidthPercent: 0,
            HeightPercent: 0
        }
    });

    Bridge.define("Test.frmTest", {
        inherits: [System.Windows.Forms.Form],
        statics: {
            fields: {
                r: null
            },
            ctors: {
                init: function () {
                    this.r = new System.Random.ctor();
                }
            }
        },
        fields: {
            /**
             * Required designer variable.
             *
             * @instance
             * @private
             * @memberof Test.frmTest
             * @type System.ComponentModel.IContainer
             */
            components: null,
            panel1: null,
            dataGridView1: null,
            panel2: null,
            panel3: null,
            dataGridView2: null,
            button3: null,
            button2: null,
            button1: null,
            button4: null,
            Column1: null,
            Column2: null,
            Column3: null,
            Column4: null,
            Column5: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Form.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            frmTest_Load: function (sender, e) {
                var dt = new System.Data.DataTable();
                dt.Columns.Add("Name", System.Int32);
                dt.BeginNewRow(10000);
                for (var i = 0; i < 10000; i = (i + 1) | 0) {
                    var dr = dt.NewRow();

                    dr.setItem(0, Bridge.box(Test.frmTest.r.Next(), System.Int32));
                }

                dt.AcceptChanges();

                this.dataGridView1.DataSource = dt;


                dt = new System.Data.DataTable();
                dt.Columns.Add("Data1", System.Int32);
                dt.Columns.Add("Data2", System.Decimal);
                dt.Columns.Add("Data3", System.String);
                dt.Columns.Add("Data4", System.DateTime);

                dt.BeginNewRow(10000);
                for (var i1 = 0; i1 < 10000; i1 = (i1 + 1) | 0) {
                    var dr1 = dt.NewRow();

                    dr1.setItem(0, Bridge.box(Test.frmTest.r.Next(), System.Int32));
                    dr1.setItem(1, System.Decimal(Test.frmTest.r.NextDouble(), null, System.Double));
                    dr1.setItem(2, (Bridge.toString(Test.frmTest.r.Next()) || "") + " string");
                    dr1.setItem(3, Bridge.box(System.DateTime.addDays(System.DateTime.getNow(), Test.frmTest.r.NextDouble()), System.DateTime, System.DateTime.format));

                }

                dt.AcceptChanges();

                this.dataGridView2.DataSource = dt;

                this.dataGridView1.ColumnAutoWidth = true;

                this.dataGridView2.BestFitAllColumns(true);
                this.dataGridView2.ShowFindPanel();
            },
            button1_Click: function (sender, e) {
                this.dataGridView1.Tag = "table table-dark";
                this.dataGridView2.Tag = "table table-dark";
            },
            button2_Click: function (sender, e) {
                this.dataGridView1.Tag = "table table-striped";
                this.dataGridView2.Tag = "table table-striped";
            },
            button3_Click: function (sender, e) {
                this.dataGridView1.Tag = "table table-striped table-dark";
                this.dataGridView2.Tag = "table table-striped table-dark";
            },
            button4_Click: function (sender, e) {
                this.dataGridView1.Tag = "table";
                this.dataGridView2.Tag = "table";
            },
            /**
             * Clean up any resources being used.
             *
             * @instance
             * @protected
             * @override
             * @this Test.frmTest
             * @memberof Test.frmTest
             * @param   {boolean}    disposing    true if managed resources should be disposed; otherwise, false.
             * @return  {void}
             */
            Dispose$1: function (disposing) {
                if (disposing && (this.components != null)) {
                    this.components.System$IDisposable$Dispose();
                }
                System.Windows.Forms.Form.prototype.Dispose$1.call(this, disposing);
            },
            /**
             * Required method for Designer support - do not modify
             the contents of this method with the code editor.
             *
             * @instance
             * @private
             * @this Test.frmTest
             * @memberof Test.frmTest
             * @return  {void}
             */
            InitializeComponent: function () {
                this.panel1 = new System.Windows.Forms.Panel();
                this.dataGridView1 = new System.Windows.Forms.DataGridView.ctor();
                this.Column1 = new System.Windows.Forms.DataGridViewTextBoxColumn.ctor();
                this.panel2 = new System.Windows.Forms.Panel();
                this.button4 = new System.Windows.Forms.Button();
                this.button3 = new System.Windows.Forms.Button();
                this.button2 = new System.Windows.Forms.Button();
                this.button1 = new System.Windows.Forms.Button();
                this.panel3 = new System.Windows.Forms.Panel();
                this.dataGridView2 = new System.Windows.Forms.DataGridView.ctor();
                this.Column2 = new System.Windows.Forms.DataGridViewTextBoxColumn.ctor();
                this.Column3 = new System.Windows.Forms.DataGridViewTextBoxColumn.ctor();
                this.Column4 = new System.Windows.Forms.DataGridViewTextBoxColumn.ctor();
                this.Column5 = new System.Windows.Forms.DataGridViewTextBoxColumn.ctor();
                this.panel1.SuspendLayout();
                Bridge.cast((this.dataGridView1), System.ComponentModel.ISupportInitialize).System$ComponentModel$ISupportInitialize$BeginInit();
                this.panel2.SuspendLayout();
                this.panel3.SuspendLayout();
                Bridge.cast((this.dataGridView2), System.ComponentModel.ISupportInitialize).System$ComponentModel$ISupportInitialize$BeginInit();
                this.SuspendLayout();
                this.panel1.Controls.add(this.dataGridView1);
                this.panel1.Dock = System.Windows.Forms.DockStyle.Left;
                this.panel1.Location = new System.Drawing.Point.$ctor1(0, 0);
                this.panel1.Name = "panel1";
                this.panel1.Size = new System.Drawing.Size.$ctor2(216, 450);
                this.panel1.TabIndex = 0;
                this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
                this.dataGridView1.Columns.AddRange(System.Array.init([this.Column1], System.Windows.Forms.DataGridViewColumn));
                this.dataGridView1.Dock = System.Windows.Forms.DockStyle.Fill;
                this.dataGridView1.Location = new System.Drawing.Point.$ctor1(0, 0);
                this.dataGridView1.Name = "dataGridView1";
                this.dataGridView1.Size = new System.Drawing.Size.$ctor2(216, 450);
                this.dataGridView1.TabIndex = 0;
                this.dataGridView1.Tag = "table";
                this.Column1.DataPropertyName = "Name";
                this.Column1.HeaderText = "Name";
                this.Column1.Name = "Column1";
                this.panel2.Controls.add(this.button4);
                this.panel2.Controls.add(this.button3);
                this.panel2.Controls.add(this.button2);
                this.panel2.Controls.add(this.button1);
                this.panel2.Dock = System.Windows.Forms.DockStyle.Bottom;
                this.panel2.Location = new System.Drawing.Point.$ctor1(216, 358);
                this.panel2.Name = "panel2";
                this.panel2.Size = new System.Drawing.Size.$ctor2(584, 92);
                this.panel2.TabIndex = 1;
                this.button4.Anchor = ((9));
                this.button4.Location = new System.Drawing.Point.$ctor1(453, 6);
                this.button4.Name = "button4";
                this.button4.Size = new System.Drawing.Size.$ctor2(119, 79);
                this.button4.TabIndex = 3;
                this.button4.Text = "Light";
                this.button4.UseVisualStyleBackColor = true;
                this.button4.addClick(Bridge.fn.cacheBind(this, this.button4_Click));
                this.button3.Anchor = ((9));
                this.button3.Location = new System.Drawing.Point.$ctor1(328, 6);
                this.button3.Name = "button3";
                this.button3.Size = new System.Drawing.Size.$ctor2(119, 79);
                this.button3.TabIndex = 2;
                this.button3.Text = "Dark Striped";
                this.button3.UseVisualStyleBackColor = true;
                this.button3.addClick(Bridge.fn.cacheBind(this, this.button3_Click));
                this.button2.Anchor = ((9));
                this.button2.Location = new System.Drawing.Point.$ctor1(203, 6);
                this.button2.Name = "button2";
                this.button2.Size = new System.Drawing.Size.$ctor2(119, 79);
                this.button2.TabIndex = 1;
                this.button2.Text = "Light Striped";
                this.button2.UseVisualStyleBackColor = true;
                this.button2.addClick(Bridge.fn.cacheBind(this, this.button2_Click));
                this.button1.Anchor = ((14));
                this.button1.Location = new System.Drawing.Point.$ctor1(6, 6);
                this.button1.Name = "button1";
                this.button1.Size = new System.Drawing.Size.$ctor2(191, 79);
                this.button1.TabIndex = 0;
                this.button1.Text = "Dark";
                this.button1.UseVisualStyleBackColor = true;
                this.button1.addClick(Bridge.fn.cacheBind(this, this.button1_Click));
                this.panel3.Controls.add(this.dataGridView2);
                this.panel3.Dock = System.Windows.Forms.DockStyle.Fill;
                this.panel3.Location = new System.Drawing.Point.$ctor1(216, 0);
                this.panel3.Name = "panel3";
                this.panel3.Size = new System.Drawing.Size.$ctor2(584, 358);
                this.panel3.TabIndex = 2;
                this.dataGridView2.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
                this.dataGridView2.Columns.AddRange(System.Array.init([this.Column2, this.Column3, this.Column4, this.Column5], System.Windows.Forms.DataGridViewColumn));
                this.dataGridView2.Dock = System.Windows.Forms.DockStyle.Fill;
                this.dataGridView2.Location = new System.Drawing.Point.$ctor1(0, 0);
                this.dataGridView2.Name = "dataGridView2";
                this.dataGridView2.Size = new System.Drawing.Size.$ctor2(584, 358);
                this.dataGridView2.TabIndex = 0;
                this.dataGridView2.Tag = "table";
                this.Column2.DataPropertyName = "Data1";
                this.Column2.HeaderText = "Data 1";
                this.Column2.Name = "Column2";
                this.Column3.DataPropertyName = "Data2";
                this.Column3.HeaderText = "Data 2";
                this.Column3.Name = "Column3";
                this.Column4.DataPropertyName = "Data3";
                this.Column4.HeaderText = "Data 3";
                this.Column4.Name = "Column4";
                this.Column5.DataPropertyName = "Data4";
                this.Column5.HeaderText = "Data 4";
                this.Column5.Name = "Column5";
                this.AutoScaleDimensions = new System.Drawing.SizeF.$ctor3(6.0, 13.0);
                this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
                this.ClientSize = new System.Drawing.Size.$ctor2(800, 450);
                this.Controls.add(this.panel3);
                this.Controls.add(this.panel2);
                this.Controls.add(this.panel1);
                this.Name = "frmTest";
                this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
                this.Text = "Test Application";
                this.addLoad(Bridge.fn.cacheBind(this, this.frmTest_Load));
                this.panel1.ResumeLayout$1(false);
                Bridge.cast((this.dataGridView1), System.ComponentModel.ISupportInitialize).System$ComponentModel$ISupportInitialize$EndInit();
                this.panel2.ResumeLayout$1(false);
                this.panel3.ResumeLayout$1(false);
                Bridge.cast((this.dataGridView2), System.ComponentModel.ISupportInitialize).System$ComponentModel$ISupportInitialize$EndInit();
                this.ResumeLayout$1(false);

            }
        }
    });

    Bridge.define("TestBridge.Program", {
        main: function Main () {
            var x = new Test.frmTest();
            x.Show();


        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJUZXN0QnJpZGdlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyIuLi9UZXN0L0V4YW1wbGVzL2ZybUNhbGN1bGF0b3IuRGVzaWduZXIuY3MiLCIuLi9UZXN0L0V4YW1wbGVzL2ZybUNhbGN1bGF0b3IuY3MiLCIuLi9UZXN0L2ZybVRlc3QuY3MiLCIuLi9UZXN0L2ZybVRlc3QuRGVzaWduZXIuY3MiLCJQcm9ncmFtLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQU84REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNDcUJBQSxLQUFJQTs7Ozs7Z0JBWnREQTs7OzswQ0FjNEJBLFFBQWVBOztnQkFFM0NBLGFBQWFBOztnQkFFYkEsMEJBQXlCQTs7Ozt3QkFFckJBLGVBQWVBO3dCQUNmQSxXQUFXQTs7O3dCQUdYQSwyQkFBY0EsTUFBUUEsV0FBSUEsMkRBRVJBLGFBQWFBLEFBQU9BLCtCQUNyQkEsYUFBYUEsQUFBT0Esa0NBQ2xCQSxhQUFhQSxBQUFPQSxrQ0FDbkJBLGNBQWNBLEFBQU9BOzs7Ozs7Ozs7Z0NBTWhCQTs7Z0JBRTdCQSxhQUFhQTs7Z0JBRWJBLDBCQUF5QkE7Ozs7d0JBRXJCQSxJQUFJQSwrQkFBMEJBOzRCQUUxQkEsZ0JBQWdCQSwyQkFBY0E7NEJBRTlCQSxnQkFBZ0JBLElBQUlBLDRCQUNmQSxrQkFBS0EsQUFBQ0EsZUFBZUEsd0JBQ3JCQSxrQkFBS0EsQUFBQ0EsZ0JBQWdCQTs0QkFDM0JBLFlBQVlBLElBQUlBLDJCQUNaQSxrQkFBS0EsQUFBQ0EsZUFBZUEseUJBQ3JCQSxrQkFBS0EsQUFBQ0EsZ0JBQWdCQTs7Ozs7Ozs7OztnQkFLbENBLHdEQUFjQTs7c0NBR1VBLFFBQWVBO2dCQUV2Q0EsbURBQWlCQSxBQUFDQSxZQUFTQTs7cUNBSUpBLFFBQWVBO2dCQUV0Q0EsVUFBYUEsQUFBQ0EsWUFBU0E7O2dCQUV2QkEsSUFBSUEsaUNBQTBCQTtvQkFFMUJBLGtCQUFhQTtvQkFDYkEsWUFBT0E7b0JBQ1BBOztvQkFJQUEsSUFBSUE7d0JBRUFBO3dCQUNBQTt3QkFDQUEsd0JBQWlCQSxpQkFBVUE7d0JBQzNCQSx3QkFBaUJBLDBCQUFtQkE7d0JBQ3BDQTs7d0JBRUFBLElBQUlBOzRCQUVBQSxxQkFBZ0JBLENBQUNBLGFBQVNBOytCQUV6QkEsSUFBSUE7NEJBRUxBLHFCQUFnQkEsQ0FBQ0EsYUFBU0E7K0JBRXpCQSxJQUFJQTs0QkFFTEEscUJBQWdCQSxDQUFDQSxhQUFTQTsrQkFFekJBLElBQUlBOzRCQUVMQSxxQkFBZ0JBLENBQUNBLGFBQVNBOzt3QkFFOUJBOzs7Ozs7Ozs7Ozs7Ozs7aUNEdkdvQkE7Z0JBRTVCQSxJQUFJQSxhQUFhQSxDQUFDQSxtQkFBY0E7b0JBRTVCQTs7Z0JBRUpBLHlEQUFhQTs7Ozs7Ozs7Ozs7OztnQkFXYkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkE7Z0JBSUFBLDBCQUEwQkE7Z0JBQzFCQSxxQkFBcUJBLElBQUlBLHlEQUFpREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNoSkEseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQTtnQkFDQUEscUJBQXFCQSxJQUFJQTtnQkFDekJBO2dCQUlBQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxxQkFBcUJBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNuSkEseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsdUJBQXVCQSxBQUF3QkE7Z0JBSS9DQSxxQkFBcUJBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNuSkEseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsdUJBQXVCQSxBQUF3QkE7Z0JBSS9DQSxxQkFBcUJBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNuSkEseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBO2dC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QkE7Z0JBQ0FBLG1CQUFtQkEsSUFBSUE7Z0JBQ3ZCQTtnQkFJQUEsaURBQWlEQTtnQkFDakRBLG9DQUFvQ0EsbUJBQ3BDQSxjQUNBQSxjQUNBQSxjQUNBQTtnQkFDQUEsMEJBQTBCQTtnQkFDMUJBLDhCQUE4QkEsSUFBSUE7Z0JBQ2xDQTtnQkFDQUEsMEJBQTBCQSxJQUFJQTtnQkFDOUJBO2dCQUNBQTtnQkFJQUE7Z0JBQ0FBO2dCQUNBQTtnQkFJQUE7Z0JBQ0FBO2dCQUNBQTtnQkFJQUE7Z0JBQ0FBO2dCQUNBQTtnQkFJQUE7Z0JBQ0FBO2dCQUNBQTtnQkFJQUEsMkJBQTJCQSxJQUFJQTtnQkFDL0JBLHFCQUFxQkE7Z0JBQ3JCQSxrQkFBa0JBLElBQUlBO2dCQUN0QkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkE7Z0JBQ0FBLHFCQUFxQkE7Z0JBQ3JCQTtnQkFDQUEsYUFBYUEsQUFBd0JBO2dCQUNyQ0E7Z0JBQ0FBLEFBQUNBLFlBQTBDQSxDQUFDQTtnQkFDNUNBO2dCQUNBQTtnQkFDQUEsQUFBQ0EsWUFBMENBLENBQUNBO2dCQUM1Q0E7Ozs7Ozs7O1lDM0xBQSxRQUFRQSxJQUFJQTtZQUNaQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJuYW1lc3BhY2UgVGVzdC5FeGFtcGxlc1xyXG57XHJcbiAgICBwYXJ0aWFsIGNsYXNzIGZybUNhbGN1bGF0b3JcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFJlcXVpcmVkIGRlc2lnbmVyIHZhcmlhYmxlLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29tcG9uZW50TW9kZWwuSUNvbnRhaW5lciBjb21wb25lbnRzID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDbGVhbiB1cCBhbnkgcmVzb3VyY2VzIGJlaW5nIHVzZWQuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJkaXNwb3NpbmdcIj50cnVlIGlmIG1hbmFnZWQgcmVzb3VyY2VzIHNob3VsZCBiZSBkaXNwb3NlZDsgb3RoZXJ3aXNlLCBmYWxzZS48L3BhcmFtPlxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIERpc3Bvc2UoYm9vbCBkaXNwb3NpbmcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoZGlzcG9zaW5nICYmIChjb21wb25lbnRzICE9IG51bGwpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLkRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiYXNlLkRpc3Bvc2UoZGlzcG9zaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNyZWdpb24gV2luZG93cyBGb3JtIERlc2lnbmVyIGdlbmVyYXRlZCBjb2RlXHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gUmVxdWlyZWQgbWV0aG9kIGZvciBEZXNpZ25lciBzdXBwb3J0IC0gZG8gbm90IG1vZGlmeVxyXG4gICAgICAgIC8vLyB0aGUgY29udGVudHMgb2YgdGhpcyBtZXRob2Qgd2l0aCB0aGUgY29kZSBlZGl0b3IuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwcml2YXRlIHZvaWQgSW5pdGlhbGl6ZUNvbXBvbmVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRCb3gxID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLlRleHRCb3goKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNiA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b243ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjggPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOSA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMCA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMSA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMiA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNCA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNSA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNiA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xOCA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xOSA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yMCA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5TdXNwZW5kTGF5b3V0KCk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyB0ZXh0Qm94MVxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy50ZXh0Qm94MS5CYWNrQ29sb3IgPSBTeXN0ZW0uRHJhd2luZy5Db2xvci5XaGl0ZTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Qm94MS5Gb250ID0gbmV3IFN5c3RlbS5EcmF3aW5nLkZvbnQoXCJNaWNyb3NvZnQgU2FucyBTZXJpZlwiLCAxMkYsIFN5c3RlbS5EcmF3aW5nLkZvbnRTdHlsZS5SZWd1bGFyLCBTeXN0ZW0uRHJhd2luZy5HcmFwaGljc1VuaXQuUG9pbnQsICgoYnl0ZSkoMCkpKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Qm94MS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgxMiwgMTIpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRCb3gxLk5hbWUgPSBcInRleHRCb3gxXCI7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEJveDEuUmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRCb3gxLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSgyODIsIDI2KTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Qm94MS5UYWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24xXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuRm9udCA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Gb250KFwiTWljcm9zb2Z0IFNhbnMgU2VyaWZcIiwgMTEuMjVGLCBTeXN0ZW0uRHJhd2luZy5Gb250U3R5bGUuUmVndWxhciwgU3lzdGVtLkRyYXdpbmcuR3JhcGhpY3NVbml0LlBvaW50LCAoKGJ5dGUpKDApKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgxMiwgMTEyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLk5hbWUgPSBcImJ1dHRvbjFcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg2NiwgNjIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVGFiSW5kZXggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVGV4dCA9IFwiN1wiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uMTVfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uMlxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLkZvbnQgPSBuZXcgU3lzdGVtLkRyYXdpbmcuRm9udChcIk1pY3Jvc29mdCBTYW5zIFNlcmlmXCIsIDExLjI1RiwgU3lzdGVtLkRyYXdpbmcuRm9udFN0eWxlLlJlZ3VsYXIsIFN5c3RlbS5EcmF3aW5nLkdyYXBoaWNzVW5pdC5Qb2ludCwgKChieXRlKSgwKSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoODQsIDExMik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5OYW1lID0gXCJidXR0b24yXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNjYsIDYyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLlRhYkluZGV4ID0gMjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLlRleHQgPSBcIjhcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjE1X0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjNcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5Gb250ID0gbmV3IFN5c3RlbS5EcmF3aW5nLkZvbnQoXCJNaWNyb3NvZnQgU2FucyBTZXJpZlwiLCAxMS4yNUYsIFN5c3RlbS5EcmF3aW5nLkZvbnRTdHlsZS5SZWd1bGFyLCBTeXN0ZW0uRHJhd2luZy5HcmFwaGljc1VuaXQuUG9pbnQsICgoYnl0ZSkoMCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDE1NiwgMTEyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLk5hbWUgPSBcImJ1dHRvbjNcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg2NiwgNjIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuVGFiSW5kZXggPSAzO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuVGV4dCA9IFwiOVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uMTVfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uNFxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LkZvbnQgPSBuZXcgU3lzdGVtLkRyYXdpbmcuRm9udChcIk1pY3Jvc29mdCBTYW5zIFNlcmlmXCIsIDExLjI1RiwgU3lzdGVtLkRyYXdpbmcuRm9udFN0eWxlLlJlZ3VsYXIsIFN5c3RlbS5EcmF3aW5nLkdyYXBoaWNzVW5pdC5Qb2ludCwgKChieXRlKSgwKSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMjI4LCAxMTIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuTmFtZSA9IFwiYnV0dG9uNFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY2LCA2Mik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5UYWJJbmRleCA9IDQ7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5UZXh0ID0gXCJYXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjlfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uNVxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b241LkZvbnQgPSBuZXcgU3lzdGVtLkRyYXdpbmcuRm9udChcIk1pY3Jvc29mdCBTYW5zIFNlcmlmXCIsIDExLjI1RiwgU3lzdGVtLkRyYXdpbmcuRm9udFN0eWxlLlJlZ3VsYXIsIFN5c3RlbS5EcmF3aW5nLkdyYXBoaWNzVW5pdC5Qb2ludCwgKChieXRlKSgwKSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMjI4LCAxODApO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuTmFtZSA9IFwiYnV0dG9uNVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY2LCA2Mik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5UYWJJbmRleCA9IDg7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5UZXh0ID0gXCLiiJJcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241LkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uOV9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b242XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuRm9udCA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Gb250KFwiTWljcm9zb2Z0IFNhbnMgU2VyaWZcIiwgMTEuMjVGLCBTeXN0ZW0uRHJhd2luZy5Gb250U3R5bGUuUmVndWxhciwgU3lzdGVtLkRyYXdpbmcuR3JhcGhpY3NVbml0LlBvaW50LCAoKGJ5dGUpKDApKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgxNTYsIDE4MCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5OYW1lID0gXCJidXR0b242XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNjYsIDYyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LlRhYkluZGV4ID0gNztcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LlRleHQgPSBcIjZcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjE1X0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjdcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5Gb250ID0gbmV3IFN5c3RlbS5EcmF3aW5nLkZvbnQoXCJNaWNyb3NvZnQgU2FucyBTZXJpZlwiLCAxMS4yNUYsIFN5c3RlbS5EcmF3aW5nLkZvbnRTdHlsZS5SZWd1bGFyLCBTeXN0ZW0uRHJhd2luZy5HcmFwaGljc1VuaXQuUG9pbnQsICgoYnl0ZSkoMCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b243LkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDg0LCAxODApO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuTmFtZSA9IFwiYnV0dG9uN1wiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY2LCA2Mik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5UYWJJbmRleCA9IDY7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5UZXh0ID0gXCI1XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b24xNV9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b244XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguRm9udCA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Gb250KFwiTWljcm9zb2Z0IFNhbnMgU2VyaWZcIiwgMTEuMjVGLCBTeXN0ZW0uRHJhd2luZy5Gb250U3R5bGUuUmVndWxhciwgU3lzdGVtLkRyYXdpbmcuR3JhcGhpY3NVbml0LlBvaW50LCAoKGJ5dGUpKDApKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOC5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgxMiwgMTgwKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244Lk5hbWUgPSBcImJ1dHRvbjhcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244LlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg2NiwgNjIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguVGFiSW5kZXggPSA1O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguVGV4dCA9IFwiNFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244LkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uMTVfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uOVxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b245LkZvbnQgPSBuZXcgU3lzdGVtLkRyYXdpbmcuRm9udChcIk1pY3Jvc29mdCBTYW5zIFNlcmlmXCIsIDE1Ljc1RiwgU3lzdGVtLkRyYXdpbmcuRm9udFN0eWxlLlJlZ3VsYXIsIFN5c3RlbS5EcmF3aW5nLkdyYXBoaWNzVW5pdC5Qb2ludCwgKChieXRlKSgwKSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMjI4LCAyNDgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkuTmFtZSA9IFwiYnV0dG9uOVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY2LCA2Mik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5UYWJJbmRleCA9IDEyO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkuVGV4dCA9IFwiK1wiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b245X0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjEwXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEwLkZvbnQgPSBuZXcgU3lzdGVtLkRyYXdpbmcuRm9udChcIk1pY3Jvc29mdCBTYW5zIFNlcmlmXCIsIDExLjI1RiwgU3lzdGVtLkRyYXdpbmcuRm9udFN0eWxlLlJlZ3VsYXIsIFN5c3RlbS5EcmF3aW5nLkdyYXBoaWNzVW5pdC5Qb2ludCwgKChieXRlKSgwKSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEwLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDE1NiwgMjQ4KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMC5OYW1lID0gXCJidXR0b24xMFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEwLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg2NiwgNjIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEwLlRhYkluZGV4ID0gMTE7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTAuVGV4dCA9IFwiM1wiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEwLlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTAuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b24xNV9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24xMVxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMS5Gb250ID0gbmV3IFN5c3RlbS5EcmF3aW5nLkZvbnQoXCJNaWNyb3NvZnQgU2FucyBTZXJpZlwiLCAxMS4yNUYsIFN5c3RlbS5EcmF3aW5nLkZvbnRTdHlsZS5SZWd1bGFyLCBTeXN0ZW0uRHJhd2luZy5HcmFwaGljc1VuaXQuUG9pbnQsICgoYnl0ZSkoMCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCg4NCwgMjQ4KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMS5OYW1lID0gXCJidXR0b24xMVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjExLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg2NiwgNjIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjExLlRhYkluZGV4ID0gMTA7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTEuVGV4dCA9IFwiMlwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjExLlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTEuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b24xNV9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24xMlxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMi5Gb250ID0gbmV3IFN5c3RlbS5EcmF3aW5nLkZvbnQoXCJNaWNyb3NvZnQgU2FucyBTZXJpZlwiLCAxMS4yNUYsIFN5c3RlbS5EcmF3aW5nLkZvbnRTdHlsZS5SZWd1bGFyLCBTeXN0ZW0uRHJhd2luZy5HcmFwaGljc1VuaXQuUG9pbnQsICgoYnl0ZSkoMCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMi5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgxMiwgMjQ4KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMi5OYW1lID0gXCJidXR0b24xMlwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEyLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg2NiwgNjIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEyLlRhYkluZGV4ID0gOTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMi5UZXh0ID0gXCIxXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTIuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMi5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjE1X0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjEzXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEzLkZvbnQgPSBuZXcgU3lzdGVtLkRyYXdpbmcuRm9udChcIk1pY3Jvc29mdCBTYW5zIFNlcmlmXCIsIDExLjI1RiwgU3lzdGVtLkRyYXdpbmcuRm9udFN0eWxlLlJlZ3VsYXIsIFN5c3RlbS5EcmF3aW5nLkdyYXBoaWNzVW5pdC5Qb2ludCwgKChieXRlKSgwKSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEzLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDIyOCwgMzE2KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMy5OYW1lID0gXCJidXR0b24xM1wiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEzLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg2NiwgNjIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEzLlRhYkluZGV4ID0gMTM7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTMuVGV4dCA9IFwiPVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEzLlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMy5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjlfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uMTRcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTQuRm9udCA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Gb250KFwiTWljcm9zb2Z0IFNhbnMgU2VyaWZcIiwgMTQuMjVGLCBTeXN0ZW0uRHJhd2luZy5Gb250U3R5bGUuQm9sZCwgU3lzdGVtLkRyYXdpbmcuR3JhcGhpY3NVbml0LlBvaW50LCAoKGJ5dGUpKDApKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTQuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTU2LCAzMTYpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE0Lk5hbWUgPSBcImJ1dHRvbjE0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTQuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY2LCA2Mik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTQuVGFiSW5kZXggPSAxNDtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNC5UZXh0ID0gXCIuXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTQuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uMTVcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTUuRm9udCA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Gb250KFwiTWljcm9zb2Z0IFNhbnMgU2VyaWZcIiwgMTEuMjVGLCBTeXN0ZW0uRHJhd2luZy5Gb250U3R5bGUuUmVndWxhciwgU3lzdGVtLkRyYXdpbmcuR3JhcGhpY3NVbml0LlBvaW50LCAoKGJ5dGUpKDApKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTUuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoODQsIDMxNik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTUuTmFtZSA9IFwiYnV0dG9uMTVcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNS5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNjYsIDYyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNS5UYWJJbmRleCA9IDE1O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE1LlRleHQgPSBcIjBcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNS5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE1LkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uMTVfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uMTZcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTYuRm9udCA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Gb250KFwiTWljcm9zb2Z0IFNhbnMgU2VyaWZcIiwgMTEuMjVGLCBTeXN0ZW0uRHJhd2luZy5Gb250U3R5bGUuUmVndWxhciwgU3lzdGVtLkRyYXdpbmcuR3JhcGhpY3NVbml0LlBvaW50LCAoKGJ5dGUpKDApKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTYuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTIsIDMxNik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTYuTmFtZSA9IFwiYnV0dG9uMTZcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNi5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNjYsIDYyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNi5UYWJJbmRleCA9IDE2O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE2LlRleHQgPSBcIsKxXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTYuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uMTdcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTcuRm9udCA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Gb250KFwiTWljcm9zb2Z0IFNhbnMgU2VyaWZcIiwgMTEuMjVGLCBTeXN0ZW0uRHJhd2luZy5Gb250U3R5bGUuUmVndWxhciwgU3lzdGVtLkRyYXdpbmcuR3JhcGhpY3NVbml0LlBvaW50LCAoKGJ5dGUpKDApKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTcuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTIsIDQ0KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNy5OYW1lID0gXCJidXR0b24xN1wiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE3LlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg2NiwgNjIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE3LlRhYkluZGV4ID0gMTc7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTcuVGV4dCA9IFwiQ0VcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNy5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24xOFxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xOC5Gb250ID0gbmV3IFN5c3RlbS5EcmF3aW5nLkZvbnQoXCJNaWNyb3NvZnQgU2FucyBTZXJpZlwiLCAxMS4yNUYsIFN5c3RlbS5EcmF3aW5nLkZvbnRTdHlsZS5SZWd1bGFyLCBTeXN0ZW0uRHJhd2luZy5HcmFwaGljc1VuaXQuUG9pbnQsICgoYnl0ZSkoMCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xOC5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCg4NCwgNDQpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE4Lk5hbWUgPSBcImJ1dHRvbjE4XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTguU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY2LCA2Mik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTguVGFiSW5kZXggPSAxODtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xOC5UZXh0ID0gXCJDXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTguVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uMTlcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTkuRm9udCA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Gb250KFwiTWljcm9zb2Z0IFNhbnMgU2VyaWZcIiwgMTEuMjVGLCBTeXN0ZW0uRHJhd2luZy5Gb250U3R5bGUuUmVndWxhciwgU3lzdGVtLkRyYXdpbmcuR3JhcGhpY3NVbml0LlBvaW50LCAoKGJ5dGUpKDApKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTkuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTU2LCA0NCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTkuTmFtZSA9IFwiYnV0dG9uMTlcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xOS5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNjYsIDYyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xOS5UYWJJbmRleCA9IDE5O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE5LlRleHQgPSBcIkRFTFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE5LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjIwXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIwLkZvbnQgPSBuZXcgU3lzdGVtLkRyYXdpbmcuRm9udChcIk1pY3Jvc29mdCBTYW5zIFNlcmlmXCIsIDE1Ljc1RiwgU3lzdGVtLkRyYXdpbmcuRm9udFN0eWxlLlJlZ3VsYXIsIFN5c3RlbS5EcmF3aW5nLkdyYXBoaWNzVW5pdC5Qb2ludCwgKChieXRlKSgwKSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIwLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDIyOCwgNDQpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIwLk5hbWUgPSBcImJ1dHRvbjIwXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMjAuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY2LCA2Mik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMjAuVGFiSW5kZXggPSAyMDtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yMC5UZXh0ID0gXCLDt1wiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIwLlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yMC5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjlfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gZnJtQ2FsY3VsYXRvclxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5BdXRvU2NhbGVEaW1lbnNpb25zID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemVGKDZGLCAxM0YpO1xyXG4gICAgICAgICAgICB0aGlzLkF1dG9TY2FsZU1vZGUgPSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BdXRvU2NhbGVNb2RlLkZvbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuQ2xpZW50U2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDMwNiwgMzg4KTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b24yMCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMTkpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjE4KTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b24xNyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMTYpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjE1KTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b24xNCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMTMpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjkpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjEwKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b24xMSk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMTIpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjUpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjYpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjcpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjQpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjMpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjIpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjEpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLnRleHRCb3gxKTtcclxuICAgICAgICAgICAgdGhpcy5OYW1lID0gXCJmcm1DYWxjdWxhdG9yXCI7XHJcbiAgICAgICAgICAgIHRoaXMuU3RhcnRQb3NpdGlvbiA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkZvcm1TdGFydFBvc2l0aW9uLkNlbnRlclNjcmVlbjtcclxuICAgICAgICAgICAgdGhpcy5UZXh0ID0gXCJDYWxjdWxhdG9yXCI7XHJcbiAgICAgICAgICAgIHRoaXMuTG9hZCArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmZybUNhbGN1bGF0b3JfTG9hZCk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lTGF5b3V0KGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5QZXJmb3JtTGF5b3V0KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2VuZHJlZ2lvblxyXG5cclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLlRleHRCb3ggdGV4dEJveDE7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uMTtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b24yO1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uIGJ1dHRvbjM7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uNDtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b241O1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uIGJ1dHRvbjY7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uNztcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b244O1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uIGJ1dHRvbjk7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uMTA7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uMTE7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uMTI7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uMTM7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uMTQ7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uMTU7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uMTY7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uMTc7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uMTg7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uMTk7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uMjA7XHJcbiAgICB9XHJcbn0iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uQ29tcG9uZW50TW9kZWw7XHJcbnVzaW5nIFN5c3RlbS5EYXRhO1xyXG51c2luZyBTeXN0ZW0uRHJhd2luZztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Gb3JtcztcclxuXHJcbm5hbWVzcGFjZSBUZXN0LkV4YW1wbGVzXHJcbntcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIGZybUNhbGN1bGF0b3IgOiBGb3JtXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGZybUNhbGN1bGF0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIHByZXY7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjbGFzcyBTY2FsZUluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHB1YmxpYyBmbG9hdCBMZWZ0UGVyY2VudDtcclxuICAgICAgICAgICAgcHVibGljIGZsb2F0IFRvcFBlcmNlbnQ7XHJcbiAgICAgICAgICAgIHB1YmxpYyBmbG9hdCBXaWR0aFBlcmNlbnQ7XHJcbiAgICAgICAgICAgIHB1YmxpYyBmbG9hdCBIZWlnaHRQZXJjZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIERpY3Rpb25hcnk8Q29udHJvbCwgU2NhbGVJbmZvPiBrZXlWYWx1ZVBhaXJzID0gbmV3IERpY3Rpb25hcnk8Q29udHJvbCwgU2NhbGVJbmZvPigpO1xyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgZnJtQ2FsY3VsYXRvcl9Mb2FkKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGNsaWVudCA9IENsaWVudFNpemU7XHJcblxyXG4gICAgICAgICAgICBmb3JlYWNoIChDb250cm9sIGl0ZW0gaW4gdGhpcy5Db250cm9scylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gaXRlbS5Mb2NhdGlvbjtcclxuICAgICAgICAgICAgICAgIHZhciBzaXplID0gaXRlbS5TaXplO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBrZXlWYWx1ZVBhaXJzW2l0ZW1dID0gbmV3IFNjYWxlSW5mbygpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGVmdFBlcmNlbnQgPSBsb2NhdGlvbi5YIC8gKGZsb2F0KWNsaWVudC5XaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBUb3BQZXJjZW50ID0gbG9jYXRpb24uWSAvIChmbG9hdCljbGllbnQuSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIFdpZHRoUGVyY2VudCA9IHNpemUuV2lkdGggLyAoZmxvYXQpY2xpZW50LldpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIEhlaWdodFBlcmNlbnQgPSBzaXplLkhlaWdodCAvIChmbG9hdCljbGllbnQuSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25SZXNpemUoRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY2xpZW50ID0gQ2xpZW50U2l6ZTtcclxuXHJcbiAgICAgICAgICAgIGZvcmVhY2ggKENvbnRyb2wgaXRlbSBpbiB0aGlzLkNvbnRyb2xzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5VmFsdWVQYWlycy5Db250YWluc0tleShpdGVtKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2NhbGVJbmZvID0ga2V5VmFsdWVQYWlyc1tpdGVtXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDb25zb2xlLldyaXRlTGluZShzY2FsZUluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uTG9jYXRpb24gPSBuZXcgUG9pbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAoaW50KShjbGllbnQuV2lkdGggKiBzY2FsZUluZm8uTGVmdFBlcmNlbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGludCkoY2xpZW50LkhlaWdodCAqIHNjYWxlSW5mby5Ub3BQZXJjZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5TaXplID0gbmV3IFNpemUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpbnQpKGNsaWVudC5XaWR0aCAqIHNjYWxlSW5mby5XaWR0aFBlcmNlbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoaW50KShjbGllbnQuSGVpZ2h0ICogc2NhbGVJbmZvLkhlaWdodFBlcmNlbnQpKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgYmFzZS5PblJlc2l6ZShlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b24xNV9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHRCb3gxLlRleHQgKz0gKChDb250cm9sKXNlbmRlcikuVGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgY3VycmVudE1vZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uOV9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyBtb2QgPSAoKENvbnRyb2wpc2VuZGVyKS5UZXh0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0cmluZy5Jc051bGxPcldoaXRlU3BhY2UocHJldikpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRNb2QgPSBtb2Q7XHJcbiAgICAgICAgICAgICAgICBwcmV2ID0gdGV4dEJveDEuVGV4dDtcclxuICAgICAgICAgICAgICAgIHRleHRCb3gxLlRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vZCA9PSBcIj1cIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsIHZhbHVlMSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbCB2YWx1ZTIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwuVHJ5UGFyc2UocHJldiwgb3V0IHZhbHVlMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbC5UcnlQYXJzZSh0ZXh0Qm94MS5UZXh0LCBvdXQgdmFsdWUyKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2ID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRNb2QgPT0gXCIrXCIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Qm94MS5UZXh0ID0gKHZhbHVlMSArIHZhbHVlMikuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudE1vZCA9PSBcIi1cIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRCb3gxLlRleHQgPSAodmFsdWUxIC0gdmFsdWUyKS5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50TW9kID09IFwiw7dcIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRCb3gxLlRleHQgPSAodmFsdWUxIC8gdmFsdWUyKS5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50TW9kID09IFwiWFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEJveDEuVGV4dCA9ICh2YWx1ZTEgKiB2YWx1ZTIpLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNb2QgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5Db21wb25lbnRNb2RlbDtcclxudXNpbmcgU3lzdGVtLkRhdGE7XHJcbnVzaW5nIFN5c3RlbS5EcmF3aW5nO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkZvcm1zO1xyXG5cclxubmFtZXNwYWNlIFRlc3Rcclxue1xyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgZnJtVGVzdCA6IEZvcm1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgZnJtVGVzdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRpYyBSYW5kb20gciA9IG5ldyBSYW5kb20oKTtcclxuICAgICAgICBwcml2YXRlIHZvaWQgZnJtVGVzdF9Mb2FkKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGR0ID0gbmV3IERhdGFUYWJsZSgpO1xyXG4gICAgICAgICAgICBkdC5Db2x1bW5zLkFkZChcIk5hbWVcIiwgdHlwZW9mKGludCkpO1xyXG4jaWYgQlJJREdFXHJcbiAgICAgICAgICAgIGR0LkJlZ2luTmV3Um93KDEwMDAwKTtcclxuI2VuZGlmXHJcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgMTAwMDA7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRyID0gZHQuTmV3Um93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZHJbMF0gPSByLk5leHQoKTtcclxuI2lmICFCUklER0VcclxuICAgICAgICAgICAgICAgIGR0LlJvd3MuQWRkKGRyKTtcclxuI2VuZGlmXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGR0LkFjY2VwdENoYW5nZXMoKTtcclxuXHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzEuRGF0YVNvdXJjZSA9IGR0O1xyXG5cclxuXHJcbiAgICAgICAgICAgIGR0ID0gbmV3IERhdGFUYWJsZSgpO1xyXG4gICAgICAgICAgICBkdC5Db2x1bW5zLkFkZChcIkRhdGExXCIsIHR5cGVvZihpbnQpKTtcclxuICAgICAgICAgICAgZHQuQ29sdW1ucy5BZGQoXCJEYXRhMlwiLCB0eXBlb2YoZGVjaW1hbCkpO1xyXG4gICAgICAgICAgICBkdC5Db2x1bW5zLkFkZChcIkRhdGEzXCIsIHR5cGVvZihzdHJpbmcpKTtcclxuICAgICAgICAgICAgZHQuQ29sdW1ucy5BZGQoXCJEYXRhNFwiLCB0eXBlb2YoRGF0ZVRpbWUpKTtcclxuXHJcbiNpZiBCUklER0VcclxuICAgICAgICAgICAgZHQuQmVnaW5OZXdSb3coMTAwMDApO1xyXG4jZW5kaWZcclxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCAxMDAwMDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHIgPSBkdC5OZXdSb3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkclswXSA9IHIuTmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgZHJbMV0gPSAoZGVjaW1hbClyLk5leHREb3VibGUoKTtcclxuICAgICAgICAgICAgICAgIGRyWzJdID0gci5OZXh0KCkuVG9TdHJpbmcoKSArIFwiIHN0cmluZ1wiO1xyXG4gICAgICAgICAgICAgICAgZHJbM10gPSBEYXRlVGltZS5Ob3cuQWRkRGF5cyhyLk5leHREb3VibGUoKSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkdC5BY2NlcHRDaGFuZ2VzKCk7XHJcblxyXG4gICAgICAgICAgICBkYXRhR3JpZFZpZXcyLkRhdGFTb3VyY2UgPSBkdDtcclxuICAgICAgICBcclxuI2lmIEJSSURHRVxyXG4gICAgICAgICAgICBkYXRhR3JpZFZpZXcxLkNvbHVtbkF1dG9XaWR0aCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBkYXRhR3JpZFZpZXcyLkJlc3RGaXRBbGxDb2x1bW5zKHRydWUpO1xyXG4gICAgICAgICAgICBkYXRhR3JpZFZpZXcyLlNob3dGaW5kUGFuZWwoKTtcclxuI2VuZGlmXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uMV9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzEuVGFnID0gXCJ0YWJsZSB0YWJsZS1kYXJrXCI7XHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzIuVGFnID0gXCJ0YWJsZSB0YWJsZS1kYXJrXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uMl9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzEuVGFnID0gXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI7XHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzIuVGFnID0gXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uM19DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzEuVGFnID0gXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWRhcmtcIjtcclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3Mi5UYWcgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtZGFya1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjRfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhR3JpZFZpZXcxLlRhZyA9IFwidGFibGVcIjtcclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3Mi5UYWcgPSBcInRhYmxlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBUZXN0XHJcbntcclxuICAgIHBhcnRpYWwgY2xhc3MgZnJtVGVzdFxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gUmVxdWlyZWQgZGVzaWduZXIgdmFyaWFibGUuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db21wb25lbnRNb2RlbC5JQ29udGFpbmVyIGNvbXBvbmVudHMgPSBudWxsO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENsZWFuIHVwIGFueSByZXNvdXJjZXMgYmVpbmcgdXNlZC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cImRpc3Bvc2luZ1wiPnRydWUgaWYgbWFuYWdlZCByZXNvdXJjZXMgc2hvdWxkIGJlIGRpc3Bvc2VkOyBvdGhlcndpc2UsIGZhbHNlLjwvcGFyYW0+XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgRGlzcG9zZShib29sIGRpc3Bvc2luZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChkaXNwb3NpbmcgJiYgKGNvbXBvbmVudHMgIT0gbnVsbCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuRGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhc2UuRGlzcG9zZShkaXNwb3NpbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3JlZ2lvbiBXaW5kb3dzIEZvcm0gRGVzaWduZXIgZ2VuZXJhdGVkIGNvZGVcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBSZXF1aXJlZCBtZXRob2QgZm9yIERlc2lnbmVyIHN1cHBvcnQgLSBkbyBub3QgbW9kaWZ5XHJcbiAgICAgICAgLy8vIHRoZSBjb250ZW50cyBvZiB0aGlzIG1ldGhvZCB3aXRoIHRoZSBjb2RlIGVkaXRvci5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBJbml0aWFsaXplQ29tcG9uZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwxID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLlBhbmVsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3MSA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXcoKTtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4xID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRhdGFHcmlkVmlld1RleHRCb3hDb2x1bW4oKTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDIgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuUGFuZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMiA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5QYW5lbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFHcmlkVmlldzIgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuRGF0YUdyaWRWaWV3KCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29sdW1uMiA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXdUZXh0Qm94Q29sdW1uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29sdW1uMyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXdUZXh0Qm94Q29sdW1uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29sdW1uNCA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXdUZXh0Qm94Q29sdW1uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29sdW1uNSA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXdUZXh0Qm94Q29sdW1uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwxLlN1c3BlbmRMYXlvdXQoKTtcclxuICAgICAgICAgICAgKChTeXN0ZW0uQ29tcG9uZW50TW9kZWwuSVN1cHBvcnRJbml0aWFsaXplKSh0aGlzLmRhdGFHcmlkVmlldzEpKS5CZWdpbkluaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDIuU3VzcGVuZExheW91dCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMy5TdXNwZW5kTGF5b3V0KCk7XHJcbiAgICAgICAgICAgICgoU3lzdGVtLkNvbXBvbmVudE1vZGVsLklTdXBwb3J0SW5pdGlhbGl6ZSkodGhpcy5kYXRhR3JpZFZpZXcyKSkuQmVnaW5Jbml0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuU3VzcGVuZExheW91dCgpO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gcGFuZWwxXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMS5Db250cm9scy5BZGQodGhpcy5kYXRhR3JpZFZpZXcxKTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDEuRG9jayA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRvY2tTdHlsZS5MZWZ0O1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDEuTmFtZSA9IFwicGFuZWwxXCI7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwxLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSgyMTYsIDQ1MCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwxLlRhYkluZGV4ID0gMDtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGRhdGFHcmlkVmlldzFcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3MS5Db2x1bW5IZWFkZXJzSGVpZ2h0U2l6ZU1vZGUgPSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXdDb2x1bW5IZWFkZXJzSGVpZ2h0U2l6ZU1vZGUuQXV0b1NpemU7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3MS5Db2x1bW5zLkFkZFJhbmdlKG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXdDb2x1bW5bXSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29sdW1uMX0pO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFHcmlkVmlldzEuRG9jayA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRvY2tTdHlsZS5GaWxsO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFHcmlkVmlldzEuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3MS5OYW1lID0gXCJkYXRhR3JpZFZpZXcxXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3MS5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMjE2LCA0NTApO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFHcmlkVmlldzEuVGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFHcmlkVmlldzEuVGFnID0gXCJ0YWJsZVwiO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gQ29sdW1uMVxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4xLkRhdGFQcm9wZXJ0eU5hbWUgPSBcIk5hbWVcIjtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4xLkhlYWRlclRleHQgPSBcIk5hbWVcIjtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4xLk5hbWUgPSBcIkNvbHVtbjFcIjtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIHBhbmVsMlxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDIuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwyLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjMpO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMi5Db250cm9scy5BZGQodGhpcy5idXR0b24yKTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDIuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwyLkRvY2sgPSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5Eb2NrU3R5bGUuQm90dG9tO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMi5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgyMTYsIDM1OCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwyLk5hbWUgPSBcInBhbmVsMlwiO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMi5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNTg0LCA5Mik7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwyLlRhYkluZGV4ID0gMTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjRcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5BbmNob3IgPSAoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcykoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ub3AgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuUmlnaHQpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCg0NTMsIDYpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuTmFtZSA9IFwiYnV0dG9uNFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDExOSwgNzkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuVGFiSW5kZXggPSAzO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuVGV4dCA9IFwiTGlnaHRcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uNF9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24zXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuQW5jaG9yID0gKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMpKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuVG9wIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlJpZ2h0KSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMzI4LCA2KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLk5hbWUgPSBcImJ1dHRvbjNcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSgxMTksIDc5KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlRhYkluZGV4ID0gMjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlRleHQgPSBcIkRhcmsgU3RyaXBlZFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b24zX0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjJcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5BbmNob3IgPSAoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcykoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ub3AgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuUmlnaHQpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgyMDMsIDYpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuTmFtZSA9IFwiYnV0dG9uMlwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDExOSwgNzkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVGFiSW5kZXggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVGV4dCA9IFwiTGlnaHQgU3RyaXBlZFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b24yX0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjFcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5BbmNob3IgPSAoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcykoKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuQm90dG9tIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkxlZnQpIFxyXG4gICAgICAgICAgICB8IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5SaWdodCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDYsIDYpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuTmFtZSA9IFwiYnV0dG9uMVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDE5MSwgNzkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVGV4dCA9IFwiRGFya1wiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b24xX0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIHBhbmVsM1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDMuQ29udHJvbHMuQWRkKHRoaXMuZGF0YUdyaWRWaWV3Mik7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwzLkRvY2sgPSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5Eb2NrU3R5bGUuRmlsbDtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDMuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMjE2LCAwKTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDMuTmFtZSA9IFwicGFuZWwzXCI7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwzLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg1ODQsIDM1OCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwzLlRhYkluZGV4ID0gMjtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGRhdGFHcmlkVmlldzJcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3Mi5Db2x1bW5IZWFkZXJzSGVpZ2h0U2l6ZU1vZGUgPSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXdDb2x1bW5IZWFkZXJzSGVpZ2h0U2l6ZU1vZGUuQXV0b1NpemU7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3Mi5Db2x1bW5zLkFkZFJhbmdlKG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXdDb2x1bW5bXSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29sdW1uMixcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4zLFxyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjQsXHJcbiAgICAgICAgICAgIHRoaXMuQ29sdW1uNX0pO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFHcmlkVmlldzIuRG9jayA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRvY2tTdHlsZS5GaWxsO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFHcmlkVmlldzIuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3Mi5OYW1lID0gXCJkYXRhR3JpZFZpZXcyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3Mi5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNTg0LCAzNTgpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFHcmlkVmlldzIuVGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFHcmlkVmlldzIuVGFnID0gXCJ0YWJsZVwiO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gQ29sdW1uMlxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4yLkRhdGFQcm9wZXJ0eU5hbWUgPSBcIkRhdGExXCI7XHJcbiAgICAgICAgICAgIHRoaXMuQ29sdW1uMi5IZWFkZXJUZXh0ID0gXCJEYXRhIDFcIjtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4yLk5hbWUgPSBcIkNvbHVtbjJcIjtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIENvbHVtbjNcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuQ29sdW1uMy5EYXRhUHJvcGVydHlOYW1lID0gXCJEYXRhMlwiO1xyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjMuSGVhZGVyVGV4dCA9IFwiRGF0YSAyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuQ29sdW1uMy5OYW1lID0gXCJDb2x1bW4zXCI7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBDb2x1bW40XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjQuRGF0YVByb3BlcnR5TmFtZSA9IFwiRGF0YTNcIjtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW40LkhlYWRlclRleHQgPSBcIkRhdGEgM1wiO1xyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjQuTmFtZSA9IFwiQ29sdW1uNFwiO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gQ29sdW1uNVxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW41LkRhdGFQcm9wZXJ0eU5hbWUgPSBcIkRhdGE0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuQ29sdW1uNS5IZWFkZXJUZXh0ID0gXCJEYXRhIDRcIjtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW41Lk5hbWUgPSBcIkNvbHVtbjVcIjtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGZybVRlc3RcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuQXV0b1NjYWxlRGltZW5zaW9ucyA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplRig2RiwgMTNGKTtcclxuICAgICAgICAgICAgdGhpcy5BdXRvU2NhbGVNb2RlID0gU3lzdGVtLldpbmRvd3MuRm9ybXMuQXV0b1NjYWxlTW9kZS5Gb250O1xyXG4gICAgICAgICAgICB0aGlzLkNsaWVudFNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg4MDAsIDQ1MCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMucGFuZWwzKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5wYW5lbDIpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLnBhbmVsMSk7XHJcbiAgICAgICAgICAgIHRoaXMuTmFtZSA9IFwiZnJtVGVzdFwiO1xyXG4gICAgICAgICAgICB0aGlzLlN0YXJ0UG9zaXRpb24gPSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5Gb3JtU3RhcnRQb3NpdGlvbi5DZW50ZXJTY3JlZW47XHJcbiAgICAgICAgICAgIHRoaXMuVGV4dCA9IFwiVGVzdCBBcHBsaWNhdGlvblwiO1xyXG4gICAgICAgICAgICB0aGlzLkxvYWQgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5mcm1UZXN0X0xvYWQpO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMS5SZXN1bWVMYXlvdXQoZmFsc2UpO1xyXG4gICAgICAgICAgICAoKFN5c3RlbS5Db21wb25lbnRNb2RlbC5JU3VwcG9ydEluaXRpYWxpemUpKHRoaXMuZGF0YUdyaWRWaWV3MSkpLkVuZEluaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDIuUmVzdW1lTGF5b3V0KGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDMuUmVzdW1lTGF5b3V0KGZhbHNlKTtcclxuICAgICAgICAgICAgKChTeXN0ZW0uQ29tcG9uZW50TW9kZWwuSVN1cHBvcnRJbml0aWFsaXplKSh0aGlzLmRhdGFHcmlkVmlldzIpKS5FbmRJbml0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lTGF5b3V0KGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZW5kcmVnaW9uXHJcblxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuUGFuZWwgcGFuZWwxO1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuRGF0YUdyaWRWaWV3IGRhdGFHcmlkVmlldzE7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5QYW5lbCBwYW5lbDI7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5QYW5lbCBwYW5lbDM7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXcgZGF0YUdyaWRWaWV3MjtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b24zO1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uIGJ1dHRvbjI7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uMTtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b240O1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuRGF0YUdyaWRWaWV3VGV4dEJveENvbHVtbiBDb2x1bW4xO1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuRGF0YUdyaWRWaWV3VGV4dEJveENvbHVtbiBDb2x1bW4yO1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuRGF0YUdyaWRWaWV3VGV4dEJveENvbHVtbiBDb2x1bW4zO1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuRGF0YUdyaWRWaWV3VGV4dEJveENvbHVtbiBDb2x1bW40O1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuRGF0YUdyaWRWaWV3VGV4dEJveENvbHVtbiBDb2x1bW41O1xyXG4gICAgfVxyXG59IiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBUZXN0O1xyXG5cclxubmFtZXNwYWNlIFRlc3RCcmlkZ2Vcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFByb2dyYW1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgTWFpbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgeCA9IG5ldyBmcm1UZXN0KCk7XHJcbiAgICAgICAgICAgIHguU2hvdygpO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdCn0K
