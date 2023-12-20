# App Health

**As of vvvv gamma 5.3-preview 413**

Here you'll see an overview of issues coming from your running application. These can be exceptions (the pink nodes) or come from a `Warn [VL.Session]` node that you can even use yourself in patches to indicate a problem. 

![](2023-12-20-21-14-47.png)

Exceptions are critical and should be taken seriously. Your application crashed. 
Errors, Warnings, and Infos are messages from the library developer. The app didn't crash, but there is something fishy, which you should probably take another look at. 

Note that same as the [Build Result](debugging-buildresult.md) view, also this view is ephemeral in that it always only shows the current state of affairs. If you're looking for a history of issues your app ever had, consult the [Log](debugging-log.md).
