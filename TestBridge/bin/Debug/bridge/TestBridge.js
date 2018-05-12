/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 17.0.0
 */
Bridge.assembly("TestBridge", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.frmCustomer", {
        inherits: [System.Windows.Forms.Form],
        fields: {
            button2: null,
            button3: null,
            button4: null,
            button5: null,
            button6: null,
            button7: null,
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
                // frmCustomer
                //
                this.ClientSize = new System.Drawing.Size.$ctor2(697, 413);
                this.Controls.add(this.button7);
                this.Controls.add(this.button6);
                this.Controls.add(this.button5);
                this.Controls.add(this.button4);
                this.Controls.add(this.button3);
                this.Controls.add(this.button2);
                this.Controls.add(this.button1);
                this.Location = new System.Drawing.Point.$ctor1(50, 50);
                this.Name = "frmCustomer";
                this.Tag = "modal-content";
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
                var x = new Test.frmCustomer();
                x.Show();
            },
            button2_Click: function (sender, e) {
                var x = new Test.frmCustomer();
                x.ShowDialog();
            },
            frmCustomer_Resize: function (sender, e) {

            },
            button4_Click: function (sender, e) {
                this.Width = (this.Width + 1) | 0;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJUZXN0QnJpZGdlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyIuLi9UZXN0L2ZybUN1c3RvbWVyLmNzIiwiQ2xhc3MxLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFxQllBOzs7OztnQkFLQUEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQTs7OztnQkFJQUEsc0JBQXNCQTtnQkFDdEJBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSxzQkFBc0JBLEFBQXdCQTs7OztnQkFJOUNBLHNCQUFzQkE7Z0JBQ3RCQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Ozs7Z0JBSTlDQSxzQkFBc0JBLENBQUNBLEFBQW1DQSxBQUFDQSxDQUFDQTtnQkFFNURBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBOzs7O2dCQUlBQSxzQkFBc0JBO2dCQUN0QkEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBOzs7O2dCQUk5Q0Esc0JBQXNCQSxDQUFDQSxBQUFtQ0EsQUFBQ0EsQ0FBQ0E7Z0JBRTVEQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUEsc0JBQXNCQSxDQUFDQSxBQUFtQ0EsQUFBQ0EsQ0FBQ0E7Z0JBRTVEQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUEsc0JBQXNCQSxDQUFDQSxBQUFtQ0EsQUFBQ0EsQ0FBQ0E7Z0JBRTVEQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTs7OztnQkFJQUEsa0JBQWtCQSxJQUFJQTtnQkFDdEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxnQkFBZ0JBLElBQUlBO2dCQUNwQkE7Z0JBQ0FBO2dCQUNBQSxlQUFlQSxBQUF3QkE7Z0JBQ3ZDQTs7OzRDQUk4QkEsUUFBZUE7Ozs0Q0FLZkEsUUFBZUE7Ozs0Q0FLZkEsUUFBZUE7OztxQ0FLdEJBLFFBQWVBO2dCQUV0Q0EsUUFBUUEsSUFBSUE7Z0JBQ1pBOztxQ0FHdUJBLFFBQWVBO2dCQUV0Q0EsUUFBUUEsSUFBSUE7Z0JBQ1pBOzswQ0FHNEJBLFFBQWVBOzs7cUNBS3BCQSxRQUFlQTtnQkFFdENBOzs7Ozs7O1lDOUpBQSxRQUFRQSxJQUFJQTtZQUNaQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkZvcm1zO1xyXG5cclxubmFtZXNwYWNlIFRlc3Rcclxue1xyXG4gICAgcHVibGljIGNsYXNzIGZybUN1c3RvbWVyIDogRm9ybVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjI7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uMztcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b240O1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjU7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uNjtcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b243O1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjE7XHJcblxyXG4gICAgICAgIHB1YmxpYyBmcm1DdXN0b21lcigpIDogYmFzZSgpXHJcbiAgICAgICAgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBJbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBJbml0aWFsaXplQ29tcG9uZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMSA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNCA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5TdXNwZW5kTGF5b3V0KCk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24xXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuQW5jaG9yID0gU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLk5vbmU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgyNjcsIDIzNyk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5OYW1lID0gXCJidXR0b24xXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMTYwLCA1NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5UYWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVGV4dCA9IFwiU2hvdyBNZSBpbiBhIEZvcm1cIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uMV9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24yXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuQW5jaG9yID0gU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLk5vbmU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgyNjcsIDE3Nik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5OYW1lID0gXCJidXR0b24yXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMTYwLCA1NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5UYWJJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVGV4dCA9IFwiU2hvdyBNZSBpbiBhIERpYWxvZ1wiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b24yX0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjNcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5BbmNob3IgPSAoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcykoKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuVG9wIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkJvdHRvbSkgXHJcbiAgICAgICAgICAgIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlJpZ2h0KSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoNjAxLCAxMik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5OYW1lID0gXCJidXR0b24zXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoODQsIDM4OSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5UYWJJbmRleCA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuVGV4dCA9IFwiQW5jaG9yIFRvcCwgQm90dG9tLCBSaWdodFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uNFxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LkFuY2hvciA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ob25lO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMjY3LCAxMTUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuTmFtZSA9IFwiYnV0dG9uNFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDE2MCwgNTUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuVGFiSW5kZXggPSAzO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuVGFnID0gXCJidG4gYnRuLXByaW1hcnlcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LlRleHQgPSBcIkNsaWNrIE1lIHRvIEluY3JlYXNlIFdpZHRoXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjRfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uNVxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b241LkFuY2hvciA9ICgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzKSgoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Cb3R0b20gfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuTGVmdCkgXHJcbiAgICAgICAgICAgIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlJpZ2h0KSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTAyLCAzMzYpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuTmFtZSA9IFwiYnV0dG9uNVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDQ5MywgNjUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuVGFiSW5kZXggPSA0O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjUuVGFnID0gXCJidG4gYnRuLXByaW1hcnlcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b241LlRleHQgPSBcIkFuY2hvciBCb3R0b20sIExlZnQsIFJpZ2h0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNS5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b242XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuQW5jaG9yID0gKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMpKCgoU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlRvcCB8IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Cb3R0b20pIFxyXG4gICAgICAgICAgICB8IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5MZWZ0KSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjYuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTIsIDEyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242Lk5hbWUgPSBcImJ1dHRvbjZcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg4NCwgMzg5KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LlRhYkluZGV4ID0gNTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LlRhZyA9IFwiYnRuIGJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNi5UZXh0ID0gXCJBbmNob3IgVG9wLCBCb3R0b20sIExlZnRcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b242LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjdcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5BbmNob3IgPSAoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcykoKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuVG9wIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkxlZnQpIFxyXG4gICAgICAgICAgICB8IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5SaWdodCkpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b243LkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDEwMiwgMTIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuTmFtZSA9IFwiYnV0dG9uN1wiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDQ5MywgNjUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuVGFiSW5kZXggPSA2O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjcuVGFnID0gXCJidG4gYnRuLXByaW1hcnlcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b243LlRleHQgPSBcIkFuY2hvciBUb3AsIExlZnQsIFJpZ2h0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNy5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBmcm1DdXN0b21lclxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5DbGllbnRTaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNjk3LCA0MTMpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjcpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjYpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjUpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjQpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjMpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjIpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjEpO1xyXG4gICAgICAgICAgICB0aGlzLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDUwLCA1MCk7XHJcbiAgICAgICAgICAgIHRoaXMuTmFtZSA9IFwiZnJtQ3VzdG9tZXJcIjtcclxuICAgICAgICAgICAgdGhpcy5UYWcgPSBcIm1vZGFsLWNvbnRlbnRcIjtcclxuICAgICAgICAgICAgdGhpcy5SZXNpemUgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5mcm1DdXN0b21lcl9SZXNpemUpO1xyXG4gICAgICAgICAgICB0aGlzLlJlc3VtZUxheW91dChmYWxzZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIHRleHRCb3gxX1RleHRDaGFuZ2VkKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgdGV4dEJveDJfVGV4dENoYW5nZWQob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCB0ZXh0Qm94M19UZXh0Q2hhbmdlZChvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjFfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgeCA9IG5ldyBmcm1DdXN0b21lcigpO1xyXG4gICAgICAgICAgICB4LlNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b24yX0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHggPSBuZXcgZnJtQ3VzdG9tZXIoKTtcclxuICAgICAgICAgICAgeC5TaG93RGlhbG9nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgZnJtQ3VzdG9tZXJfUmVzaXplKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uNF9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuV2lkdGggKz0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBUZXN0O1xyXG5cclxubmFtZXNwYWNlIFRlc3RCcmlkZ2Vcclxue1xyXG4gICAgcHVibGljIGNsYXNzIENsYXNzMVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBNYWluKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gbmV3IGZybUN1c3RvbWVyKCk7XHJcbiAgICAgICAgICAgIHguU2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXQp9Cg==
