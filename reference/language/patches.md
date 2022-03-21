# Patches

A "Patch" is a canvas that holds [Nodes](nodes.md), [Links](links.md) and other VL language elements. A VL document can comprise of many patches. There are two main types of patches:

* Datatype Patches
* Definition Patches

 Every VL document has two main patches that can be reached via the [Document Menu](../hde/navigating_a_project.md#active-document-menu):

* The Application patch: A special form of a datatype patch
* The Definitions patch: The root of all definition patches 

## Application patch
The main entry point of a VL document. If any nodes are placed here, they will be executed as soon as the document is opened, either directly or as a dependency of an other document.

This is typically the place where you start creating your program. You can reach this patch via the shortcut <span class="keyseq"><kbd>Alt</kbd><kbd>A</kbd></span>.

Application patches can also hold definitions, but this is not considered particularly good practice. 

In case a documents application patch is empty, the document is only used as a library, ie. only providing node definitions to any document referencing it. 

## Definitions patch
This is where all the node definitions of a VL document are placed. Here you can use [Categories](categories.md) to build a hierarchy for your definitions. You can reach this patch via the shortcut <span class="keyseq"><kbd>Alt</kbd><kbd>Shift</kbd><kbd>A</kbd></span>.

![](../../images/language/vl-DocumentPatch.png)
<center>Section of the definitions patch of VL.CoreLib.vl</center>

Here we typically see a range of type-definitions and categories, though a document patch can also directly hold [static operations](operations.md#static-operations).

The document patch can set or omit a base category.

![](../../images/language/vl-DocumentPatch-BaseCategory.png)
<center>Document base category set to "Foo"</center>

## Datatype Patches
There are different types of datatype patches that can be switched between in the patch explorer:

* Process
* Record
* Class
* Interface
* Forward
  
Process, Record and Class patches can have [Properties](properties.md) and [Member Operations](operations.md#member-operations). Interface and Forward are a bit more special, see below.

Every datatype patch has a corresponding type-definition element in a definition patch.

![](../../images/language/vl-DatatypePatch.png)
<center>Datatypes: Process, Record and Class</center>

There are different ways to create a new datatype patch:

* In the [NodeBrowser](../hde/the_nodebrowser.md) type the name of the node you want to create and then choose `Node` to create a process node
* Press <span class="keyseq"><kbd>Ctrl</kbd><kbd>P</kbd></span> to create a process node at the cursor and open the new patch
* Press <span class="keyseq"><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>P</kbd></span> to open the new patch without creating a node application

In either case, a corresponding type-definition is automatically placed in the definitions patch of the active document.

### Process
The most common type of datatype patch is the "Process". It holds the definition for a [Process Node](nodes.md#process-nodes), ie. its life-time is bound to the existence of a node.

A processes' member operations can either be directly part of the process or not. The patch explorer can be used to decide about this for every operation. Also the order of execution of multiple operations in a process can be configured there. 

The Application patch of a document is a special Process patch:
* It has a Create and an Update operation but doesn't allow you to add additional operations
* It cannot be instantiated as a node, but an instance of it is running as soon as its  document is opened directly or as a dependency for another document

### Record
Defines an immutable datatype. As opposed to a Process, its life-time is not defined by the existence of a node. Instead, any number of instances of a Record can be created, update and disposed at any time. 

The typical life-time of a record goes like this:
- An instance is created using a call to its `Create` operation
- The instance is stored in a collection 
- Operations like `Update` (or others that were defined) are called on it repeatedly or only from time to time and return a new instance (replacing the previous one) that is stored in the collection again
- For this, activate the Process toggle in the Patch Explorer
- The instance is removed from the collection in order to kill it. In case the record holds unmanaged resources it is also necessary to call its `Dispose` operation before removing it from the collection.

Every node that modifies a record type, essentially makes a copy of it (with changes applied) and returns a new instance. Thus, modified Records always need to be written back into a [Pad](properties.md#pads), for their changes to survive to the next frame!

The fact that a record is at anytime a fixed, immutable snapshot of data, makes it specifically suitable for use in a dataflow programming language like VL. 

A record can optionally also define a Process. For this, activate the Process toggle in the Patch Explorer. 

### Class
Defines a mutable datatype. Basically similar to the Record with one main difference: 

Every node that modifies a class type really modifies the original instance! No matter how far down the line a node is that operates on a class type, it is always the original instance that is being modified. So what's passed on over links, from pin to pin, is not data, but only a reference to the original instance.

A class can optionally also define a Process. For this, activate the Process toggle in the Patch Explorer.

### Interface
Not officially supported yet. 

### Forward
See [Forwarding](../extending/forwarding.md).