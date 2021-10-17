# Video Playback

vvvv offers two distinct ways for video playback:
- Video files
- Image sequences

## Video files

- Referencing the VL.Video.Mediafoundation nuget (shipping with vvvv) adds the **VideoPlayer** [Video.Mediafoundation] and **VideoPlayer (Skia)** [Video.Mediafoundation] nodes
- These nodes play a wide range of [video containers and codecs](https://docs.microsoft.com/en-us/windows/win32/medfound/supported-media-formats-in-media-foundation) out of the box
- If you're missing any codecs for playback, see if they are available in this [Mediafoundation Codec Pack](http://codecguide.com/media_foundation_codecs.htm).
- Consult the help browser for examples on using the nodes

### Advantages
- Quick and easy to use
- Forgives unstable rendering framerates, by dropping frames if needed

### Disadvantages
- No seemless looping (may work with certain codecs but not with others)
- No seemless switching between sources (may work with certain codecs but not with others)
- May show micro-jitter, most notably in fullscreen playback, because timing is not coupled to the v-sync
- No network sync

> [!NOTE]
> For the playback of [HAP video files](http://hap.video) the thirdparty [VL.HapPlayer](https://www.nuget.org/packages/VL.HapPlayer/) nuget is required.

## Image sequences

- Depending on the rendering engine you are using, the following nodes are shipping with vvvv:
  - VL.Stride (3d engine): **ImagePlayer (Stride)** [Video] or **ImagePlayer (FrameBased Stride)** [Video]
  - VL.Skia (2d engine): **ImagePlayer (Skia)** [Video] or **ImagePlayer (FrameBased Skia)** [Video]
- The ImagePlayers for VL.Stride prefer images in the [DDS](https://beyondskyrim.org/tutorials/the-dds-texture-format) format (see below for conversion tools)
- Both support the playback of JPG, PNG and BMP files
- Consult the help browser for examples on using the nodes

### Advantages
- Nodes exist in two variants: timebased and framebased, see below
- Can do seemless looping
- Allows to implement seemless switching between sources
- The playback of image sequences on multiple PCs in a local network can be [synchronized](video-synchronization.md)

### Disadvantage
- Less comfortable handling of media assets (ie. thousands of image files)
- Audio tracks need to be played separately using [VL.Audio](https://www.nuget.org/packages/VL.Audio/)

### Timebased vs. Framebased

#### Time based
- The default, simpler to use option
- Use for scenarios where the video is not playing fullscreen but rather is part of a scene 
- Forgives unstable rendering framerates, by dropping frames if needed
- May show micro-jitter, most notably in fullscreen playback, because timing is not coupled to the v-sync
  
#### Frame based
- Use for scenarios where the video is playing fullscreen
- For frame-perfect, v-sync coupled playback
- Requires a perfectly stable rendering framerate

### DDS conversion tools

* [Texconv](https://github.com/Microsoft/DirectXTex/wiki/Texconv): Commandline tool
* [TexconvGUI](https://vvvv.org/contribution/texconvgui): A GUI for the above
* [Intel's Texture Works](https://gametechdev.github.io/Intel-Texture-Works-Plugin/): A Plugin for Photoshop
* [NVIDIA Texture Tools Exporter](https://developer.nvidia.com/nvidia-texture-tools-exporter)
* [AMD Compressonator](https://gpuopen.com/gaming-product/compressonator/)
