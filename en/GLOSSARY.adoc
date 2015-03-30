# Glossary

## Category
Property of a patch used to organize multiple patches into groups. Can be nested by separating multiple categories via a single dot. Comparable to the idea of a namespace in other programming languages

## Class Patch
Patch that defines a datatype. Contains at least a _create_ and an _update_ operation and may contain properties 

## Dependency
Reference to a document, nuget or dynamic library (.dll)

## Document
Has a list of patches and a list of dependencies

## Executable Patch
A patch marked as being executable. Can be exported as .exe or used as a node in vvvv45

## Executable Patch
A patch marked as being executable. Can be exported as .exe or used as a node in vvvv45

## Getter
Patchcast that reads from a property

## Helper Patch
Patch that defines one or more operations. Can not contain properties

## Instance Node
Node that represents a static instance of a class

## Instance Operation Node
Node that calls in operation that is part of class

## Link
Connection between two pins. Comparable to a value assignment in other programming languages

## Loop Region
Calls the operation defined in its body _count_ times

## Node
Patchcast that represents the call of an operation or instance of a class

## Nuget
A packaged library including import instructions for 50

## Operation
Functionality defined via a graph of interconnected nodes. Comparable to functions, methods, procedures, ... in other programming languages

## Operation Node
Node that calls an operation

## Patch
Can be either of type _helper_ or _class_

## Patchcast
Visual element in a patch, like: Node, Link, Getter, Setter

## Pin
Input or output of a node. Comparable to function argument or return parameter in other programming languages

## Property
Data-field in a patch

## Region

## Root Document
A document opened directly in the development environment as opposed to being referenced as a dependency of another document

## Setter	
Patchcast that writes to a property