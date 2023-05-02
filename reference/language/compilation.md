# Compilation

Everytime you make a change in a patch, vvvv compiles it on-the-fly and updates your running programm accordingly. We call this "Hotswap" and yes, this is similar to what you may know as [.NET Hot Reload](https://devblogs.microsoft.com/dotnet/introducing-net-hot-reload/). Only that in vvvv it happens automatically, always, and you'll most often not notice it. 

When the compiler is active, you'll see a little indicator in the top left corner of the editor, right below the Quad menu:

Color of Indicator|Meaning
-|-
Gray|Building Symbols
Orange|Emitting C# code

On-the-fly compilation, while often not noticable at all, can cause severe lag, when working on large projects or libraries if all .vl files have to be considered for changes all the time. Therefore vvvv gamma 5.0 introduced the idea of read-only packages.

## Read-only packages
Patches in read-only packages are excluded from on-the-fly compilation. Like this, they run optimized in the same way as when you export them. Apart from faster execution, the fact that the compiler doesn't have to worry about them saves CPU cycles while working and also leads to a smaller overall memory footprint of vvvv which in turn removes stress from the garbage collector. 

### Restrictions in read-only packages
Patches part of a read-only package can be recognized by this banner:

![](../../images/reference/language/readonly-package-banner.png)

In read-only patches, beware of the following restrictions:
- Tooltips will not show any data flowing in the patch
- Any modification you make is not being taken into account

If you do make changes and save the patch, those changes will only be detected on next startup of vvvv, which will trigger a one-time re-compilation of the patch. 

### What makes a package read-only?
By default all packages are read-only. Like this the startup time and memory usage of vvvv is significantly improved.

This includes:
- All packages shipping with vvvv
- All [packages you install](../hde/managing-nugets.md) in addition and reference in your project. This makes sense since you're never supposed to change those other than by getting a different version of a NuGet
- All packages you reference from a [source package-repository](../extending/contributing.md#source-package-repositories)

### Editable packages
The most likely reason you'd want to opt out of the read-only default for certain packages, is when you have referenced them via a [source package-repository](../extending/contributing.md#source-package-repositories) to actually work on them. 

In this case you need to use the [commandline argument](../hde/commandline-arguments.md) `editable-packages` when starting vvvv. Here is an example to opt out of precompilation for all packages starting with "VL.Devices" and the package "VL.Audio": 

    --editable-packages VL.Devices*;VL.Audio

> [!NOTE]
> In addition this makes any package editable that depends on those you specify!
