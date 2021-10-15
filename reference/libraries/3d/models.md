# Models and Meshes

## Model
A `Model` is a high-level class that combines geometry (meshes) with appearance (materials) and optionally a skeleton for animation. This makes it possible to represent a simple model with just one mesh and one material or a complex 3d object, such as an animated character.

To render a model, it has to be assigned to a `ModelComponent` that is part of an `Entity` in the scene graph. See [Rendering](rendering.md).

![](../../../images/libraries/3d/stride_model.svg)
<center><i>Model data structure</i></center>
<br>

To join the data of a model you can use the node `MeshModel` for the simple case of one mesh and one material or `MeshesModel` for multiple meshes and materials. To connect a single model to the scene graph, you can use the node `ModelEntity` that interally does all the entity and component setup for you.

## Mesh
A `Mesh` is a part of the model that contains the geometry information and an index that points to a material in the material list of the model.

![](../../../images/libraries/3d/stride_mesh.svg)
<center><i>Mesh data structure</i></center>
<br>

The actual geometry data is stored in a class called `MeshDraw`, it holds the GPU resources for the index and vertex buffers that will be used to draw the geometry. In detail, the `MeshDraw` has `IndexBufferBinding` and `VertexBufferBinding` properties that hold the respective buffer plus some information for the graphics pipeline. So the full path from model to first vertex buffer is: `Model.Meshes[0].Draw.VertexBuffers[0].Buffer`.

The vertices stored in a vertex buffer can have different fields, such as normals, texture corrdinates, etc. To make the workflow of getting the vertex data easier, you can use the `MeshSplit` nodes, see the help patch `Split a mesh into its components`.

### Dynamic Mesh
The nodes `DynamicMesh` or `DynamicMesh (Indexed)` create a mesh from vertex and/or index data.

To connect a single mesh to the scene graph, you can use the node `MeshEntity` that interally does all the entity and component setup for you. A mesh can also be rendered with the low-level workflow using a `MeshRenderer`. See [Rendering](rendering.md) for more details on that. Also see the help patch `Dynamic Mesh` for an example of setting up a mesh an rendering it.