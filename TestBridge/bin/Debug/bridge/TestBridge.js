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
                this.button3.Tag = "btn btn-light";
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
                this.button5.Tag = "btn btn-light";
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
                this.button6.Tag = "btn btn-light";
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
                this.button7.Tag = "btn btn-light";
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
                this.tabPage2 = new System.Windows.Forms.TabPage();
                this.checkBox1 = new System.Windows.Forms.CheckBox();
                this.checkBox2 = new System.Windows.Forms.CheckBox();
                this.comboBox1 = new System.Windows.Forms.ComboBox();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJUZXN0QnJpZGdlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyIuLi9UZXN0L2ZybUFuY2hvclRlc3QuY3MiLCIuLi9UZXN0L2ZybURvY2tpbmdUZXN0LmNzIiwiLi4vVGVzdC9mcm1Nb2RhbC5jcyIsIlByb2dyYW0uY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFzQllBOzs7OztnQkFLQUEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBOzs7O2dCQUlBQSxzQkFBc0JBO2dCQUN0QkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBOzs7O2dCQUk5Q0Esc0JBQXNCQTtnQkFDdEJBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSxzQkFBc0JBLEFBQXdCQTs7OztnQkFJOUNBLHNCQUFzQkEsQ0FBQ0EsQUFBbUNBLEFBQUNBLENBQUNBO2dCQUU1REEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Ozs7Z0JBSUFBLHNCQUFzQkEsQ0FBQ0EsQUFBbUNBLEFBQUNBLENBQUNBO2dCQUU1REEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Ozs7Z0JBSUFBLHNCQUFzQkEsQ0FBQ0EsQUFBbUNBLEFBQUNBLENBQUNBO2dCQUU1REEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Ozs7Z0JBSUFBLHNCQUFzQkEsQ0FBQ0EsQUFBbUNBLEFBQUNBLENBQUNBO2dCQUU1REEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Ozs7Z0JBSUFBLHNCQUFzQkEsQ0FBQ0EsQUFBbUNBLEFBQUNBLENBQUNBO2dCQUM1REEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBOzs7O2dCQUk5Q0Esc0JBQXNCQTtnQkFDdEJBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSxzQkFBc0JBLEFBQXdCQTs7OztnQkFJOUNBLGtCQUFrQkEsSUFBSUE7Z0JBQ3RCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQTtnQkFDQUEscUJBQXFCQTtnQkFDckJBO2dCQUNBQSxhQUFhQSxBQUF3QkE7Z0JBQ3JDQSxtQkFBbUJBLEFBQXdCQTtnQkFDM0NBLG1CQUFtQkEsQUFBd0JBO2dCQUMzQ0EsZUFBZUEsQUFBd0JBO2dCQUN2Q0E7Ozs0Q0FJOEJBLFFBQWVBOzs7NENBS2ZBLFFBQWVBOzs7NENBS2ZBLFFBQWVBOzs7cUNBS3RCQSxRQUFlQTtnQkFFdENBLFFBQVFBLElBQUlBO2dCQUNaQTs7cUNBR3VCQSxRQUFlQTtnQkFFdENBLFFBQVFBLElBQUlBO2dCQUNaQTs7MENBRzRCQSxRQUFlQTs7O3FDQUtwQkEsUUFBZUE7Z0JBRXRDQTs7MENBRzRCQSxRQUFlQTs7O2dEQUtUQSxRQUFlQTs7O2dEQUtmQSxRQUFlQTs7O3FDQUsxQkEsUUFBZUE7Z0JBRXRDQSxRQUFRQSxJQUFJQTtnQkFDWkE7Ozs7Ozs7Ozs7Ozs7Ozs7d0JDNU1rREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBU2xEQTs7OztxQ0FHdUJBLFFBQWVBO2dCQUV0Q0E7Ozs7Ozs7Ozs7Ozs7aUNBUjRCQTtnQkFFNUJBLElBQUlBLGFBQWFBLENBQUNBLG1CQUFjQTtvQkFFNUJBOztnQkFFSkEseURBQWFBOzs7Ozs7Ozs7Ozs7O2dCQVdiQSxjQUFjQSxJQUFJQTtnQkFDbEJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsY0FBY0EsSUFBSUE7Z0JBQ2xCQSxjQUFjQSxJQUFJQTtnQkFDbEJBLG1CQUFtQkEsSUFBSUE7Z0JBQ3ZCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBLGlCQUFpQkEsSUFBSUE7Z0JBQ3JCQSxpQkFBaUJBLElBQUlBO2dCQUNyQkEsaUJBQWlCQSxJQUFJQTtnQkFDckJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Ozs7Z0JBSUFBLHdCQUF3QkE7Z0JBQ3hCQSx5QkFBeUJBO2dCQUN6QkEseUJBQXlCQTtnQkFDekJBLHlCQUF5QkE7Z0JBQ3pCQSx5QkFBeUJBO2dCQUN6QkEsbUJBQW1CQTtnQkFDbkJBLHVCQUF1QkEsSUFBSUE7Z0JBQzNCQTtnQkFDQUEsbUJBQW1CQSxJQUFJQTtnQkFDdkJBOzs7O2dCQUlBQSxzQkFBc0JBLENBQUNBLEFBQW1DQSxBQUFDQSxDQUFDQTtnQkFDNURBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSxzQkFBc0JBLEFBQXdCQTs7OztnQkFJOUNBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBOzs7O2dCQUlBQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Ozs7Z0JBSUFBLHdCQUF3QkE7Z0JBQ3hCQSx5QkFBeUJBO2dCQUN6QkEsbUJBQW1CQTtnQkFDbkJBLHVCQUF1QkEsSUFBSUE7Z0JBQzNCQTtnQkFDQUEsbUJBQW1CQSxJQUFJQTtnQkFDdkJBOzs7O2dCQUlBQSxxQkFBcUJBLENBQUNBLEFBQW1DQSxBQUFDQSxDQUFDQTtnQkFDM0RBO2dCQUNBQSx3QkFBd0JBO2dCQUN4QkEsdUJBQXVCQSxJQUFJQTtnQkFDM0JBO2dCQUNBQSxtQkFBbUJBLElBQUlBO2dCQUN2QkE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUEsOEJBQThCQTtnQkFDOUJBLDhCQUE4QkE7Z0JBQzlCQSx3QkFBd0JBO2dCQUN4QkEsNEJBQTRCQSxJQUFJQTtnQkFDaENBO2dCQUNBQTtnQkFDQUEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQTs7OztnQkFJQUEsMkJBQTJCQTtnQkFDM0JBLHlCQUF5QkEsSUFBSUE7Z0JBQzdCQTtnQkFDQUEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBLHFCQUFxQkEsSUFBSUE7Z0JBQ3pCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUEsMkJBQTJCQTtnQkFDM0JBLDJCQUEyQkE7Z0JBQzNCQSx5QkFBeUJBLElBQUlBO2dCQUM3QkE7Z0JBQ0FBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQSxxQkFBcUJBLElBQUlBO2dCQUN6QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Ozs7Z0JBSUFBO2dCQUNBQSwwQkFBMEJBLElBQUlBO2dCQUM5QkE7Z0JBQ0FBLHNCQUFzQkEsSUFBSUE7Z0JBQzFCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUE7Z0JBQ0FBLDBCQUEwQkEsSUFBSUE7Z0JBQzlCQTtnQkFDQUEsc0JBQXNCQSxJQUFJQTtnQkFDMUJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBOzs7O2dCQUlBQTtnQkFDQUE7Z0JBQ0FBLDhCQUE4QkE7Z0JBSzlCQSwwQkFBMEJBLElBQUlBO2dCQUM5QkE7Z0JBQ0FBLHNCQUFzQkEsSUFBSUE7Z0JBQzFCQTtnQkFDQUE7Ozs7Z0JBSUFBLDJCQUEyQkEsSUFBSUE7Z0JBQy9CQSxxQkFBcUJBO2dCQUNyQkEsa0JBQWtCQSxJQUFJQTtnQkFDdEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBO2dCQUNBQSxxQkFBcUJBO2dCQUNyQkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQ3JOa0RBOzs7Ozs7Ozs7Z0JBU2xEQTs7OztxQ0FHdUJBLFFBQWVBO2dCQUV0Q0E7Ozs7Ozs7Ozs7Ozs7aUNBUjRCQTtnQkFFNUJBLElBQUlBLGFBQWFBLENBQUNBLG1CQUFjQTtvQkFFNUJBOztnQkFFSkEseURBQWFBOzs7Ozs7Ozs7Ozs7O2dCQVdiQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQTs7OztnQkFJQUEsc0JBQXNCQSxDQUFDQSxBQUFtQ0EsQUFBQ0EsQ0FBQ0E7Z0JBQzVEQSw0QkFBNEJBO2dCQUM1QkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Ozs7Z0JBSUFBLHNCQUFzQkEsQ0FBQ0EsQUFBbUNBLEFBQUNBLENBQUNBO2dCQUM1REEsNEJBQTRCQTtnQkFDNUJBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBOzs7O2dCQUlBQSxzQkFBc0JBLENBQUNBLEFBQW1DQSxBQUFDQSxDQUFDQTtnQkFDNURBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSxzQkFBc0JBLEFBQXdCQTs7OztnQkFJOUNBLDJCQUEyQkEsSUFBSUE7Z0JBQy9CQSxxQkFBcUJBO2dCQUNyQkEsa0JBQWtCQSxJQUFJQTtnQkFDdEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBO2dCQUNBQSxxQkFBcUJBO2dCQUNyQkE7Z0JBQ0FBO2dCQUNBQTs7Ozs7Ozs7WUN0RUFBLFFBQVFBLElBQUlBO1lBQ1pBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRm9ybXM7XHJcblxyXG5uYW1lc3BhY2UgVGVzdFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgZnJtQW5jaG9yVGVzdCA6IEZvcm1cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b24yO1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjM7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uNTtcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b242O1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjc7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uODtcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b245O1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjE7XHJcblxyXG4gICAgICAgIHB1YmxpYyBmcm1BbmNob3JUZXN0KCkgOiBiYXNlKClcclxuICAgICAgICB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEluaXRpYWxpemVDb21wb25lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuU3VzcGVuZExheW91dCgpO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uMVxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLkFuY2hvciA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ob25lO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMjYxLCAxNzUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuTmFtZSA9IFwiYnV0dG9uMVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDE2MCwgNTUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVGFnID0gXCJidG4gYnRuLXByaW1hcnlcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLlRleHQgPSBcIk9wZW4gTm9ybWFsIE1vZGFsXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjFfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uMlxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLkFuY2hvciA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ob25lO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMjYxLCAxMTQpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuTmFtZSA9IFwiYnV0dG9uMlwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDE2MCwgNTUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVGFiSW5kZXggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVGFnID0gXCJidG4gYnRuLXByaW1hcnlcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLlRleHQgPSBcIk9wZW4gRGlhbG9nIE1vZGFsXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjJfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uM1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLkFuY2hvciA9ICgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzKSgoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ub3AgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuQm90dG9tKSBcclxuICAgICAgICAgICAgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuUmlnaHQpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCg2MDEsIDgzKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLk5hbWUgPSBcImJ1dHRvbjNcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg4NCwgMzE4KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlRhYkluZGV4ID0gMjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlRhZyA9IFwiYnRuIGJ0bi1saWdodFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuVGV4dCA9IFwiQW5jaG9yIFRvcCwgQm90dG9tLCBSaWdodFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uNVxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b241LkFuY2hvciA9ICgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzKSgoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Cb3R0b20gfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuTGVmdCkgXHJcbiAgICAgICAgICAgIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlJpZ2h0KSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTAyLCAzMzYpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuTmFtZSA9IFwiYnV0dG9uNVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDQ5MywgNjUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuVGFiSW5kZXggPSA0O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuVGFnID0gXCJidG4gYnRuLWxpZ2h0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5UZXh0ID0gXCJBbmNob3IgQm90dG9tLCBMZWZ0LCBSaWdodFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uNlxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LkFuY2hvciA9ICgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzKSgoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ub3AgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuQm90dG9tKSBcclxuICAgICAgICAgICAgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuTGVmdCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDEyLCAxMik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5OYW1lID0gXCJidXR0b242XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoODQsIDM4OSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5UYWJJbmRleCA9IDU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5UYWcgPSBcImJ0biBidG4tbGlnaHRcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LlRleHQgPSBcIkFuY2hvciBUb3AsIEJvdHRvbSwgTGVmdFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uN1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b243LkFuY2hvciA9ICgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzKSgoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ub3AgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuTGVmdCkgXHJcbiAgICAgICAgICAgIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlJpZ2h0KSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTAyLCAxMik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5OYW1lID0gXCJidXR0b243XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNDkzLCA2NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5UYWJJbmRleCA9IDY7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5UYWcgPSBcImJ0biBidG4tbGlnaHRcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b243LlRleHQgPSBcIkFuY2hvciBUb3AsIExlZnQsIFJpZ2h0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b244XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguQW5jaG9yID0gKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMpKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuVG9wIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlJpZ2h0KSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoNjAxLCAxMik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOC5OYW1lID0gXCJidXR0b244XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOC5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoODQsIDY1KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244LlRhYkluZGV4ID0gNztcclxuICAgICAgICAgICAgdGhpcy5idXR0b244LlRhZyA9IFwiYnRuIGJ0bi1kYW5nZXJcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244LlRleHQgPSBcIkNsb3NlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOC5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOC5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjhfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uOVxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b245LkFuY2hvciA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ob25lO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMjYxLCAyMzYpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkuTmFtZSA9IFwiYnV0dG9uOVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDE2MCwgNTUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkuVGFiSW5kZXggPSA4O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjkuVGFnID0gXCJidG4gYnRuLXByaW1hcnlcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b245LlRleHQgPSBcIk9wZW4gRG9ja2luZyBUZXN0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOS5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjlfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gZnJtQW5jaG9yVGVzdFxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5DbGllbnRTaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNjk3LCA0MTMpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjkpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjcpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjYpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjUpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjMpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjIpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjEpO1xyXG4gICAgICAgICAgICB0aGlzLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDUwLCA1MCk7XHJcbiAgICAgICAgICAgIHRoaXMuTmFtZSA9IFwiZnJtQW5jaG9yVGVzdFwiO1xyXG4gICAgICAgICAgICB0aGlzLlN0YXJ0UG9zaXRpb24gPSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5Gb3JtU3RhcnRQb3NpdGlvbi5DZW50ZXJTY3JlZW47XHJcbiAgICAgICAgICAgIHRoaXMuVGFnID0gXCJtb2RhbC1jb250ZW50XCI7XHJcbiAgICAgICAgICAgIHRoaXMuTG9hZCArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmZybUFuY2hvclRlc3RfTG9hZCk7XHJcbiAgICAgICAgICAgIHRoaXMuTW91c2VFbnRlciArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmZybUFuY2hvclRlc3RfTW91c2VFbnRlcik7XHJcbiAgICAgICAgICAgIHRoaXMuTW91c2VMZWF2ZSArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmZybUFuY2hvclRlc3RfTW91c2VMZWF2ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVzaXplICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuZnJtQ3VzdG9tZXJfUmVzaXplKTtcclxuICAgICAgICAgICAgdGhpcy5SZXN1bWVMYXlvdXQoZmFsc2UpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCB0ZXh0Qm94MV9UZXh0Q2hhbmdlZChvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIHRleHRCb3gyX1RleHRDaGFuZ2VkKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgdGV4dEJveDNfVGV4dENoYW5nZWQob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b24xX0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHggPSBuZXcgZnJtTW9kYWwoKTtcclxuICAgICAgICAgICAgeC5TaG93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uMl9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gbmV3IGZybU1vZGFsKCk7XHJcbiAgICAgICAgICAgIHguU2hvd0RpYWxvZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGZybUN1c3RvbWVyX1Jlc2l6ZShvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjhfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgZnJtQW5jaG9yVGVzdF9Mb2FkKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgZnJtQW5jaG9yVGVzdF9Nb3VzZUxlYXZlKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgZnJtQW5jaG9yVGVzdF9Nb3VzZUVudGVyKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uOV9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gbmV3IGZybURvY2tpbmdUZXN0KCk7XHJcbiAgICAgICAgICAgIHguU2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uQ29tcG9uZW50TW9kZWw7XHJcbnVzaW5nIFN5c3RlbS5EYXRhO1xyXG51c2luZyBTeXN0ZW0uRHJhd2luZztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Gb3JtcztcclxuXHJcbm5hbWVzcGFjZSBUZXN0XHJcbntcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIGZybURvY2tpbmdUZXN0IDogRm9ybVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBmcm1Eb2NraW5nVGVzdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uNF9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuQ2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkNvbXBvbmVudE1vZGVsO1xyXG51c2luZyBTeXN0ZW0uRGF0YTtcclxudXNpbmcgU3lzdGVtLkRyYXdpbmc7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRm9ybXM7XHJcblxyXG5uYW1lc3BhY2UgVGVzdFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBmcm1Nb2RhbCA6IEZvcm1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgZnJtTW9kYWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjJfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgVGVzdDtcclxuXHJcbm5hbWVzcGFjZSBUZXN0QnJpZGdlXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBQcm9ncmFtXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIE1haW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHggPSBuZXcgZnJtQW5jaG9yVGVzdCgpO1xyXG4gICAgICAgICAgICB4LlNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0KfQo=
