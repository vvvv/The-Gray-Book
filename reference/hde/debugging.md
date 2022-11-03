# Debugging

## Stepping Execution

Description | Action
-|-
Run|<span class="keyseq"><kbd>F5</kbd></span>
Step execution|<span class="keyseq"><kbd>F6</kbd></span>
Pause execution|<span class="keyseq"><kbd>F7</kbd></span>
Stop execution|<span class="keyseq"><kbd>F8</kbd></span>
Restart|<span class="keyseq"><kbd>F9</kbd></span>

The execution of VL can be paused by pressing <span class="keyseq"><kbd>F7</kbd></span>. Pressing <span class="keyseq"><kbd>F6</kbd></span> repeatedly, causes the execution to make one step at a time. To get back into run mode press <span class="keyseq"><kbd>F5</kbd></span>.

You can also choose to auto-pause whenever an error occurs and jump to the node that threw the exception by activating the *Pause on error* [Setting](settings.md).

## IOBoxes
Use [IOBoxes](../language/ioboxes.md) connected upstream to display incoming values. 

*Image:IOBox used to inspect an upstream value*

## Tooltips
Hover a pin with the mouse to see a tooltip with its name and type.

*Image:Tooltip of a pin showing its name and type*

If the type is a collection, like Sequence, Spread,... you'll also see the collections number of elements in square brackets and the value of the first three elements in that collection.

*Image:Tooltip of a collection type*

> [!NOTE]
> If you're observing a pin in a patch that is instantiated multiple times there is no way yet to know to which instance this value belongs!

## Timings
The tooltip shows timings when *Show Timings* is activated in the [Settings](settings.md).

*Image:Tooltip shows timings on nodes*

*Image:Tooltip shows timings on Datatype definition*

## Write to Console
The Log window can be opened via `Quad > Windows > Log` or by pressing <span class="keyseq"><kbd>Ctrl</kbd><kbd>F1</kbd></span>.

Use the advanced `Write` and `WriteLine` nodes from the `System.Console` category to write debug infos to the Log.

Pressing the <kbd>Backspace</kbd> key with the Console focused clears it.

## Warnings and Errors

*Image:A node showing an error*

*Image:A link showing a warning*

*Image:A pin showing a warning*

To get rid of pin-warnings after you've acknowledged them, press <span class="keyseq"><kbd>Ctrl</kbd><kbd>E</kbd></span>.

## Attaching Visual Studio
In case you encounter errors that are not traceable through techniques mentioned above, you can also attach to your patches with Visual Studio.

> [!NOTE]
> Beware, this is not meant for the casual user!

But if you're quite familiar with C# programming, you can do the following:
- Start vvvv.exe with the `--debug` commandline argument
- Run Visual Studio 
- Attach to vvvv.exe
- Wait for the exception to occur
- This will bring up the C# code of your patch and jump to the location where the error occured. Here you can also set break points. This may help you figure out the source of the problem. 
