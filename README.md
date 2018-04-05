# ClassicForms

ClassicForms is a library that allows you to use winforms designer.

[![Built with Bridge.NET](https://img.shields.io/badge/built%20with-Bridge.NET-blue.svg)](http://bridge.net/)

using the same designer:
  one is using the windows10.css
  the other is using bootstrap v4 css
  
 windows10.css supports by using the attribute scope.
 bootstrap.css - just assign - in the designer - the tag property to the class you want it to match in bootstrap. etc
 `
 var x = new Button();
 x.Tag = "btn btn-primary";
 `
 above code - will display the windows10 button. the class will do nothing in the windows10 version. but for bootstrap css. it will
  
Windows Preview:

https://rawgit.com/samuelGrahame/ClassicForms/master/TestBridge/bin/Debug/bridge/preview.windows.html

Bootstrap Preview:

https://rawgit.com/samuelGrahame/ClassicForms/master/TestBridge/bin/Debug/bridge/preview.bootstrap.html
