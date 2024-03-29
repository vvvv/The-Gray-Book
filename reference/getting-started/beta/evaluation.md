# Evaluation

Evaluation in vvvv beta is framebased. Each frame the whole graph is being evaluated *lazily* starting from sinks, like Renderers or Writers:

There are some nodes that don't evaluate inputs under certain circumstances. A Switch (Input) for example only evaluates the one input that currently is switched to. A S+H only evaluates its data source, if you really want to sample in that frame. So vvvv beta takes care that not everything is evaluated, but only the part that is necessary.

*VL however always evaluates all* unless you force it not to evaluate certain parts.

Let's say you have a VL node in vvvv beta. The whole VL patch will get evaluated. And not only that: all nodes in there will get completely evaluated. So if there is a patch behind a node this whole patch gets evaluated also.

_One reason to do so was to get the system very much compatible with .NET. So if you would export a vl doc later on, you would encounter no special types like Lazy, but just the basic type that you also see in your patch._

The only way to force VL not to compute certain areas all the time is to use regions. There are different regions, but basically they all fence the inner part from the outer part in a way that the region itself can decide when to call the inner part.

A *loop* or an *if* region will not execute when the iteration count is 0 or the condition is false.
Some nodes come with sugar for a hidden if region. Those nodes come with an apply pin. If apply is off, the node doesn't get evaluated.
