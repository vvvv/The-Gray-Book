# Nodes

As already stated: Nodes are all about using functionality that is already available. When talking about usage we often also use the term application. By using a node you're applying an available functionality in a certain way.

50 offers different flavors of nodes. Let's have a look:

#### Operation Applications

An operation application applies an operation.

An operation is something very primitive. It is a temporary computation that needs data and yields data. It may have side effects like writing to a file, but typically it is all about computing data based on data.

You feed data to an operation application via its input pins. It computes and hands you the results. Think of it as something volatile and temporal. 

**The output doesn't depend on previous calls to the operation.** It doesn't know of previous calls. 

Here are some operation applications:

#### Process Applications

A process application applies a process.

A process is something persistent. It sticks.

Think of the whole program as a process. It sticks around for a while and evolves. Process Applications are modeled by this idea. They can be thought as little programs that stay around.

Here are some process nodes:

Compare their look with the operation applications. It is just a small difference that may help you when reasoning about a patch in the future.

All the process applications above need to internally store a state to function properly. A FlipFlop needs to store its toggle state, a S+H needs to store the last sampled value, a TogEdge needs to store the old input value to be able to detect an UpEdge or a DownEdge in the signal.

**The outputs of a process application thus depend on the inputs AND on the internal state of that process.**

more on nodes: [Nodes](nodes.md)