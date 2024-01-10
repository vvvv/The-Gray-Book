# Publishing an App to Microsoft Store

## Walkthrough

#### Overview

1. Export your app
2. Make an installer
4. Package the installer to MSIX
5. Upload MSIX to the store

#### Step by step

- Register for Microsoft Partner program. It requires a one-time payment, no abos:
https://learn.microsoft.com/en-us/windows/apps/publish/partner-center/account-types-locations-and-fees

- In your Partner Center navigate to `Apps and Games` and add `New Product`. 

- After creating a name, go to `Product Management > Product Identity`.
  You'll get the important fields needed for creating MSIX package:
  - `Package/Identity/Name`
  - `Package/Identity/Publisher`
  - `Package/Properties/PublisherDisplayName`

- Back to Gamma. Export your app.

  Note, apps packaged as MSIX should be self-contained, so all the dependencies (also those from .NET) has to be packaged.
  As for now, after exporting the App you should:
  - copy the `build` string from the Export dialog (like `dotnet publish -c Release --self-contained false /clp:ErrorsOnly /nologo "C:\Work\MyApp\Export\src\MyApp\MyApp.csproj"`)
  - replace `--self-contained false` to `--self-contained true`
  - run that line from the commandline
  - the build will be here `C:\Work\MyApp\Export\src\MyApp\bin` (don't forget to copy all assets into this folder)
  
- Make in installer for your app
  https://jrsoftware.org/isinfo.php

- Create MSIX from your installer:
  To create MSIX you'll need MSIX packaging tool: 
  https://learn.microsoft.com/en-us/windows/msix/packaging-tool/tool-overview  
  
  **Note:** you can publish your Installer's EXE directly to the Store, but you have to host the .exe on your own server. 

  MSIX packages are hosted by microsoft. Microsoft will automatically sign your MSIX package with the provided Identity/Publisher. No need to sign anything by yourself.  

  For more info about MSIX:  
  https://learn.microsoft.com/en-us/windows/msix/packaging-tool/create-an-msix-overview

  Open the tool, navigate to `Application Package`, select your installer's exe.

  Specify 
  - `Package Name` = `Package/Identity/Name`
  - `Package Display Name` = name of your app, 
  - `Publisher name` = `Package/Identity/Publisher`
  - `Publisher display name` = `Package/Properties/PublisherDisplayName`


- Back to the Partner Center, upload your MSIX package, fill all the fields, don't forget to mention in the description, that the app is made with your favourite toolkit, which is vvvv. And now wait until it will be approved (approx. 24h). Voila, your very own app patched in gamma is available for everybody through the Microsoft Store.
For more info, check:
https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/reserve-your-apps-name?pivots=store-installer-msix

- As a bonus, if you upload a new version of your MSIX package, Store will know, that an Update is available.
