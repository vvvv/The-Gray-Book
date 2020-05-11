VL is a visual programming language for the [.NET Framework](https://en.wikipedia.org/wiki/.NET_Framework). It combines dataflow with features known from object-oriented programming and builds directly to the [.NET Intermediate Language](https://en.wikipedia.org/wiki/Common_Intermediate_Language).

With direct access to all of .NETs libraries you can basically use it as just another .NET language like C# or F#. But since most of those libraries were not created with dataflow in mind, we've curated a library for you that is much more comfortable to use and is the default referenced library when creating a new VL document. The VL.CoreLib is built on top of [.NET Standard](https://docs.microsoft.com/en-us/dotnet/standard/net-standard).

## Renamings
In general we try to do as little renaming as possible when importing data types. But for collections we took the liberty to do the following renamings from the original ones:

* All immutable .NET collections drop the *Immutable* pre-fix since it's the default in VL
* All mutable .NET collections get a *Mutable* pre-fix
* IEnumerable is called Sequence

## Language Features
If you're familiar with programming C#, you'll mostly find yourself around with VL. Here are a few things things that will be new to you though:

### Spreads
The main collection type in VL is called __Spread__ and its individual entries are called __Slices__. The Spread is an immutable collection with one special feature: If you're calling `GetSlice(Index)` on it, with an index that exceeds its count, instead of an error you get the slice with the index taken modulo the count.

E.g. if you have a spread with 5 slice and you're asking for slice 7, you get slice 2.

### Process Nodes

### Foreach with Multiple Inputs
