# Debugging

## Stepping Execution

Description | Action
-|-
Pause/Step execution|<span class="keyseq"><kbd>F6</kbd></span>
Run|<span class="keyseq"><kbd>F5</kbd></span>

The execution of vl can be paused by pressing <span class="keyseq"><kbd>F6</kbd></span>. Pressing <span class="keyseq"><kbd>f6</kbd></span> repeatedly, causes the execution to make one step at a time. To get back into run mode press <span class="keyseq"><kbd>f5</kbd></span>.

You can also choose to auto-pause whenever an error occurs and jump to the node that threw the exception by setting *RuntimePauseOnError* to _true_ in the [Settings](settings.md) file.

## Timings
The tooltip shows timings if the *TooltipShowTimings* setting is set to _true_ in the [Settings](settings.md) file.

*Image:Tooltip shows timings on nodes*

*Image:Tooltip shows timings on Datatype definition*

## Tooltip
Hover a pin with the mouse to see a tooltip with its name and type.

*Image:Tooltip of a pin showing its name and type*

If the type is a collection, like Sequence, Spread,... you'll also see the collections number of elements in square brackets and the value of the first element in that collection.

*Image:Tooltip of a collection type*

> [!NOTE]
> If you're observing a pin in a patch that is instantiated multiple times there is no way yet to know to which instance this value belongs!

## IOBoxes
Use IOBoxes connected upstream to display incoming values. As with the tooltip, you'll also always only see the first value in a collection and the first instance of the value, in case there are multiple.

*Image:IOBox used to inspect an upstream value*

Spreadable IOBoxes are yet to come!

## Warnings and Errors

*Image:A node showing an error*

*Image:A link showing a warning*

*Image:A pin showing a warning*

To get rid of pin-warnings after you've acknowledged them, press <span class="keyseq"><kbd>Ctrl</kbd><kbd>E</kbd></span>.
