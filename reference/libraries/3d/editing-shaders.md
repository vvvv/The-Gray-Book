# Editing shaders

Shaders are written in [SDSL](https://doc.stride3d.net/latest/en/manual/graphics/effects-and-shaders/shading-language/index.html) which is a superset of [HLSL](http://msdn.microsoft.com/en-us/library/windows/desktop/bb509561%28v=vs.85%29.aspx).

vvvv does not come with a built-in shader editor. Instead you can use any text editor of your choice. Simply associate the file-ending `.sdsl` with it. If you now Rightclick -> Open on a shader node, the code will open in the specified editor. Whenever you save the file, the shader node will be updated.

## Syntax Highlighting
For syntax highlighting you have to use an editor that supports HLSL syntax highlighting. Try one of these:

* [Visual Studio Code](https://code.visualstudio.com/docs/?dv=win) is a light version of Visual Studio. Add the [Shader languages support for VS Code](https://marketplace.visualstudio.com/items?itemName=slevesque.shader) extension, assign `*.sdsl` files to HLSL syntax, and you get syntax highlighting and basic code completion.
* You can also use the [Sublime](https://www.sublimetext.com/) editor with the "HLSL Syntax" package.

## Error Reporting
For serious shader coding you'll not want to miss error reporting. This requires
*  [Visual Studio 2019](https://visualstudio.microsoft.com/)
* The Stride extension, which comes with the [Stride installer](https://stride3d.net/download/)
* Stride must be installed for this to work, to see which version, check the "About" dialogue in vvvv gamma

 Additionally recommended:
  * Enable the [scroll bar code map](https://docs.microsoft.com/en-us/visualstudio/ide/how-to-track-your-code-by-customizing-the-scrollbar?view=vs-2019)
 * [Productivity Power Tools](https://marketplace.visualstudio.com/items?itemName=VisualStudioPlatformTeam.ProductivityPowerPack2017) for highlighting the selected word


 It will give you the best shader editing experience, including syntax highlighting, code completion, code navigation and error reporting. 

For quickly setting up a VS solution that holds all your shaders, go to:

    C:\Program Files\vvvv\vvvv_gamma_...\lib\packs\VL.Stride.Runtime...\help\Overview

and copy the `\EditShaders` folder next to your `\shaders` folder resulting in a setup like this:

    MyProject\EditShaders\EditShaders.sln
    MyProject\shaders\shader_files.sdsl
    MyProject\MainDoc.vl

Now when you open \EditShaders\EditShaders.sln it will pick up all your shaders automatically and you can start working on them.
