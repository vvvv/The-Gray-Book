# TextureFX

TextureFX is a specification for nodes that do GPU/shader based texture operations. Shaders are written in [SDSL](https://doc.stride3d.net/latest/en/manual/graphics/effects-and-shaders/shading-language/index.html) which is a superset of [HLSL](http://msdn.microsoft.com/en-us/library/windows/desktop/bb509561%28v=vs.85%29.aspx). We distinguish Sources, Mixers, Filters and Utils.

Here is what you need to know to write your own:

## Creating a new TextureFX
Next to your .vl document create a directory named `\shaders`. In this directory place a text file with the suffix `_TextureFX.sdsl`, like:

    \MyProgram.vl
    \shaders\MyFx_TextureFX.sdsl

The .sdsl file then contains the shader for a source, mixer, filter or utility TextureFX. For a simple invert effect, this would be everything that is needed: 

```hlsl
shader MyFx_TextureFX : FilterBase
{
    float4 Filter(float4 tex0col)
    {
        return = 1 - tex0col.rgb;
    }
};
```

> [!NOTE]
> The filename ending in **_TextureFX.sdsl** and the shader name also ending in **_TextureFX** is crucial here. It allows the node factory to pick up this file and interpret it as a TextureFX.

## Base Shaders to inherit from
**Is there a requirement at all?**
You can inherit your shaders from the following, multiple inheritance is allowed:

* TextureFX: 
* ShaderUtils: Pi,...
  
### FilterBase
Gives you an already sampled texture and allows you to override the Filter function. 

```hlsl
shader MyFx_TextureFX : FilterBase
{
    float4 Filter(float4 tex0col)
    {
        return = 1 - tex0col.rgb;
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
### Category
If you don't specify a category, the node will show up under `Stride\Textures`. Specifying a category allows you to put the node in a subcategory from there. 

### Summary
A short info that shows up as tooltip on the node in the NodeBrowser and when hovered in a patch.

### Remarks
Additional info regarding the node visible on the tooltip in the patch.

### Tags
A list of search terms (separated by space, not comma!) the node should be found with, when typed in the NodeBrowser.

## Source Node Attributes
The following attributes are specifically for use with Source TextureFX:

### TextureSource
```hlsl
[TextureSource]
shader Foo_TextureFX : TextureFX
```

To declare a shader to be a TextureFX Source. This makes it behave like the following:

* It has an "Output Size" input
* It has an (optional) "Output Format" input
* It has an "Enabled" input
* Any Texture input pin will keep its name as declared (For Filters and Mixers this is not the case. There the pins are renamed to have concise namings across all nodes)

### OutputFormat
```hlsl
[OutputFormat("R8G8B8A8_UNorm_SRgb")]
shader Foo_TextureFX : TextureFX
```

The desired output pixel format. Valid Values [PixelFormats](https://github.com/stride3d/stride/blob/master/sources/engine/Stride/Graphics/PixelFormat.cs).

### RenderFormat
```hlsl
[RenderFormat("R8G8B8A8_UNorm_SRgb")]
shader Foo_TextureFX : TextureFX
```

## Pin Attributes
Every pin definition can have the following Attributes:

### Summary
A short info that shows up as tooltip on the pin

### Remarks
Additional info that shows up as tooltip on the pin

### Optional
Pins marked as optional don't show up on the node by default. They need to be activiated via the nodes configuration menu.

### Color
To have a float4 input show up as a color pin

### EnumType
```hlsl
[EnumType("VL.Stride.Effects.TextureFX.NoiseType")]
int Type;
```

To have an int input show up as an enum.

> [!NOTE]
> This also requires you to define the specified enum in C# and have it referenced by the .vl documents you're using the TextureFX in.


### Default
```hlsl
[Default(1, 1, 1, 1)]
compose ComputeFloat4 Control;
```
Only for Compute inputs to specify the default. For primitive inputs you can simply set the default with the variable definition:

```hlsl
float4 Control = float4[1, 1, 1, )];
```


## Shader Semantics
If needed, [HLSL shader semantics](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-semantics#system-value-semantics) can be used. 