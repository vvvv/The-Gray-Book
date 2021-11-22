# Groups and Categories

VL has 3 patch types that help you structure your documents:

* Group
* Category
* FullCategory

## Group
Group patches simply allow you to create more space in a document by opening a new canvas. The groups name is merely used for human readability, vl doesn't care about it at all. Create a group by typing "group" in the NodeBrowser. Groups can be nested.

![](../../images/language/02_GroupInside.PNG)
<center>Inside a group patch</center>

![](../../images/language/01_GroupOutside.PNG)
<center>Group patch from the outside</center>

## Category
A Category patch looks quite similar to the group, only its name has a meaning: The name appends itself to the category of its parent patch. That way you can build up any category hierarchy, that you then see in the NodeBrowser. Multiple category levels are allowed with dot notation. e.g. _MyCat1.MyCat2_ etc.

![](../../images/language/04_CategoryInside.PNG)
<center>Inside a category patch</center>

![](../../images/language/03_CategoryOutside.PNG)
<center>Category patch from the outside</center>

## Full Category
A Full Category patch is similar to the Category patch, only that it doesn't add its category to the parent. By that you can place nodes in any category, regardless of the parent patch. It's considered bad practice to do that, but is useful to add nodes to an existing category like Collections.Spread, for example. Multiple category levels are allowed with dot notation. e.g. _MyParentCat.MySubCat_ etc.

![](../../images/language/06_FullCategoryInside.PNG)
<center>Inside a category patch</center>

![](../../images/language/05_FullCategoryOutside.PNG)
<center>Category patch from the outside</center>

Each vl document can directly start a category, which you can define in the angular brackets in the top left corner of the document patch.

![](../../images/language/07_DocPatch.png)
<center>"Voo" specified as a documents category</center>

## Changing the Patch Type
You can easily convert a group patch into a category patch and vice versa by the patch type enum. Note how the label changes and represents the actual category structure:

![](../../images/language/08_ChangePatchType.gif)
<center>Converting a group into a category</center>

## Setting Categories on Definitions
As if the above didn't offer enough options already there is one more way to specify a category for an operation or a datatype definition:

![](../../images/language/09_SetCategoryOnDef.gif)
<center>Setting a Category on an datatype or operation definition</center>
