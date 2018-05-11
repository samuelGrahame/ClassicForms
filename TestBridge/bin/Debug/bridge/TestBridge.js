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
                this.button3.Anchor = ((11));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJUZXN0QnJpZGdlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyIuLi9UZXN0L2ZybUN1c3RvbWVyLmNzIiwiQ2xhc3MxLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFrQllBOzs7OztnQkFLQUEsZUFBZUEsSUFBSUE7Z0JBQ25CQSxlQUFlQSxJQUFJQTtnQkFDbkJBLGVBQWVBLElBQUlBO2dCQUNuQkEsZUFBZUEsSUFBSUE7Z0JBQ25CQTs7OztnQkFJQUEsc0JBQXNCQTtnQkFDdEJBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQSxzQkFBc0JBLEFBQXdCQTs7OztnQkFJOUNBLHNCQUFzQkE7Z0JBQ3RCQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Ozs7Z0JBSTlDQSxzQkFBc0JBLENBQUNBLEFBQW1DQSxBQUFDQSxDQUFDQTtnQkFFNURBLHdCQUF3QkEsSUFBSUE7Z0JBQzVCQTtnQkFDQUEsb0JBQW9CQSxJQUFJQTtnQkFDeEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBOzs7O2dCQUlBQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBLG9CQUFvQkEsSUFBSUE7Z0JBQ3hCQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Ozs7Z0JBSTlDQSxrQkFBa0JBLElBQUlBO2dCQUN0QkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGdCQUFnQkEsSUFBSUE7Z0JBQ3BCQTtnQkFDQUE7Z0JBQ0FBLGVBQWVBLEFBQXdCQTtnQkFDdkNBOzs7NENBSThCQSxRQUFlQTs7OzRDQUtmQSxRQUFlQTs7OzRDQUtmQSxRQUFlQTs7O3FDQUt0QkEsUUFBZUE7Z0JBRXRDQSxRQUFRQSxJQUFJQTtnQkFDWkE7O3FDQUd1QkEsUUFBZUE7Z0JBRXRDQSxRQUFRQSxJQUFJQTtnQkFDWkE7OzBDQUc0QkEsUUFBZUE7OztxQ0FLcEJBLFFBQWVBO2dCQUV0Q0E7Ozs7Ozs7WUNoSEFBLFFBQVFBLElBQUlBO1lBQ1pBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRm9ybXM7XHJcblxyXG5uYW1lc3BhY2UgVGVzdFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgZnJtQ3VzdG9tZXIgOiBGb3JtXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uMjtcclxuICAgICAgICBwcml2YXRlIEJ1dHRvbiBidXR0b24zO1xyXG4gICAgICAgIHByaXZhdGUgQnV0dG9uIGJ1dHRvbjQ7XHJcbiAgICAgICAgcHJpdmF0ZSBCdXR0b24gYnV0dG9uMTtcclxuXHJcbiAgICAgICAgcHVibGljIGZybUN1c3RvbWVyKCkgOiBiYXNlKClcclxuICAgICAgICB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEluaXRpYWxpemVDb21wb25lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMyA9IG5ldyBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240ID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLlN1c3BlbmRMYXlvdXQoKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjFcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5BbmNob3IgPSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuVG9wO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMjc0LCAxODgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuTmFtZSA9IFwiYnV0dG9uMVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDE2MCwgNTUpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVGFnID0gXCJidG4gYnRuLXByaW1hcnlcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLlRleHQgPSBcIlNob3cgTWUgaW4gYSBGb3JtXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5Vc2VWaXN1YWxTdHlsZUJhY2tDb2xvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5DbGljayArPSBuZXcgU3lzdGVtLkV2ZW50SGFuZGxlcih0aGlzLmJ1dHRvbjFfQ2xpY2spO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uMlxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b24yLkFuY2hvciA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcy5Ub3A7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgyNzQsIDEyNyk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5OYW1lID0gXCJidXR0b24yXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMTYwLCA1NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5UYWJJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMi5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVGV4dCA9IFwiU2hvdyBNZSBpbiBhIERpYWxvZ1wiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjIuQ2xpY2sgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5idXR0b24yX0NsaWNrKTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbjNcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5BbmNob3IgPSAoKFN5c3RlbS5XaW5kb3dzLkZvcm1zLkFuY2hvclN0eWxlcykoKChTeXN0ZW0uV2luZG93cy5Gb3Jtcy5BbmNob3JTdHlsZXMuVG9wIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLkJvdHRvbSkgXHJcbiAgICAgICAgICAgIHwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQW5jaG9yU3R5bGVzLlJpZ2h0KSkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoNTI5LCAxMik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5OYW1lID0gXCJidXR0b24zXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMy5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMTU2LCAzODkpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuVGFiSW5kZXggPSAyO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuVGFnID0gXCJidG4gYnRuLXByaW1hcnlcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24zLlRleHQgPSBcIkFuY2hvciBSaWdodFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjMuVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gYnV0dG9uNFxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDEyLCAxMik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5OYW1lID0gXCJidXR0b240XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMTYwLCA1NSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5UYWJJbmRleCA9IDM7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uNC5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjQuVGV4dCA9IFwiQ2xpY2sgTWUgdG8gSW5jcmVhc2UgV2lkdGhcIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b240LkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuYnV0dG9uNF9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBmcm1DdXN0b21lclxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy5DbGllbnRTaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoNjk3LCA0MTMpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjQpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjMpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjIpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLmJ1dHRvbjEpO1xyXG4gICAgICAgICAgICB0aGlzLkxvY2F0aW9uID0gbmV3IFN5c3RlbS5EcmF3aW5nLlBvaW50KDUwLCA1MCk7XHJcbiAgICAgICAgICAgIHRoaXMuTmFtZSA9IFwiZnJtQ3VzdG9tZXJcIjtcclxuICAgICAgICAgICAgdGhpcy5UYWcgPSBcIm1vZGFsLWNvbnRlbnRcIjtcclxuICAgICAgICAgICAgdGhpcy5SZXNpemUgKz0gbmV3IFN5c3RlbS5FdmVudEhhbmRsZXIodGhpcy5mcm1DdXN0b21lcl9SZXNpemUpO1xyXG4gICAgICAgICAgICB0aGlzLlJlc3VtZUxheW91dChmYWxzZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIHRleHRCb3gxX1RleHRDaGFuZ2VkKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgdGV4dEJveDJfVGV4dENoYW5nZWQob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCB0ZXh0Qm94M19UZXh0Q2hhbmdlZChvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGJ1dHRvbjFfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgeCA9IG5ldyBmcm1DdXN0b21lcigpO1xyXG4gICAgICAgICAgICB4LlNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBidXR0b24yX0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHggPSBuZXcgZnJtQ3VzdG9tZXIoKTtcclxuICAgICAgICAgICAgeC5TaG93RGlhbG9nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgZnJtQ3VzdG9tZXJfUmVzaXplKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgYnV0dG9uNF9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuV2lkdGggKz0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBUZXN0O1xyXG5cclxubmFtZXNwYWNlIFRlc3RCcmlkZ2Vcclxue1xyXG4gICAgcHVibGljIGNsYXNzIENsYXNzMVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBNYWluKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gbmV3IGZybUN1c3RvbWVyKCk7XHJcbiAgICAgICAgICAgIHguU2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXQp9Cg==
