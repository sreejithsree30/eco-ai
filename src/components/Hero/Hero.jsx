import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import * as THREE from 'three';
import './Hero.css';

const Hero = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef();
  const rendererRef = useRef();
  const cubeRef = useRef();

  useEffect(() => {
    if (!mountRef.current) return;
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({
      color: 0x3B82F6,
      transparent: true,
      opacity: 0.8,
      shininess: 100,
    });
    const cube = new THREE.Mesh(geometry, material);
    cubeRef.current = cube;
    scene.add(cube);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x8B5CF6, 1, 100);
    pointLight.position.set(-5, -5, 5);
    scene.add(pointLight);

    camera.position.z = 5;


    const animate = () => {
      requestAnimationFrame(animate);

      if (cubeRef.current) {
        cubeRef.current.rotation.x += 0.01;
        cubeRef.current.rotation.y += 0.01;
        cubeRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5;
      }

      renderer.render(scene, camera);
    };

    animate();


    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div ref={mountRef} className="three-js-container" />
        <div className="hero-overlay" />
      </div>
      
      <div className="hero-content">
        <div className="container hero-container">
          <div className="hero-text">
            <h1 className="hero-title">
              SREEJITH S S
            </h1>
            <p className="hero-subtitle">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="hero-description">
              Passionate about creating innovative digital solutions that combine 
              cutting-edge technology with exceptional user experiences. Specializing 
              in modern web development and interactive design.
            </p>
            
            <div className="hero-social">
              <a href="https://github.com" className="social-link" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="mailto:sreejithsree1480@gmail.com" className="social-link" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>

            <div className="hero-cta">
              <button
                onClick={() => scrollToSection('projects')}
                className="cta-button"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="cta-button-secondary"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        
        <button
          onClick={() => scrollToSection('about')}
          className="scroll-indicator"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;