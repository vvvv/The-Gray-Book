# TextureFX

TextureFX is a specification for nodes that do GPU/shader based texture operations. Shaders are written in [SDSL](https://doc.stride3d.net/latest/en/manual/graphics/effects-and-shaders/shading-language/index.html) which is a superset of [HLSL](http://msdn.microsoft.com/en-us/library/windows/desktop/bb509561%28v=vs.85%29.aspx). We distinguish Sources, Mixers, Filters and Utils.

Here is what you need to know to write your own:

## Creating a new TextureFX
Next to your .vl document create a directory named `\shaders`. In this directory place a text file with the suffix `_TextureFX.sdsl`, like:

    \MyProgram.vl
    \shaders\MyFx_TextureFX.sdsl

The .sdsl file then contains the shader for a source, mixer, filter or utility TextureFX. For a simple invert filter, this would be everything that is needed: 

```hlsl
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

## Inputs
Every TextureFX node has exactly one texture output and a couple of inputs by default:

### Sources
| Name | Type | Optional | Description
|---|---|---|---|
| Render Format | PixelFormat Enum | x | 
| Output Format | PixelFormat Enum | x | The format of the output texture
| Output Size | Int2 |  | The size of the output texture
| Enabled | Boolean |  | Whether or not the output is updated

To make a TextureFX a "Source", specify the "TextureSource" attribute, see below.
  
### Filter, Mixer and Utils
| Name | Type | Optional | Description
|---|---|---|---|
| Input | Texture | | 
| Sampler | SamplerState  | x | Allows to override the default sampler
| Control | GPU<Vector4>  | | Allows to blend between the input and the result of the operation
| Render Format | PixelFormat Enum | x | 
| Output Format | PixelFormat Enum | x | Allows to override the format of the output texture
| Output Size | Int2 | x | Allows to override the size of the output texture
| Output Texture | Texture | x | Allows to render the output in a given texture, rather than using the default texture of the node
| Apply | Boolean | | If disabled, the input is returned unchanged

## Base Shaders to inherit from
**Is there a requirement at all?**
You can inherit your shaders from the following, multiple inheritance is allowed:

* TextureFX: 
* ShaderUtils: Pi,...
  
### FilterBase
Deriving from this shader provides:
* the Filter() function to override which comes with the color of the input texture as input
* 
Gives you an already sampled texture and allows you to override the Filter function. 

```hlsl
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

### MixerBase
Gives you two already sampled textures and a fader parameter and allows you to override the Mix function:

```hlsl
shader Mix_TextureFX : MixerBase
{
    float4 Mix(float4 tex0col, float4 tex2col, float fader)
    {
        return lerp(tex0col, tex2col, fader);	
    }
};
```
> [!NOTE]
> Using the `tex0col` input is not mandatory and you can still add other texture inputs to sample from.
  
## Node Attributes
Attributes allow you to configure your TextureFX node. Here is an example of some attributes applied to a shader:

```hlsl
[Category("Filter")]
[Summary("Description for what the filter does")]
[Remarks("Any special notes")]
[Tags("comma separated list of tags")]
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
| Category | If not specified, the node will show up under `Stride\Textures`. Specifying a category allows you to put the node in a subcategory from there. 
| Summary | A short info that shows up as tooltip on the node in the NodeBrowser and when hovered in a patch.
| Remarks | Additional info regarding the node visible on the tooltip in the patch.
| Tags | A list of search terms (separated by space, not comma!) the node should be found with, when typed in the NodeBrowser.

## Source Node Attributes
The following attributes are specifically for use with Source TextureFX:

```hlsl
[TextureSource]
[OutputFormat("R8G8B8A8_UNorm_SRgb")]
[RenderFormat("R8G8B8A8_UNorm")]
shader Foo_TextureFX : TextureFX
```

| Attribute | Description
|---|---|
| TextureSource | Specifies a shader to behave as a TextureFX Source, see above. Also: Any Texture input pin will keep its name as declared (For Filters and Mixers this is not the case. There the pins are renamed to have concise namings across all nodes)
| OutputFormat | Allows to specify the outputs texture format. Valid Values: [PixelFormats](https://github.com/stride3d/stride/blob/master/sources/engine/Stride/Graphics/PixelFormat.cs). If not specified, defaults to R8G8B8A8_UNorm_SRgb. 
| RenderFormat | Allows to specify a render format that differs from the output format. Valid Values: [PixelFormats](https://github.com/stride3d/stride/blob/master/sources/engine/Stride/Graphics/PixelFormat.cs). If not specified, defaults to OutputFormat. 

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
```hlsl
[Color]
[Summary("The color to do this and that)]
float4 MyColor;

[EnumType("VL.Stride.Effects.TextureFX.NoiseType")]
int Type;

[Default(1, 1, 1, 1)]
compose ComputeFloat4 Control;
```

## Shader Semantics
If needed, [HLSL shader semantics](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-semantics#system-value-semantics) can be used. 

Many of those are already available in more human-readable terms inherited via the [ShaderBase](https://github.com/stride3d/stride/blob/master/sources/engine/Stride.Graphics/Shaders/ShaderBaseStream.sdsl).