import "./App.css";
import Video from "./Video";
import { useState, useEffect } from "react";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
        {/* <Video
          url="https://v77.tiktokcdn.com/e1a2a35bdf9dd773a4bba5db56793a12/60352bc6/video/tos/useast2a/tos-useast2a-pve-0068/5aecb11d774849ac8e31bfac5e985f1e/?a=1233&br=2210&bt=1105&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2021022310221401018907313712048B6B&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=MzVwOGxxZXR0MzMzOzczM0ApM2lnNTM1O2RnNztlaDQ1aGdlY2BsMV5yMTVgLS0xMTZzc2E2LmMzYy1eY2AzX19eX2M6Yw%3D%3D&vl=&vr="
          channel="youpil"
          description="Amazing"
          song="YOLO"
          likes={140}
          messages={87}
          shares={13}
        /> */}
        {/* <Video /> */}
      </div>
    </div>
  );
}

export default App;
