import { useState } from "react";
import "./PlayButton.css";

function PlayButton({ message, children, onPlay, onPause }) {
  console.log("render PlayButton");
  const [playing, setPlaying] = useState(false);
  function handlerClick(e) {
    // console.log(e);
    e.stopPropagation();
    // e.preventDefault();

    if (playing) onPause();
    else onPlay();
    setPlaying(!playing);
  }
  return (
    <button onClick={handlerClick}>
      {children} : {playing ? "⏸️" : "⏯️"}
    </button>
  );
}

export default PlayButton;
