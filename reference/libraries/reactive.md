# Reactive

The Reactive category gives you tools to handle asynchronous events, background calculations and even enables you to build your own mainloop that runs on a different CPU core.

## Processing Events
The go to node for handling events is the _ForEach Region_ in the category _Reactive_. This region allows you to place any node inside and can also remember any data between two events. There is also one with version _Keep_ that can filter out events using a boolean output. This region is very similar to the ForEach region for spreads, only that its input and output is event values in time instead of slices of a spread.

![](../../images/libraries/vl-libraries-reactive-refreshEvery30secInBackground.PNG)
<center>Refresh web data every 30 seconds in the background and pass the result on to the mainloop</center>

### Switching or merging event sources

![](../../images/libraries/vl-libraries-reactive-switchingAndMerging.PNG)
<center>Switching or merging midi events</center>

### Filtering

There are also filtering options with _OfType_ or _Where_:

![](../../images/libraries/vl-libraries-reactive-onlyGetTouchDown.PNG)
<center>Only get TouchDown events from a combined event stream</center>

  
Other nodes include

* Skip,
* Delay,
* Delay (Selector),
* Scan,
* Switch, ...

## Receiving Events

If you want to leave the observable world and pass event values to the mainloop use one of the 3 nodes

* HoldLatest: Returns always the latest value
* Sampler: Returns all event values since the last frame, can be empty
* S+H: Same as _Sampler_ but returns the same values until the next event occurs

which all behave a little bit different. Depends on what you need:

![](../../images/libraries/vl-libraries-reactive-3waysToGetEventValuesToMainloop.PNG)
<center>Three ways to get event values to the mainloop</center>

## Creating Events
It's also easy to generate event sources of your own:

![](../../images/libraries/vl-libraries-reactive-waysToCreateObservableSources.PNG)
<center>Different ways to create observable event sources</center>

> [!NOTE]
> Only send values of type Record as event data because they are thread safe. If you send values of any Class type be sure that you know exactly what you are doing!

### Merge to a single event stream than filter back out to single type streams

It can be useful to combine streams of different types. 
  
You can force connect multiple types into a single Merge [Reactive] node using the Space+Click shortcut. 
You will get a single stream of Observable<Object>. 
Then use _OfType_ downstream to filter those back to streams of a single type. 
  
![](https://user-images.githubusercontent.com/4467208/211933928-ca8af023-ccee-4492-9ae3-bd02492ae39d.png)
<center>Observable<Foo> and Observable<Bar> become Observable<Object> and back again</center>

If Foo and Bar share a common interface iFooBar then they would be merged into Observable<iFooBar> instead of Observable<Object>

### Transforming a single event stream 
To make a simple 1:1 transformation of the data inside a single stream you can use ForEach [Reactive].
The input and output can be different types. 

![](https://user-images.githubusercontent.com/4467208/211931322-63d98194-505d-4c1d-9e62-beeb5247a8f5.png)
<center>Every incoming Foo event will be transformed to a Bar event</center>

### Creating Multiple Events from within an asynchronus stream
You can also create multiple events inside a reactive context with the regular create methods. 
In this case use Switch [Reactive] afterwards to convert the Observable<Observable<Object>> to an Observable<Object>
  
![](https://user-images.githubusercontent.com/4467208/211931544-7819a0bb-be69-4c91-aa46-e88eb507deef.png)
<center>Every incoming event will generate a Foo and a Bar event</center>
  

  
