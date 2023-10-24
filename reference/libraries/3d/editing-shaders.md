# Editing shaders

Shaders are written in [SDSL](https://doc.stride3d.net/latest/en/manual/graphics/effects-and-shaders/shading-language/index.html) which is a superset of [HLSL](http://msdn.microsoft.com/en-us/library/windows/desktop/bb509561%28v=vs.85%29.aspx).

vvvv does not come with a built-in shader editor. Instead you can use any text editor of your choice. Simply associate the file-ending `.sdsl` with it. If you now Rightclick -> Open on a shader node, the code will open in the specified editor. Whenever you save the file, the shader node will be updated.

## Syntax Highlighting
For syntax highlighting you have to use an editor that supports HLSL syntax highlighting. Try one of these:

* [Visual Studio Code](https://code.visualstudio.com/docs/?dv=win) is a light version of Visual Studio. Add the [Shader languages support for VS Code](https://marketplace.visualstudio.com/items?itemName=slevesque.shader) extension, assign `*.sdsl` files to HLSL syntax, and you get syntax highlighting and basic code completion.
* You can also use the [Sublime](https://www.sublimetext.com/) editor with the "HLSL Syntax" package.

## Error Reporting
For serious shader coding you'll not want to miss error reporting. This requires
*  [Visual Studio 2022](https://visualstudio.microsoft.com/)
* The Stride extension for Visual Studio, which comes with the [Stride installer](https://stride3d.net/download/)
* Stride itself must also be installed for this to work. To see which exact version of Stride is required for your vvvv version, check the "About" dialog in vvvv 

### Additional recommendations
* [Stride Shader Explorer](https://github.com/tebjan/Stride.ShaderExplorer/releases): A tool that lets you explore the built-in shaders and their inheritance hierarchy
* Enable the [scroll bar code map](https://learn.microsoft.com/en-us/visualstudio/ide/how-to-track-your-code-by-customizing-the-scrollbar?view=vs-2022) in Visual Studio
* [Productivity Power Tools](https://marketplace.visualstudio.com/items?itemName=VisualStudioPlatformTeam.ProductivityPowerPack2022) for highlighting the selected word

This setup will give you the best shader editing experience, including syntax highlighting, code completion, code navigation and error reporting. 