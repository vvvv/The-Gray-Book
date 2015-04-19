# Defining versus Using

Up to know we looked at what happens inside a patch. We were using nodes, applying nodes, calling nodes. All these terms mean the same thing: usage.

But while patching we built up new functionality. So we should be able to use that somewhere else. And of course this is possible. Like in vvvv patches define new nodes.

So a patch defines a node? Actually one patch may define a bunch of different nodes as we'll see later on.

So when looking at a patch: 
* we see the usage of other nodes 
* we see that those nodes may be used within regions

But there is more:
* we see the definition of our own nodes 
* we might even see the definition of our own data type. 
 
Because of the fact that we are looking at quite different things at the same time, we'll try to separate both definition and usage throughout the book when not obvious through the context.

We'll have a brief look at nodes in the next chapter, but postpone defining nodes to [Patches as Defining Constructs](patches.md).

*One Note for users coming from vvvv: *

*In vvvv a sub patch behaves like an new instance of the patch. Using the sub patch several times lead to several patch windows docked into each other, right? Right clicking the node representing a sub patch opened up the particular instance. In VL this is different. There is one place to define the functionality, not several synced places for the same patch.*