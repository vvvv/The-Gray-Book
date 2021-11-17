# Extensions

Editor extensions are little tools that can be installed to enhance vvvv.

Examples:

- The Key & Mouse display: Shipping with vvvv. Displays key and mouse actions in the desktops lower left corner. Useful for recording tutorials or during live workshops. 
- [Pipette](https://www.nuget.org/packages/VL.Pipette.HDE/): A desktop color picker. Hover the mouse over any pixel of the desktop and press ESC to get the pixels color as a hex-string in the clipboard (which you can paste into any color IOBox)
- [TUIO Simulator and Monitor](https://www.nuget.org/packages/VL.TUIO.HDE/): Are you working on a TUIO multitouch project but don't have the touch device at hand for testing? This simulator and monitor will be your friends. 
- [Spout Monitor](https://www.nuget.org/packages/VL.SpoutMonitor.HDE/): Are you relying on textures coming in via [Spout](https://spout.zeal.co/) from other programs? Use this monitor to get a quick overview of textures currently shared on your system. 

## Finding and installing extensions
Extensions are distributed as NuGets and as such can be included with any VL NuGet you install. There are also NuGets that only include extensions. Those can easily be found on [nuget.org](https://www.nuget.org/packages?q=Tags%3A%22VL%22+hde).

Once found, extensions are [installed like any other NuGet](../libraries/referencing.md#manage-nugets). 

## Creating extensions

Extensions are only patches, so it is easy to create your own. See [Creating Editor Extensions](../extending/editor-extensions.md).