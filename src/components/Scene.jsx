import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Ground from "./Ground";
import ShapeSpawner from "./ShapeSpawner";
import { usePlaygroundControls } from "./ControlsPanel";

export default function Scene() {
  const { gravity } = usePlaygroundControls();
  return (
    <Canvas shadows camera={{ position: [5, 5, 10], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        castShadow
        intensity={1.2}
      />
      <Physics gravity={[0, gravity, 0]}>
        <Ground />
        <ShapeSpawner />
      </Physics>
      <OrbitControls />
      <Stats /> {/* FPS counter */}
    </Canvas>
  );
}
