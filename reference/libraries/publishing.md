# Github workflow configuration

The following guide covers the necessary steps to setup a workflow on your Github repository that will publish your plugin to nuget.org or any feed you like using the [PublishVLNuget](https://github.com/vvvv/PublishVLNuget) Github Action.

The guide assumes you already have created an account for GitHub and nuget.org and that you have access to an existing VL GitHub repository.

## References

The explained configuration is currently being used for libraries such as:

* [VL.IO.OSC](https://github.com/vvvv/VL.IO.OSC)
* [VL.Devices.AzureKinect](https://github.com/vvvv/VL.Devices.AzureKinect)
* [VL.Devices.Nuitrack](https://github.com/vvvv/VL.Devices.NuiTrack)
* [VL.Devices.RealSense](https://github.com/vvvv/VL.Devices.RealSense)
* [VL.OpenCV](https://github.com/vvvv/VL.OpenCV)

Feel free to use them as starting points for your own library.

## A brief introduction to Github Actions

## Preliminary notes

### nuspec file

The nuspec file contains your nuget's metadata, such as version, author and dependencies. It also specifies which files should be included in your final package.

#### Dependencies

In the nuspec file, make sure you list the nugets needed by your library/project under the `dependencies` section.

#### Assets, binaries, help files, etc.

In the nuspec file, make sure you list any assets, dlls, help patches, etc. under the `files` section.

#### Version

Your package version should follow the [semver](https://semver.org/) specification.

A nuget package can come in two versions, a release version or a pre-release version.

A pre-release package implies that the package is currently under development and things can change drastically from one version to the next. Functionality can also be expected to break or become unstable from time to time.

A release package implies that the package has been properly tested and polished for production. No major breaking changes are expected to happen and stability within the package should be reliable.

If you want to publish a pre-release version of your package you need to instruct nuget.org that this is indeed a pre-release version. To do this you must add the `-alpha` suffix at the end of your package's version.

### csproj file

If your plugin has a `csproj` file, it can also be used to pack your nuget in place of a `nuspec` file. For more information, please refer to [this section](https://docs.microsoft.com/en-us/nuget/create-packages/creating-a-package-msbuild) of the Nuget documentation.

If you plan to use it, just omit the `nuspec` input of the Github Action.

### Package icon

The Github Action allows you to specify a package icon from an external source with the `icon-src` and `icon-dst` input parameters. That way, you don't have to commit your icon file to your repo. The file will be downloaded and put inside your package each time your workflow runs.

#### Using a `nuspec` file

The icon must be downloaded to an existing folder in your repo. We suggest you simply download it to its root :

```
(...)
- name: Publish VL Nuget
    uses: vvvv/PublishVLNuget@1.0.28
    with:
    (...)
    icon-src: https://wwww.url.to/nugeticon.png
    icon-dst: ./nugeticon.png
```

> Note : paths in the workflow file are relative to the root of the repo.

Here, we ask the Github Action to download the icon from our URL and place it at the root of the repo.

Then, in the `file` section, your nuspec file must reference it from where the action will download it (`src` attribute) and place it wherever you like (`target` attribute), making sure `target` matches where the `metadata` section expects it.

```
(...)
    <metadata>
        (...)
        <icon>icon\nugeticon.png</icon>
    </metadata>
    <files>
        (...)
        <file src="..\nugeticon.png" target="icon\">
    </files>
(...)
```

> Note : paths in the nuspec file are relative to where the file itself is placed.

#### Using a `csproj` file

You can setup an icon for your project inside Visual Studio. Beware you'll have to specify a path to a file that does not exist yet, since the Action will take care of downloading it later on. This can feel weird since Visual Studio's UI gives your a `Browse` button for you to pick a file. simply fill the path manually to match the `icon-src` property of your workflow file.

For instance, your worflow file would look like this:

```
(...)
- name: Publish VL Nuget
    uses: vvvv/PublishVLNuget@1.0.28
    with:
    csproj: src\Whatever\Whatever.csproj
    icon-src: https://wwww.url.to/nugeticon.png
    icon-dst: ./deployment/nugeticon.png
    nuget-key: ${{ secrets.NUGET_KEY }}
```

And your Visual Studio configuration like this : 

![Visual Studio](/images/libraries/publishing_icon_in_visualstudio.png)

## Using the Action

### Getting a nuget.org API key

The following steps will guide you through the nuget.org configuration, before proceeding please make sure you have a working account and are logged-in in nuget.org.

1. Click on your user name at the top right
2. Click on `API Keys` in the menu that pops up
3. Click on `+ Create`
4. Under `Key Name` type the name of your repository or project, this is going to be the official package name for the world when they type `nuget install <YourPackageName>`
5. Under `Package owner` make sure you select the appropriate option depending on your case, if the package should belong to an organization you are part of rather than to you, choose said organization now
6. Under `Glob Pattern` type: *
7. Click `Create`

NOTE: At this point you should see your newly created package listed with a yellow warning message reminding you to copy your key, ***this is a crucial step as this is the only time you will be able to copy this value***. 

Click on `Copy` below your package's description and add it to your repository's secrets. To do so, please refer to [this page](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) of the Github documentation. Remember your secret's name as you'll have to use it later on.

### Creating the workflow file