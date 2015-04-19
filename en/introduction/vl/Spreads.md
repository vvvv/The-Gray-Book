# Spreads and Other Collections

Spread is a name that we stole from vvvv. It is just a collection of items that is ready to be consumed. In other words: There is some memory in the computer that holds all the items. All the info is there. They can be read, the count is known, their values are known.

What's more though: A spread can't mutate. A spread coming from one data source can be fed to many data sinks and we can guarantee you that all data sinks will always access the same data.

Confusion #1:
Of course the a data source of type Spread may change its output over time. But it will do so by retrieving new spreads. 

Confusion #2:
Of course there are nodes to "change" the content of a spread. You may want to write a new value into it, delete something or add some new item. But again these operations will create new spreads. They won't change the spread coming from upstream.

