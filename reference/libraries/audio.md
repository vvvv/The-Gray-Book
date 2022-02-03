# Audio

## Audio

For audio analysis, playback, recording and sound synthesis.  
NuGet: [VL.Audio](https://www.nuget.org/packages/VL.Audio)

## Audio drivers
If you have any ASIO driver installed, it will be used by default. Otherwise the system default WASAPI driver will be used. For choosing a different driver than the default, use the DriverSettings node. But note that this node must globally only exist once, otherwise it is not guaranteed that you will be using the desired driver!

> [!NOTE]
> As of now, audio input is only available when using an ASIO driver!

If your sound card doesn't ship with an ASIO driver, try a generic one, like: 
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
