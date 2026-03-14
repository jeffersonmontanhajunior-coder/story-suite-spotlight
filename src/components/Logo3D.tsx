import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const SimpleFloat = ({ children, speed = 1.5, floatIntensity = 0.3 }: { children: React.ReactNode; speed?: number; rotationIntensity?: number; floatIntensity?: number }) => {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y = Math.sin(clock.getElapsedTime() * speed) * floatIntensity * 0.2;
  });
  return <group ref={ref}>{children}</group>;
};

const MountainShape = ({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(t);
  }, []);

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    // Main mountain (center peak)
    shape.moveTo(0, -1.2);
    shape.lineTo(-2.5, -1.2);
    shape.lineTo(-0.8, 0.8);
    shape.lineTo(-0.5, 0.4);
    shape.lineTo(0, 1.5);
    shape.lineTo(0.5, 0.4);
    shape.lineTo(0.8, 0.8);
    shape.lineTo(2.5, -1.2);
    shape.lineTo(0, -1.2);

    const extrudeSettings = {
      steps: 1,
      depth: 0.3,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 3,
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  // Diamond cutout shape
  const diamondGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.3);
    shape.lineTo(0.35, 0);
    shape.lineTo(0, -0.3);
    shape.lineTo(-0.35, 0);
    shape.lineTo(0, 0.3);

    return new THREE.ExtrudeGeometry(shape, {
      steps: 1,
      depth: 0.35,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 2,
    });
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    const targetX = mouse.current.y * 0.15;
    const targetY = mouse.current.x * 0.15;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
  });

  return (
    <SimpleFloat speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group
        ref={groupRef}
        scale={entered ? 1 : 0.8}
        position={[0, 0, 0]}
      >
        {/* Main mountain */}
        <mesh geometry={geometry} position={[0, 0, -0.15]}>
          <meshStandardMaterial
            color="#e8e8e8"
            metalness={0.3}
            roughness={0.4}
            emissive="#4488ff"
            emissiveIntensity={0.05}
          />
        </mesh>

        {/* Diamond accent */}
        <mesh geometry={diamondGeometry} position={[0, -0.1, -0.15]}>
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.5}
            roughness={0.3}
            emissive="#4488ff"
            emissiveIntensity={0.1}
          />
        </mesh>
      </group>
    </SimpleFloat>
  );
};

const Scene = ({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) => {
  const { viewport } = useThree();
  const scale = Math.min(viewport.width / 8, 1);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <directionalLight position={[-3, 2, 4]} intensity={0.3} color="#4488ff" />
      <pointLight position={[0, 3, 3]} intensity={0.5} color="#6699ff" />
      <group scale={scale}>
        <MountainShape mouse={mouse} />
      </group>
    </>
  );
};

const Logo3D = ({ className = "" }: { className?: string }) => {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  };

  return (
    <div className={className} onMouseMove={handleMouseMove}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  );
};

export default Logo3D;
