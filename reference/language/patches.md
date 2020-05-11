# Patches

Patches are where we put nodes. There are different types of patches:

* Document Patch
* Datatype Patch
* [Group Patch](groups.md)

## Document Patch
Every .vl document has at least one patch, the document patch which gives an overview of the content in the document. The document patch of the active document can always be reached via the shortcut `Alt+P`.

![](../../images/language/vl-DocumentPatch.png)
<center>Section of the document patch of VL.CoreLib.vl</center>


Here we typically see a range of type-definitions and groups though a document patch can also directly hold operation-definitions.

The document patch can set or omit a base category.

![](../../images/language/vl-DocumentPatch-BaseCategory.png)
<center>Document base category set to "Foo"</center>


## Datatype Patch
The most common type of patch is a datatype patch. It roughly corresponds to what other programming languages call a "class". Every datatype patch has a corresponding type-definition in the document patch.

There are two ways to create a new datatype patch:

* Press `Ctrl+P` to create and open the new patch
* Press `Ctrl+Shift+P` to create a new patch and place a node of it at the cursors position

In both cases the corresponding type-definition is automatically placed in the document patch of the active document.

A datatype patch can have properties and contains at least a _Create_ and an _Update_ operation but can contain any number of additional operations.

By default a datatype patch defines a [Process Node](nodes.md).

![](../../images/language/vl-DatatypePatch.png)
<center>Datatypes: Process, Record and Class</center>

* Process (default): to define a Process Node
* Record: to define an immutable datatype
* Class: to define a mutable datatype

Both Class and Record can also optionally define a Process.
