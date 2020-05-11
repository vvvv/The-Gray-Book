# Keyboard Shortcuts

## Quad Menu

Description | Action
-|-
New Document|`Ctrl + N`
Open Document|`Ctrl + O`
Save All Documents|`Alt + Ctrl + S`
Run|`F5`
Step|`F6`
Pause|`F7`
Stop|`F8`
Export...|`F9`

## Document Menu
Description|Action
-|-
Open Application Patch|`Alt + A`
Open Definitions Patch|`Alt + Shift + A`
New Patch (=Process Node at Cursor)|`Ctrl + P`
New Process Definition in Definitions|`Ctrl + Shift + P`
Save Active Document|`Ctrl + S`
Save Active Document As...|`Ctrl + Shift + S`
Reload Active Document discarding unsaved changes|`Ctrl + R`
Close Active Document|`Ctrl + W`
Show Active Document in Explorer|`Alt + E`
View Active Document as Text|`Alt + Shift + E`
Add Existing Dependency|`Control + E`
Add .NET Framework Assembly|`Control + Shift + E`

## Basics
Description|Action
-|-
General _middleclick_ alternative|`ALT` + leftclick
Remove Errors (from current level downwards)|`Ctrl + E`
Navigate back in Tab history|`Ctrl + <`
Navigate forward in Tab history|`Ctrl + >`
Navigate forward in Tab history|`Ctrl + >`
Navigate one level Up in application|`Ctrl + ^` (where ^ is the Key below `ESC`)
Navigate one level Up in definition|`Ctrl + Shift + ^` (where ^ is the Key below `ESC`)

## Pan & Zoom
Description|Action
-|-
Pan the patch|Rightdrag in an empty area
Zoom the patch|Mousewheel or `Ctrl + +` & `Ctrl + -`
Reset pan and zoom of the patch|`Ctrl + 0`

## Alternative Pan & Zoom
If you prefer to use the mousewheel for panning vertically instead of zooming change the *MouseWheelZooms* setting to _false_ to get the following behavior:

Description|Action
-|-
Pan the patch vertically|Mousewheel
Pan the patch horizontally|`Shift` + Mousewheel
Zoom the patch|`Ctrl` + Mousewheel

## Selecting elements in a patch
Description|Action
-|-
Select an Element|left click
Add an element to the selection|`Ctrl` + leftclick
Force to include links in a marquee selection despite nodes or pads are already part of it|`SPACE`
Force to only select links when making a marquee selection|`L`

## Nodes
Description|Action
-|-
Bring up the NodeBrowser to choose node to create|Double leftclick in an empty area of a patch or on a link
Replace a node|Double leftclick it to bring up the NodeBrowser and choose a different node. You may need to press ESC to remove existing choices
Move a node (or selection of nodes) into or out of a region|Press `SPACE` while draging a node
Assign a node to an operation|Rightclick -> Assign -> _operation_
Remove the operation-assignment of a node|Rightclick -> Assign -> Pop
Align selected nodes|`Ctrl + L`
Line up selected nodes|`Alt + L`
Evenly distribute selected nodes between left/top-most and right/bottom-most node in selection|`Ctrl + Shift + L`
Evenly distribute selected nodes taking the gap between the left/top-most two nodes as a measure for the rest|`Ctrl + ALT + L`
Increase count of input pins for nodes like +, Cons, ...|`Ctrl + +`
Decrease count of input pins for nodes like +, Cons, ...|`Ctrl + -`
Expose Pins|`Ctrl + K`
Move selected nodes|`Arrows`
Move selected nodes faster|`Ctrl + Arrows`

## Pin Groups
Description|Action
-|-
Add Pin|`Ctrl + +`
Remove Pin|`Ctrl` + `-`

## Pads
Description|Action
-|-
Create via Nodebrowser|double leftclick in patch, type name of pad, choose _Pad_
Create while linking|Finish with `Shift` + leftclick in the patch
Bake current type annotation|`Ctrl + T`
Clear type annotation|`Ctrl + Shift + T`

## IOBoxes
Description|Action
-|-
Create via Nodebrowser|right doubleclick in the patch
Create while linking|Middleclick (or `ALT` + leftclick) in the patch
Reset to default|`ALT` + rightclick
Edit the value|Double leftclick
*IOBox (Value)*: Change value|Rightdrag up/down
*IOBox (Value)*: Change value finer|`Ctrl` + Rightdrag up/down to change value with stepsize divided by 10
*IOBox (Value)*: Change value finer|`Shift` + Rightdrag up/down to change value with stepsize divided by 10
*IOBox (Value)*: Change value coarser|`Alt` + Rightdrag up/down and combine with `Ctrl` and/or `Shift` to multiply stepsize by 10 or 100
*IOBox (String)*: Bring up FileOpenDialog|`Ctrl` + Rightclick
*IOBox (String)*: Bring up DirectoryOpenDialog|`Shift` + Rightclick
*IOBox (Path)*: Bring up FileOpenDialog|Rightclick
*IOBox (Path)*: Bring up DirectoryOpenDialog|`Shift` + Rightclick
*IOBox (Color)*: Change brightness|Rightdrag up/down
*IOBox (Color)*: Change hue|Rightdrag left/right
*IOBox (Color)*: Change saturation|`Ctrl` + Rightdrag up/down
*IOBox (Color)*: Change the alpha channel|`Shift` + Rightdrag up/down

## Links
Description|Action
-|-
Create an IOBox while linking|Finish with middleclick (or `Alt` + leftclick) in the patch
Create an input or output pin while linking|Finish with `Ctrl` + leftclick in the patch
Create a pad while linking|Finish with `Shift` + leftclick in the patch
Create a node while linking|Finish with a double leftclick
Create an accumulator input or output proxy in IF or LOOP while linking|Finish with `Ctrl` + leftclick in the region
Create a splicer input or output proxy in LOOP while linking|Finish with `Ctrl` + `Shift` + leftclick in the region
Insert a IOBox into an existing link|Double rightclick the link
Delete a link|Middleclick it
Start a new link from the same source after finishing a connection|Finish with middleclick
Assign a link to an operation|Rightclick -> Assign
Insert a pad into an existing link|`Shift` + double leftclick or double rightclick the link
Insert a node into an existing link|Double leftclick the link
Show a links tooltip while hovering it|`Ctrl`
Force a connection to a datahub that would otherwise not accept it|`SPACE`
Force to include links in a marquee selection despite nodes or pads are already part of it|`Shift`

## Frames
Description|Action
-|-
Create a Frame from Marquee selection|Hold `Alt` while making a marquee selection
Screenshot of Marquee selection to clipboard|Hold `S` while making a marquee selection
Surround selected nodes with a frame|`Alt + F`
Surround selected nodes with a frame in viewspace|`Alt + Shift + F`
Screenshot of Marquee selection|Make Marquee selection and press `S`

## Tooltips
Description|Action
-|-
Copy content when showing an error|`Ctrl + Shift + C`
Toggle showing more infos for infos, warnings or errors|`Space`
Detach from currently inspected instance|`Tab`

## Runtime
Description|Action
-|-
Run|`F5`
Step|`F6`
Pause|`F7`
Stop|`F8`

## Windows
Description|Action
-|-
Patch Documentation|`Ctrl + M`
Solution Explorer|`Ctrl + J`
Help Browser|`F1`
