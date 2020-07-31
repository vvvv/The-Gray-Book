# VL Templates

When creating a VL node from vvvv beta you have the choice between two available templates for cloning them via <kbd>Ctrl</kbd> + Leftclick

* Template (Value)
* Template (Value Stateless)

Cloning either creates a new .vl document. The first template then creates a ProcessDefinition in that document while the stateless template creates an OperationDefinition with the given name, category and version.

## Make VL nodes show up in vvvv beta
So cloning a template creates a new .vl document and one nodefinition (process or operation). In order to make additional nodes created in vl show up in vvvv beta, they must be:

* non-generic
* in the category VVVV

and either:

* an OperationDefinition
* a ProcessDefinition with ProcessNode enabled

![](../../images/beta/ProcessNode.png)
<center>Preparing a vl process for use as a node in vvvv beta</center>
