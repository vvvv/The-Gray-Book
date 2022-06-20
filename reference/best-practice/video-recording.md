# Video Recording

Here are a couple of options for screen recording.

## XBox Game Bar
Typically installed on Windows 10, otherwise available via the Microsoft Store. 

Press <span class="keyseq"><kbd>Windows</kbd><kbd>G</kbd></span> to open it. Allows you to record fullscreen video plus audio.

## NVidia Cards
If not yet installed with your drivers, download and install [Geforce Experience](https://www.nvidia.com/de-de/geforce/geforce-experience/).

Press <span class="keyseq"><kbd>ALT</kbd><kbd>Z</kbd></span> to open it. Allows you to record fullscreen video plus audio.

## AMD Cards
If not yet installed with your drivers, download and install [Radeon Software](https://www.amd.com/en/technologies/radeon-software-gaming-media).

Press <span class="keyseq"><kbd>ALT</kbd><kbd>R</kbd></span> to open it. Allows you to record fullscreen video plus audio.

## OBS Studio
Free and open source software for video recording and live streaming: https://obsproject.com/

## VL.ScreenRecorder
If you're looking for a recording option as part of your application, have a look at the [VL.ScreenRecorder](https://www.nuget.org/packages/VL.ScreenRecorder) NuGet.

## High resolution Texture/Image Writer
If you want to write high-resolution image sequences in non-realtime, use the the following nodes:
- for VL.Stride: TextureWriter in combination with SceneTexture
- for VL.Skia: ImageWriter in combination with Renderer (Offscreen) 

Use those in also combination with the MainLoop node set to "Is Incremental" and specifying the "Incremental FPS" you need. This makes sure that the timing of all nodes that are depending on a clock (like LFOs, Filters,...) is correctly advanced, no matter how long it takes, to write each of the images to disk. 

> [!NOTE]
> This technique does not work for scenarios where your visual content relies on realtime parameters like audio analysis or realtime sensor data.

## Gif Recorders
For recording animated gifs, try the [LiceCap](https://www.cockos.com/licecap/) screen capturing tool.



