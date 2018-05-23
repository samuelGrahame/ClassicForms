/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 17.0.0
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
                this.SuspendLayout();
                //
                // button1
                //
                this.button1.Anchor = System.Windows.Forms.AnchorStyles.None;
                this.button1.Location = new System.Drawing.Point.$ctor1(261, 175);
                this.button1.Name = "button1";
                this.button1.Size = new System.Drawing.Size.$ctor2(160, 55);
                this.button1.TabIndex = 0;
                this.button1.Tag = "btn btn-primary";
                this.button1.Text = "Open Normal Modal";
                this.button1.UseVisualStyleBackColor = true;
                this.button1.addClick(Bridge.fn.cacheBind(this, this.button1_Click));
                //
                // button2
                //
                this.button2.Anchor = System.Windows.Forms.AnchorStyles.None;
                this.button2.Location = new System.Drawing.Point.$ctor1(261, 114);
                this.button2.Name = "button2";
                this.button2.Size = new System.Drawing.Size.$ctor2(160, 55);
                this.button2.TabIndex = 1;
                this.button2.Tag = "btn btn-primary";
                this.button2.Text = "Open Dialog Modal";
                this.button2.UseVisualStyleBackColor = true;
                this.button2.addClick(Bridge.fn.cacheBind(this, this.button2_Click));
                //
                // button3
                //
                this.button3.Anchor = ((11));
                this.button3.Location = new System.Drawing.Point.$ctor1(601, 83);
                this.button3.Name = "button3";
                this.button3.Size = new System.Drawing.Size.$ctor2(84, 318);
                this.button3.TabIndex = 2;
                this.button3.Tag = "btn btn-info";
                this.button3.Text = "Anchor Top, Bottom, Right";
                this.button3.UseVisualStyleBackColor = true;
                //
                // button5
                //
                this.button5.Anchor = ((14));
                this.button5.Location = new System.Drawing.Point.$ctor1(102, 336);
                this.button5.Name = "button5";
                this.button5.Size = new System.Drawing.Size.$ctor2(493, 65);
                this.button5.TabIndex = 4;
                this.button5.Tag = "btn btn-info";
                this.button5.Text = "Anchor Bottom, Left, Right";
                this.button5.UseVisualStyleBackColor = true;
                //
                // button6
                //
                this.button6.Anchor = ((7));
                this.button6.Location = new System.Drawing.Point.$ctor1(12, 12);
                this.button6.Name = "button6";
                this.button6.Size = new System.Drawing.Size.$ctor2(84, 389);
                this.button6.TabIndex = 5;
                this.button6.Tag = "btn btn-info";
                this.button6.Text = "Anchor Top, Bottom, Left";
                this.button6.UseVisualStyleBackColor = true;
                //
                // button7
                //
                this.button7.Anchor = ((13));
                this.button7.Location = new System.Drawing.Point.$ctor1(102, 12);
                this.button7.Name = "button7";
                this.button7.Size = new System.Drawing.Size.$ctor2(493, 65);
                this.button7.TabIndex = 6;
                this.button7.Tag = "btn btn-info";
                this.button7.Text = "Anchor Top, Left, Right";
                this.button7.UseVisualStyleBackColor = true;
                //
                // button8
                //
                this.button8.Anchor = ((9));
                this.button8.Location = new System.Drawing.Point.$ctor1(601, 12);
                this.button8.Name = "button8";
                this.button8.Size = new System.Drawing.Size.$ctor2(84, 65);
                this.button8.TabIndex = 7;
                this.button8.Tag = "btn btn-danger";
                this.button8.Text = "Close";
                this.button8.UseVisualStyleBackColor = true;
                this.button8.addClick(Bridge.fn.cacheBind(this, this.button8_Click));
                //
                // button9
                //
                this.button9.Anchor = System.Windows.Forms.AnchorStyles.None;
                this.button9.Location = new System.Drawing.Point.$ctor1(261, 236);
                this.button9.Name = "button9";
                this.button9.Size = new System.Drawing.Size.$ctor2(160, 55);
                this.button9.TabIndex = 8;
                this.button9.Tag = "btn btn-primary";
                this.button9.Text = "Open Docking Test";
                this.button9.UseVisualStyleBackColor = true;
                this.button9.addClick(Bridge.fn.cacheBind(this, this.button9_Click));
                //
                // frmAnchorTest
                //
                this.ClientSize = new System.Drawing.Size.$ctor2(697, 413);
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
                this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
                this.addLoad(Bridge.fn.cacheBind(this, this.frmAnchorTest_Load));
                this.addMouseDoubleClick(Bridge.fn.cacheBind(this, this.frmAnchorTest_MouseDoubleClick));
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
            frmAnchorTest_MouseDoubleClick: function (sender, e) {

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
                //
                // panel1
                //
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
                //
                // button4
                //
                this.button4.Anchor = ((9));
                this.button4.Location = new System.Drawing.Point.$ctor1(711, 12);
                this.button4.Name = "button4";
                this.button4.Size = new System.Drawing.Size.$ctor2(77, 67);
                this.button4.TabIndex = 3;
                this.button4.Tag = "btn btn-warning";
                this.button4.Text = "Close";
                this.button4.UseVisualStyleBackColor = true;
                this.button4.addClick(Bridge.fn.cacheBind(this, this.button4_Click));
                //
                // button3
                //
                this.button3.Location = new System.Drawing.Point.$ctor1(178, 12);
                this.button3.Name = "button3";
                this.button3.Size = new System.Drawing.Size.$ctor2(77, 67);
                this.button3.TabIndex = 2;
                this.button3.Tag = "btn btn-light";
                this.button3.Text = "Delete";
                this.button3.UseVisualStyleBackColor = true;
                //
                // button2
                //
                this.button2.Location = new System.Drawing.Point.$ctor1(95, 12);
                this.button2.Name = "button2";
                this.button2.Size = new System.Drawing.Size.$ctor2(77, 67);
                this.button2.TabIndex = 1;
                this.button2.Tag = "btn btn-light";
                this.button2.Text = "New";
                this.button2.UseVisualStyleBackColor = true;
                //
                // button1
                //
                this.button1.Location = new System.Drawing.Point.$ctor1(12, 12);
                this.button1.Name = "button1";
                this.button1.Size = new System.Drawing.Size.$ctor2(77, 67);
                this.button1.TabIndex = 0;
                this.button1.Tag = "btn btn-primary";
                this.button1.Text = "Save";
                this.button1.UseVisualStyleBackColor = true;
                //
                // panel2
                //
                this.panel2.BackColor = System.Drawing.Color.DimGray.$clone();
                this.panel2.Controls.add(this.label1);
                this.panel2.Dock = System.Windows.Forms.DockStyle.Bottom;
                this.panel2.Location = new System.Drawing.Point.$ctor1(0, 421);
                this.panel2.Name = "panel2";
                this.panel2.Size = new System.Drawing.Size.$ctor2(800, 29);
                this.panel2.TabIndex = 1;
                //
                // label1
                //
                this.label1.Anchor = ((10));
                this.label1.AutoSize = true;
                this.label1.ForeColor = System.Drawing.Color.White.$clone();
                this.label1.Location = new System.Drawing.Point.$ctor1(747, 3);
                this.label1.Name = "label1";
                this.label1.Size = new System.Drawing.Size.$ctor2(41, 13);
                this.label1.TabIndex = 0;
                this.label1.Tag = "label label-info";
                this.label1.Text = "Ready.";
                //
                // tabControl1
                //
                this.tabControl1.Controls.add(this.tabPage1);
                this.tabControl1.Controls.add(this.tabPage2);
                this.tabControl1.Dock = System.Windows.Forms.DockStyle.Fill;
                this.tabControl1.Location = new System.Drawing.Point.$ctor1(0, 93);
                this.tabControl1.Name = "tabControl1";
                this.tabControl1.SelectedIndex = 0;
                this.tabControl1.Size = new System.Drawing.Size.$ctor2(800, 328);
                this.tabControl1.TabIndex = 2;
                this.tabControl1.Tag = "nav nav-tabs,nav-item nav-link ";
                //
                // tabPage1
                //
                this.tabPage1.Controls.add(this.comboBox1);
                this.tabPage1.Location = new System.Drawing.Point.$ctor1(4, 22);
                this.tabPage1.Name = "tabPage1";
                this.tabPage1.Padding = new System.Windows.Forms.Padding.$ctor1(3);
                this.tabPage1.Size = new System.Drawing.Size.$ctor2(792, 302);
                this.tabPage1.TabIndex = 0;
                this.tabPage1.Tag = "form-control";
                this.tabPage1.Text = "Data";
                this.tabPage1.UseVisualStyleBackColor = true;
                //
                // comboBox1
                //
                this.comboBox1.FormattingEnabled = true;
                this.comboBox1.ItemHeight = 13;
                this.comboBox1.Items.AddRange(System.Array.init(["", "Item 1", "Item 2", "Item 3"], System.Object));
                this.comboBox1.Location = new System.Drawing.Point.$ctor1(28, 21);
                this.comboBox1.Name = "comboBox1";
                this.comboBox1.Size = new System.Drawing.Size.$ctor2(223, 21);
                this.comboBox1.TabIndex = 0;
                this.comboBox1.Tag = "form-control";
                //
                // tabPage2
                //
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
                //
                // checkBox2
                //
                this.checkBox2.AutoSize = true;
                this.checkBox2.Location = new System.Drawing.Point.$ctor1(19, 50);
                this.checkBox2.Name = "checkBox2";
                this.checkBox2.Size = new System.Drawing.Size.$ctor2(107, 17);
                this.checkBox2.TabIndex = 2;
                this.checkBox2.Tag = "form-control";
                this.checkBox2.Text = "Enable Feature 2";
                this.checkBox2.UseVisualStyleBackColor = true;
                //
                // checkBox1
                //
                this.checkBox1.AutoSize = true;
                this.checkBox1.Location = new System.Drawing.Point.$ctor1(19, 16);
                this.checkBox1.Name = "checkBox1";
                this.checkBox1.Size = new System.Drawing.Size.$ctor2(107, 17);
                this.checkBox1.TabIndex = 1;
                this.checkBox1.Tag = "form-control";
                this.checkBox1.Text = "Enable Feature 1";
                this.checkBox1.UseVisualStyleBackColor = true;
                //
                // frmDockingTest
                //
                this.AutoScaleDimensions = new System.Drawing.SizeF.$ctor3(6.0, 13.0);
                this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
                this.ClientSize = new System.Drawing.Size.$ctor2(800, 450);
                this.Controls.add(this.tabControl1);
                this.Controls.add(this.panel2);
                this.Controls.add(this.panel1);
                this.Name = "frmDockingTest";
                this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
                this.Tag = "modal-content";
                this.Text = "frmDockingTest";
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
                //
                // button8
                //
                this.button8.Anchor = ((10));
                this.button8.DialogResult = System.Windows.Forms.DialogResult.Cancel;
                this.button8.Location = new System.Drawing.Point.$ctor1(277, 161);
                this.button8.Name = "button8";
                this.button8.Size = new System.Drawing.Size.$ctor2(140, 51);
                this.button8.TabIndex = 8;
                this.button8.Tag = "btn btn-light";
                this.button8.Text = "Cancel";
                this.button8.UseVisualStyleBackColor = true;
                //
                // button1
                //
                this.button1.Anchor = ((10));
                this.button1.DialogResult = System.Windows.Forms.DialogResult.OK;
                this.button1.Location = new System.Drawing.Point.$ctor1(131, 161);
                this.button1.Name = "button1";
                this.button1.Size = new System.Drawing.Size.$ctor2(140, 51);
                this.button1.TabIndex = 9;
                this.button1.Tag = "btn btn-primary";
                this.button1.Text = "Okay";
                this.button1.UseVisualStyleBackColor = true;
                //
                // button2
                //
                this.button2.Anchor = ((9));
                this.button2.Location = new System.Drawing.Point.$ctor1(333, 12);
                this.button2.Name = "button2";
                this.button2.Size = new System.Drawing.Size.$ctor2(84, 65);
                this.button2.TabIndex = 10;
                this.button2.Tag = "btn btn-danger";
                this.button2.Text = "Close";
                this.button2.UseVisualStyleBackColor = true;
                this.button2.addClick(Bridge.fn.cacheBind(this, this.button2_Click));
                //
                // frmModal
                //
                this.AutoScaleDimensions = new System.Drawing.SizeF.$ctor3(6.0, 13.0);
                this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
                this.ClientSize = new System.Drawing.Size.$ctor2(429, 224);
                this.Controls.add(this.button2);
                this.Controls.add(this.button1);
                this.Controls.add(this.button8);
                this.Name = "frmModal";
                this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
                this.Tag = "modal-content";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJUZXN0QnJpZGdlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyIuLi9UZXN0L2ZybUFuY2hvclRlc3QuY3MiLCIuLi9UZXN0L2ZybURvY2tpbmdUZXN0LmNzIiwiLi4vVGVzdC9mcm1Nb2RhbC5jcyIsIlByb2dyYW0uY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFzQllBOzs7OztnQkFLQUEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBOzs7O2dCQUlBQSxzQkFBc0JBO2dCQUN0QkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBOzs7O2dCQUk5Q0Esc0JBQXNCQTtnQkFDdEJBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSxzQkFBc0JBLEFBQXdCQTs7OztnQkFJOUNBLHNCQUFzQkEsQ0FBQ0EsQUFBbUNBLEFBQUNBLENBQUNBO2dCQUU1REEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Ozs7Z0JBSUFBLHNCQUFzQkEsQ0FBQ0EsQUFBbUNBLEFBQUNBLENBQUNBO2dCQUU1REEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Ozs7Z0JB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QUNBQTtnQkFDQUE7Ozs7Z0JBSUFBLHNCQUFzQkEsQ0FBQ0EsQUFBbUNBLEFBQUNBLENBQUNBO2dCQUM1REEsNEJBQTRCQTtnQkFDNUJBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBOzs7O2dCQUlBQSxzQkFBc0JBLENBQUNBLEFBQW1DQSxBQUFDQSxDQUFDQTtnQkFDNURBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSxzQkFBc0JBLEFBQXdCQTs7OztnQkFJOUNBLDJCQUEyQkEsSUFBSUE7Z0JBQy9CQSxxQkFBcUJBO2dCQUNyQkEsa0JBQWtCQSxJQUFJQTtnQkFDdEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBO2dCQUNBQSxxQkFBcUJBO2dCQUNyQkE7Z0JBQ0FBO2dCQUNBQTs7Ozs7Ozs7WUN0RUFBLFFBQVFBLElBQUlBO1lBQ1pBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRm9ybXM7XHJcblxyXG5uYW1lc3BhY2UgVGVzdFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgZnJtQW5jaG9yVGVzdCA6IEZvcm1cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b24yO1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjM7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uNTtcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b242O1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjc7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uODtcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b245O1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjE7XHJcblxyXG4gICAgICAgIHB1YmxpYyBmcm1BbmNob3JUZXN0KCkgOiBiYXNlKClcclxuICAgICAgICB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEluaXRpYWxpemVDb21wb25lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuU3VzcGVuZExheW91dCgpO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uMVxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLkFuY2hvciA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ob25lO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMjYxLCAxNzUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuTmFtZSA9IFwiYnV0dG9uMVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDE2MCwgNTUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVGFnID0gXCJidG4gYnRuLXByaW1hcnlcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLlRleHQgPSBcIk9wZW4gTm9ybWFsIE1vZGFsXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjFfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uMlxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLkFuY2hvciA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ob25lO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMjYxLCAxMTQpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuTmFtZSA9IFwiYnV0dG9uMlwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDE2MCwgNTUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVGFiSW5kZXggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVGFnID0gXCJidG4gYnRuLXByaW1hcnlcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLlRleHQgPSBcIk9wZW4gRGlhbG9nIE1vZGFsXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjJfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uM1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLkFuY2hvciA9ICgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzKSgoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ub3AgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuQm90dG9tKSBcclxuICAgICAgICAgICAgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuUmlnaHQpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCg2MDEsIDgzKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLk5hbWUgPSBcImJ1dHRvbjNcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg4NCwgMzE4KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlRhYkluZGV4ID0gMjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlRhZyA9IFwiYnRuIGJ0bi1pbmZvXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5UZXh0ID0gXCJBbmNob3IgVG9wLCBCb3R0b20sIFJpZ2h0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b241XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuQW5jaG9yID0gKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMpKCgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkJvdHRvbSB8IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5MZWZ0KSBcclxuICAgICAgICAgICAgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuUmlnaHQpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgxMDIsIDMzNik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5OYW1lID0gXCJidXR0b241XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNDkzLCA2NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5UYWJJbmRleCA9IDQ7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5UYWcgPSBcImJ0biBidG4taW5mb1wiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuVGV4dCA9IFwiQW5jaG9yIEJvdHRvbSwgTGVmdCwgUmlnaHRcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjZcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5BbmNob3IgPSAoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcykoKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuVG9wIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkJvdHRvbSkgXHJcbiAgICAgICAgICAgIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkxlZnQpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgxMiwgMTIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuTmFtZSA9IFwiYnV0dG9uNlwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDg0LCAzODkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuVGFiSW5kZXggPSA1O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuVGFnID0gXCJidG4gYnRuLWluZm9cIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LlRleHQgPSBcIkFuY2hvciBUb3AsIEJvdHRvbSwgTGVmdFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uN1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b243LkFuY2hvciA9ICgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzKSgoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ub3AgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuTGVmdCkgXHJcbiAgICAgICAgICAgIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlJpZ2h0KSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTAyLCAxMik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5OYW1lID0gXCJidXR0b243XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNDkzLCA2NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5UYWJJbmRleCA9IDY7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5UYWcgPSBcImJ0biBidG4taW5mb1wiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuVGV4dCA9IFwiQW5jaG9yIFRvcCwgTGVmdCwgUmlnaHRcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b243LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjhcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOC5BbmNob3IgPSAoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcykoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ub3AgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuUmlnaHQpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOC5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCg2MDEsIDEyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244Lk5hbWUgPSBcImJ1dHRvbjhcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244LlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg4NCwgNjUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguVGFiSW5kZXggPSA3O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguVGFnID0gXCJidG4gYnRuLWRhbmdlclwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguVGV4dCA9IFwiQ2xvc2VcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244LkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uOF9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b245XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkuQW5jaG9yID0gU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLk5vbmU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgyNjEsIDIzNik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5OYW1lID0gXCJidXR0b245XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMTYwLCA1NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5UYWJJbmRleCA9IDg7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkuVGV4dCA9IFwiT3BlbiBEb2NraW5nIFRlc3RcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b245LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b245LkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uOV9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBmcm1BbmNob3JUZXN0XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLkNsaWVudFNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg2OTcsIDQxMyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uOSk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uOCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNik7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNSk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMik7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMSk7XHJcbiAgICAgICAgICAgIHRoaXMuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoNTAsIDUwKTtcclxuICAgICAgICAgICAgdGhpcy5OYW1lID0gXCJmcm1BbmNob3JUZXN0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuU3RhcnRQb3NpdGlvbiA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkZvcm1TdGFydFBvc2l0aW9uLkNlbnRlclNjcmVlbjtcclxuICAgICAgICAgICAgdGhpcy5UYWcgPSBcIm1vZGFsLWNvbnRlbnRcIjtcclxuICAgICAgICAgICAgdGhpcy5XaW5kb3dTdGF0ZSA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkZvcm1XaW5kb3dTdGF0ZS5NYXhpbWl6ZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuTG9hZCArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmZybUFuY2hvclRlc3RfTG9hZCk7XHJcbiAgICAgICAgICAgIHRoaXMuTW91c2VEb3VibGVDbGljayArPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuTW91c2VFdmVudEhhbmRsZXIodGhpcy5mcm1BbmNob3JUZXN0X01vdXNlRG91YmxlQ2xpY2spO1xyXG4gICAgICAgICAgICB0aGlzLk1vdXNlRW50ZXIgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5mcm1BbmNob3JUZXN0X01vdXNlRW50ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLk1vdXNlTGVhdmUgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5mcm1BbmNob3JUZXN0X01vdXNlTGVhdmUpO1xyXG4gICAgICAgICAgICB0aGlzLlJlc2l6ZSArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmZybUN1c3RvbWVyX1Jlc2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lTGF5b3V0KGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgdGV4dEJveDFfVGV4dENoYW5nZWQob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCB0ZXh0Qm94Ml9UZXh0Q2hhbmdlZChvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIHRleHRCb3gzX1RleHRDaGFuZ2VkKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uMV9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gbmV3IGZybU1vZGFsKCk7XHJcbiAgICAgICAgICAgIHguU2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjJfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgeCA9IG5ldyBmcm1Nb2RhbCgpO1xyXG4gICAgICAgICAgICB4LlNob3dEaWFsb2coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBmcm1DdXN0b21lcl9SZXNpemUob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b244X0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5DbG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGZybUFuY2hvclRlc3RfTG9hZChvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGZybUFuY2hvclRlc3RfTW91c2VMZWF2ZShvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGZybUFuY2hvclRlc3RfTW91c2VFbnRlcihvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjlfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgeCA9IG5ldyBmcm1Eb2NraW5nVGVzdCgpO1xyXG4gICAgICAgICAgICB4LlNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBmcm1BbmNob3JUZXN0X01vdXNlRG91YmxlQ2xpY2sob2JqZWN0IHNlbmRlciwgTW91c2VFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uQ29tcG9uZW50TW9kZWw7XHJcbnVzaW5nIFN5c3RlbS5EYXRhO1xyXG51c2luZyBTeXN0ZW0uRHJhd2luZztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Gb3JtcztcclxuXHJcbm5hbWVzcGFjZSBUZXN0XHJcbntcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIGZybURvY2tpbmdUZXN0IDogRm9ybVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBmcm1Eb2NraW5nVGVzdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uNF9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuQ2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkNvbXBvbmVudE1vZGVsO1xyXG51c2luZyBTeXN0ZW0uRGF0YTtcclxudXNpbmcgU3lzdGVtLkRyYXdpbmc7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRm9ybXM7XHJcblxyXG5uYW1lc3BhY2UgVGVzdFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBmcm1Nb2RhbCA6IEZvcm1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgZnJtTW9kYWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjJfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgVGVzdDtcclxuXHJcbm5hbWVzcGFjZSBUZXN0QnJpZGdlXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBQcm9ncmFtXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIE1haW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHggPSBuZXcgZnJtQW5jaG9yVGVzdCgpO1xyXG4gICAgICAgICAgICB4LlNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0KfQo=
