# Data and Data Hubs
<img src="small.bmp" width="150" title="small data" />
<img src="big.bmp" width="150" title="big data"/>
<img src="brentspiner1.jpg" width="150" title="Mr. Data"/>

Data is everywhere. And programming pretty much is all about dealing with data. 

Programming is creating a description for a machine how exactly to deal with some potentially given data in the future. 
In a rapid prototyping system like this you often also have actual current data at hand and are able to inspect that data here and there. 

Looking at data:
<img src="tooltip.png" />

However the program you are building is typically concerned with __any data__ that may arrive when the program will run __in the future.__

So you'll be thinking all about
* accepting _data_ & computing with _data_ 
* extracting features of _data_
* filtering _data_ & yielding _new data_
* feeding back _data_ & saving _data_
* visualizing _data_ & sending _data_
* inspecting _currently available data_
* describing what to do with _data available at any given point in time_ 
* abstracting over _specific data_ and thinking more in _possible types of data_

For the latter have a look at [Data and DataTypes](data.md).
For now let's just go ahead and make up a few terms: data hubs, data sources, data sinks.

A data hub is something that you can connect to. It's either a data source <img src="data source.png" height="40" /> or a data sink <img src="data sink.png" height="40" />. 
A data source is able to give you data that you can work with. A data sink would love to be given some data from you. 
Both let you link to. 

Well, actually data flow programming is mainly about linking data sources to data sinks. The idea being that the data flows from a data source into a data sink.

Here we are looking at a data source linked to a data sink: 

<img src="hubs.png" />