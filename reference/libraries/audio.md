# Audio

## Playback, recording, analysis, synthesis

For audio playback, recording, analysis and sound synthesis vvvv ships with the [VL.Audio](https://www.nuget.org/packages/VL.Audio) package. For more advanced features like beat tracking and pitch analysis, install the optional [VL.Audio.GPL](https://www.nuget.org/packages/VL.Audio.GPL) package, which as the name implies, stands under the [GPL license](https://opensource.org/licenses/gpl-license). For encoding/decoding LTC timecode, see [VL.Audio.LTC](https://www.nuget.org/packages/VL.Audio.LTC).

For an alternative player, see also:  
NuGet: [VL.GameAudioPlayer](https://www.nuget.org/packages/VL.GameAudioPlayer)

### Audio drivers
VL.Audio supports both WASAPI and ASIO drivers. By default the engine will try to use the system WASAPI drivers which should work out of the box with default settings. 

To choose a different driver or different settings, use either the DriverSettings node or the Configuration GUI, which is available via `Quad -> Extensions -> VL.Audio.Configuration` or <span class="keyseq"><kbd>Alt</kbd><kbd>C</kbd></span> as soon as VL.Audio is referenced in a document.

In case you want to use an ASIO driver with your soundcard that doesn't come with dedicated ASIO drivers, here are some options:
* [FlexASIO](https://github.com/dechamps/FlexASIO/releases) and [FlexASIO GUI](https://github.com/flipswitchingmonkey/FlexASIO_GUI/releases)
* [KoordASIO](https://github.com/koord-live/KoordASIO)
* [ASIO4All](http://www.asio4all.org)
* [FL Studio ASIO](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/envsettings_audio.htm#FLStudioASIO) as included with the free download of [FL Studio](https://www.image-line.com/fl-studio-download)

### Useful tools
* [Dante Via](https://www.audinate.com/products/software/dante-via) Versatile Audio Networking 
* [Virtual Audio Cable](https://vb-audio.com/Cable/index.htm)

## MIDI
Midi nodes are shipping with vvvv via the [VL.IO.Midi](https://www.nuget.org/packages/VL.IO.Midi/) package.

Additional utilities: [VL.MiDi.Music.Utils](https://www.nuget.org/packages/VL.MiDi.Music.Utils)

Useful tools: 
* [MIDI Monitor](https://www.midimonitor.com)
* [Virtual Audio Cable](https://vb-audio.com/Cable/index.htm)
* [loopMIDI](https://www.tobias-erichsen.de/software/loopmidi.html)
* [virtualMIDI](https://www.tobias-erichsen.de/software/virtualmidi.html)

## FMOD 
Wrapper for the FMOD Studio API allowing you to emit FMOD events and control their parameters.  
NuGet: [VL.FMODStudio](https://www.nuget.org/packages/VL.FMODStudio)
