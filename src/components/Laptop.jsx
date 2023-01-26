import {useGLTF} from "@react-three/drei";

const path = "models/laptop.glb"

export function Model(props) {
    const {nodes, materials} = useGLTF(path);
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Keyboard.geometry}
                material={materials.MacBookPro}
                scale={[0.12, 0, 0.18]}
            />
            <mesh
                geometry={nodes.Screen.geometry}
                material={materials.MacBookPro}
                position={[0.12, 0.01, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[0, -0.12, -0.18]}
            />
        </group>
    );
}

useGLTF.preload(path);