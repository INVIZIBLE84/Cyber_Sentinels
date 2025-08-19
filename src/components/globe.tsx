"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Globe() {
  const mountRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const rotationVelocity = useRef({ x: 0, y: 0 });
  const globeGroupRef = useRef<THREE.Group>();
  const isUserInteracting = useRef(false);
  const interactionTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 2.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);
    
    // Globe Group
    const globeGroup = new THREE.Group();
    globeGroupRef.current = globeGroup;
    scene.add(globeGroup);

    // Solid Globe
    const globeGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("hsl(var(--secondary))"), 
    });
    const solidGlobe = new THREE.Mesh(globeGeometry, globeMaterial);
    globeGroup.add(solidGlobe);
    
    // Wireframe
    const wireframeGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("hsl(var(--primary))"),
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    wireframe.scale.set(1.001, 1.001, 1.001); // Scale up slightly to prevent z-fighting
    globeGroup.add(wireframe);


    // HVPM COET, Amravati Marker
    const lat = 20.9374; // Latitude
    const lon = 77.7796; // Longitude
    const radius = 1.5;
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    const markerGeometry = new THREE.SphereGeometry(0.05, 16, 16);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color("hsl(var(--primary))") });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.position.set(x, y, z);
    globeGroup.add(marker);
    
    const onMouseDown = (event: MouseEvent) => {
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
      isDragging.current = true;
      isUserInteracting.current = true;
      previousMousePosition.current = { x: event.clientX, y: event.clientY };
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!isDragging.current || !globeGroupRef.current) return;

      const deltaX = event.clientX - previousMousePosition.current.x;
      const deltaY = event.clientY - previousMousePosition.current.y;
      
      rotationVelocity.current.y = deltaX * 0.0005;
      rotationVelocity.current.x = deltaY * 0.0005;

      previousMousePosition.current = { x: event.clientX, y: event.clientY };
    };

    const onMouseUp = () => {
      isDragging.current = false;
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
      interactionTimeoutRef.current = setTimeout(() => {
        isUserInteracting.current = false;
      }, 2000);
    };
    
    currentMount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);


    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (globeGroupRef.current) {
        if (!isUserInteracting.current) {
          globeGroup.rotation.y += 0.001;
        } else {
          globeGroup.rotation.y += rotationVelocity.current.y;
          globeGroup.rotation.x += rotationVelocity.current.x;

          // Apply damping
          rotationVelocity.current.y *= 0.95;
          rotationVelocity.current.x *= 0.95;
        }
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);

      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />;
}
