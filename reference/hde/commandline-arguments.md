# Commandline Arguments

The following is a listing of commandline arguments that can be used when starting vvvv.exe:

Description|Argument
-|-
Allow to run multiple instances of vvvv in parallel|`--allowmultiple` or`-m`
Do not start the patch runtime on startup|`--stoppedonstartup` 
Open a VL document on startup|`--open` or `-o` + path to file
Override loading the default settings|`--settings` + path to file
Do not load editor extension packages|`--noextensions`
Replace the default global location for NuGets|`--nuget-path` + path to directory
List of package repositories used by VL to lookup packages. Most useful, when [working on libraries](../extending/contributing.md).|`--package-repositories` + a semi-colon separated list of package repository directories
Tell the exporter to add a path to the generated NuGet.config file, which in turn will be used by dotnet to build the generated project|`--export-package-sources` + path to directory with .nupkg files
**As of 5.0:** Opt-out of the read-only default for libraries in order to work on them. For details, see [Editable Packages](../language/compilation.md#editable-packages).|`--editable-packages` + a semi-colon separated list of packages. Glob patterns are allowed, e.g. VL.IO.*
**As of 5.3:** Log issues during startup to %UserProfile%\Documents\vvvv\gamma\vvvv.log |`--log`
**As of 6.7:** Enable GPU debugging with VL.Stride. See [GPU Debugging](../libraries/3d/gpu-debugging.md).|`--debug-gpu`

Example:

    vvvv.exe -o "c:\myproject\foo.vl"

## Args.txt
A quick way to apply commandline arguments to vvvv is specifying them in an `args.txt` file in your Sketches folder:

    C:\Users\..\Documents\vvvv\gamma\Sketches\args.txt
