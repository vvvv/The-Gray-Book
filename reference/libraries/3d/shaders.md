# Shaders
Shaders are written in [SDSL](https://doc.stride3d.net/4.0/en/manual/graphics/effects-and-shaders/shading-language/index.html), an advanced high-level shader language that supports OOP concepts and multiple inheritance. This allows to write short and nice looking shader code.

## File Management
Any .vl document that has VL.Stride set as a dependency will pick up shader files that are placed next to it in special folder called "shaders". Multiple .vl documents can share the same shaders folder.

> [!NOTE]
> Shader files share a global scope, two files with the same name are not allowed, even if they are referenced by two different .vl documents.

### Special Suffixes
If a shader file ends with one of the pre-defined suffixes, the shader will be converted into a VL node.
#### _ShaderFX
A node that just represents "a piece of code" that can be used to compose larger shaders. This is the most felxible type of node, it can work together all other shader node types.
#### _DrawFX
A node that can be used to draw geometry.
#### _ComputeFX
A node that represents a compute shader to work with arbitrary data on the GPU.
#### _TextureFX
Specialized nodes to process textures. See more in the chapter [TextureFX](texturefx.md).

## Core Concepts
### Inheritance
The main purpose of inherance is re-using existing shader code. You can think of it like importing or including the code of another shader into your own shader. It is actually quite similar to the #include statements in HLSL or C, with some nice additional features.

So, say you have a file `MyUtils.sdsl` like this:
```c
shader MyUtils
{
    float4 Invert(float4 col)
    {
        col.rgb = 1 - col.rgb;
        return col;
    }
};
```

and you want to use its functions in another file, then make sure both files are in the same directory and simply inherit and use the `MyUtils` shader like so:

```c
shader MyFx_TextureFX : FilterBase, MyUtils
{
    float4 Filter(float4 tex0col)
    {
        return MyUtils.Invert(tex0col);
    }
};
```

To understand the shader inheritance hierachy better, you can use the [Stride.ShaderExplorer](../graphics-3d.md#useful-tools) to get an overview and browse the shaders.

### Composition

### Streams
