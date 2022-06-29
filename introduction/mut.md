# Data and Mutability

There are basically two different ways to think about data. You might state: "Data is immutable. Red will be always red. And 15 will always be 15. The number 15 doesn't mutate, age or transform. Neither does Pi." But you may also think about data as something that is stored in some memory of the computer. Isn't this also data? Something that can be stored in memory? Of course. So what if the value changes that is stored at that particular place in memory. Didn't the data itself change?

We won't solve the issue of confusion. We can just try to be as precise as possible and by separating both ideas. So what we do is: we actually treat both as different data. A color for us will always be immutable. If you need the notion of "a mutating color" we may later on look into ways of letting you do this, but the main point is that you would have to model a new data type to do this. Colors themselves are immutable. Discussion over. 

By doing this, we are separating the differing ideas of what data is again with the same approach that helped us to separate all the possible data earlier on: via data types. Mutability or immutability is just something that can be said about a type: 

A color is immutable. A number is immutable. A string (text) is immutable. And your own data types will also be immutable by default.

#### Immutability is our default
When talking about data later on in the book you should always think of that data as being immutable. Most of our basic data types are immutable. As soon as we encounter mutable types we'll also use the term reference (to some location in memory) or (shared) memory to underline the difference to the default.

While other systems embrace the idea of data being a reference to mutating memory mainly out of low level performance reasons, we embrace the idea of immutable data and encourage you to deal with this kind of data as long as possible. 

Immutable data makes reasoning about data flow much more pleasant than when dealing with references. We'll look into data flow in the next chapter. Immutable data also has advantages when reasoning about parts of a program running in parallel on different cores of a modern processor, which is another reason for our decision of making immutable data the default.