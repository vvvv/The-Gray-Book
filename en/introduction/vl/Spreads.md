# Spreads and Other Collections

#### Spread
Spread is a name that we stole from vvvv. It is just a collection of items that is ready to be consumed. In other words: There is some memory in the computer that holds all the items. All the info is there. They can be read, the count is known, their values are known.

What's more though: A spread can't mutate. A spread coming from one data source can be fed to many data sinks and we can guarantee you that all data sinks will always access the same data.

Confusion #1:
Of course the a data source of type Spread may change its output over time. But it will do so by retrieving new spreads. 

Confusion #2:
Of course there are nodes to "change" the content of a spread. You may want to write a new value into it, delete something or add some new item. But again these operations will create new spreads. They won't change the spread coming from upstream.

Here are some operations the spread offers. Some of them are offered as Operation Regions, most of them are nodes.

[TODO: snapshot]

#### SpreadBuilder
There is something called SpreadBuilder that offers a more efficient way to create spreads. A spread builder is mutable and should only be used in places where you need to do many sequential changes on a spread. If you are sure you are ready for performance optimizations already use the ToBuilder node to convert a spread to a builder. And when done convert it back to a regular spread with the ToSpread node. 

We would like to encourage you to use spread builders only locally: to create spreads. Pass around the spread that you just built. Don't pass the builder itself. Even when you need to store a spread for later usage: store the spread, not the builder. It helps when reasoning about a patch.

#### HashSet
The hash set models a (mathematical) set of values.

If you have a set of integers, you may have the numer 2 in there. Once. You can't have in there more than once. The idea of a set is that is holds elements of a certain type. Each possible value of that data taype is either in the set or not.

#### Sequence
All the data types above can be seen as sequences of data.
There is a way of looking through their content item by item.
A "For Each" loop region e.g. needs just that to be able to make the incoming items available in the body of the region.

But from the start: there are different ways of storing items in different collection types. They differ in details that sometimes do not matter! And **one aspect** of all those collections is that you may look through them item by item. 

That is what the sequence type is for. To offer a common ground. If a data sink only needs to sequentailly look through all items it may accept a sequence. If a you create node for others to use you might also just accept a sequence. The user of your node which might be yourself might be happy to be able to feed any collection he/she wants to.


