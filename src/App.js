import { useState } from "react";
import ReactHlsPlayer from "react-hls-player";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const [hlsUrl, setHlsUrl] = useState(
    "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.m3u8"
  );

  return (
    <div className="row justify-content-center">
      <input
        type="text"
        className="form-control w-90 m-2 my-4"
        placeholder="HLS Url..."
        value={hlsUrl}
        aria-label="hls-url"
        aria-describedby="set-hls-url"
        onChange={(e) => setHlsUrl(e.target.value)}
      />
      <ReactHlsPlayer
        src={hlsUrl}
        autoPlay={true}
        controls={true}
        width="90%"
        height="auto"
      />
    </div>
  );
}
