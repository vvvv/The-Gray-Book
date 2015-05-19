# Documents, Dependencies and Scopes

#### Documents
A document can have many patches. 

In the patches you want to use nodes that either come with the basic library or other nodes that somebody else created.

#### Dependencies
Thus to be able to use nodes that are not in the basic library you need to be able to tell the system where the file is that holds this other node. We call these files dependencies of the document. You can edit dependencies via the navigation bar.

Dependenices may be other .vl-files or .vlimport-files.

#### Scopes
Each document sees different nodes depending on its dependencies. 

What's good: it doesn't matter if you open several documents at the same time. They don't influence each other as long they don't reference each other. Each document can only see the nodes that can be found in the list of ifs dependecies.

That way you may open several versions of your document. All the nodes and types that you define in there very likely have the same name in the different versions of your document. But since they don't see each other, both can live besides each other at the same time.