# Detecting Changes  

#### Recap of immutable data and how to produce new values
They are easy to digest in dataflow oriented patches, as you never need to reason about when you look at something immutable, it's always in that frozen state. The only way to have just a little bit of joy with not changing memory is to allocate some new memory, produce new objects, which capture the new immutable value.
So, when changing a property in a Record, you get a new snapshot, a new object that captures that new state. When adding a slice to a spread you get a new spread object.

#### Is the data flowing over a link changing over time?
The "Changed" node should probably be called ChangedReference as it is only capable of detecting exactly those changes where it gets confronted with new objects. It can't detect changes inside mutating objects. This however is also interesting sometimes. E.g. in Elementa or bigger object graphs, you want to mutate your objects in order to avoid huge memory allocations all the time. 

#### Mutable Object "Snapshots" 
The idea of having different "snapshots of object over time" is just very nice. If there is an easy way to detect that last time you saw snapshot 17 and now it's snapshot 31 of that same object then you'd even be noticing changes that happened a while ago when you weren't watching. I like to call this a ticketing system, and I think it's also called that way in Elementa. As a lib developer, you just add an integer property "Ticket" to your object and count up whenever you want to do changes to a mutating object. Now you can check whether a Ticket of an object has changed: with the Changed node.

#### Immutable Object Snapshots share an Identity
Btw. another interesting fact regarding snapshots of Records: when producing a new snapshot by adding a slice to a spread or setting a property of a Record you get a new object, that shares the "Identity" with the object that it was "cloned from". Thus: you can "see" that certain snapshots belong together. 

#### Changed nodes are everywhere
In the tooltip the "clock" also visualizes whether the data changed. Filled means changed object, stroke-only means same object as last frame.

Also, each input border controlpoint of a Cache region contains a Changed node.