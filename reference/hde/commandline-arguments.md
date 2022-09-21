# Commandline Arguments

The following is a listing of commandline arguments that can be used when starting vvvv.exe:

Description|Argument
-|-
Allow to run multiple instances of vvvv in parallel|`--allowmultiple` or`-m`
Open a VL document on startup|`--open` or `-o` + path to file
Override loading the default settings|`--settings` + path to file
Do not load editor extension packages|`--noextensions`
List of package repositories used by VL to lookup packages. Most useful, when [working on libraries](../extending/contributing.md).|`--package-repositories` + a semi-colon separated list of package repository directories
Prevent pre-compilation of packages in 2022.5|`--disable-package-compiler`

Example:

    vvvv.exe -o "c:\myproject\foo.vl"
