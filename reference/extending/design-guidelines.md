# Design Guidelines

During the design of a library a lot of choices have to be made. Be it regarding namings or patterns being used or datatypes that are being exposed. Here is a collection of guidelines that we followed when we created the VL.CoreLib and other libraries we ship with VL. In order to provide users of VL with a consistent look/feel/behavior of libraries/nodes we recommend you follow these guidelines for the design of your own libraries.

## Namings
### Documents
The name of the main document of a library should hint at the category the library introduces. If a library introduces more than one categories (like, eg. the VL.CoreLib) choose a broader term that identifies the library.

<pre>
VL.CoreLib.vl
VL.Devices.Leap.vl
VL.EditingFramework.vl
</pre>
<center>Document names</center>

### Node Names
A nodes name consists of 3 components:

* Name
* (Version)
* [Category]

#### Name
When choosing the name part of a node follow these rules:

* use CamelCasing, no spaces
* for process nodes use nouns: Sequencer, FlipFlop, Copier
* for operation nodes prefer verbs: Map, Copy, Sample
* avoid node names starting in "As.." like "AsString". Use "To.." or "From.." instead (see below for more rules on To/From nodes)

#### Version
As an alternative to "function overloading" VL uses Versions. They are optional and most nodes should not have a version. When versions are needed they can also consist of multiple space-separated words. Use the following rule to decide on a nodes version(s):

When you want to denote more specific versions of an already existing node with the same name the simpler one of two nodes with the same name should always have no version while the more specific one has a version that describes its speciality

#### Category
Just like a nodes name, the category is obligatory. Subcategories can be created by dot-separated terms. Further follow these rules when deciding about the category of a node:

* Prefer existing Categories over inventing your own
* Avoid excessive use of Subcategories

<pre>
LFO [Animation]
Copier [IO]
Map (Range) [Math.Ranges]
RGBA (Join) [Color.RGBA]
RGBA (Join Vector4) [Color.RGBA]
</pre>
<center>Node names</center>

### Node Tags
Tags are additional search-terms you can equip nodes with that will help people to find them in the NodeBrowser. The following rules apply:

* a list of lower-case space-separated terms
* don't use any term that is already part of the nodes name, version or category.

### Create vs. (Join) vs. From...
There is a special category of nodes that are typically called "constructors" as they create an instance of a datatype. Instead of naming all those nodes "Create" or calling them simply by their datatype name, eg. "Rectangle" we identified 3 different types of such constructor nodes that we each intuitifely want to name differently.

<pre>
Create [Particle]
RGBA (Join) [Color.RGBA]
FromHSL [Color.RGBA]
</pre>
<center>Constructor names</center>

Agreed, the boundaries between them are a bit blurry but here is how we go about deciding which naming scheme to use:

#### Create
When you patch your own datatype in VL it comes with a "Create" operation by default. We keep that default for complex datatypes, like eg. Particle, that are more than containers for a bunch of properties in that they have some functionality. In those cases it feels right to see a node named Create [Particle] when we use it in a patch to understand that at this point a particle is being created.

#### Join and Split
If the datatype you create is more or less used as a container for a bunch of properties, it is often useful to have a pair of join/split nodes: The join-node has one input-pin for each property allowing you to create an instance of the datatype while the split-node is its inverse in that it has one output-pin for each property allowing you to split the datatype into its individual components. For those cases we don't use the default "Create" operation but instead rename it to "MyDatatype (Join)" and create a "MyDatatype (Split)" operation that each do nothing more than writing to/reading from the internal properties of the datatype.

<pre>
Vector2 (Join) takes X and Y as inputs
Vector2 (Split) returns X and Y as outputs
RGBA (Join) takes Red, Green, Blue, Alpha as inputs
RGBA (Split) returns Red, Green, Blue, Alpha as outputs
</pre>
<center>Examples for Join/Split nodes</center>

> [!NOTE]
> For now you'll have to patch such join/split nodes manually. When you do so you'll notice an unwanted Input pin on the Join node and an unwanted Output pin on the Split node which you'll have to ignore for now. Later there'll be an option to get join/split nodes automatically for each datatype patch which will not have those unwanted pins.

#### From.. and To..
Nodes starting in "From.." or "To.." create and instance of a datatype by converting from a given one to the desired one. It could be argued that we should decide on naming all of those nodes either "From.." or "To.." for simplicity. But our rational for allowing both is that both variants make sense in terms of where the nodes are defined.

If you have a library called "FooStuff", that defines a datatype "Foo" it could make sense to have the following "constructor" operation for Foo:

* FromBar [Foo]

Also the following converter operation could make sense:

* ToBar [Foo]

If two nodes doing exactly the same thing as the two just mentioned would instead be defined in a library called "BarStuff" they'd be named:

* ToFoo [Bar]
* FromFoo [Bar]

#### ..To.. Converters
If a converter merely converts between units, like from cycles to radians but the data-type of the input and output pins is the same the node name has to mention both units, like: CyclesToRadians. Since the data-type does not change here even hovering the pins wouldn't give sufficient information to understand what the node is doing.

### Pins
* use spaces to separate words all starting with upper case
* avoid using generic names like "Do", "Update", ...

#### Order of Pins
Main input left, .. Reset typically right

#### Inputs
"Apply" is a reserved word for pin-names and therefore the compilier will complain when a user chooses this name manually for a pin. The reason for this is that there is a pattern where an "Apply" pin will automatically be created for operations. Like this, whenever we encounter an "Apply" pin we can be sure that this pattern is applied.

#### Operations
Any operation (both utility or member) that has

* either no output at all
* or one input named "Input" and one output named "Output" whose type is the same as the type of its "Input" and no further outputs

automatically gets an "Apply" input. The "Apply" pin is hidden by default and can be shown via the -> Configure menu on the node. It is set to "true" by default. Setting it to "false" will bypass the operation and simply pass the input value through to the output.

#### Process Nodes
Any operation of a process node that has

* no output

automatically gets an input that is named after the operation. This pin is set to "false" by default meaning the operation is not executed. Setting it to "true" will execute the operation.

Also see Pin Groups below.

### Outputs
* Output vs. Result
* see below: Nodes that work async

## Standard Datatypes
In order to keep the number of datatypes a user typically has to deal with at a managable level here is a list of datatypes that we use on inputs and outputs of nodes:

* Boolean
* Byte
* Integer32
* Float32
* Vector2/3/4
* Matrix
* Char
* String
* Path
* Spread<T>

Note that in the implementation of a node you can of course use any datatype you want.

## Standard Units
* Color Components (red, green, blue, alpha, hue, saturation, lightness) range from 0 to 1
* Angles are specified in cycles (a range from 0 to 1 counter clock-wise)

## Patterns
### Dynamic Pin Counts
Nodes like the "Cons" or the "+" can have their input count set on demand by the user. Pressing <span class="keyseq"><kbd>Ctrl</kbd><kbd>+</kbd></span> or <span class="keyseq"><kbd>Ctrl</kbd><kbd>-</kbd></span> with such a selected node will add/remove inputs accordingly.

Any operation that has exactly two inputs and one output whose type is the same as the first input gets this functionality automatically.

To manually create a Pin Group use the right click menu on an input and enable the Pin Group option. Note the input needs to have a type set for a collection (like Spread). However you only need to set the collection type, (So just _Spread_, not _Spread\<Foobar\>_) You don't need to specify the complete type if it should be generic.

<img width="329" alt="PinGroup" src="https://user-images.githubusercontent.com/4467208/208264172-956016fa-868f-4d47-a0cb-8c0783b1c732.png"> 
 
The other case, where you want to have a node to create pins on demand (think Timeliner, Automata) is not yet supported!

 
 
### Adaptive Nodes
Adaptive nodes allow you to define the signature (ie. names and order of input and output pins) of a node and then provide concrete implementations for different datatypes.

In the NodeBrowser you'll only see one option instead of all the implementations and typically this choice will be fine because now the compiler will choose the correct implementation for you as soon as you connect any links to it.

Example: Think of a LinearInterpolation (Lerp) node that can have concrete implementations for different datatypes like Float32, Vector2,... one could even think of an implementation for strings but the signature of such a node would always be the same: Input 1, Input 2, Scalar, Output.

#### Adaptive Definition
Create an operation and make sure to put it in the toplevel ''Adaptive'' category. Add input and output pins and name them to your liking. You can even annotate individual pins but at least one of the pins should be left generic otherwise you cannot provide different implementations for this definition.

#### Adaptive Implementations
Create an operation in any other category using the same signature and implement it in a non-generic way, ie. this time all in- and outputs need to have a datatype infered or annotated.

When creating multiple implementations (for different datatypes) make sure you put the operations in different categories.

#### Replace an adaptive node with a specific implementation
There are cases where you'll want to make sure the compiler uses one specific implementation for an adaptive node. To choose a specific version for an adaptive node, first place the node via the NodeBrowser, then doubleclick it and remove the ''Adaptive'' choice in the lower right section of the NodeBrowser. Now you'll see all available implementations in the main panel from which you can simply choose one.

### Process Nodes
#### Reset Inputs
Reset always takes precedence over other inputs (is lowest in process explorer)
* eg: FlipFlop

### Nodes that operate async
* typical outputs
  * In Progress
  * On Completed
  * Success
  * Error

### Exception Handling
Still to be defined (see internal issue #1511):

* simply throw errors as they occur
* test input ranges to prevent errors (e.g clamp or wrap incoming values to a save range,...). optionally report overflow via an Overflow (Bool) output
* return Default if operation fails and report Success
* use try/catch and report errors via a set of standard pins: Success (Bang), Error (Bang) and Error Message (String)

### Caching outputs
When to do it and when not

### Resolving relative paths from within a node
This is not possible yet. For now you need to use absolute filenames.

### Saving Data
There is no way yet for a node to save data with a patch. For now you need to save anything in an extra file.

### Events/Observables
If you are dealing with asynchronous datasources - async await, task, events - always hand them to your users as Observables. See [Writing Nodes](writing-nodes.md#eventsobservables).

### Resource Providers
Many thirdparty libraries we can use rely on unmanaged resources under the hood which requires the manual handling of their disposal when they are no longer needed. An example for such a resource type would be the Bitmap or usually any type that gives you access to a physical device. Forgetting to dispose such a resource usually quickly lead to errors.

Taking care of the disposal is not a big deal though as long as you only need access to such resources within on operation. Simply use Dispose [IDisposable] to free them when no longer needed.

Only when resouces need to be saved in fields for being accessed over time and thus they are leaving the scope of where they’ve been created things become more tricky.

For those scenarios VL comes with a category called [Resouces] which includes the following nodes: New, BindNew, Do, Execute, Using,...

### Restore Methods
When importing types with generic type parameters, you need to write restore methods for them.

### Default Values
Define default values for imported types by creating a Forward operation called "CreateDefault". Whenever the VL typesystem encounters that type it will look for a "CreateDefault" to avoid NUlL values in inputs of nodes.

This forward must not have a side-effect. This may not always be possible/make sense, then we’ll still have to deal with null.

### Immutability
Since in .NET it isn't possible (yet) to mark types as immutable you can do so when importing a type to VL.

## Nugets
Don't reference your own nuget in any .vl documents that contribute to a nuget other than: help patches

### Tests
Still to be defined: in what form to provide tests (patches, code,..) that can be run automated

### Help Patches
See [Providing Help](providinghelp.md)
