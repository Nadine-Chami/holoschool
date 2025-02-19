const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
console.log(window.innerWidth,window.innerHeight);
renderer.setSize(400, 200);
document.getElementById('output').appendChild(renderer.domElement);
function load(){
    document.getElementById("cube").appendChild(renderer.domElement);
}
// Create cube geometry and material
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshPhongMaterial({
    color: 0x9acffff,
    transparent: true,
    opacity: 0.3,
    specular: 0x555555,
    shininess: 30,
    side: THREE.DoubleSide
});
const cube = new THREE.Mesh(geometry, material);

// Add edges to the cube
const edges = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ 
    color: 0x7fceff,
    linewidth: 2
});
const wireframe = new THREE.LineSegments(edges, lineMaterial);
cube.add(wireframe);

scene.add(cube);

// Add lights
const light1 = new THREE.DirectionalLight(0xffffff, 1);
light1.position.set(1, 1, 1);
scene.add(light1);

const light2 = new THREE.AmbientLight(0x404040);
scene.add(light2);

// Position camera
camera.position.z = 5;

// Animation function
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.001;
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(500, 500);
}

animate();