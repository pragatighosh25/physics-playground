import { useBox, useSphere } from "@react-three/cannon";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function ShapeSpawner() {
  const [objects, setObjects] = useState([]);

  const spawnBox = () => {
    const id = Math.random();
    setObjects([...objects, { id, type: "box" }]);
  };

  const spawnSphere = () => {
    const id = Math.random();
    setObjects([...objects, { id, type: "sphere" }]);
  };

  return (
    <>
      <Html position={[0, 3, 0]}>
        <button onClick={spawnBox}>Add Box</button>
        <button onClick={spawnSphere}>Add Sphere</button>
      </Html>
      {objects.map((obj) =>
        obj.type === "box" ? <Box key={obj.id} /> : <Ball key={obj.id} />
      )}
    </>
  );
}

function Box() {
  const [ref] = useBox(() => ({
    mass: 1,
    position: [Math.random() * 2, 5, Math.random() * 2],
  }));
  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

function Ball() {
  const [ref] = useSphere(() => ({
    mass: 1,
    position: [Math.random() * 2, 5, Math.random() * 2],
  }));
  return (
    <mesh ref={ref} castShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  );
}
