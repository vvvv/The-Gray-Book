# DataFlow and Mutability

TODO: place the same image from data flow in here.

#### Immutable Data and Data flow
Let's focus on the HSV nodes' output pin which is a data source for two other nodes. Two links start from here, so both receiving nodes will receive that same color computed by the HSV node. Remember: only the data source should be the source of data. There is no way of messing this up. And there should be no way of messing this up.

This is essential to be able to understand the patch. The data is coming from up there, solely from the data source (the output pin of the HSV node). That's all that matters. Any exception to that rule would destroy the basic idea of data flow that is **data is flowing from source to sink only**.

#### Mutable Data and Reference flow

Mutable Data also flows downwards, however this time it is more meaningful to state: a reference to the data is flowing downstream. The receiving nodes now can change the data in-place, meaning that every other sink that got handed a reference to that object will see the changed object. 

The fact that sinks can influence each other, makes it more important to not only think about data flow, but also execution order. You will need to think more imperatively, less in a declarative way. In particular you will try to patch more vertically, where the patch reads more like a big list of instructions, that only can be executed in a certain way. 