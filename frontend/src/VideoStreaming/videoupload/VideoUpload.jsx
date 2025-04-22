import "./Videoupload-style.scss";
import { useState } from "react";
import axios from "axios";
const VideoUpload=()=>{
const [stream,setStream]=useState(null)
    const handlesubmit=async (event)=>{
        event.preventDefault();
        const formData = new FormData();
        if(!stream) return; 
        formData.append('uploaded', stream); 
        try {
            const response=await axios.post(" http://localhost:4000/api/stream/file",formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        } catch (error) {
            console.log(error)
            alert("Somthing went wrong ")
        }

    }
    const handleChange=(event)=>{
        event.preventDefault(); 
        const upload=event.target.files[0];
        // const id=uuidv4();
        // const filename =`${id}_${upload.name}`
        setStream(upload);
        
    }
    console.log(stream)
return(
    <div className="container">
        <div className="upload">
            <h2>Video upload</h2>
            <input type="file"  accept="video/*" onChange={handleChange} name="uploaded"/>
            <input type="text" placeholder="Title"/>
            <textarea placeholder="description"/>
            <button  onClick={handlesubmit} className="__btn" disabled={!stream}>upload</button>

        </div>
    </div>
)
}
export default VideoUpload;
