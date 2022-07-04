# Builders of Immutable Data

Immutable types - like spread - are easy to digest in dataflow oriented patches, as you never need to reason about when you look at something immutable, it's always in that frozen state. The only way to have just a little bit of joy with not changing memory is to allocate some new memory, produce new objects, which capture the new immutable value.
So, when changing a property in a Record, you get a new snapshot, a new object that captures that new state. Now imagine the Spread being such an immutable thing. When inserting or deleting (...) slices you often enough produce a complete new collection. That's why it's sometimes helpful to use a builder for that immutable thing. A builder captures the idea, that while trying to describe the spread you want to have, you are completely fine with this thing being mutable - thus not producing any temporary collections you don't need. When done, basically when letting it flow outof your patch in order to be consumed by other patches, the idea would be to turn it into something easily digestible again: a spread.

Note: There are different clever builders. E.g. the Cons node also uses a builder, but one that is aware which values got consed last frame, and if those are the same as this frame, then no new spread gets produced. Similar the builder that is used inside a splicer output of those loop regions.

But ok, that's yet another topic: "managing snapshots of spreads over time, producing as few garbage as possible".

While starting from some spread, switching to builder, doing some modifications and switching back to spread is a more established concept that works in operations as well and doesn't have anything to do with comparing spreads over time...