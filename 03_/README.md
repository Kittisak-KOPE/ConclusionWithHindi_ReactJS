## MERN stack in Hindi

### Conditional rendering, maps

<details><summary>App.js</summary>

```
import Video from "./components/Video";
import "./App.css";

function App() {
  let obj = {
    title: "React JS tutorial",
    views: "999K",
    time: "1 year ago",
    channel: "Coder Dost",
    verified: true,
  };

  return (
    <div className="App">
      <div>Video</div>
      <Video {...obj}></Video>
      <Video
        verified={false}
        title="Node JS tutorial"
        views="100K"
        time="1 month ago"
        channel="Coder Dost"
      ></Video>
      <Video
        title="Mongo DB tutorial"
        views="1M"
        time="1 month ago"
        channel="Coder Dost"
        verified={false}
      ></Video>
    </div>
  );
}

export default App;
```

</details>

<details><summary>Video.js</summary>

```
import "./Video.css";

function Video({ title, channel = "Coder Dost", views, time, verified }) {
  let channelJSX;
  if (verified) {
    channelJSX = <div className="channel">{channel} ✅ </div>;
  } else {
    channelJSX = <div className="channel">{channel}</div>;
  }

  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="http://picsum.photos/id/2/160/90" alt="Katherine Johnson" />
          <div className="title">{title}</div>
          {channelJSX}
          <div className="views">
            {views} views <span>.</span> {time}
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
```

</details>

Try

<details><summary>Video.js</summary>

```
import "./Video.css";

function Video({ title, channel = "Coder Dost", views, time, verified }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="http://picsum.photos/id/2/160/90" alt="Katherine Johnson" />
          <div className="title">{title}</div>
          {verified ? (
            <div className="channel">{channel} ✅ </div>
          ) : // <div className="channel">{channel}</div>
            null
          }
          <div className="views">
            {views} views <span>.</span> {time}
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
```

</details>

Try

<details><summary>Video.js</summary>

```
import "./Video.css";

function Video({ title, channel = "Coder Dost", views, time, verified }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="http://picsum.photos/id/2/160/90" alt="Katherine Johnson" />
          <div className="title">{title}</div>
          <div className="channel">
            {channel} {verified && "✅"}
          </div>
          <div className="views">
            {views} views <span>.</span> {time}
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
```

## </details>

<details><summary>App.js</summary>

```
import Video from "./components/Video";
import "./App.css";

function App() {
  let videos = [
    {
      id: 1,
      title: "React JS tutorial",
      views: "999K",
      time: "1 year ago",
      channel: "Coder Dost",
      verified: true,
    },
    {
      id: 2,
      title: "Node JS tutorial",
      views: "100K",
      time: "1 year ago",
      channel: "Coder Dost",
      verified: false,
    },
    {
      id: 3,
      title: "React JS tutorial",
      views: "1M",
      time: "1 month ago",
      channel: "Coder Dost",
      verified: true,
    },
  ];

  return (
    <div className="App">
      <div>Video</div>
      {videos.map((video) => (
        <Video
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        ></Video>
      ))}
    </div>
  );
}

export default App;
```

</details>

<details><summary>Video.js</summary>

```
import "./Video.css";

function Video({ title, id, channel = "Coder Dost", views, time, verified }) {
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
        </div>
      </div>
    </>
  );
}

export default Video;
```

</details>

---

key

<details><summary>data.js</summary>

```
const videos = [
  {
    id: 1,
    title: "React JS tutorial",
    views: "999K",
    time: "1 year ago",
    channel: "Coder Dost",
    verified: true,
  },
  {
    id: 2,
    title: "Node JS tutorial",
    views: "100K",
    time: "1 year ago",
    channel: "Coder Dost",
    verified: false,
  },
  {
    id: 3,
    title: "React JS tutorial",
    views: "1M",
    time: "1 month ago",
    channel: "Coder Dost",
    verified: true,
  },
];

export default videos;
```

</details>

<details><summary>Video.js</summary>

```
import "./Video.css";

function Video({ title, id, channel = "Coder Dost", views, time, verified }) {
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
    </div>
  );
}

export default App;
```

</details>

---
