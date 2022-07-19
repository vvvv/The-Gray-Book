# Identifier Naming Conventions

VL uses Pascal Case as casing convention. Examples:

Data types:
<pre>
Particle
ParticleSystem
AlignedBox
</pre>

Operations:
<pre>
Update
GetPosition
SplitCurve
</pre>

In general the following characters are allowed, not starting with a number or space:

**a-z A-Z 0-9 + - * / = ~ < >**

Pads and pins should contain spaces to make them visually more pleasing and distinct from operations:
<pre>
Velocity
Map Mode
Word List
</pre>

Categories can include periods:
<pre>
Math
Collections.Spread
Animation.FrameBased  
</pre>
