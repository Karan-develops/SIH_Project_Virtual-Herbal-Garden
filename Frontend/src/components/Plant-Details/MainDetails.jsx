import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import PlantCareGuide from './PlantCareGuide';
import { PlantDetails } from './PlantDetails';
import Navbar from '../Navbar';

// const Model = () => {
//   const { scene } = useGLTF('src/assets/3d/scene.gltf');
//   return <primitive object={scene} scale={7} />;
// };

const MainDetails = () => {
  return (
    <div className='flex flex-col bg-gray-100 justify-center item-start overflow-hidden'>
      <Navbar/>
      <div className="min-h-screen w-[100vw] flex justify-center items-center">
        {/* Main Container */}
        <div className="bg-white shadow-lg rounded-lg flex w-5/6">
          {/* GLTF Model Section */}
          <div className="w-2/5">
            <Canvas className="rounded-l-lg w-full h-full">
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls enableZoom={false} />
              {/* <Model /> */}
            </Canvas>
          </div>

          {/* Text and Details Section */}
          <div className="w-3/5 p-6 space-y-4">
            {/* Plant Title */}
            <h1 className="text-5xl font-bold text-gray-800">Noble Fir</h1>
            <p className="italic text-green-600 text-2xl">Abies Procera</p>

            {/* Also Known As */}
            <p className="mt-2 text-xl text-gray-700">Also Known As - Red Fir, White Fir</p>

            {/* Plant Description */}
            <p className="text-gray-600 mt-2 leading-relaxed">
              The Noble Fir (Abies procera) is a tall and stately tree with symmetrical branches...
            </p>

            {/* Properties List */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 mt-6">
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">🌿 Cycle:</span> 
                <span className="ml-2 text-gray-800">Perennial</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">💧 Watering:</span> 
                <span className="ml-2 text-gray-800">Average</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">🌱 Propagation:</span> 
                <span className="ml-2 text-gray-800">Seed, Cutting, Grafting</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">🌡️ Hardiness Zone:</span> 
                <span className="ml-2 text-gray-800">8</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">🌞 Sun:</span> 
                <span className="ml-2 text-gray-800">Full Sun</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">🍃 Leaf Color:</span> 
                <span className="ml-2 text-gray-800">Green</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">🌿 Growth Rate:</span> 
                <span className="ml-2 text-gray-800">Low</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">🪴 Soil Type:</span> 
                <span className="ml-2 text-gray-800">Loamy Rocky</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex space-x-4">
              <button className="bg-blue-600 text-white px-4 py-3 rounded-md text-lg">
                Leave your experience
              </button>
              <button className="bg-orange-600 text-white px-4 py-3 rounded-md text-lg">
                Suggest Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      <PlantCareGuide />
      <PlantDetails />
      <div className='mb-10'></div>
    </div>
  );
};

export default MainDetails;