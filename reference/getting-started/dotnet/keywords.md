# C# Keywords
... and how to express them in VL.

Legend
* **not-supported** This keyword does not have an equivalent in vl. If you find it necessary to use its functionality, you can still write C# code that can be used in vl, see [Writing Nodes in C#](../../extending/writing-nodes.md).
* **no-inheritance** VL does not support class inheritance and therefore also not the concept that comes with this keyword.

### abstract
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/abstract)  
```csharp
abstract class Foo
{
  abstract public int Bar();
}
```
{no-inheritance}

### as 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/as)  
```csharp
object foo = 1;
var foo = foo as int;
```
Use the *CastAs* node.

### base 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/base)  
{no-inheritance}

### break 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/break)  
```csharp
for (int i = 0; i < 10; i++)
{
  if (i % 2 == 0)
    break;
  Console.Beep();
}
```

See [Special Loop Pins](../../language/loops.md#special-pins) for how to use a __Break__ output, to break out of a loop in vl.

### case 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/case)  
See [switch](#switch-)

### catch 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/catch)  
See [try](#try-)

### checked 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/checked)  
{not-supported}

### class 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class)  
See [Datatype Patch](../../language/patches.md#datatype-patch).

### const 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/const)  
{not-supported}

### continue 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/continue)  
{not-supported}

### decimal 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/decimal)  

### default 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/default)  
See [switch](#switch-)

### delegate 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/delegate)  
See [Delegates](../../language/delegates.md).

### do 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/do)  
See [while](#while-)

### double 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/double)  
Called _Float64_ in vl, part of category _Primitives_.

> [!NOTE]
> Only showing in the nodebrowser, if the _Advanced_ aspect is activated.

### else 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/else)  
See [if](#if-)

### enum 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/enum)  

```csharp
enum Alignment {Left, Middle, Right};
```

While existing enums can certainly be used in VL, one thing you cannot yet do in VL, is define a custom enum. If you need a custom enum, for now you'll have to define it using C# code. See [Writing Nodes in C#](../../extending/writing-nodes.md) for how to do this.

### event 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/event)  
Instead of events, VL uses a similar concept called __Observables__. See [Reactive](../../libraries/reactive.md) for details.

### explicit 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/explicit)  
{not-supported}

### extern 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/extern)  
{not-supported}

### finally 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/finally)  
See [try](#try-)

### fixed 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/fixed)  
{not-supported}

### float 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/float)  
Called _Float32_ in vl, part of category _Primitives_.

### for 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/for)  
See [Loops](../../language/loops.md).

### foreach 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/foreach)  
See [Loops](../../language/loops.md).

### goto 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/goto)  
{not-supported}

### if 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/if)  
See [Conditions](conditions.md).

### implicit 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/implicit)  
{not-supported}

### in 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/in)  
{not-supported}

### int 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int)  
Called _Integer32_ in vl, part of category _Primitives_.

### interface 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface)  

See [Interfaces](interfaces.md).

### internal 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/internal)  

### is 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/is)  
{not-supported}

### lock 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/lock)  
{not-supported}

### long 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/long)  
Called _Integer64_ in vl, part of category _Primitives_.

> [!NOTE]
> Only showing in the nodebrowser, if the _Advanced_ aspect is activated.

### namespace 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/namespace)  
The concept of a _namespace_ is called [Category](../../language/groups.md#category) in VL.

### new 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/new)  

```csharp
var date = new DateTime(2002, 12, 24);
```

The new keyword denotes a constructor, meaning the operation that creates a new instance of a object. In VL all constructors of classes and records are called __Create__.

The equivalent of creating an instance of the DateTime class, in VL looks like this:name:

![](../images/vl-for-c-programmers-79579.png)

### null 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null)  

Part of the category __Primitive.Object__

> [!NOTE]
> Only showing in the nodebrowser, if the _Advanced_ aspect is activated.

### operator 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/operator)  

### out 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/out)  

### override 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/override)  
{no-inheritance}

### params 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/param)  

### private 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/private)  

### protected 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/protected)  

{no-inheritance}

### public 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/public)  

### readonly 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/readonly)  
{not-supported}

### ref 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/ref)  

### return 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/return)  

### sbyte 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/sbyte)  
Called _Integer8_ in vl, part of category _Primitives_.

> [!NOTE]
> Only showing in the nodebrowser, if the _Advanced_ aspect is activated.

### sealed 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/sealed)  
{not-supported}

### short 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/short)  
Called _Integer16_ in vl, part of category _Primitives_.

> [!NOTE]
> Only showing in the nodebrowser, if the _Advanced_ aspect is activated.

### sizeof 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/sizeof)  

### stackalloc 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/stackalloc)  
{not-supported}

### static 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/static)  
{not-supported}

### struct 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/struct)  

### switch 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/switch)  
VL does not have a _switch_ statement yet. See [Conditions](language/conditions.md) for workarounds.

### this 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/this)  

### throw 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/throw)  

### try 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/try)  

See [Exception Handling](../../language/exception-handling.md).

### typeof 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/typeof)  

### uint 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/uint)  
Called _Integer32 (Unsigned)_ in vl, part of category _Primitives_.

> [!NOTE]
> Only showing in the nodebrowser, if the _Advanced_ aspect is activated.

### ulong 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/ulong)  
Called _Integer64 (Unsigned)_ in vl, part of category _Primitives_.

> [!NOTE]
> Only showing in the nodebrowser, if the _Advanced_ aspect is activated.

### unchecked 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/unchecked)  
{not-supported}

### unsafe 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/unsafe)  
{not-supported}

### ushort 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/ushort)  
Called _Integer16 (Unsigned)_ in vl, part of category _Primitives_.

> [!NOTE]
> Only showing in the nodebrowser, if the _Advanced_ aspect is activated.

### using 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using)  

### virtual 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/virtual)  
{no-inheritance}

### void 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/void)  

### volatile 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/volatile)  
{not-supported}

### while 
[C# Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/while)  
VL doesn't have a _while_ loop yet. See [Loops](../../language/loops.md#while) for an easy workaround.

