# Projection Mapping

Projection mapping is a big term that can mean many things. Depending on the goal, different technical solutions are needed. Here is an overview of the still growing list of options vvvv provides:

## VL.BadMapper 
NuGet: [VL.BadMapper](https://www.nuget.org/packages/VL.BadMapper)

This packet is a work-in-progress collection of tools for convenient manual blending (softedge) and warping (homography, bezier) of content.

Also includes a simple 6-point camera based ProjectorCalibration tool. 

## VL.Domemaster
Download: [WIP](https://discourse.vvvv.org/t/vl-domemaster/20660)  
Rendering Scenes in Domemaster format for use in fulldome projections.

## VL.VIOSOWarpBlend
NuGet: [VL.VIOSOWarpBlend](https://www.nuget.org/packages/VL.VIOSOWarpBlend)

Support for the auto projector-alignment technology by [VIOSO](https://vioso.com/).  
Let's you apply calibrations created using [VIOSO Integrate](https://vioso.com/vioso-integrate/) ([Trial version](https://vioso.com/downloads/#integrate)).

VIOSO documentation:
- [2d calibration workflow](https://helpdesk.vioso.com/documentation/core-video-tutorial/) for projecting flat textures or videos
- [3d calibration workflow](https://helpdesk.vioso.com/documentation/vrsim-3d-calibration/) for projecting 3d scenes with possibly dynamic spectator eye-point (think: head-tracking)