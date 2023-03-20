## MERN stack in Hindi

### Events, Event handler, Synthetic Event Object

---

<details><summary>PlayButton.css</summary>

```
button {
  background-color: black;
  border: 1px solid yellow;
  padding: 1em;
  border-radius: 1em;
  color: white;
  cursor: pointer;
}
button:hover {
  background-color: grey;
  color: white;
}
```

</details>

<details><summary>PlayButton.js</summary>

```
import "./PlayButton.css";

function PlayButton() {
  function handlerClick() {
    console.log("play");
  }

  return <button onClick={handlerClick}>Play</button>;
}

export default PlayButton;
```

</details>

<details><summary>App.js</summary>

```
import Video from "./components/Video";
import "./App.css";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";

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
        ></Video>
      ))}
      <div style={{ clear: "both" }}>
        <PlayButton></PlayButton>
      </div>
    </div>
  );
}

export default App;
```

</details>

---

<details><summary>App.js</summary>

```
import Video from "./components/Video";
import "./App.css";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";

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
        ></Video>
      ))}
      <div style={{ clear: "both" }}>
        <PlayButton message="play-msg">Play</PlayButton>
        <PlayButton message="pause-msg">Pause</PlayButton>
      </div>
    </div>
  );
}

export default App;
```

</details>

<details><summary>PlayButton.js</summary>

```
import "./PlayButton.css";

function PlayButton({ message, children }) {
  function handlerClick() {
    console.log({ message });
  }

  return <button onClick={handlerClick}>{children}</button>;
}

export default PlayButton;
```

</details>

---

<details><summary>App.js</summary>

```
import Video from "./components/Video";
import "./App.css";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";

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
        ></Video>
      ))}
      <div style={{ clear: "both" }}>
        <PlayButton message="play-msg" onClick={() => console.log("Playyy")}>
          Play
        </PlayButton>
        <PlayButton message="pause-msg" onClick={() => alert("Playyy")}>
          Pause
        </PlayButton>
      </div>
    </div>
  );
}

export default App;
```

</details>

<details><summary>PlayButton.js</summary>

```
import "./PlayButton.css";

function PlayButton({ message, children, onClick }) {
  function handlerClick() {
    onClick();
    // console.log({ message });
  }

  return <button onClick={handlerClick}>{children}</button>;
}

export default PlayButton;
```

</details>

---

<details><summary>App.js</summary>

```
import Video from "./components/Video";
import "./App.css";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";

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
        ></Video>
      ))}
      <div style={{ clear: "both" }}>
        <PlayButton
          message="play-msg"
          onPlay={() => console.log("Play")}
          onPause={() => console.log("Pause")}
        >
          Play
        </PlayButton>
        {/* <PlayButton message="pause-msg" onSmash={() => alert("Playyy")}>
          Pause
        </PlayButton> */}
      </div>
    </div>
  );
}

export default App;
```

</details>

<details><summary>PlayButton.js</summary>

```
import "./PlayButton.css";

function PlayButton({ message, children, onPlay }) {
  function handlerClick() {
    onPlay();
  }
  return <button onClick={handlerClick}>{children}</button>;
}

export default PlayButton;
```

</details>

---

<details><summary>App.js</summary>

```
import Video from "./components/Video";
import "./App.css";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";

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
        ></Video>
      ))}
      <div style={{ clear: "both" }}>
        <PlayButton
          message="play-msg"
          onPlay={() => console.log("Play")}
          onPause={() => console.log("Pause")}
        >
          Play
        </PlayButton>
        {/* <PlayButton message="pause-msg" onSmash={() => alert("Playyy")}>
          Pause
        </PlayButton> */}
      </div>
    </div>
  );
}

export default App;
```

</details>

<details><summary>PlayButton.js</summary>

```
import "./PlayButton.css";

function PlayButton({ message, children, onPlay, onPause }) {
  let playing = false; // don't use this approach
  function handlerClick() {
    if (playing) onPause();
    else onPlay();
    playing = !playing;
  }
  return (
    <button onClick={handlerClick}>
      {children} : {playing ? ">" : "||"}
    </button>
  );
}

export default PlayButton;
```

</details>

---

<details><summary>App.js</summary>

```
import Video from "./components/Video";
import "./App.css";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";

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
        {/* <PlayButton
          message="play-msg"
          onPlay={() => console.log("Play")}
          onPause={() => console.log("Pause")}
        >
          Play
        </PlayButton> */}
        {/* <PlayButton message="pause-msg" onSmash={() => alert("Playyy")}>
          Pause
        </PlayButton> */}
      </div>
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
}) {
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

<details><summary>PlayButton.js</summary>

```
import "./PlayButton.css";

function PlayButton({ message, children, onPlay, onPause }) {
  let playing = false; // don't use this approach
  function handlerClick(e) {
    console.log(e);
    e.stopPropagation();
    // e.preventDefault();

    if (playing) onPause();
    else onPlay();
    playing = !playing;
  }
  return (
    <button onClick={handlerClick}>
      {children} : {playing ? ">" : "||"}
    </button>
  );
}

export default PlayButton;

```

</details>

<details><summary>App.js</summary>

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

<details><summary>App.js</summary>

```
import Video from "./components/Video";
import "./App.css";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";

function App() {
  return (
    <div className="App" onClick={() => console.log("App")}>
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
        {/* <PlayButton
          message="play-msg"
          onPlay={() => console.log("Play")}
          onPause={() => console.log("Pause")}
        >
          Play
        </PlayButton> */}
        {/* <PlayButton message="pause-msg" onSmash={() => alert("Playyy")}>
          Pause
        </PlayButton> */}
      </div>
    </div>
  );
}

export default App;
```

</details>
