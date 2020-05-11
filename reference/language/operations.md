# Operations

Operations define a simple functionality. They take input, apply their function to it and return a result. Operations cannot hold state, meaning they cannot store any data between consecutive calls. This also means that you cannot use any Process nodes (e.g. LFO, Damper,...) in them as those are stateful and therefore can only be used in a stateful context which an operation does not provide.

There are two different types of operations in vl:

* Static operations
* Member operations

While _static_ operations are on their own, operating only on data they are being fed with, the term _member_ refers to the fact that those operations belong to and operate on the data of  a datatype.

## Definition vs. Application

Using the term "operation" alone can be ambiguous if not from the context it will be clear whether we actually mean an "operation definition" or an "application of the operation definition" which again is synonymous with "node".

*Image:A static operation definition and its application as a node*

*Image:A member operation definition and its application as a node*

## Static operation definitions
Static operation definitions can be created directly in a document patch or in a group patch via the NodeBrowser.

![](../../images/language/vl-Operations-Static-NodeBrowser.png)
<center>Choose to create an operation definition in the NodeBrowser</center>

By default static operations have their _Is Generic_ property set to true. Disabling it shows errors for all inputs and outputs of the operation whose datatype is not specified or cannot be infered.

![](../../images/language/vl-Utils-StaticOperation-GenericToggle.png)
<center>The "Is Generic" toggle of an operation definition is on by default</center>

Once created, the operation definition shows up in the NodeBrowser and can now be created as a node.

![](../../images/language/vl-Operations-Static-MyOperation-NodeBrowser.png)
<center>The newly created operation can now be selected via the NodeBrowser</center>

## Member operation definitions
Any operation defined as part of a datatype patch is a member operation.

Member operations are not surrounded by a rectangular definition region because they can interact with each other via pads and can in fact be quite distributed over a patch which would potentially result in many overlapping regions in a patch. Therefore instead member operations are distinguished by color.

*Image:Two member operations exchanging data via a pad*

Member operations in a patch can be defined either via the PatchExplorer...

*Image:Adding a member operation via the PatchExplorer*

...or by selecting an elements in the patch and choosing to assign them to a new operation via the context menu:

*Image:Assigning a selection of inputs to a new operation*

## Operation Applications
As mentioned above the term _Operation Application_ is synonymous with the term _Node_ and therefore we're here referring you to the chapter link:/en/reference/vl/nodes.adoc[Nodes] for further details.

## Operation Signature
The signature of an operation comprises of its input- and output-pins and defines the order in which they show up on corresponding nodes.

For static operations the signature can be opened directly on the operation definition region. The signature of member operations can be accessed via the PatchExplorer.

*Image:Signature of a static and a member operation*

By default the order of pins is defined by their left-to-right placement in the patch. To override that behavior uncheck the "pin order" toggle and arrange the pins by drag-dropping them directly in the signature.

Doubleclicking a pins name allows you to rename it. A middleclick on a pin allows you to annotate it with a type.
