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
List of package repositories used by VL to lookup packages. Most useful, when [working on libraries](../extending/contributing.md)|`--package-repositories` + a semi-colon separated list of package repository directories
**As of 5.0:** Opt-out of the read-only default for libraries in order to work on them|`--editable-packages` + a semi-colon separated list of packages. Glob patterns are allowed, e.g. VL.IO.*

Example:

    vvvv.exe -o "c:\myproject\foo.vl"

## Args.txt
A quick way to apply commandline arguments to vvvv is specifying them in an `args.txt` file in your Sketches folder:

    C:\Users\..\Documents\vvvv\gamma\Sketches\args.txt
