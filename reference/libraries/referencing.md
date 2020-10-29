# Referencing libraries

VL Documents can reference 3 different types of dependencies:

* VL Nugets
* .NET Nugets
* Files

When a document references a dependency, it means that all public nodes in that dependency will be available to it via the NodeBrowser.

## Nugets
[NuGet](https://www.nuget.org) is the package managing system for .NET. Nugets are packages that can contain many .dll and/or .vl files that expose nodes to the referencing document.

### VL vs. .NET Nugets
A VL Nuget is a nuget specifically created for use with vl that won't work for any other [.NET language](https://en.wikipedia.org/wiki/List_of_CLI_languages). It is still a valid nuget in the original terms of NuGet but since it contains .vl documents it will not be useable outside of vl.

A .NET Nuget on the other hand is more generally targetting any .NET language.

You can reference either VL or .NET nugets via the menu by navigating to it and pressing the right mousebutton to toggle its selection:

![](../../images/libraries/vl-Dependencies-Nuget.png)
<center>Rightclick toggles adding/removing a nuget reference</center>

### Manage Nugets

* *Find on nuget.org* opens a webbrowser and lets you search for nugets in the online repository. Note that for now, after you've found what you're looking for, you'll still have to install a nuget manually via the commandline
* *Show installed* opens a file explorer at the path all your nugets are installed locally
* *Commandline* Opens a commandline from which you can run [nuget commands](https://docs.microsoft.com/en-us/nuget/tools/nuget-exe-cli-reference) like "install"

![](../../images/libraries/vl-Dependencies-ManageNugets-Commandline.png)
<center>Installing a nuget via the commandline</center>

> [!NOTE]
> Some packages may only be available as a "prerelease". To install those, add the commandline argument "-pre" when running "nuget install".

> [!NOTE]
> After installing a nuget via the commandline it is not yet automatically referenced by the current document! It is now merely available among the Nugets via the Dependencies menu. But if an installed nuget contains any help files, those will already show up in the HelpBrowser.

> [!NOTE]
> To update to the latest version of a nuget you have already installed, simply run the install command again. Your package directory can contain multiple versions of the same nuget and vl will always use the newest. Older versions have to be removed manually if no longer needed.

### Missing Nugets
If a nuget that is referenced by a document cannot be found,  it will be listed in red in the Dependencies menu. In such a case a rightclick on a red entry allows you to:

* *Install*: attempt to install from nuget.org. This will obviously only work if the nuget can be found online
* *Remove Reference*: remove this nuget as a dependency of this document

Note that you can rightlclick to select multiple red entries and then choose to apply either install or remove to all of them at once.

![](../../images/libraries/vl-Dependencies-MissingNuget.png)
<center>Missing nuget options</center>

### Unmanaged/Native dependencies
Some nugets are shipping with or depending on unmanaged/native .dlls which cannot be picked up by vl automatically since there isn't a pattern in the nuget specification as to how those should be handled. So in order to get such unmanaged dependencies of a nuget picked up, for now you'll have to add a search-path for vl via a batch file, like so:

    SET PATH=%PATH%;c:\path\to\nugets\nativelibs;
    vvvv.exe

## Files
A vl document can reference other .vl documents and managed .dll files.

### From Disk
Here are 3 ways to reference local files:

* Drop a .vl or .dll file onto a patch
* Press <span class="keyseq"><kbd>Ctrl</kbd><kbd>R</kbd></span> to select files via a file browser
* Via menu:Document[Dependencies > Files > Add Existing...]

![](../../images/libraries/vl-Dependencies-File.png)
<center>Add existing File as dependency</center>

#### Missing Files
Files that are showing up in red cannot be found on disk. You can Rightlcick to remove their reference. Note that you can also rightclick to select multiple files in a row and then apply "Remove" to all of them at once.

![](../../images/libraries/vl-Dependencies-File-Remove.png)
<center>Remove files</center>

### Libraries from the GAC (Global Assembly Cache)

By default .NET comes with a large number of assemblies that can be referenced. They are stored in the [GAC](https://docs.microsoft.com/en-us/dotnet/framework/app-domains/gac) on all machines that have .NET installed and can be referenced from there via:

* Press <span class="keyseq"><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>R</kbd></span>
* via `Document > Dependencies > Files > Add .NET Framework Assembly...`

In the dialog you need to double-click entries that you want to add as references.

![](../../images/libraries/vl-libraries-using-GACWindow.png)
<center>Use <span class="keyseq"><kbd>Ctrl</kbd><kbd>F</kbd></span> in this window to find libraries in the GAC</center>
