import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Starfield(props) {
    const pointsRef = useRef();
    const groupRef = useRef();
    const mouse = useRef({ x: 0, y: 0 });

    // Generate random points in a sphere only once
    const sphere = useRef(random.inSphere(new Float32Array(5000), { radius: 1.5 }));

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame((state, delta) => {
        // Base auto-rotation
        pointsRef.current.rotation.x -= delta / 10;
        pointsRef.current.rotation.y -= delta / 15;

        // Interactive rotation (parallax) mapping mouse position to rotation
        // Smoothly interpolate current rotation towards target mouse rotation
        const targetX = mouse.current.y * 0.3;
        const targetY = mouse.current.x * 0.3;

        groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 2 * delta;
        groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 2 * delta;
    });

    return (
        <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
            <Points ref={pointsRef} positions={sphere.current} stride={3} frustumCulled={false} {...props}>
                <PointMaterial transparent color="#00FF88" size={0.004} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    );
}

const Background3D = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-25">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Starfield />
            </Canvas>
        </div>
    );
};

export default Background3D;
