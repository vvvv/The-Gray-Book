# vvvv gamma 6.0
TBA

## New
- Ships with support for [OSCQuery](https://github.com/Vidvox/OSCQueryProposal) via the VL.OSCQuery package
- Added new [Debug Views](https://thegraybook.vvvv.org/reference/hde/debugging.html): Build Result, App Health and Log
- Added Log node to conveniently log to the new log window
- Added Support for [Configuration](https://learn.microsoft.com/en-us/dotnet/core/extensions/configuration)
- Patch Explorer and Document Menu now colored red in case of errors

## Fixes
- IOBoxes now handle display of NULL correctly
- Configuring Int2/3/4 IOBoxes now also has option to set Minimum, Maximum,..
- ImagePlayer (Skia/Stride) now always have files in correct order

## Stride
- Update to Stride 4.2
- TextureFX RGBA inputs are now of type ComputeColor
  
## Changes
* `VL.Video` (former `VL.Video.MediaFoundation`) has been reworked:
  * The package has no more dependencies on `Stride`, `Skia` or `SharpDX`. This reduces the size of exported applications.
  * All backend specific node duplications have been removed. For example `VideoPlayer (Skia)`, `VideoPlayer (Stride)` are no more, instead we only have `VideoPlayer`.
  * The `VideoPlayer` and `VideoIn` nodes return a `IVideoSource` on their main output. That pin can be connected to `VideoSourceToSKImage` (found within `VL.Skia`) or `VideoSourceToTexture` (found within `VL.Stride`). Both of these nodes take care of efficiently turning the received video frames into their respective image type.
  * The before mentioned nodes were introduced earlier this year, but didn't get much attention yet as they were only usable in [VL.IO.NDI](https://github.com/vvvv/VL.IO.NDI). With this release, their functionality has been enhanced so that they can transport the used graphics device upstream. That allows the source (for example the `VideoPlayer`) to enter faster code paths if possible. The produced video frames can be backed by textures and used for rendering directly - no unnecessary memory copies, or GPU download & uploads.
  * Whether or not the graphics device gets communicated to the video source can be controlled via a pin which defaults to true. The video sink nodes further allow to pull the video frames from upstream, that could be useful in scenarios where one wants to synchronize the update rate to the video source.
  * The `MediaFoundation` part has been dropped in the package name to lay the groundwork for more platform neutral work.
* New serialization options
  * Thanks to https://github.com/vvvv/VL.StandardLibs/pull/664 we can now serialize from/to [MessagePack](https://msgpack.org/index.html). The new nodes can be found in the pre-installed package `VL.Serialization.MessagePack`.
  * The previous PR also brought in some plain & simple binary serialization - these nodes can be accessed via the new `VL.Serialization.Raw` package. Note that you should no what a blittable type is or you'll not be happy with them.
  * To make thing symetric we moved the [FSPickler](https://mbraceproject.github.io/FsPickler/) based nodes to the new `VL.Serialization.FSPickler` package. A converter will take care of fixing your existing patches.
* Direct import of types & nodes from C#
  * It's now possible to write types & nodes directly from within C# with the new [`ImportAsIs`](https://github.com/vvvv/VL.StandardLibs/blob/main/VL.Core/src/Import/ImportAsIsAttribute.cs) assembly attribute. When set, all the public classes / structs / enums will be available in VL as if they'd have been defined there directly. No type forwarding required.
  * It's further possible to write process nodes directly in C# by attaching the new [`ProcessNode`](https://github.com/vvvv/VL.StandardLibs/blob/main/VL.Core/src/Import/ProcessNodeAttribute.cs) on a class. Again, no further work has to be done on the VL side of thins.
  * This way (if desired) the C# code can be become the single source of truth for a library project.
