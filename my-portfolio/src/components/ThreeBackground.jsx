import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = ({ isDarkMode }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;

    // Use your theme's background and mesh colors.
    const backgroundColor = isDarkMode ? 0x29292B : 0xFBF7BA;
    const meshColor = isDarkMode ? 0xC9C7BA : 0x9D1F15;

    // Parameters for the wireframe line (plane) effect.
    const vertexHeight = 15000;
    const planeDefinition = 100;
    const planeSize = 1245000;

    // Camera (using settings similar to your snippet)
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      1,
      400000
    );
    camera.position.z = 10000;
    camera.position.y = 10000;

    // Scene with fog matching the theme background.
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(backgroundColor, 1, 300000);

    // Create the plane geometry.
    // Note: In newer Three.js versions, PlaneGeometry returns a BufferGeometry.
    const planeGeo = new THREE.PlaneGeometry(
      planeSize,
      planeSize,
      planeDefinition,
      planeDefinition
    );
    const positionAttribute = planeGeo.attributes.position;
    const vertexCount = positionAttribute.count;
    // We'll store each vertex's original (randomized) Z value here.
    const originalZ = new Float32Array(vertexCount);

    // Randomize each vertex's Z position and save it.
    for (let i = 0; i < vertexCount; i++) {
      // Random offset in range [-vertexHeight, +vertexHeight]
      const randomZ = positionAttribute.getZ(i) + (Math.random() * vertexHeight - vertexHeight);
      positionAttribute.setZ(i, randomZ);
      originalZ[i] = randomZ;
    }
    positionAttribute.needsUpdate = true;

    // Create a MeshBasicMaterial with wireframe enabled (only the line is shown)
    const planeMat = new THREE.MeshBasicMaterial({
      color: meshColor,
      wireframe: true,
    });
    const plane = new THREE.Mesh(planeGeo, planeMat);
    // Rotate the plane so it's horizontal.
    plane.rotation.x = -Math.PI * 0.5;
    scene.add(plane);

    // Create the renderer and use the theme background.
    const renderer = new THREE.WebGLRenderer({ alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(backgroundColor, 1);
    container.appendChild(renderer.domElement);

    let count = 0;
    const renderFrame = () => {
      requestAnimationFrame(renderFrame);

      // Slowly move the camera in a circular pattern.
      const x = camera.position.x;
      const z = camera.position.z;
      camera.position.x = x * Math.cos(0.001) + z * Math.sin(0.001) - 10;
      camera.position.z = z * Math.cos(0.001) - x * Math.sin(0.001) - 10;
      camera.lookAt(new THREE.Vector3(0, 8000, 0));

      // Update the plane vertices to create a wavy (line) effect.
      for (let i = 0; i < vertexCount; i++) {
        const zOrig = originalZ[i];
        // This mimics your original wave formula:
        const newZ = Math.sin(i + count * 0.00002) * (zOrig - zOrig * 0.6);
        positionAttribute.setZ(i, newZ);
      }
      positionAttribute.needsUpdate = true;
      count += 0.1;

      renderer.render(scene, camera);
    };
    renderFrame();

    // Handle window resizing.
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // Cleanup on unmount.
    return () => {
      window.removeEventListener('resize', onWindowResize);
      container.removeChild(renderer.domElement);
      scene.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((mat) => mat.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, [isDarkMode]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    />
  );
};

export default ThreeBackground;
