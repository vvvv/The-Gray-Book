# Roadmap of vvvv gamma

## 2021.4 (~November)

### UI/UX
We all have a lot of wishes in this area but tackling some of the bigger things here will still have to wait for the switch to .NET5. For now, we're concentrating on the following:
* Tackle the existing performance issues that you face when handling larger projects
* Improving the workflow for setting the data type of pads
* Providing a UI for the Settings

### Library
* Rework Buffer and Texture nodes
* Add a clean set of TextureFX

### Language
While there are many ideas how to improve the language with new features, we will need to focus on a cleanup of an already shipped language feature: with this release, we'll fix some bits regarding [generic type definitions](https://github.com/vvvv/VL-Language/issues/39).

## 2021.5

### Core
* Switch to .NET6
* Update to the latest NuGet API to allow you to use all the latest nugets
* Streamline VL.CoreLib by moving parts that are not really "Core" or "Windows only" into separate libraries and making them open source
* Get more of the most significant nugets stable, starting with Audio and Video

### VL.Stride
* Improve Mouse, Keyboard, Touch nodes
* Allow for simple shader creation
* Add Entity Picking
