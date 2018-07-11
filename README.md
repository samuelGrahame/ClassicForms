# ClassicForms

ClassicForms is a library that allows you to use winforms designer to create desktop applications for the browser.

[![NuGet](https://img.shields.io/nuget/v/classicforms.svg)](https://www.nuget.org/packages/classicforms) [![Built with Bridge.NET](https://img.shields.io/badge/built%20with-Bridge.NET-blue.svg)](http://bridge.net/)

### NuGet

installation of ClassicForms using a new **C# Class Library** project. using [NuGet](https://www.nuget.org/packages/classicforms). Within the NuGet Package Manager, search for **ClassicForms** and click to install. 

ClassicForms can also be installed using the NuGet Command Line tool by running the following command:

```
Install-Package ClassicForms
```

Compile and Run your Windows Forms applications on the browser.

### Set out to do

I wanted to create a repo for bridge, That I could use the speed of RAPID Development from WinForms in my cload based applications.
I first created a repo called ExpressCraft, It was going good for the most part. One thing that I found out, is that because or the ui is based on code it just takes ages to design and test screens. I noticed this with one of my large projects. So i needed to use a better way of having a UI. What I came up with is, why don't I just support a design c# file that WinForms Designer generates. That way i can also test the application in native c# and in javascript, I'm not forced to deside do I make it for Desktop or do i make it for (Chrome, Firefix, Edge & IE) Browsers. I also didn't want to restrict peoples design. I have created a style sheet for windows 10. but a Bootstrap UI can be dropped in, As long as the controls have the right className - I use the Tag property in the controls to workout what class the html elements should use.

I have still a long way to go to support the entire winforms default library, but alot of the simple stuff has been done, just recently I managed to port over the docking and anchoring to bridge/c#.

I also support Mouse events close to how windows emulates them, etc if you click on a control and drag, the mouse events are given to that first control, not the other controls that you are hovering. I also convert the mouseEvents to MouseEventArgs so that it is easier working out what/where the mouse is.

### What is required to build a simple one form application

Create a **C# Class Library** (Bridge/ClassicForms) use nuget to add classicforms to that project, Bridge and Retyped.dom will be added also.

Create a **C# Class Library** (.Net 4/Win) but this will be used to store your form's
Create a **Form** name it frm1, add a button for the toolbar.
double click on that button, Add ```Console.WriteLine("Hello World!");```    

Now right click on Bridge/ClassicForms Project, Click Add -> Add Existing in the Popup Menu.
Locate the Form you added with the botton, Before you add, make sure you click the arrow next to Add, You will see **Add as link** this allows for changes in the ui to link directly to both applications. This is a one time thing when you create a Form.
I am researching on how to just use one project for now.

Create a ```program.cs``` in your (Bridge/ClassicForms) project, Add the following code.

```csharp
public static void Main()
{
   // Create a new Instance of frm1.  
   var x = new frm1();
   
   // Invoke the method Show, to bring the first window to the screen.
   x.Show();
}
```
   
**Build the Solutiuon**
Locate the Index.html under (Bridge/ClassicForms) Project, make a copy. in the copied version, Add the link to the windows 10 css file, if you would like to use Bootstrap or any other css file, make sure the buttons and form's have had a ClassName Assigned to there Tag. (some controls have multiple ClassNames) - use a `,` to seperate these classnames.

**Running the Solution**

Locate the Copy of Index.html and double click on it. you can also include this HTML file in your (Bridge/ClassicForms) Project.
You can also adjust the properties for the project on running to run a website, then put that path file.
  
### Previews in Rawgit.

Windows Preview:

https://rawgit.com/samuelGrahame/ClassicForms/master/TestBridge/bin/Debug/bridge/preview.windows.html

Bootstrap Preview:

https://rawgit.com/samuelGrahame/ClassicForms/master/TestBridge/bin/Debug/bridge/preview.bootstrap.html
