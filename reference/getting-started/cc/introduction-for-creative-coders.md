# Introduction for Creative Coders

What you can do with the various existing creative coding frameworks, is often roughly the same. What's mostly different is the way in which things are done. vvvv has a history spanning since the early twothousands. With the newer version "vvvv gamma" you get to use the results of many years of research into creating a convenient and fast to use visual live-programming environment.

## What people are using vvvv for
vvvv is used in a wide range of projects covering topics like: generative-design, interaction-design, data-visualization, computer-vision, VR, show-control, physical-computing, machine-learning and generally for any kind of quick prototyping.
Have a look at the [Gallery](https://visualprogramming.net/#Gallery) to see some specific examples.

---

Depending on where you come from, vvvv offers different benefits:

## Coming from text based coding
If you're familiar with text based creative coding, like:
* [Cinder](https://www.libcinder.org) or [OpenFrameworks](https://openframeworks.cc)
* [Nannou](https://nannou.cc) or [rin](https://rin.rs)  
* [Processing](https://processing.org) or [p5.js](https://p5js.org)
* [OpenRNDR](https://openrndr.org)

... then the following could be interesting for you:
  
### Save time

vvvv does not have the classic time-consuming edit-compile-run cycle. For every change you make to your vvvv program, you'll get instant results! We call this **live-programming** and are using a state hot-reload approach: Every change is instantly compiled under the hood without you having to trigger it. If there is an error, you get an in-place indicator or tooltip about the problem and you can fix it without the need to restart your program or loose state. 

Further, with its [rich set of Libraries](../../libraries/overview.md) that only need to be connected, vvvv allows you to prototype a lot of common basic scenarios in no time. 

### Use familiar techniques

VL (the language used in vvvv) is not your ordinary visual language where you only can work with readymade, but hard to extend blocks: It comes with loops and if-regions, allows for recursions, lets you define and instantiate your own datatypes (even generic ones) and define and implement interfaces. This means you're not limited to dataflow programming but can also apply your object-oriented programming skills. Further you can make use of delegates and observables and execute parts of your program asynchronously. All without writing a single line of code.

### Write your own nodes

True, certain things, like low-level algorithms, are sometimes easier to write in text. [Nodes can be written](../../extending/overview.md) using plain C# or F#, without the need for any vvvv specific boilerplate code. That's why you can also directly use any of the .NET libraries hosted by the [NuGet](http://nuget.org) package manager. 

## Coming from other visual programming environments
If you're familiar with visual creative coding environments, like:

* [cables](https://cables.gl)
* [Isadora](https://troikatronix.com)
* [Max](https://cycling74.com)
* [PD](http://puredata.info)
* [TouchDesigner](https://derivative.ca)
* [Vuo](https://vuo.org)

... then the following could be interesting for you:

### Vast, modular, open-source library of nodes
Browse the [Library](../../libraries/overview.md) section to get an overview of the availability of a vast range of different libraries for vvvv, most of which are open-source (some not yet, but only for organisational reasons). Apart from the [VL.CoreLib](../../libraries/corelib.md) the three biggest to date are:
- VL.Stride: for 3d rendering, shader programming, VR,... based on [Stride](http://stride3d.net)
- VL.Skia: for 2d rendering, vector graphics export,... based on [Skia](https://skia.org)
- VL.OpenCV: for computer vision,... based on [OpenCV](http://opencv.org)

Further there is a big focus on supporting loads of [Devices](https://thegraybook.vvvv.org/reference/libraries/devices.html) and [Protocols](https://thegraybook.vvvv.org/reference/libraries/io.html) out of the box.

### Export Windows applications
Any program you build with vvvv can be [exported](../../hde/exporting.md) as a proper Windows application. Other platforms are planned. 

### Comfortable licensing model
vvvv is free for non-commercial. Simply download, install and use it:

- No questions asked
- No copy-protection
- No feature limitations
- No mandatory registration

As you're starting to use vvvv for commercial projects, you [buy a monthly or yearly developer license](http://store.vvvv.org) priced affordably for indy, pro and big-fish users. 

## What you may miss
Compared to one or the other frameworks listed above, you may miss:

* vvvv is still Windows only, which is planned to change at some point
* vvvv cannot export to mobiles or the web. This is not totally out of the question, but not on the roadmap as of now

## Getting Started
Watch the [Tutorials](https://www.youtube.com/playlist?list=PLBTgwgsWWcT_VMMrwsy3Ao7_ubazEGL4s) to learn the very basics. As you have more specific questions, find them answered in the  [HowTo's](https://www.youtube.com/playlist?list=PLBTgwgsWWcT-G9lk-IlKLkGZJ9NnXcuBV). 

Press F1 in vvvv to open the Helpbrowser. There you'll find numerous example and help patches on various topics. Also: With any node selected press F1 to see its dedicated help patch.

Any questions left? Get help and support by the developers and a welcoming global community in the [forum](http://discourse.vvvv.org) or [chat](https://app.element.io/#/room/#vvvv:matrix.org).
