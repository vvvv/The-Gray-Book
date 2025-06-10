# Delegates
Delegates are anonymous operations which can be passed around as an object and can be invoked on data when needed.

The fact that a delegate doesn't have a name is a feature here: as long as the it has the correct signature it will fit, like a lego piece with the right shape. This way you can treat behaviour as an object which can be used to easily switch between different functionalities - without changing the calling code downstream. The delegate abstracts away the internals and only presents a facade.

Delegates have zero to many inputs, and zero or one output. This is part of what defines the signature, or "shape". They are a standard .NET feature.

Inputs are called parameters in the definition, and on the invocation side the values passed in are usually called arguments. 

## Defining a delegate
A delegate is defined using the Delegate region. It will initially be empty, so you will want to add inputs and/or outputs to have it actually do something. Here we have a delegate which takes two parameters, multiplies them, and then outputs it. Note that this code is not yet being executed.

![A Delegate](/images/language/delegates_delegate.png)

We can assign types to the in/outputs by right-clicking on them and selecting "Configure". Here we have set the first input as a `Float32` as denoted by the white dot, which will propagate to any other applicable generic types.

![A Delegate with type assigned](/images/language/delegates_delegate_typed.png)

## Invoking a delegate
To actually execute the code we have written, we need to invoke the delegate. On the output pin of the delegate, you will notice the type is something like `(T1, T2 ...) -> (T)`. You will need to match the number of parameters to the signature of the Invoke node you use.

![Different variants of the Invoke node](/images/language/delegates_invoke_variants.png)

You can now execute the delegate and pass it parameters through the Invoke node. Note that this specific delegate has no types specified - they got inferred via the usage.

![Using the Invoke node](/images/language/delegates_invoke.png)

As delegates are objects, you can for instance store them in a spread and choose which to execute programmatically.

![Delegates stored in a spread](/images/language/delegates_spread.png)
