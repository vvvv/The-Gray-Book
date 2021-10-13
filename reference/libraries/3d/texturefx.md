# TextureFX

TextureFX is a specification for nodes that do GPU/shader based texture operations. Shaders are written in [SDSL](https://doc.stride3d.net/latest/en/manual/graphics/effects-and-shaders/shading-language/index.html) which is a superset of [HLSL](http://msdn.microsoft.com/en-us/library/windows/desktop/bb509561%28v=vs.85%29.aspx). We distinguish Sources, Mixers, Filters and Utils.

Here is what you need to know to write your own:

## Creating a new TextureFX
Next to your .vl document create a directory named `\shaders`. In this directory place a text file with the suffix `_TextureFX.sdsl`, like:

    \MyProgram.vl
    \shaders\MyFx_TextureFX.sdsl

The .sdsl file then contains the shader for a source, mixer, filter or utility TextureFX. For a simple invert filter, this would be everything that is needed: 

```c
shader MyFx_TextureFX : FilterBase
{
    float4 Filter(float4 tex0col)
    {
        tex0col.rgb = 1 - tex0col.rgb;
        return tex0col;
    }
};
```

> [!NOTE]
> The filename ending in **_TextureFX.sdsl** and the shader name also ending in **_TextureFX** is crucial here. It allows the node factory to pick up this file and interpret it as a TextureFX.

## Category and Aspects

By default, every TextureFX node will show up in the `Stride\Textures` category. In order to move a node to a subcategory, use a [node attribute](#node-attributes).

Aspects, like "Experimental", "Internal", "Obsolete" and "Advanced" can be specified in two different ways: 
* Either as part of the shaders filename, in which case you must not forget that the shader name itself must be identical to the filename
* Or as part of the category [node attribute](#node-attributes).

## Base Shaders to inherit from

There are a bunch of shaders you can inherit useful functionality from. Multiple Inheritance is allowed!

* Shipping with Stride: Use the [Shader Explorer](https://github.com/tebjan/Stride.ShaderExplorer) to browse available shaders to inherit from (requires also [Stride](https://stride3d.net/download/) to be installed)
* Shipping with VL.Stride: Explore the .sdsl files in: C:\Program Files\vvvv\vvvv_gamma_...\lib\packs\VL.Stride.Runtime...\stride\Assets\Effects

### Recommended base shaders

#### TextureFX
Derives from ImageEffectShader and ShaderUtils.

#### FilterBase
Derives from TextureFX. Allows to you implement the Filter() function, which comes with the color of the input texture as parameter:

```c
shader MyFx_TextureFX : FilterBase
{
    float4 Filter(float4 tex0col)
    {
        tex0col.rgb = 1 - tex0col.rgb;
        return tex0col;
    }
};
```
> [!NOTE]
> Using the `tex0col` input is not mandatory and you can still add other texture inputs to sample from.

#### MixerBase
Derives from TextureFX. Allows you to implement the Mix() function, which comes with the colors of the two input textures and a fader parameter:

```c
shader Mix_TextureFX : MixerBase
{
    float4 Mix(float4 tex0col, float4 tex1col, float fader)
    {
        return lerp(tex0col, tex1col, fader);	
    }
};
```
> [!NOTE]
> Using the `tex0col` and `tex1col` inputs is not mandatory and you can still add other texture inputs to sample from.

#### ShaderUtils
Defines constants like PI and gives access to many commonly used shader snippets.

## Node Attributes
Attributes allow you to configure your TextureFX node. Here is an example of some attributes applied to a shader:

```c
[Category("Filter")]
[Summary("Description for what the filter does")]
[Remarks("Any special notes")]
[Tags("comma separated list of tags")]
[OutputFormat("R8G8B8A8_UNorm_SRgb")]
shader MyFX_TextureFX : TextureFX
{
    stage override float4 Shading()
    {
        return ColorUtilityTemp.LinearTosRGB(InTex());
    }
};
```

| Attribute | Description
|---|---|
| Category | If not specified, the node will show up under `Stride\Textures`. Specifying a category allows you to put the node in a subcategory from there. Also [aspects](../extending/aspects.md) can be added among the category here, like e.g. Filter.Experimental
| Summary | A short info that shows up as tooltip on the node in the NodeBrowser and when hovered in a patch.
| Remarks | Additional info regarding the node visible on the tooltip in the patch.
| Tags | A list of search terms (separated by space, not comma!) the node should be found with, when typed in the NodeBrowser.
| OutputFormat | Allows to specify the outputs texture format. Valid Values: [PixelFormats](https://github.com/stride3d/stride/blob/master/sources/engine/Stride/Graphics/PixelFormat.cs). If not specified, defaults to R8G8B8A8_UNorm_SRgb.
| WantsMips | Requests mipmaps for a specific texture input. See [Mipmaps](#mipmaps) below.
| DontConvertToLinearOnRead | You'll most likely not need this flag! If set, disables the automatic sRGB-to-linear conversion that happens when reading (sampling) from an sRGB input texture. Only relevant if the input texture format has the `_SRgb` suffix and the pipeline is set to linear color space, which is the default. See [sRGB and Linear Color Space](#srgb-and-linear-color-space) below.
| DontConvertToSRgbOnWrite | You'll most likely not need this flag! If set, this flag disables the automatic linear-to-sRGB conversion that happens when writing the shader result into an sRGB texture. Only relevant if OutputFormat has the `_SRgb` suffix and the pipeline is set to linear color space, both of which is the default. See [sRGB and Linear Color Space](#srgb-and-linear-color-space) below.

## Source Node Attributes
The following attributes are specifically for use with Source TextureFX:

```c
[TextureSource]
shader Foo_TextureFX : TextureFX
```

| Attribute | Description
|---|---|
| TextureSource | Specifies a shader to behave as a [TextureFX Source](#sources). Also: Any Texture input pin will keep its name as declared (For Filters and Mixers this is not the case. There the pins are renamed to have concise namings across all nodes)

## Pin Attributes
Every pin definition can have the following Attributes:

| Attribute | Description
|---|---|
| Summary | A short info that shows up as tooltip on the pin
| Remarks | Additional info that shows up as tooltip on the pin
| Optional | Pins marked as optional don't show up on the node by default. They need to be activiated via the nodes configuration menu.
| Color | To have a float4 input show up as a color pin
| EnumType | To have an int input show up as an enum. **NOTE**: This also requires you to define the specified enum in C# and have it referenced by the .vl documents you're using the TextureFX in.
| Default | Only for Compute inputs to specify their default. For primitive inputs you can simply set the default with the variable definition.

### Examples
```c
[Color]
[Summary("The color to do this and that")]
float4 MyColor;

[EnumType("VL.Stride.Effects.TextureFX.NoiseType")]
int Type;

[Default(1, 1, 1, 1)]
compose ComputeFloat4 Control;
```

## Inputs
Every TextureFX node has exactly one texture output and a couple of inputs by default:

### Sources
| Name | Type | Optional | Description
|---|---|---|---|
| Output Format | PixelFormat Enum | x | The format of the output texture, defaults to R8G8B8A8_UNorm_SRgb
| Output Size | Int2 |  | The size of the output texture
| Enabled | Boolean |  | Whether or not the output is updated

To make a TextureFX a "Source", specify the ["TextureSource" attribute](#source-node-attributes).
  
### Filter, Mixer and Utils
| Name | Type | Optional | Description
|---|---|---|---|
| Input | Texture | | 
| Sampler | SamplerState  | x | Allows to override the default sampler
| Control | GPU<Vector4>  | | Allows to blend between the input and the result of the operation
| Output Format | PixelFormat Enum | x | Allows to override the format of the output texture, defaults to `None`, meaning the format of the input texture is used
| Output Size | Int2 | x | Allows to override the size of the output texture
| Output Texture | Texture | x | Allows to render the output in a given texture, rather than using nodes own texture
| Apply | Boolean | | Whether the effect is applied to the input texuture, or the effect is bypassed and the input is returned unchanged

## Multiple passes
At this point there is no support for multiple passes in shader code. That said, you can still create multipass TextureFX by preparing the passes as individual TextureFX and then plugging them together in a patch. For an example, see how the Glow filter is done.

Note that for such cases it makes sense to mark the individual passes with the "Internal" [aspect](#category-and-aspects), because they probably are not meant to be used on their own and therefore should not show up in the NodeBrowser.

## Mipmaps
Some effects need mipmaps for the input texture. This can be indicated via the `[WantsMips("")]` attribute. It takes a comma separated list of texture variable names that need mipmaps. The TextureFX wrapper will then take care of generating the mipmaps, if the texture doesn't have them already. To save performance, an additional input pin is created that controls whether the mipmaps should be generated in every frame or only when the texture instance changes, the default is `true`.

```c
[WantsMips("Texture0, MyTexture, ...")]
shader Foo_TextureFX : TextureFX
```

## sRGB and Linear Color Space
By default the rendering pipeline is set to linear color space. This is the correct color space for doing color math, such as blending and lighting. But almost all images are stored in non-linear sRGB color space because it allows for lower bit depths, hence smaller file sizes. To solve this, graphics APIs have low bit depth [pixel formats with the `_SRgb` suffix](https://github.com/stride3d/stride/blob/7e836297cb5930c01e6dfa0183e7f3cc64748fb6/sources/engine/Stride/Graphics/PixelFormatExtensions.cs#L590) to indicate that the pixel values are in sRGB color space.

The (linear) graphics pipeline will automatically convert from sRGB to linear when a pixel is sampled from an sRGB texture and it will automatically convert from linear to sRGB when a pixel is written into an sRGB texture set as render target.

However, if you copy shader code that was written for an legacy sRGB/non-linear pipeline (as DX9/DX11 in vvvv beta were), you might want to indicate that the input and output colors are in sRGB space.

To do this, you can use two attributes that declare the read and write intent.
* `[DontConvertToLinearOnRead]`, input should stay as sRGB. This can involve an internal copy of the texture if the resource is not typeless (i.e. is [strongly typed](https://docs.microsoft.com/en-us/windows/win32/direct3d11/overviews-direct3d-11-resources-intro#strong-vs-weak-typing)).
* `[DontConvertToSRgbOnWrite]`, output is already sRGB.

```c
[DontConvertToLinearOnRead] //could involve a copy for each input texture
[DontConvertToSRgbOnWrite] //almost cost free
shader MySRgbFX_TextureFX : FilterBase
{
    float4 Filter(float4 tex0col)
    {
        tex0col.rgb = tex0col.rgb;
        return tex0col;
    }
};
```
These attributes will only do something if the input textures or render target have the `_SRgb` suffix.

Because there can be more than one input texture, it is also possible to specify a comma separated list of variable names of input textures to set the input attribute only for specific ones:
```c
[DontConvertToLinearOnRead("Texture0, MyTexture")]
[DontConvertToSRgbOnWrite]
shader MySRgbFX_TextureFX : FilterBase
```
## System Values and Shader Semantics
If needed, [HLSL shader semantics](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-semantics#system-value-semantics) can be used. 

Many of those are already available in more human-readable terms inherited via the [ShaderBase](https://github.com/stride3d/stride/blob/master/sources/engine/Stride.Graphics/Shaders/ShaderBaseStream.sdsl).

### Render Target Size
A common requirement is the size of the render target, this is provided via the `ViewSize` variable. It describes the size of the current viewport, which is the full size of the render target for TextureFX:

```c
float2 targetSize = ViewSize;
```
### Time
The current time and the frame time diffrence can be obtained by inheriting from the [Global shader](https://github.com/stride3d/stride/blob/master/sources/engine/Stride.Rendering/Rendering/Shaders/Global.sdsl) and using the `Time` and `TimeStep` variables. The values are automatically set by the runtime.

```c
shader MyBlinker_TextureFX : FilterBase, Global
{
    float4 Filter(float4 tex0col)
    {
        var blink = frac(Time) > 0.5;
        tex0col.rgb = tex0col.rgb * blink;
        return tex0col;
    }
};
```
