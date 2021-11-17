# Editor Extensions

Editor extensions allow you to extend the vvvv editor with your own tools. Examples of such extensions are:

- The Key & Mouse display (shipping with vvvv)
- TUIO Simulator & Monitor (install via VL.TUIO.HDE nuget)
- Spout Monitor (install via VL.SpoutMonitor.HDE nuget)
- Desktop Pipette (install via VL.Pipette.HDE nuget)

Extensions can be entirely patched in vvvv and assigned a shortcut so they can be called by the user at anytime. You can find all currently loaded extensions in the main menu under:

`Quad > Extensions`

## Creating an extension

Extensions are ordinary VL patches, with the one distinctive feature, that they are saved in a file ending in `.HDE.vl`, like:

`VL.MyExtension.HDE.vl`

Any such file that you have open in vvvv, is already running as an editor extension. You'll now most likely want to be able to invoke your extension by a shortcut or menu-entry. For this you'll have to register a command which you can do via the `Command` node that is available via referencing the `VL.HDE` nuget. 

Or simply start from the template:

## Creating an extension from the template

From the main menu choose:

`Quad > Extensions > New Extension...`

and specify the destination and filename for your new extension .vl document in the file save dialog.

> [!NOTE]
> The filename must end in `.HDE.vl` in order for the file to be a valid editor extension.

This copies the template to the given destination and opens the document for you, which should look like this:

![](../../images/reference/extending/extension-command.png)

Note the `Command` node here that allows you to register a command with the editor, by specifying:
- A label for the menu entry
- Whether the menu entry is visible
- A shortcut

Now check the output of the `Command` that will trigger whenever the command is executed via shortcut or click on menu entry.

You take it from here. A classic usecase will be showing/hiding an editor extensions window on repeated executions of the command. But as within any other patch, you're free to run even `format c:` here, so as always, handle with care...

## Multiple extensions per .HDE.vl file
If that is what you need, then yes, simply register multiple commands in your document that trigger individual extensions.

Note though, that should one of your extensions have a runtime error, all the others running in the same document, might be affected as well. 

## Windows

An extension doesn't necessarily have to have a window at all (e.g. it could just run an operation on a bunch of selected nodes...). It can also have its very own idea of a window. But in many cases you'll just want to use a ready window that comes with `VL.HDE`. For now these two are available:

* SkiaWindow: A slimmed down version of a Renderer [Skia]
* SkiaWindowTopMost: Same as above, only doesn't get the focus and is always topmost (e.g. used in the Key/Mouse Display extension)

### Window Bounds

As of now there is no way to tab or dock multiple extension windows. Setting a windows bounds is the best we can do for now. Yes, with many extensions open, this will get messy. Let's see...

In order to set the initial window bounds when an extension window opens, set the `Bounds` input on the SkiaWindow nodes. For convenience checkout out:

* WindowBounds: Positions the window right next to the editor
* WindowBounds (EditorHeight): Same as above but also sets its height to be the same as the main window (e.g. used in the HelpBrowser)

## Interfacing with vvvv
The vvvv API gives you access to hovered and selected nodes and allows you to read and write pins. 
* In the HelpBrowser check the `API` section for some examples. 
* All the API nodes are available via the `VL.Lang` repository in the `Session` category.

## Settings
For some extensions it will be interesting to have them configurable via the [Settings](../hde/settings.md). This is not yet possible though. 

## Packaging extensions in a NuGet
### Extension-only NuGet
If you want to release a nuget that only contains an extension, its ID has to end in `.HDE`, e.g.:

`VL.MyExtension.HDE`

which in turn requires the .vl document inside that nuget to be following the same naming and be called:

`VL.MyExtension.HDE.vl`

### Extension as part of a NuGet
Extensions can also be included with any NuGet that primarily offers other functionality. In such a case, the name of the extension document has to be identical to the package ID but with the `.HDE` suffix added. For example a NuGet named `VL.MyPackage` would contain at least these two documents:
```c#
VL.MyPackage.vl // main doc
VL.MyPackage.HDE.vl // extension doc
```

## Restarting all extensions
Especially during development it may happen that you crash an extension and it needs a restart. You can restart all extensions at once using the shortcut <span class="keyseq"><kbd>Shift</kbd><kbd>F9</kbd></span>.