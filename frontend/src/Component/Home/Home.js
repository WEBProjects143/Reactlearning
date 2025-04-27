import React from 'react';
import { useNavigate } from "react-router-dom";


export default function HomePage() {
    const navigate=useNavigate();
  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="flex flex-col gap-6">
        <button onClick={()=>navigate("/video")} className="px-8 py-4 bg-blue-500 text-white text-xl rounded-2xl shadow-lg hover:bg-blue-600 transition">
          Video Review
        </button>
        <button onClick={()=>navigate("/chat app")} className="px-8 py-4 bg-green-500 text-white text-xl rounded-2xl shadow-lg hover:bg-green-600 transition">
          Chat App
        </button>
      </div>
    </div>
  );
}