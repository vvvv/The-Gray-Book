# Aspects

Aspects are mostly used for library development. They allow to:
- Distinguish "standard" from "advanced" and "internal" nodes
- Mark nodes as "obsolete" or "experimental" 

In the NodeBrowser aspects can be used to [filter nodes](../hde/the_nodebrowser.md#filtering-nodes).

VL has the following keywords for aspects:

* Advanced
* Internal
* Experimental
* Obsolete
* Adaptive

## Advanced
Advanced is probably the most important aspect. The idea behind it is that any library developer provides a few super cool nodes and types that 90% of all users of a library should use. So the developer wants to have these easy to use nodes show up in the node browser by default. Only if a more advanced use case emerges for the user of the library all other nodes and types should be available as well.

In order to do that a library developer can structure their library as they please and then simply place the additional advanced nodes into the category Advanced which informs the NodeBrowser to hide them if the Advanced button is off, which is the default (as seen in the gif above).

The NodeBrowser also has a button to show/hide the 'standard' nodes (which is on by default) to make it easy to check your library for consistency.

## Internal
With this aspect the library developer can fine grain the node visibility even further.

_Internal_ makes nodes and types only available inside the .vl document that defines them. It can be used for all little utils and helpers that wouldn't make sense in a different context and should not be "exposed" by the document when it gets referenced by another document.

## Obsolete and Experimental
These two should be used for past and future nodes.

Nodes that are not yet finished or are proof of concept for a new technology should be placed in the category _Experimental_. These nodes have to be used with care since they might be unstable or will have breaking changes in the future.

_Obsolete_ is quite self explanatory, nodes with this aspect are only there to maintain backwards compatibility and should not be used anymore because there is probably newer/better version available.

## Adaptive
You can create an _adaptive_ category anywhere and it will add all node signatures inside it to the adaptive system, so every type can implement such a node. e.g. the adaptive operators +, -, \*, /, =, ... are placed in the *Math.Adaptive* category, which makes them show up under *Math* in the NodeBrowser.

There are different ways to apply aspects to nodes:
## Specifying aspects for groups of nodes

Using [Categories](../language/categories.md) with any of the above keywords as names, allows you to apply aspects to all nodes defined within the category. 

Note that even though specified as categories, aspects do not contribute to a nodes actual full category. So for example categories *MyLibrary.Particles.Advanced* or *MyLibrary.Advanced.Particles* will simply become *MyLibrary.Value*.

In a tooltip aspects are clearly distinguished from categories:
![](../../images/libraries/aspect_tooltip.PNG)

## Specifying an aspect for a single datatype definition
For a Process, Record or Class, aspects can be set via the [Patch Explorer](../hde/patch-explorer.md#datatype-patch-explorer).

Aspects assigned to a type, also apply to all its nested elements!

## Specifying an aspect for a single operation
To specify an aspect for a single [operation](../language/operations.md), simply use the keyword in the Version part of an operation name, like: 

    GetBytes (Advanced) or Transform (Normal Advanced)
