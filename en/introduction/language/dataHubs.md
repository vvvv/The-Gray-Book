# Data and Data Hubs

Big data, small data, Mr. Data.
Data is everywhere. And programming pretty much is all about dealing with data. 

Programming is creating a description for a machine how exactly to deal with some potentially given data in the future. 
In a rapid prototyping system like this you often also have actual current data at hand and are able to inspect that data here and there. 

Looking at data:
[TODO: show tooltip or iobox]

However the program you are building is typically concerned with any data that may arrive when the program will run in the future.

So you'll be thinking all about
* accepting data
* extracting features of the data
* computing with the data yielding new data
* filtering data
* feeding back data
* saving data
* visualizing data
* sending data
* inspecting currently available data
* describing what to do with data available at any given point in time 
* abstracting over some specific data and thinking more in possible types of data

For the latter have a look at [Data and DataTypes](data.md).

For now let's just go ahead and make up a few terms: data hubs, data sources, data sinks.
A data hub is something that you can connect to. It's either a data source or a data sink. 
A data source is able to give you data that you can work with. A data sink would love to be given some data from you. 
Both let you link to. 

Well, actually data flow programming is mainly about linking data sources to data sinks. The idea being that the data flows from a data source into a data sink.

Here we are looking at a data source linked to a data sink: