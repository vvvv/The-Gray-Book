# Editing shaders

Shaders are written in [SDSL](https://doc.stride3d.net/latest/en/manual/graphics/effects-and-shaders/shading-language/index.html) which is a superset of [HLSL](http://msdn.microsoft.com/en-us/library/windows/desktop/bb509561%28v=vs.85%29.aspx).

vvvv does not come with a built-in shader editor. Instead you can use any text editor of your choice. Simply associate the file-ending `.sdsl` with it. If you now Rightclick -> Open on a shader node, the code will open in the specified editor. Whenever you save the file, the shader node will be updated.

## Recommended: Visual Studio Code with Stride Shader Tools

[Visual Studio Code](https://code.visualstudio.com/) or [VSCodium](https://vscodium.com/) with the **[Stride Shader Tools](https://marketplace.visualstudio.com/items?itemName=stride.sdsl)** extension ([OpenVSX](https://open-vsx.org/extension/tebjan/sdsl)) provides:

* Syntax highlighting for SDSL
* Context-aware code completion (inherited members, streams, semantics, compositions)
* Inheritance tree visualization in sidebar
* Member explorer showing all available methods and variables
* Go-to-definition through the inheritance chain
* Real-time error reporting
* Hover documentation for types, methods, and semantics
* SDSL-level debugging with RenderDoc integration *(coming soon)*

## Alternative: Other Text Editors

If you prefer a different editor, you can use any editor with HLSL syntax highlighting:

* [Sublime Text](https://www.sublimetext.com/) with the "HLSL Syntax" package
* Any text editor that supports HLSL highlighting

## Error Reporting with Visual Studio (Alternative)

**Visual Studio Code with Stride Shader Tools** (recommended above) provides real-time error reporting.

If you prefer **Visual Studio 2022**, you can also get error reporting with this setup:
* [Visual Studio 2022](https://visualstudio.microsoft.com/)
* The Stride extension for Visual Studio, which comes with the [Stride installer](https://stride3d.net/download/)
* Stride itself must also be installed. To see which exact version of Stride is required for your vvvv version, check the "About" dialog in vvvv

### Additional Tools
* **[Stride Shader Explorer](https://github.com/tebjan/Stride.ShaderExplorer/releases)**: Standalone tool for exploring the built-in shaders and their inheritance hierarchy. Now integrated into the VS Code extension, but still useful as a separate browser.
* **Visual Studio enhancements** (if using VS):
  * Enable the [scroll bar code map](https://learn.microsoft.com/en-us/visualstudio/ide/how-to-track-your-code-by-customizing-the-scrollbar?view=vs-2022)
  * [Productivity Power Tools](https://marketplace.visualstudio.com/items?itemName=VisualStudioPlatformTeam.ProductivityPowerPack2022) for highlighting the selected word 
