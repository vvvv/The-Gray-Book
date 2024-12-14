# Text rendering

## 2d Graphics
For [VL.Skia](../libraries/graphics-2d.md) you have the following options:

- Skia itself comes with an extensive set of nodes for high-quality simple text rendering
- Try [VL.RichtextKit](https://forum.vvvv.org/t/vl-richtextkit/19883) for rendering richttext
- Using [VL.CEF.Skia](https://www.nuget.org/packages/VL.CEF.Skia) to render html content allows for complex formatted text to be rendered

## 3d Graphics
For [VL.Stride](../libraries/graphics-3d.md) you have the following options:
- For quick, simple Text rendering use Text [Stride.Models] (experimental)
- Use any of the above (2d Graphics) options via a SkiaRenderer or SkiaTexture node in Stride
- Using [VL.CEF.Stride](https://www.nuget.org/packages/VL.CEF.Stride) to render html content allows for complex formatted text to be rendered
- Use [VL.Stride.Text3d](https://www.nuget.org/packages/VL.Stride.Text3d) for rendering extruded 3d text
- Try [VL.BMFont](https://www.nuget.org/packages/VL.BMFont)
- Try [FontStashSharp](https://github.com/FontStashSharp/FontStashSharp) (Text rendering library addon for Stride)
- For the best available option go with the [Slug](https://sluglibrary.com/) library. Requires a separate license from them. If you need help with the implementation, [get in touch](mailto:devvvvs@vvvv.org).
