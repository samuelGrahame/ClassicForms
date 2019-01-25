/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 17.6.0
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
                this.keyValuePairs = new (System.Collections.Generic.Dictionary$2(System.Windows.Forms.Control,Test.Examples.frmCalculator.ScaleInfo))();
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


                        this.keyValuePairs.set(item, ($t1 = new Test.Examples.frmCalculator.ScaleInfo(), $t1.LeftPercent = location.X / client.Width, $t1.TopPercent = location.Y / client.Height, $t1.WidthPercent = size.Width / client.Width, $t1.HeightPercent = size.Height / client.Height, $t1));

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
                            var scaleInfo = this.keyValuePairs.get(item);
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
                this.dataGridView2.ReadOnly = true;
                this.dataGridView2.Size = new System.Drawing.Size.$ctor2(584, 358);
                this.dataGridView2.TabIndex = 0;
                this.dataGridView2.Tag = "table";
                this.Column2.DataPropertyName = "Data1";
                this.Column2.HeaderText = "Data 1";
                this.Column2.Name = "Column2";
                this.Column2.ReadOnly = true;
                this.Column3.DataPropertyName = "Data2";
                this.Column3.HeaderText = "Data 2";
                this.Column3.Name = "Column3";
                this.Column3.ReadOnly = true;
                this.Column4.DataPropertyName = "Data3";
                this.Column4.HeaderText = "Data 3";
                this.Column4.Name = "Column4";
                this.Column4.ReadOnly = true;
                this.Column5.DataPropertyName = "Data4";
                this.Column5.HeaderText = "Data 4";
                this.Column5.Name = "Column5";
                this.Column5.ReadOnly = true;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJUZXN0QnJpZGdlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyIuLi9UZXN0L0V4YW1wbGVzL2ZybUNhbGN1bGF0b3IuRGVzaWduZXIuY3MiLCIuLi9UZXN0L0V4YW1wbGVzL2ZybUNhbGN1bGF0b3IuY3MiLCIuLi9UZXN0L2ZybVRlc3QuY3MiLCIuLi9UZXN0L2ZybVRlc3QuRGVzaWduZXIuY3MiLCJQcm9ncmFtLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQU84REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNDcUJBQSxLQUFJQTs7Ozs7Z0JBWnREQTs7OzswQ0FjNEJBLFFBQWVBOztnQkFFM0NBLGFBQWFBOztnQkFFYkEsMEJBQXlCQTs7Ozt3QkFFckJBLGVBQWVBO3dCQUNmQSxXQUFXQTs7O3dCQUdYQSx1QkFBY0EsTUFBUUEsV0FBSUEsMkRBRVJBLGFBQWFBLEFBQU9BLCtCQUNyQkEsYUFBYUEsQUFBT0Esa0NBQ2xCQSxhQUFhQSxBQUFPQSxrQ0FDbkJBLGNBQWNBLEFBQU9BOzs7Ozs7Ozs7Z0NBTWhCQTs7Z0JBRTdCQSxhQUFhQTs7Z0JBRWJBLDBCQUF5QkE7Ozs7d0JBRXJCQSxJQUFJQSwrQkFBMEJBOzRCQUUxQkEsZ0JBQWdCQSx1QkFBY0E7NEJBRTlCQSxnQkFBZ0JBLElBQUlBLDRCQUNmQSxrQkFBS0EsQUFBQ0EsZUFBZUEsd0JBQ3JCQSxrQkFBS0EsQUFBQ0EsZ0JBQWdCQTs0QkFDM0JBLFlBQVlBLElBQUlBLDJCQUNaQSxrQkFBS0EsQUFBQ0EsZUFBZUEseUJBQ3JCQSxrQkFBS0EsQUFBQ0EsZ0JBQWdCQTs7Ozs7Ozs7OztnQkFLbENBLHdEQUFjQTs7c0NBR1VBLFFBQWVBO2dCQUV2Q0EsbURBQWlCQSxBQUFDQSxZQUFTQTs7cUNBSUpBLFFBQWVBO2dCQUV0Q0EsVUFBYUEsQUFBQ0EsWUFBU0E7O2dCQUV2QkEsSUFBSUEsaUNBQTBCQTtvQkFFMUJBLGtCQUFhQTtvQkFDYkEsWUFBT0E7b0JBQ1BBOztvQkFJQUEsSUFBSUE7d0JBRUFBO3dCQUNBQTt3QkFDQUEsd0JBQWlCQSxpQkFBVUE7d0JBQzNCQSx3QkFBaUJBLDBCQUFtQkE7d0JBQ3BDQTs7d0JBRUFBLElBQUlBOzRCQUVBQSxxQkFBZ0JBLENBQUNBLGFBQVNBOytCQUV6QkEsSUFBSUE7NEJBRUxBLHFCQUFnQkEsQ0FBQ0EsYUFBU0E7K0JBRXpCQSxJQUFJQTs0QkFFTEEscUJBQWdCQSxDQUFDQSxhQUFTQTsrQkFFekJBLElBQUlBOzRCQUVMQSxxQkFBZ0JBLENBQUNBLGFBQVNBOzt3QkFFOUJBOzs7Ozs7Ozs7Ozs7Ozs7aUNEdkdvQkE7Z0JBRTVCQSxJQUFJQSxhQUFhQSxDQUFDQSxtQkFBY0E7b0JBRTVCQTs7Z0JBRUpBLHlEQUFhQTs7Ozs7Ozs7Ozs7OztnQkFXYkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkE7Z0JBSUFBLDBCQUEwQkE7Z0JBQzFCQSxxQkFBcUJBLElBQUlBLHlEQUFpREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNoSkEseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQTtnQkFDQUEscUJBQXFCQSxJQUFJQTtnQkFDekJBO2dCQUlBQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxxQkFBcUJBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNuSkEseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsdUJBQXVCQSxBQUF3QkE7Z0JBSS9DQSxxQkFBcUJBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNuSkEseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsdUJBQXVCQSxBQUF3QkE7Z0JBSS9DQSxxQkFBcUJBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNuSkEseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBO2dC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QkE7Z0JBQ0FBLG1CQUFtQkEsSUFBSUE7Z0JBQ3ZCQTtnQkFJQUEsaURBQWlEQTtnQkFDakRBLG9DQUFvQ0EsbUJBQ3BDQSxjQUNBQSxjQUNBQSxjQUNBQTtnQkFDQUEsMEJBQTBCQTtnQkFDMUJBLDhCQUE4QkEsSUFBSUE7Z0JBQ2xDQTtnQkFDQUE7Z0JBQ0FBLDBCQUEwQkEsSUFBSUE7Z0JBQzlCQTtnQkFDQUE7Z0JBSUFBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUlBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTtnQkFJQUE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBSUFBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUlBQSwyQkFBMkJBLElBQUlBO2dCQUMvQkEscUJBQXFCQTtnQkFDckJBLGtCQUFrQkEsSUFBSUE7Z0JBQ3RCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQTtnQkFDQUEscUJBQXFCQTtnQkFDckJBO2dCQUNBQSxhQUFhQSxBQUF3QkE7Z0JBQ3JDQTtnQkFDQUEsQUFBQ0EsWUFBMENBLENBQUNBO2dCQUM1Q0E7Z0JBQ0FBO2dCQUNBQSxBQUFDQSxZQUEwQ0EsQ0FBQ0E7Z0JBQzVDQTs7Ozs7Ozs7WUNoTUFBLFFBQVFBLElBQUlBO1lBQ1pBIiwKICAic291cmNlc0NvbnRlbnQiOiBbIm5hbWVzcGFjZSBUZXN0LkV4YW1wbGVzXHJcbntcclxuICAgIHBhcnRpYWwgY2xhc3MgZnJtQ2FsY3VsYXRvclxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gUmVxdWlyZWQgZGVzaWduZXIgdmFyaWFibGUuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db21wb25lbnRNb2RlbC5JQ29udGFpbmVyIGNvbXBvbmVudHMgPSBudWxsO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENsZWFuIHVwIGFueSByZXNvdXJjZXMgYmVpbmcgdXNlZC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cImRpc3Bvc2luZ1wiPnRydWUgaWYgbWFuYWdlZCByZXNvdXJjZXMgc2hvdWxkIGJlIGRpc3Bvc2VkOyBvdGhlcndpc2UsIGZhbHNlLjwvcGFyYW0+XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgRGlzcG9zZShib29sIGRpc3Bvc2luZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChkaXNwb3NpbmcgJiYgKGNvbXBvbmVudHMgIT0gbnVsbCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuRGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhc2UuRGlzcG9zZShkaXNwb3NpbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3JlZ2lvbiBXaW5kb3dzIEZvcm0gRGVzaWduZXIgZ2VuZXJhdGVkIGNvZGVcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBSZXF1aXJlZCBtZXRob2QgZm9yIERlc2lnbmVyIHN1cHBvcnQgLSBkbyBub3QgbW9kaWZ5XHJcbiAgICAgICAgLy8vIHRoZSBjb250ZW50cyBvZiB0aGlzIG1ldGhvZCB3aXRoIHRoZSBjb2RlIGVkaXRvci5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBJbml0aWFsaXplQ29tcG9uZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEJveDEgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuVGV4dEJveCgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMiA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNSA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOCA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b245ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEwID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjExID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEyID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEzID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE0ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE1ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE2ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE3ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE4ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE5ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIwID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLlN1c3BlbmRMYXlvdXQoKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIHRleHRCb3gxXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLnRleHRCb3gxLkJhY2tDb2xvciA9IFN5c3RlbS5EcmF3aW5nLkNvbG9yLldoaXRlO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRCb3gxLkZvbnQgPSBuZXcgU3lzdGVtLkRyYXdpbmcuRm9udChcIk1pY3Jvc29mdCBTYW5zIFNlcmlmXCIsIDEyRiwgU3lzdGVtLkRyYXdpbmcuRm9udFN0eWxlLlJlZ3VsYXIsIFN5c3RlbS5EcmF3aW5nLkdyYXBoaWNzVW5pdC5Qb2ludCwgKChieXRlKSgwKSkpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRCb3gxLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDEyLCAxMik7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEJveDEuTmFtZSA9IFwidGV4dEJveDFcIjtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Qm94MS5SZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEJveDEuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDI4MiwgMjYpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRCb3gxLlRhYkluZGV4ID0gMDtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjFcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5Gb250ID0gbmV3IFN5c3RlbS5EcmF3aW5nLkZvbnQoXCJNaWNyb3NvZnQgU2FucyBTZXJpZlwiLCAxMS4yNUYsIFN5c3RlbS5EcmF3aW5nLkZvbnRTdHlsZS5SZWd1bGFyLCBTeXN0ZW0uRHJhd2luZy5HcmFwaGljc1VuaXQuUG9pbnQsICgoYnl0ZSkoMCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDEyLCAxMTIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuTmFtZSA9IFwiYnV0dG9uMVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY2LCA2Mik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5UYWJJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5UZXh0ID0gXCI3XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b24xNV9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24yXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuRm9udCA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Gb250KFwiTWljcm9zb2Z0IFNhbnMgU2VyaWZcIiwgMTEuMjVGLCBTeXN0ZW0uRHJhd2luZy5Gb250U3R5bGUuUmVndWxhciwgU3lzdGVtLkRyYXdpbmcuR3JhcGhpY3NVbml0LlBvaW50LCAoKGJ5dGUpKDApKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCg4NCwgMTEyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLk5hbWUgPSBcImJ1dHRvbjJcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg2NiwgNjIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVGFiSW5kZXggPSAyO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVGV4dCA9IFwiOFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uMTVfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uM1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLkZvbnQgPSBuZXcgU3lzdGVtLkRyYXdpbmcuRm9udChcIk1pY3Jvc29mdCBTYW5zIFNlcmlmXCIsIDExLjI1RiwgU3lzdGVtLkRyYXdpbmcuRm9udFN0eWxlLlJlZ3VsYXIsIFN5c3RlbS5EcmF3aW5nLkdyYXBoaWNzVW5pdC5Qb2ludCwgKChieXRlKSgwKSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTU2LCAxMTIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuTmFtZSA9IFwiYnV0dG9uM1wiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY2LCA2Mik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5UYWJJbmRleCA9IDM7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5UZXh0ID0gXCI5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b24xNV9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b240XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuRm9udCA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Gb250KFwiTWljcm9zb2Z0IFNhbnMgU2VyaWZcIiwgMTEuMjVGLCBTeXN0ZW0uRHJhd2luZy5Gb250U3R5bGUuUmVndWxhciwgU3lzdGVtLkRyYXdpbmcuR3JhcGhpY3NVbml0LlBvaW50LCAoKGJ5dGUpKDApKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgyMjgsIDExMik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5OYW1lID0gXCJidXR0b240XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNjYsIDYyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LlRhYkluZGV4ID0gNDtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LlRleHQgPSBcIlhcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uOV9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b241XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuRm9udCA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Gb250KFwiTWljcm9zb2Z0IFNhbnMgU2VyaWZcIiwgMTEuMjVGLCBTeXN0ZW0uRHJhd2luZy5Gb250U3R5bGUuUmVndWxhciwgU3lzdGVtLkRyYXdpbmcuR3JhcGhpY3NVbml0LlBvaW50LCAoKGJ5dGUpKDApKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgyMjgsIDE4MCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5OYW1lID0gXCJidXR0b241XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNjYsIDYyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241LlRhYkluZGV4ID0gODtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241LlRleHQgPSBcIuKIklwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b245X0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjZcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5Gb250ID0gbmV3IFN5c3RlbS5EcmF3aW5nLkZvbnQoXCJNaWNyb3NvZnQgU2FucyBTZXJpZlwiLCAxMS4yNUYsIFN5c3RlbS5EcmF3aW5nLkZvbnRTdHlsZS5SZWd1bGFyLCBTeXN0ZW0uRHJhd2luZy5HcmFwaGljc1VuaXQuUG9pbnQsICgoYnl0ZSkoMCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDE1NiwgMTgwKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242Lk5hbWUgPSBcImJ1dHRvbjZcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg2NiwgNjIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuVGFiSW5kZXggPSA3O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuVGV4dCA9IFwiNlwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uMTVfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uN1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b243LkZvbnQgPSBuZXcgU3lzdGVtLkRyYXdpbmcuRm9udChcIk1pY3Jvc29mdCBTYW5zIFNlcmlmXCIsIDExLjI1RiwgU3lzdGVtLkRyYXdpbmcuRm9udFN0eWxlLlJlZ3VsYXIsIFN5c3RlbS5EcmF3aW5nLkdyYXBoaWNzVW5pdC5Qb2ludCwgKChieXRlKSgwKSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoODQsIDE4MCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5OYW1lID0gXCJidXR0b243XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNjYsIDYyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b243LlRhYkluZGV4ID0gNjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b243LlRleHQgPSBcIjVcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b243LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjE1X0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjhcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOC5Gb250ID0gbmV3IFN5c3RlbS5EcmF3aW5nLkZvbnQoXCJNaWNyb3NvZnQgU2FucyBTZXJpZlwiLCAxMS4yNUYsIFN5c3RlbS5EcmF3aW5nLkZvbnRTdHlsZS5SZWd1bGFyLCBTeXN0ZW0uRHJhd2luZy5HcmFwaGljc1VuaXQuUG9pbnQsICgoYnl0ZSkoMCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244LkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDEyLCAxODApO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguTmFtZSA9IFwiYnV0dG9uOFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY2LCA2Mik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOC5UYWJJbmRleCA9IDU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOC5UZXh0ID0gXCI0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOC5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b24xNV9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b245XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkuRm9udCA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Gb250KFwiTWljcm9zb2Z0IFNhbnMgU2VyaWZcIiwgMTUuNzVGLCBTeXN0ZW0uRHJhd2luZy5Gb250U3R5bGUuUmVndWxhciwgU3lzdGVtLkRyYXdpbmcuR3JhcGhpY3NVbml0LlBvaW50LCAoKGJ5dGUpKDApKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgyMjgsIDI0OCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5OYW1lID0gXCJidXR0b245XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNjYsIDYyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b245LlRhYkluZGV4ID0gMTI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5UZXh0ID0gXCIrXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjlfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uMTBcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTAuRm9udCA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Gb250KFwiTWljcm9zb2Z0IFNhbnMgU2VyaWZcIiwgMTEuMjVGLCBTeXN0ZW0uRHJhd2luZy5Gb250U3R5bGUuUmVndWxhciwgU3lzdGVtLkRyYXdpbmcuR3JhcGhpY3NVbml0LlBvaW50LCAoKGJ5dGUpKDApKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTAuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTU2LCAyNDgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEwLk5hbWUgPSBcImJ1dHRvbjEwXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTAuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY2LCA2Mik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTAuVGFiSW5kZXggPSAxMTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMC5UZXh0ID0gXCIzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTAuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMC5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjE1X0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjExXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjExLkZvbnQgPSBuZXcgU3lzdGVtLkRyYXdpbmcuRm9udChcIk1pY3Jvc29mdCBTYW5zIFNlcmlmXCIsIDExLjI1RiwgU3lzdGVtLkRyYXdpbmcuRm9udFN0eWxlLlJlZ3VsYXIsIFN5c3RlbS5EcmF3aW5nLkdyYXBoaWNzVW5pdC5Qb2ludCwgKChieXRlKSgwKSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjExLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDg0LCAyNDgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjExLk5hbWUgPSBcImJ1dHRvbjExXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTEuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY2LCA2Mik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTEuVGFiSW5kZXggPSAxMDtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMS5UZXh0ID0gXCIyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTEuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMS5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjE1X0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjEyXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEyLkZvbnQgPSBuZXcgU3lzdGVtLkRyYXdpbmcuRm9udChcIk1pY3Jvc29mdCBTYW5zIFNlcmlmXCIsIDExLjI1RiwgU3lzdGVtLkRyYXdpbmcuRm9udFN0eWxlLlJlZ3VsYXIsIFN5c3RlbS5EcmF3aW5nLkdyYXBoaWNzVW5pdC5Qb2ludCwgKChieXRlKSgwKSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEyLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDEyLCAyNDgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEyLk5hbWUgPSBcImJ1dHRvbjEyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTIuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY2LCA2Mik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTIuVGFiSW5kZXggPSA5O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEyLlRleHQgPSBcIjFcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMi5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEyLkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uMTVfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uMTNcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTMuRm9udCA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Gb250KFwiTWljcm9zb2Z0IFNhbnMgU2VyaWZcIiwgMTEuMjVGLCBTeXN0ZW0uRHJhd2luZy5Gb250U3R5bGUuUmVndWxhciwgU3lzdGVtLkRyYXdpbmcuR3JhcGhpY3NVbml0LlBvaW50LCAoKGJ5dGUpKDApKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTMuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMjI4LCAzMTYpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEzLk5hbWUgPSBcImJ1dHRvbjEzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTMuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY2LCA2Mik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTMuVGFiSW5kZXggPSAxMztcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xMy5UZXh0ID0gXCI9XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTMuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEzLkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uOV9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24xNFxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNC5Gb250ID0gbmV3IFN5c3RlbS5EcmF3aW5nLkZvbnQoXCJNaWNyb3NvZnQgU2FucyBTZXJpZlwiLCAxNC4yNUYsIFN5c3RlbS5EcmF3aW5nLkZvbnRTdHlsZS5Cb2xkLCBTeXN0ZW0uRHJhd2luZy5HcmFwaGljc1VuaXQuUG9pbnQsICgoYnl0ZSkoMCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNC5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgxNTYsIDMxNik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTQuTmFtZSA9IFwiYnV0dG9uMTRcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNC5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNjYsIDYyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNC5UYWJJbmRleCA9IDE0O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE0LlRleHQgPSBcIi5cIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNC5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24xNVxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNS5Gb250ID0gbmV3IFN5c3RlbS5EcmF3aW5nLkZvbnQoXCJNaWNyb3NvZnQgU2FucyBTZXJpZlwiLCAxMS4yNUYsIFN5c3RlbS5EcmF3aW5nLkZvbnRTdHlsZS5SZWd1bGFyLCBTeXN0ZW0uRHJhd2luZy5HcmFwaGljc1VuaXQuUG9pbnQsICgoYnl0ZSkoMCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCg4NCwgMzE2KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNS5OYW1lID0gXCJidXR0b24xNVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE1LlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg2NiwgNjIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE1LlRhYkluZGV4ID0gMTU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTUuVGV4dCA9IFwiMFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE1LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTUuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b24xNV9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24xNlxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNi5Gb250ID0gbmV3IFN5c3RlbS5EcmF3aW5nLkZvbnQoXCJNaWNyb3NvZnQgU2FucyBTZXJpZlwiLCAxMS4yNUYsIFN5c3RlbS5EcmF3aW5nLkZvbnRTdHlsZS5SZWd1bGFyLCBTeXN0ZW0uRHJhd2luZy5HcmFwaGljc1VuaXQuUG9pbnQsICgoYnl0ZSkoMCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNi5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgxMiwgMzE2KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNi5OYW1lID0gXCJidXR0b24xNlwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE2LlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg2NiwgNjIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE2LlRhYkluZGV4ID0gMTY7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTYuVGV4dCA9IFwiwrFcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNi5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24xN1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNy5Gb250ID0gbmV3IFN5c3RlbS5EcmF3aW5nLkZvbnQoXCJNaWNyb3NvZnQgU2FucyBTZXJpZlwiLCAxMS4yNUYsIFN5c3RlbS5EcmF3aW5nLkZvbnRTdHlsZS5SZWd1bGFyLCBTeXN0ZW0uRHJhd2luZy5HcmFwaGljc1VuaXQuUG9pbnQsICgoYnl0ZSkoMCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNy5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgxMiwgNDQpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE3Lk5hbWUgPSBcImJ1dHRvbjE3XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTcuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY2LCA2Mik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTcuVGFiSW5kZXggPSAxNztcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xNy5UZXh0ID0gXCJDRVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE3LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjE4XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE4LkZvbnQgPSBuZXcgU3lzdGVtLkRyYXdpbmcuRm9udChcIk1pY3Jvc29mdCBTYW5zIFNlcmlmXCIsIDExLjI1RiwgU3lzdGVtLkRyYXdpbmcuRm9udFN0eWxlLlJlZ3VsYXIsIFN5c3RlbS5EcmF3aW5nLkdyYXBoaWNzVW5pdC5Qb2ludCwgKChieXRlKSgwKSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE4LkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDg0LCA0NCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTguTmFtZSA9IFwiYnV0dG9uMThcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xOC5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNjYsIDYyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xOC5UYWJJbmRleCA9IDE4O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE4LlRleHQgPSBcIkNcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xOC5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24xOVxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xOS5Gb250ID0gbmV3IFN5c3RlbS5EcmF3aW5nLkZvbnQoXCJNaWNyb3NvZnQgU2FucyBTZXJpZlwiLCAxMS4yNUYsIFN5c3RlbS5EcmF3aW5nLkZvbnRTdHlsZS5SZWd1bGFyLCBTeXN0ZW0uRHJhd2luZy5HcmFwaGljc1VuaXQuUG9pbnQsICgoYnl0ZSkoMCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xOS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgxNTYsIDQ0KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xOS5OYW1lID0gXCJidXR0b24xOVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE5LlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg2NiwgNjIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjE5LlRhYkluZGV4ID0gMTk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTkuVGV4dCA9IFwiREVMXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMTkuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uMjBcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMjAuRm9udCA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Gb250KFwiTWljcm9zb2Z0IFNhbnMgU2VyaWZcIiwgMTUuNzVGLCBTeXN0ZW0uRHJhd2luZy5Gb250U3R5bGUuUmVndWxhciwgU3lzdGVtLkRyYXdpbmcuR3JhcGhpY3NVbml0LlBvaW50LCAoKGJ5dGUpKDApKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMjAuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMjI4LCA0NCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMjAuTmFtZSA9IFwiYnV0dG9uMjBcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yMC5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNjYsIDYyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yMC5UYWJJbmRleCA9IDIwO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIwLlRleHQgPSBcIsO3XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMjAuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIwLkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uOV9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBmcm1DYWxjdWxhdG9yXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLkF1dG9TY2FsZURpbWVuc2lvbnMgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZUYoNkYsIDEzRik7XHJcbiAgICAgICAgICAgIHRoaXMuQXV0b1NjYWxlTW9kZSA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkF1dG9TY2FsZU1vZGUuRm9udDtcclxuICAgICAgICAgICAgdGhpcy5DbGllbnRTaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMzA2LCAzODgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjIwKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b24xOSk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMTgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjE3KTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b24xNik7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMTUpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjE0KTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b24xMyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uOSk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMTApO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjExKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b24xMik7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNSk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNik7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uOCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMik7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMSk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMudGV4dEJveDEpO1xyXG4gICAgICAgICAgICB0aGlzLk5hbWUgPSBcImZybUNhbGN1bGF0b3JcIjtcclxuICAgICAgICAgICAgdGhpcy5TdGFydFBvc2l0aW9uID0gU3lzdGVtLldpbmRvd3MuRm9ybXMuRm9ybVN0YXJ0UG9zaXRpb24uQ2VudGVyU2NyZWVuO1xyXG4gICAgICAgICAgICB0aGlzLlRleHQgPSBcIkNhbGN1bGF0b3JcIjtcclxuICAgICAgICAgICAgdGhpcy5Mb2FkICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuZnJtQ2FsY3VsYXRvcl9Mb2FkKTtcclxuICAgICAgICAgICAgdGhpcy5SZXN1bWVMYXlvdXQoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLlBlcmZvcm1MYXlvdXQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZW5kcmVnaW9uXHJcblxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuVGV4dEJveCB0ZXh0Qm94MTtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b24xO1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uIGJ1dHRvbjI7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uMztcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b240O1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uIGJ1dHRvbjU7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uNjtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b243O1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uIGJ1dHRvbjg7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uOTtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b24xMDtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b24xMTtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b24xMjtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b24xMztcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b24xNDtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b24xNTtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b24xNjtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b24xNztcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b24xODtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b24xOTtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b24yMDtcclxuICAgIH1cclxufSIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5Db21wb25lbnRNb2RlbDtcclxudXNpbmcgU3lzdGVtLkRhdGE7XHJcbnVzaW5nIFN5c3RlbS5EcmF3aW5nO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkZvcm1zO1xyXG5cclxubmFtZXNwYWNlIFRlc3QuRXhhbXBsZXNcclxue1xyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgZnJtQ2FsY3VsYXRvciA6IEZvcm1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgZnJtQ2FsY3VsYXRvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgcHJldjtcclxuXHJcbiAgICAgICAgcHVibGljIGNsYXNzIFNjYWxlSW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHVibGljIGZsb2F0IExlZnRQZXJjZW50O1xyXG4gICAgICAgICAgICBwdWJsaWMgZmxvYXQgVG9wUGVyY2VudDtcclxuICAgICAgICAgICAgcHVibGljIGZsb2F0IFdpZHRoUGVyY2VudDtcclxuICAgICAgICAgICAgcHVibGljIGZsb2F0IEhlaWdodFBlcmNlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGljdGlvbmFyeTxDb250cm9sLCBTY2FsZUluZm8+IGtleVZhbHVlUGFpcnMgPSBuZXcgRGljdGlvbmFyeTxDb250cm9sLCBTY2FsZUluZm8+KCk7XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBmcm1DYWxjdWxhdG9yX0xvYWQob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY2xpZW50ID0gQ2xpZW50U2l6ZTtcclxuXHJcbiAgICAgICAgICAgIGZvcmVhY2ggKENvbnRyb2wgaXRlbSBpbiB0aGlzLkNvbnRyb2xzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBpdGVtLkxvY2F0aW9uO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNpemUgPSBpdGVtLlNpemU7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGtleVZhbHVlUGFpcnNbaXRlbV0gPSBuZXcgU2NhbGVJbmZvKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBMZWZ0UGVyY2VudCA9IGxvY2F0aW9uLlggLyAoZmxvYXQpY2xpZW50LldpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIFRvcFBlcmNlbnQgPSBsb2NhdGlvbi5ZIC8gKGZsb2F0KWNsaWVudC5IZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgV2lkdGhQZXJjZW50ID0gc2l6ZS5XaWR0aCAvIChmbG9hdCljbGllbnQuV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgSGVpZ2h0UGVyY2VudCA9IHNpemUuSGVpZ2h0IC8gKGZsb2F0KWNsaWVudC5IZWlnaHRcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPblJlc2l6ZShFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjbGllbnQgPSBDbGllbnRTaXplO1xyXG5cclxuICAgICAgICAgICAgZm9yZWFjaCAoQ29udHJvbCBpdGVtIGluIHRoaXMuQ29udHJvbHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXlWYWx1ZVBhaXJzLkNvbnRhaW5zS2V5KGl0ZW0pKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzY2FsZUluZm8gPSBrZXlWYWx1ZVBhaXJzW2l0ZW1dO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnNvbGUuV3JpdGVMaW5lKHNjYWxlSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5Mb2NhdGlvbiA9IG5ldyBQb2ludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgIChpbnQpKGNsaWVudC5XaWR0aCAqIHNjYWxlSW5mby5MZWZ0UGVyY2VudCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAoaW50KShjbGllbnQuSGVpZ2h0ICogc2NhbGVJbmZvLlRvcFBlcmNlbnQpKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLlNpemUgPSBuZXcgU2l6ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGludCkoY2xpZW50LldpZHRoICogc2NhbGVJbmZvLldpZHRoUGVyY2VudCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpbnQpKGNsaWVudC5IZWlnaHQgKiBzY2FsZUluZm8uSGVpZ2h0UGVyY2VudCkpOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBiYXNlLk9uUmVzaXplKGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjE1X0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dEJveDEuVGV4dCArPSAoKENvbnRyb2wpc2VuZGVyKS5UZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIHN0cmluZyBjdXJyZW50TW9kO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b245X0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIG1vZCA9ICgoQ29udHJvbClzZW5kZXIpLlRleHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RyaW5nLklzTnVsbE9yV2hpdGVTcGFjZShwcmV2KSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudE1vZCA9IG1vZDtcclxuICAgICAgICAgICAgICAgIHByZXYgPSB0ZXh0Qm94MS5UZXh0O1xyXG4gICAgICAgICAgICAgICAgdGV4dEJveDEuVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kID09IFwiPVwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwgdmFsdWUxID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsIHZhbHVlMiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbC5UcnlQYXJzZShwcmV2LCBvdXQgdmFsdWUxKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsLlRyeVBhcnNlKHRleHRCb3gxLlRleHQsIG91dCB2YWx1ZTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXYgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudE1vZCA9PSBcIitcIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRCb3gxLlRleHQgPSAodmFsdWUxICsgdmFsdWUyKS5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50TW9kID09IFwiLVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEJveDEuVGV4dCA9ICh2YWx1ZTEgLSB2YWx1ZTIpLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRNb2QgPT0gXCLDt1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEJveDEuVGV4dCA9ICh2YWx1ZTEgLyB2YWx1ZTIpLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRNb2QgPT0gXCJYXCIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Qm94MS5UZXh0ID0gKHZhbHVlMSAqIHZhbHVlMikuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE1vZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkNvbXBvbmVudE1vZGVsO1xyXG51c2luZyBTeXN0ZW0uRGF0YTtcclxudXNpbmcgU3lzdGVtLkRyYXdpbmc7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRm9ybXM7XHJcblxyXG5uYW1lc3BhY2UgVGVzdFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBmcm1UZXN0IDogRm9ybVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBmcm1UZXN0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGljIFJhbmRvbSByID0gbmV3IFJhbmRvbSgpO1xyXG4gICAgICAgIHByaXZhdGUgdm9pZCBmcm1UZXN0X0xvYWQob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZHQgPSBuZXcgRGF0YVRhYmxlKCk7XHJcbiAgICAgICAgICAgIGR0LkNvbHVtbnMuQWRkKFwiTmFtZVwiLCB0eXBlb2YoaW50KSk7XHJcbiNpZiBCUklER0VcclxuICAgICAgICAgICAgZHQuQmVnaW5OZXdSb3coMTAwMDApO1xyXG4jZW5kaWZcclxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCAxMDAwMDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHIgPSBkdC5OZXdSb3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkclswXSA9IHIuTmV4dCgpO1xyXG4jaWYgIUJSSURHRVxyXG4gICAgICAgICAgICAgICAgZHQuUm93cy5BZGQoZHIpO1xyXG4jZW5kaWZcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZHQuQWNjZXB0Q2hhbmdlcygpO1xyXG5cclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3MS5EYXRhU291cmNlID0gZHQ7XHJcblxyXG5cclxuICAgICAgICAgICAgZHQgPSBuZXcgRGF0YVRhYmxlKCk7XHJcbiAgICAgICAgICAgIGR0LkNvbHVtbnMuQWRkKFwiRGF0YTFcIiwgdHlwZW9mKGludCkpO1xyXG4gICAgICAgICAgICBkdC5Db2x1bW5zLkFkZChcIkRhdGEyXCIsIHR5cGVvZihkZWNpbWFsKSk7XHJcbiAgICAgICAgICAgIGR0LkNvbHVtbnMuQWRkKFwiRGF0YTNcIiwgdHlwZW9mKHN0cmluZykpO1xyXG4gICAgICAgICAgICBkdC5Db2x1bW5zLkFkZChcIkRhdGE0XCIsIHR5cGVvZihEYXRlVGltZSkpO1xyXG5cclxuI2lmIEJSSURHRVxyXG4gICAgICAgICAgICBkdC5CZWdpbk5ld1JvdygxMDAwMCk7XHJcbiNlbmRpZlxyXG4gICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IDEwMDAwOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBkciA9IGR0Lk5ld1JvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRyWzBdID0gci5OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICBkclsxXSA9IChkZWNpbWFsKXIuTmV4dERvdWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgZHJbMl0gPSByLk5leHQoKS5Ub1N0cmluZygpICsgXCIgc3RyaW5nXCI7XHJcbiAgICAgICAgICAgICAgICBkclszXSA9IERhdGVUaW1lLk5vdy5BZGREYXlzKHIuTmV4dERvdWJsZSgpKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGR0LkFjY2VwdENoYW5nZXMoKTtcclxuXHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzIuRGF0YVNvdXJjZSA9IGR0O1xyXG4gICAgICAgIFxyXG4jaWYgQlJJREdFXHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzEuQ29sdW1uQXV0b1dpZHRoID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzIuQmVzdEZpdEFsbENvbHVtbnModHJ1ZSk7XHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzIuU2hvd0ZpbmRQYW5lbCgpO1xyXG4jZW5kaWZcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b24xX0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3MS5UYWcgPSBcInRhYmxlIHRhYmxlLWRhcmtcIjtcclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3Mi5UYWcgPSBcInRhYmxlIHRhYmxlLWRhcmtcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b24yX0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3MS5UYWcgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWRcIjtcclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3Mi5UYWcgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b24zX0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3MS5UYWcgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtZGFya1wiO1xyXG4gICAgICAgICAgICBkYXRhR3JpZFZpZXcyLlRhZyA9IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1kYXJrXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uNF9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzEuVGFnID0gXCJ0YWJsZVwiO1xyXG4gICAgICAgICAgICBkYXRhR3JpZFZpZXcyLlRhZyA9IFwidGFibGVcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFRlc3Rcclxue1xyXG4gICAgcGFydGlhbCBjbGFzcyBmcm1UZXN0XHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBSZXF1aXJlZCBkZXNpZ25lciB2YXJpYWJsZS5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbXBvbmVudE1vZGVsLklDb250YWluZXIgY29tcG9uZW50cyA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ2xlYW4gdXAgYW55IHJlc291cmNlcyBiZWluZyB1c2VkLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwiZGlzcG9zaW5nXCI+dHJ1ZSBpZiBtYW5hZ2VkIHJlc291cmNlcyBzaG91bGQgYmUgZGlzcG9zZWQ7IG90aGVyd2lzZSwgZmFsc2UuPC9wYXJhbT5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBEaXNwb3NlKGJvb2wgZGlzcG9zaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGRpc3Bvc2luZyAmJiAoY29tcG9uZW50cyAhPSBudWxsKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5EaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmFzZS5EaXNwb3NlKGRpc3Bvc2luZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjcmVnaW9uIFdpbmRvd3MgRm9ybSBEZXNpZ25lciBnZW5lcmF0ZWQgY29kZVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFJlcXVpcmVkIG1ldGhvZCBmb3IgRGVzaWduZXIgc3VwcG9ydCAtIGRvIG5vdCBtb2RpZnlcclxuICAgICAgICAvLy8gdGhlIGNvbnRlbnRzIG9mIHRoaXMgbWV0aG9kIHdpdGggdGhlIGNvZGUgZWRpdG9yLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEluaXRpYWxpemVDb21wb25lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDEgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuUGFuZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcxID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRhdGFHcmlkVmlldygpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjEgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuRGF0YUdyaWRWaWV3VGV4dEJveENvbHVtbigpO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMiA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5QYW5lbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwzID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLlBhbmVsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3MiA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXcoKTtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4yID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRhdGFHcmlkVmlld1RleHRCb3hDb2x1bW4oKTtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4zID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRhdGFHcmlkVmlld1RleHRCb3hDb2x1bW4oKTtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW40ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRhdGFHcmlkVmlld1RleHRCb3hDb2x1bW4oKTtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW41ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRhdGFHcmlkVmlld1RleHRCb3hDb2x1bW4oKTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDEuU3VzcGVuZExheW91dCgpO1xyXG4gICAgICAgICAgICAoKFN5c3RlbS5Db21wb25lbnRNb2RlbC5JU3VwcG9ydEluaXRpYWxpemUpKHRoaXMuZGF0YUdyaWRWaWV3MSkpLkJlZ2luSW5pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMi5TdXNwZW5kTGF5b3V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwzLlN1c3BlbmRMYXlvdXQoKTtcclxuICAgICAgICAgICAgKChTeXN0ZW0uQ29tcG9uZW50TW9kZWwuSVN1cHBvcnRJbml0aWFsaXplKSh0aGlzLmRhdGFHcmlkVmlldzIpKS5CZWdpbkluaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5TdXNwZW5kTGF5b3V0KCk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBwYW5lbDFcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwxLkNvbnRyb2xzLkFkZCh0aGlzLmRhdGFHcmlkVmlldzEpO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMS5Eb2NrID0gU3lzdGVtLldpbmRvd3MuRm9ybXMuRG9ja1N0eWxlLkxlZnQ7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwxLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMS5OYW1lID0gXCJwYW5lbDFcIjtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDEuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDIxNiwgNDUwKTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDEuVGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gZGF0YUdyaWRWaWV3MVxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcxLkNvbHVtbkhlYWRlcnNIZWlnaHRTaXplTW9kZSA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRhdGFHcmlkVmlld0NvbHVtbkhlYWRlcnNIZWlnaHRTaXplTW9kZS5BdXRvU2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcxLkNvbHVtbnMuQWRkUmFuZ2UobmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRhdGFHcmlkVmlld0NvbHVtbltdIHtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4xfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3MS5Eb2NrID0gU3lzdGVtLldpbmRvd3MuRm9ybXMuRG9ja1N0eWxlLkZpbGw7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3MS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcxLk5hbWUgPSBcImRhdGFHcmlkVmlldzFcIjtcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcxLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSgyMTYsIDQ1MCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3MS5UYWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3MS5UYWcgPSBcInRhYmxlXCI7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBDb2x1bW4xXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjEuRGF0YVByb3BlcnR5TmFtZSA9IFwiTmFtZVwiO1xyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjEuSGVhZGVyVGV4dCA9IFwiTmFtZVwiO1xyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjEuTmFtZSA9IFwiQ29sdW1uMVwiO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gcGFuZWwyXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMi5Db250cm9scy5BZGQodGhpcy5idXR0b240KTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDIuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwyLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjIpO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMi5Db250cm9scy5BZGQodGhpcy5idXR0b24xKTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDIuRG9jayA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRvY2tTdHlsZS5Cb3R0b207XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwyLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDIxNiwgMzU4KTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDIuTmFtZSA9IFwicGFuZWwyXCI7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwyLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg1ODQsIDkyKTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDIuVGFiSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uNFxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LkFuY2hvciA9ICgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzKSgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlRvcCB8IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5SaWdodCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDQ1MywgNik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5OYW1lID0gXCJidXR0b240XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMTE5LCA3OSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5UYWJJbmRleCA9IDM7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5UZXh0ID0gXCJMaWdodFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b240X0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjNcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5BbmNob3IgPSAoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcykoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ub3AgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuUmlnaHQpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgzMjgsIDYpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuTmFtZSA9IFwiYnV0dG9uM1wiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDExOSwgNzkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuVGFiSW5kZXggPSAyO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuVGV4dCA9IFwiRGFyayBTdHJpcGVkXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjNfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uMlxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLkFuY2hvciA9ICgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzKSgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlRvcCB8IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5SaWdodCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDIwMywgNik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5OYW1lID0gXCJidXR0b24yXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMTE5LCA3OSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5UYWJJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5UZXh0ID0gXCJMaWdodCBTdHJpcGVkXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjJfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uMVxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLkFuY2hvciA9ICgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzKSgoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Cb3R0b20gfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuTGVmdCkgXHJcbiAgICAgICAgICAgIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlJpZ2h0KSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoNiwgNik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5OYW1lID0gXCJidXR0b24xXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMTkxLCA3OSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5UYWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5UZXh0ID0gXCJEYXJrXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjFfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gcGFuZWwzXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMy5Db250cm9scy5BZGQodGhpcy5kYXRhR3JpZFZpZXcyKTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDMuRG9jayA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRvY2tTdHlsZS5GaWxsO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMy5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgyMTYsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMy5OYW1lID0gXCJwYW5lbDNcIjtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDMuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDU4NCwgMzU4KTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbDMuVGFiSW5kZXggPSAyO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gZGF0YUdyaWRWaWV3MlxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcyLkNvbHVtbkhlYWRlcnNIZWlnaHRTaXplTW9kZSA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRhdGFHcmlkVmlld0NvbHVtbkhlYWRlcnNIZWlnaHRTaXplTW9kZS5BdXRvU2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcyLkNvbHVtbnMuQWRkUmFuZ2UobmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRhdGFHcmlkVmlld0NvbHVtbltdIHtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4yLFxyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjMsXHJcbiAgICAgICAgICAgIHRoaXMuQ29sdW1uNCxcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW41fSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3Mi5Eb2NrID0gU3lzdGVtLldpbmRvd3MuRm9ybXMuRG9ja1N0eWxlLkZpbGw7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3Mi5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcyLk5hbWUgPSBcImRhdGFHcmlkVmlldzJcIjtcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcyLlJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcyLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg1ODQsIDM1OCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3Mi5UYWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3Mi5UYWcgPSBcInRhYmxlXCI7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBDb2x1bW4yXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjIuRGF0YVByb3BlcnR5TmFtZSA9IFwiRGF0YTFcIjtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4yLkhlYWRlclRleHQgPSBcIkRhdGEgMVwiO1xyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjIuTmFtZSA9IFwiQ29sdW1uMlwiO1xyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjIuUmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gQ29sdW1uM1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4zLkRhdGFQcm9wZXJ0eU5hbWUgPSBcIkRhdGEyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuQ29sdW1uMy5IZWFkZXJUZXh0ID0gXCJEYXRhIDJcIjtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4zLk5hbWUgPSBcIkNvbHVtbjNcIjtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4zLlJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIENvbHVtbjRcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuQ29sdW1uNC5EYXRhUHJvcGVydHlOYW1lID0gXCJEYXRhM1wiO1xyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjQuSGVhZGVyVGV4dCA9IFwiRGF0YSAzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuQ29sdW1uNC5OYW1lID0gXCJDb2x1bW40XCI7XHJcbiAgICAgICAgICAgIHRoaXMuQ29sdW1uNC5SZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBDb2x1bW41XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjUuRGF0YVByb3BlcnR5TmFtZSA9IFwiRGF0YTRcIjtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW41LkhlYWRlclRleHQgPSBcIkRhdGEgNFwiO1xyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjUuTmFtZSA9IFwiQ29sdW1uNVwiO1xyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjUuUmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gZnJtVGVzdFxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5BdXRvU2NhbGVEaW1lbnNpb25zID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemVGKDZGLCAxM0YpO1xyXG4gICAgICAgICAgICB0aGlzLkF1dG9TY2FsZU1vZGUgPSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BdXRvU2NhbGVNb2RlLkZvbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuQ2xpZW50U2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDgwMCwgNDUwKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5wYW5lbDMpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLnBhbmVsMik7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMucGFuZWwxKTtcclxuICAgICAgICAgICAgdGhpcy5OYW1lID0gXCJmcm1UZXN0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuU3RhcnRQb3NpdGlvbiA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkZvcm1TdGFydFBvc2l0aW9uLkNlbnRlclNjcmVlbjtcclxuICAgICAgICAgICAgdGhpcy5UZXh0ID0gXCJUZXN0IEFwcGxpY2F0aW9uXCI7XHJcbiAgICAgICAgICAgIHRoaXMuTG9hZCArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmZybVRlc3RfTG9hZCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwxLlJlc3VtZUxheW91dChmYWxzZSk7XHJcbiAgICAgICAgICAgICgoU3lzdGVtLkNvbXBvbmVudE1vZGVsLklTdXBwb3J0SW5pdGlhbGl6ZSkodGhpcy5kYXRhR3JpZFZpZXcxKSkuRW5kSW5pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMi5SZXN1bWVMYXlvdXQoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsMy5SZXN1bWVMYXlvdXQoZmFsc2UpO1xyXG4gICAgICAgICAgICAoKFN5c3RlbS5Db21wb25lbnRNb2RlbC5JU3VwcG9ydEluaXRpYWxpemUpKHRoaXMuZGF0YUdyaWRWaWV3MikpLkVuZEluaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5SZXN1bWVMYXlvdXQoZmFsc2UpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNlbmRyZWdpb25cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5QYW5lbCBwYW5lbDE7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXcgZGF0YUdyaWRWaWV3MTtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLlBhbmVsIHBhbmVsMjtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLlBhbmVsIHBhbmVsMztcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRhdGFHcmlkVmlldyBkYXRhR3JpZFZpZXcyO1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uIGJ1dHRvbjM7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24gYnV0dG9uMjtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b24xO1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uIGJ1dHRvbjQ7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXdUZXh0Qm94Q29sdW1uIENvbHVtbjE7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXdUZXh0Qm94Q29sdW1uIENvbHVtbjI7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXdUZXh0Qm94Q29sdW1uIENvbHVtbjM7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXdUZXh0Qm94Q29sdW1uIENvbHVtbjQ7XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5EYXRhR3JpZFZpZXdUZXh0Qm94Q29sdW1uIENvbHVtbjU7XHJcbiAgICB9XHJcbn0iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFRlc3Q7XHJcblxyXG5uYW1lc3BhY2UgVGVzdEJyaWRnZVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgUHJvZ3JhbVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBNYWluKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gbmV3IGZybVRlc3QoKTtcclxuICAgICAgICAgICAgeC5TaG93KCk7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0KfQo=
