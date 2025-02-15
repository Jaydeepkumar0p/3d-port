/* eslint-disable react/no-unknown-property */
import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

const Home = ({ currentStage, setCurrentStage }) => {
  const [isRotating, setIsRotating] = useState(false);

  const [island, setIsland] = useState({
    scale: [1, 1, 1],
    position: [0, -6.5, -43],
    rotation: [0.1, 4.7, 0],
  });

  const [plane, setPlane] = useState({
    scale: [3, 3, 3],
    position: [0, -4, -4],
  });

  const adjustModelsForScreenSize = () => {
    const isMobile = window.innerWidth < 768;

    setIsland({
      scale: isMobile ? [0.9, 0.9, 0.9] : [1, 1, 1],
      position: [0, -6.5, -43],
      rotation: [0.1, 4.7, 0],
    });

    setPlane({
      scale: isMobile ? [1.5, 1.5, 1.5] : [3, 3, 3],
      position: isMobile ? [0, -1.5, 0] : [0, -4, -4],
    });
  };

  useEffect(() => {
    adjustModelsForScreenSize();
    window.addEventListener("resize", adjustModelsForScreenSize);
    return () => window.removeEventListener("resize", adjustModelsForScreenSize);
  }, []);

  return (
    <div>
      <section className="w-full h-screen relative">
        {/* Info Box */}
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage ? (
            <HomeInfo currentStage={currentStage} />
          ) : (
            <p className="text-white text-lg">Initializing scene...</p>
          )}
        </div>

        {/* 3D Scene */}
        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[1, 1, 1]} intensity={1} />
            <pointLight position={[5, 5, 5]} intensity={1} />
            <hemisphereLight skyColor={"#b1e1ff"} groundColor={"#000000"} intensity={1} />

            <Bird />
            <Sky isRotating={isRotating} />

            <Island
              position={island.position}
              scale={island.scale}
              rotation={island.rotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage} // Update stage
            />

            <Plane
              isRotating={isRotating}
              scale={plane.scale}
              position={plane.position}
              rotation={[-0.1, -2, -0.4]} // Rotate in the opposite direction
              setCurrentStage={setCurrentStage} // Update stage
            />
          </Suspense>
        </Canvas>
      </section>
    </div>
  );
};

export default Home;
