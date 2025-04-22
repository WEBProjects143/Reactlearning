const {v4:uuidv4}=require("uuid")
const fs=require("fs");
const {exec}=require('child_process');
const { stderr, stdout } = require("process");

exports.streamCntrl= (req, res) => {
  
   const lessionId=uuidv4();//
   const videoPath=req.file.path;//where file stored for FFnmeg library
   const outputPath=`./files/courses/${lessionId}`;
   const hlsPath=`${outputPath}/index.m3u8`;//unstiched video means  in text format,
   // m3u8 is basically a plain text file iwth UT8-f file format  where we  store audio ,video in a text format 
   console.log(hlsPath)

   if (!fs.existsSync(outputPath)) {

    fs.mkdirSync(outputPath, { recursive: true });
  }

    //for video streaming ibraray
    // const ffmpegCommand = `ffmpeg -i ${videoPath} -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${outputPath}/segment%03d.ts" -start_number 0 ${hlsPath}`
    const ffmpegCommand = `ffmpeg -i "${videoPath}" -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${outputPath}/segment%03d.ts" -start_number 0 "${hlsPath}"`;

    exec(ffmpegCommand,(err,stdout,stderr)=>{
      if(err){
        console.error("Error occurred:", err);
        return res.status(404).json({ msg: "Something went wrong with the video" });
      }
      console.log(`stdout: ${stdout}`)
      console.log(`stderr: ${stderr}`)
      const videoUrl = `http://localhost:4000/files/courses/${lessionId}/index.m3u8`;//this get by 
  
      res.json({
        message: "Video converted to HLS format",
        videoUrl: videoUrl,
        lessonId: lessionId
      });
    })

  };