import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export const useGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>();

  useEffect(() => {
    let phi = 4.1;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: window.devicePixelRatio,
      width:
        canvasRef.current.getBoundingClientRect().width *
        window.devicePixelRatio,
      height:
        canvasRef.current.getBoundingClientRect().width *
        window.devicePixelRatio,
      phi: 4.1,
      theta: 0.5,
      dark: 1,
      diffuse: 0,
      mapSamples: 16384,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [{ location: [52.520008, 13.404954], size: 0.05 }],
      onRender(state) {
        state.phi = phi;
        phi -= 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return canvasRef;
};
