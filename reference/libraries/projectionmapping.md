# Projection Mapping

Projection mapping is a big term that can mean many things. Depending on the goal, different technical solutions are needed. Here is an overview of the  growing list of options vvvv provides:

## BadMapper 
NuGet: [VL.BadMapper](https://www.nuget.org/packages/VL.BadMapper)

This packet is a work-in-progress collection of tools for convenient manual blending (softedge) and warping (homography, bezier) of content.

Also includes a simple 6-point camera based ProjectorCalibration tool. 

## Mapper
Projection mapping tool.  
NuGet: [VL.Mapper](https://www.nuget.org/packages/VL.Mapper)

## Domemaster
Download: [WIP](https://discourse.vvvv.org/t/vl-domemaster/20660)  
Rendering Scenes in Domemaster format for use in fulldome projections.

## MPCDI
Need support for the VESA MPCDI standard? Please [get in touch](mailto:devvvvs@vvvv.org), we can provide this on demand. 

## ScalableDisplay
NuGet: [VL.ScalableDisplay](https://www.nuget.org/packages/VL.ScalableDisplay)

Support for the auto projector-alignment technology by [Scalable Display Solutions](http://scalabledisplay.com/).  
Let's you apply scalable mesh files created using the [Scalable Display Manager](https://www.scalabledisplay.com/products/scalable-display-manager/) ([Trial version](https://www.scalabledisplay.com/software-demo-request/)).

Scalable Tutorial:
- [Calibrating Multiple Clients to Produce One Image](https://youtu.be/OAJLBI6aktU)

## VIOSOWarpBlend
NuGet: [VL.VIOSOWarpBlend](https://www.nuget.org/packages/VL.VIOSOWarpBlend)

Support for the auto projector-alignment technology by [VIOSO](https://vioso.com/).  
Let's you apply calibrations created using [VIOSO6](https://vioso.com/software/vioso6/) or domeprojection's [ProjectionTools](https://www.domeprojection.com/software/projection-tools).

VIOSO documentation:
- [2d calibration workflow](https://helpdesk.vioso.com/documentation/core-video-tutorial/) for projecting flat textures or videos
- [3d calibration workflow](https://helpdesk.vioso.com/documentation/vrsim-3d-calibration/) for projecting 3d scenes with possibly dynamic spectator eye-point (think: head-tracking)
