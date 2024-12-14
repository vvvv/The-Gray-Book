# Introduction for .NET programmers

VL is a visual programming language for [.NET](https://en.wikipedia.org/wiki/.NET). It combines dataflow programming with features known from object-oriented programming. vvvv is the editing environment for VL.

Versions 5.x of vvvv are using .NET6
Versions 6.x of vvvv are using .NET8

With direct access to all of .NETs libraries you can basically use it as just another .NET language like C# or F#. But since most of those libraries were not created with dataflow in mind, we've curated a library for you that is much more comfortable to use and is the default referenced library when creating a new VL document.

## Language Features
If you're familiar with programming in C#, VL should feel quite familiar, apart from the fact that it is visual. Here are a few things things that will be new to you though:

### Spreads
The main collection type in VL is called __Spread__ and its individual entries are called __Slices__. The Spread is an immutable collection with one special feature: If you're calling `GetSlice(Index)` on it, with an index that exceeds its count, instead of an error you get the slice with the index taken modulo the count.

E.g. if you have a spread with 5s slice and you're asking for slice 7, you get slice 2.

### Foreach with Multiple Inputs
Where in C#, a foreach loop can only iterate over one collection at a time, in VL you can iterate over many collections at the same time. The number of iterations executed, is determined by the collection with the smallest count.

## Renamings
In general we try to do as little renaming as possible when importing data types. But for collections we took the liberty to do the following renamings from the original ones:

* All immutable .NET collections drop the *Immutable* pre-fix since it's the default in VL
* All mutable .NET collections get a *Mutable* pre-fix
* IEnumerable is called Sequence

## Getting Started

Here are a few workshop recordings particularly suited if you have a background in .NET:
- [Introduction to vvvv For Coders](https://vimeo.com/467725726)
- [Using .NET NuGets](https://vimeo.com/467351841)
- [Object Oriented Patching](https://vimeo.com/467436333)
- [Introduction to Reactive Patching](https://vimeo.com/467724898)
- [Turning a .NET library into a VL library](https://vimeo.com/467350999)
- [Talk introducing vvvv to .NET developers](https://youtu.be/-Rr7QRYlZDc)

Then head back to the [Overview](../overview.md#tutorials) for more sources of learning content. 

You may also want to find out how you can [extend vvvv](../../extending/overview.md) and have a look at our [Demo Library](https://github.com/vvvv/vl.demolib) including C# and F# examples of writing your own nodes for VL.

Any questions left? Get them answered in the [forum](http://forum.vvvv.org) or [chat](https://app.element.io/#/room/#vvvv:matrix.org).
