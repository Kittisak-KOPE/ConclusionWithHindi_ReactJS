## MERN stack in Hindi

### State, useState hook

<details><summary>App.js</summary>

```
import Video from "./components/Video";
import "./App.css";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <div>Video</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log("Playing", video.title)}
            onPause={() => console.log("Paused...", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <div style={{ clear: "both" }}>
        <Counter />
      </div>
    </div>
  );
}

export default App;
```

</details>

<details><summary>Counter.js</summary>

```
import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  console.log("render Counter");

  function handlerClick(e) {
    e.stopPropagation();
    setNumber((number) => number + 1);
  }

  return (
    <>
      <h1 style={{ color: "white" }}>{number}</h1>
      <button onClick={handlerClick}>Add</button>
    </>
  );
}

export default Counter;
```

</details>

---

<details><summary>App.js</summary>

```
import Video from "./components/Video";
import "./App.css";
import videoDB from "./data/data";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  console.log("render App");

  const [videos, setVideos] = useState(videoDB);

  return (
    <div className="App" onClick={() => console.log("App")}>
      <div>
        <button
          onClick={() => {
            setVideos([
              ...videos,
              {
                id: videos.length + 1,
                title: "Demo JS tutorial",
                views: "1M",
                time: "1 month ago",
                channel: "Coder Dost",
                verified: true,
              },
            ]);
          }}
        >
          Add Video
        </button>
      </div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log("Playing", video.title)}
            onPause={() => console.log("Paused...", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <div style={{ clear: "both" }}>
        <Counter />
      </div>
    </div>
  );
}

export default App;
```

</details>

<details><summary>PlayButton.js</summary>

```
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
```

</details>

<details><summary>Video.js</summary>

```
import "./Video.css";

function Video({
  title,
  id,
  channel = "Coder Dost",
  views,
  time,
  verified,
  children,
}) {
  console.log("render Video");
  return (
    <>
      <div className="container">
        <div className="pic">
          <img
            src={`http://picsum.photos/id/${id}/160/90`}
            alt="Katherine Johnson"
          />
          <div className="title">{title}</div>
          <div className="channel">
            {channel} {verified && "✅"}
          </div>
          <div className="views">
            {views} views <span>.</span> {time}
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}

export default Video;
```

</details>

---
