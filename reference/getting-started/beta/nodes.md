# Nodes

Here we're having a look at individual nodes that work differently in VL in regards to vvvv beta:

## IOBox (String)
In vvvv beta an IOBox (String) connected to a pin that takes a filename or directory, automatically adapts to it so that you can right-click on it and get an open-dialog to choose a file or directory accordingly.

In VL there is an IOBox (Path) to handle file and directory paths but it doesn't know (yet) which you'd want to choose. So by default a rightclick is opening a FileDialog. To get a DirectoryDialog you have to press <span class="keyseq"><kbd>Shift</kbd></span> while rightclicking!

## Cons
In vvvv beta you can connect single values as well as spreads to a cons node. Since VL distinguishes between single values and spreads (see the section on Spreads above) there are now two nodes:

* Cons: combines single values to a spread
* Concat: concatenates multiple spreads to a single spread

In case you want to combine single values with spreads you first have to convert the single values to spreads using the ToSpread node. See "Adding Pins to Nodes" above to learn how to increase/decrease the pin count for those nodes.

## Map and MapRange
Instead of having one node with an enum to choose between different map-modes, in VL there are now distinct nodes for doing only:

* Clamp
* Mirror
* Wrap
* Map

And besides the simple Map node there are distinct nodes for applying map in combination with a specific map-mode:

* MapClamp
* MapMirror
* MapWrap

## InputMorph
Looking for the InputMorph (Animation) node? This one is now called Lerp which is short for [Linear Interpolation](https://en.wikipedia.org/wiki/Linear_interpolation).

But beware of two differences:

* While on the InputMorph the first input is the morph factor ("Switch" pin), the respective "Scalar" input on the Lerp node is its rightmost!
* The InputMorph can have any number of inputs and morph between all those, while the Lerp only has two inputs!

## Quaternions
There is one difference to take care of: The multiplication order is inverted. VL uses the textbook convention of the quaternion multiplication whereas vvvv beta is using the DirectX implementation which deviates from the official convention so that quaternions behave in the same way as rotation matrices. But most 3D engines nowadays use the textbook convention and we comply in order to make it easier to read foreign documentation/code that also uses quaternions.
