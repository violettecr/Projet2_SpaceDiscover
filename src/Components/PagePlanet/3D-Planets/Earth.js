let scene, camera, renderer;
  const init = () => {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    //Camera    
    camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,5000);
      // camera.rotation.y = 45/180*Math.PI;
      // camera.position.x = 800;
      // camera.position.y = 100;
      camera.position.z = 1500;

    controls = new THREE.OrbitControls(camera);
      controls.minDistance = 800;
      controls.maxDistance = 2000;
      controls.addEventListener('change', renderer);

    hlight = new THREE.AmbientLight (0x6581a8,1);
      scene.add(hlight);
    
    directionalLight = new THREE.DirectionalLight(0xfff0c9,8);
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

    //Earth
    let loader = new THREE.GLTFLoader();
    loader.load('./Earth-gltf/scene.gltf', function(gltf){
      earth = gltf.scene.children[0];
      earth.scale.set(100,100,100);
      // earth.position.set(200, -100, 0);
      scene.add(gltf.scene);
      animate();
    });
  }
  
  let animate = () => {
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
    earth.rotation.z += 0.002;
    earth.rotation.x += 0.0001;
    earth.rotation.y -= 0.0001;
    camera.position.z -= 0.1;
  }

init();