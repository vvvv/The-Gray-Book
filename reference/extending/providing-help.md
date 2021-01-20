# Providing Help

Library developers can provide patches demonstrating different aspects of the library.

We distinguish 2 types of patches:

* Explanation: Typically a single patch per library giving an overview of the whole set of nodes the library provides
* HowTo: A series of patches demonstrating how to achieve specific things using certain nodes provided by the library

In order to be picked up by the helpbrowser, those need to be put in the right place and follow the naming convention:

    \help\Explanation Overview of available nodes.vl
    \help\HowTo Do something.vl

In case a library has a lot of help patches, you can also use up to two levels of subdirectories to structure them, like so:

    \help\Topic\Subtopic\HowTo Do something.vl

By default the helpbrowser will display those patches in alphabetical order. If you want to change that, you can provide a Help.xml file in the \help directory that allows you to structure and order the content independent of their order in the filesystem. This also allows you to add additional help content in the form of links to online resources, like so:

```xml
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<Pack>
  <Topic title="Overview">
    <UriItem title="Explanation An Introduction to VL.OpenCV" link="https://youtu.be/4hPH5CokxwQ" mediaType="video"/>
    <UriItem title="Reference Finders" link="https://vvvv.gitbooks.io/the-gray-book/content/en/reference/hde/finders.html" mediaType="text"/>
  </Topic>
  <Topic title="Topics">
    <Subtopic title="Images">
      <VLDocument link="Topics\Images\HowTo Draw images.vl" tags="picture render"/>
    </Subtopic>
  </Topic>
</Pack>
```

Note how for UriItem elements you can provide a "mediaType" attribute that allows "text" or "video" values which will lead to little according symbols showing after the items title. 

The search will work on all words in items titles. If you want to add more search terms that don't fit in an items title, use the "tags" attribute to add a list of space-separated search terms.

## Help Flags
A help flag is used to specify which how-to patch should open when a user presses <span class="keyseq"><kbd>F1</kbd></span> on a selected node.

In a how-to patch, select the node you want this patch to open for as a help patch and press <span class="keyseq"><kbd>Ctrl</kbd><kbd>H</kbd></span>. This sets a high-priority help flag. Press a second time to change it to low-priority, press a third time, to clear the help flag again.

![](../../images/libraries/helpflags-a2c55.png)
<center>FileReader with a high-priority help flag, SplitToLines with low-priority</center>

### High vs. Low Priority
When pressing <span class="keyseq"><kbd>F1</kbd></span> on a node, the system will go through all help flags in all how-to patches of a library. If it encounters a high-priority help flag for the given node in a how-to patch, this patch will be displayed as the help patch. Therefore it only makes sense to specify a high-priority help flag once for each node!

![](../../images/libraries/helpflags-7a40e.png)
<center>The bubble indicating which node the help patch was opened for</center>

After pressing <span class="keyseq"><kbd>F1</kbd></span>, when the user decides to also view the Node Info for the node, the help browser will display a list of how-to patches that include the node with a low-priority help flag set. Therefore it makes sense to specify multiple low-priority help flags for the same node in different how-to patches to indicate that those could also be interesting when looking for use-cases of the given node.

### Help flag indicator
Since the end-user doesn't need to see the help flags, by default they are invisible when a help patch is opened. You can toggle the help flag indicator to show/hide help flags in this patch.

![](../../images/libraries/helpflags-21aea.png)
<center>The help flag indicator indicating that this how-to patch has help flags set</center>

### Context
Help flags can only be set on nodes that are defined in the same package as the one the how-to patch belongs to. If you try to set a help flag on a node that is not defined in the same package as the how-to patch you're working on, you'll see the following warning:

![](../../images/libraries/helpflags-79980.png)
<center>Warning: Help flag cannot be set on this node</center>
