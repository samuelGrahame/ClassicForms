/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 17.1.1
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
                }},
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
            var a = System.Array.init([1, 2, 3, 4, 5], System.Int32);

            System.Console.WriteLine(System.Array.getLength(a, 0));
            System.Console.WriteLine(System.Array.getLength(a, 1));
            System.Console.WriteLine(System.Array.getLength(a, 2));



        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJUZXN0QnJpZGdlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyIuLi9UZXN0L0V4YW1wbGVzL2ZybUNhbGN1bGF0b3IuY3MiLCIuLi9UZXN0L2ZybVRlc3QuY3MiLCJQcm9ncmFtLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQU84REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBcUJBQSxLQUFJQTs7Ozs7Z0JBWnREQTs7OzswQ0FjNEJBLFFBQWVBOztnQkFFM0NBLGFBQWFBOztnQkFFYkEsMEJBQXlCQTs7Ozt3QkFFckJBLGVBQWVBO3dCQUNmQSxXQUFXQTs7O3dCQUdYQSx1QkFBY0EsTUFBUUEsV0FBSUEsMkRBRVJBLGFBQWFBLEFBQU9BLCtCQUNyQkEsYUFBYUEsQUFBT0Esa0NBQ2xCQSxhQUFhQSxBQUFPQSxrQ0FDbkJBLGNBQWNBLEFBQU9BOzs7Ozs7OztnQ0FNaEJBOztnQkFFN0JBLGFBQWFBOztnQkFFYkEsMEJBQXlCQTs7Ozt3QkFFckJBLElBQUlBLCtCQUEwQkE7NEJBRTFCQSxnQkFBZ0JBLHVCQUFjQTs0QkFFOUJBLGdCQUFnQkEsSUFBSUEsNEJBQ2ZBLGtCQUFLQSxBQUFDQSxlQUFlQSx3QkFDckJBLGtCQUFLQSxBQUFDQSxnQkFBZ0JBOzRCQUMzQkEsWUFBWUEsSUFBSUEsMkJBQ1pBLGtCQUFLQSxBQUFDQSxlQUFlQSx5QkFDckJBLGtCQUFLQSxBQUFDQSxnQkFBZ0JBOzs7Ozs7Ozs7Z0JBS2xDQSx3REFBY0E7O3NDQUdVQSxRQUFlQTtnQkFFdkNBLG1EQUFpQkEsQUFBQ0EsWUFBU0E7O3FDQUlKQSxRQUFlQTtnQkFFdENBLFVBQWFBLEFBQUNBLFlBQVNBOztnQkFFdkJBLElBQUlBLGlDQUEwQkE7b0JBRTFCQSxrQkFBYUE7b0JBQ2JBLFlBQU9BO29CQUNQQTs7b0JBSUFBLElBQUlBO3dCQUVBQTt3QkFDQUE7d0JBQ0FBLHdCQUFpQkEsaUJBQVVBO3dCQUMzQkEsd0JBQWlCQSwwQkFBbUJBO3dCQUNwQ0E7O3dCQUVBQSxJQUFJQTs0QkFFQUEscUJBQWdCQSxDQUFDQSxhQUFTQTsrQkFFekJBLElBQUlBOzRCQUVMQSxxQkFBZ0JBLENBQUNBLGFBQVNBOytCQUV6QkEsSUFBSUE7NEJBRUxBLHFCQUFnQkEsQ0FBQ0EsYUFBU0E7K0JBRXpCQSxJQUFJQTs0QkFFTEEscUJBQWdCQSxDQUFDQSxhQUFTQTs7d0JBRTlCQTs7Ozs7Ozs7Ozs7Ozs7O2lDQXZHb0JBO2dCQUU1QkEsSUFBSUEsYUFBYUEsQ0FBQ0EsbUJBQWNBO29CQUU1QkE7O2dCQUVKQSx5REFBYUE7Ozs7Ozs7Ozs7Ozs7Z0JBV2JBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBO2dCQUlBQSwwQkFBMEJBO2dCQUMxQkEscUJBQXFCQSxJQUFJQSx5REFBaURBLGtDQUFrQ0EsbUNBQW1DQSxDQUFDQTtnQkFDaEpBLHlCQUF5QkEsSUFBSUE7Z0JBQzdCQTtnQkFDQUE7Z0JBQ0FBLHFCQUFxQkEsSUFBSUE7Z0JBQ3pCQTtnQkFJQUEsb0JBQW9CQSxJQUFJQSwwREFBb0RBLGtDQUFrQ0EsbUNBQW1DQSxDQUFDQTtnQkFDbEpBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBO2dCQUk5Q0Esb0JBQW9CQSxJQUFJQSwwREFBb0RBLGtDQUFrQ0EsbUNBQW1DQSxDQUFDQTtnQkFDbEpBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBO2dCQUk5Q0Esb0JBQW9CQSxJQUFJQSwwREFBb0RBLGtDQUFrQ0EsbUNBQW1DQSxDQUFDQTtnQkFDbEpBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBO2dCQUk5Q0Esb0JBQW9CQSxJQUFJQSwwREFBb0RBLGtDQUFrQ0EsbUNBQW1DQSxDQUFDQTtnQkFDbEpBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBO2dCQUk5Q0Esb0JBQW9CQSxJQUFJQSwwREFBb0RBLGtDQUFrQ0EsbUNBQW1DQSxDQUFDQTtnQkFDbEpBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBO2dCQUk5Q0Esb0JBQW9CQSxJQUFJQSwwREFBb0RBLGtDQUFrQ0EsbUNBQW1DQSxDQUFDQTtnQkFDbEpBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBO2dCQUk5Q0Esb0JBQW9CQSxJQUFJQSwwREFBb0RBLGtD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QSxjQUNBQTtnQkFDQUEsMEJBQTBCQTtnQkFDMUJBLDhCQUE4QkEsSUFBSUE7Z0JBQ2xDQTtnQkFDQUEsMEJBQTBCQSxJQUFJQTtnQkFDOUJBO2dCQUNBQTtnQkFJQUE7Z0JBQ0FBO2dCQUNBQTtnQkFJQUE7Z0JBQ0FBO2dCQUNBQTtnQkFJQUE7Z0JBQ0FBO2dCQUNBQTtnQkFJQUE7Z0JBQ0FBO2dCQUNBQTtnQkFJQUEsMkJBQTJCQSxJQUFJQTtnQkFDL0JBLHFCQUFxQkE7Z0JBQ3JCQSxrQkFBa0JBLElBQUlBO2dCQUN0QkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkE7Z0JBQ0FBLHFCQUFxQkE7Z0JBQ3JCQTtnQkFDQUEsYUFBYUEsQUFBd0JBO2dCQUNyQ0E7Z0JBQ0FBLEFBQUNBLFlBQTBDQSxDQUFDQTtnQkFDNUNBO2dCQUNBQTtnQkFDQUEsQUFBQ0EsWUFBMENBLENBQUNBO2dCQUM1Q0E7Ozs7Ozs7O1lDM0xBQSxRQUFVQTs7WUFFVkEseUJBQWtCQTtZQUNsQkEseUJBQWtCQTtZQUNsQkEseUJBQWtCQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uQ29tcG9uZW50TW9kZWw7XHJcbnVzaW5nIFN5c3RlbS5EYXRhO1xyXG51c2luZyBTeXN0ZW0uRHJhd2luZztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Gb3JtcztcclxuXHJcbm5hbWVzcGFjZSBUZXN0LkV4YW1wbGVzXHJcbntcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIGZybUNhbGN1bGF0b3IgOiBGb3JtXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGZybUNhbGN1bGF0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIHByZXY7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjbGFzcyBTY2FsZUluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHB1YmxpYyBmbG9hdCBMZWZ0UGVyY2VudDtcclxuICAgICAgICAgICAgcHVibGljIGZsb2F0IFRvcFBlcmNlbnQ7XHJcbiAgICAgICAgICAgIHB1YmxpYyBmbG9hdCBXaWR0aFBlcmNlbnQ7XHJcbiAgICAgICAgICAgIHB1YmxpYyBmbG9hdCBIZWlnaHRQZXJjZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIERpY3Rpb25hcnk8Q29udHJvbCwgU2NhbGVJbmZvPiBrZXlWYWx1ZVBhaXJzID0gbmV3IERpY3Rpb25hcnk8Q29udHJvbCwgU2NhbGVJbmZvPigpO1xyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgZnJtQ2FsY3VsYXRvcl9Mb2FkKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGNsaWVudCA9IENsaWVudFNpemU7XHJcblxyXG4gICAgICAgICAgICBmb3JlYWNoIChDb250cm9sIGl0ZW0gaW4gdGhpcy5Db250cm9scylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gaXRlbS5Mb2NhdGlvbjtcclxuICAgICAgICAgICAgICAgIHZhciBzaXplID0gaXRlbS5TaXplO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBrZXlWYWx1ZVBhaXJzW2l0ZW1dID0gbmV3IFNjYWxlSW5mbygpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGVmdFBlcmNlbnQgPSBsb2NhdGlvbi5YIC8gKGZsb2F0KWNsaWVudC5XaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBUb3BQZXJjZW50ID0gbG9jYXRpb24uWSAvIChmbG9hdCljbGllbnQuSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIFdpZHRoUGVyY2VudCA9IHNpemUuV2lkdGggLyAoZmxvYXQpY2xpZW50LldpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIEhlaWdodFBlcmNlbnQgPSBzaXplLkhlaWdodCAvIChmbG9hdCljbGllbnQuSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25SZXNpemUoRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY2xpZW50ID0gQ2xpZW50U2l6ZTtcclxuXHJcbiAgICAgICAgICAgIGZvcmVhY2ggKENvbnRyb2wgaXRlbSBpbiB0aGlzLkNvbnRyb2xzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5VmFsdWVQYWlycy5Db250YWluc0tleShpdGVtKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2NhbGVJbmZvID0ga2V5VmFsdWVQYWlyc1tpdGVtXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDb25zb2xlLldyaXRlTGluZShzY2FsZUluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uTG9jYXRpb24gPSBuZXcgUG9pbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAoaW50KShjbGllbnQuV2lkdGggKiBzY2FsZUluZm8uTGVmdFBlcmNlbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGludCkoY2xpZW50LkhlaWdodCAqIHNjYWxlSW5mby5Ub3BQZXJjZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5TaXplID0gbmV3IFNpemUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpbnQpKGNsaWVudC5XaWR0aCAqIHNjYWxlSW5mby5XaWR0aFBlcmNlbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoaW50KShjbGllbnQuSGVpZ2h0ICogc2NhbGVJbmZvLkhlaWdodFBlcmNlbnQpKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgYmFzZS5PblJlc2l6ZShlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b24xNV9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHRCb3gxLlRleHQgKz0gKChDb250cm9sKXNlbmRlcikuVGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgY3VycmVudE1vZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uOV9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyBtb2QgPSAoKENvbnRyb2wpc2VuZGVyKS5UZXh0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0cmluZy5Jc051bGxPcldoaXRlU3BhY2UocHJldikpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRNb2QgPSBtb2Q7XHJcbiAgICAgICAgICAgICAgICBwcmV2ID0gdGV4dEJveDEuVGV4dDtcclxuICAgICAgICAgICAgICAgIHRleHRCb3gxLlRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vZCA9PSBcIj1cIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsIHZhbHVlMSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbCB2YWx1ZTIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwuVHJ5UGFyc2UocHJldiwgb3V0IHZhbHVlMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbC5UcnlQYXJzZSh0ZXh0Qm94MS5UZXh0LCBvdXQgdmFsdWUyKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2ID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRNb2QgPT0gXCIrXCIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Qm94MS5UZXh0ID0gKHZhbHVlMSArIHZhbHVlMikuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudE1vZCA9PSBcIi1cIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRCb3gxLlRleHQgPSAodmFsdWUxIC0gdmFsdWUyKS5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50TW9kID09IFwiw7dcIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRCb3gxLlRleHQgPSAodmFsdWUxIC8gdmFsdWUyKS5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50TW9kID09IFwiWFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEJveDEuVGV4dCA9ICh2YWx1ZTEgKiB2YWx1ZTIpLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNb2QgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5Db21wb25lbnRNb2RlbDtcclxudXNpbmcgU3lzdGVtLkRhdGE7XHJcbnVzaW5nIFN5c3RlbS5EcmF3aW5nO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkZvcm1zO1xyXG5cclxubmFtZXNwYWNlIFRlc3Rcclxue1xyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgZnJtVGVzdCA6IEZvcm1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgZnJtVGVzdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRpYyBSYW5kb20gciA9IG5ldyBSYW5kb20oKTtcclxuICAgICAgICBwcml2YXRlIHZvaWQgZnJtVGVzdF9Mb2FkKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGR0ID0gbmV3IERhdGFUYWJsZSgpO1xyXG4gICAgICAgICAgICBkdC5Db2x1bW5zLkFkZChcIk5hbWVcIiwgdHlwZW9mKGludCkpO1xyXG4jaWYgQlJJREdFXHJcbiAgICAgICAgICAgIGR0LkJlZ2luTmV3Um93KDEwMDAwKTtcclxuI2VuZGlmXHJcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgMTAwMDA7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRyID0gZHQuTmV3Um93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZHJbMF0gPSByLk5leHQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGR0LkFjY2VwdENoYW5nZXMoKTtcclxuXHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzEuRGF0YVNvdXJjZSA9IGR0O1xyXG5cclxuXHJcbiAgICAgICAgICAgIGR0ID0gbmV3IERhdGFUYWJsZSgpO1xyXG4gICAgICAgICAgICBkdC5Db2x1bW5zLkFkZChcIkRhdGExXCIsIHR5cGVvZihpbnQpKTtcclxuICAgICAgICAgICAgZHQuQ29sdW1ucy5BZGQoXCJEYXRhMlwiLCB0eXBlb2YoZGVjaW1hbCkpO1xyXG4gICAgICAgICAgICBkdC5Db2x1bW5zLkFkZChcIkRhdGEzXCIsIHR5cGVvZihzdHJpbmcpKTtcclxuICAgICAgICAgICAgZHQuQ29sdW1ucy5BZGQoXCJEYXRhNFwiLCB0eXBlb2YoRGF0ZVRpbWUpKTtcclxuXHJcbiNpZiBCUklER0VcclxuICAgICAgICAgICAgZHQuQmVnaW5OZXdSb3coMTAwMDApO1xyXG4jZW5kaWZcclxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCAxMDAwMDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHIgPSBkdC5OZXdSb3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkclswXSA9IHIuTmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgZHJbMV0gPSAoZGVjaW1hbClyLk5leHREb3VibGUoKTtcclxuICAgICAgICAgICAgICAgIGRyWzJdID0gci5OZXh0KCkuVG9TdHJpbmcoKSArIFwiIHN0cmluZ1wiO1xyXG4gICAgICAgICAgICAgICAgZHJbM10gPSBEYXRlVGltZS5Ob3cuQWRkRGF5cyhyLk5leHREb3VibGUoKSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkdC5BY2NlcHRDaGFuZ2VzKCk7XHJcblxyXG4gICAgICAgICAgICBkYXRhR3JpZFZpZXcyLkRhdGFTb3VyY2UgPSBkdDtcclxuXHJcblxyXG4jaWYgQlJJREdFXHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzEuQ29sdW1uQXV0b1dpZHRoID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzIuQmVzdEZpdEFsbENvbHVtbnModHJ1ZSk7XHJcblxyXG4jZW5kaWZcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b24xX0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3MS5UYWcgPSBcInRhYmxlIHRhYmxlLWRhcmtcIjtcclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3Mi5UYWcgPSBcInRhYmxlIHRhYmxlLWRhcmtcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b24yX0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3MS5UYWcgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWRcIjtcclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3Mi5UYWcgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b24zX0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3MS5UYWcgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtZGFya1wiO1xyXG4gICAgICAgICAgICBkYXRhR3JpZFZpZXcyLlRhZyA9IFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1kYXJrXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uNF9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzEuVGFnID0gXCJ0YWJsZVwiO1xyXG4gICAgICAgICAgICBkYXRhR3JpZFZpZXcyLlRhZyA9IFwidGFibGVcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBUZXN0O1xyXG5cclxubmFtZXNwYWNlIFRlc3RCcmlkZ2Vcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFByb2dyYW1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgTWFpbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbnRbXSBhID0gbmV3IGludFtdIHsgMSwgMiwgMywgNCwgNSB9O1xyXG5cclxuICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUoYS5HZXRMZW5ndGgoMCkpO1xyXG4gICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZShhLkdldExlbmd0aCgxKSk7XHJcbiAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKGEuR2V0TGVuZ3RoKDIpKTtcclxuXHJcbiAgICAgICAgICAgIC8vdmFyIHggPSBuZXcgZnJtVGVzdCgpO1xyXG4gICAgICAgICAgICAvL3guU2hvdygpO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdCn0K
