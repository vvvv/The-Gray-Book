# Custom Regions

Regions can be descibed as *node-like building blocks that have a hole inside*: 
They do something specific - this is the part where they are similar to nodes.
But they are somehow "unsure about the details", so they let the end-user step in and ask for those details - this is what makes them regions.

In general we can describe regions as nodes with a *callback mechanism*: A way to call back that small patch inside the region, patched by the end-user of the region.

# Region flavors

VL offers several of those callback mechanisms for region developers. 

* Delegate-based callbacks
  * short lived (stateless)
    * `Func<>` or `Action<>` based
    * based on a custom delegate type (typically declared in C#)
  * long running, process-like (stateful)
    * based on two delegates (one for creating a state, one for updating the state)
* Regions built with the `CustomRegion` API
  * long running with support for border control points

## Delegate-based Regions
Delegate-based regions allow a region designer to feed any data into the inside of the region and request back any other data. 
All you need to do is to 
* `Invoke` a delegate of any type - e.g. `(Vector2, Rectangle) -> Boolean`
  * feed the data into the inside of the region by feeding data to the `Invoke` call
  * use the returning value somehow meaningful

Now what's left is to actually delegate the task of filling in the details to the user of your region - to the application side. 
You do this by asking for a specific "delegate implementation":
* Create an Input Pin and connect it to the first pin of the Invoke node. VL now knows that the node you are currently designing can be either
  * a node with a delegate Input pin or
  * a region!   

By that you basically let the "delegate implementation" of the user / the inside of the users' region flow into your algorithm. 

You now can reason about when to call back that patch. For example you could call back the patch several times or just when some condition is true. You have complete freedom regarding when to call back the users application of your region.

### Custom delegate types
These allow you to define Regions that come with nicely named Pins.
If you are not afraid of C# then please give them a try! 
* They enhance the readability of the Region as you can name your pins
* They allow for several Outputs

For details see: https://github.com/vvvv/VL-Language/issues/5

### Stateful - delegate-based
The basic idea here is that the region is built in a way that it allows for process nodes to be placed inside.

Regions of that flavor can 
* instanciate the user patch and 
* update the patch.

Typically, those regions manage only one instance of the users’ patch. However, you are free to manage as many instances of the patch as you wish.

The help browser offers you an example: *Stateful Delegate-based While Loop*.

## `CustomRegion` API based
Since 4.0 VL offers a way to build regions that have `Input Border Controlpoints` (BCP) and `Output BCPs`. And again: you can patch them.

This is a powerful feature as it allows the end user stay in the flow. Getting data into or out of the region suddenly is effortless. 

*Border control points connect the inside and outside, meaning the ‘hole’ you cut into your node cannot be arbitrary. In the delegate-based version, you could delegate anything to the user, exchanging data that only the user patch and your algorithm needed to know. With border control points, the inside and outside are conceptually more interconnected.*

Here are some regions that showcase the CustomRegion API:
* Comment
* Do
* Try
* ManageProcess

### Usage

In order to patch a new region, all you need to do is to 
* define a new `Process` 
* have an input pin typed `ICustomRegion` on `Update`
* use the configuration menu on the input pin to configure certain aspects of the region.

The workflow up to now is very similar to how you had an input pin of type Delegate earlier on, just this time it is of type `ICustomRegion`.

When you now instanciate your new region via the node browser in your help patch, you already will get a region. No questions asked. *If you are unhappy that you didn't get asked for Node or Region by the node browser: Check the configuration menu of that Region input pin*

What you are telling the VL system is: I want to define a region, but actually let me just patch that. Dear VL System, you just need to hand me over the specific usage of the region by the user. Tell me everything about the application/user side, let me reflect over that, and I'll take care of the rest by just patching the logic of the region. 

So, now you can use that custom region instance and ask for the specifics and how the user actually used your region.

The `ICustomRegion` type:
* `Input`, `Outputs` are describing the input and output BCPs. You can see this as a reflection-like API that allows you to reason about the static nature of how your region got used.
* `InputValues` allows to inspect the values that flow into the regions' input BCPs.
* `SetOutputValues` allows to finally write into the output BCPs. These are the values that will flow downstream of the region.

Up to now we only focused on the outside of the region. Now let's tackle the inside:

* `CreateRegionPatch` allows you to instanciate one instance of the user patch, retieving a `ICustomRegionPatch`, a type that basically only allows you to update that users' region patch. 

You normally only want to manage the lifetime of one instance, but are not limited to that - thus the seperation into the *region* (`ICustomRegion`) and the instanciation of the *inside* of the region (`ICustomRegionPatch`).

If you only want to manage one instance you might want to use the helper node `CustomRegionPatch`, that takes care of
* instanciating one instance in the beginning of the lifetime of the region application
* calling update of the region patch each frame
* disposing the disposable parts of the users' patch (e.g. some of those used process nodes)

Please see `Do [Control]` or `ManageProcess [Primitive]` for examples and more comments.

The `Do [Control]` is escpecially interesting as it is very basic.
The regions purpose is a bit thin on the first glance:
It only 
* takes the incoming values
* feeds them to inside perspective input BCPs
* calls the patch
* takes the values that ended up on the inside of the output BCPs
* and finally makes these values accessible to the outside perspective of the region

So basically it does nothing. It just executes the inside. Why would I use such a region ever? As a user I could have just not used the region, and my nodes would have been executed as well, so what's the point? Well, subtelties only. It helps sometimes to structure your code. It is very very much comparable to a code block in a textual language.

Anyway. You want to create a region that does more? Just patch along!

* Take the input BCP values, do something with them and then feed them to the inside of the region
* Or take whatever the user patched as output BCPs, try to reason about them, do something with them and feed the transformed values to the outside of the region.

Now your imagination is needed...

#### Configuration options
* **Node Or Region** - whether the region can also be created as a node. Useful when composing regions.
* **Supported Control Points** - choose what kind of control points your region supports:
** `None` - no control points are allowed
** `Border` - rectangle shape, the data shouldn't be modified by the region when crossing the border
** `Accumulator` - diamond shape, the control points come as a pair, the output should be same as the input if the region doesn't execute
** `Splicer` - triangle shape, when crossing the border the input data should get split apart and the ouput data should get put back together. The splitting and joining needs to be handled by the region. However the system will help out with the typing of the inner and outer parts of the control points (if a type constraint is specified).
* **Control Point Type Constraint** - define the type constraint the system will put on each control point. For example if you specify `Spread`, then the user will only be able to connect spreads to the region. For splicers the system will try to align the inner type argument with the inner part of the control point.

#### User Expectations
When you design your region you might focus on BCPs with a certain data type. Note however: the user might still want some standard behavior for when the data type is different. Consider to implement a fallback mechanism for such a BCP that just channels the untouched data from the outside to inside or the other way around, very much like seen in the `Do [Control]` region.

#### Current Limitiations
Note that there are still some constraints for your ideas :(
* It's not possible to define multiple control point kinds (like `Accumulator` and `Splicer`)
* Pins inside the region patch are not supported. So you currently always need to use BCPs. A workaround for this limitation is to check for a BCP with a certain name or type and treat this differently. 

Please let us know of your needs: https://github.com/vvvv/VL-Language/issues/51

## `IRegion` API based
With the release of VL 7.0 we introduced a more generalized region API `IRegion<TInlay>` which no longer suffers from the limitations of `ICustomRegion`.
It allows the developer of a region to fully define the shape of the inner part simply via an interface. Whether that interface is specific to that region or it refers to an already existing one doesn't matter.
It further makes no assumptions on how the in- and output data is stored. Instead it tells the region exactly when it passes data to or retrieves data from it.

### Examples
There's currently one example called *IfElse* to be found in the help browser under API / Custom Regions.
It defines an interface called `IIfElsePatch` which acts as the patch inlay with two operations `Then` and `Else`.
On open it creates one patch inlay and from then on calls `Then` or `Else` on it based on the input condition.
The same example can also be found written in C# here: https://github.com/vvvv/VL.StandardLibs/blob/main/VL.TestNodes/src/IfElseRegion.cs
Another C# example is the [`ForEach (Key)` region](https://github.com/vvvv/VL.StandardLibs/blob/c4fb51ab5354cac01bf9dbcdac7efe749e47e0f3/VL.CoreLib/src/Control/Synchronize.cs#L345), it also shows that the patch inlay can have pins.

### Usage
* Define a class, inherit from `IRegion` and enable its process.
* Optional: define an interface `IMyPatchInlay` representing the inner part of the region.
* Add an operation called `Update` to your class and make sure it's part of the process. This is a restriction / assumption of the current design and might get lifted in the future.
* Define an operation called `SetPatchInlayFactory` with an input `Patch Inlay Factory` and annotate with `() -> IMyPatchInlay`.
* The region should now be available from within the node browser.
* The `Patch Inlay Factory` pin can be used to further configure what types of control points (if any) are supported. See below for details.
* Add the operation `AcknowledgeInput` which the system will call for each control point and link to pass data into the region.
* Add the operation `RetrieveOutput` which the system will call to retrieve data for each control point.
* Add the operation `RetrieveInput` which the system will call from within the patch inlay to retrieve data for a control point or link.
* Add the operation `AcknowledgeOutput` which the system will call from within the patch inlay to pass data for a control point to the region.

### Configuration options
* ~**Node Or Region** - whether the region can also be created as a node. Useful when composing regions.~ - not yet implemented
* **Supported Control Points** - choose what kind of control points your region supports:
** `None` - no control points are allowed
** `Border` - rectangle shape, the data shouldn't be modified by the region when crossing the border
** `Accumulator` - diamond shape, the control points come as a pair, the output should be same as the input if the region doesn't execute
** `Splicer` - triangle shape, when crossing the border the input data should get split apart and the ouput data should get put back together. The splitting and joining needs to be handled by the region. However the system will help out with the typing of the inner and outer parts of the control points (if a type constraint is specified).
* **Control Point Type Constraint** - define the type constraint the system will put on each control point. For example if you specify `Spread`, then the user will only be able to connect spreads to the region. For splicers the system will try to align the inner type argument with the inner part of the control point.

### Current limitations
While we consider the API in a rather good state (it emerged from serveral proposals over the years, like https://github.com/vvvv/VL-Language/issues/53), the current implementation still has some assumptions / limitations:

* The process must contain an `Update` operation. We'll probably need to add some config options to define how control points are allowed to behave in regards to linking from multiple moments from the outside. Currently input control points are assumed to be on `Update` while output control points can be accessed from other moments as well. This restriction does not apply to inner moments of the region. Our *IfElse* example explicitly allows to connect to the same control point from `Then` and `Else` - last one wins.
* The interface used for the inlay must not interit from other interfaces.
* Type parameters on the interface (generic interface) have not been tested yet.

