# Exporting Applications

vvvv allows you to export a patch into an executable, standalone program. In order to do so, open the Application Exporter via `Quad > Export...` or shortcut <span class="keyseq"><kbd>F10</kbd></span>.

![](../../images/hde/exportdialog.png)
<center>The Application Exporter</center>

## Application to export
Choose which application to export (in case you have multiple projects open at the same time).

## Output directory
Choose where the exported program and files will be created.

After a successful export, the output directory will contain a directory with the name of your application. Inside this directory you find the executable. To run the program on another PC you need to copy the whole content of this directory.

## Icon file
Choose an .ico file to be associated with the generated executable.

## Assets
Choose how assets will be referenced in the exported application:
* **Relative to document**: This option is most useful during development, to quickly test exports without having to worry about moving assets around. Assets will be referenced from where they are. 
* **Relative to output**: Use this option for final exports: It requires you to manually place your assets relative to the generated executable as they were relative to your root document during development. Like this the whole output can then be moved around and deployed to other PCs.
  
## Output type
Choose between Windows (GUI) or Console application. A Console app will open a Windows Console and run the Update operation for only one frame, then immediately Dispose itself. 

Use a __KeepAppAlive__ node to prevent this default behavior.

## Target OS
Choose the OS for which to create output for. If you choose *Any*, export will create executables for all available targets, otherwise only for the one selected OS.

## Platform target
Choose between CPU architectures x64 (64bit), x86 (32bit) or any.

## Options
### Console App
Choose between Windows or Console app. A Console app will open a windows Console and run the Update operation for only one frame, then immediately Dispose itself. 

Use a __KeepAppAlive__ node to prevent this default behavior.

### Clean Output
If active, removes artefacts of previous exports (ie. deletes the \src folder) before exporting. This will cause exports to take longer but also makes sure previous artefacts don't interfere with the new export.

## Export
* Press the __Export__ button and wait until the green progressbar is full and the __Run__ button becomes available
* Press __Run__ to test/run your program
* __Explore Output__: opens a file explorer at the specified output directory

### Source Directory
Next to the application directory you'll also find a `\src` directory. This is an artefact that vvvv creates during export and can be safely deleted.

> [!NOTE]
> .NET developers may find this interesting though, as it contains a completely valid c# solution of the exported project that can be opened, viewed and modified with Visual Studio.

## Dependencies
If your application is referencing VL.Stride, make sure the target PC also has the following dependencies installed:

* Microsoft Visual C++ Redistributables: [64bit](https://aka.ms/vs/17/release/vc_redist.x64.exe) or [32bit](https://aka.ms/vs/17/release/vc_redist.x86.exe)
* [.NET8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) (For FileTexture and FileModel nodes to work)

### For versions prior to 5.0
For applications exported with this older version of vvvv, you'll also have to install:
* [MSBuild Tools](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=16)

## Advanced build configuration
The build process can be customized in many details. Next to your main .vl file, place a .props file with the same name. This is actually an .xml file which you can configure to your needs using [MSBuild](https://docs.microsoft.com/en-us/visualstudio/msbuild/msbuild-concepts?view=vs-2022) syntax.

## Useful nodes
- Args [System] to access commandline arguments the app was called with
- Nodes from the advanced [System.Console] category

## Useful libraries
- [Terminal.Gui](https://github.com/migueldeicaza/gui.cs) for creating console applications with a text based UI

## Configuring a renderers appearance

Referencing the nuget VL.CoreLib.Windows adds the following nodes:

* SetWindowState and WindowState
* SetWindowMode

These allow you to configure the renderers caption, controlbox, framing and more.

## Code Signing
In order to have your executables to run without a warning on other PCs, you need to sign them with a certificate using [SignTool](https://docs.microsoft.com/en-us/windows/win32/seccrypto/signtool).

## Troubleshooting

### Exported app doesn't run on target PC
Chances are that you're missing a dependency on the target PC. See [Dependencies](#dependencies) above.

### Export fails
In case the export fails, the console will be opened to show there was an error.

![](../../images/hde/exporting-74bc1.png)
<center>The Application Exporter reporting a problem</center>

#### Export fails with error MSB3073
This error [originates from Stride](https://github.com/stride3d/stride/issues/2232). If you're facing this issue, please try this workaround:
- From within vvvv open the NuGet command line `Quad menu -> Manage NuGets -> Commandline`
- From the commandline execute:
  - `nuget install System.Security.Cryptography.Pkcs -version 6.0.4`
  - `copy System.Security.Cryptography.Pkcs.6.0.4\lib\net6.0\System.Security.Cryptography.Pkcs.dll %userprofile%\.nuget\packages\stride.core.assets.compilerapp\4.2.0.2121\lib\net8.0`
- Now try the export again

#### Export fails with "..Found multiple publish output files with the same relative path.."
If the file in question is `ijwhost.dll` it might work to specify:

    <ErrorOnDuplicatePublishOutputFiles>false</ErrorOnDuplicatePublishOutputFiles>

in the .props file you can edit via `Advanced build configuration` as [explained here](https://stackoverflow.com/questions/69919664/publish-error-found-multiple-publish-output-files-with-the-same-relative-path).

#### Export fails with NuGet dependency issues
Read the red error message carefully. There will be a reason given for the problem you're facing. If that reason hints at incompatible packages, you may have accumulated packages in your NuGet folder over time, which prevent the export from succeeding. In such a case try starting from a clean NuGet folder. Here are the steps to do so:
- Open your NuGet folder: `Quad menu -> Manage NuGets -> Show Installed` opens your `C:\Users\..\AppData\Local\vvvv\gamma\nugets` folder
- Close vvvv
- Go one level up from your NuGet folder and rename it so you have: `C:\Users\..\AppData\Local\vvvv\gamma\nugets_backup`
- Open vvvv and your patch
- The document menu will be red, meaning it's missing referenced dependencies
- Click the `Document menu -> Dependencies` and rightclick to select all missing dependencies, then choose: "Install exact referenced version"
- Wait for all packages to be installed again, then try the export again

#### Export fails with "..could not copy file.."
This may happen when you have packages referenced as source repository. To still get a successful export in such cases you can try:
- In the export log find the line starting with "dotnet publish -c Release" and copy the whole commandline
- close vvvv
- open a commandline (cmd.exe)
- paste the command and run it

#### Export fails With vvvv gamma 2021.4.x
There is a known incompatibility with newer versions of MSBuild tools than what vvvv expects. So in order to make sure the right version of MSBuild tools is installed do as follows:
- Uninstall all versions of Visual Studio and Build Tools you can find on your machine 
- Then run the vvvv 2021.4.x installer again with having the “Build Tools” checkbox enabled

#### None of the above
Please send us the console output by pressing "Copy To Clipboard" and pasting it to us via [the forum](https://forum.vvvv.org/c/vvvv-gamma/bug/31).
