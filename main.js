import * as THREE from './three';
import { GLTFLoader } from './three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const container = document.getElementById('animation-container'); // Corrected variable name

// Create a webgl renderer inside the container
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Set the background color to white (0xFFFFFF)
renderer.setClearColor(0x04090d);

// ... rest of your code ...


document.body.appendChild(renderer.domElement);


const loader = new GLTFLoader(); // Use the imported GLTFLoader
let model;

loader.load('mbcRing.glb', (gltf) => {
    model = gltf.scene;
    model.position.set(0, 0, 0); // Adjust the position as needed
    model.scale.set(0.01, 0.01, 0.01); // Adjust the scale as needed
    model.rotation.set(190, Math.PI, 0); // Adjust the rotation here

    scene.add(model);
});

const ambientLight = new THREE.AmbientLight(0xffffff); // Add a soft white ambient light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 9); // Intensity of 1
directionalLight.position.set(1, 3, 5); // Set the direction of the light
scene.add(directionalLight);


camera.position.set(0, 0, 13); // last three changes distance

function animate() {
    requestAnimationFrame(animate);

    if (model) {
        model.rotation.z += 0.009; // speed 
        model.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
}

animate();

