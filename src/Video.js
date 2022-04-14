import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video_player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        // controls
        src={url}
        // src=" https://v16m.tiktokcdn.com/b7ebaf79515ac8710ca22e78ec382070/60306607/video/tos/useast2a/tos-useast2a-ve-0068c002/ea705fac525c46c7ab90ff12a8fae11a/?a=1233&br=5140&bt=2570&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210219192921010190176042522DDCB4&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=M3dzdXFkOzY5MzMzOzczM0ApZDk1NGZoaDw2NzZlMzo2ZmdjNWgtZ2xeXmlgLS1iMTZzczJhYmM0MmE1L2FfM18zNS06Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;

// https://v16m.tiktokcdn.com/b7ebaf79515ac8710ca22e78ec382070/60306607/video/tos/useast2a/tos-useast2a-ve-0068c002/ea705fac525c46c7ab90ff12a8fae11a/?a=1233&br=5140&bt=2570&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210219192921010190176042522DDCB4&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=M3dzdXFkOzY5MzMzOzczM0ApZDk1NGZoaDw2NzZlMzo2ZmdjNWgtZ2xeXmlgLS1iMTZzczJhYmM0MmE1L2FfM18zNS06Yw%3D%3D&vl=&vr=

// https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c003/c1845fa1f5884e58986ad03a2ff730ba/?a=1988&br=4082&bt=2041&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1613682995&l=2021021815162001018907107047265696&lr=tiktok_m&mime_type=video_mp4&pl=0&policy=2&qs=0&rc=M245ZDt1Zmo0eTMzOjczM0ApNTM3OzY8PGQ4Nzc8Zmk3NWcwNjVraGJuZWlfLS1eMTZzczJfYC8wNjAvL2MtLV8tXi46Yw%3D%3D&signature=5e79b8dd2c511f98389db2e2400ffab1&tk=tt_webid_v2&vl=&vr=
