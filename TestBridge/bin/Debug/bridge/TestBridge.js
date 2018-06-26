/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 17.1.1
 */
Bridge.assembly("TestBridge", function ($asm, globals) {
    "use strict";

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
                this.SuspendLayout();
                this.button1.Anchor = System.Windows.Forms.AnchorStyles.None;
                this.button1.Location = new System.Drawing.Point.$ctor1(262, 144);
                this.button1.Name = "button1";
                this.button1.Size = new System.Drawing.Size.$ctor2(160, 55);
                this.button1.TabIndex = 0;
                this.button1.Tag = "btn btn-primary";
                this.button1.Text = "Open Normal Modal";
                this.button1.UseVisualStyleBackColor = true;
                this.button1.addClick(Bridge.fn.cacheBind(this, this.button1_Click));
                this.button2.Anchor = System.Windows.Forms.AnchorStyles.None;
                this.button2.Location = new System.Drawing.Point.$ctor1(262, 83);
                this.button2.Name = "button2";
                this.button2.Size = new System.Drawing.Size.$ctor2(160, 55);
                this.button2.TabIndex = 1;
                this.button2.Tag = "btn btn-primary";
                this.button2.Text = "Open Dialog Modal";
                this.button2.UseVisualStyleBackColor = true;
                this.button2.addClick(Bridge.fn.cacheBind(this, this.button2_Click));
                this.button3.Anchor = ((11));
                this.button3.Location = new System.Drawing.Point.$ctor1(601, 83);
                this.button3.Name = "button3";
                this.button3.Size = new System.Drawing.Size.$ctor2(84, 318);
                this.button3.TabIndex = 2;
                this.button3.Tag = "btn btn-light";
                this.button3.Text = "Anchor Top, Bottom, Right";
                this.button3.UseVisualStyleBackColor = true;
                this.button5.Anchor = ((14));
                this.button5.Location = new System.Drawing.Point.$ctor1(102, 336);
                this.button5.Name = "button5";
                this.button5.Size = new System.Drawing.Size.$ctor2(493, 65);
                this.button5.TabIndex = 4;
                this.button5.Tag = "btn btn-light";
                this.button5.Text = "Anchor Bottom, Left, Right";
                this.button5.UseVisualStyleBackColor = true;
                this.button6.Anchor = ((7));
                this.button6.Location = new System.Drawing.Point.$ctor1(12, 12);
                this.button6.Name = "button6";
                this.button6.Size = new System.Drawing.Size.$ctor2(84, 389);
                this.button6.TabIndex = 5;
                this.button6.Tag = "btn btn-light";
                this.button6.Text = "Anchor Top, Bottom, Left";
                this.button6.UseVisualStyleBackColor = true;
                this.button7.Anchor = ((13));
                this.button7.Location = new System.Drawing.Point.$ctor1(102, 12);
                this.button7.Name = "button7";
                this.button7.Size = new System.Drawing.Size.$ctor2(493, 65);
                this.button7.TabIndex = 6;
                this.button7.Tag = "btn btn-light";
                this.button7.Text = "Anchor Top, Left, Right";
                this.button7.UseVisualStyleBackColor = true;
                this.button8.Anchor = ((9));
                this.button8.Location = new System.Drawing.Point.$ctor1(601, 12);
                this.button8.Name = "button8";
                this.button8.Size = new System.Drawing.Size.$ctor2(84, 65);
                this.button8.TabIndex = 7;
                this.button8.Tag = "btn btn-danger";
                this.button8.Text = "Close";
                this.button8.UseVisualStyleBackColor = true;
                this.button8.addClick(Bridge.fn.cacheBind(this, this.button8_Click));
                this.button9.Anchor = System.Windows.Forms.AnchorStyles.None;
                this.button9.Location = new System.Drawing.Point.$ctor1(262, 205);
                this.button9.Name = "button9";
                this.button9.Size = new System.Drawing.Size.$ctor2(160, 55);
                this.button9.TabIndex = 8;
                this.button9.Tag = "btn btn-primary";
                this.button9.Text = "Open Docking Test";
                this.button9.UseVisualStyleBackColor = true;
                this.button9.addClick(Bridge.fn.cacheBind(this, this.button9_Click));
                this.button4.Anchor = System.Windows.Forms.AnchorStyles.None;
                this.button4.Location = new System.Drawing.Point.$ctor1(262, 266);
                this.button4.Name = "button4";
                this.button4.Size = new System.Drawing.Size.$ctor2(160, 55);
                this.button4.TabIndex = 9;
                this.button4.Tag = "btn btn-primary";
                this.button4.Text = "Open Flow Panel Test";
                this.button4.UseVisualStyleBackColor = true;
                this.button4.addClick(Bridge.fn.cacheBind(this, this.button4_Click));
                this.ClientSize = new System.Drawing.Size.$ctor2(697, 413);
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
                this.addLoad(Bridge.fn.cacheBind(this, this.frmAnchorTest_Load));
                this.addMouseEnter(Bridge.fn.cacheBind(this, this.frmAnchorTest_MouseEnter));
                this.addMouseLeave(Bridge.fn.cacheBind(this, this.frmAnchorTest_MouseLeave));
                this.addResize(Bridge.fn.cacheBind(this, this.frmCustomer_Resize));
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
                this.Close();
            },
            frmAnchorTest_Load: function (sender, e) {

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
                var x = new Test.StackPanelTest();
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

    Bridge.define("Test.StackPanelTest", {
        inherits: [System.Windows.Forms.Form],
        fields: {
            /**
             * Required designer variable.
             *
             * @instance
             * @private
             * @memberof Test.StackPanelTest
             * @type System.ComponentModel.IContainer
             */
            components: null,
            flowLayoutPanel1: null,
            button1: null,
            button2: null,
            button3: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Form.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            /**
             * Clean up any resources being used.
             *
             * @instance
             * @protected
             * @override
             * @this Test.StackPanelTest
             * @memberof Test.StackPanelTest
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
             * @this Test.StackPanelTest
             * @memberof Test.StackPanelTest
             * @return  {void}
             */
            InitializeComponent: function () {
                this.flowLayoutPanel1 = new System.Windows.Forms.FlowLayoutPanel();
                this.button1 = new System.Windows.Forms.Button();
                this.button2 = new System.Windows.Forms.Button();
                this.button3 = new System.Windows.Forms.Button();
                this.flowLayoutPanel1.SuspendLayout();
                this.SuspendLayout();
                this.flowLayoutPanel1.Controls.add(this.button1);
                this.flowLayoutPanel1.Controls.add(this.button2);
                this.flowLayoutPanel1.Controls.add(this.button3);
                this.flowLayoutPanel1.Location = new System.Drawing.Point.$ctor1(103, 57);
                this.flowLayoutPanel1.Name = "flowLayoutPanel1";
                this.flowLayoutPanel1.Size = new System.Drawing.Size.$ctor2(526, 284);
                this.flowLayoutPanel1.TabIndex = 0;
                this.button1.Location = new System.Drawing.Point.$ctor1(3, 3);
                this.button1.Name = "button1";
                this.button1.Size = new System.Drawing.Size.$ctor2(75, 23);
                this.button1.TabIndex = 0;
                this.button1.Text = "button1";
                this.button1.UseVisualStyleBackColor = true;
                this.button2.Location = new System.Drawing.Point.$ctor1(84, 3);
                this.button2.Name = "button2";
                this.button2.Size = new System.Drawing.Size.$ctor2(75, 23);
                this.button2.TabIndex = 1;
                this.button2.Text = "button2";
                this.button2.UseVisualStyleBackColor = true;
                this.button3.Location = new System.Drawing.Point.$ctor1(165, 3);
                this.button3.Name = "button3";
                this.button3.Size = new System.Drawing.Size.$ctor2(75, 23);
                this.button3.TabIndex = 2;
                this.button3.Text = "button3";
                this.button3.UseVisualStyleBackColor = true;
                this.AutoScaleDimensions = new System.Drawing.SizeF.$ctor3(6.0, 13.0);
                this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
                this.ClientSize = new System.Drawing.Size.$ctor2(800, 450);
                this.Controls.add(this.flowLayoutPanel1);
                this.Name = "StackPanelTest";
                this.Text = "StackPanelTest";
                this.flowLayoutPanel1.ResumeLayout$1(false);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJUZXN0QnJpZGdlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyIuLi9UZXN0L2ZybUFuY2hvclRlc3QuY3MiLCIuLi9UZXN0L2ZybURvY2tpbmdUZXN0LmNzIiwiLi4vVGVzdC9mcm1Nb2RhbC5jcyIsIi4uL1Rlc3QvU3RhY2tQYW5lbFRlc3QuY3MiLCJQcm9ncmFtLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQXVCWUE7Ozs7O2dCQUtBQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQTtnQkFJQUEsc0JBQXNCQTtnQkFDdEJBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSxzQkFBc0JBLEFBQXdCQTtnQkFJOUNBLHNCQUFzQkE7Z0JBQ3RCQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Z0JBSTlDQSxzQkFBc0JBLENBQUNBLEFBQW1DQSxBQUFDQSxDQUFDQTtnQkFFNURBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUlBQSxzQkFBc0JBLENBQUNBLEFBQW1DQSxBQUFDQSxDQUFDQTtnQkFFNURBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJ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QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUlBQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUlBQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUlBQSwyQkFBMkJBLElBQUlBO2dCQUMvQkEscUJBQXFCQTtnQkFDckJBLGtCQUFrQkEsSUFBSUE7Z0JBQ3RCQSxrQkFBa0JBO2dCQUNsQkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Ozs7Ozs7O1lDdEVBQSxRQUFRQSxJQUFJQTtZQUNaQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkZvcm1zO1xyXG5cclxubmFtZXNwYWNlIFRlc3Rcclxue1xyXG4gICAgcHVibGljIGNsYXNzIGZybUFuY2hvclRlc3QgOiBGb3JtXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uMjtcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b24zO1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjU7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uNjtcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b243O1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjg7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uOTtcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b240O1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjE7XHJcblxyXG4gICAgICAgIHB1YmxpYyBmcm1BbmNob3JUZXN0KCkgOiBiYXNlKClcclxuICAgICAgICB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEluaXRpYWxpemVDb21wb25lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNCA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5TdXNwZW5kTGF5b3V0KCk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24xXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuQW5jaG9yID0gU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLk5vbmU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgyNjIsIDE0NCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5OYW1lID0gXCJidXR0b24xXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMTYwLCA1NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5UYWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVGV4dCA9IFwiT3BlbiBOb3JtYWwgTW9kYWxcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uMV9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24yXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuQW5jaG9yID0gU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLk5vbmU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgyNjIsIDgzKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLk5hbWUgPSBcImJ1dHRvbjJcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSgxNjAsIDU1KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLlRhYkluZGV4ID0gMTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLlRhZyA9IFwiYnRuIGJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5UZXh0ID0gXCJPcGVuIERpYWxvZyBNb2RhbFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b24yX0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjNcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5BbmNob3IgPSAoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcykoKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuVG9wIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkJvdHRvbSkgXHJcbiAgICAgICAgICAgIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlJpZ2h0KSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoNjAxLCA4Myk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5OYW1lID0gXCJidXR0b24zXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoODQsIDMxOCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5UYWJJbmRleCA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5UYWcgPSBcImJ0biBidG4tbGlnaHRcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlRleHQgPSBcIkFuY2hvciBUb3AsIEJvdHRvbSwgUmlnaHRcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjVcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5BbmNob3IgPSAoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcykoKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuQm90dG9tIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkxlZnQpIFxyXG4gICAgICAgICAgICB8IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5SaWdodCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241LkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDEwMiwgMzM2KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241Lk5hbWUgPSBcImJ1dHRvbjVcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241LlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg0OTMsIDY1KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241LlRhYkluZGV4ID0gNDtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241LlRhZyA9IFwiYnRuIGJ0bi1saWdodFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuVGV4dCA9IFwiQW5jaG9yIEJvdHRvbSwgTGVmdCwgUmlnaHRcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjZcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5BbmNob3IgPSAoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcykoKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuVG9wIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkJvdHRvbSkgXHJcbiAgICAgICAgICAgIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkxlZnQpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgxMiwgMTIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuTmFtZSA9IFwiYnV0dG9uNlwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDg0LCAzODkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuVGFiSW5kZXggPSA1O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuVGFnID0gXCJidG4gYnRuLWxpZ2h0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5UZXh0ID0gXCJBbmNob3IgVG9wLCBCb3R0b20sIExlZnRcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjdcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5BbmNob3IgPSAoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcykoKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuVG9wIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkxlZnQpIFxyXG4gICAgICAgICAgICB8IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5SaWdodCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b243LkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDEwMiwgMTIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuTmFtZSA9IFwiYnV0dG9uN1wiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDQ5MywgNjUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuVGFiSW5kZXggPSA2O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuVGFnID0gXCJidG4gYnRuLWxpZ2h0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5UZXh0ID0gXCJBbmNob3IgVG9wLCBMZWZ0LCBSaWdodFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uOFxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b244LkFuY2hvciA9ICgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzKSgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlRvcCB8IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5SaWdodCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244LkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDYwMSwgMTIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguTmFtZSA9IFwiYnV0dG9uOFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDg0LCA2NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOC5UYWJJbmRleCA9IDc7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOC5UYWcgPSBcImJ0biBidG4tZGFuZ2VyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOC5UZXh0ID0gXCJDbG9zZVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b244X0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjlcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5BbmNob3IgPSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuTm9uZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b245LkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDI2MiwgMjA1KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b245Lk5hbWUgPSBcImJ1dHRvbjlcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b245LlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSgxNjAsIDU1KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b245LlRhYkluZGV4ID0gODtcclxuICAgICAgICAgICAgdGhpcy5idXR0b245LlRhZyA9IFwiYnRuIGJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5UZXh0ID0gXCJPcGVuIERvY2tpbmcgVGVzdFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b245X0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjRcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5BbmNob3IgPSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuTm9uZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDI2MiwgMjY2KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240Lk5hbWUgPSBcImJ1dHRvbjRcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSgxNjAsIDU1KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LlRhYkluZGV4ID0gOTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LlRhZyA9IFwiYnRuIGJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5UZXh0ID0gXCJPcGVuIEZsb3cgUGFuZWwgVGVzdFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b240X0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGZybUFuY2hvclRlc3RcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuQ2xpZW50U2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY5NywgNDEzKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b240KTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b245KTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b244KTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b243KTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b242KTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b241KTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b24zKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b24yKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy5idXR0b24xKTtcclxuICAgICAgICAgICAgdGhpcy5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCg1MCwgNTApO1xyXG4gICAgICAgICAgICB0aGlzLk5hbWUgPSBcImZybUFuY2hvclRlc3RcIjtcclxuICAgICAgICAgICAgdGhpcy5TdGFydFBvc2l0aW9uID0gU3lzdGVtLldpbmRvd3MuRm9ybXMuRm9ybVN0YXJ0UG9zaXRpb24uQ2VudGVyU2NyZWVuO1xyXG4gICAgICAgICAgICB0aGlzLlRhZyA9IFwibW9kYWwtY29udGVudFwiO1xyXG4gICAgICAgICAgICB0aGlzLlRleHQgPSBcIk1haW4gTWVudVwiO1xyXG4gICAgICAgICAgICB0aGlzLkxvYWQgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5mcm1BbmNob3JUZXN0X0xvYWQpO1xyXG4gICAgICAgICAgICB0aGlzLk1vdXNlRW50ZXIgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5mcm1BbmNob3JUZXN0X01vdXNlRW50ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLk1vdXNlTGVhdmUgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5mcm1BbmNob3JUZXN0X01vdXNlTGVhdmUpO1xyXG4gICAgICAgICAgICB0aGlzLlJlc2l6ZSArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmZybUN1c3RvbWVyX1Jlc2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lTGF5b3V0KGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgdGV4dEJveDFfVGV4dENoYW5nZWQob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCB0ZXh0Qm94Ml9UZXh0Q2hhbmdlZChvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIHRleHRCb3gzX1RleHRDaGFuZ2VkKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uMV9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gbmV3IGZybU1vZGFsKCk7XHJcbiAgICAgICAgICAgIHguU2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjJfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgeCA9IG5ldyBmcm1Nb2RhbCgpO1xyXG4gICAgICAgICAgICB4LlNob3dEaWFsb2coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBmcm1DdXN0b21lcl9SZXNpemUob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b244X0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5DbG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGZybUFuY2hvclRlc3RfTG9hZChvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGZybUFuY2hvclRlc3RfTW91c2VMZWF2ZShvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGZybUFuY2hvclRlc3RfTW91c2VFbnRlcihvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjlfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgeCA9IG5ldyBmcm1Eb2NraW5nVGVzdCgpO1xyXG4gICAgICAgICAgICB4LlNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b240X0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHggPSBuZXcgU3RhY2tQYW5lbFRlc3QoKTtcclxuICAgICAgICAgICAgeC5TaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5Db21wb25lbnRNb2RlbDtcclxudXNpbmcgU3lzdGVtLkRhdGE7XHJcbnVzaW5nIFN5c3RlbS5EcmF3aW5nO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkZvcm1zO1xyXG5cclxubmFtZXNwYWNlIFRlc3Rcclxue1xyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgZnJtRG9ja2luZ1Rlc3QgOiBGb3JtXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGZybURvY2tpbmdUZXN0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b240X0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5DbG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGZybURvY2tpbmdUZXN0X0xvYWQob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkNvbXBvbmVudE1vZGVsO1xyXG51c2luZyBTeXN0ZW0uRGF0YTtcclxudXNpbmcgU3lzdGVtLkRyYXdpbmc7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRm9ybXM7XHJcblxyXG5uYW1lc3BhY2UgVGVzdFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBmcm1Nb2RhbCA6IEZvcm1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgZnJtTW9kYWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjJfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5Db21wb25lbnRNb2RlbDtcclxudXNpbmcgU3lzdGVtLkRhdGE7XHJcbnVzaW5nIFN5c3RlbS5EcmF3aW5nO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkZvcm1zO1xyXG5cclxubmFtZXNwYWNlIFRlc3Rcclxue1xyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU3RhY2tQYW5lbFRlc3QgOiBGb3JtXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIFN0YWNrUGFuZWxUZXN0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBUZXN0O1xyXG5cclxubmFtZXNwYWNlIFRlc3RCcmlkZ2Vcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFByb2dyYW1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgTWFpbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgeCA9IG5ldyBmcm1BbmNob3JUZXN0KCk7XHJcbiAgICAgICAgICAgIHguU2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXQp9Cg==
