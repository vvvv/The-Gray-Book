# Delegates
Delegates are anonymous operations which can be passed around as an object and can get invoked on data when needed. 

The fact that a delegate doesn't have a name is a feature here: you don't need to know the exact name of an operation to call into it, you just need to get a hand onto any fitting operation, which is the delegate object. Like a lego piece that has the right shape.
This way you can easily switch between different functionalities and feed them via the same delegate downstream - without changing the code that calls them downstream. The delegate shiedlds away those details and acts as a facade. 

Delegates have zero to many inputs, and zero or one output. This is part of what defines the shape. 

Delegates are a standard .Net feature.

Inputs on definition side are often called parameters, on invocation side they values fed are often called arguments for those parmeters. 

## Defining a delegate
A delegate is defined using the Delegate region. It will initially be empty, so you will want to add inputs and/or outputs to have it actually do something. Here we have a delegate which takes two parameters, multiplies them, and then outputs it. Note that this code is not currently being executed.

![A Delegate](/images/language/delegates_delegate.png)

We can assign types to the in/outputs by right-clicking on them and selecting "Configure". Here we have set the first input as a `Float32` as denoted by the white dot, which will propagate to any other applicable generic types.

![A Delegate with type assigned](/images/language/delegates_delegate_typed.png)

## Invoking a delegate
To actually execute the code we have written, we need to invoke the delegate. On the output pin of the delegate, you will notice the type is something like `(T1, T2 ...) -> (T)`. You will need to match the number of parameters to the signature of the Invoke node you use.

![Different variants of the Invoke node](/images/language/delegates_invoke_variants.png)

You can now execute the delegate and pass it parameters through the Invoke node. Note that you don't need to specify the type of each input and output. The types gets inferred vai the usage.

![Using the Invoke node](/images/language/delegates_invoke.png)

As delegates are objects, you can for instance store them in a spread and choose which to execute programmatically.

![Delegates stored in a spread](/images/language/delegates_spread.png)
