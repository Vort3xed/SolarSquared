import { Suspense, useRef} from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame  } from '@react-three/fiber';


function Model() {
    // const { scene } = useGLTF('assets/Laptop.gltf')
    const { scene } = useGLTF('/panel.gltf')
    scene.position.y = -0.056;

    

    return <primitive object={scene}/>;
}

export default function Renderer() {
    return (
        <div style= {{height:"70vh"}}>
            {/* [-2,2,4] */}
            {/* camera={{position: [-2,2,4], fov:3.5 }} */}
            <Canvas camera={{fov:2 }}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} intensity={4} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <OrbitControls
                    autoRotate={true}
                    autoRotateSpeed={2}
                    
                />
            </Canvas>
        </div>
    );
}