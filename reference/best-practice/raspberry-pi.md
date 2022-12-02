# Deploying to a Raspberry Pi

As of the [upcoming version 2022.5](../../changelog/2022.5.md) you can now [export](../hde/exporting.md) console apps to Linux, which makes the [Raspberry Pi](https://www.raspberrypi.com/) an excellent target. 

## Prerequisites 
- [Install .NET on the Raspberry Pi](https://learn.microsoft.com/en-us/dotnet/iot/deployment#deploying-a-framework-dependent-app) (Follow steps 1. and 2.)
- [Setup Raspberry Pi SSH Keys for Authentication](https://pimylifeup.com/raspberry-pi-ssh-keys/)

## Useful NuGets
- [System.Device.Gpio](https://www.nuget.org/packages/System.Device.Gpio): for GPIO, I2C, SPI, PWM, Serial port
- [Iot.Device.Bindings](https://www.nuget.org/packages/Iot.Device.Bindings): for higher-level specific device support
- [VL.IO.RCP](https://www.nuget.org/packages/VL.IO.RCP) for remote controlling parameters of the application from a web browser
- Any of the libraries in the [IO](../libraries/io.md) category
- [SFML.Net](https://www.nuget.org/packages/SFML.Net): for audio playback and recording (NOTE: version 2.5.0 of the NuGet has audio recording broken. Compile yourself [from sources](https://github.com/SFML/SFML.Net) to get this working)

## Deployment
In the [Application Exporter](../hde/exporting.md) specify:
- Output type: Console Application
- Target: Linux

This builds the program locally on your Windows PC. But now you want to copy the build artefacts to the Pi in order to run the program there. To automate this copy process, press ``Advanced build configuration`` and add the following lines inside the ``<Project>`` tag: 

```xml
<PropertyGroup>    
  <SourceFolder>PATH-TO-YOUR-PROJECTS-EXPORT-FOLDER</SourceFolder>
  <DestFolder>PATH-TO-YOUR-DESTINATION-FOLDER-ON-THE-PI</DestFolder>
</PropertyGroup>

<ItemGroup>
  <FilesToCopy Include="$(SourceFolder)\**" />
</ItemGroup>

<Target Name="Deploy" AfterTargets="Publish">
  <!-- copy all files from the source folder to the dest folder that are newer or don't exist in the dest folder -->
  <Message Importance="High" Text="Copying files to Raspberry PI..." />
  <Copy SourceFiles="@(FilesToCopy)" DestinationFiles="@(FilesToCopy->'$(DestFolder)\%(RecursiveDir)%(Filename)%(Extension)')" SkipUnchangedFiles="True">
    <Output TaskParameter="CopiedFiles" ItemName="Copied" />
  </Copy>
    
  <ItemGroup>
    <OutdatedFiles Include="$(DestFolder)\**" Exclude="@(Copied)" />
  </ItemGroup>
  <Message Importance="High" Text="Deleting files..." />
  <Delete Files="@(OutdatedFiles)" />
</Target>
```

After a successful export head over to a commandline on the PI and run the program by typing:

``dotnet myprogram.dll``

### Autostart
To have your application autostart when starting the Pi, you need to install it as a service (other options like rc.local or a .desktop file don't seem to work).

For installing a service, refer to chapter "4.4 Using A Systemd Service" of [boot.pdf](https://github.com/thagrol/Guides/blob/main/boot.pdf).

#### Pitfalls
- If your program is accessing files, make sure to set the ``WorkingDirectory`` to where your application resides on disk
- ``ExecStart`` needs to have absolut paths to both "dotnet" and your application. eg.: ``/home/pi/.dotnet/dotnet /home/pi/MyApp/myapp.dll`` 

## Useful links
- [.NET IoT Libraries documentation](https://learn.microsoft.com/en-us/dotnet/iot/)
- [Debug .NET apps on Raspberry Pi](https://learn.microsoft.com/en-us/dotnet/iot/debugging?source=recommendations)