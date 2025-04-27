import React, { useState,useRef} from "react";
import axios from "axios";
import videojs from "video.js";
import VideoPlayer from "../../VideoStreaming/videoupload/VideoStream";
export default function VideoUploadPage() {
  const [videoURL, setVideoURL] = useState(null);
  const [videoUpload, setVideoUpload] = useState(null);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    console.log(file)
    if (file) {
      // const url = URL.createObjectURL(file);
      setVideoUpload(file)
      // setVideoURL(url);
    }
  };

  const handleSubmit=async()=>{
    const formdata=new FormData();
    formdata.append("video",videoUpload)
    console.log(formdata)
    const response=await axios({
      method:"POST",
      url:"http://localhost:4000/api/stream/file",
      data:formdata,
      headers:{"Content-Type":"multipart/form-data"}
    })
    const url=response.data.videoUrl;
    console.log(url);
    if(url)
    setVideoURL(url)
  }
    const playerRef = useRef(null)
    const options = {
      autoplay: false,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: videoURL,
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
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Upload and View Video</h1>

      <div className="flex flex-col items-center gap-4">
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
        />
        <button onClick={handleSubmit} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Upload</button>

        {videoURL && (
          <div className="mt-6 w-full max-w-1xl">
             <VideoPlayer
                  options={options}
                  onReady={handlePlayerReady}
              />
          </div>
        )}
      </div>
    </div>
  );
}
