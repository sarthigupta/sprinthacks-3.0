declare module "*.glb";
declare module "@react-three/drei" {
  export function OrbitControls(props: { enableZoom?: boolean; enablePan?: boolean; enableRotate?: boolean }): JSX.Element;
  export function useGLTF(path: string): { scene: THREE.Scene; nodes: { [key: string]: THREE.Object3D }; materials: { [key: string]: THREE.Material } };
}
declare module "@react-three/fiber" {
  export function Canvas(props: React.CanvasHTMLAttributes<HTMLCanvasElement>): JSX.Element;
}