# r3f-kerosene :fire:

Quick-start framework for performant, reusable, real-time 3D apps using React and Three.js.

### Modularity

Using .jsx components, react-three-fiber leverages the ability to reuse models and scenes, calling them within the canvas as easily as any other react component.

### GLTF > JSX

Export a .gltf or .glb file from Blender, C4D, Maya, CLO, Fusion360 etc. To create a reusable .jsx component from your scene/model you can drag and drop the .gltf into https://gltf.pmnd.rs/ and copy/paste the code into a new component. Alternatively this can be converted in the command line if your .gltf is in your public folder by running:
```
npx gltfjsx model.gltf
```
replacing model.gltf with your file in the public folder.

### Textures

For ideal GLTF texture exports to three.js refer to your specific programs documentation, like Blender's (https://docs.blender.org/manual/en/2.80/addons/io_scene_gltf2.html#). Some textures may need to be baked to show up in three.js so if your scene/model looks unsatisfactory, this is probably the case.