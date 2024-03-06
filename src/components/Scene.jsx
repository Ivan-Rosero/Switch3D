import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { Switch } from './Switch';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three'

export default function Scene() {
    return (
        <div className="container">
            <Canvas camera={{
                position: [0, 6, 25], fov: 65,
            }} gl={{
                outputEncoding: THREE.sRGBEncoding,
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 3,
            }}>
                <Suspense fallback={null}>
                    <Switch />
                </Suspense>

                <directionalLight
                    position={[10, 10, 10]}
                    color={"#ffffff"}
                    intensity={3}
                />
                <ambientLight color={"#ffffff"} intensity={0.5} />
                <OrbitControls
                    target={[0, 5, 1]} />
            </Canvas>
        </div>
    )
} 