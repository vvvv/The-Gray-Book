# Roadmap of vvvv gamma

## 2021.4 (~June)
### Library

Since we now have the most common things in place, we're going into a cleanup phase with these priorities:
* Update to the latest NuGet API to allow you to use all the latest nugets
* Streamline VL.CoreLib by moving parts that are not really "Core" or "Windows only" into separate libraries and making them open source
* Get more of the most significant nugets stable, starting with Audio and Video

A big focus will also be on further improving VL.Stride:
- Stabilize Mouse, Keyboard, Touch nodes
- Stabilize Buffer nodes
- Allow for simple shader creation
- Add a clean set of TextureFX
- Add Entity Picking
- Update Spout

### UI/UX

We all have a lot of wishes in this area but tackling some of the bigger things here will still have to wait for the switch to .NET5. For now, we're concentrating on the following:
* Tackle the existing performance issues that you face when handling larger projects
* Improving the workflow with pad annotations
* Providing a UI for the Settings

### Language

Explicit Type Parameters

## 2021.5 (~end of year)
* Switch to .NET5