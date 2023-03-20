## MERN stack in Hindi

### Forms, Event Objects, lifting state up

<details><summary>App.js</summary>

```
import Video from "./components/Video";
import "./App.css";
import videoDB from "./data/data";
import PlayButton from "./components/PlayButton";
import { useState } from "react";
import AddVideo from "./components/AddVideo";

function App() {
  console.log("render App");

  const [videos, setVideos] = useState(videoDB);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo addVideos={addVideos} />
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
      <div style={{ clear: "both" }}></div>
    </div>
  );
}

export default App;
```

</details>

<details><summary>AddVideo.js</summary>

```
import { useState } from "react";
import "./AddVideo.css";

function AddVideo({ addVideos }) {
  const [video, setVideo] = useState({
    time: "1 month ago",
    channel: "Coder Dost",
    verified: true,
  });
  function handleSubmit(e) {
    addVideos(video);
    e.preventDefault();
  }
  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
    console.log(video);
  }
  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
      />
      <button
        onClick={handleSubmit}
        // onClick={() => {
        //   setVideos([
        //     ...videos,
        //     {
        //       id: videos.length + 1,
        //       title: "Demo JS tutorial",
        //   views: "1M",
        //   time: "1 month ago",
        //   channel: "Coder Dost",
        //   verified: true,
        //     },
        //   ]);
        // }}
      >
        Add Video
      </button>
    </form>
  );
}

export default AddVideo;
```

</details>

<details><summary>AddVideo.css</summary>

```
input {
  display: block;
  padding: 1em;
  margin-bottom: 10px;
}
```

</details>

---

<details><summary>AddVideo.js</summary>

```
import { useState } from "react";
import "./AddVideo.css";

const initialState = {
  time: "1 month ago",
  channel: "Coder Dost",
  verified: true,
  title: "",
  views: "",
};

function AddVideo({ addVideos }) {
  const [video, setVideo] = useState(initialState);
  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    setVideo(initialState);
  }
  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
    console.log(video);
  }
  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      />
      <button
        onClick={handleSubmit}
        // onClick={() => {
        //   setVideos([
        //     ...videos,
        //     {
        //       id: videos.length + 1,
        //       title: "Demo JS tutorial",
        //   views: "1M",
        //   time: "1 month ago",
        //   channel: "Coder Dost",
        //   verified: true,
        //     },
        //   ]);
        // }}
      >
        Add Video
      </button>
    </form>
  );
}

export default AddVideo;
```

</details>

---

<details><summary>App.js</summary>

```
import "./App.css";
import videoDB from "./data/data";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  console.log("render App");

  const [videos, setVideos] = useState(videoDB);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo addVideos={addVideos} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
```

</details>

<details><summary>VideoList.js</summary>

```
import PlayButton from "./PlayButton";
import Video from "./Video";

function VideoList({ videos }) {
  return (
    <>
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
    </>
  );
}

export default VideoList;
```

</details>

---
