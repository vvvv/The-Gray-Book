# Introduction for vvvv beta users

Over the years people have been using vvvv beta to realize more and more complex projects, often maxing out its capabilities. New programming concepts and techniques had to be introduced to keep it up to date with today's user requirements.

At some point we came to the conclusion that the quantity and scope of such changes would create a lot of overhead in development. Chances were that implementing these changes would compromise performance and stability and disappoint users because they would have to adjust their workflows to new paradigms. So instead we decided to start from scratch, and build VL as a new, completely independent visual language. This gave us much more freedom and flexibility in creating VL in its own pace, rather than having to build new features into the already proven vvvv beta.

Creating VL, our mission has always been to incorporate as much of the good stuff from vvvv beta as possible and add new features to solve problems that people get stuck on when using vvvv beta. Ultimately we want all vvvv beta users to feel at home in VL while also introducing new audiences to and convincing skeptics of the wonders of visual programming.

With the integration of VL into vvvv beta, users are able to keep their patching habbits while exploring the features of VL bit by bit, as needed. When you hit the limits using vvvv beta, we now recommend that you check to see if VL might be able to resolve these issues. The following is a non-exhaustive list of common issues that are/will be solved by VL:

## When to use VL
### Your huge patch has become quite a mess over time and you find it hard to read and maintain it

vvvv beta does not have much of an idea about the structure of a patch. The only way to structure things are subpatches but even those are only useful for us humans, vvvv beta actually ignores them and sees just one big patch. The fact that vvvv beta doesn't offer better ways to organize your patches makes it hard to use vvvv beta to build big, well structured programs. VL has many features built-in to tackle exaclty that problem: Documents can explicitly reference each other, you can create custom datatypes and operations (think object-oriented programming). All these help you improve readability and maintainability of your programs.

### Parts of your patch need to only run once to initialize or need to be initialized only at a later point during runtime

To initialize parts of your patch once on startup, in vvvv beta you'd send a bang to certain parts to evaluate them once. Even when not evaluated though, those parts are part of the vvvv beta program and waste at least some of your precious CPU cycles and memory. VL allows you to more cleary run parts only once (using constructors in datatype patches) and more clearly run whole parts of a patch only on demand.

### You want to offload parts of your patch to separate threads

Large patches can become computationally expensive and vvvv beta does not allow you to use the full power of your PC by being inherently single-threaded. Using VL you can define regions of your program that you want to run asynchronously to the main patch thus using multiple CPUs in parallel.

### You need to react asynchronously to an input device

External input devices often send their data at a higher or lower rate than the framerate you want your patch to run at. vvvv beta has only one mainloop and any data coming in first has to be matched to that before being able to handle it. With timing critical-devices this can cause problems where your only chance so far was to write a c# plugin. In VL all external input comes via "observables" that are executed asynchronously and allow you to deal with incoming data at their rate before synching it to the mainloop.

### You need to use an external .net library

Using any .NET library is already possible in vvvv beta by writing a c# plugin. This requires you to change to text-programming and follow the vvvv beta plugin-interface which introduces a bit of overhead both in development-time and computation. Using VL, chances are that you can access the same .NET library directly, without any such overhead and still keep programming visually all the way.

## Main differences between vvvv beta and VL
At first glance VL looks rather familiar to vvvv beta users: There are gray nodes, links and IOBoxes. Patching works similar in both. The most obvious differences a regular vvvv beta user will stumble upon are:

* LOOPS: there is no automatic spreading. instead, VL only has explicit loops (for now)
* TYPES: VL is more picky about types which also leads to more flexibility
* PADS: instead of FrameDelay nodes in VL you can use named pads to denote the handing of state from one frame to the next
* NODEBROWSER: VL has different kinds of nodes which makes it a bit different to navigate the nodebrowser

These are only the most striking differences that former vvvv beta users will detect, VL has many more features to be disovered and applied as needed. More details about these and some more of the things that will look and sound familiar to vvvv beta users can be found in the following chapters.
