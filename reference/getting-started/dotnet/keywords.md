# C# Keywords
... and how to express them in VL.

Legend
* **not-supported** This keyword does not have an equivalent in vl. If you find it necessary to use its functionality, you can still write C# code that can be used in vl, see [Writing Nodes in C#](../../extending/writing-nodes.md).
* **no-inheritance** VL does not support class inheritance and therefore also not the concept that comes with this keyword.

### abstract [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/abstract)
```csharp
abstract class Foo
{
  abstract public int Bar();
}
```
{no-inheritance}

### as [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/as)
```csharp
object foo = 1;
var foo = foo as int;
```
Use the *CastAs* node.

### base [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/base)
{no-inheritance}

### break [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/break)
```csharp
for (int i = 0; i < 10; i++)
{
  if (i % 2 == 0)
    break;
  Console.Beep();
}
```

See [Special Loop Pins](../../language/loops.md#special-pins) for how to use a __Break__ output, to break out of a loop in vl.

### case [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/case)
See [switch](#switch-)

### catch [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/catch)
See [try](#try-)

### checked [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/checked)
{not-supported}

### class [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class)
See [Datatype Patch](../../language/patches.md#datatype-patch).

### const [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/const)
{not-supported}

### continue [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/continue)
{not-supported}

### decimal [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/decimal)

### default [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/default)
See [switch](#switch-)

### delegate [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/delegate)
See [Delegates](../../language/delegates.md).

### do [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/do)
See [while](#while-)

### double [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/double)
Called _Float64_ in vl, part of category _Primitives_.

> [!NOTE]
> Only showing in the nodebrowser, if the _Advanced_ aspect is activated.

### else [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/else)
See [if](#if-)

### enum [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/enum)

```csharp
enum Alignment {Left, Middle, Right};
```

While existing enums can certainly be used in VL, one thing you cannot yet do in VL, is define a custom enum. If you need a custom enum, for now you'll have to define it using C# code. See [Writing Nodes in C#](../../extending/writing-nodes.md) for how to do this.

### event [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/event)
Instead of events, VL uses a similar concept called __Observables__. See [Reactive](../../libraries/reactive.md) for details.

### explicit [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/explicit)
{not-supported}

### extern [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/extern)
{not-supported}

### finally [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/finally)
See [try](#try-)

### fixed [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/fixed)
{not-supported}

### float [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/float)
Called _Float32_ in vl, part of category _Primitives_.

### for [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/for)
See [Loops](../../language/loops.md).

### foreach [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/foreach)
See [Loops](../../language/loops.md).

### goto [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/goto)
{not-supported}

### if [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/if)
See [Conditions](conditions.md).

### implicit [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/implicit)
{not-supported}

### in [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/in)
{not-supported}

### int [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int)
Called _Integer32_ in vl, part of category _Primitives_.

### interface [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface)

See [Interfaces](interfaces.md).

### internal [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/internal)

### is [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/is)
{not-supported}

### lock [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/lock)
{not-supported}

### long [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/long)
Called _Integer64_ in vl, part of category _Primitives_.

> [!NOTE]
> Only showing in the nodebrowser, if the _Advanced_ aspect is activated.

### namespace [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/namespace)
The concept of a _namespace_ is called [Category](../../language/groups.md#category) in VL.

### new [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/new)

```csharp
var date = new DateTime(2002, 12, 24);
```

The new keyword denotes a constructor, meaning the operation that creates a new instance of a object. In VL all constructors of classes and records are called __Create__.

The equivalent of creating an instance of the DateTime class, in VL looks like this:name:

![](../images/vl-for-c-programmers-79579.png)

### null [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null)

Part of the category __Primitive.Object__

> [!NOTE]
> Only showing in the nodebrowser, if the _Advanced_ aspect is activated.

### operator [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/operator)

### out [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/out)

### override [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/override)
{no-inheritance}

### params [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/param)

### private [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/private)

### protected [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/protected)

{no-inheritance}

### public [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/public)

### readonly [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/readonly)
{not-supported}

### ref [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/ref)

### return [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/return)

### sbyte [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/sbyte)
Called _Integer8_ in vl, part of category _Primitives_.

> [!NOTE]
> Only showing in the nodebrowser, if the _Advanced_ aspect is activated.

### sealed [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/sealed)
{not-supported}

### short [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/short)
Called _Integer16_ in vl, part of category _Primitives_.

> [!NOTE]
> Only showing in the nodebrowser, if the _Advanced_ aspect is activated.

### sizeof [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/sizeof)

### stackalloc [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/stackalloc)
{not-supported}

### static [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/static)
{not-supported}

### struct [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/struct)

### switch [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/switch)
VL does not have a _switch_ statement yet. See [Conditions](language/conditions.md) for workarounds.

### this [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/this)

### throw [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/throw)

### try [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/try)

See [Exception Handling](../../language/exception-handling.md).

### typeof [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/typeof)

### uint [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/uint)
Called _Integer32 (Unsigned)_ in vl, part of category _Primitives_.

> [!NOTE]
> Only showing in the nodebrowser, if the _Advanced_ aspect is activated.

### ulong [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/ulong)
Called _Integer64 (Unsigned)_ in vl, part of category _Primitives_.

> [!NOTE]
> Only showing in the nodebrowser, if the _Advanced_ aspect is activated.

### unchecked [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/unchecked)
{not-supported}

### unsafe [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/unsafe)
{not-supported}

### ushort [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/ushort)
Called _Integer16 (Unsigned)_ in vl, part of category _Primitives_.

> [!NOTE]
> Only showing in the nodebrowser, if the _Advanced_ aspect is activated.

### using [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using)

### virtual [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/virtual)
{no-inheritance}

### void [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/void)

### volatile [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/volatile)
{not-supported}

### while [![](../images/vl-for-c-programmers-b4959.png)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/while)
VL doesn't have a _while_ loop yet. See [Loops](../../language/loops.md#while) for an easy workaround.

