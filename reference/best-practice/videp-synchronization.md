# Video Synchronization

Using either the **TexurePlayer** (with VL.Stride) or **ImagePlayer** (with VL.Skia) nodes found in the Video category, it is possible to synchronize the playback of videos that are playing on different PCs, when connected via a local network. 


## How it works
Both server and clients run their own playback mechanism (timebased or framebased) and the server sends control info (play, seek, loop from/to) to the clients. In addition, the server sends its current stream position which the clients can adapt to in case they diverge too far from it.

When the server sends a "play" message, all clients will be already in perfect sync depending on 3 conditions:

 - Did the "play" message arrive at the same time on all clients
 - Are server and clients frame synced via hardware, ie, using Quadro or FirePro cards
 - Do server and clients have a perfectly stable framerate
 
 If either of the conditions is not true, there may be an offset from the start, or an offset may happen over time. To compensate for this offset, the clients will have to adapt to the servers stream position.

## Time based

In this case, the clients time is continuously adapted to the servers time if necessary so they cannot diverge much. This may though interfere with v-sync timing and increase the chance of micro-jitter which timebased playback has anyway already. 

See `HowTo Synchronize players between multiple PCs`  in the Helpbrowser.

## Frame based

In this case, to figure out an offset on the client side and decide when to jump, you can come up with different strategies. The FramePlayer node implements one of them. 

See `HowTo Synchronize framebased players between multiple PCs`  in the Helpbrowser.