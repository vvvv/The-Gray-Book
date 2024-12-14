# Libraries

vvvv's functionality is structured into individual libraries, also known as NuGet packages. Not all of them are shipping with vvvv, but they can easily be installed. Most of them will be open-source and many of them are provided and maintained by your fellow vvvv users.

To learn how to use nugets in vvvv please refer to the documentation on [Managing NuGets](../hde/managing-nugets.md) or watch the [HowTo Use NuGets](https://youtu.be/-U_kUQ3VDog) video.

Besides the [VL.CoreLib](corelib.md), which is accessible by default, here is an overview of what's available:

| Category | Content |
|---|---|
| [2d Graphics](graphics-2d.md) | Skia, paths, svg, pdf, ... |
| [3d Graphics](graphics-3d.md) | Stride, models, materials, shaders, textures, ... |
| [Animation](animation.md) | Particle Systems, Timelines, ... |
| [Audio](audio.md) | Audio analysis, playback, recording. Sound synthesis, ... |
| [Augmented Reality](augmentedreality.md) | Aruco markers, ... |
| [Computer Vision](computervision.md) | OpenCV, Dlib, ... |
| [Databases](databases.md) |  |
| [Devices](devices.md) | Depth Cameras, Arduino, Lights, Lasers, SICK, ... |
| [IO](io.md) | Networking Protocols, ... |
| [Machine Learning](machinelearning.md) | Wekinator, RunwayML, Lobe, ONNX, ... |
| [Projection Mapping](projectionmapping.md) | Warping, Blending, Softedge, VIOSO,...
| [Video](video.md) |  Video playback, capturing, ...|
| [Misc](misc.md) |  |

Missing anything? 
* Check the [work-in-progress section](https://forum.vvvv.org/c/wip/27) of the vvvv forum
* Browse the [github topic VL](https://github.com/topics/vl) 
* Scroll the [nugets taged VL](https://www.nuget.org/packages?packagetype=&sortby=created-desc&q=Tags%3A%22VL%22&prerel=True)
* Apart from the above libraries specifically made for vvvv, you can also [use almost any .NET library](../extending/using-net-libraries.md)
* We do offer custom development, don't hesitate to [get in touch](mailto:devvvvs@vvvv.org)!

You can also make your own libraries for personal use (for sharing nodes and types among different projects) or for sharing with others. See [Extending vvvv](../extending/overview.md).