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
            button4: null,
            button5: null,
            button6: null,
            button7: null,
            button8: null,
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
                this.button4 = new System.Windows.Forms.Button();
                this.button5 = new System.Windows.Forms.Button();
                this.button6 = new System.Windows.Forms.Button();
                this.button7 = new System.Windows.Forms.Button();
                this.button8 = new System.Windows.Forms.Button();
                this.SuspendLayout();
                //
                // button1
                //
                this.button1.Anchor = System.Windows.Forms.AnchorStyles.None;
                this.button1.Location = new System.Drawing.Point.$ctor1(267, 237);
                this.button1.Name = "button1";
                this.button1.Size = new System.Drawing.Size.$ctor2(160, 55);
                this.button1.TabIndex = 0;
                this.button1.Tag = "btn btn-primary";
                this.button1.Text = "Show Me in a Form";
                this.button1.UseVisualStyleBackColor = true;
                this.button1.addClick(Bridge.fn.cacheBind(this, this.button1_Click));
                //
                // button2
                //
                this.button2.Anchor = System.Windows.Forms.AnchorStyles.None;
                this.button2.Location = new System.Drawing.Point.$ctor1(267, 176);
                this.button2.Name = "button2";
                this.button2.Size = new System.Drawing.Size.$ctor2(160, 55);
                this.button2.TabIndex = 1;
                this.button2.Tag = "btn btn-primary";
                this.button2.Text = "Show Me in a Dialog";
                this.button2.UseVisualStyleBackColor = true;
                this.button2.addClick(Bridge.fn.cacheBind(this, this.button2_Click));
                //
                // button3
                //
                this.button3.Anchor = ((11));
                this.button3.Location = new System.Drawing.Point.$ctor1(601, 12);
                this.button3.Name = "button3";
                this.button3.Size = new System.Drawing.Size.$ctor2(84, 389);
                this.button3.TabIndex = 2;
                this.button3.Tag = "btn btn-primary";
                this.button3.Text = "Anchor Top, Bottom, Right";
                this.button3.UseVisualStyleBackColor = true;
                //
                // button4
                //
                this.button4.Anchor = System.Windows.Forms.AnchorStyles.None;
                this.button4.Location = new System.Drawing.Point.$ctor1(267, 115);
                this.button4.Name = "button4";
                this.button4.Size = new System.Drawing.Size.$ctor2(160, 55);
                this.button4.TabIndex = 3;
                this.button4.Tag = "btn btn-primary";
                this.button4.Text = "Click Me to Increase Width";
                this.button4.UseVisualStyleBackColor = true;
                this.button4.addClick(Bridge.fn.cacheBind(this, this.button4_Click));
                //
                // button5
                //
                this.button5.Anchor = ((14));
                this.button5.Location = new System.Drawing.Point.$ctor1(102, 336);
                this.button5.Name = "button5";
                this.button5.Size = new System.Drawing.Size.$ctor2(493, 65);
                this.button5.TabIndex = 4;
                this.button5.Tag = "btn btn-primary";
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
                this.button6.Tag = "btn btn-primary";
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
                this.button7.Tag = "btn btn-primary";
                this.button7.Text = "Anchor Top, Left, Right";
                this.button7.UseVisualStyleBackColor = true;
                //
                // button8
                //
                this.button8.Location = new System.Drawing.Point.$ctor1(102, 83);
                this.button8.Name = "button8";
                this.button8.Size = new System.Drawing.Size.$ctor2(75, 44);
                this.button8.TabIndex = 7;
                this.button8.Tag = "btn btn-danger";
                this.button8.Text = "Close";
                this.button8.UseVisualStyleBackColor = true;
                this.button8.addClick(Bridge.fn.cacheBind(this, this.button8_Click));
                //
                // frmAnchorTest
                //
                this.ClientSize = new System.Drawing.Size.$ctor2(697, 413);
                this.Controls.add(this.button8);
                this.Controls.add(this.button7);
                this.Controls.add(this.button6);
                this.Controls.add(this.button5);
                this.Controls.add(this.button4);
                this.Controls.add(this.button3);
                this.Controls.add(this.button2);
                this.Controls.add(this.button1);
                this.Location = new System.Drawing.Point.$ctor1(50, 50);
                this.Name = "frmAnchorTest";
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
                var x = new Test.frmAnchorTest();
                x.Show();
            },
            button2_Click: function (sender, e) {
                var x = new Test.frmAnchorTest();
                x.ShowDialog();
            },
            frmCustomer_Resize: function (sender, e) {

            },
            button4_Click: function (sender, e) {
                this.Width = (this.Width + 1) | 0;
            },
            button8_Click: function (sender, e) {
                this.Close();
            },
            frmAnchorTest_Load: function (sender, e) {

            },
            frmAnchorTest_MouseLeave: function (sender, e) {

            },
            frmAnchorTest_MouseEnter: function (sender, e) {

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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJUZXN0QnJpZGdlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyIuLi9UZXN0L2ZybUFuY2hvclRlc3QuY3MiLCJQcm9ncmFtLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBc0JZQTs7Ozs7Z0JBS0FBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQTs7OztnQkFJQUEsc0JBQXNCQTtnQkFDdEJBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSxzQkFBc0JBLEFBQXdCQTs7OztnQkFJOUNBLHNCQUFzQkE7Z0JBQ3RCQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Ozs7Z0JBSTlDQSxzQkFBc0JBLENBQUNBLEFBQW1DQSxBQUFDQSxDQUFDQTtnQkFFNURBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBOzs7O2dCQUlBQSxzQkFBc0JBO2dCQUN0QkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBOzs7O2dCQUk5Q0Esc0JBQXNCQSxDQUFDQSxBQUFtQ0EsQUFBQ0EsQ0FBQ0E7Z0JBRTVEQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUEsc0JBQXNCQSxDQUFDQSxBQUFtQ0EsQUFBQ0EsQ0FBQ0E7Z0JBRTVEQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUEsc0JBQXNCQSxDQUFDQSxBQUFtQ0EsQUFBQ0EsQ0FBQ0E7Z0JBRTVEQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBOzs7O2dCQUk5Q0Esa0JBQWtCQSxJQUFJQTtnQkFDdEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsZ0JBQWdCQSxJQUFJQTtnQkFDcEJBO2dCQUNBQTtnQkFDQUEsYUFBYUEsQUFBd0JBO2dCQUNyQ0EsbUJBQW1CQSxBQUF3QkE7Z0JBQzNDQSxtQkFBbUJBLEFBQXdCQTtnQkFDM0NBLGVBQWVBLEFBQXdCQTtnQkFDdkNBOzs7NENBSThCQSxRQUFlQTs7OzRDQUtmQSxRQUFlQTs7OzRDQUtmQSxRQUFlQTs7O3FDQUt0QkEsUUFBZUE7Z0JBRXRDQSxRQUFRQSxJQUFJQTtnQkFDWkE7O3FDQUd1QkEsUUFBZUE7Z0JBRXRDQSxRQUFRQSxJQUFJQTtnQkFDWkE7OzBDQUc0QkEsUUFBZUE7OztxQ0FLcEJBLFFBQWVBO2dCQUV0Q0E7O3FDQUd1QkEsUUFBZUE7Z0JBRXRDQTs7MENBRzRCQSxRQUFlQTs7O2dEQUtUQSxRQUFlQTs7O2dEQUtmQSxRQUFlQTs7Ozs7Ozs7WUNqTWpEQSxRQUFRQSxJQUFJQTtZQUNaQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkZvcm1zO1xyXG5cclxubmFtZXNwYWNlIFRlc3Rcclxue1xyXG4gICAgcHVibGljIGNsYXNzIGZybUFuY2hvclRlc3QgOiBGb3JtXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uMjtcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b24zO1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjQ7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uNTtcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b242O1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjc7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uODtcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b24xO1xyXG5cclxuICAgICAgICBwdWJsaWMgZnJtQW5jaG9yVGVzdCgpIDogYmFzZSgpXHJcbiAgICAgICAgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBJbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBJbml0aWFsaXplQ29tcG9uZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMSA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNCA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLlN1c3BlbmRMYXlvdXQoKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjFcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5BbmNob3IgPSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuTm9uZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDI2NywgMjM3KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLk5hbWUgPSBcImJ1dHRvbjFcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSgxNjAsIDU1KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLlRhYkluZGV4ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLlRhZyA9IFwiYnRuIGJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5UZXh0ID0gXCJTaG93IE1lIGluIGEgRm9ybVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b24xX0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjJcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5BbmNob3IgPSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuTm9uZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDI2NywgMTc2KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLk5hbWUgPSBcImJ1dHRvbjJcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSgxNjAsIDU1KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLlRhYkluZGV4ID0gMTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLlRhZyA9IFwiYnRuIGJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5UZXh0ID0gXCJTaG93IE1lIGluIGEgRGlhbG9nXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjJfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uM1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLkFuY2hvciA9ICgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzKSgoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ub3AgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuQm90dG9tKSBcclxuICAgICAgICAgICAgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuUmlnaHQpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCg2MDEsIDEyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLk5hbWUgPSBcImJ1dHRvbjNcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg4NCwgMzg5KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlRhYkluZGV4ID0gMjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlRhZyA9IFwiYnRuIGJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5UZXh0ID0gXCJBbmNob3IgVG9wLCBCb3R0b20sIFJpZ2h0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b240XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuQW5jaG9yID0gU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLk5vbmU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgyNjcsIDExNSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5OYW1lID0gXCJidXR0b240XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMTYwLCA1NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5UYWJJbmRleCA9IDM7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuVGV4dCA9IFwiQ2xpY2sgTWUgdG8gSW5jcmVhc2UgV2lkdGhcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uNF9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b241XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuQW5jaG9yID0gKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMpKCgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkJvdHRvbSB8IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5MZWZ0KSBcclxuICAgICAgICAgICAgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuUmlnaHQpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgxMDIsIDMzNik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5OYW1lID0gXCJidXR0b241XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNDkzLCA2NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5UYWJJbmRleCA9IDQ7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuVGV4dCA9IFwiQW5jaG9yIEJvdHRvbSwgTGVmdCwgUmlnaHRcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjZcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5BbmNob3IgPSAoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcykoKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuVG9wIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkJvdHRvbSkgXHJcbiAgICAgICAgICAgIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkxlZnQpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgxMiwgMTIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuTmFtZSA9IFwiYnV0dG9uNlwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDg0LCAzODkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuVGFiSW5kZXggPSA1O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuVGFnID0gXCJidG4gYnRuLXByaW1hcnlcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LlRleHQgPSBcIkFuY2hvciBUb3AsIEJvdHRvbSwgTGVmdFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uN1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b243LkFuY2hvciA9ICgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzKSgoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ub3AgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuTGVmdCkgXHJcbiAgICAgICAgICAgIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlJpZ2h0KSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTAyLCAxMik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5OYW1lID0gXCJidXR0b243XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNDkzLCA2NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5UYWJJbmRleCA9IDY7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuVGV4dCA9IFwiQW5jaG9yIFRvcCwgTGVmdCwgUmlnaHRcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b243LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjhcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uOC5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgxMDIsIDgzKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244Lk5hbWUgPSBcImJ1dHRvbjhcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244LlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg3NSwgNDQpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguVGFiSW5kZXggPSA3O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguVGFnID0gXCJidG4gYnRuLWRhbmdlclwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjguVGV4dCA9IFwiQ2xvc2VcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b244LkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uOF9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBmcm1BbmNob3JUZXN0XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLkNsaWVudFNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg2OTcsIDQxMyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uOCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNik7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNSk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMik7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMSk7XHJcbiAgICAgICAgICAgIHRoaXMuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoNTAsIDUwKTtcclxuICAgICAgICAgICAgdGhpcy5OYW1lID0gXCJmcm1BbmNob3JUZXN0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuVGFnID0gXCJtb2RhbC1jb250ZW50XCI7XHJcbiAgICAgICAgICAgIHRoaXMuTG9hZCArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmZybUFuY2hvclRlc3RfTG9hZCk7XHJcbiAgICAgICAgICAgIHRoaXMuTW91c2VFbnRlciArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmZybUFuY2hvclRlc3RfTW91c2VFbnRlcik7XHJcbiAgICAgICAgICAgIHRoaXMuTW91c2VMZWF2ZSArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmZybUFuY2hvclRlc3RfTW91c2VMZWF2ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVzaXplICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuZnJtQ3VzdG9tZXJfUmVzaXplKTtcclxuICAgICAgICAgICAgdGhpcy5SZXN1bWVMYXlvdXQoZmFsc2UpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCB0ZXh0Qm94MV9UZXh0Q2hhbmdlZChvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIHRleHRCb3gyX1RleHRDaGFuZ2VkKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgdGV4dEJveDNfVGV4dENoYW5nZWQob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b24xX0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHggPSBuZXcgZnJtQW5jaG9yVGVzdCgpO1xyXG4gICAgICAgICAgICB4LlNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b24yX0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHggPSBuZXcgZnJtQW5jaG9yVGVzdCgpO1xyXG4gICAgICAgICAgICB4LlNob3dEaWFsb2coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBmcm1DdXN0b21lcl9SZXNpemUob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b240X0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5XaWR0aCArPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjhfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgZnJtQW5jaG9yVGVzdF9Mb2FkKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgZnJtQW5jaG9yVGVzdF9Nb3VzZUxlYXZlKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgZnJtQW5jaG9yVGVzdF9Nb3VzZUVudGVyKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgVGVzdDtcclxuXHJcbm5hbWVzcGFjZSBUZXN0QnJpZGdlXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBQcm9ncmFtXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIE1haW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHggPSBuZXcgZnJtQW5jaG9yVGVzdCgpO1xyXG4gICAgICAgICAgICB4LlNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0KfQo=
