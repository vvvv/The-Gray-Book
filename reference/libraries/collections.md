# Collections

A large number of different collection types is shipping with the VL.CoreLib:

## Sequence
The base type for collections in VL is the _Sequence_. It corresponds to what is known as _IEnumerable_ in .net world. We just gave it a more human-readable name.

## Spread
The Spread is a specialized sequence. The elements in a spread are called slices. When asking a spread with 4 slices for the slice with index 6, instead of complaining, it takes the index modulo its count, ie 4 mod 6 = 2 and returns the slice with index 2.

## SpreadBuilder
The SpreadBuilder is the mutable variant of the Spread for use in scenarios where performance counts. A typical scenario would be when slices need to be added/removed to/from a spread in a loop. In such a case use a SpreadBuilder to modify the spread and use ToSpread in the end to go back into the save immutable world.

## Dictionary
The Dictionary is a key-value collection. Items (values) are added to the dictionary given a label (key). Keys have to be unique and can therefore be used to retrieve individual values from the dictionary.

The key is often a string, but can really be any other datatype.

## HashSet
