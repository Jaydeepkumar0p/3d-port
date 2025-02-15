import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html center>
      <div className="flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;
