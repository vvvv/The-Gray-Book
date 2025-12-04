# vvvv on Arm 

Since version 7.0 we offer dedicated builds for running on Arm CPUs. In the download section, switch to the Arm tab to see available downloads:

[![Arm downloads](../../images//reference//best-practice/vvvv-on-arm.png)](https://vvvv.org/download/)

## Limitations
Unfortunately some libraries will not work with Arm builds of vvvv. This will be the case when a library itself has what are called "native dependencies" that are not available for Arm. In order to find out if libraries might have problems on Arm, run an Arm build of vvvv on an Arm CPU with the commandline argument `--log` and examine the created logfile for warnings like:

`Library Foo contains native assets but none for the current runtime win-arm64...`

Generally we can give the following (incomplete) overview of Arm compatibility for libraries:

### VL.Stride
Available since 7.1-preview 68

Arm CPUs often will not be accompanied by Nvidia GPUs. Non-Nvidia GPUs though seem to be much closer following the official specs, when it comes to shader programming. This will lead to the impression that things working on a machine with an Nvidia GPU are broken on a machine with a non-Nvidia GPU, when in fact most often the program is actually broken to begin with, only Nvidia GPUs still manage to run them. So really the code needs to be fixed to be valid on all GPUs!

You'll see in few help patches we've added a warning: ⚠️Nvidia only⚠️ when they are using a rendering technique that is only supported on Nvidia cards.

### VL.Fuse
Same as VL.Stride, see above. Largely works but fails in areas where shaders have been written in a way to only work on Nvidia GPUs.

### VL.Audio
Using the Resample [Audio.Utils] node will crash vvvv.

### Should work
The following libraries do not yet have Arm support in vvvv, but it seems the underlying libraries do. So it should be possible to get them working with Arm builds of vvvv with some effort:
- VL.CEF
- VL.MediaPipe
- VL.OpenCV
- VL.IO.NDI

### Could work
Support for the following libararies depends on support for Arm CPUs by the creators of the underlying libraries. In case they offer support, we can most likely make them work with Arm builds of vvvv:
- VL.VIOSOWarpBlend
- VL.ScalableDisplay 
- VL.Devices.Zed
- VL.Devices.RealSense
- VL.Devices.Orbbec
- VL.Devices.Nuitrack
- VL.Devices.Ultraleap
- VL.Devices.Decklink
- VL.Devices.IDS
- VL.Devices.TheImagingSource

### Will not work
There is little chance that the below devices will be supported on Arm CPUs by the manufacturer:
- VL.Devices.Astra
- VL.Devices.Kinect
- VL.Devices.Kinect2
- VL.Devices.AzureKinect
