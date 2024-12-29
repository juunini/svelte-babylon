export interface MeshProps {
  position?: {
    x?: number;
    y?: number;
    z?: number;
  };
  lookAt?: {
    x?: number;
    y?: number;
    z?: number;
    yawCor?: number;
    pitchCor?: number;
    rollCor?: number;
  };
}
