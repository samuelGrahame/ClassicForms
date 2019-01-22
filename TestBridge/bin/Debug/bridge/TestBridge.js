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

                for (var i = 0; i < 1000; i = (i + 1) | 0) {
                    var dr = dt.NewRow();

                    dr.setItem(0, Bridge.box(Test.frmTest.r.Next(), System.Int32));

                    dt.Rows.Add(dr);
                }

                dt.AcceptChanges();

                this.dataGridView1.DataSource = dt;


                dt = new System.Data.DataTable();
                dt.Columns.Add("Data1", System.Int32);
                dt.Columns.Add("Data2", System.Decimal);
                dt.Columns.Add("Data3", System.String);
                dt.Columns.Add("Data4", System.DateTime);

                for (var i1 = 0; i1 < 1000; i1 = (i1 + 1) | 0) {
                    var dr1 = dt.NewRow();

                    dr1.setItem(0, Bridge.box(Test.frmTest.r.Next(), System.Int32));
                    dr1.setItem(1, System.Decimal(Test.frmTest.r.NextDouble(), null, System.Double));
                    dr1.setItem(2, (Bridge.toString(Test.frmTest.r.Next()) || "") + " string");
                    dr1.setItem(3, Bridge.box(System.DateTime.addDays(System.DateTime.getNow(), Test.frmTest.r.NextDouble()), System.DateTime, System.DateTime.format));

                    dt.Rows.Add(dr1);
                }

                dt.AcceptChanges();

                this.dataGridView2.DataSource = dt;


                this.dataGridView1.BestFitAllColumns(true);
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
            var x = new Test.frmTest();
            x.Show();
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJUZXN0QnJpZGdlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyIuLi9UZXN0L0V4YW1wbGVzL2ZybUNhbGN1bGF0b3IuY3MiLCIuLi9UZXN0L2ZybVRlc3QuY3MiLCJQcm9ncmFtLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQU84REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBcUJBQSxLQUFJQTs7Ozs7Z0JBWnREQTs7OzswQ0FjNEJBLFFBQWVBOztnQkFFM0NBLGFBQWFBOztnQkFFYkEsMEJBQXlCQTs7Ozt3QkFFckJBLGVBQWVBO3dCQUNmQSxXQUFXQTs7O3dCQUdYQSx1QkFBY0EsTUFBUUEsV0FBSUEsMkRBRVJBLGFBQWFBLEFBQU9BLCtCQUNyQkEsYUFBYUEsQUFBT0Esa0NBQ2xCQSxhQUFhQSxBQUFPQSxrQ0FDbkJBLGNBQWNBLEFBQU9BOzs7Ozs7OztnQ0FNaEJBOztnQkFFN0JBLGFBQWFBOztnQkFFYkEsMEJBQXlCQTs7Ozt3QkFFckJBLElBQUlBLCtCQUEwQkE7NEJBRTFCQSxnQkFBZ0JBLHVCQUFjQTs0QkFFOUJBLGdCQUFnQkEsSUFBSUEsNEJBQ2ZBLGtCQUFLQSxBQUFDQSxlQUFlQSx3QkFDckJBLGtCQUFLQSxBQUFDQSxnQkFBZ0JBOzRCQUMzQkEsWUFBWUEsSUFBSUEsMkJBQ1pBLGtCQUFLQSxBQUFDQSxlQUFlQSx5QkFDckJBLGtCQUFLQSxBQUFDQSxnQkFBZ0JBOzs7Ozs7Ozs7Z0JBS2xDQSx3REFBY0E7O3NDQUdVQSxRQUFlQTtnQkFFdkNBLG1EQUFpQkEsQUFBQ0EsWUFBU0E7O3FDQUlKQSxRQUFlQTtnQkFFdENBLFVBQWFBLEFBQUNBLFlBQVNBOztnQkFFdkJBLElBQUlBLGlDQUEwQkE7b0JBRTFCQSxrQkFBYUE7b0JBQ2JBLFlBQU9BO29CQUNQQTs7b0JBSUFBLElBQUlBO3dCQUVBQTt3QkFDQUE7d0JBQ0FBLHdCQUFpQkEsaUJBQVVBO3dCQUMzQkEsd0JBQWlCQSwwQkFBbUJBO3dCQUNwQ0E7O3dCQUVBQSxJQUFJQTs0QkFFQUEscUJBQWdCQSxDQUFDQSxhQUFTQTsrQkFFekJBLElBQUlBOzRCQUVMQSxxQkFBZ0JBLENBQUNBLGFBQVNBOytCQUV6QkEsSUFBSUE7NEJBRUxBLHFCQUFnQkEsQ0FBQ0EsYUFBU0E7K0JBRXpCQSxJQUFJQTs0QkFFTEEscUJBQWdCQSxDQUFDQSxhQUFTQTs7d0JBRTlCQTs7Ozs7Ozs7Ozs7Ozs7O2lDQXZHb0JBO2dCQUU1QkEsSUFBSUEsYUFBYUEsQ0FBQ0EsbUJBQWNBO29CQUU1QkE7O2dCQUVKQSx5REFBYUE7Ozs7Ozs7Ozs7Ozs7Z0JBV2JBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBO2dCQUlBQSwwQkFBMEJBO2dCQUMxQkEscUJBQXFCQSxJQUFJQSx5REFBaURBLGtDQUFrQ0EsbUNBQW1DQSxDQUFDQTtnQkFDaEpBLHlCQUF5QkEsSUFBSUE7Z0JBQzdCQTtnQkFDQUE7Z0JBQ0FBLHFCQUFxQkEsSUFBSUE7Z0JBQ3pCQTtnQkFJQUEsb0JBQW9CQSxJQUFJQSwwREFBb0RBLGtDQUFrQ0EsbUNBQW1DQSxDQUFDQTtnQkFDbEpBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBO2dCQUk5Q0Esb0JBQW9CQSxJQUFJQSwwREFBb0RBLGtDQUFrQ0EsbUNBQW1DQSxDQUFDQTtnQkFDbEpBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBO2dCQUk5Q0Esb0JBQW9CQSxJQUFJQSwwREFBb0RBLGtDQUFrQ0EsbUNBQW1DQSxDQUFDQTtnQkFDbEpBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBO2dCQUk5Q0Esb0JBQW9CQSxJQUFJQSwwREFBb0RBLGtDQUFrQ0EsbUNBQW1DQSxDQUFDQTtnQkFDbEpBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBO2dCQUk5Q0Esb0JBQW9CQSxJQUFJQSwwREFBb0RBLGtDQUFrQ0EsbUNBQW1DQSxDQUFDQTtnQkFDbEpBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBO2dCQUk5Q0Esb0JBQW9CQSxJQUFJQSwwREFBb0RBLGtDQUFrQ0EsbUNBQW1DQSxDQUFDQTtnQkFDbEpBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBO2dCQUk5Q0Esb0JBQW9CQSxJQUFJQSwwREFBb0RBLGtD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Q0EsY0FDQUEsY0FDQUEsY0FDQUE7Z0JBQ0FBLDBCQUEwQkE7Z0JBQzFCQSw4QkFBOEJBLElBQUlBO2dCQUNsQ0E7Z0JBQ0FBLDBCQUEwQkEsSUFBSUE7Z0JBQzlCQTtnQkFDQUE7Z0JBSUFBO2dCQUNBQTtnQkFDQUE7Z0JBSUFBO2dCQUNBQTtnQkFDQUE7Z0JBSUFBO2dCQUNBQTtnQkFDQUE7Z0JBSUFBO2dCQUNBQTtnQkFDQUE7Z0JBSUFBLDJCQUEyQkEsSUFBSUE7Z0JBQy9CQSxxQkFBcUJBO2dCQUNyQkEsa0JBQWtCQSxJQUFJQTtnQkFDdEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBO2dCQUNBQSxxQkFBcUJBO2dCQUNyQkE7Z0JBQ0FBLGFBQWFBLEFBQXdCQTtnQkFDckNBO2dCQUNBQSxBQUFDQSxZQUEwQ0EsQ0FBQ0E7Z0JBQzVDQTtnQkFDQUE7Z0JBQ0FBLEFBQUNBLFlBQTBDQSxDQUFDQTtnQkFDNUNBOzs7Ozs7OztZQzNMQUEsUUFBUUEsSUFBSUE7WUFDWkEiLAogICJzb3VyY2VzQ29udGVudCI6IFsidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkNvbXBvbmVudE1vZGVsO1xyXG51c2luZyBTeXN0ZW0uRGF0YTtcclxudXNpbmcgU3lzdGVtLkRyYXdpbmc7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRm9ybXM7XHJcblxyXG5uYW1lc3BhY2UgVGVzdC5FeGFtcGxlc1xyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBmcm1DYWxjdWxhdG9yIDogRm9ybVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBmcm1DYWxjdWxhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBwcmV2O1xyXG5cclxuICAgICAgICBwdWJsaWMgY2xhc3MgU2NhbGVJbmZvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwdWJsaWMgZmxvYXQgTGVmdFBlcmNlbnQ7XHJcbiAgICAgICAgICAgIHB1YmxpYyBmbG9hdCBUb3BQZXJjZW50O1xyXG4gICAgICAgICAgICBwdWJsaWMgZmxvYXQgV2lkdGhQZXJjZW50O1xyXG4gICAgICAgICAgICBwdWJsaWMgZmxvYXQgSGVpZ2h0UGVyY2VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBEaWN0aW9uYXJ5PENvbnRyb2wsIFNjYWxlSW5mbz4ga2V5VmFsdWVQYWlycyA9IG5ldyBEaWN0aW9uYXJ5PENvbnRyb2wsIFNjYWxlSW5mbz4oKTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGZybUNhbGN1bGF0b3JfTG9hZChvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjbGllbnQgPSBDbGllbnRTaXplO1xyXG5cclxuICAgICAgICAgICAgZm9yZWFjaCAoQ29udHJvbCBpdGVtIGluIHRoaXMuQ29udHJvbHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IGl0ZW0uTG9jYXRpb247XHJcbiAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IGl0ZW0uU2l6ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAga2V5VmFsdWVQYWlyc1tpdGVtXSA9IG5ldyBTY2FsZUluZm8oKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIExlZnRQZXJjZW50ID0gbG9jYXRpb24uWCAvIChmbG9hdCljbGllbnQuV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgVG9wUGVyY2VudCA9IGxvY2F0aW9uLlkgLyAoZmxvYXQpY2xpZW50LkhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBXaWR0aFBlcmNlbnQgPSBzaXplLldpZHRoIC8gKGZsb2F0KWNsaWVudC5XaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBIZWlnaHRQZXJjZW50ID0gc2l6ZS5IZWlnaHQgLyAoZmxvYXQpY2xpZW50LkhlaWdodFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uUmVzaXplKEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGNsaWVudCA9IENsaWVudFNpemU7XHJcblxyXG4gICAgICAgICAgICBmb3JlYWNoIChDb250cm9sIGl0ZW0gaW4gdGhpcy5Db250cm9scylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleVZhbHVlUGFpcnMuQ29udGFpbnNLZXkoaXRlbSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjYWxlSW5mbyA9IGtleVZhbHVlUGFpcnNbaXRlbV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29uc29sZS5Xcml0ZUxpbmUoc2NhbGVJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkxvY2F0aW9uID0gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGludCkoY2xpZW50LldpZHRoICogc2NhbGVJbmZvLkxlZnRQZXJjZW50KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIChpbnQpKGNsaWVudC5IZWlnaHQgKiBzY2FsZUluZm8uVG9wUGVyY2VudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uU2l6ZSA9IG5ldyBTaXplKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoaW50KShjbGllbnQuV2lkdGggKiBzY2FsZUluZm8uV2lkdGhQZXJjZW50KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGludCkoY2xpZW50LkhlaWdodCAqIHNjYWxlSW5mby5IZWlnaHRQZXJjZW50KSk7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGJhc2UuT25SZXNpemUoZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uMTVfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0Qm94MS5UZXh0ICs9ICgoQ29udHJvbClzZW5kZXIpLlRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIGN1cnJlbnRNb2Q7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjlfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcgbW9kID0gKChDb250cm9sKXNlbmRlcikuVGV4dDtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdHJpbmcuSXNOdWxsT3JXaGl0ZVNwYWNlKHByZXYpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TW9kID0gbW9kO1xyXG4gICAgICAgICAgICAgICAgcHJldiA9IHRleHRCb3gxLlRleHQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Qm94MS5UZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChtb2QgPT0gXCI9XCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbCB2YWx1ZTEgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwgdmFsdWUyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsLlRyeVBhcnNlKHByZXYsIG91dCB2YWx1ZTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwuVHJ5UGFyc2UodGV4dEJveDEuVGV4dCwgb3V0IHZhbHVlMik7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50TW9kID09IFwiK1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEJveDEuVGV4dCA9ICh2YWx1ZTEgKyB2YWx1ZTIpLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRNb2QgPT0gXCItXCIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Qm94MS5UZXh0ID0gKHZhbHVlMSAtIHZhbHVlMikuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudE1vZCA9PSBcIsO3XCIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Qm94MS5UZXh0ID0gKHZhbHVlMSAvIHZhbHVlMikuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudE1vZCA9PSBcIlhcIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRCb3gxLlRleHQgPSAodmFsdWUxICogdmFsdWUyKS5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TW9kID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uQ29tcG9uZW50TW9kZWw7XHJcbnVzaW5nIFN5c3RlbS5EYXRhO1xyXG51c2luZyBTeXN0ZW0uRHJhd2luZztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Gb3JtcztcclxuXHJcbm5hbWVzcGFjZSBUZXN0XHJcbntcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIGZybVRlc3QgOiBGb3JtXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGZybVRlc3QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0aWMgUmFuZG9tIHIgPSBuZXcgUmFuZG9tKCk7XHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGZybVRlc3RfTG9hZChvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBkdCA9IG5ldyBEYXRhVGFibGUoKTtcclxuICAgICAgICAgICAgZHQuQ29sdW1ucy5BZGQoXCJOYW1lXCIsIHR5cGVvZihpbnQpKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgMTAwMDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHIgPSBkdC5OZXdSb3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkclswXSA9IHIuTmV4dCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGR0LlJvd3MuQWRkKGRyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZHQuQWNjZXB0Q2hhbmdlcygpO1xyXG5cclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3MS5EYXRhU291cmNlID0gZHQ7XHJcblxyXG5cclxuICAgICAgICAgICAgZHQgPSBuZXcgRGF0YVRhYmxlKCk7XHJcbiAgICAgICAgICAgIGR0LkNvbHVtbnMuQWRkKFwiRGF0YTFcIiwgdHlwZW9mKGludCkpO1xyXG4gICAgICAgICAgICBkdC5Db2x1bW5zLkFkZChcIkRhdGEyXCIsIHR5cGVvZihkZWNpbWFsKSk7XHJcbiAgICAgICAgICAgIGR0LkNvbHVtbnMuQWRkKFwiRGF0YTNcIiwgdHlwZW9mKHN0cmluZykpO1xyXG4gICAgICAgICAgICBkdC5Db2x1bW5zLkFkZChcIkRhdGE0XCIsIHR5cGVvZihEYXRlVGltZSkpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCAxMDAwOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBkciA9IGR0Lk5ld1JvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRyWzBdID0gci5OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICBkclsxXSA9IChkZWNpbWFsKXIuTmV4dERvdWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgZHJbMl0gPSByLk5leHQoKS5Ub1N0cmluZygpICsgXCIgc3RyaW5nXCI7XHJcbiAgICAgICAgICAgICAgICBkclszXSA9IERhdGVUaW1lLk5vdy5BZGREYXlzKHIuTmV4dERvdWJsZSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkdC5Sb3dzLkFkZChkcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGR0LkFjY2VwdENoYW5nZXMoKTtcclxuXHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzIuRGF0YVNvdXJjZSA9IGR0O1xyXG5cclxuICAgICAgICAgICAgXHJcbiNpZiBCUklER0VcclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3MS5CZXN0Rml0QWxsQ29sdW1ucyh0cnVlKTtcclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3Mi5CZXN0Rml0QWxsQ29sdW1ucyh0cnVlKTtcclxuI2VuZGlmXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uMV9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzEuVGFnID0gXCJ0YWJsZSB0YWJsZS1kYXJrXCI7XHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzIuVGFnID0gXCJ0YWJsZSB0YWJsZS1kYXJrXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uMl9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzEuVGFnID0gXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI7XHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzIuVGFnID0gXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uM19DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzEuVGFnID0gXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWRhcmtcIjtcclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3Mi5UYWcgPSBcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtZGFya1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjRfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhR3JpZFZpZXcxLlRhZyA9IFwidGFibGVcIjtcclxuICAgICAgICAgICAgZGF0YUdyaWRWaWV3Mi5UYWcgPSBcInRhYmxlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgVGVzdDtcclxuXHJcbm5hbWVzcGFjZSBUZXN0QnJpZGdlXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBQcm9ncmFtXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIE1haW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHggPSBuZXcgZnJtVGVzdCgpO1xyXG4gICAgICAgICAgICB4LlNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0KfQo=
