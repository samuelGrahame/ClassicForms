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
                this.SuspendLayout();
                //
                // button1
                //
                this.button1.Anchor = System.Windows.Forms.AnchorStyles.Top;
                this.button1.Location = new System.Drawing.Point.$ctor1(274, 188);
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
                this.button2.Anchor = System.Windows.Forms.AnchorStyles.Top;
                this.button2.Location = new System.Drawing.Point.$ctor1(274, 127);
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
                this.button3.Anchor = ((9));
                this.button3.Location = new System.Drawing.Point.$ctor1(529, 12);
                this.button3.Name = "button3";
                this.button3.Size = new System.Drawing.Size.$ctor2(156, 389);
                this.button3.TabIndex = 2;
                this.button3.Tag = "btn btn-primary";
                this.button3.Text = "Anchor Right";
                this.button3.UseVisualStyleBackColor = true;
                //
                // button4
                //
                this.button4.Location = new System.Drawing.Point.$ctor1(12, 12);
                this.button4.Name = "button4";
                this.button4.Size = new System.Drawing.Size.$ctor2(160, 55);
                this.button4.TabIndex = 3;
                this.button4.Tag = "btn btn-primary";
                this.button4.Text = "Click Me to Increase Width";
                this.button4.UseVisualStyleBackColor = true;
                this.button4.addClick(Bridge.fn.cacheBind(this, this.button4_Click));
                //
                // frmCustomer
                //
                this.ClientSize = new System.Drawing.Size.$ctor2(697, 413);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJUZXN0QnJpZGdlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyIuLi9UZXN0L2ZybUN1c3RvbWVyLmNzIiwiQ2xhc3MxLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFrQllBOzs7OztnQkFLQUEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQTs7OztnQkFJQUEsc0JBQXNCQTtnQkFDdEJBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSxzQkFBc0JBLEFBQXdCQTs7OztnQkFJOUNBLHNCQUFzQkE7Z0JBQ3RCQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Ozs7Z0JBSTlDQSxzQkFBc0JBLENBQUNBLEFBQW1DQSxBQUFDQSxDQUFDQTtnQkFDNURBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBOzs7O2dCQUlBQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Ozs7Z0JBSTlDQSxrQkFBa0JBLElBQUlBO2dCQUN0QkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQTtnQkFDQUE7Z0JBQ0FBLGVBQWVBLEFBQXdCQTtnQkFDdkNBOzs7NENBSThCQSxRQUFlQTs7OzRDQUtmQSxRQUFlQTs7OzRDQUtmQSxRQUFlQTs7O3FDQUt0QkEsUUFBZUE7Z0JBRXRDQSxRQUFRQSxJQUFJQTtnQkFDWkE7O3FDQUd1QkEsUUFBZUE7Z0JBRXRDQSxRQUFRQSxJQUFJQTtnQkFDWkE7OzBDQUc0QkEsUUFBZUE7OztxQ0FLcEJBLFFBQWVBO2dCQUV0Q0E7Ozs7Ozs7WUMvR0FBLFFBQVFBLElBQUlBO1lBQ1pBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRm9ybXM7XHJcblxyXG5uYW1lc3BhY2UgVGVzdFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgZnJtQ3VzdG9tZXIgOiBGb3JtXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uMjtcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b24zO1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjQ7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uMTtcclxuXHJcbiAgICAgICAgcHVibGljIGZybUN1c3RvbWVyKCkgOiBiYXNlKClcclxuICAgICAgICB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEluaXRpYWxpemVDb21wb25lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLlN1c3BlbmRMYXlvdXQoKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjFcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5BbmNob3IgPSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuVG9wO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMjc0LCAxODgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuTmFtZSA9IFwiYnV0dG9uMVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDE2MCwgNTUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVGFnID0gXCJidG4gYnRuLXByaW1hcnlcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLlRleHQgPSBcIlNob3cgTWUgaW4gYSBGb3JtXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjFfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uMlxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLkFuY2hvciA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ub3A7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgyNzQsIDEyNyk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5OYW1lID0gXCJidXR0b24yXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMTYwLCA1NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5UYWJJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVGV4dCA9IFwiU2hvdyBNZSBpbiBhIERpYWxvZ1wiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b24yX0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjNcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5BbmNob3IgPSAoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcykoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ub3AgfCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuUmlnaHQpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCg1MjksIDEyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLk5hbWUgPSBcImJ1dHRvbjNcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSgxNTYsIDM4OSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5UYWJJbmRleCA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuVGV4dCA9IFwiQW5jaG9yIFJpZ2h0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b240XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMTIsIDEyKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240Lk5hbWUgPSBcImJ1dHRvbjRcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSgxNjAsIDU1KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LlRhYkluZGV4ID0gMztcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LlRhZyA9IFwiYnRuIGJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5UZXh0ID0gXCJDbGljayBNZSB0byBJbmNyZWFzZSBXaWR0aFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b240X0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGZybUN1c3RvbWVyXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLkNsaWVudFNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSg2OTcsIDQxMyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uNCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMik7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMSk7XHJcbiAgICAgICAgICAgIHRoaXMuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoNTAsIDUwKTtcclxuICAgICAgICAgICAgdGhpcy5OYW1lID0gXCJmcm1DdXN0b21lclwiO1xyXG4gICAgICAgICAgICB0aGlzLlRhZyA9IFwibW9kYWwtY29udGVudFwiO1xyXG4gICAgICAgICAgICB0aGlzLlJlc2l6ZSArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmZybUN1c3RvbWVyX1Jlc2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lTGF5b3V0KGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgdGV4dEJveDFfVGV4dENoYW5nZWQob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCB0ZXh0Qm94Ml9UZXh0Q2hhbmdlZChvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIHRleHRCb3gzX1RleHRDaGFuZ2VkKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uMV9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gbmV3IGZybUN1c3RvbWVyKCk7XHJcbiAgICAgICAgICAgIHguU2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjJfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgeCA9IG5ldyBmcm1DdXN0b21lcigpO1xyXG4gICAgICAgICAgICB4LlNob3dEaWFsb2coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBmcm1DdXN0b21lcl9SZXNpemUob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b240X0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5XaWR0aCArPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFRlc3Q7XHJcblxyXG5uYW1lc3BhY2UgVGVzdEJyaWRnZVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQ2xhc3MxXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIE1haW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHggPSBuZXcgZnJtQ3VzdG9tZXIoKTtcclxuICAgICAgICAgICAgeC5TaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdCn0K
