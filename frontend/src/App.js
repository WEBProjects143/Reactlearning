import { useEffect } from 'react'
import './App.css';
import videojs from "video.js";
import VideoPlayer from './VideoStreaming/videoupload/VideoStream'
import { useRef } from 'react'
import {io} from "socket.io-client";
import { Routes, Route } from "react-router-dom";
import HomePage from './Component/Home/Home';
import VideoUploadPage from './Component/Video/Video';
import ChatApp from './Component/chat-app/chatapp';

function App() {
  const playerRef = useRef(null)
  const videoLink = "http://localhost:4000/files/courses/c0f87cb2-b5f8-4c19-a95a-f11202f39c4a/index.m3u8"
  const options = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL",
      }
    ]}

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };



  useEffect(()=>{
    const url="http://localhost:4000"
    const socket =io(url);
    socket.on("connect",()=>{
      console.log("Client side socket is connected");
    })
    socket.emit("chat message","hello bhupendra")
    return ()=> socket.off("chat message")
  },[])

  return (
 
    <>
      {/* <div>
        <h1>Video player</h1>
      </div>
      <VideoPlayer
      options={options}
      onReady={handlePlayerReady}
      /> */}
        <Routes>
          <Route path="/home" element ={<HomePage/>}/>
          <Route path="/video" element ={<VideoUploadPage/>}/>
          <Route path="/chat-app" element ={<ChatApp/>}/>
        </Routes>
    </>
  )
}

export default App