# 3d Graphics

vvvv's 3d rendering engine VL.Stride is based on the [Stride 3d Engine](http://stride3d.net). It allows for 2 distinct workflows:

* A **highlevel**, easy to use SceneGraph approach, where you build 3d scenes by simply adding primitives, and lights to a scene. Primitives can be given materials to define their look. A range of Post FX, like ambient-occlusion, depth-of-field, bloom, ... are available to easily get shiny results
* A **lowlevel** approach, where you can write shaders (vertex, pixel, geometry, compute) using the [Stride Shading Language](https://doc.stride3d.net/latest/en/manual/graphics/effects-and-shaders/shading-language/index.html) (an extension to HLSL) to customize every aspect of your rendering

Both workflows can be easily combined. In general the [Stride Documentation](https://doc.stride3d.net/latest/en/) is useful for understanding key concepts of the engine. VL.Stride also allows you to output content to VR Devices. 


### Additional libraries:

* NuGet: [VL.Assimp](https://www.nuget.org/packages/VL.Assimp) is an alternative 3d model loader for Stride
* NuGet: [VL.CEF](https://www.nuget.org/packages/VL.CEF) is a HTML texture renderer for Stride
* Currently in the making: [FUSE](https://vvvv.org/blog/fuse-vl.stride-gpu-tools-presentation) - A collection of GPU tools and libraries to use with VL.Stride. Think: Distance Fields & Raymarching, Particles, Procedural Geometry, Textures and Materials, GPGPU


### Useful tools
* [Stride Shader Explorer](https://github.com/tebjan/Stride.ShaderExplorer)
* [List of Material Editors](https://discourse.vvvv.org/t/open-source-material-editor-material-creation-resource-list/19185)


---

For an alternative, very primitive wireframe 3d engine, see VL.Skia3d:
NuGet: [VL.Skia3d](https://www.nuget.org/packages/VL.Skia3d)