# Managing NuGets

![](../../images/libraries/vl-Dependencies-ManageNugets-Commandline.png)
<center>Installing a nuget via the commandline</center>

## Find on nuget.org
Opens a webbrowser and lets you search for NuGets in the online repository. Note that for now, after you've found what you're looking for, you'll still have to install a nuget manually via the commandline

## Show installed
Opens a file explorer at the path all your nugets are installed locally. By default this is in your users directory:
 
    AppData\Local\vvvv\gamma\nugets

but can be changed using the commandline argument "nuget-path", see [Commandline Arguments](commandline-arguments.md).

## Commandline
Opens a commandline from which you can run [nuget commands](https://docs.microsoft.com/en-us/nuget/tools/nuget-exe-cli-reference) like e.g. "install":

    nuget install vl.opencv

> [!NOTE]
> Some packages may only be available as a "prerelease". To install those, add the commandline argument "-pre" when running "nuget install", e.g. `nuget install vl.audio -pre`

> [!NOTE]
> After installing a NuGet via the commandline it is not yet automatically referenced by the current document! It is now merely available among the NuGets via the Dependencies menu. But if an installed NuGet contains any help files, those will already show up in the [HelpBrowser](findinghelp.md#help-browser).

> [!NOTE]
> To update to the latest version of a NuGet you have already installed, simply run the install command again. Your package directory can contain multiple versions of the same nuget and VL will always use the newest. Older versions have to be removed manually if no longer needed.