# Keyboard Shortcuts

## Quad Menu
Description | Action
-|-
New Document|<span class="keyseq"><kbd>Ctrl</kbd><kbd>N</kbd></span>
Open Document|<span class="keyseq"><kbd>Ctrl</kbd><kbd>O</kbd></span>
Save All Documents|<span class="keyseq"><kbd>Alt</kbd><kbd>Ctrl</kbd><kbd>S</kbd></span>
Run|<span class="keyseq"><kbd>F5</kbd></span>
Step|<span class="keyseq"><kbd>F6</kbd></span>
Pause|<span class="keyseq"><kbd>F7</kbd></span>
Stop|<span class="keyseq"><kbd>F8</kbd></span>
Export...|<span class="keyseq"><kbd>F9</kbd></span>

## Document Menu
Description|Action
-|-
Open Application Patch|<span class="keyseq"><kbd>Alt</kbd><kbd>A</kbd></span>
Open Definitions Patch|<span class="keyseq"><kbd>Alt</kbd><kbd>Shift</kbd><kbd>A</kbd></span>
New Patch (=Process Node at Cursor)|<span class="keyseq"><kbd>Ctrl</kbd><kbd>P</kbd></span>
New Process Definition in Definitions|<span class="keyseq"><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>P</kbd></span>
Save Active Document|<span class="keyseq"><kbd>Ctrl</kbd><kbd>S</kbd></span>
Save Active Document As...|<span class="keyseq"><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>S</kbd></span>
Reload Active Document discarding unsaved changes|<span class="keyseq"><kbd>Ctrl</kbd><kbd>R</kbd></span>
Close Active Document|<span class="keyseq"><kbd>Ctrl</kbd><kbd>W</kbd></span>
Show Active Document in Explorer|<span class="keyseq"><kbd>Alt</kbd><kbd>E</kbd></span>
View Active Document as Text|<span class="keyseq"><kbd>Alt</kbd><kbd>Shift</kbd><kbd>E</kbd></span>
Add Existing Dependency|<span class="keyseq"><kbd>Ctrl</kbd><kbd>E</kbd></span>
Add .NET Framework Assembly|<span class="keyseq"><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>E</kbd></span>

## Basics
Description|Action
-|-
General _middleclick_ alternative|<span class="keyseq"><kbd>ALT</kbd></span> + leftclick
Navigate back in Tab history|<span class="keyseq"><kbd>Ctrl</kbd><kbd><</kbd></span> or <span class="keyseq"><kbd>Alt</kbd><kbd>Left</kbd></span>
Navigate forward in Tab history|<span class="keyseq"><kbd>Ctrl</kbd><kbd>></kbd></span>  or <span class="keyseq"><kbd>Alt</kbd><kbd>Right</kbd></span>
Navigate one level Up in application|<span class="keyseq"><kbd>Ctrl</kbd><kbd>^</kbd></span> (where <span class="keyseq"><kbd>^</kbd></span> is the Key below <span class="keyseq"><kbd>ESC</kbd></span>)
Navigate one level Up in definition|<span class="keyseq"><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>^</kbd></span> (where <span class="keyseq"><kbd>^</kbd></span> is the Key below <span class="keyseq"><kbd>ESC</kbd></span>)
Copy screenshot of active patch to clipboard and save it as PNG next to its .vl document|<span class="keyseq"><kbd>Ctrl</kbd><kbd>2</kbd></span>
Take screenshot of active patch and save it as SVG next to its .vl document|<span class="keyseq"><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>2</kbd></span>
Duplicate selected nodes/pads keeping|<span class="keyseq"><kbd>Ctrl</kbd><kbd>D</kbd></span>
Duplicate selected nodes/pads keeping incoming links|<span class="keyseq"><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>D</kbd></span>

## Pan & Zoom
Description|Action
-|-
Pan the patch|Rightdrag in an empty area
Zoom the patch|Mousewheel or <span class="keyseq"><kbd>Ctrl</kbd><kbd>+</kbd></span> & <span class="keyseq"><kbd>Ctrl</kbd><kbd>-</kbd></span>
Reset pan and zoom of the patch|<span class="keyseq"><kbd>Ctrl</kbd><kbd>0</kbd></span>
Zoom the tooltip|<span class="keyseq"><kbd>Ctrl</kbd></span> while using the Mousewheel

## Alternative Pan & Zoom
If you prefer to use the mousewheel for panning vertically instead of zooming change the "Mouse wheel zooms" setting to false to get the following behavior:

Description|Action
-|-
Pan the patch vertically|Mousewheel
Pan the patch horizontally|<span class="keyseq"><kbd>Shift</kbd></span> + Mousewheel
Zoom the patch|<span class="keyseq"><kbd>Ctrl</kbd></span> + Mousewheel

## Selecting elements in a patch
Description|Action
-|-
Select an Element|left click
Add an element to the selection|<span class="keyseq"><kbd>Ctrl</kbd></span> + leftclick
Force to include links in a marquee selection despite nodes or pads are already part of it|<span class="keyseq"><kbd>Space</kbd></span>
Force to only select links when making a marquee selection|<span class="keyseq"><kbd>L</kbd></span>

## Nodes
Description|Action
-|-
Bring up the NodeBrowser to choose node to create|Double leftclick in an empty area of a patch or on a link
Replace a node|Double leftclick it to bring up the NodeBrowser and choose a different node. You may need to press ESC to remove existing choices
Move a node (or selection of nodes) into or out of a region|Press <span class="keyseq"><kbd>Space</kbd></span> while draging a node
Assign an operation-node to an operation|Rightclick -> Assign -> (operation)
Remove the operation-assignment of a node|Rightclick -> Assign -> Clear assignment
Align selected nodes|<span class="keyseq"><kbd>Ctrl</kbd><kbd>L</kbd></span>
Line up selected nodes|<span class="keyseq"><kbd>Alt</kbd><kbd>L</kbd></span>
Evenly distribute selected nodes between left/top-most and right/bottom-most node in selection|<span class="keyseq"><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>L</kbd></span>
Evenly distribute selected nodes taking the gap between the left/top-most two nodes as a measure for the rest|<span class="keyseq"><kbd>Ctrl</kbd><kbd>ALT</kbd><kbd>L</kbd></span>
Increase count of input pins for nodes like +, Cons, ...|<span class="keyseq"><kbd>Ctrl</kbd><kbd>+</kbd></span>
Decrease count of input pins for nodes like +, Cons, ...|<span class="keyseq"><kbd>Ctrl</kbd><kbd>-</kbd></span>
Expose Pins|<span class="keyseq"><kbd>Ctrl</kbd><kbd>K</kbd></span>
Move selected nodes|<span class="keyseq"><kbd>Arrows</kbd></span>
Move selected nodes faster|<span class="keyseq"><kbd>Shift</kbd><kbd>Arrows</kbd></span>
Assign a [Help Flag](../extending/providing-help.md#help-flags)|<span class="keyseq"><kbd>Ctrl</kbd><kbd>H</kbd></span>

## Pin Groups

In general, the <kbd>Shift</kbd> key means second group and the <kbd>Alt</kbd> key means output group. However, if the node has no input pin groups, the <kbd>Alt</kbd> key is optional. If the node has more pin groups, the additional ones can be found in the context menu of the node.

Description|Action
-|-
(Input Group 1) Add Pin|<span class="keyseq"><kbd>Ctrl</kbd><kbd>+</kbd></span>
(Input Group 1) Remove Pin|<span class="keyseq"><kbd>Ctrl</kbd><kbd>-</kbd></span>
(Input Group 2) Add Pin|<span class="keyseq"><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>+</kbd></span>
(Input Group 2) Remove Pin|<span class="keyseq"><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>-</kbd></span>
(Output Group 1) Add Pin|<span class="keyseq"><kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>+</kbd></span>
(Output Group 1) Remove Pin|<span class="keyseq"><kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>-</kbd></span>
(Output Group 2) Add Pin|<span class="keyseq"><kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>Shift</kbd><kbd>+</kbd></span>
(Output Group 2) Remove Pin|<span class="keyseq"><kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>Shift</kbd><kbd>-</kbd></span>

## Pads
Description|Action
-|-
Create via Nodebrowser|double leftclick in patch, type name of pad, choose _Pad_
Create while linking|Finish with <span class="keyseq"><kbd>Shift</kbd></span> + leftclick in the patch
Bake current type annotation|<span class="keyseq"><kbd>Ctrl</kbd><kbd>T</kbd></span>
Clear type annotation|<span class="keyseq"><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>T</kbd></span>
Create Create/Split operations|<span class="keyseq"><kbd>Ctrl</kbd><kbd>K</kbd></span>
Create property accessors operations (Get/Set)|<span class="keyseq"><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>K</kbd></span>

## IOBoxes
Description|Action
-|-
Create via Nodebrowser|right doubleclick in the patch
Create while linking|Middleclick (or <span class="keyseq"><kbd>ALT</kbd></span> + leftclick) in the patch
Reset to default|<span class="keyseq"><kbd>ALT</kbd></span> + rightclick
Edit the value|Double leftclick
*IOBox (Value)*: Change value|Rightdrag up/down
*IOBox (Value)*: Change value finer|<span class="keyseq"><kbd>Ctrl</kbd></span> + Rightdrag up/down to change value with stepsize divided by 10
*IOBox (Value)*: Change value finer|<span class="keyseq"><kbd>Shift</kbd></span> + Rightdrag up/down to change value with stepsize divided by 10
*IOBox (Value)*: Change value coarser|<span class="keyseq"><kbd>Alt</kbd></span> + Rightdrag up/down and combine with <span class="keyseq"><kbd>Ctrl</kbd></span> and/or <span class="keyseq"><kbd>Shift</kbd></span> to multiply stepsize by 10 or 100
*IOBox (String)*: Bring up FileOpenDialog|<span class="keyseq"><kbd>Ctrl</kbd></span> + Rightclick
*IOBox (String)*: Bring up DirectoryOpenDialog|<span class="keyseq"><kbd>Shift</kbd></span> + Rightclick
*IOBox (Path)*: Bring up FileOpenDialog|Rightclick
*IOBox (Path)*: Bring up DirectoryOpenDialog|<span class="keyseq"><kbd>Shift</kbd></span> + Rightclick
*IOBox (Color)*: Change brightness|Rightdrag up/down
*IOBox (Color)*: Change hue|Rightdrag left/right
*IOBox (Color)*: Change saturation|<span class="keyseq"><kbd>Ctrl</kbd></span> + Rightdrag up/down
*IOBox (Color)*: Change the alpha channel|<span class="keyseq"><kbd>Shift</kbd></span> + Rightdrag up/down

## Links
Description|Action
-|-
Create an IOBox while linking|Finish with middleclick (or <span class="keyseq"><kbd>Alt</kbd></span> + leftclick) in the patch
Create an input or output pin while linking|Finish with <span class="keyseq"><kbd>Ctrl</kbd></span> + leftclick in the patch
Create a pad while linking|Finish with <span class="keyseq"><kbd>Shift</kbd></span> + leftclick in the patch
Create a node while linking|Finish with a double leftclick
Insert a link point while linking|Click in an empty area in a patch
Insert a link point into an existing link|Press down on the link and drag a new point away
Remove a link point from an existing link|Click to select the point and then press <span class="keyseq"><kbd>Delete</kbd></span>
Create an accumulator input or output proxy in IF or LOOP while linking|Finish with <span class="keyseq"><kbd>Ctrl</kbd></span> + leftclick in the region
Create a splicer input or output proxy in LOOP while linking|Finish with <span class="keyseq"><kbd>Ctrl</kbd><kbd>Shift</kbd></span> + leftclick in the region
Insert a IOBox into an existing link|Double rightclick the link
Delete a link|Middleclick it or select it and press <span class="keyseq"><kbd>Delete</kbd></span>
Start a new link from the same source after finishing a connection|Finish with middleclick
Assign a link to an operation|Rightclick -> Assign -> (operation)
Remove the operation-assignment of a link|Rightclick -> Assign -> Clear assignment
Insert a pad into an existing link|<span class="keyseq"><kbd>Shift</kbd></span> + double leftclick or double rightclick the link
Insert a node into an existing link|Double leftclick the link
Show a links tooltip to see its current value and the operation it is assigned to|Press <span class="keyseq"><kbd>Ctrl</kbd></span> while hovering the link
Force a connection to a datahub that would otherwise not accept it|<span class="keyseq"><kbd>Space</kbd></span>
Force to include links in a marquee selection despite nodes or pads are already part of it|<span class="keyseq"><kbd>SPACE</kbd></span>

## Finders
For more details, see [Finders](finders.md).

Description|Action
-|-
Look for strings in the active patch|<span class="keyseq"><kbd>Ctrl</kbd><kbd>F</kbd></span>
Globally search for symbols (documents, patches, operations, pads)|<span class="keyseq"><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>F</kbd> or <kbd>Ctrl</kbd><kbd>,</kbd></span>

## Frames
Description|Action
-|-
Create a Frame from Marquee selection|Hold <span class="keyseq"><kbd>Alt</kbd></span> while making a marquee selection
Create a Frame in viewspace from Marquee selection|Hold <span class="keyseq"><kbd>Alt</kbd><kbd>Shift</kbd></span> while making a marquee selection
Force to include frames in a marquee selection despite nodes or pads are already part of it|<span class="keyseq"><kbd>SPACE</kbd></span>
Surround selected nodes with a frame|<span class="keyseq"><kbd>Alt</kbd><kbd>F</kbd></span>
Surround selected nodes with a frame in viewspace|<span class="keyseq"><kbd>Alt</kbd><kbd>Shift</kbd><kbd>F</kbd></span>
Toggle visibility of all frames in a patch|<span class="keyseq"><kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>F</kbd></span>
Take a screenshot of the selected frame|<span class="keyseq"><kbd>Ctrl</kbd><kbd>2</kbd></span>
Take a screenshot of all frames in a document at once|<span class="keyseq"><kbd>Ctrl</kbd><kbd>5</kbd></span>
Start/stop a screenshot recording of the selected frame|<span class="keyseq"><kbd>Ctrl</kbd><kbd>4</kbd></span>
Screenshot of marquee selection to clipboard|Hold <span class="keyseq"><kbd>S</kbd></span> while making a marquee selection
  
## Tooltips
Description|Action
-|-
Copy content when showing an error|<span class="keyseq"><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>C</kbd></span>
Toggle showing more infos for infos, warnings or errors|<span class="keyseq"><kbd>Space</kbd></span>
Detach from currently inspected instance|<span class="keyseq"><kbd>Tab</kbd></span>

## Runtime
Description|Action
-|-
Run|<span class="keyseq"><kbd>F5</kbd></span>
Step|<span class="keyseq"><kbd>F6</kbd></span>
Pause|<span class="keyseq"><kbd>F7</kbd></span>
Stop|<span class="keyseq"><kbd>F8</kbd></span>
Restart|<span class="keyseq"><kbd>F9</kbd></span>
Restart editor extensions|<span class="keyseq"><kbd>Shift</kbd><kbd>F9</kbd></span>

## Windows
Description|Action
-|-
Help Browser|<span class="keyseq"><kbd>F1</kbd></span>
Inspector|<span class="keyseq"><kbd>Ctrl</kbd><kbd>I</kbd></span>
Debug Views|<span class="keyseq"><kbd>Ctrl</kbd><kbd>F2</kbd></span>
Gobal Channels|<span class="keyseq"><kbd>Ctrl</kbd><kbd>F3</kbd></span>
Application Exporter|<span class="keyseq"><kbd>F10</kbd></span>
Patch Documentation|<span class="keyseq"><kbd>Ctrl</kbd><kbd>M</kbd></span>
Solution Explorer|<span class="keyseq"><kbd>Ctrl</kbd><kbd>J</kbd></span>
Make window topmost|<span class="keyseq"><kbd>Ctrl</kbd><kbd>T</kbd></span>

## VL.Stride
The following shortcuts are working with either a VL.Stride SceneWindow or RenderWindow active:

Description|Action
-|-
Copy content of render window to clipboard|<span class="keyseq"><kbd>Ctrl</kbd><kbd>2</kbd></span>
Toggle Performance Meter|<span class="keyseq"><kbd>F2</kbd></span>
Toggle Profiler|<span class="keyseq"><kbd>F3</kbd></span>
Toggle Helper View|<span class="keyseq"><kbd>F4</kbd></span>
Toggle Fullscreen|<span class="keyseq"><kbd>F11</kbd> or <kbd>Alt</kbd><kbd>Return</kbd></span>

If the profiler ( <kbd>F3</kbd> ) is enabled and the window is active:

Description|Action
-|-
Cycle Page (FPS, CPU, GPU)|<span class="keyseq"><kbd>F5</kbd></span>
Togle Sort Mode (Name, Timinig)|<span class="keyseq"><kbd>F6</kbd></span>
Decrease Result Page|<span class="keyseq"><kbd>F7</kbd></span>
Increase Result Page|<span class="keyseq"><kbd>F8</kbd></span>
Jump to Result Page (1, 2, 3, 4, 5)|<span class="keyseq"><kbd>1</kbd>, <kbd>2</kbd>, <kbd>3</kbd>, <kbd>4</kbd>, <kbd>5</kbd></span>
Slow down Refresh Time|<span class="keyseq"><kbd>-</kbd></span>
Speed up Refresh Time|<span class="keyseq"><kbd>+</kbd></span>

## VL.Skia
The following shortcuts are working with a VL.Skia Renderer active:

Description|Action
-|-
Copy content of render window to clipboard|<span class="keyseq"><kbd>Ctrl</kbd><kbd>2</kbd></span>
Toggle Performance Meter|<span class="keyseq"><kbd>F2</kbd></span>
