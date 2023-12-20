# Log

**As of vvvv gamma 5.3-preview 419**

The log is collecting all messages over time and shows you the whole history, until you clear it or the buffer runs over (Buffer length defaults to 5000 but can be configured via the Settings).

![](../../images/reference/hde/2023-12-20-21-15-29.png)

## Severity Threshold
Every log message has one of the following severities assigned:
- Critical
- Error
- Warning
- Information
- Debug
- Trace

Via the severity pulldown (defaulting to "Information") you can set a hard log-level threshold, meaning that any messages with a lower severity level than the chosen threshold will be ignored.

## Filtering Severities
All log-messages that pass the severity threshold will be visible in the list. To filter for certain severities you can toggle the severity buttons right next to the severity threshold pulldown. Pro-tip: Rightclick a severity to solo it!

## System vs. App messages
The log-messages you see in the list view can be coming either from the system (vvvv itself) or from your app. To distinguish between those, see the "Source" column. 

## Logging from your patches
To create log messages from your patches use the Log [System.Logging] node. 

## Log Providers
The interesting thing with logging is that you can also route logs to any [logging provider](https://learn.microsoft.com/en-us/dotnet/core/extensions/logging-providers) you prefer. In a real-life project you may want to log certain messages to a file and others to a cloud service. Anything is possible, see at "HowTo Configure logging providers" in the helpbrowser.

## Log UI in your own application

When exporting your application, by default you've now lost the ability to view your log messages, since the above Log window is part of vvvv itself and not your app.

Yes you still have all the possibilities to use any thirdparty log providers but you may also want to have a log window as part of your application, see "HowTo Use the log view in an exported application" for how to set this up.