# Patches

A "Patch" is a canvas that holds [Nodes](nodes.md), [Links](links.md) and other VL language elements. A VL document can comprise of many patches. There are two main types of patches:

* Datatype Patches
* Definition Patches

 Every VL document has two main patches that can be reached via the [Document Menu](../hde/document-menu.md):

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

The most common type of datatype patch is the "Process". It holds the definition for a [Process Node](nodes.md#process-nodes). 

A processes' member operations can either be directly part of the process or not. The patch explorer can be used to decide about this for every operation. Also the order of execution of multiple operations in a process can be configured there. 

The Application patch of a document is a special Process patch:
* It has a Create and an Update operation but doesn't allow you to add additional operations
* It isn't instantiated as a node, but an instance of it is running as soon as its the document is opened directly or as a dependency for another document

### Record
Defines an immutable datatype.
A record can optionally also define a Process.

### Class
Defines a mutable datatype.
A class can optionally also define a Process.

### Interface
Not officially supported yet.

### Forward
See [Forwarding](../extending/forwarding.md).