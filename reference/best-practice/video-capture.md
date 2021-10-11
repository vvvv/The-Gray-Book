# Video Capture

For capturing video from webcams and capture cards, vvvv offers different solutions:

## VL.Video.Mediafoundation

This NuGet is shipping with vvvv. Referencing it, gives you **VideoIn** and **VideoIn (Skia)** nodes which support all USB cameras that have a [UVC 1.1 driver](https://docs.microsoft.com/en-us/windows-hardware/drivers/stream/usb-video-class-driver-overview).

## VL.Devices.Decklink

For capturing from Blackmagic [Decklink](https://www.blackmagicdesign.com/products/decklink/models) devices.

## VL.Devices.uEye

For capturing from IDS Imaging [uEye Cameras](https://en.ids-imaging.com/store/products/cameras/sort-by/position/sort-direction/desc.html).