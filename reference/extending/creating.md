# Creating a new Library/Package/Nuget

The most consistent way to contribute a set of nodes for vvvv is by creating a library and shipping it in form of a [NuGet Package](https://nuget.org).

## Source and binary nugets
NuGet packages are typically installed in binary form. vvvv adds the idea of "source nugets" in that it allows you to directly reference the sources of a package just as if it was already a binary nuget. For vvvv to recognize a directory as a source-nuget it has to be found in a directory specified as a [package-repository](contributing.md#source-package-repositories) and follow these conventions:

## Innards of a nuget
For vvvv, a source-nuget in a directory is defined by two files:

* \<packName>\<packName>.nuspec
* \<packName>\<packName>.vl

e.g.:

<pre>
\VL.Devices.Leap\VL.Devices.Leap.nuspec
\VL.Devices.Leap\VL.Devices.Leap.vl
</pre>

The .nuspec file describes a nuget in a simple text format as defined by the [Nuspec Reference](http://docs.nuget.org/Create/Nuspec-Reference).

The .vl file acts as the central entry point when using the nuget. It defines all actual nodes that you get by using the nuget: everything has to be either patched in there or marked as a 'forwarded dependency'.

> NOTE
> Make sure non of the .vl files in a package has a referenced .csproj file! It would force the whole package and all packages that depend on it editable, meaning you'd lose the benefit of a [read-only package](../language/compilation.md#read-only-packages). 

In order for nugets to work with vvvv you have to provide the following structure where of course all the directories are optional and only needed when actually used by a specific nuget:

```
\lib              //for managed .dlls
\runtimes         //for native/un-managed .dlls *
\src              //for c# sources
<packName>.nuspec
<packName>.vl
```
\* See [Architecture Specific Folders](https://learn.microsoft.com/en-us/nuget/create-packages/supporting-multiple-target-frameworks#architecture-specific-folders)

## Creating and Publishing a NuGet
Once you're ready to create a NuGet .nupkg from your library, there are different options:

* [Use a build-service like GitHub Actions](publishing.md)
* [nuget.exe commandline](https://docs.microsoft.com/de-de/nuget/reference/nuget-exe-cli-reference)
* [NuGet Package Explorer UI](http://docs.nuget.org/Create/using-a-gui-to-build-packages)