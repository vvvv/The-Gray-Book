# Graphics Cards

vvvv is always only using one GPU! This means that you cannot simply add a second GPU to a PC, move a render window to it and assume that this window is then running on that second GPU!

If your system has multiple GPUs, you can decide for each program (including vvvv.exe or any program you [exported](../../hde/exporting.md)), which GPU it is running on. This is done by [assigning a graphics performance preference](https://www.ghacks.net/2021/10/29/how-to-assign-graphics-performance-preferences-to-windows-11-programs/) for it.

An exception to the single-GPU rule is, when using multiple GPUs in [SLI](https://www.nvidia.com/en-gb/geforce/technologies/sli/) mode.