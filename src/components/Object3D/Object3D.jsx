import React from 'react';
import {Canvas} from "@react-three/fiber";
import {Model} from "../Laptop";
import {Suspense} from 'react';
import {Environment, OrbitControls, PerspectiveCamera} from "@react-three/drei";

const Object3D = () => {
    return (
        <Canvas>
            <pointLight position={[0, 5, 5]}/>
            <Suspense fallback={null}>
                <Model rotation={[0, Math.PI / 2, 0]} position={[0, -2, 0]} scale={2}/>
                <PerspectiveCamera zoom={1.4} position={[-5, 5, 12]} makeDefault/>
            </Suspense>
            <OrbitControls enableZoom={false}
                           minPolarAngle={Math.PI / 2}
                           maxPolarAngle={Math.PI - Math.PI / 2}
            />
            <Environment preset="night"/>
            {/*<Stats/>*/}
        </Canvas>
    );
};

export default Object3D;