import { useControls } from "leva";

export function usePlaygroundControls() {
  return useControls("Physics", {
    gravity: { value: -9.81, min: -30, max: 0, step: 0.1 },
    spawnRate: { value: 1, min: 0.1, max: 5, step: 0.1 },
    bounce: { value: 0.5, min: 0, max: 1 },
  });
}
