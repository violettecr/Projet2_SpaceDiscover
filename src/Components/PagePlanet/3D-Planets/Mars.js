let scene, camera, renderer;
  const init = () => {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    //Camera    
    camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,5000);
      // camera.rotation.y = 45/180*Math.PI;
      // camera.position.x = 800;
      // camera.position.y = 100;
      camera.position.z = 1000;

    controls = new THREE.OrbitControls(camera);
      controls.minDistance = 600;
      controls.maxDistance = 1200;
      controls.addEventListener('change', renderer);

    hlight = new THREE.AmbientLight (0x5462ff,0.5);
      scene.add(hlight);
    
    directionalLight = new THREE.DirectionalLight(0xffffff,2);
      directionalLight.position.set(2.5,1.5,-1);
      directionalLight.castShadow = true;
      scene.add(directionalLight);
            
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //Stars
    let geometry  = new THREE.SphereGeometry(100, 32, 32)
    let material  = new THREE.MeshPhongMaterial({
      material: new THREE.ImageUtils.loadTexture("galaxy_starfield.png"),
      side: THREE.BackSide,
      shininess: 0,
    });
    let mesh  = new THREE.Mesh(geometry, material)

    //Mars
    let loader = new THREE.GLTFLoader();
    loader.load('./Mars-gltf/scene.gltf', function(gltf){
      mars = gltf.scene.children[0];
      mars.scale.set(100,100,100);
      // mars.shininess.set(0);

      scene.add(gltf.scene);
      animate();
    });
  }
  
  let animate = () => {
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
    mars.rotation.z += 0.002;
    // mars.rotation.x += 0.0001;
    // mars.rotation.y -= 0.0001;
    camera.position.z -= 0.2;
    camera.position.y -= 0.035;
  }

init();