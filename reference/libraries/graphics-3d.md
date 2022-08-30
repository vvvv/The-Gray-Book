# 3d Graphics

vvvv's 3d rendering engine VL.Stride is based on the [Stride 3d Engine](http://stride3d.net) and shipping with the installation. It allows for 2 distinct workflows:

* A **high-level**, easy to use SceneGraph approach, where you build 3d scenes by simply adding models, and lights to a scene. Models can be given materials to define their look
* A **low-level** approach, work with the graphics API directly

Both workflows can be easily combined, see [Rendering](3d/rendering.md) for more details.

 You you can write [shaders](3d/shaders.md) (vertex, pixel, geometry, compute) using the [Stride Shading Language](https://doc.stride3d.net/latest/en/manual/graphics/effects-and-shaders/shading-language/index.html) (an extension to HLSL) to customize your rendering in both workflows.

A range of Post FX, like ambient occlusion, depth of field, bloom, etc. are available too. VL.Stride also allows you to output content to VR Devices.

In general the [Stride Documentation](https://doc.stride3d.net/latest/en/) is useful for understanding key concepts of the engine.

### Topics

* [Rendering](3d/rendering.md)
* [Models and Meshes](3d/models.md)
* [Transparency](3d/transparency.md)
* [Shaders](3d/shaders.md)
* [All about TextureFX shaders](3d/texturefx.md)
* [Editing shaders](3d/editing-shaders.md)
* [Geometry](3d/geometry.md)
* [Projection Mapping](projectionmapping.md)
* [Text rendering](../best-practice/text-rendering.md)

### Additional libraries:

* NuGet: [VL.Fuse](https://www.nuget.org/packages/VL.Fuse/) is a collection of GPU tools and libraries to use with VL.Stride. Think: Distance Fields & Raymarching, Particles, Procedural Geometry, Textures and Materials, GPGPU. For details, see [The FUSE Lab](https://www.thefuselab.io/)
* NuGet: [VL.CEF](https://www.nuget.org/packages/VL.CEF) is a HTML texture renderer for Stride
* NuGet: [VL.Alembic](https://www.nuget.org/packages/VL.Alembic/) for loading [Alembic](http://www.alembic.io) files
* NuGet: [VL.Stride.Text3d](https://www.nuget.org/packages/VL.Stride.Text3d) for rendering extruded 3d text
* NuGet: [VL.IO.PLY](https://www.nuget.org/packages/VL.IO.PLY) for loading PLY pointcloud files
* NuGet: [VL.IO.Teximp](https://www.nuget.org/packages/VL.Teximp) for texture IO and processing
* NuGet: [VL.Assimp](https://www.nuget.org/packages/VL.Assimp) is an alternative 3d model loader for Stride
* NuGet: [VL.OpenEXR](https://www.nuget.org/packages/VL.OpenEXR) for loading [OpenEXR](https://www.openexr.com/) image files
* NuGet: [VL.Boids-GPU](https://www.nuget.org/packages/VL.Boids-GPU) Boids algorithm implemented Stride

### Useful tools
* [Stride Shader Explorer](https://github.com/tebjan/Stride.ShaderExplorer) to browse available shaders to inherit from (requires also [Stride](https://stride3d.net/download/) to be installed)
* [List of Material Editors](https://discourse.vvvv.org/t/open-source-material-editor-material-creation-resource-list/19185)
* [ALVR](https://github.com/alvr-org/ALVR) to stream VR content to headsets via Wi-Fi

---

For an alternative, very primitive wireframe 3d engine, see VL.Skia3d:
NuGet: [VL.Skia3d](https://www.nuget.org/packages/VL.Skia3d)
