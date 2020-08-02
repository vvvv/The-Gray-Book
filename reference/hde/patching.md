# Keyboard Shortcuts

## Quad Menu

Description | Action
-|-
New Document|<kbd>Ctrl + N</kbd>
Open Document|<kbd>Ctrl + O</kbd>
Save All Documents|<kbd>Alt + Ctrl + S</kbd>
Run|<kbd>F5</kbd>
Step|<kbd>F6</kbd>
Pause|<kbd>F7</kbd>
Stop|<kbd>F8</kbd>
Export...|<kbd>F9</kbd>

## Document Menu
Description|Action
-|-
Open Application Patch|<kbd>Alt + A</kbd>
Open Definitions Patch|<kbd>Alt + Shift + A</kbd>
New Patch (=Process Node at Cursor)|<kbd>Ctrl + P</kbd>
New Process Definition in Definitions|<kbd>Ctrl + Shift + P</kbd>
Save Active Document|<kbd>Ctrl + S</kbd>
Save Active Document As...|<kbd>Ctrl + Shift + S</kbd>
Reload Active Document discarding unsaved changes|<kbd>Ctrl + R</kbd>
Close Active Document|<kbd>Ctrl + W</kbd>
Show Active Document in Explorer|<kbd>Alt + E</kbd>
View Active Document as Text|<kbd>Alt + Shift + E</kbd>
Add Existing Dependency|<kbd>Control + E</kbd>
Add .NET Framework Assembly|<kbd>Control + Shift + E</kbd>

## Basics
Description|Action
-|-
General _middleclick_ alternative|<kbd>ALT</kbd> + leftclick
Remove Errors (from current level downwards)|<kbd>Ctrl + E</kbd>
Navigate back in Tab history|<kbd>Ctrl + <</kbd> or <kbd>Alt + Left</kbd>
Navigate forward in Tab history|<kbd>Ctrl + ></kbd>  or <kbd>Alt + Right</kbd>
Navigate one level Up in application|<kbd>Ctrl + ^</kbd> (where <kbd>^</kbd> is the Key below <kbd>ESC</kbd>)
Navigate one level Up in definition|<kbd>Ctrl + Shift + ^</kbd> (where <kbd>^</kbd> is the Key below <kbd>ESC</kbd>)

## Pan & Zoom
Description|Action
-|-
Pan the patch|Rightdrag in an empty area
Zoom the patch|Mousewheel or <kbd>Ctrl</kbd><kbd>+</kbd> & <kbd>Ctrl</kbd><kbd>-</kbd>
Reset pan and zoom of the patch|<kbd>Ctrl + 0</kbd>

## Alternative Pan & Zoom
If you prefer to use the mousewheel for panning vertically instead of zooming change the *MouseWheelZooms* setting to _false_ to get the following behavior:

Description|Action
-|-
Pan the patch vertically|Mousewheel
Pan the patch horizontally|<kbd>Shift</kbd> + Mousewheel
Zoom the patch|<kbd>Ctrl</kbd> + Mousewheel

## Selecting elements in a patch
Description|Action
-|-
Select an Element|left click
Add an element to the selection|<kbd>Ctrl</kbd> + leftclick
Force to include links in a marquee selection despite nodes or pads are already part of it|<kbd>SPACE</kbd>
Force to only select links when making a marquee selection|<kbd>L</kbd>

## Nodes
Description|Action
-|-
Bring up the NodeBrowser to choose node to create|Double leftclick in an empty area of a patch or on a link
Replace a node|Double leftclick it to bring up the NodeBrowser and choose a different node. You may need to press ESC to remove existing choices
Move a node (or selection of nodes) into or out of a region|Press <kbd>SPACE</kbd> while draging a node
Assign a node to an operation|Rightclick -> Assign -> _operation_
Remove the operation-assignment of a node|Rightclick -> Assign -> Pop
Align selected nodes|<kbd>Ctrl + L</kbd>
Line up selected nodes|<kbd>Alt + L</kbd>
Evenly distribute selected nodes between left/top-most and right/bottom-most node in selection|<kbd>Ctrl + Shift + L</kbd>
Evenly distribute selected nodes taking the gap between the left/top-most two nodes as a measure for the rest|<kbd>Ctrl + ALT + L</kbd>
Increase count of input pins for nodes like +, Cons, ...|<kbd>Ctrl</kbd><kbd>+</kbd>
Decrease count of input pins for nodes like +, Cons, ...|<kbd>Ctrl</kbd><kbd>-</kbd>
Expose Pins|<kbd>Ctrl + K</kbd>
Move selected nodes|<kbd>Arrows</kbd>
Move selected nodes faster|<kbd>Ctrl + Arrows</kbd>

## Pin Groups
Description|Action
-|-
Add Pin|<kbd>Ctrl</kbd><kbd>+</kbd>
Remove Pin|<kbd>Ctrl</kbd><kbd>-</kbd>

## Pads
Description|Action
-|-
Create via Nodebrowser|double leftclick in patch, type name of pad, choose _Pad_
Create while linking|Finish with <kbd>Shift</kbd> + leftclick in the patch
Bake current type annotation|<kbd>Ctrl + T</kbd>
Clear type annotation|<kbd>Ctrl + Shift + T</kbd>

## IOBoxes
Description|Action
-|-
Create via Nodebrowser|right doubleclick in the patch
Create while linking|Middleclick (or <kbd>ALT</kbd> + leftclick) in the patch
Reset to default|<kbd>ALT</kbd> + rightclick
Edit the value|Double leftclick
*IOBox (Value)*: Change value|Rightdrag up/down
*IOBox (Value)*: Change value finer|<kbd>Ctrl</kbd> + Rightdrag up/down to change value with stepsize divided by 10
*IOBox (Value)*: Change value finer|<kbd>Shift</kbd> + Rightdrag up/down to change value with stepsize divided by 10
*IOBox (Value)*: Change value coarser|<kbd>Alt</kbd> + Rightdrag up/down and combine with <kbd>Ctrl</kbd> and/or <kbd>Shift</kbd> to multiply stepsize by 10 or 100
*IOBox (String)*: Bring up FileOpenDialog|<kbd>Ctrl</kbd> + Rightclick
*IOBox (String)*: Bring up DirectoryOpenDialog|<kbd>Shift</kbd> + Rightclick
*IOBox (Path)*: Bring up FileOpenDialog|Rightclick
*IOBox (Path)*: Bring up DirectoryOpenDialog|<kbd>Shift</kbd> + Rightclick
*IOBox (Color)*: Change brightness|Rightdrag up/down
*IOBox (Color)*: Change hue|Rightdrag left/right
*IOBox (Color)*: Change saturation|<kbd>Ctrl</kbd> + Rightdrag up/down
*IOBox (Color)*: Change the alpha channel|<kbd>Shift</kbd> + Rightdrag up/down

## Links
Description|Action
-|-
Create an IOBox while linking|Finish with middleclick (or <kbd>Alt</kbd> + leftclick) in the patch
Create an input or output pin while linking|Finish with <kbd>Ctrl</kbd> + leftclick in the patch
Create a pad while linking|Finish with <kbd>Shift</kbd> + leftclick in the patch
Create a node while linking|Finish with a double leftclick
Create an accumulator input or output proxy in IF or LOOP while linking|Finish with <kbd>Ctrl</kbd> + leftclick in the region
Create a splicer input or output proxy in LOOP while linking|Finish with <kbd>Ctrl + Shift</kbd> + leftclick in the region
Insert a IOBox into an existing link|Double rightclick the link
Delete a link|Middleclick it
Start a new link from the same source after finishing a connection|Finish with middleclick
Assign a link to an operation|Rightclick -> Assign
Insert a pad into an existing link|<kbd>Shift</kbd> + double leftclick or double rightclick the link
Insert a node into an existing link|Double leftclick the link
Show a links tooltip while hovering it|<kbd>Ctrl</kbd>
Force a connection to a datahub that would otherwise not accept it|<kbd>SPACE</kbd>
Force to include links in a marquee selection despite nodes or pads are already part of it|<kbd>Shift</kbd>

## Frames
Description|Action
-|-
Create a Frame from Marquee selection|Hold <kbd>Alt</kbd> while making a marquee selection
Screenshot of Marquee selection to clipboard|Hold <kbd>S</kbd> while making a marquee selection
Surround selected nodes with a frame|<kbd>Alt + F</kbd>
Surround selected nodes with a frame in viewspace|<kbd>Alt + Shift + F</kbd>
Screenshot of Marquee selection|Make Marquee selection and press <kbd>S</kbd>

## Tooltips
Description|Action
-|-
Copy content when showing an error|<kbd>Ctrl + Shift + C</kbd>
Toggle showing more infos for infos, warnings or errors|<kbd>Space</kbd>
Detach from currently inspected instance|<kbd>Tab</kbd>

## Runtime
Description|Action
-|-
Run|<kbd>F5</kbd>
Step|<kbd>F6</kbd>
Pause|<kbd>F7</kbd>
Stop|<kbd>F8</kbd>

## Windows
Description|Action
-|-
Patch Documentation|<kbd>Ctrl + M</kbd>
Solution Explorer|<kbd>Ctrl + J</kbd>
Help Browser|<kbd>F1</kbd>
