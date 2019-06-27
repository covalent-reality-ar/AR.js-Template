```
ToDo:
AR way to view 3D models
Change Covalent.html so it is commented out and the box test code is active

Links to keep:
Single Marker Business Card [example](https://www.youtube.com/watch?v=dRY6iuGkKBM)
[AR Business Card example with picture marker and links](https://www.youtube.com/watch?v=pTITrp_xOis)
[Link to webpage press F12 in and go to source tab to view code](https://ron-dagdag.azurewebsites.net/public/)
https://aframe.io/aframe-inspector/examples/
[environments?](https://github.com/donmccurdy/three-gltf-viewer/blob/faa02eb5948f3d3af5d2a510b559f9d7bf284b3b/src/viewer.js)
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
3. Create a new local repository by clicking on Current Project > Add > Create New Repository. Pick a location that easy to access and leave the other settings as none. Name the repository after the client so it easy to distinguish from the other projects.
4. Go to [https://github.com/covalent-reality-ar/AR.js-Template.git](https://github.com/covalent-reality-ar/AR.js-Template.git) and select the green "clone or download"  button and download the project.
5. Open the zip file and double click on the AR.js-Template-master folder. Copy all the files except .gitattributes,README.md, and qrcode.html to the local repository folder you created in Step 3.
6. The GitHub desktop window should now display what files were added in the changes tab. Below the changes tab is the commit section. This is where you tell the GitHub desktop app that you want to keep any changes you make. Commit the new changes by adding a title and description and hitting the commit button.
7. Now you can click the Publish Repository button in the top bar. Make sure keep this code private is not selected and select covalent-reality-ar in the dropdown menu under Orgainzation

### 2. Atom for HTML
1. Download [Atom](https://atom.io/)
2. In the Welcome Guide tab open the project folder you created in the previous step.
3. Go to the Git tab. To commit changes they need to be Staged. Do this by right clicking the files in the unstaged window and hitting stage. Then write a Commit Message and press Commit to master. You can then push the changes with the button at the bottom right side of the window. Log in to your own GitHub account so that your work is logged. At this point you can use GitHub desktop or Atom to commit changes and push them to the online repository.

### 3. Create QRcode
1. In the git directory you created for the project copy the Covalent.html file and rename it to the name of the client you are making the project for.
2. You can generate a QRcode using [https://covalent-reality-ar.github.io/AR.js-Template/qrcode.html](https://covalent-reality-ar.github.io/AR.js-Template/qrcode.html) change the url to point to the html file you created in step 1. You can do this by replacing "AR.js-Template" with your repository name and "Covalent.html" with the html file you created for the project.
3. You can save the picture by right clicking on it and saving as an image.

### 4.Create Marker
4. You now need to create a image for the marker that the camera uses as reference to place objects over the real world. This marker should be asymmetrical and with not much fine detail. You can create the marker using any image editing software. The image should be a square so I recommend 1024x1024 pixels. This does not mean the logo inside the image has to be square though. If you need examples look at the markers on the Ar.js readme.
5. Go To [https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html) and upload the image you created. You can make the image whatever resolution you need to for the size of what you are printing but dont make it too much bigger than the size of the image you created in the previous steps or the image may become blurry
6. Click download marker and download image. The image will be what you print and the .patt file will be what the code references. The png will be what is printed. All the image files you just created can go in the markers folder of the repository under a new folder.

### 5. Set Up GitHub Pages to host the website
1. Go to [https://github.com/covalent-reality-ar](https://github.com/covalent-reality-ar) and log in to your GitHub account. Click on the repository you just created. Go to the settings tab that is below the watch button near the top of the page.
2. Scroll down to GitHub Pages and hit the Select Theme button. Pick a theme and hit Select Theme. The theme does not really matter as no one should see the pages it creates.
3. It may take a few minutes for GitHub to host the pages. So I recommend to take a short break.
4. To test if it worked click on the URL in the GitHub Pages section. This will probably result in a 404 error so in the address bar add the name of the html file you created in the previous steps. This should give you a popup about a webcam error. If it gives a 404 error then wait a bit longer and try again.

### 6. Test Marker
1. To test your marker, change the folder name in this line <a-marker preset='pattern' type='pattern' url="markers/Covalent/pattern-Marker.patt"> the url should point to the marker folder you created in previous steps and the .patt file should be the same name as the one in the folder.
2. You can now scan the QRcode with your phones camera app and point your phone at the marker you created. This can be either on the computer monitor. If the marker works then a yellow box will be displayed on the new marker.
3. GitHub pages takes awhile to update to the latest version of your repository. One way to test changes to the files is to
4. If the marker does not work then redo Section 4 with a different image.

### 7. Create model using Blender
1. Download the latest version of [Blender](https://www.blender.org/)
2. a. If the version is above 2.80 then enable the GLTF 2.0 plugin by going to File>User Preferences>Add-ons and make sure GLTF 2.0 is checked.  
b. If the version is less than 2.80 then download the GLTF 2.0 coverter [repository](https://github.com/KhronosGroup/glTF-Blender-IO#installation) copy the addons/io_scene_gltf2 folder into the scripts/addons/ directory of the Blender installation. Then enable the GLTF 2.0 plugin by going to File>User Preferences>Add-ons and make sure GLTF 2.0 is checked.
3. Make you model in Blender. I recommend looking up a reference image of the thing you want to make and dragging and dropping it into the window. Then you can hit the 5 num pad key and the 7 num pad key to go into orthographic view and top view. From here you can trace the image using the knife tool(shift+s) and extrude(e key while plane is selected) the plane you create from tracing it. This may take a lot of looking up Blender tutorials online.
4. Add materials using the Blender color materials and following the [tutorial] (https://medium.com/@matthewmain/how-to-import-a-3d-blender-object-into-a-three-js-project-as-a-gltf-file-5a67290f65f2). Export as glb or embedded gltf as it packages all the files together and is easier to use.

### 8. Import glb file into gltf viewer
1. go to: [gltf](https://gltf-viewer.donmccurdy.com/) viewer
2. drag and drop your new glb file. Click on the Lighting tab and set the environment to none. This will be close to what your model will look like when using the AR framework.
3. If it looks good then you can add the file to the models folder in a folder named after the client.

### 8. Test Marker and Model
1. Now you can delete the test code and uncomment the main code in the html file. It should look like this:
---
<!doctype HTML>
<html>

<script src="https://aframe.io/releases/0.9.1/aframe.min.js"></script>
<script src="https://johnaloomis.github.io/CovalentAR/aframe/build/aframe-ar.js"></script>


<body style='margin : 0px; overflow: hidden;'>
    <a-scene stats embedded arjs='trackingMethod: best; debugUIEnabled: false'>
		<a-assets>
			<a-asset-item id="Logo" src="models/CovalentLogo/Covalentlogo.gltf"></a-asset-item>
		</a-assets>
    <a-marker preset='pattern' type='pattern' url="markers/Covalent/pattern-marker.patt">
			<a-entity gltf-model="#Logo" animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear">

			</a-entity>

    </a-marker>
    <a-entity camera></a-entity>
    </a-scene>
</body>
</html>
---
2. In the line that looks like: <a-asset-item id="Logo" src="models/CovalentLogo/Covalentlogo.gltf"></a-asset-item> you can change the src to point to your model.
3. In the line that looks like: <a-marker  marker emitevents="true" cursor="rayOrigin: mouse" preset='pattern' type='pattern' url="markers/Covalent/pattern-marker.patt"> you can change the url to point to your marker.
4. Now commit all these changes and push them to the online repository. If you can't see the model try scaling it down. This can be done in the 3D modeling program you used or by adding scale=".1 .1 .1" to the a-entity line. The numbers in the scale can be changed to scale it smaller or larger with 1 1 1 being no scaling.

### 9. Add Animation
The default animation I added is a 360 degree rotation. To do different rotations or other animations read the [AFRAME](https://aframe.io/docs/0.9.0/components/animation.html) documentation.

## Explanation
AR.js is built on Aframe for 3D scenes which uses three.js

## Sources and Thank Yous

First and foremost, thank you to Jerome Etienne for creating and maintaining AR.js. Without his active helping of the community and answering of questions I would have given up a long time ago. In addition thank you to all the people making tutorials and answering questions about AR.js without whom this would not be possible.

[AR.js](https://github.com/jeromeetienne/AR.js)- framework used
