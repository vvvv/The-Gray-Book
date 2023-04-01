# Compilation

Everytime you make a change in a patch, vvvv compiles it on-the-fly and updates your running programm accordingly. We call this "Hotswap" and yes, this is similar to what you may know as [.NET Hot Reload](https://devblogs.microsoft.com/dotnet/introducing-net-hot-reload/). Only that in vvvv it happens automatically, always, and you'll most often not notice it. 

When the compiler is active, you'll see a little indicator in the top left corner of the editor, right below the Quad menu:

Color of Indicator|Meaning
-|-
Gray|The patch is being compiled to C#
Orange|The C# code is being compiled to [IL](https://en.wikipedia.org/wiki/Common_Intermediate_Language) code

## Hotswap limitations
There are certain scenarios though, where the Hotswap can not be performed smoothly and you'll notice an interruption in your running patch, like loosing state.

Thorough Hotswap setting??

## Precompilation
On-the-fly compilation, while often not noticable at all, can cause severe lag, when working on large projects or libraries if all .vl files have to be considered for changes all the time. Therefore vvvv gamma 5.0 introduced the option to "precompile" patches. 

### Benefits of precompilation
Precompilation makes patches run optimized in the same way as when you export them. The more patches run precompiled, the fewer patches have to be considered by the on-the-fly compiler, which saves CPU cycles while working and also leads to a smaller overall memory footprint of vvvv which in turn removes stress from the garbage collector. 

### What is being precompiled?
"Precompiled" is now the default for all libraries shipping with vvvv. Like this the startup time and memory usage of vvvv is significantly improved.

But also the .vl documents of any NuGet you reference are now being compiled on first use, which makes sense since you're never supposed to change those other than by getting a different version of a NuGet. 

Finally vvvv now also compiles .vl documents of any library from a [source package-repository](../extending/contributing.md#source-package-repositories) you reference.

### Restrictions in precompiled patches

Precompiled patches can be recognized by having a banner like this:

**image**

In precompiled patches, beware of the following restrictions:
- Tooltips will not show any data flowing in the patch
- Any modification you make is not being taken into account

If you do make changes and save the patch, those changes will be detected on next startup, which will trigger a one-time re-compilation of the patch. 

## Opting out of precompilation
The most likely reason you'd want to opt out of precompilation for certain libraries, is when you have referenced them via a [source package-repository](../extending/contributing.md#source-package-repositories) to actually work on them. 

In this case you need to use the [commandline argument](../hde/commandline-arguments.md) `editable-packages` when starting vvvv. Here is an example to opt out of precompilation for all libraries starting with "VL.Devices" and the library "VL.Audio": 

    --editable-packages VL.Devices*;VL.Audio