let scene, camera, renderer;
  const init = () => {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    //Camera    
    camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,5000);
      // camera.rotation.y = 45/180*Math.PI;
      camera.position.x = 100;
      camera.position.y -= 100;
      camera.position.z = 650;

    controls = new THREE.OrbitControls(camera);
      controls.minDistance = 400;
      controls.maxDistance = 700;
      controls.addEventListener('change', renderer);

    hlight = new THREE.AmbientLight (0xd2def2,0.15);
      scene.add(hlight);
    
    directionalLight = new THREE.DirectionalLight(0xfff0c9,2);
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

    //Jupiter
    let loader = new THREE.GLTFLoader();
    loader.load('./Jupiter-gltf/scene.gltf', function(gltf){
      jupiter = gltf.scene.children[0];
      jupiter.scale.set(100,100,100);
      scene.add(gltf.scene);
      animate();
    });
  }
  
  let animate = () => {
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
    jupiter.rotation.z += 0.002;
    jupiter.rotation.x += 0.0001;
    jupiter.rotation.y -= 0.0001;
    camera.position.z -= 0.1;
  }

init();