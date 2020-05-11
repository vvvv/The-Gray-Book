# Libraries

A library is a set of nodes and types around a specific topic, like e.g. Kinect, OpenCV,... that are designed in a reusable and modular manner.

VL comes with a range of open-source libraries that provide the basics for patching and for some more specific use-cases. Libraries can easily be created by anyone for personal use (for sharing nodes and types among different projects) or for sharing with others.

Libraries can come in four different forms:

* a single .vl document
* a single managed .dll
* Nuget packages are collections of .vl documents, c-sharp code and managed and/or unmanaged .dlls

A VL document can reference either of the above to extend the list of nodes available to its patches.
