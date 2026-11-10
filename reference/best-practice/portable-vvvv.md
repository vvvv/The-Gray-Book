# Portable vvvv

vvvv is not entirely, but a quite [portable application](https://en.wikipedia.org/wiki/Portable_application). It has a single hard requirement to run:
- vvvv 8.x: [.NET 10 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/10.0)
- vvvv 7.x: [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)

<!--
Once this prerequisite is met on a target machine, you can get the [portable download](https://vvvv.org/download/) (~35mb as of 8.x) and unzip it anywhere on your disk (to ~100mb). No installer, just run vvvv.exe!
-->

**Optionally**, depending on which [packs](https://vvvv.org/packs) you'll be using, other dependencies may be required, like:
- When using any nodes from VL.Stride.Windows, you'll need [Microsoft Visual C++ Redistributables](https://aka.ms/vs/17/release/vc_redist.x64.exe) installed

Infos regarding which exact dependencies are required for a pack should be listed in the packs readme.

> [!NOTE]
> Running vvvv like this will also miss the following things the installer does for you:
> - Set a file type association
> - Make sure vvvv runs on the better GPU
> - Set a Windows Defender Exceptions for the vvvv installation folder


<!--
## File type association
In order to register .vl files to open with your portable vvvv.exe run:

    vvvv.exe --register-vl

Whenever the location of vvvv.exe changes, you'll have to re-run this command!

## Graphics
On dual-GPU systems, in order to make your portable vvvv.exe use the better GPU, run:

    vvvv.exe --highperformance

Whenever the location of vvvv.exe changes, you'll have to re-run this command!
-->