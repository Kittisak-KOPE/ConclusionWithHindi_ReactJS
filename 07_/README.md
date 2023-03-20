## MERN stack in Hindi

### CRUD operations, useEffect hook

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

  function deleteVideo(id) {
    console.log(id);
  }

  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo addVideos={addVideos} />
      <VideoList deleteVideo={deleteVideo} videos={videos} />
    </div>
  );
}

export default App;
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
  deleteVideo,
}) {
  console.log("render Video");
  return (
    <>
      <div className="container">
        <button className="close" onClick={() => deleteVideo(id)}>
          X
        </button>
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

<details><summary>Video.css</summary>

```
.dark {
  background-color: gray;
  color: white;
}
.container {
  width: 15em;
  margin: 0 0.2em;
  float: left;
  position: relative;
}
.pic img {
  width: 100%;
}
.title {
  font-weight: bold;
  margin-bottom: 1em;
  color: white;
}
.channel,
.views {
  font-size: small;
  color: #ccc;
  margin-bottom: 0.2em;
}

.views span {
  padding: 0 0.5em;
}

.close {
  position: absolute;
  right: 0;
}
```

</details>

<details><summary>VideoList.js</summary>

```
import Video from "./Video";
import PlayButton from "./PlayButton";

function VideoList({ videos, deleteVideo }) {
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
          deleteVideo={deleteVideo}
        >
          <PlayButton
            onPlay={() => console.log("Playing..", video.title)}
            onPause={() => console.log("Paused..", video.title)}
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

  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id !== id));
  }

  function editVideo(id) {
    console.log(videos.find((video) => video.id === id));
  }

  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo addVideos={addVideos} />
      <VideoList
        deleteVideo={deleteVideo}
        editVideo={editVideo}
        videos={videos}
      />
    </div>
  );
}

export default App;
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
  deleteVideo,
  editVideo,
}) {
  console.log("render Video");
  return (
    <>
      <div className="container">
        <button className="close" onClick={() => deleteVideo(id)}>
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          Edit
        </button>
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

<details><summary>Video.css</summary>

```
.dark {
  background-color: gray;
  color: white;
}
.container {
  width: 15em;
  margin: 0 0.2em;
  float: left;
  position: relative;
}
.pic img {
  width: 100%;
}
.title {
  font-weight: bold;
  margin-bottom: 1em;
  color: white;
}
.channel,
.views {
  font-size: small;
  color: #ccc;
  margin-bottom: 0.2em;
}

.views span {
  padding: 0 0.5em;
}

.close {
  position: absolute;
  right: 0;
}

.edit {
  position: absolute;
  right: 4em;
}
```

</details>

<details><summary>VideoList.js</summary>

```
import Video from "./Video";
import PlayButton from "./PlayButton";

function VideoList({ videos, deleteVideo, editVideo }) {
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
          deleteVideo={deleteVideo}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log("Playing..", video.title)}
            onPause={() => console.log("Paused..", video.title)}
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
  const [editableVideo, setEditableVideo] = useState(null);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id !== id));
  }

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  function updateVideo(video) {
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideos = [...videos];
    newVideos.splice(index, 1, video);
    setVideos(newVideos);
  }

  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo
        addVideos={addVideos}
        updateVideo={updateVideo}
        editableVideo={editableVideo}
      />
      <VideoList
        deleteVideo={deleteVideo}
        editVideo={editVideo}
        videos={videos}
      />
    </div>
  );
}

export default App;
```

</details>

<details><summary>AddVideo.js</summary>

```
import { useEffect, useState } from "react";
import "./AddVideo.css";

const initialState = {
  time: "1 month ago",
  channel: "Coder Dost",
  verified: true,
  title: "",
  views: "",
};

function AddVideo({ addVideos, updateVideo, editableVideo }) {
  const [video, setVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      updateVideo(video);
    } else {
      addVideos(video);
    }
    setVideo(initialState);
  }
  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);

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
      <button onClick={handleSubmit}>
        {editableVideo ? "Edit" : "Add"} Video
      </button>
    </form>
  );
}

export default AddVideo;
```

</details>

---
