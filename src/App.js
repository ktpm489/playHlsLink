import { useState } from "react";
import ReactHlsPlayer from "react-hls-player";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import ReactPlayer from 'react-player'
export default function App() {
  const [hlsUrl, setHlsUrl] = useState(
    localStorage.getItem('url') || ''
  );
  const handleSetUrl = (url) => {
    setHlsUrl(url.trim())
    localStorage.setItem('url', url.trim());
  }

  return (
    <div className="row justify-content-center">
      <h1 className='mt-3 mb-3'>Play Stream Online</h1>
      <input
        type="text"
        className="form-control w-90 m-2 my-4"
        placeholder="HLS Url..."
        value={hlsUrl}
        aria-label="hls-url"
        aria-describedby="set-hls-url"
        onChange={(e) => handleSetUrl(e.target.value)}
      />
      {/* <ReactHlsPlayer
        src={hlsUrl}
        autoPlay={true}
        controls={true}
        width="90%"
        height="auto"
      /> */}
      <ReactPlayer url={hlsUrl}
        width="90%"
        className='mediaPlay'
        autoPlay={true}
        controls = {true}
      />
    </div>
  );
}
