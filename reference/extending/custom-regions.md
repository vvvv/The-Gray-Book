# Regions

Regions can be descibed as *node-like building blocks that have a hole inside*: 
They do something specific - this is the part where they are similar to nodes.
But they are somehow "unsure about the details", so they let the end-user step in and ask for those details - this is what makes them regions.

In general we can describe regions as nodes with a *callback mechanism*: A way to call back that small patch inside the region, patched by the end-user of the region.

# Region flavors

VL offers several of those callback mechanisms for region developers. 

* Delegate-based Callbacks
  * short lived (stateless)
    * `Func<>` or `Action<>` based
    * based on a custom delegate type (typically declared in C#)
  * long running, process-like (stateful)
    * based on two delegates (one for creating a state, one for updating the state)
* Regions built with the `CustomRegion` API
  * long running with support for border control points

# Delegate-based Regions
Delegate-based Regions regions allow a region designer to feed any data into the inside of the region and request back any other data. 
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

You now can reason about when to call back that patch. For example you could call back the patch several times or just when some condition is true. You have complete freedom regarding when to call beack the users application of your region.

## Custom delegate types
These allow you to define Regions that come with nicely named Pins.
If you are not afraid of  C# then please give them a try! 
* They enhance the readability of the Region as you can name your pins
* They allow for several Outputs

For details see: https://github.com/vvvv/VL-Language/issues/5

## Stateful - delegate-based
The basic idea here is that the region is built in a way that it allows for process nodes to be placed inside.

Regions of that flavor can 
* instanciate the user patch and 
* update the patch.

Often enough those regions only manage one instance of the users' patch, but in theory such a region can also manage the whole lifetime of many instances those patches. For examples see the experimental LifeTimeManagers, like `LiveAndLetDie`. 

### Stateful Get your hands dirty

This workflow still needs some more love:

Search for `UserPatch`. You'll find a helper patch that allowed to declare some stateful region. Take this as an example for now. Note that in your specific case you might need to change the delegate type in order to fit your needs. Copy over that UserPatch and refine it on your side.  

# `CustomRegion` API based
Since 2021.4 VL offers a way to build regions that have `Input Border Controlpoints` (BCP) and `Output BCPs`. And again: you can patch them.

This is a powerful feature as it allows the end user stay in the flow. Getting data into or outof the region suddenly is effortless.  

Where Delegate-based Regions can get arbitrarily complex, only asking for a small detail via a delegate, Regions based on this CustomRegion API are typically focussing only on small tweaks.

Here are some regions that showcase the CustomRegion API:
* Comment
* Do
* Try
* ManageProcess

## Usage

In order to patch a new region, all you need to do is to 
* define a new `Process` 
* have an input pin typed `ICustomRegion` on `Update`.

The workflow up to now is very similar to how you had an input pin of type delegate earlier on, just this time it is of type `ICustomRegion`.

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

### User Expectations
When you design your region you might focus on BCPs with a certain data type.  Note however: the user might still want some standard behavior for when the data type is different. Consider to implement a fallback mechanism that just channels the untouched data from outside to inside or the other way around, very much like seen in the `Do [Control]` region.

### Current Limitiations
Note that there are still some constraints for your ideas :(
* currently the outside data type and the inside data type of one particular BCP is always the same. Splicers on Loop regions actually have different types on the inside and the outside. This is something that might come in the future.
* Pins inside the region patch are not supported. So you currently always need to BCPs. A workaround for this limitation is to check for a BCP with a certain name or type and treat this differently. 

Please let us know of your needs: https://github.com/vvvv/VL-Language/issues/51


