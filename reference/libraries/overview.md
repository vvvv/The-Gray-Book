# Libraries

VL's functionality is structured into individual libraries, also known as NuGet packages or just "packs". Not all of them are shipping with vvvv, but they can easily be installed. Most of them are open-source and many of them are provided and maintained by your fellow vvvv users. For an overview of what's available, see: 

The online browser for VL NuGets: **http://vvvv.org/packs**

To learn how to use NuGets in vvvv refer to the documentation on [Managing NuGets](../hde/managing-nugets.md) or watch the [HowTo Use NuGets](https://youtu.be/-U_kUQ3VDog) video.

## The VL.CoreLib

The default library of VL that provides nodes and types for the most basic patching needs is called VL.CoreLib. Here is an overview of the Categories it adds to a document that references it.

| Category | Content |
|---|---|
| 2D | 2d primitives like Vector2, Rectangle, Circle,... and 2d transformation and collision nodes. Further any 2d related math nodes.
| 3D | 3d primitives like Vector3, Box, Sphere,... and 3d transformation and collision nodes. Further any 3d related math nodes.
| Adaptive | Nodes that can operate on different datatypes, like a + [Adaptive] that can operate on numbers, strings, colors ... or a Length [Adaptive] that works for 2D and 3D vectors.
| Animation | Timebased nodes like time-generators (LFO, Stopwatch, ...) and filters (Damper, Oscillator, ...). Also has a subcategory *FrameBased* that contains similar nodes that operate framebased instead.
| [Collections](collections.md) | Contains most notably the Spread, but also other simple collections like the Sequence, Dictionary and HashSet.
| Color | Contains the RGBA color type and operations to convert to/from different color spaces.
| Control | Nodes to patch control flow, like FlipFlop, MonoFlop,...
| IO | Mouse, Keyobard and Touch nodes as well as nodes for file IO, Path (directory, filename) and Networking
| Math | General math, algorithms,...
| Primitive | Contains the primitive datatypes, like Bool, Byte, Integer32/64 Float32/64, Char, String
| [Reactive](reactive.md) | Nodes for reactive programming
| System | [XML](xml.md), [JSON](json.md), DateTime, [Serialization](serialization.md), ...
| Text | TypeWriter

## Anything missing? 
In case you find anything missing, here are a couple of options:
- We do offer custom development, don't hesitate to [get in touch](mailto:devvvvs@vvvv.org)!
- If you're familiar with textual coding it is rather trivial to [create your own libraries](../extending/overview.md)
- Apart from libraries specifically made for vvvv, you can also [use almost any .NET library](../extending/using-net-libraries.md)
- You may also find someone work-in-progress of people here:
  - [WIP section](https://forum.vvvv.org/c/wip/27) of the vvvv forum
  - [Repos tagged with VL](https://github.com/topics/vl) on GitHub 