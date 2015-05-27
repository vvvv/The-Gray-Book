# Numeric Values

#### Floating Point numbers 
A Floating point number is what most people would call a real number or a decimal number, like 12.34.

The reason for calling them floating point is the way they are stored internally which might be a flawed reason for a name. However since there are different ways to encode a real number we stick to calling those by the way they work internally.

And while at it we decided to go one step further than other languages in the cryptic naming of our number types. We add bit count to their name.
* Float32
* Float64

The reason for that is that both 32bit floating point and 64bit floating point are widely used. In the long run every language that wants to be precise on what the machine must do needs to be able to work with both data types. And there are more: 16bit floating points, 128bit floating point. You get the point. Using another name for each feels wrong. The only thing that separates these data types is the precision with which they manage to store a real number value.

#### Integers
Surprisingly with integers there are even more different types. All just for storing whole numbers. They start with 8 bit and typically go up to 64 bit. There are even unsigned and signed versions. Signed integers are able to store negative and positive numbers. Unsigned versions can only store positive numbers. In the long run we'll have them all. We are starting with the signed versions that can hold negative numbers also:
* Integer32
* Integer64

Where any other language would need to explain the names and what precision they stand for I guess I don't need to elaborate on this given their names.

#### Boolean

A boolean value is either 0 or 1 a.k.a. false and true.

#### Compatibility
A boolean is either 0 or 1. But these are whole numbers also! So booleans are integers? Yes. When a data sink needs an integer value, you may link boolean data to it.

A number 5 is an integer but it also is a real number. Whole numbers are part of all the real numbers. Real numbers are not defined to be fractional, they can be just whole. It's fine. Because of this you may feed integer data into a float data sink. 

In both cases an implicit conversion is happening.




