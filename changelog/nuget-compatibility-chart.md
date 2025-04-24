# NuGet Compatibility Chart
Different versions of vvvv are compatible with different versions of NuGets. Often the latest version of a NuGet will be the best choice. But particularly for older versions of vvvv you might need to also fall back to specific older versions of some NuGets. 

Unfortunately the listings here are done manually and are therefore by no means complete. Please help us improve the listing by adding your findings, either by clicking "Improve this Doc" (top right corner of this page) or by informing us via an email to [devvvvs@vvvv.org](mailto:devvvvs@vvvv.org).

If you find yourself in the need to downgrade the version of a NuGet, make sure to read [Installing a specific version of a NuGet](../reference/hde/managing-nugets.md#installing-a-specific-version).

## vvvv gamma 6.0

Package|Version|Command to get recommended version
-|-|-
[VL.Audio](https://www.nuget.org/packages/VL.Audio) | <= 1.8.2 | ships with vvvv
[VL.Audio.LTC](https://www.nuget.org/packages/VL.Audio.LTC) | >=0.1.1 | `nuget install VL.Audio.LTC`
[VL.Devices.RealSense](https://www.nuget.org/packages/VL.Devices.RealSense) | >= 1.6.0 | `nuget install VL.Devices.RealSense`
[VL.Devices.AzureKinect](https://www.nuget.org/packages/VL.Devices.AzureKinect) | >= 1.5.0 | `nuget install VL.Devices.AzureKinect`
[VL.Devices.AzureKinect.Body](https://www.nuget.org/packages/VL.Devices.AzureKinect) | >= 1.5.0 | `nuget install VL.Devices.AzureKinect.Body`
[VL.Fuse](https://www.nuget.org/packages/VL.Fuse) | >= 1.0.3 preview | `nuget install VL.Fuse -pre`
[VL.IO.TCP](https://www.nuget.org/packages/VL.IO.TCP) | >= 0.5.0 preview | `nuget install VL.IO.TCP -pre`
[VL.Kairos](https://www.nuget.org/packages/VL.Kairos) | >= 1.1.9 | `nuget install VL.Kairos`
[VL.Pipette.HDE](https://www.nuget.org/packages/VL.Pipette.HDE) | 0.0.2 | `nuget install VL.Pipette.HDE -version 0.0.2`
[VL.SpoutMonitor.HDE](https://www.nuget.org/packages/VL.SpoutMonitor.HDE) | 0.1.0 | `nuget install VL.SpoutMonitor.HDE -version 0.1.0`
[VL.TUIO.HDE](https://www.nuget.org/packages/VL.TUIO.HDE) | 0.2.1 | `nuget install VL.TUIO.HDE -version 0.2.1`

## vvvv gamma 5.0

Package|Version|Command to get recommended version
-|-|-
[VL.Audio.GPL](https://www.nuget.org/packages/VL.Audio.GPL) | >= 1.1.1 preview | `nuget install VL.Audio.GPL -pre`
[VL.Badmapper](https://github.com/vvvv/VL.BadMapper) | >= 0.0.19 preview | `nuget install VL.Badmapper -pre`
[VL.Devices.Astra](https://github.com/vvvv/VL.Devices.Astra) | >= 1.2.0 | `nuget install VL.Devices.Astra`
[VL.Devices.Kinect2](https://github.com/vvvv/VL.Devices.Kinect2) | >= 1.3.0 | `nuget install VL.Devices.Kinect2`
[VL.Devices.Kinect](https://github.com/vvvv/VL.Devices.Kinect) | >= 1.0.3 | `nuget install VL.Devices.Kinect`
[VL.Devices.LeapOrion](https://github.com/vvvv/VL.Devices.LeapOrion) | >= 1.2.0 | `nuget install VL.Devices.LeapOrion`
[VL.Devices.RealSense](https://github.com/vvvv/VL.Devices.RealSense) | 1.5.0 | `nuget install VL.Devices.RealSense -version 1.5.0`
[VL.Fuse](https://www.nuget.org/packages/VL.Fuse) | >= 1.0 preview | `nuget install VL.Fuse -pre`
[VL.Kairos](https://www.nuget.org/packages/VL.Kairos) | >= 1.0 preview | `nuget install VL.Kairos -version 1.1.8`
[VL.Stride.Text3d](https://github.com/bj-rn/VL.Stride.Text3d) | >= 1.0.1 | `nuget install VL.Stride.Text3d`
[VL.IO.TCP](https://www.nuget.org/packages/VL.IO.TCP) | <= 0.4.2 preview | `nuget install VL.IO.TCP -version 0.4.2-alpha`
[VL.Audio.LTC](https://www.nuget.org/packages/VL.Audio.LTC) | 0.1.0 | `nuget install VL.Audio.LTC -version 0.1.0`

## vvvv gamma 2021.4.12

Package|Version|Command to get recommended version
-|-|-
[VL.Audio.GPL](https://www.nuget.org/packages/VL.Audio.GPL) | 1.0.0 | `nuget install VL.Audio.GPL -version 1.0.0`
[VL.Badmapper](https://github.com/vvvv/VL.BadMapper) | 0.0.15 | `nuget install VL.Badmapper -version 0.0.15`
[VL.Devices.Astra](https://github.com/vvvv/VL.Devices.Astra) | 1.0.1 | `nuget install VL.Devices.Astra -version 1.0.1`
[VL.Devices.Kinect2](https://github.com/vvvv/VL.Devices.Kinect2) | 1.2.1 | `nuget install VL.Devices.Kinect2 -version 1.2.1`
[VL.Devices.LeapOrion](https://github.com/vvvv/VL.Devices.LeapOrion) | 1.1.4 | `nuget install VL.Devices.LeapOrion -version 1.1.4`
[VL.Devices.RealSense](https://github.com/vvvv/VL.Devices.RealSense) | 1.3.2 | `nuget install VL.Devices.RealSense -version 1.3.2`
[VL.Fuse](https://www.nuget.org/packages/VL.Fuse) | 0.2.4 | `nuget install VL.Fuse -version 0.2.4`
[VL.Kairos](https://www.nuget.org/packages/VL.Kairos) | 0.6 | `nuget install VL.Kairos -version 0.6`
[VL.Stride.Text3d](https://github.com/bj-rn/VL.Stride.Text3d) | 0.4.0 | `nuget install VL.Stride.Text3d -version 0.4.0`

## vvvv gamma 2021.3.0
also applies to _vvvv beta42_

Package|Version|Command to get recommended version
-|-|-
[VL.OpenCV](https://github.com/vvvv/VL.OpenCV) | 1.2.0 | `nuget install VL.OpenCV -version 1.2.0`
