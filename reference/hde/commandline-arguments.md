# Commandline Arguments

The following is a listing of commandline arguments that can be used when starting vvvv.exe:

Description|Argument
-|-
Allow to run multiple instances of vvvv in parallel|`--allowmultiple` or`-m`
Do not start the patch runtime on startup|`--stoppedonstartup` 
Open a VL document on startup|`--open` or `-o` + path to file
Override loading the default settings|`--settings` + path to file
Do not load editor extension packages|`--noextensions`
List of package repositories used by VL to lookup packages. Most useful, when [working on libraries](../extending/contributing.md).|`--package-repositories` + a semi-colon separated list of package repository directories
Replace the default global location for NuGets|`--nuget-path` + path to directory
**As of 2022.5:** Disables the package compiler. All packages will be loaded from source.|`--disable-package-compiler`
**As of 2022.5:** Opt-in to also compile source packages (which by default would not be compiled). Useful for developers who want to check how a package referenced as source would behave when compiled.|`--compile-source-packages`

Example:

    vvvv.exe -o "c:\myproject\foo.vl"
