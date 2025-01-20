# Physical Computing

For tasks like controlling motors or reading sensors, use a microcontroller.

## Microcontrollers

### Arduino/Firmata
Nodes for communicating with Arduinos (or other microcontrollers) running the [Firmata Protocol](https://github.com/firmata/protocol) are shipping with vvvv. Reference the VL.IO.Firmata package via the Node Browser and see its helppatches in the Help Browser. For an introduction, watch the vvvvTv episode: [Servos & Sensors with Arduino](https://youtube.com/live/uvLNZsStve8?feature=share).

### Phidgets
For using [Phidgets](https://www.phidgets.com): Products for USB Sensing and Control  
NuGet: [VL.Devices.Phidgets](https://www.nuget.org/packages/VL.Devices.Phidgets)

### nanoFramework
Want to use plain C# to write code for your microcontrollers? Try the [nanoFramework](https://www.nanoframework.net) which allows you to write C# with a reduced set of .NET libraries that run on hardware like ESPs and more.

### Meadow
Want to use full C#/.NET on a microcontroller? Try [Meadow](https://www.wildernesslabs.co/developers).
