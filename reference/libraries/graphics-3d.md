# 3d Graphics

vvvv's 3d rendering engine VL.Stride is based on the [Stride 3d Engine](http://stride3d.net) and shipping with the installation. It allows for 2 distinct workflows:

* A **high-level**, easy to use SceneGraph approach, where you build 3d scenes by simply adding models, and lights to a scene. Models can be given materials to define their look
* A **low-level** approach, where you work with the graphics API directly

Both workflows can be easily combined, see [Rendering](3d/rendering.md) for more details.

 You you can write [shaders](3d/shaders.md) (vertex, pixel, geometry, compute) using the [Stride Shading Language](https://doc.stride3d.net/latest/en/manual/graphics/effects-and-shaders/shading-language/index.html) (an extension to HLSL) to customize your rendering in both workflows.

A range of Post FX, like ambient occlusion, depth of field, bloom, etc. are available too. VL.Stride also allows you to output content to VR Devices.

In general the [Stride Documentation](https://doc.stride3d.net/latest/en/) is useful for understanding key concepts of the engine.

### Topics

* [Rendering](3d/rendering.md)
* [Models and Meshes](3d/models.md)
* [Geometry](3d/geometry.md)
* [Text rendering](../best-practice/text-rendering.md)
* [Transparency](3d/transparency.md)
* [Shaders](3d/shaders.md)
* [All about TextureFX shaders](3d/texturefx.md)
* [Editing shaders](3d/editing-shaders.md)
* [Projection Mapping](projectionmapping.md)
* [Graphics cards](3d/graphics-cards.md)
  
### Additional libraries

See the [3d Graphics Category](https://vvvv.org/packs/?c=3d%20Graphics) in the packs browser. 

### Useful tools
* [Stride Shader Explorer](https://github.com/tebjan/Stride.ShaderExplorer) to browse available shaders to inherit from (requires also [Stride](https://stride3d.net/download/) to be installed)
* [List of Material Editors](https://forum.vvvv.org/t/open-source-material-editor-material-creation-resource-list/19185)
* [ALVR](https://github.com/alvr-org/ALVR) to stream VR content to headsets via Wi-Fi

---

For an alternative, very primitive wireframe 3d engine, see VL.Skia3d:
NuGet: [VL.Skia3d](https://www.nuget.org/packages/VL.Skia3d)
