# The language VL

VL is the name of the language used in vvvv. Here is a quick overview:

## Language Components

* The most important components of VL are [Nodes](nodes.md) and [Links](links.md)
* Nodes and links live on a canvas called [Patch](patches.md)
* One or multiple patches are contained in a *_VL Document_*. VL Documents are stored as files on disk
* Every patch can define one or more [Operations](operations.md). Operations can be created as nodes in other patches
* There are two kinds of patches, one is merely a container for independent operations the other is a data type. If a patch is a data type its operations can store and/or share data via [Properties](properties.md). Properties can be accessed and/or modified in operations via [Pads](properties.md#pads)
* One _VL Document A_ can reference another _VL Document B_ to use its data types and operations as nodes. File B is then called a *_Dependency_* of A
* Patches can also contain *_Regions_*. A region defines a new computational context. There are different kinds of regions
* Nodes and regions can have inputs and outputs called *_Pins_*
* Static data can be entered into an operation using [IOBoxes](ioboxes.md). IOBoxes are little editors for basic types like numbers, text, color… They can also be used to display the current value of anything connected upstream.
* Links transport data from outputs to inputs. Therefore they define the data flow and execution order of the nodes in an operation.

## Multi-Paradigm

- VL combines metaphors known from dataflow, functional and object-oriented programming
- It is strictly evaluated
- It comes with regions aka visual code blocks (loops, if, delegates, ...)
- It features Process nodes aka simple lifetime management
- It has Adaptive nodes aka adhoc polymorphism

## The Type System

- VL is statically typed
- It has automagic type inference
- It has first class support for mutable and immutable datatypes
- It supports generics aka parametric polymorphism (with bounded quantification)
- And interfaces aka subtype polymorphism


