// import React from 'react';
// import { useNavigate } from "react-router-dom";


// export default function HomePage() {
//     const navigate=useNavigate();
//   return (
//     <div className="flex items-center justify-center h-screen bg-blue-100">
//       <div className="flex flex-col gap-6">
//         <button onClick={()=>navigate("/video")} className="px-8 py-4 bg-blue-500 text-white text-xl rounded-2xl shadow-lg hover:bg-blue-600 transition">
//           Video Review
//         </button>
//         <button onClick={()=>navigate("/chat app")} className="px-8 py-4 bg-green-500 text-white text-xl rounded-2xl shadow-lg hover:bg-green-600 transition">
//           Chat App
//         </button>
//       </div>
//     </div>
//   );
// }
// Home.jsx
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h2 className="logo">MyWebsite</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="hero">
        <h1>Welcome to My Website</h1>
        <p>Your simple React homepage is ready!</p>
        <button className="cta-btn">Get Started</button>
      </section>
    </div>
  );
};

export default Home;
