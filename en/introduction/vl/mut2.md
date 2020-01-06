# DataFlow and Mutability

TODO: place the same image from data flow in here.

#### Immutable Data and Data flow
Let's focus on the HSV nodes' output pin which is a data source for two other nodes. Two links start from here, so both receiving nodes will receive that same color computed by the HSV node. Remember: only the data source should be the source of data. There is no way of messing this up. And there should be no way of messing this up.

This is essential to be able to understand the patch. The data is coming from up there, solely from the data source (the output pin of the HSV node). That's all that matters. Any exception to that rule would destroy the basic idea of data flow that is **data is flowing from source to sink only**.

And for the brave: our reasoning on mutable data types and data flow:
#### Mutable Data and Data flow

Working with mutable data shouldn't break this general data flow rule. Yet it is hard to ensure this. A node taking the reference to a certain memory location might just write to it. The next node would encounter **this new value** not the one it is linked to. You could argue: "Well in this case it is the reference that is flowing not a frozen snapshot. I am aware of that." Still, it opens up a whole range of problems since a patch only describes data flow, not order of execution. Which of the receiving nodes will execute first? The one on the left? And by that having an effect on the one to the right?

So since for now VL doesn't allow you to define execution order you have to take care of this yourself. The only hint VL gives you is marking links that carry mutable data: These are the dashed links. If a dashed link has a "yellow sock" warning this means the you need to be aware of the execution order. Otherwise you may receive unwanted results. 
