# Writing nodes using C#

Writing your own nodes for VL using C# requires no VL specific knowledge or preparation. Essentially you’re writing plain C# code that VL then turns into nodes. Here is a step by step guide to get you started:

## Start from a Template

In [Visual Studio Code](https://code.visualstudio.com/):
- Install the C# Extension
- Open a terminal and navigate to the directory you want your C# project to be placed
- Run `dotnet new classlib -o MyProjectsName` -> to create a .NET6 class library project with the given name
- Run `code .` to open the project in the editor

In [Visual Studio 2022](https://visualstudio.microsoft.com/de/):

* Create a new project: `File -> New -> Project`
* Choose the `Class Library` Template
* Specify Name and Location
* As Framework choose:
  * For vvvv gamma 2021.4.x: `.NET Standard 2.0`
  * For vvvv gamma 2022.5.x: `.NET 6.0`

This will create a .sln, a .csproj and a Class1.cs file which looks like this:

![](../../images/libraries/vl-libraries-writingNodes-vs2017-emptyClass.PNG)
<center>Empty generated Class1.cs</center>

The Namespace you specify here will turn into the nodes category in VL. Nested namespaces (using dot syntax) will be translated to nested categories accordingly.

Now *any public static operation and every member operation of a public class you write will turn into a VL node*. The most simple node you can write is therefore:

```csharp
namespace MyCustomNodes
{
    public static class MyStaticNodes
    {
        public static float MyAddition(float input, float input2)
        {
            return input + input2;
        }
    }
}
```

This will translate to the following node:

![](../../images/reference/extending/MyAddition.png)
<center>Resulting Node in VL</center>

Depending on which version of vvvv you're using you can now use your new nodes like this:

### vvvv gamma 2021.4.x
Build the project and you'll get a managed .dll containing your nodes. From here you continue with [Using .NET Libraries](using-net-libraries.md) to use those operations as nodes in VL.

### vvvv gamma 2022.5.x
Reference the .csproj file in your .vl document, like so:

![](../../images/reference/extending/ReferencingProjects.png)
<center>Referencing a .csproj file in .vl</center>

This takes care of compiling the project and updating nodes in vvvv whenever you make a change to the .csproj or any of its .cs files.

Note that you can now also debug your code:
- Run Visual Studio and attach to vvvv.exe
- Set a break-point in your code

## More Details

Here are some simple examples and a few more details that will help you create your own nodes. Those are also available via:
 https://github.com/vvvv/VL.DemoLib

For more general considerations also see: [Design Guidelines](design_guidelines.md)

### Vectors and Matrices

In order to create pins of type Vector/Matrix that are compatible with the ones in VL you have to use the types coming with the [Stride.Core.Mathematics](https://www.nuget.org/packages/Stride.Core.Mathematics/) nuget.

### Pin Names

For better readability in VL, an operation's arguments are separated at camelCasing. So "firstInput" in c# turns into "First Input" in VL. The default “return” value is called "Output" in VL.

```csharp
public static float PinNames(float firstInput, float secondInput)
{
    return firstInput + secondInput;
}
```

![](../../images/libraries/vl-libraries-writingNodes-PinNames.png)
<center>Tooltip shows pin name</center>

### Default Values

Simply use the c# notation for defaults to define defaults for inputs in VL.

```csharp
public static float Defaults(float firstInput=44f, float secondInput=0.44f)
{
    return firstInput + secondInput;
}
```

![](../../images/libraries/vl-libraries-writingNodes-Defaults.png)
<center>Default on Input</center>

### Multiple Outputs

Instead of returning a single value you can also use one or even multiple out parameters that will show up as output pins on the VL node:

```csharp
public static void MultipleOutputs(float firstInput, float secondInput, out float added, out float multiplied)
{
    added = firstInput + secondInput;
    multiplied = firstInput * secondInput;
}
```

![](../../images/libraries/vl-libraries-writingNodes-MultipleOutputs.png)
<center>A node with multiple outputs</center>

### Function Overloading

You can write multiple operations with the same name that only differ in the number of input parameters:

```csharp
public static float MyAddition(float input, float input2)
{
    return input + input2;
}

public static float MyAddition(float input, float input2, float input3)
{
    return input + input2 + input3;
}
```

Choosing the respective node in the NodeBrowser will then ask you for a further choice to specify the which version you want to use.

*Image:NodeBrowser shows two nodes*

### Using Enums

You can use custom c# enums as input or output types to operations:
```csharp
public enum DemoEnum { Foo, Bar };

public static string StaticEnumDemo(DemoEnum e)
{
    return e.ToString();
}
```

![](../../images/libraries/vl-libraries-writingNodes-StaticEnum.png)
<center>Enum IOBox in VL patch</center>

For an example of a dynamic enum (ie, one whose entries change during runtime), see below.

### Using Generics

VL embraces generics, so of course you can write generic nodes easily:

```csharp
public static string Generic<T>(T input)
{
    return input.ToString();
}
```

![](../../images/libraries/vl-libraries-writingNodes-Generic.png)
<center>Generic pin out of node</center>

### Operating on Spreads

The c# IEnumerable<> appears as Sequence<> in VL:

```csharp
public static IEnumerable<float> ReverseSequence(IEnumerable<float> input)
{
    return input.Reverse();
}
```

![](../../images/libraries/vl-libraries-writingNodes-Spreads.png)
<center>Spread node</center>

### Documentation

Use XML documentation in C# to provide some information about your nodes:

* Summary: A one-liner info about the node
* Remarks: Some additional remarks, like usage instructions, warnings,.. can be multi-line
* Param name: Short info for each Input
* Returns: Short info about the result of the node

```csharp
///<summary>Multiplies input by two</summary>
///<remarks>Some additional remarks</remarks>
///<param name="a">The A Parameter</param>
///<returns>Returns 2 times a</returns>
public static int HTMLDocuTest(int a)
{
    return a*2;
}
```

![](../../images/libraries/vl-libraries-writingNodes-Documentation.png)
<center>Documentation shows up in NodeBrowser and Tooltip</center>

> [!NOTE]
> Don't forget to enable "XML Documentation File" in the c# projects properties to make sure the .xml file holding the documentation is generated. This file will then always need to be next to the .dll, therfore always move those two files together!

### C# Ref Paramters

You can use C# _ref_ parameters, but beware: Assigning the parameter leads to undefined behavior in VL (for now), so never write to but only read from _ref_ parameters!

```csharp
public static int RefParams(ref int firstInput)
{
    return firstInput + 4444;
}
```

![](../../images/libraries/vl-libraries-writingNodes-RefParam.png)
<center>A node with a _ref_ parameter as an Input</center>

### Datatypes

Any datatype that you define as class or strcut in c# can be used in VL:

* Any constructor will be available as a Create node
* Any get-property will show up as a node returning the properties value
* Any set-property will show up as a node called Set.. allowing you to set the properties value
* Any public member operation will be available as a node in VL. Private or Protected operations will be ignored.

```csharp
public class MyDataType
{
    private float FX;

    public MyDataType(float x)
    {
        FX = x;
    }

    public float AddValue(float value)
    {
        var lastFX = FX;
        FX += value;

        return FX;
    }
}
```

![](../../images/libraries/vl-libraries-writingNodes-Datatypes.png)
<center>Corresponding nodes</center>

### Events/Observables

VL translates .net events that conform to the [.NET Core Event Pattern](https://docs.microsoft.com/en-us/dotnet/csharp/modern-events) to Observables automatically. So you can simply use events in your code and then access them in VL via the Observable pattern.

Here is an example of c# events without and with event arguments:

```csharp
public class MyDataType
{
    public event EventHandler OnValueChanged;
    public event EventHandler<MyGenericEventArgs<float>> OnValueExceeded;
    ...
}

public class MyGenericEventArgs<T> : EventArgs
{
    public readonly T Value;

    public MyGenericEventArgs(T value)
    {
        Value = value;
    }
}
```

In your code those could be called like this:

```csharp
public float AddValue(float value)
{
    if (value != 0)
    {
        FX += value;
        OnValueChanged?.Invoke(this, EventArgs.Empty);
    }

    if (FX > FThreshold)
        OnValueExceeded?.Invoke(this, new MyGenericEventArgs<float>(FX));

    return FX;
}
```
In VL those events are available as nodes of the same name that return an `Observable<EventPattern<>>`:

![](../../images/libraries/vl-libraries-writingNodes-Observables.png)
<center>How this looks in VL: a) Member Operations, b) ValueChanged event without any arguments, c) ValueExceeded event with an argument</center>

* In case your event does not have any arguments _(section 'b' on the image above)_, but simply sends a bang when something happens, use the `On Data` output of the HoldLatest [Reactive] node to be informed of the event.

* If your event does have arguments _(section 'c' on the image above)_ you'll receive an `Observable<EventPattern<MyGenericEventArgs<>>>` which you'll have to unpack using the EventArgs [Reactive.EventPattern] node, which is available via the VL.DevLib package. The node then gives you access to the Sender and Value of the EventArgs.

![](../../images/libraries/vl-libraries-writingNodes-Observables-EventArgs.png)
<center>Unpacking using EventArgs</center>

For general information on workig with Observables see the chapter about [Reactive Programming](reactive.md).

### Dynamic Enums

Dynamic enums are useful in cases where you want to offer users a list of items to choose from, where the entries of that list may change during runtime. A typical example are nodes that give access to hardware devices that can be plugged in and removed anytime.

Consider a normal enum in c#:
```csharp
enum MyEnum = { Foo, Bar }
```
Here `MyEnum` is what we call the type and `{ Foo, Bar }` makes its definition.

And the way we want to use such an enum in our code is to have it as the type of an input parameter to one of our operations,  like this:
```csharp
public static string EnumDemo(MyEnum e)
{
    return e.ToString();
}
```

#### Implementing dynamic Enums for VL

Now in order to create a dynamic enum for VL we also need those two elements, the type and the definition. Both need to be implemented as classes in c#:

* The type needs to implement `IDynamicEnum`
* The definition needs to implement `IDynamicEnumDefinition`

both of which come with the VL.Core nuget.

To make their use easier there are also baseclass implementations available:

* `VL.Lib.Collections.DynamicEnumBase<T, U>`
* `VL.Lib.Collections.DynamicEnumDefinitionBase<U>`
* `VL.Lib.Collections.ManualDynamicEnumDefinitionBase<U>`

Note that the definition base classes are Singleton, meaning that its implementation takes care that always only one instance exists of it globally. We want this because it is important that any node that is referring to a specific enum definition always gets exactly the same entries!

Using the above two baseclasses, an implementation of your own dynamic enum could look like this:

##### 1. Create an enum type

First derive from the `DynamicEnumBase` to create your own enum type.

```csharp
[Serializable]
public class MyEnum: DynamicEnumBase<MyEnum, MyEnumDefinition>
{
    public MyEnum(string value) : base(value)
    {
    }

    [CreateDefault]
    public static MyEnum CreateDefault()
    {
        //use method of base class if nothing special required
        return CreateDefaultBase();
    }
}
```

The code above most likely doesn't need many changes for your own implementation except:

* Give it a proper name instead of "MyEnum", something like e.g. "MidiInputDevice". Note the singular in the naming: This type represents one entry in the enumeration.
* Note the second type parameter `MyEnumDefinition` which connects your enum to its definition and should similarly be called "MidiInputDeviceDefinition"

##### 2. Provide available entries

Derive from `DynamicEnumDefinitionBase` to implement the class that provides the available entries of your enum to the system. Here you only have to override two functions: One that can return a list of current enum-entries as strings and another one that tells the system when your enum-entries have changed.

```csharp
public class MyEnumDefinition : DynamicEnumDefinitionBase<MyEnumDefinition>
{
    //return the current enum entries
    protected override IReadOnlyDictionary<string, object> GetEntries()
    {
    }

    //inform the system that the enum has changed
    protected override IObservable<object> GetEntriesChangedObservable()
    {
    }

    //optionally disable alphabetic sorting
    protected override bool AutoSortAlphabetically => false; //true is the default
}
```

Implementations here will vary depending on your usecase. A simple example could look like this:

```csharp
public class ComPortDefinition : DynamicEnumDefinitionBase<ComPortDefinition>
{
    protected override IObservable<object> GetEntriesChangedObservable()
    {
        return HardwareChangedEvents.HardwareChanged;
    }

    protected override IReadOnlyDictionary<string, object> GetEntries()
    {
        Dictionary<string, object> portNames = new Dictionary<string, object>();

        foreach(var portName in NetSerialPort.GetPortNames()
            .Where(n => n.StartsWith("com", StringComparison.InvariantCultureIgnoreCase)))
        {
            //the return dictionary holds the names of the entries as key with an optional "tag"
            //here the tag is null but you can provide any object that you want to associate with the entry
            portNames[portName] = null;
        }

        return portNames;
    }
}
```

In VL you can then access the tag of the selected enum entry using the Tag [Collections.DynamicEnum] node.

The ManualDynamicEnumDefinitionBase can be used if you need to add and remove entries in a VL patch. It comes with nodes like AddEntry, RemoveEntry and Clear:

```csharp
public class MyEnumDefinition : ManualDynamicEnumDefinitionBase<MyEnumDefinition>
{
    //this is optional an can be used if any initialization before the call to GetEntries is needed
    protected override void Initialize()
    {
        //add two default entries on initialization
        AddEntry("abara", null);
        AddEntry("kadabara", null);
    }

    //add this to get a node that can access the singleton instance from everywhere
    public static MyEnumDefinition Instance => ManualDynamicEnumDefinitionBase<MyEnumDefinition>.Instance;
}

```

> [!NOTE]
> For the `Observable` type you need to install the 'System.Reactive' nuget.

##### 3. Introduce the enum to VL

Lastly there is one thing you'll have to do in VL to get your dynamic enum working: So far when you create a node in VL that has an input typed with your `MyEnum`, the inputs tooltip will show "null". This is because the VL type system does not know how to deal with the type yet. What we want, is that the type-system automatically creates an instance of `MyEnum` whenever it encounters it.

For this to happen we have to introduce the enum to VL which has to be done using a Typeforward:

1. In the .vl document where you have set a reference to the .dll that holds your enum open the Solution Explorer (<span class="keyseq"><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>J</kbd></span>).
2. Unfolding it, you should see the `MyEnum` type which you can drag-drop onto the document patch. This makes the enum available for the VL type system and allows it to initialize the type, whenever it encounters it.

![](../../images/libraries/vl-libraries-writingNodes-DynamicEnums-CreateDefault.png)
<center>Creating a TypeForward for `MyEnum`</center>

Now you will see a valid instance in any pin that uses `MyEnum` and you can create an IOBox to control it.

![](../../images/libraries/vl-libraries-writingNodes-DynamicEnums.png)
<center>How this looks in VL</center>
