# Regions

#### For Each
 A for each region let's you iterate over several collections at the same pace.
 For each collection you get one item inside the region to work with. You also may output several items per iteration resulting in several spreads of the same length.
 
 The body of the region is called as long as each of the upstream connected sequences still have data. Meaning: If one input has nothing attached to it it won't iterate.
 
<img src="foreach.png" />
 #### Loop
 A loop region let's you define how many times the body should be called. This is done via the Iteration Count Pin.
 
 In all other regards it is very similar to the for each region.
 It allows to connect several lists and walks over those at the same pace. When a list has fewer items to offer than needed the loop cycles through the list as long as needed.
 
 #### If 
 The body of this region is only executed when the condition holds.

You may have zero to many outlets to make nodes outside the region use the data you compute when the region is called. In the case that the condition does not hold the default value is used that may set ontop of the region.
 
 #### Delegate
 With a delegate you may define an operation anonymously. So this new operation then can't be called, since how to name something anonymous? In order to fix that the delate region has an output that holds the operation defined within the region - as a value.
 
 There are nodes that can call such a delegate if you link that delegate value to them. The most trivial ones are the "Apply" nodes, but there are many others.
 
 Note: All other regions execute right away (well: 0 to many times). The delegate region however does not call the body. It just captures your logic and puts that in a value that can flow over a link. The downstream connected patch is the one that may call this anonymous operation whenever it decides to. You have no influence on that. The point of the delegate is: you don't want to. 
 
 Often you start the other way around having a node that needs a delegate that it may call at any time it wants to. It may feel more obvious how to work with delegates when starting in that manner. A exmaple node that needs a delegate is "Where [Spread]". Create it as a node an feed a delegate to it.
 
 [TODO. snapshot]
 
 #### Operation Region
 
 An operation region combines an operation that needs a delegate with the definition of that delegate.
 
 [TODO. snapshot]
 
 The "Where [Spread]" region allows you to decide for each item if this item shall be included in the resulting spread or not. Taking the perspective of the where node: it calls the body of the region for each item. Each time it does this it hands over an item to the region and uses the your return value to decide if the item should be added to the result.