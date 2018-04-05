/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 16.8.2
 */
Bridge.assembly("TestBridge", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.frmCustomer", {
        inherits: [System.Windows.Forms.Form],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Form.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            InitializeComponent: function () {
                this.SuspendLayout();
                //
                // frmCustomer
                //
                this.ClientSize = new System.Drawing.Size.$ctor1(697, 413);
                this.Name = "frmCustomer";
                this.Tag = "modal-content";
                this.ResumeLayout(false);

            },
            textBox1_TextChanged: function (sender, e) {

            },
            textBox2_TextChanged: function (sender, e) {

            },
            textBox3_TextChanged: function (sender, e) {

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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJUZXN0QnJpZGdlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyIuLi9UZXN0L2ZybUN1c3RvbWVyLmNzIiwiQ2xhc3MxLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7OztnQkFjWUE7Ozs7O2dCQUtBQTs7OztnQkFJQUEsa0JBQWtCQSxJQUFJQTtnQkFDdEJBO2dCQUNBQTtnQkFDQUE7Ozs0Q0FJOEJBLFFBQWVBOzs7NENBS2ZBLFFBQWVBOzs7NENBS2ZBLFFBQWVBOzs7Ozs7OztZQzNCN0NBLFFBQVFBLElBQUlBO1lBQ1pBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRm9ybXM7XHJcblxyXG5uYW1lc3BhY2UgVGVzdFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgZnJtQ3VzdG9tZXIgOiBGb3JtXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBmcm1DdXN0b21lcigpIDogYmFzZSgpXHJcbiAgICAgICAgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBJbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBJbml0aWFsaXplQ29tcG9uZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuU3VzcGVuZExheW91dCgpO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgLy8gZnJtQ3VzdG9tZXJcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIHRoaXMuQ2xpZW50U2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDY5NywgNDEzKTtcclxuICAgICAgICAgICAgdGhpcy5OYW1lID0gXCJmcm1DdXN0b21lclwiO1xyXG4gICAgICAgICAgICB0aGlzLlRhZyA9IFwibW9kYWwtY29udGVudFwiO1xyXG4gICAgICAgICAgICB0aGlzLlJlc3VtZUxheW91dChmYWxzZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIHRleHRCb3gxX1RleHRDaGFuZ2VkKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgdGV4dEJveDJfVGV4dENoYW5nZWQob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCB0ZXh0Qm94M19UZXh0Q2hhbmdlZChvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFRlc3Q7XHJcblxyXG5uYW1lc3BhY2UgVGVzdEJyaWRnZVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQ2xhc3MxXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIE1haW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHggPSBuZXcgZnJtQ3VzdG9tZXIoKTtcclxuICAgICAgICAgICAgeC5TaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdCn0K
