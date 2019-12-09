import React, { useEffect } from 'react';
import * as THREE from "three";
import OrbitControls from 'orbit-controls-es6';
 
const Planets = (props) => {
  // Init all we need
  let Scene = new THREE.Scene();
  let Camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 5000);
      Camera.position.z = 400;
      Camera.lookAt(0,0,0)
  let Renderer = new THREE.WebGLRenderer({ antialias: true });
  let Loader = new THREE.TextureLoader();
  let Planet, Sun;
  let canvasEl;

  const controls = new OrbitControls(Camera, Renderer.domElement);
  controls.minDistance = 200;
  controls.maxDistance = 1000;
  controls.addEventListener('change', Renderer);
 
  useEffect(() => { // ComponentDidMount
    window.addEventListener('resize', handleWindowResize);
    InitBackground();
  });
 
  const InitBackground = () => {
    // injection du render dans le dom
    Renderer.setSize(window.innerWidth, window.innerHeight);
    
    let canvas = canvasEl.getElementsByTagName("canvas");
    if(canvas.length > 0) {
      canvasEl.removeChild(canvas[0]);
    }

    canvasEl.appendChild(Renderer.domElement);
 
    // Global light on the scene aka "sun"
    Sun = new THREE.DirectionalLight(0xffffff, 1.5);
    Sun.position.set(2.5,1.5,0.5); // X Y Z
    Sun.castShadow = true;
    Scene.add(Sun);

    let hlight = new THREE.AmbientLight (0x6581a8,0.1);
    Scene.add(hlight);
 
    // if we need to load external ressources
    Loader.load(props.texture, (planetTexture) => {
      let planetGeometry = new THREE.SphereGeometry(100, 32, 32);
      let planetMaterial = new THREE.MeshPhongMaterial({
        map: planetTexture,
        shininess: 20,
      });
      
      Planet = new THREE.Mesh(planetGeometry, planetMaterial);
 
      Scene.add(Planet);
 
      sceneAnimate();
    });
  }
 
  const sceneAnimate = () => {
   requestAnimationFrame(sceneAnimate);
   
    Planet.rotation.x += 0.0001;
    Planet.rotation.y -= 0.0003;
    // Planet.rotation.z += 0.00001;
    Camera.position.z -= 0.02;

    Renderer.render(Scene, Camera);
  };
 
  let handleWindowResize = () => { // gère le responsive sur l'event 'resize'
    const width = window.innerWidth;
    const height = window.innerHeight;
 
    Renderer.setSize(width, height);
    Camera.aspect = width / height;
    Camera.updateProjectionMatrix();
  }
 
  return <div id="background" ref={el => canvasEl = el}></div>
}
 
export default Planets;