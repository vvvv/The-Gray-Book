# Synchronizing machines to the High Precision Clock

Starting from Windows10 (build) window's System Time can be synchronized to a High Precision Time Sourse that uses [PTP](https://de.wikipedia.org/wiki/Precision_Time_Protocol) (Precision Time Protocol). PTP is more precise that NTP (Network Time Protocol), which is used normally by Windows to keep its time in sync.

## Overview:

There should be at least one PTP Source in your LAN Network. In case there are many, they agee upon each other who the `Grandmaster` is. Clients sync their time to one of the sources.

## Configuration of a client

Configuring PTP on the system takes several steps:

1. To check if your system has this dll: `C:\Windows\System32\ptpprov.dll`.
1. Check if one of your LAN cards (Wi-Fi won't work) support PTP: 
    1. Navigate to `View Network Connections > Right Click > Properties > Configure > Advanced`
    1. Look for `PTP Protocol Timestamp` and enable it. Some network cards doesn't support it at all.
    1. If the system has several cards, the one with PTP Enabled should be assigned as preffered one, in order to be picked by a time service: in the `Properties` of the Network Adapter: `Internet Protocol Version 4 (TCP/IPv4) > Properties > Advanced` turn off `Automatic metric` and set it to a value, smaller than for the other cards. 
1. Run registry file (link), it sets several keys:
    1. A key `PtpClient` (Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\w32time\TimeProviders\PtpClient) with some subkeys is added, as described [here](). **Note**, you have to replace PtpMasters with the IP(s) of your ptp time providers.
    2. Some subkeys under a `Config` key (Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\w32time\TimeProviders\PtpClient) are updated according to [Configuring Systems for High Accuracy](https://learn.microsoft.com/en-us/windows-server/networking/windows-time-service/configuring-systems-for-high-accuracy).
    1. Ntp providers will be disabled (your normal default time server), only PtpClient remains enabled.
1. Enable Inbound and Outbound UDP Ports 219,220 in Windows Firewall. These are used by the PTP protocol.

When the configuration is ready:

1. Start `Command Line` as Adminitrator
1. Restart the time service: `net stop w32time`, `net start w32time`.
1. Make sure that the service starts automatically on start (check `System Services`).
1. Run `w32tm /query /configuration`, you should see PtPClient in the list.
1. Run `w32tm /query /status /verbose` to see the status of the sync. If `Source` says `Local CMOS Clock` the system still doesn't sync to the PTP.

It takes some time until the client and server done their agreements, after that periodically checking `w32tm /query /status /verbose` will give you hints how many seconds ago the system was synced etc.

## Configuration of a Server (Ptp Time Source)

Although there are special hardware PTP Sources, PTP Source Service can run from on a simple Raspberry Pi 5 (Network Card on the earlier versions doesn't support PTP). And if a real high precision time is needed, a GPS receiver could be added to the Raspberry Pi.

These articles describe how to setup and run PTP Service on Linux:

- [Nanosecond accurate PTP server](https://austinsnerdythings.com/2025/02/18/nanosecond-accurate-ptp-server-grandmaster-and-client-tutorial-for-raspberry-pi/)
- [Windows Subsystem for Linux for testing Windows 10 PTP Client](https://techcommunity.microsoft.com/blog/networkingblog/windows-subsystem-for-linux-for-testing-windows-10-ptp-client/389181)


## Unicast and Multicast scenarios

...