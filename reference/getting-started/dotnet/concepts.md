# C# Concepts
... and how to express them in VL.

## foo++
How to translate an expression like the following to VL:
```csharp
var foo = 1;
foo++;
```

First we need to agree that the above is only a shortcut to writing:
```csharp
var foo = 1;
foo = foo + 1;
```

Then the below patch should be read as: The lower foo pad corresponds to the left side of the assignment (foo =) and the upper foo pad corresponds to the initialized variable foo (var foo = 1). So:

    foo (lower pad) = foo (upper pad) + 1;

![](../images/vl-for-c-programmers-2e149.png)
.Note how the link from the IOBox to the foo pad is white, meaning it is assigned to the constructor

![](../images/vl-for-c-programmers-23458.png)
.Shortcut for + 1: Use the Inc node

## Nullable
When referencing an external library, you may encounter input or output pins of type __Nullable<T>__. To deal with them you need to [reference](../../extending/using-net-libraries.md) the __System.Runtime__ assembly from the GAC.

This gives you access to the nodes HasValue and Value to read from nullable outputs. To set a value to an input that requires a Nullable<T>, it is enough to put a CastAs node in between the value and the nullable input.

> [!NOTE]
> CastAs only shows up with the __Advanced__ aspect enabled in the nodebrowser.


## Variables

## Lambda

## Observable
See [Reactive](../../libraries/reactive.md).

## Task

## Enumerator
When referencing an external library, you may encounter collection types, that do not inherit from Sequence and as such cannot simply be used with VL's ForEach loop.

Most likely those collections will still support an Enumerator. Here is how you can deal with an enumerator in VL:

MoveNext, Current
