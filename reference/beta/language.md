## Nodes
In vvvv beta all nodes look the same. In VL we distinguish between Process and Operation nodes:

*Image:Process node (LFO) vs. Operation node (Distance) vs. Member Operation node (Any)*

* Process nodes are *stateful* and have a darker bar underlining the pins
* Operation nodes are *stateless* and don't have pin-bars

Being stateful allows a Process node to store data between frames. Stateless Operation nodes are simple functions that can only operate on data they receive via their inputs.

In that sense all nodes in vvvv beta were potentially stateful but there wasn't any simple way to find out whether they actually were or not.

The reason for why it is important to distinguish is that it greatly improves the way you can build your patches by making deliberate decisions about which parts of your patch holds state and which do not. This improves readability and most of all simplifies debugging as certain types of problems can only occur with state involved. So with a runtime/logic problem at hand it is always wise to first start looking into Process nodes.

## Naming Conventions
Naming conventions have slightly changed and are now as follows:

Name (Version1 Version2 ..) [Category.Subcategory]

when in vvvv beta it was:

Name (Category Version1 Version2)

## Operations
In vvvv beta each patch defines exactly one operation. In VL a patch can define any number of operations. Each operation has a user-specified name and version and inherits the category of its patch.

*Image:Multiple operations in a patch*

## IOBoxes vs Pins
In vvvv beta an IOBox can be used to set or display values. By giving an IOBox a descriptive name you turn it into an input- or output-pin of its patch. In VL we distinguish between IOBoxes and Pins. While IOBoxes can still be used to set or display values you now use explicit Pin elements to specify Inlets and Outlets for operations.

*Image:IOBox vs. Pin*

Just like in vvvv beta create an IOBox by pressing the middle mousebutton while making a connection. If instead you <kbd>CTRL</kbd> + Leftclick while making a connection you create an Inlet or Outlet.

Both Pins and IOBoxes can be configured via a middleclick on them. Input Pins can also be given a default value.

*Image:Configuring a Pin or IOBox*

Another note on pins is that in vvvv beta you're used to when removing a link that goes into an input pin of a primitive type (value, string, color, enum) that the input pin will store the last values that came in via the link. This is not happening in VL, where input pins cannot store values.

## Values
In vvvv beta there is only one numerical type. It is called simply "Value" and it is internally represented by a Float64 (which you as a user hardly ever have to worry about). Any output of type Value can be connected to any input of type value even though they may have different subtypes, like Integer, Boolean, or Bang.

In VL there are many different types for values:

* Boolean
* Byte
* Integer32
* Integer64
* Float32
* Float64

and for now you can only connect from lower to higher precision, eg. from Integer32 to Float32 (or Float64) but not the other way round.

## Vectors
In vvvv beta there is no difference between a 2/3/4-dimensional vector and a spread with 2/3/4 slices. In VL we have explicit types for vectors, ie: Vector2, Vector3 and Vector4.

## Spreads
In vvvv beta there are spread generators (like LinearSpread,...) spread operators (like GetSlice, Zip,...) and spread sinks (like Bounds, Mean, ...). The same and more are available in VL with the additional advantage that in VL all spread operations are always available for all datatypes without adding more nodes to the NodeBrowser. See Generics.

In vvvv beta every connection between two pins is a spread. A spread can have 0, 1 or more slices but still it would be a spread in all cases.

In VL this is more defined: You need to understand a few things:

* There is a difference between a single value and a spread with a single value.
* When we talk of a spread of Integer32, strings or colors, we write: Spread<Integer32>, Spread<String>, Spread<RGBA>
* We can also have multidimensional Spreads, like Spread<Spread<Float32>>
* A Spread is only one type of collection. Another common type of collection would be a Dictionary or a HashSet, but we can imagine many different types of collections. Anyway for a start you'll mostly use Spreads.

TODO: Link to Collections.Spreads docu!

## Spreading
In vvvv beta every node can automatically be spreaded, meaning the node is executed for every slice on its inputs. This convenience feature is not (yet) available in VL. We're still thinking about implementing something similar though.

*Image:Loop around a vl node vs. implicit spreading in vvvv beta*

## Bin Size
Bin Sizes are vvvv beta's workaround to no having multi-dimensional spreads. As with a Bin Size pin associated with a spreaded pin you can specify how the spreads individual bins are to be interpreted by a node. Since in VL spreads can now contain other spreads the concept of Bin Sizes is no longer necessary.

## Framedelay
In vvvv beta there were two reasons to use framedelays

* to make sure one thing happens after the other
* to store a value for the next frame

In VL you'll only use a FrameDelay node for the first use-case. If your patch needs to store a value for the next frame you're creating a datatype in which case you can now use proper Fields and Pads to access those Fields.

## Adding pins to nodes
Nodes like +, \*, Cons, that have a dynamic pin-count can have pins added/removed by selecting them and pressing <kbd>CTRL +</kbd> or <kbd>CTRL -</kbd>.
