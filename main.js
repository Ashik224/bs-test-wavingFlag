import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
  alpha: true,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

const loader = new THREE.TextureLoader();

const geometry = new THREE.PlaneGeometry(5, 3, 50, 30);
const material = new THREE.MeshBasicMaterial({
  map: loader.load("assets/images/flag-image.jpg"),
});
const flag = new THREE.Mesh(geometry, material);
scene.add(flag);
flag.rotation.set(-0.1, 0, 0);
camera.position.z = 5;

const clock = new THREE.Clock();
function animate() {
  const t = clock.getElapsedTime();
  const positionAttribute = geometry.getAttribute("position");
  const vertex = new THREE.Vector3();

  for (let i = 0; i < positionAttribute.count; i++) {
    vertex.fromBufferAttribute(positionAttribute, i);
    const waveX1 = 0.5 * Math.sin(vertex.x * 2 + t);
    const waveX2 = 0.25 * Math.sin(vertex.x + t);
    const waveY1 = 0.2 * Math.sin(vertex.y + t);
    vertex.z = waveX1 + waveX2 + waveY1;
    positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }
  flag.geometry.attributes.position.needsUpdate = true;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
