# Commandline Arguments

## vvvv.exe
The following is a listing of commandline arguments that can be used when starting vvvv.exe:

Description|Argument
-|-
Allow to run multiple instances of vvvv in parallel|`--allowmultiple` or`-m`
Do not start the patch runtime on startup|`--stoppedonstartup` 
Open a VL document on startup|`--open` or `-o` + path to file
Override loading the default settings|`--settings` + path to file
Do not load editor extension packages|`--noextensions`
Log issues during startup to %UserProfile%\Documents\vvvv\gamma\vvvv.log |`--log`
Enable GPU debugging with VL.Stride. See [GPU Debugging](../libraries/3d/gpu-debugging.md).| `--renderdoc` and `--debug-gpu`

Example:

    vvvv.exe -o "c:\myproject\foo.vl"


## vvvv.exe and vvvvc.exe
The following commandline arguments apply to both vvvv.exe and [vvvvc.exe](exporting.md#the-commandline-compiler):

Description|Argument
-|-
Replace the default global location for NuGets|`--nuget-path` + path to directory
List of package repositories used by VL to lookup packages. Most useful, when [working on libraries](../extending/contributing.md).|`--package-repositories` + a semi-colon separated list of package repository directories
List of paths to add to the generated NuGet.config file, which in turn will be used by dotnet to build the generated project|`--export-package-sources` + a semi-colon separated list of directories with .nupkg files
Opt-out of the read-only default for libraries in order to work on them. For details, see [Editable Packages](../language/compilation.md#editable-packages).|`--editable-packages` + a semi-colon separated list of packages. Glob patterns are allowed, e.g. VL.IO.*

## vvvvc.exe
The following commandline arguments apply to [vvvvc.exe](exporting.md#the-commandline-compiler) only:

Description|Argument
-|-
The verbosity of the output. |`-v`, `--verbosity` + Trace \| Debug \| *Information* \| Warning \| Error \| Critical \| None
Ignore VL compile errors (red nodes). |`--ignore-errors` + true \| *false*
Choose where the exported program and files will be created. Default = %UserProfile%\Documents\vvvv\gamma\Exports\AppName|`--output-directory` + path to directory
Choose an .ico file to be associated with the generated executable.|`--app-icon` path to the .ico file
Choose how assets will be referenced in the exported application. See [Asset behavior](exporting.md#asset-behavior). |`--asset-behavior` valid values: RelativeToDocument \| *RelativeToOutput*
Choose between Windows (GUI) or Console application. |`--output-type` + Exe \| *WinExe*
Choose the OS for which to create the output for. |`--target-os` + *Windows* \| Linux \| Any
Choose the CPU architecture to create the output for. |`--platform` + AnyCPU \| x86 \| *x64*
Whether or not the build directory (OutputDirectory/src) should be cleaned before doing the export. |`--clean` *true* \| false

## Args.txt
A quick way to apply commandline arguments to vvvv is specifying them in an `args.txt` file in your Sketches folder:

    C:\Users\..\Documents\vvvv\gamma\Sketches\args.txt
