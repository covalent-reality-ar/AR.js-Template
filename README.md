```
ToDo:
AR way to view 3D models

Links to keep:
Single Marker Business Card [example](https://www.youtube.com/watch?v=dRY6iuGkKBM)
[AR Business Card example with picture marker and links](https://www.youtube.com/watch?v=pTITrp_xOis)
[Link to webpage press F12 in and go to source tab to view code](https://ron-dagdag.azurewebsites.net/public/)
https://aframe.io/aframe-inspector/examples/
```
# AR.js-Template

## Introduction

This repository is designed to simplify the creation of AR projects. The intended users are employees of Covalent who may or may not have knowledge of programming languages. The following document will walk the user through the creation of a new project with the ability to do simple animations and link to other webpages. This will only cover single marker and single object displays. At the end of the document there will be additional links for troubleshooting purposes or for if a project calls for more advanced features.

## Instructions

### 1. Clone Repo
Download and install GitHub Desktop app at: [https://desktop.github.com/](https://desktop.github.com/)
If you don't have a GitHub account sign up for one and have someone add you to the Covalent AR GitHub organization.

Cloning Instructions:
1. Log in to the Covalent-Reality GitHub account. This can be found in File>Options>Accounts
2. Set your own GitHub account as the active user. This can be found in File>Options>Git
3. Create a new local repository by clicking on Current Project > Add > Create New Repository. Pick a location that easy to access and leave the other settings as none.
4. Go to https://github.com/covalent-reality-ar/AR.js-Template.git and select the green "clone or download"  button and download the project.
5. Open the zip file and double click on the AR.js-Template-master folder. Copy all the files except .gitattributes to the local repository folder you created in Step 3.
6. The GitHub desktop window should now display what files were added in the changes tab. Below the changes tab is the commit section. This is where you tell the GitHub desktop app that you want to keep any changes you make. Commit the new changes by adding a title and description and hitting the commit button.
7. Now you can click the Publish Repository button in the top bar. Make sure keep this code private is not selected and select covalent-reality-ar in the dropdown menu under Orgainzation

### 2. Atom for HTML
1. Download [Atom](https://atom.io/)
2. In the Welcome Guide tab open the project folder you created in the previous step.
3. Go to the Git tab. To commit changes they need to be Staged. Do this by right clicking the files in the unstaged window and hitting stage. Then write a Commit Message and press Commit to master. You can then push the changes with the button at the bottom right side of the window. Log in to your own GitHub account so that your work is logged. At this point you can use GitHub desktop or Atom to commit changes and push them to the online repository.


### 3. Create Marker and QRcode
Use
### 5. Test Marker
Use cube


### 6. Create or Find Model and Animation


### 7. Create model using Blender
1. Download the latest version of [Blender](https://www.blender.org/)
2. a. If the version is above 2.80 then enable the GLTF 2.0 plugin by going to File>User Preferences>Add-ons and make sure GLTF 2.0 is checked.  
b. If the version is less than 2.80 then download the GLTF 2.0 coverter [repository](https://github.com/KhronosGroup/glTF-Blender-IO#installation) copy the addons/io_scene_gltf2 folder into the scripts/addons/ directory of the Blender installation. Then enable the GLTF 2.0 plugin by going to File>User Preferences>Add-ons and make sure GLTF 2.0 is checked.
3. Make you model in Blender. I recommend looking up a reference image of the thing you want to make and dragging and dropping it into the window. Then you can hit the 5 num pad key and the 7 num pad key to go into orthographic view and top view. From here you can trace the image using the knife tool(shift+s) and extrude(e key while plane is selected) the plane you create from tracing it. This may take a lot of looking up Blender tutorials online.
4. Add materials using the Blender color materials and following the [tutorial] (https://medium.com/@matthewmain/how-to-import-a-3d-blender-object-into-a-three-js-project-as-a-gltf-file-5a67290f65f2). Export as glb as it packages all the files together and is easier to use.


### 8. Import glb file into gltf viewer
1. go to: [gltf](https://gltf-viewer.donmccurdy.com/)
2. drag and drop your new glb file. Click on the Lighting tab and set the environment to none. This will be close to what your model will look like when using the AR framework.


### 8. Test Marker and Model


### 9. Add Animation and AFRAME objects


### 10. Add Interactions and Links



## Helpful Links

## Explanation
AR.js is built on Aframe for 3D scenes which uses three.js

## Sources and Thank Yous

First and foremost, thank you to Jerome Etienne for creating and maintaining AR.js. Without his active helping of the community and answering of questions I would have given up a long time ago. In addition thank you to all the people making tutorials and answering questions about AR.js without whom this would not be possible.

[AR.js](https://github.com/jeromeetienne/AR.js)- framework used
