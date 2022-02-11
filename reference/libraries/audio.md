# Audio

## Audio

For audio analysis, playback, recording and sound synthesis.  
NuGet: [VL.Audio](https://www.nuget.org/packages/VL.Audio)

## Audio drivers
VL.Audio supports both WASAPI and ASIO drivers. By default the engine will try to use the system WASAPI drivers which should work out of the box with default settings. To choose a different driver or different settings, use the DriverSettings node. 

> [!NOTE]
> The DriverSettings node must globally only exist once. In case you have multiple instances of the node running, it is undefined the configuration of which node will be used.

In case you want to use an ASIO driver with your soundcard that doesn't come with dedicated ASIO drivers, here are some options:
* [FlexASIO](https://github.com/dechamps/FlexASIO/releases) and [FlexASIO GUI](https://github.com/flipswitchingmonkey/FlexASIO_GUI/releases)
* [ASIO4All](http://www.asio4all.org)
* [FL Studio ASIO](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/envsettings_audio.htm#FLStudioASIO) as included with the free download of [FL Studio](https://www.image-line.com/fl-studio-download)

Useful tools:
* [Dante Via](https://www.audinate.com/products/software/dante-via) Versatile Audio Networking 
* [Virtual Audio Cable](https://vb-audio.com/Cable/index.htm)

## MIDI

Midi nodes are shipping with vvvv.
NuGet: [VL.IO.Midi](https://www.nuget.org/packages/VL.IO.Midi/)

Useful tools: 
* [MIDI Monitor](https://www.midimonitor.com)
* [Virtual Audio Cable](https://vb-audio.com/Cable/index.htm)
* [loopMIDI](https://www.tobias-erichsen.de/software/loopmidi.html)
* [virtualMIDI](https://www.tobias-erichsen.de/software/virtualmidi.html)

## FMOD 
Wrapper for the FMOD Studio API allowing you to emit FMOD events and control their parameters.  
NuGet: [VL.FMODStudio](https://www.nuget.org/packages/VL.FMODStudio)
