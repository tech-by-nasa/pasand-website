import React, { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';

export default function HeroScene3D() {
  const mountRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xE5A93C, 2, 10);
    goldLight.position.set(2, 3, 2);
    scene.add(goldLight);

    const whiteLight = new THREE.PointLight(0xffffff, 1.5, 10);
    whiteLight.position.set(-2, 2, 3);
    scene.add(whiteLight);

    const rimLight = new THREE.PointLight(0xE5A93C, 0.8, 8);
    rimLight.position.set(0, -1, -3);
    scene.add(rimLight);

    // Create bowl/handi group
    const group = new THREE.Group();

    // Bowl (handi shape)
    const bowlGeometry = new THREE.LatheGeometry(
      [
        new THREE.Vector2(0, -0.6),
        new THREE.Vector2(0.3, -0.55),
        new THREE.Vector2(0.7, -0.4),
        new THREE.Vector2(0.9, -0.1),
        new THREE.Vector2(0.95, 0.2),
        new THREE.Vector2(0.85, 0.45),
        new THREE.Vector2(0.7, 0.55),
      ],
      32
    );
    const bowlMaterial = new THREE.MeshStandardMaterial({
      color: 0x8B4513,
      metalness: 0.7,
      roughness: 0.3,
    });
    const bowl = new THREE.Mesh(bowlGeometry, bowlMaterial);
    group.add(bowl);

    // Rice surface (inside bowl)
    const riceGeometry = new THREE.CircleGeometry(0.82, 32);
    const riceMaterial = new THREE.MeshStandardMaterial({
      color: 0xF5D590,
      roughness: 0.8,
      metalness: 0.1,
    });
    const rice = new THREE.Mesh(riceGeometry, riceMaterial);
    rice.rotation.x = -Math.PI / 2;
    rice.position.y = 0.42;
    group.add(rice);

    // Small garnish spheres (fried onions, herbs)
    const garnishColors = [0x2D5016, 0xA0522D, 0xE5A93C, 0x8B0000, 0x2D5016];
    garnishColors.forEach((color, i) => {
      const geo = new THREE.SphereGeometry(0.06 + Math.random() * 0.04, 8, 8);
      const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.6 });
      const mesh = new THREE.Mesh(geo, mat);
      const angle = (i / garnishColors.length) * Math.PI * 2 + Math.random() * 0.5;
      mesh.position.set(
        Math.cos(angle) * (0.3 + Math.random() * 0.3),
        0.47 + Math.random() * 0.05,
        Math.sin(angle) * (0.3 + Math.random() * 0.3)
      );
      group.add(mesh);
    });

    // Steam particles
    const steamParticles = [];
    const steamGeometry = new THREE.SphereGeometry(0.03, 6, 6);
    const steamMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.15,
    });

    for (let i = 0; i < 20; i++) {
      const steam = new THREE.Mesh(steamGeometry, steamMaterial.clone());
      steam.position.set(
        (Math.random() - 0.5) * 0.8,
        0.5 + Math.random() * 1.5,
        (Math.random() - 0.5) * 0.8
      );
      steam.userData = {
        speed: 0.003 + Math.random() * 0.005,
        offset: Math.random() * Math.PI * 2,
        baseX: steam.position.x,
        baseZ: steam.position.z,
      };
      group.add(steam);
      steamParticles.push(steam);
    }

    // Gold ring orbiting
    const ringGeometry = new THREE.TorusGeometry(1.4, 0.015, 8, 64);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xE5A93C,
      metalness: 1,
      roughness: 0.2,
      emissive: 0xE5A93C,
      emissiveIntensity: 0.3,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 3;
    group.add(ring);

    // Second ring
    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.6, 0.01, 8, 64),
      new THREE.MeshStandardMaterial({
        color: 0xE5A93C,
        metalness: 1,
        roughness: 0.3,
        transparent: true,
        opacity: 0.4,
      })
    );
    ring2.rotation.x = Math.PI / 2.5;
    ring2.rotation.z = Math.PI / 6;
    group.add(ring2);

    // Floating spice particles
    const spiceGroup = new THREE.Group();
    for (let i = 0; i < 30; i++) {
      const size = 0.01 + Math.random() * 0.02;
      const geo = new THREE.SphereGeometry(size, 4, 4);
      const colors = [0xE5A93C, 0xF5D590, 0xA0522D, 0x8B4513];
      const mat = new THREE.MeshBasicMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: 0.4 + Math.random() * 0.4,
      });
      const particle = new THREE.Mesh(geo, mat);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 1.5 + Math.random() * 1.5;
      particle.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
      particle.userData = { theta, phi, radius, speed: 0.001 + Math.random() * 0.003 };
      spiceGroup.add(particle);
    }
    group.add(spiceGroup);

    scene.add(group);
    setLoaded(true);

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Cursor tilt physics
      const targetRotX = mouseRef.current.y * 0.15;
      const targetRotY = mouseRef.current.x * 0.25;
      group.rotation.x += (targetRotX - group.rotation.x) * 0.03;
      group.rotation.y += (targetRotY + elapsed * 0.15 - group.rotation.y) * 0.03;

      // Ring rotation
      ring.rotation.z = elapsed * 0.3;
      ring2.rotation.z = -elapsed * 0.2;

      // Steam animation
      steamParticles.forEach((steam) => {
        steam.position.y += steam.userData.speed;
        steam.position.x = steam.userData.baseX + Math.sin(elapsed * 2 + steam.userData.offset) * 0.1;
        steam.position.z = steam.userData.baseZ + Math.cos(elapsed * 2 + steam.userData.offset) * 0.1;
        steam.material.opacity = 0.15 * (1 - (steam.position.y - 0.5) / 2);
        if (steam.position.y > 2.5) {
          steam.position.y = 0.5;
          steam.material.opacity = 0.15;
        }
      });

      // Floating particles orbit
      spiceGroup.children.forEach((p) => {
        p.userData.theta += p.userData.speed;
        const r = p.userData.radius;
        const phi = p.userData.phi + Math.sin(elapsed * 0.5) * 0.1;
        p.position.x = r * Math.sin(phi) * Math.cos(p.userData.theta);
        p.position.z = r * Math.sin(phi) * Math.sin(p.userData.theta);
        p.position.y = r * Math.cos(phi) + Math.sin(elapsed + p.userData.theta) * 0.2;
      });

      // Light animation
      goldLight.intensity = 2 + Math.sin(elapsed * 1.5) * 0.3;

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className="w-full h-full absolute inset-0">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
