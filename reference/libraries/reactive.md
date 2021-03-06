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
