import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import ServiceSection from "../components/ServiceSection";
import CallToAction from "../components/CallToAction"; 
import Footer from '../components/Footer';
import Typewriter from 'typewriter-effect';

const World = ({ modelPosition, modelScale }) => {
    const modelRef = useRef();
    const{ scene, materials, animations } = useGLTF('/a_windy_day.glb');
    const [targetColor, setTargetColor] = useState(new THREE.Color(Math.random(), 0.5, 0.5));
    
    let lerpFactor = 0.01; // Adjust this value for faster or slower color transitions
    // A ref to store mouse positon
    const mouse = useRef([0, 0]);

    useEffect(() => {
        // Update mouse position on mouse move
        const handleMouseMove = (event) => {
            // Normalize mouse position from -1 to 1
            mouse.current = [
                (event.clientX / window.innerWidth) * 2 - 1,
                -(event.clientY / window.innerHeight) * 2 + 1
            ];
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);


    // Animation Logic
    useFrame(() => {
        if(modelRef.current) {
            // Rotate the model (adjust the rotation speed as needed)
            modelRef.current.rotation.y += 0.001;
        }
        if (materials["Scene_-_Root"]) {
            const material = materials["Scene_-_Root"];
            material.color.lerp(targetColor, lerpFactor); // Smoothly transition to the target color
        }
    });

    // Color Shift Effect
    useEffect(() => {
        const interval = setInterval(() => {
            setTargetColor(new THREE.Color(Math.random(), 0.5, 0.5));
        }, 1000); // Change target color every second

        return () => clearInterval(interval);
    }, []);

    return <primitive 
            ref={modelRef} 
            object={scene} 
            position={modelPosition} 
            scale={modelScale} 
            />;
};

const Home = () => {
    const [modelPosition, setModelPosition] = React.useState([0,0,0]);
    const [modelScale, setModelScale] = useState(1.25); // Default scale is 1
    const [darkMode, setDarkMode] = useState(true);  // Default to dark mode
    const toggleTheme = () => setDarkMode(!darkMode);

    // Function to handle window resize events for tablet screen sizes
    const handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 768 && screenWidth <= 1024) {
            // Set the model scale to be smaller on tablet sizes
            setModelScale(0.75); // Adjust this scale factor as needed
        } else {
            // Reset to default scale if not within the specified range
            setModelScale(1.25);
        }
    };

    useEffect(() => {
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Call the handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            // Update the Y position of the model based on the scrolling down of the screen
            const scrollY = window.scrollY;
            setModelPosition([0, -scrollY / 100, 0]);
            // Calculate new scale based on scroll position
            const newScale = Math.max(0.01, 1.25 - scrollY / 500); // Ensure scale doesn't go below 0.1
            setModelScale(newScale);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <section className='w-full h-screen flex flex-col md:flex-row justify-center items-center p-4 bg-[#0a0a0a]'>
            <div className="text-left w-full md:w-1/2 lg:w-2/5 px-4 md:px-0 space-y-4 pl-4 md:pl-8 lg:pl-12">
                <h1 className="text-4xl md:text-4xl font-bold text-white text-center md:text-left">
                        {/* Static part of the text */}
                        Expanding the Intersection of 
                        {/* Typewriter effect part */}
                        <Typewriter
                            options={{
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Technology")
                                    .pauseFor(2000)
                                    .deleteChars(10)
                                    .typeString("Business")
                                    .pauseFor(10000)
                                    .deleteChars(8)
                                    .start();
                            }}
                        />
                    </h1>
                    <div className="h-40 md:h-40 overflow-y-auto"> {/* Set a fixed height */}
                        <p className="text-sm md:text-base text-gray-400 text-center md:text-left">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("As a full-stack developer and data analyst, I thrive in data-driven environments, employing cutting-edge technologies to craft not just websites and apps, but comprehensive digital solutions.<br><br>I enjoy creating digital experiences that aren't just  appealing, but smart, user-friendly, and tailored to specific individual and business needs.")
                                        .start();
                                }}
                                options={{
                                    delay: 40, // Adjust typing speed (milliseconds)
                                    cursor: '', // Removes cursor if you don't need it
                                    wrapperClassName: "text-sm md:text-base text-gray-400 text-center md:text-left", // Apply your styles here
                                }}
                            />
                        </p>
                    </div>
                </div>
                <div className="relative w-full md:w-1/2 lg:w-3/5 h-full flex justify-center items-center">
                    <Canvas className="w-full h-full" dpr={[1,2]} shadows camera={{position: [0, 0, 5], fov:45}}>
                        <ambientLight intensity={1} />
                        <spotLight position={[10,10,10]} />
                        <World modelPosition={modelPosition} modelScale={modelScale}/>
                        <OrbitControls
                            enableRotate={true} 
                            enablePan={false} 
                            maxDistance={10} 
                            minDistance={3} 
                            enableZoom={false} 
                        />
                    </Canvas>
                </div>
            </section>
            <div className='bg-gray-900'>
                <ServiceSection />      
                <CallToAction />
                <Footer />    
            </div>    
        </>
    );
};

export default Home