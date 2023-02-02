import React from 'react';
import {Canvas} from "@react-three/fiber";
import {Model} from "../Laptop";
import {Suspense} from 'react';
import {Box, Environment, OrbitControls, PerspectiveCamera} from "@react-three/drei";

const Scene = () => {
    return (
        <Canvas>
            <pointLight position={[0, 5, 5]}/>
            {/*<Suspense fallback={null}>*/}
                {/*<Model rotation={[0, Math.PI / 2, 0]} position={[0, -2, 0]} scale={2}/>*/}
                <mesh>
                    <Box/>
                </mesh>
                <PerspectiveCamera position={[-3, 0, 0]} makeDefault/>
            {/*</Suspense>*/}
            <OrbitControls enableZoom={false}
                           enablePan={false}/>
            {/*<Environment preset="night"/>*/}
            {/*<Stats/>*/}
        </Canvas>
    );
};

export default Scene;