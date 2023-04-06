# Contributing to existing libraries

Collaboration on existing opensource libraries works via [git](https://git-scm.com). To contribute to an existing library, you'd make a fork, make your changes locally and finally file a pull-request with the original repository. See [Contributing to a Project](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project) in the official git book to get a general idea of the workflow.

Note that one of the main steps in this process is to be able to see the difference between the original and your changed document. While this can be done rather easily with textual programming languages, this is one of the main problems in visual programming, at least with VL. As of now there is no simple way to provide a quick comparison between two versions of a document. So keep this in mind when making a pull-request. The recipient may have a hard time figuring out what your changes actually were. So try to do the following:

* Try to apply additions/removals/changes in separate pull-requests
* If your change is only additions, try to keep them in a separate .vl document
* Make sure to clearly describe your changes in words
* Consider adding screenshots of before/after to your pull-request

## Source package-repositories

To work on local copies of repositories it is recommended that you create a directory like

<pre>
vl-libs\
</pre>

that you clone all repositories into. Say you want to contribute to the [VL.Audio](https://github.com/vvvv/VL.Audio) and [VL.Devices.Kinect2](https://github.com/vvvv/VL.Devices.Kinect2) packages, your directory structure would look like this:

<pre>
vl-libs\VL.Audio\
vl-libs\VL.Devices.Kinect2\
</pre>

Such a directory holding one ore more sub-directories that are the sources of packages for vvvv is called a *package-repository*. To make vvvv aware of a package-repository, specify the path to this package-repository via [commandline argument](../hde/commandline-arguments.md):

<pre>
--package-repositories C:\Users\foo\Documents\repos\vl-libs
</pre>

You can of course also set multiple paths if you want to maintain different package-repositories in separate directories:

<pre>
--package-repositories "C:\Users\foo\Documents\repos\vl-libs;C:\Users\foo\Documents\repos\vl-libs2"
</pre>

Packages found in a package-repository path will show up among `Dependencies > VL Nugets` like any other nuget you installed. So you can simply reference them in any .vl document and work on them. Note though that some packages may have a c# solution that would need to be built before the package works!

By default [source-packages are read-only](../language/compilation.md#read-only-packages), meaning you cannot edit them in vvvv. In order to be able to edit individual packages you have to specify them as editable packages via [commandline argument](../hde/commandline-arguments.md), like:

<pre>
--editable-packages VL.Audio;VL.Devices*"
</pre>

## Switching between source and binary packages

Say you first installed the VL.Audio package as nuget and later decided to fork it and clone its sources to work on them as a source-package. By putting the sources in your package-repository path and telling vvvv about that path, vvvv will prefer source-packages to  binary nugets of the same name! Like this you can conveniently switch between working directly with your versioned sources or binaries of the same name by simply setting (or not) the package-repository path.
