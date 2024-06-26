# Serialization and Deserialization

*Serialization is the process of translating data structures into a format (text or series of bytes) that can be stored (for example, in a file) or transmitted (for example, across a network) and reconstructed later. The opposite operation, extracting a data structure from a serialized format, is called deserialization.*

via [Wikipedia](https://en.wikipedia.org/wiki/Serialization)

## Common Formats

There are many ways this can be done but there are three commonly used text formats for serialization, called [XML](https://en.wikipedia.org/wiki/XML), [JSON](https://en.wikipedia.org/wiki/JSON) and [CSV](https://en.wikipedia.org/wiki/Comma-separated_values). While binary formats are typically smaller, which results in faster read/write times, the advantage of text formats is human readability which helps with debugging and version-control. When interacting with the web it is common to choose JSON as this can be easily parsed and created from java-script.

## Automatic
When you need to send data-structures from one instance of your application to another over a network and the data does not have to be saved to disk, chances are that you don't care about the actual format.

In this case you can use one of the runtime serializers provided that can serialize most datatypes directly without the need for building an extra data-structure for serialization. While this is quick and easy, it comes at the cost of not having any control over the format and thus may have some overhead in the formats size, as the serialization process may include data that you'd not even need to serialize. 

For serialization to XElement (ie. XML) best use the nodes from the `System.Serialization` category: 
* Serialize -> XElement -> Deserialize
* Serialize (Log Errors) [Advanced] -> XElement -> Deserialize (Log Errors)

Further, the following nodes from the package `VL.Serialization.FSPickler` can be used:

* Serialize (XML) -> String -> Deserialize (XML)
* Serialize (JSON) -> String -> Deserialize (JSON)
* Serialize (Binary) -> MutableArray of Byte -> Deserialize (Binary) 

> [!NOTE]
> The serialized format these nodes generate is "volatile" in a sense that it may not be compatible between different versions of VL.
>
> Also: Deserializing JSON or XML that was not generated with the corresponding Serialize nodes will fail, if the individual attributes are not ordered alphabetically! This is a peculiarity of FsPickler and we'll therefore probably have to replace it at some point. Meanwhile you may want to have a look at using nodes from the [Json.NET](https://www.newtonsoft.com/json) library for such cases.

In case you want to learn more about the inner workings of those nodes, check the documentation of the [FSPickler](https://mbraceproject.github.io/FsPickler/) library on which they are based on.

**image: example MyType automatically serialized and deserialized**

## Manual
When you're saving the state of a program to disk, you may want think about different versions of your file-format because the data-structure you're saving may evolve over time and you may still want your application to be able to load files saved with earlier versions.

In this case you'll want to define the format yourself as it is then in your hand to change the format whenever needed, adapt the serialization and deserialization process accordingly and have the option to retain backwards-compatibility by providing different de/serializers for different versions of your format.

### Custom Serialization
The following nodes allow you to build data-structures

* XElement (Join) [XML]
* XAttribute (Join) [XML]

that can then be serialized to a string format using:

* ToJSON [XML]
* ToString [XML]

or can be directly saved to disk using:

* FileWriter (JSON) [IO]
* FileWriter (XML) [IO]

Building an extra data-structure that is only used for serialization is an overhead but also has the advantage that you can leave things out that you don't need to serialize and define exactly how the resulting format will look like.

**image: example data-structure and its serialization as XML and JSON strings**

### Custom Deserialization

The following nodes allow you to read JSON or XML files from disk:

* FileReader (JSON) [IO]
* FileReader (XML) [IO]

or parse JSON or XML strings into a an XElement structure:

* ParseJson [XML]
* Parse [XML]

Then use the following nodes to access individual fields of the data-structure:

* XElement (Split) [XML]
* XAttribute (Split) [XML]
* XElementsByName [XML]
* XPathSelectElement [XML]
* XPathSelectElements [XML]
* XPathEvaluate [XML]

**image: deserializing a given example json/xml**
