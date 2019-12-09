let scene, camera, renderer;
  const init = () => {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    //Camera    
    camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,5000);
      // camera.rotation.y = 45/180*Math.PI;
      camera.position.x = 100;
      camera.position.y = 100;
      camera.position.z = 800;

    controls = new THREE.OrbitControls(camera);
      controls.minDistance = 500;
      controls.maxDistance = 1000;
      controls.addEventListener('change', renderer);

    hlight = new THREE.AmbientLight (0xd2def2,0.15);
      scene.add(hlight);
    
    directionalLight = new THREE.DirectionalLight(0xfff0c9,2);
      directionalLight.position.set(2.5,1.5,-3);
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

    //Saturn
    let loader = new THREE.GLTFLoader();
    loader.load('./saturn_with_rings/scene.gltf', function(gltf){
      saturn = gltf.scene.children[0];
      saturn.scale.set(100,100,100);
      saturn.rotation.y += 60;
      scene.add(gltf.scene);
      animate();
    });
  }

  let animate = () => {
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
    saturn.rotation.z += 0.0001;
    saturn.rotation.x += 0.00005;
    saturn.rotation.y -= 0.00005;
    camera.position.z -= 0.05;

  }

init();