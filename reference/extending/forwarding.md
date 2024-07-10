# Forwarding .NET Libraries

By [Using .NET Libraries](using-net-libraries.md) we have direct access to a vast range of nodes for patching. Many of those libraries though will not be very convenient to use in the dataflow context of VL.

To make those libraries accessible to more casual users we often want to curate exactly what nodes and types of the original library are seen by them. Forwarding allows us to insert a very thin wrapper layer to conveniently provide such curation.

## Reasons to Forward
* Selectively forward types and operations of .NET .dlls
* Adjust VL relevant meta information on the types (like mutability and known type structure)
* Choose a relevant category for the nodes and types in VL
* Do simple unit or type conversions (e.g. from angles in radians to angles in cycles)
* Rename pins, operations, types
* Set default values for input pins
* Provide convenience process nodes that wrap some low-level functionality into more high-level nodes
* Design lifetime management of disposable objects

> [!NOTE]
> An important aspect when forwarding types from a library is that we don't want to introduce new wrapper-types. Therefore using Forwarding does not introduce new types!
>
> Forwarded types are compatible to the original library in order to allow users to fall back to low-level functionality of the original library and combine that with the use of the higher-level wrapper.
>
> Also, the wrapper can act as a useful layer to shield the end-user of a vl-library from changes in the original library. Instead of confronting a vl-user directly with the (e.g. naming) changes of an original library, forwards allow us to implement ways to not break patches in such cases.

## Forwarding Types
In a typical scenario you create _one .vl document_ to forward types from one or more .NET .dlls or C# Projects (.csproj). This .vl document is then the only thing a user of your library will have to reference.

## Create Type Forward
### 1. Set a reference to the .NET .dll or .csproj
In a blank .vl document set a reference to the .NET .dll(s) or .csproj files you want to forward types from. See [Referencing Files](../libraries/referencing.md#Files).

### 2. Prepare a Category
An imported type will show-up in the [category](../language/categories.md) you place it in. So, create the categories you need in your documents [Definition Patch](../language/patches.md#definitions-patch).

### 3. Create Type Forward
There are two ways to create a type forward:

#### 3.1 Drag-Drop from the Solution Explorer

1. Open the group you want to drop the type into
2. Open the Solution Explorer
3. Choose '.NET Dependencies'
4. Find the type you want to forward
5. Drag-Drop the type into the group

![](../../images/libraries/vl-libraries-wrapping-dragndrop.png)
<center>Drag-Drop type from Solution Explorer into group</center>

#### 3.2 Manually

1. Open the group you want to drop the type into
2. Create a new _Process_ patch
3. Set the `patch type` to 'Forward'
4. Set a `type-annotation` on the patch

![](../../images/libraries/vl-libraries-wrapping-Manually.png)
<center>Left: Click the `patch type` drop-down and set 'Forward'. Right: Click the `type-annotation` and choose a type from the NodeBrowser</center>

### Configure Type Forward
#### Rename Type
Typically you may want to keep the name of a type from the original library. If you have a good reason to rename it, simply do so.

![](../../images/libraries/vl-libraries-wrapping-Rename.png)
<center>Renaming a Type</center>

#### Forward All Nodes
When you create a type forward, every operation of the type is forwarded as a node by default. If you prefer to selectively forward only a subset of a types' operations, uncheck the 'Forward All Nodes' option.

![](../../images/libraries/vl-libraries-wrapping-ForwardAll.png)
<center>Forward All Nodes</center>

> [!NOTE]
> Even if the option is activated you can still adjust the forwarding of individual operations by simply creating an operation forward for them, see below.

#### Mutability
.NET Libraries don't come with meta information of whether a type is mutable or not. Because of this we need to tell VL manually by setting the mutable flag accordingly.

![](../../images/libraries/vl-libraries-wrapping-Mutable.png)
<center>Mutable checkbox</center>

Since most .NET types are mutable, this flag is activated by default. Here is how to detect whether a .NET type is immutable:

* It only has readonly fields
* Each of its fields is of an immutable type
* Optional: it has `WithFoo(TFoo newValue)` methods to get a new instance (= a new immutable snapshot) of that type, where all fields are set to the values as in this instance, but only the field `Foo` is set to the `newValue`.

In an upcoming version of C# watch out for 'Records'. They should ease the pain for writing immutable types.

#### Known Type Structure
TODO

*Image: Known Type Structure*

#### Create Default
Member operation nodes often expect a type on their main input and throw a 'Null Pointer Exception' as long as nothing is connected to it. In order to prevent this, we need to tell VL how it can construct a default instance of a type whenever needed.

To do so, simply create an operation called `CreateDefault` in a type forward patch and implement it so that it returns an instance of the type. Often this requires nothing more than returning the result of a constructor of the type.

![](../../images/libraries/vl-libraries-wrapping-CreateDefault.png)
<center>Creating a Default for a type</center>

### Process Node
Each type forward can also directly expose a process node. This is exactly the same as exposing a [process node](../language/nodes.md#process-nodes) from an ordinary patch.

* In the forward, navigate to the [Patch Explorer](../language/patch-explorer.md) and activate the "Process Node" checkbox. 
* Then [manually forward](#forwarding-operations) a constructor of your C# type

This gives you a working process node of your C# type.

If you want to expose more than one process node from a single type forward, you have to create an extra [process definition](../language/patches.md#process) for each additional process node. Those will not forward the type but simply use the types operations to create the desired process.

### Forwarding Operations
As shown above, a type forward can easily forward all of its operations automatically. Even with "Forward All Nodes" activated though, it can make sense to manually forward some operations to tweak their pins.

To create forwards for individual operations:

1. Open the type you want to drop the operation into
2. Open the Solution Explorer
3. Choose '.NET Dependencies'
4. Find the operation you want to import
5. Drag-Drop the operation into the type

![](../../images/libraries/vl-libraries-wrapping-DroppingOperation.png)
<center>Dropping the operation into type</center>

> [!NOTE]
> You can also select multiple operations and drop those into the patch at once.

You now have a forwarding operation definition wrapped around the node you want to forward. All pins of the forwarded node are  automatically reflected in the signature of the forwarding definition.  That also means that any change to the signature of the node (ie. pin added/renamed/removed in its underlying .NET code) will also be automatically reflected in the forwarding definitions signature. If for some reason this behavior is not desired, see "Manually managing the Signature" below.

Still you can apply the following modifications to a forward without manually managing its signature:

### Renaming a Pin
If you have a good reason to change the name of a pin, e.g. in order to have it conform to the [VL naming conventions](/reference/language/namings.md), then do so by manually creating an input or output for a particular pin and renaming it.

![](../../images/libraries/vl-libraries-wrapping-ForwardPins-Rename.png)
<center>Renaming a Pin</center>

### Setting a Default
Parameters of operations rarely have meaningful defaults. In order to forward a pin with a proper default, manually create an input for a particular pin and set a default for it.

![](../../images/libraries/vl-libraries-wrapping-ForwardPins-Default.png)
<center>Setting a default on an input via Middleclick or `Rightclick > Configure`</center>

### Hiding a Pin
Even if the automatic forwarding of all pins is on, you can override forwarding of individual pins by simply connecting an IOBox to them.

![](../../images/libraries/vl-libraries-wrapping-ForwardPins-HidingPins.png)
<center>Hiding a Pin</center>

### Type or Unit Conversions
Forwards are a good place to do simple type or unit conversions. Consider an operation that takes angles in radians, but you want to use vl-conform cycles.

![](../../images/libraries/vl-libraries-wrapping-ForwardPins-Conversion.png)
<center>SineWave takes an angle in cycles</center>

### Show Category
By default member operations have this activated while static operations don't. The only reason to change this default should be nodes like the Vector (Join) where the fact that they are members is not relevant to the readability of a patch. Compare the following:

![](../../images/libraries/vl-libraries-wrapping-ShowCategory-Compare.png)
<center>Vector (Join) [2D.Vector2] does not show its category, while GetSlice [Collections.Spreads] does</center>

Rightclick on the header of the operation you're forwarding and choose `Configure > Show Category` to specify whether or not a node shows its type category.

![](../../images/libraries/vl-libraries-wrapping-ShowCategory.png)
<center>Show Category checkbox</center>

### Manually managing the Signature
When forwarding a node, you'll usually want to automatically sync its signature to the one of its surrounding definition. This is why by default the two options which manage this behavior are on:

* Locked Signature (ie. managaged by the system rather than manually by the user)
* Connect to Signature (only works with locked signatures)

A reason to disable these would be if you want to create a stable API for a vl library that you don't want to be automatically adapting to changes in the underlying .NET library. Since a change in the .NET library may cause an incompatibility for users of your vl library you'll want to have the chance to review such changes and decide how to forward them to your API.

> [!NOTE]
> Both features "Locked Signature" and "Connect to Signature" are not limited to usage in forwarding definitions. There are other scenarios where they may be useful.

### Locked Signature
Unchecking "Locked Signature" has two implications:

* Pins in the signature will now no longer automatically be sorted by the x-position of their representations in the patch
* Pins will not be automatically added to/removed from the signature for nodes that have "Connect to Signature" activated, if their signature changed. Instead, the signature will now show warnings which allow you to inspect those changes and react to them

See also [Operation Signature](../language/operations.md#operation-signature).

### Connect to Signature
Connect to Signature is enabled by default for nodes dropped in from the solution explorer for being forwarded. This helps saving some clicks in that it automatically connects the node to the surrounding signature, just as if for each pin you would have created a link to an own pin with the same name. If you want to have more manual control over which pins of a node are being forwarded you can disable the feature.

Rightclick on the node you're forwarding and choose `Configure > Connect to Signature`.

![Connect to Signature](image.png)

*The "Connect to Signature" feature*

## Forwarding Enums
In order to forward an enum from a .dll to the user of a .vl document simply drag-drop the enum onto the patch.

![](../../images/libraries/vl-libraries-wrapping-Enums.png)
<center>Enum Forward</center>

## Wrapping Non-Standard Events or Delegates
Events or delegates in third-party libraries are often a reason for writing a little c# wrapper. While events that conform to the [.NET Core Event Pattern](https://docs.microsoft.com/en-us/dotnet/csharp/modern-events) are conveniently translated to observables in vl automatically, many libraries use non-standard events or delegates in which case you'll have to write a conversion to observable in c# manually using [Observable.FromEvent](https://msdn.microsoft.com/en-us/library/system.reactive.linq.observable.fromevent(v=vs.103).aspx) that comes with the System.Reactive nuget.

Here is an example. Let's assume the library has a datatype `Tablet` that has an event defined like this:

```csharp
public event PacketArrivalEventHandler (int x, int y, int z);
```

and you want to receive a notification when that event is fired, via the output of a node in VL.

First you need to create a class for the type of notification you want to receive in VL. It may look like this:

```csharp
public class PackageArgs: EventArgs
{
    public readonly int X;
    public readonly int Y;
    public readonly int Z;

    public PackageArgs(int x, int y, int z)
    {
        X = x;
        Y = y;
        Z = z;
    }
}
```

Then you can create a static operation node that receives an instance of the `Tablet` in VL and returns an `Observable<PackageArgs>` on its output:

```csharp
public static class TabletHelper
{
    public static IObservable<PackageArgs> PackageArrived(Tablet tablet)
    {
        return Observable.FromEvent<Tablet.PacketArrivalEventHandler, PackageArgs>(handler =>
                {
                    Tablet.PacketArrivalEventHandler paHandler = (x, y, z) =>
                    {
                        handler(new PackageArgs(x, y, z));
                    };

                    return paHandler;
                },
                paHandler => tablet.PacketArrival += paHandler,
                paHandler => tablet.PacketArrival -= paHandler);
    }
}
```


*Image: how this looks in vl*

Note how the node is placed on Create here and saved in a pad, instead of Update in order to have the Observable only created once, which is what we want. If for some reason you need to place the node on Update (e.g. because the Tablet on its input may change), here is a little trick you can add to cache the observable and only re-create it when the input changes:

```csharp
public static class TabletHelper
{
    public static IObservable<PackageArgs> PackageArrived(Tablet tablet)
    {
        return CachedObservables.GetValue(tablet, x => PackageArrived_((Tablet)x))
    }

    static IObservable<PackageArgs> PackageArrived_(Tablet tablet)
    {
        return Observable.FromEvent<Tablet.PacketArrivalEventHandler, PackageArgs>(handler =>
                {
                    Tablet.PacketArrivalEventHandler paHandler = (x, y, z) =>
                    {
                        handler(new PackageArgs(x, y, z));
                    };

                    return paHandler;
                },
                paHandler => tablet.PacketArrival += paHandler,
                paHandler => tablet.PacketArrival -= paHandler);
    }
}
```
