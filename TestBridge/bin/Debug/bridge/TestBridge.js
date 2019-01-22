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

    Bridge.define("Test.frmAnchorTest", {
        inherits: [System.Windows.Forms.Form],
        fields: {
            button2: null,
            button3: null,
            button5: null,
            button6: null,
            button7: null,
            button8: null,
            button9: null,
            button4: null,
            dataGridView1: null,
            Column1: null,
            Column2: null,
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
                this.button3 = new System.Windows.Forms.Button();
                this.button5 = new System.Windows.Forms.Button();
                this.button6 = new System.Windows.Forms.Button();
                this.button7 = new System.Windows.Forms.Button();
                this.button8 = new System.Windows.Forms.Button();
                this.button9 = new System.Windows.Forms.Button();
                this.button4 = new System.Windows.Forms.Button();
                this.dataGridView1 = new System.Windows.Forms.DataGridView.ctor();
                this.Column1 = new System.Windows.Forms.DataGridViewTextBoxColumn.ctor();
                this.Column2 = new System.Windows.Forms.DataGridViewTextBoxColumn.ctor();
                Bridge.cast((this.dataGridView1), System.ComponentModel.ISupportInitialize).System$ComponentModel$ISupportInitialize$BeginInit();
                this.SuspendLayout();
                this.button1.Anchor = ((9));
                this.button1.Location = new System.Drawing.Point.$ctor1(931, 146);
                this.button1.Name = "button1";
                this.button1.Size = new System.Drawing.Size.$ctor2(160, 55);
                this.button1.TabIndex = 0;
                this.button1.Tag = "btn btn-primary";
                this.button1.Text = "Open Normal Modal";
                this.button1.UseVisualStyleBackColor = true;
                this.button1.addClick(Bridge.fn.cacheBind(this, this.button1_Click));
                this.button2.Anchor = ((9));
                this.button2.Location = new System.Drawing.Point.$ctor1(931, 85);
                this.button2.Name = "button2";
                this.button2.Size = new System.Drawing.Size.$ctor2(160, 55);
                this.button2.TabIndex = 1;
                this.button2.Tag = "btn btn-primary";
                this.button2.Text = "Open Dialog Modal";
                this.button2.UseVisualStyleBackColor = true;
                this.button2.addClick(Bridge.fn.cacheBind(this, this.button2_Click));
                this.button3.Anchor = ((11));
                this.button3.Location = new System.Drawing.Point.$ctor1(1097, 83);
                this.button3.Name = "button3";
                this.button3.Size = new System.Drawing.Size.$ctor2(84, 479);
                this.button3.TabIndex = 2;
                this.button3.Tag = "btn btn-light";
                this.button3.Text = "Anchor Top, Bottom, Right";
                this.button3.UseVisualStyleBackColor = true;
                this.button5.Anchor = ((14));
                this.button5.Location = new System.Drawing.Point.$ctor1(102, 497);
                this.button5.Name = "button5";
                this.button5.Size = new System.Drawing.Size.$ctor2(989, 65);
                this.button5.TabIndex = 4;
                this.button5.Tag = "btn btn-light";
                this.button5.Text = "Anchor Bottom, Left, Right";
                this.button5.UseVisualStyleBackColor = true;
                this.button6.Anchor = ((7));
                this.button6.Location = new System.Drawing.Point.$ctor1(12, 12);
                this.button6.Name = "button6";
                this.button6.Size = new System.Drawing.Size.$ctor2(84, 550);
                this.button6.TabIndex = 5;
                this.button6.Tag = "btn btn-light";
                this.button6.Text = "Anchor Top, Bottom, Left";
                this.button6.UseVisualStyleBackColor = true;
                this.button7.Anchor = ((13));
                this.button7.Location = new System.Drawing.Point.$ctor1(102, 12);
                this.button7.Name = "button7";
                this.button7.Size = new System.Drawing.Size.$ctor2(989, 65);
                this.button7.TabIndex = 6;
                this.button7.Tag = "btn btn-light";
                this.button7.Text = "Anchor Top, Left, Right";
                this.button7.UseVisualStyleBackColor = true;
                this.button8.Anchor = ((9));
                this.button8.Location = new System.Drawing.Point.$ctor1(1097, 12);
                this.button8.Name = "button8";
                this.button8.Size = new System.Drawing.Size.$ctor2(84, 65);
                this.button8.TabIndex = 7;
                this.button8.Tag = "btn btn-danger";
                this.button8.Text = "Close";
                this.button8.UseVisualStyleBackColor = true;
                this.button8.addClick(Bridge.fn.cacheBind(this, this.button8_Click));
                this.button9.Anchor = ((9));
                this.button9.Location = new System.Drawing.Point.$ctor1(931, 207);
                this.button9.Name = "button9";
                this.button9.Size = new System.Drawing.Size.$ctor2(160, 55);
                this.button9.TabIndex = 8;
                this.button9.Tag = "btn btn-primary";
                this.button9.Text = "Open Docking Test";
                this.button9.UseVisualStyleBackColor = true;
                this.button9.addClick(Bridge.fn.cacheBind(this, this.button9_Click));
                this.button4.Location = new System.Drawing.Point.$ctor1(102, 83);
                this.button4.Name = "button4";
                this.button4.Size = new System.Drawing.Size.$ctor2(64, 57);
                this.button4.TabIndex = 9;
                this.button4.Tag = "btn btn-primary";
                this.button4.Text = "Calculator";
                this.button4.UseVisualStyleBackColor = true;
                this.button4.addClick(Bridge.fn.cacheBind(this, this.button4_Click));
                this.dataGridView1.Anchor = ((15));
                this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
                this.dataGridView1.Columns.AddRange(System.Array.init([this.Column1, this.Column2], System.Windows.Forms.DataGridViewColumn));
                this.dataGridView1.Location = new System.Drawing.Point.$ctor1(102, 146);
                this.dataGridView1.Name = "dataGridView1";
                this.dataGridView1.Size = new System.Drawing.Size.$ctor2(823, 345);
                this.dataGridView1.TabIndex = 10;
                this.dataGridView1.Tag = "table table-striped table-bordered table-hover";
                this.Column1.DataPropertyName = "Test1";
                this.Column1.HeaderText = "Test 1";
                this.Column1.Name = "Column1";
                this.Column2.DataPropertyName = "Test2";
                this.Column2.HeaderText = "Test 2";
                this.Column2.Name = "Column2";
                this.ClientSize = new System.Drawing.Size.$ctor2(1193, 574);
                this.Controls.add(this.dataGridView1);
                this.Controls.add(this.button4);
                this.Controls.add(this.button9);
                this.Controls.add(this.button8);
                this.Controls.add(this.button7);
                this.Controls.add(this.button6);
                this.Controls.add(this.button5);
                this.Controls.add(this.button3);
                this.Controls.add(this.button2);
                this.Controls.add(this.button1);
                this.Location = new System.Drawing.Point.$ctor1(50, 50);
                this.Name = "frmAnchorTest";
                this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
                this.Tag = "modal-content";
                this.Text = "Main Menu";
                this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
                this.addLoad(Bridge.fn.cacheBind(this, this.frmAnchorTest_Load));
                this.addMouseEnter(Bridge.fn.cacheBind(this, this.frmAnchorTest_MouseEnter));
                this.addMouseLeave(Bridge.fn.cacheBind(this, this.frmAnchorTest_MouseLeave));
                this.addResize(Bridge.fn.cacheBind(this, this.frmCustomer_Resize));
                Bridge.cast((this.dataGridView1), System.ComponentModel.ISupportInitialize).System$ComponentModel$ISupportInitialize$EndInit();
                this.ResumeLayout$1(false);

            },
            textBox1_TextChanged: function (sender, e) {

            },
            textBox2_TextChanged: function (sender, e) {

            },
            textBox3_TextChanged: function (sender, e) {

            },
            button1_Click: function (sender, e) {
                var x = new Test.frmModal();
                x.Show();
            },
            button2_Click: function (sender, e) {
                var x = new Test.frmModal();
                x.ShowDialog();
            },
            frmCustomer_Resize: function (sender, e) {

            },
            button8_Click: function (sender, e) {
                System.Windows.Forms.MessageBox.Show("Clicked the close button...");
            },
            frmAnchorTest_Load: function (sender, e) {
                var dt = new System.Data.DataTable();

                dt.Columns.Add("Test1", System.String);
                dt.Columns.Add("Test2", System.String);

                for (var i = 0; i < 1000; i = (i + 1) | 0) {
                    var dr = dt.NewRow();

                    dr.setItem(0, Bridge.toString(i));
                    dr.setItem(1, Bridge.toString(i));

                    dt.Rows.Add(dr);
                }

                dt.AcceptChanges();

                this.dataGridView1.DataSource = dt;
            },
            frmAnchorTest_MouseLeave: function (sender, e) {

            },
            frmAnchorTest_MouseEnter: function (sender, e) {

            },
            button9_Click: function (sender, e) {
                var x = new Test.frmDockingTest();
                x.Show();
            },
            button4_Click: function (sender, e) {
                var x = new Test.Examples.frmCalculator();
                x.Show();
            }
        }
    });

    Bridge.define("Test.frmDockingTest", {
        inherits: [System.Windows.Forms.Form],
        fields: {
            /**
             * Required designer variable.
             *
             * @instance
             * @private
             * @memberof Test.frmDockingTest
             * @type System.ComponentModel.IContainer
             */
            components: null,
            panel1: null,
            button4: null,
            button3: null,
            button2: null,
            button1: null,
            panel2: null,
            label1: null,
            tabControl1: null,
            tabPage1: null,
            tabPage2: null,
            checkBox2: null,
            checkBox1: null,
            comboBox1: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Form.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            button4_Click: function (sender, e) {
                this.Close();
            },
            frmDockingTest_Load: function (sender, e) {

            },
            /**
             * Clean up any resources being used.
             *
             * @instance
             * @protected
             * @override
             * @this Test.frmDockingTest
             * @memberof Test.frmDockingTest
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
             * @this Test.frmDockingTest
             * @memberof Test.frmDockingTest
             * @return  {void}
             */
            InitializeComponent: function () {
                this.panel1 = new System.Windows.Forms.Panel();
                this.button4 = new System.Windows.Forms.Button();
                this.button3 = new System.Windows.Forms.Button();
                this.button2 = new System.Windows.Forms.Button();
                this.button1 = new System.Windows.Forms.Button();
                this.panel2 = new System.Windows.Forms.Panel();
                this.label1 = new System.Windows.Forms.Label();
                this.tabControl1 = new System.Windows.Forms.TabControl();
                this.tabPage1 = new System.Windows.Forms.TabPage();
                this.comboBox1 = new System.Windows.Forms.ComboBox();
                this.tabPage2 = new System.Windows.Forms.TabPage();
                this.checkBox2 = new System.Windows.Forms.CheckBox();
                this.checkBox1 = new System.Windows.Forms.CheckBox();
                this.panel1.SuspendLayout();
                this.panel2.SuspendLayout();
                this.tabControl1.SuspendLayout();
                this.tabPage1.SuspendLayout();
                this.tabPage2.SuspendLayout();
                this.SuspendLayout();
                this.panel1.BackColor = System.Drawing.Color.DimGray.$clone();
                this.panel1.Controls.add(this.button4);
                this.panel1.Controls.add(this.button3);
                this.panel1.Controls.add(this.button2);
                this.panel1.Controls.add(this.button1);
                this.panel1.Dock = System.Windows.Forms.DockStyle.Top;
                this.panel1.Location = new System.Drawing.Point.$ctor1(0, 0);
                this.panel1.Name = "panel1";
                this.panel1.Size = new System.Drawing.Size.$ctor2(800, 93);
                this.panel1.TabIndex = 0;
                this.button4.Anchor = ((9));
                this.button4.Location = new System.Drawing.Point.$ctor1(711, 12);
                this.button4.Name = "button4";
                this.button4.Size = new System.Drawing.Size.$ctor2(77, 67);
                this.button4.TabIndex = 3;
                this.button4.Text = "Close";
                this.button4.UseVisualStyleBackColor = true;
                this.button4.addClick(Bridge.fn.cacheBind(this, this.button4_Click));
                this.button3.Location = new System.Drawing.Point.$ctor1(178, 12);
                this.button3.Name = "button3";
                this.button3.Size = new System.Drawing.Size.$ctor2(77, 67);
                this.button3.TabIndex = 2;
                this.button3.Text = "Delete";
                this.button3.UseVisualStyleBackColor = true;
                this.button2.Location = new System.Drawing.Point.$ctor1(95, 12);
                this.button2.Name = "button2";
                this.button2.Size = new System.Drawing.Size.$ctor2(77, 67);
                this.button2.TabIndex = 1;
                this.button2.Text = "New";
                this.button2.UseVisualStyleBackColor = true;
                this.button1.Location = new System.Drawing.Point.$ctor1(12, 12);
                this.button1.Name = "button1";
                this.button1.Size = new System.Drawing.Size.$ctor2(77, 67);
                this.button1.TabIndex = 0;
                this.button1.Text = "Save";
                this.button1.UseVisualStyleBackColor = true;
                this.panel2.BackColor = System.Drawing.Color.DimGray.$clone();
                this.panel2.Controls.add(this.label1);
                this.panel2.Dock = System.Windows.Forms.DockStyle.Bottom;
                this.panel2.Location = new System.Drawing.Point.$ctor1(0, 421);
                this.panel2.Name = "panel2";
                this.panel2.Size = new System.Drawing.Size.$ctor2(800, 29);
                this.panel2.TabIndex = 1;
                this.label1.Anchor = ((10));
                this.label1.AutoSize = true;
                this.label1.ForeColor = System.Drawing.Color.White.$clone();
                this.label1.Location = new System.Drawing.Point.$ctor1(747, 3);
                this.label1.Name = "label1";
                this.label1.Size = new System.Drawing.Size.$ctor2(41, 13);
                this.label1.TabIndex = 0;
                this.label1.Tag = "label label-info";
                this.label1.Text = "Ready.";
                this.tabControl1.Controls.add(this.tabPage1);
                this.tabControl1.Controls.add(this.tabPage2);
                this.tabControl1.Dock = System.Windows.Forms.DockStyle.Fill;
                this.tabControl1.Location = new System.Drawing.Point.$ctor1(0, 93);
                this.tabControl1.Name = "tabControl1";
                this.tabControl1.SelectedIndex = 0;
                this.tabControl1.Size = new System.Drawing.Size.$ctor2(800, 328);
                this.tabControl1.TabIndex = 2;
                this.tabControl1.Tag = "nav nav-tabs,nav-item nav-link ";
                this.tabPage1.Controls.add(this.comboBox1);
                this.tabPage1.Location = new System.Drawing.Point.$ctor1(4, 22);
                this.tabPage1.Name = "tabPage1";
                this.tabPage1.Padding = new System.Windows.Forms.Padding.$ctor1(3);
                this.tabPage1.Size = new System.Drawing.Size.$ctor2(792, 302);
                this.tabPage1.TabIndex = 0;
                this.tabPage1.Tag = "form-control";
                this.tabPage1.Text = "Data";
                this.tabPage1.UseVisualStyleBackColor = true;
                this.comboBox1.FormattingEnabled = true;
                this.comboBox1.ItemHeight = 13;
                this.comboBox1.Items.AddRange(System.Array.init(["", "Item 1", "Item 2", "Item 3"], System.Object));
                this.comboBox1.Location = new System.Drawing.Point.$ctor1(28, 21);
                this.comboBox1.Name = "comboBox1";
                this.comboBox1.Size = new System.Drawing.Size.$ctor2(223, 21);
                this.comboBox1.TabIndex = 0;
                this.comboBox1.Tag = "form-control";
                this.tabPage2.Controls.add(this.checkBox2);
                this.tabPage2.Controls.add(this.checkBox1);
                this.tabPage2.Location = new System.Drawing.Point.$ctor1(4, 22);
                this.tabPage2.Name = "tabPage2";
                this.tabPage2.Padding = new System.Windows.Forms.Padding.$ctor1(3);
                this.tabPage2.Size = new System.Drawing.Size.$ctor2(792, 302);
                this.tabPage2.TabIndex = 1;
                this.tabPage2.Tag = "form-control";
                this.tabPage2.Text = "Config";
                this.tabPage2.UseVisualStyleBackColor = true;
                this.checkBox2.AutoSize = true;
                this.checkBox2.Location = new System.Drawing.Point.$ctor1(19, 50);
                this.checkBox2.Name = "checkBox2";
                this.checkBox2.Size = new System.Drawing.Size.$ctor2(107, 17);
                this.checkBox2.TabIndex = 2;
                this.checkBox2.Tag = "form-control";
                this.checkBox2.Text = "Enable Feature 2";
                this.checkBox2.UseVisualStyleBackColor = true;
                this.checkBox1.AutoSize = true;
                this.checkBox1.Location = new System.Drawing.Point.$ctor1(19, 16);
                this.checkBox1.Name = "checkBox1";
                this.checkBox1.Size = new System.Drawing.Size.$ctor2(107, 17);
                this.checkBox1.TabIndex = 1;
                this.checkBox1.Tag = "form-control";
                this.checkBox1.Text = "Enable Feature 1";
                this.checkBox1.UseVisualStyleBackColor = true;
                this.AutoScaleDimensions = new System.Drawing.SizeF.$ctor3(6.0, 13.0);
                this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
                this.ClientSize = new System.Drawing.Size.$ctor2(800, 450);
                this.Controls.add(this.tabControl1);
                this.Controls.add(this.panel2);
                this.Controls.add(this.panel1);
                this.Name = "frmDockingTest";
                this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
                this.Tag = "";
                this.Text = "frmDockingTest";
                this.addLoad(Bridge.fn.cacheBind(this, this.frmDockingTest_Load));
                this.panel1.ResumeLayout$1(false);
                this.panel2.ResumeLayout$1(false);
                this.panel2.PerformLayout$1();
                this.tabControl1.ResumeLayout$1(false);
                this.tabPage1.ResumeLayout$1(false);
                this.tabPage2.ResumeLayout$1(false);
                this.tabPage2.PerformLayout$1();
                this.ResumeLayout$1(false);

            }
        }
    });

    Bridge.define("Test.frmModal", {
        inherits: [System.Windows.Forms.Form],
        fields: {
            /**
             * Required designer variable.
             *
             * @instance
             * @private
             * @memberof Test.frmModal
             * @type System.ComponentModel.IContainer
             */
            components: null,
            button8: null,
            button1: null,
            button2: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Form.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            button2_Click: function (sender, e) {
                this.Close();
            },
            /**
             * Clean up any resources being used.
             *
             * @instance
             * @protected
             * @override
             * @this Test.frmModal
             * @memberof Test.frmModal
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
             * @this Test.frmModal
             * @memberof Test.frmModal
             * @return  {void}
             */
            InitializeComponent: function () {
                this.button8 = new System.Windows.Forms.Button();
                this.button1 = new System.Windows.Forms.Button();
                this.button2 = new System.Windows.Forms.Button();
                this.SuspendLayout();
                this.button8.Anchor = ((10));
                this.button8.DialogResult = System.Windows.Forms.DialogResult.Cancel;
                this.button8.Location = new System.Drawing.Point.$ctor1(277, 161);
                this.button8.Name = "button8";
                this.button8.Size = new System.Drawing.Size.$ctor2(140, 51);
                this.button8.TabIndex = 8;
                this.button8.Tag = "btn btn-light";
                this.button8.Text = "Cancel";
                this.button8.UseVisualStyleBackColor = true;
                this.button1.Anchor = ((10));
                this.button1.DialogResult = System.Windows.Forms.DialogResult.OK;
                this.button1.Location = new System.Drawing.Point.$ctor1(131, 161);
                this.button1.Name = "button1";
                this.button1.Size = new System.Drawing.Size.$ctor2(140, 51);
                this.button1.TabIndex = 9;
                this.button1.Tag = "btn btn-primary";
                this.button1.Text = "Okay";
                this.button1.UseVisualStyleBackColor = true;
                this.button2.Anchor = ((9));
                this.button2.Location = new System.Drawing.Point.$ctor1(333, 12);
                this.button2.Name = "button2";
                this.button2.Size = new System.Drawing.Size.$ctor2(84, 65);
                this.button2.TabIndex = 10;
                this.button2.Tag = "btn btn-danger";
                this.button2.Text = "Close";
                this.button2.UseVisualStyleBackColor = true;
                this.button2.addClick(Bridge.fn.cacheBind(this, this.button2_Click));
                this.AutoScaleDimensions = new System.Drawing.SizeF.$ctor3(6.0, 13.0);
                this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
                this.ClientSize = new System.Drawing.Size.$ctor2(429, 224);
                this.Controls.add(this.button2);
                this.Controls.add(this.button1);
                this.Controls.add(this.button8);
                this.Name = "frmModal";
                this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
                this.Tag = "";
                this.Text = "frmModal";
                this.ResumeLayout$1(false);

            }
        }
    });

    Bridge.define("TestBridge.Program", {
        main: function Main () {
            var x = new Test.frmAnchorTest();
            x.Show();
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJUZXN0QnJpZGdlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyIuLi9UZXN0L0V4YW1wbGVzL2ZybUNhbGN1bGF0b3IuY3MiLCIuLi9UZXN0L2ZybUFuY2hvclRlc3QuY3MiLCIuLi9UZXN0L2ZybURvY2tpbmdUZXN0LmNzIiwiLi4vVGVzdC9mcm1Nb2RhbC5jcyIsIlByb2dyYW0uY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBTzhEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FxQkFBLEtBQUlBOzs7OztnQkFadERBOzs7OzBDQWM0QkEsUUFBZUE7O2dCQUUzQ0EsYUFBYUE7O2dCQUViQSwwQkFBeUJBOzs7O3dCQUVyQkEsZUFBZUE7d0JBQ2ZBLFdBQVdBOzs7d0JBR1hBLHVCQUFjQSxNQUFRQSxXQUFJQSwyREFFUkEsYUFBYUEsQUFBT0EsK0JBQ3JCQSxhQUFhQSxBQUFPQSxrQ0FDbEJBLGFBQWFBLEFBQU9BLGtDQUNuQkEsY0FBY0EsQUFBT0E7Ozs7Ozs7O2dDQU1oQkE7O2dCQUU3QkEsYUFBYUE7O2dCQUViQSwwQkFBeUJBOzs7O3dCQUVyQkEsSUFBSUEsK0JBQTBCQTs0QkFFMUJBLGdCQUFnQkEsdUJBQWNBOzRCQUU5QkEsZ0JBQWdCQSxJQUFJQSw0QkFDZkEsa0JBQUtBLEFBQUNBLGVBQWVBLHdCQUNyQkEsa0JBQUtBLEFBQUNBLGdCQUFnQkE7NEJBQzNCQSxZQUFZQSxJQUFJQSwyQkFDWkEsa0JBQUtBLEFBQUNBLGVBQWVBLHlCQUNyQkEsa0JBQUtBLEFBQUNBLGdCQUFnQkE7Ozs7Ozs7OztnQkFLbENBLHdEQUFjQTs7c0NBR1VBLFFBQWVBO2dCQUV2Q0EsbURBQWlCQSxBQUFDQSxZQUFTQTs7cUNBSUpBLFFBQWVBO2dCQUV0Q0EsVUFBYUEsQUFBQ0EsWUFBU0E7O2dCQUV2QkEsSUFBSUEsaUNBQTBCQTtvQkFFMUJBLGtCQUFhQTtvQkFDYkEsWUFBT0E7b0JBQ1BBOztvQkFJQUEsSUFBSUE7d0JBRUFBO3dCQUNBQTt3QkFDQUEsd0JBQWlCQSxpQkFBVUE7d0JBQzNCQSx3QkFBaUJBLDBCQUFtQkE7d0JBQ3BDQTs7d0JBRUFBLElBQUlBOzRCQUVBQSxxQkFBZ0JBLENBQUNBLGFBQVNBOytCQUV6QkEsSUFBSUE7NEJBRUxBLHFCQUFnQkEsQ0FBQ0EsYUFBU0E7K0JBRXpCQSxJQUFJQTs0QkFFTEEscUJBQWdCQSxDQUFDQSxhQUFTQTsrQkFFekJBLElBQUlBOzRCQUVMQSxxQkFBZ0JBLENBQUNBLGFBQVNBOzt3QkFFOUJBOzs7Ozs7Ozs7Ozs7Ozs7aUNBdkdvQkE7Z0JBRTVCQSxJQUFJQSxhQUFhQSxDQUFDQSxtQkFBY0E7b0JBRTVCQTs7Z0JBRUpBLHlEQUFhQTs7Ozs7Ozs7Ozs7OztnQkFXYkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkE7Z0JBSUFBLDBCQUEwQkE7Z0JBQzFCQSxxQkFBcUJBLElBQUlBLHlEQUFpREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNoSkEseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQTtnQkFDQUEscUJBQXFCQSxJQUFJQTtnQkFDekJBO2dCQUlBQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxvQkFBb0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNsSkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxxQkFBcUJBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNuSkEseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsdUJBQXVCQSxBQUF3QkE7Z0JBSS9DQSxxQkFBcUJBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNuSkEseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsdUJBQXVCQSxBQUF3QkE7Z0JBSS9DQSxxQkFBcUJBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNuSkEseUJBQXlCQSxJQUFJQTtnQkFDN0JBO2dCQUNBQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsdUJBQXVCQSxB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Ozs7Z0JBV2JBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBO2dCQUlBQSxzQkFBc0JBLENBQUNBLEFBQW1DQSxBQUFDQSxDQUFDQTtnQkFDNURBLDRCQUE0QkE7Z0JBQzVCQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTtnQkFJQUEsc0JBQXNCQSxDQUFDQSxBQUFtQ0EsQUFBQ0EsQ0FBQ0E7Z0JBQzVEQSw0QkFBNEJBO2dCQUM1QkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBSUFBLHNCQUFzQkEsQ0FBQ0EsQUFBbUNBLEFBQUNBLENBQUNBO2dCQUM1REEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBO2dCQUk5Q0EsMkJBQTJCQSxJQUFJQTtnQkFDL0JBLHFCQUFxQkE7Z0JBQ3JCQSxrQkFBa0JBLElBQUlBO2dCQUN0QkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkE7Z0JBQ0FBLHFCQUFxQkE7Z0JBQ3JCQTtnQkFDQUE7Z0JBQ0FBOzs7Ozs7OztZQ3RFQUEsUUFBUUEsSUFBSUE7WUFDWkEiLAogICJzb3VyY2VzQ29udGVudCI6IFsidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkNvbXBvbmVudE1vZGVsO1xyXG51c2luZyBTeXN0ZW0uRGF0YTtcclxudXNpbmcgU3lzdGVtLkRyYXdpbmc7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRm9ybXM7XHJcblxyXG5uYW1lc3BhY2UgVGVzdC5FeGFtcGxlc1xyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBmcm1DYWxjdWxhdG9yIDogRm9ybVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBmcm1DYWxjdWxhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBwcmV2O1xyXG5cclxuICAgICAgICBwdWJsaWMgY2xhc3MgU2NhbGVJbmZvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwdWJsaWMgZmxvYXQgTGVmdFBlcmNlbnQ7XHJcbiAgICAgICAgICAgIHB1YmxpYyBmbG9hdCBUb3BQZXJjZW50O1xyXG4gICAgICAgICAgICBwdWJsaWMgZmxvYXQgV2lkdGhQZXJjZW50O1xyXG4gICAgICAgICAgICBwdWJsaWMgZmxvYXQgSGVpZ2h0UGVyY2VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBEaWN0aW9uYXJ5PENvbnRyb2wsIFNjYWxlSW5mbz4ga2V5VmFsdWVQYWlycyA9IG5ldyBEaWN0aW9uYXJ5PENvbnRyb2wsIFNjYWxlSW5mbz4oKTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGZybUNhbGN1bGF0b3JfTG9hZChvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjbGllbnQgPSBDbGllbnRTaXplO1xyXG5cclxuICAgICAgICAgICAgZm9yZWFjaCAoQ29udHJvbCBpdGVtIGluIHRoaXMuQ29udHJvbHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IGl0ZW0uTG9jYXRpb247XHJcbiAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IGl0ZW0uU2l6ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAga2V5VmFsdWVQYWlyc1tpdGVtXSA9IG5ldyBTY2FsZUluZm8oKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIExlZnRQZXJjZW50ID0gbG9jYXRpb24uWCAvIChmbG9hdCljbGllbnQuV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgVG9wUGVyY2VudCA9IGxvY2F0aW9uLlkgLyAoZmxvYXQpY2xpZW50LkhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBXaWR0aFBlcmNlbnQgPSBzaXplLldpZHRoIC8gKGZsb2F0KWNsaWVudC5XaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBIZWlnaHRQZXJjZW50ID0gc2l6ZS5IZWlnaHQgLyAoZmxvYXQpY2xpZW50LkhlaWdodFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uUmVzaXplKEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGNsaWVudCA9IENsaWVudFNpemU7XHJcblxyXG4gICAgICAgICAgICBmb3JlYWNoIChDb250cm9sIGl0ZW0gaW4gdGhpcy5Db250cm9scylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleVZhbHVlUGFpcnMuQ29udGFpbnNLZXkoaXRlbSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjYWxlSW5mbyA9IGtleVZhbHVlUGFpcnNbaXRlbV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29uc29sZS5Xcml0ZUxpbmUoc2NhbGVJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkxvY2F0aW9uID0gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGludCkoY2xpZW50LldpZHRoICogc2NhbGVJbmZvLkxlZnRQZXJjZW50KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIChpbnQpKGNsaWVudC5IZWlnaHQgKiBzY2FsZUluZm8uVG9wUGVyY2VudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uU2l6ZSA9IG5ldyBTaXplKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoaW50KShjbGllbnQuV2lkdGggKiBzY2FsZUluZm8uV2lkdGhQZXJjZW50KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGludCkoY2xpZW50LkhlaWdodCAqIHNjYWxlSW5mby5IZWlnaHRQZXJjZW50KSk7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGJhc2UuT25SZXNpemUoZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uMTVfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0Qm94MS5UZXh0ICs9ICgoQ29udHJvbClzZW5kZXIpLlRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIGN1cnJlbnRNb2Q7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjlfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcgbW9kID0gKChDb250cm9sKXNlbmRlcikuVGV4dDtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdHJpbmcuSXNOdWxsT3JXaGl0ZVNwYWNlKHByZXYpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TW9kID0gbW9kO1xyXG4gICAgICAgICAgICAgICAgcHJldiA9IHRleHRCb3gxLlRleHQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Qm94MS5UZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChtb2QgPT0gXCI9XCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbCB2YWx1ZTEgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwgdmFsdWUyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsLlRyeVBhcnNlKHByZXYsIG91dCB2YWx1ZTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwuVHJ5UGFyc2UodGV4dEJveDEuVGV4dCwgb3V0IHZhbHVlMik7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50TW9kID09IFwiK1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEJveDEuVGV4dCA9ICh2YWx1ZTEgKyB2YWx1ZTIpLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRNb2QgPT0gXCItXCIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Qm94MS5UZXh0ID0gKHZhbHVlMSAtIHZhbHVlMikuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudE1vZCA9PSBcIsO3XCIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Qm94MS5UZXh0ID0gKHZhbHVlMSAvIHZhbHVlMikuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudE1vZCA9PSBcIlhcIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRCb3gxLlRleHQgPSAodmFsdWUxICogdmFsdWUyKS5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TW9kID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uRGF0YTtcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Gb3JtcztcclxudXNpbmcgVGVzdC5FeGFtcGxlcztcclxuXHJcbm5hbWVzcGFjZSBUZXN0XHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBmcm1BbmNob3JUZXN0IDogRm9ybVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjI7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uMztcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b241O1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjY7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uNztcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b244O1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjk7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uNDtcclxuICAgICAgICBwcml2YXRlIERhdGFHcmlkVmlldyBkYXRhR3JpZFZpZXcxO1xyXG4gICAgICAgIHByaXZhdGUgRGF0YUdyaWRWaWV3VGV4dEJveENvbHVtbiBDb2x1bW4xO1xyXG4gICAgICAgIHByaXZhdGUgRGF0YUdyaWRWaWV3VGV4dEJveENvbHVtbiBDb2x1bW4yO1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjE7XHJcblxyXG4gICAgICAgIHB1YmxpYyBmcm1BbmNob3JUZXN0KCkgOiBiYXNlKClcclxuICAgICAgICB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEluaXRpYWxpemVDb21wb25lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNCA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcxID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRhdGFHcmlkVmlldygpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjEgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuRGF0YUdyaWRWaWV3VGV4dEJveENvbHVtbigpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjIgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuRGF0YUdyaWRWaWV3VGV4dEJveENvbHVtbigpO1xyXG4gICAgICAgICAgICAoKFN5c3RlbS5Db21wb25lbnRNb2RlbC5JU3VwcG9ydEluaXRpYWxpemUpKHRoaXMuZGF0YUdyaWRWaWV3MSkpLkJlZ2luSW5pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLlN1c3BlbmRMYXlvdXQoKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjFcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5BbmNob3IgPSAoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcykoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ub3AgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuUmlnaHQpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCg5MzEsIDE0Nik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5OYW1lID0gXCJidXR0b24xXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMTYwLCA1NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5UYWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVGV4dCA9IFwiT3BlbiBOb3JtYWwgTW9kYWxcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uMV9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24yXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuQW5jaG9yID0gKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMpKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuVG9wIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlJpZ2h0KSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoOTMxLCA4NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5OYW1lID0gXCJidXR0b24yXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMTYwLCA1NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5UYWJJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVGV4dCA9IFwiT3BlbiBEaWFsb2cgTW9kYWxcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uMl9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24zXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuQW5jaG9yID0gKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMpKCgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlRvcCB8IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Cb3R0b20pIFxyXG4gICAgICAgICAgICB8IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5SaWdodCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDEwOTcsIDgzKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLk5hbWUgPSBcImJ1dHRvbjNcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg4NCwgNDc5KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlRhYkluZGV4ID0gMjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlRhZyA9IFwiYnRuIGJ0bi1saWdodFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuVGV4dCA9IFwiQW5jaG9yIFRvcCwgQm90dG9tLCBSaWdodFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uNVxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b241LkFuY2hvciA9ICgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzKSgoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Cb3R0b20gfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuTGVmdCkgXHJcbiAgICAgICAgICAgIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlJpZ2h0KSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTAyLCA0OTcpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuTmFtZSA9IFwiYnV0dG9uNVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDk4OSwgNjUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuVGFiSW5kZXggPSA0O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuVGFnID0gXCJidG4gYnRuLWxpZ2h0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5UZXh0ID0gXCJBbmNob3IgQm90dG9tLCBMZWZ0LCBSaWdodFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uNlxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LkFuY2hvciA9ICgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzKSgoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ub3AgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuQm90dG9tKSBcclxuICAgICAgICAgICAgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuTGVmdCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDEyLCAxMik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5OYW1lID0gXCJidXR0b242XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoODQsIDU1MCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5UYWJJbmRleCA9IDU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5UYWcgPSBcImJ0biBidG4tbGlnaHRcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LlRleHQgPSBcIkFuY2hvciBUb3AsIEJvdHRvbSwgTGVmdFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uN1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b243LkFuY2hvciA9ICgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzKSgoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ub3AgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuTGVmdCkgXHJcbiAgICAgICAgICAgIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlJpZ2h0KSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTAyLCAxMik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5OYW1lID0gXCJidXR0b243XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoOTg5LCA2NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5UYWJJbmRleCA9IDY7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5UYWcgPSBcImJ0biBidG4tbGlnaHRcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b243LlRleHQgPSBcIkFuY2hvciBUb3AsIExlZnQsIFJpZ2h0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b244XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguQW5jaG9yID0gKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMpKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuVG9wIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlJpZ2h0KSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTA5NywgMTIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguTmFtZSA9IFwiYnV0dG9uOFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDg0LCA2NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOC5UYWJJbmRleCA9IDc7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOC5UYWcgPSBcImJ0biBidG4tZGFuZ2VyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOC5UZXh0ID0gXCJDbG9zZVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b244X0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjlcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5BbmNob3IgPSAoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcykoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ub3AgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuUmlnaHQpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCg5MzEsIDIwNyk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5OYW1lID0gXCJidXR0b245XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMTYwLCA1NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5UYWJJbmRleCA9IDg7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkuVGV4dCA9IFwiT3BlbiBEb2NraW5nIFRlc3RcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b245LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b245LkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uOV9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b240XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTAyLCA4Myk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5OYW1lID0gXCJidXR0b240XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNjQsIDU3KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LlRhYkluZGV4ID0gOTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LlRhZyA9IFwiYnRuIGJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5UZXh0ID0gXCJDYWxjdWxhdG9yXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjRfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gZGF0YUdyaWRWaWV3MVxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcxLkFuY2hvciA9ICgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzKSgoKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuVG9wIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkJvdHRvbSkgXHJcbiAgICAgICAgICAgIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkxlZnQpIFxyXG4gICAgICAgICAgICB8IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5SaWdodCkpKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcxLkNvbHVtbkhlYWRlcnNIZWlnaHRTaXplTW9kZSA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRhdGFHcmlkVmlld0NvbHVtbkhlYWRlcnNIZWlnaHRTaXplTW9kZS5BdXRvU2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcxLkNvbHVtbnMuQWRkUmFuZ2UobmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkRhdGFHcmlkVmlld0NvbHVtbltdIHtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4xLFxyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjJ9KTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcxLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDEwMiwgMTQ2KTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcxLk5hbWUgPSBcImRhdGFHcmlkVmlldzFcIjtcclxuICAgICAgICAgICAgdGhpcy5kYXRhR3JpZFZpZXcxLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg4MjMsIDM0NSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWRWaWV3MS5UYWJJbmRleCA9IDEwO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFHcmlkVmlldzEuVGFnID0gXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyXCI7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBDb2x1bW4xXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjEuRGF0YVByb3BlcnR5TmFtZSA9IFwiVGVzdDFcIjtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4xLkhlYWRlclRleHQgPSBcIlRlc3QgMVwiO1xyXG4gICAgICAgICAgICB0aGlzLkNvbHVtbjEuTmFtZSA9IFwiQ29sdW1uMVwiO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gQ29sdW1uMlxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4yLkRhdGFQcm9wZXJ0eU5hbWUgPSBcIlRlc3QyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuQ29sdW1uMi5IZWFkZXJUZXh0ID0gXCJUZXN0IDJcIjtcclxuICAgICAgICAgICAgdGhpcy5Db2x1bW4yLk5hbWUgPSBcIkNvbHVtbjJcIjtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGZybUFuY2hvclRlc3RcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuQ2xpZW50U2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDExOTMsIDU3NCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuZGF0YUdyaWRWaWV3MSk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uOSk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uOCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNik7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNSk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMik7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMSk7XHJcbiAgICAgICAgICAgIHRoaXMuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoNTAsIDUwKTtcclxuICAgICAgICAgICAgdGhpcy5OYW1lID0gXCJmcm1BbmNob3JUZXN0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuU3RhcnRQb3NpdGlvbiA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkZvcm1TdGFydFBvc2l0aW9uLkNlbnRlclNjcmVlbjtcclxuICAgICAgICAgICAgdGhpcy5UYWcgPSBcIm1vZGFsLWNvbnRlbnRcIjtcclxuICAgICAgICAgICAgdGhpcy5UZXh0ID0gXCJNYWluIE1lbnVcIjtcclxuICAgICAgICAgICAgdGhpcy5XaW5kb3dTdGF0ZSA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkZvcm1XaW5kb3dTdGF0ZS5NYXhpbWl6ZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuTG9hZCArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmZybUFuY2hvclRlc3RfTG9hZCk7XHJcbiAgICAgICAgICAgIHRoaXMuTW91c2VFbnRlciArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmZybUFuY2hvclRlc3RfTW91c2VFbnRlcik7XHJcbiAgICAgICAgICAgIHRoaXMuTW91c2VMZWF2ZSArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmZybUFuY2hvclRlc3RfTW91c2VMZWF2ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVzaXplICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuZnJtQ3VzdG9tZXJfUmVzaXplKTtcclxuICAgICAgICAgICAgKChTeXN0ZW0uQ29tcG9uZW50TW9kZWwuSVN1cHBvcnRJbml0aWFsaXplKSh0aGlzLmRhdGFHcmlkVmlldzEpKS5FbmRJbml0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lTGF5b3V0KGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgdGV4dEJveDFfVGV4dENoYW5nZWQob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCB0ZXh0Qm94Ml9UZXh0Q2hhbmdlZChvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIHRleHRCb3gzX1RleHRDaGFuZ2VkKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uMV9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gbmV3IGZybU1vZGFsKCk7XHJcbiAgICAgICAgICAgIHguU2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjJfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgeCA9IG5ldyBmcm1Nb2RhbCgpO1xyXG4gICAgICAgICAgICB4LlNob3dEaWFsb2coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBmcm1DdXN0b21lcl9SZXNpemUob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b244X0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTWVzc2FnZUJveC5TaG93KFwiQ2xpY2tlZCB0aGUgY2xvc2UgYnV0dG9uLi4uXCIpO1xyXG4gICAgICAgICAgICAvL3RoaXMuQ2xvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBmcm1BbmNob3JUZXN0X0xvYWQob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZHQgPSBuZXcgRGF0YVRhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICBkdC5Db2x1bW5zLkFkZChcIlRlc3QxXCIsIHR5cGVvZihzdHJpbmcpKTtcclxuICAgICAgICAgICAgZHQuQ29sdW1ucy5BZGQoXCJUZXN0MlwiLCB0eXBlb2Yoc3RyaW5nKSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IDEwMDA7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRyID0gZHQuTmV3Um93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZHJbMF0gPSBpLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBkclsxXSA9IGkuVG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkdC5Sb3dzLkFkZChkcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGR0LkFjY2VwdENoYW5nZXMoKTtcclxuXHJcbiAgICAgICAgICAgIGRhdGFHcmlkVmlldzEuRGF0YVNvdXJjZSA9IGR0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGZybUFuY2hvclRlc3RfTW91c2VMZWF2ZShvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGZybUFuY2hvclRlc3RfTW91c2VFbnRlcihvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjlfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgeCA9IG5ldyBmcm1Eb2NraW5nVGVzdCgpO1xyXG4gICAgICAgICAgICB4LlNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b240X0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHggPSBuZXcgZnJtQ2FsY3VsYXRvcigpO1xyXG4gICAgICAgICAgICB4LlNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkNvbXBvbmVudE1vZGVsO1xyXG51c2luZyBTeXN0ZW0uRGF0YTtcclxudXNpbmcgU3lzdGVtLkRyYXdpbmc7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRm9ybXM7XHJcblxyXG5uYW1lc3BhY2UgVGVzdFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBmcm1Eb2NraW5nVGVzdCA6IEZvcm1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgZnJtRG9ja2luZ1Rlc3QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjRfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgZnJtRG9ja2luZ1Rlc3RfTG9hZChvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uQ29tcG9uZW50TW9kZWw7XHJcbnVzaW5nIFN5c3RlbS5EYXRhO1xyXG51c2luZyBTeXN0ZW0uRHJhd2luZztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Gb3JtcztcclxuXHJcbm5hbWVzcGFjZSBUZXN0XHJcbntcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIGZybU1vZGFsIDogRm9ybVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBmcm1Nb2RhbCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uMl9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuQ2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBUZXN0O1xyXG5cclxubmFtZXNwYWNlIFRlc3RCcmlkZ2Vcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFByb2dyYW1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgTWFpbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgeCA9IG5ldyBmcm1BbmNob3JUZXN0KCk7XHJcbiAgICAgICAgICAgIHguU2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXQp9Cg==
