## MERN stack in Hindi

### Component, Props, JSX

#### Component

In src folder create folder name "components", Next, create file name "Video.js" and "Video.css"

<details><summary>Video.js</summary>

```
function Video() {
  return <div>Video</div>;
}

export default Video;
```

</details>

<details><summary>App.js</summary>

```
import Video from "./components/Video";
import "./App.css";

function App() {
  return (
    <div>
      <div>Hello</div>
      <Video></Video>
    </div>
  );
}

export default App;
```

</details>

##### Export {}

<details><summary>Video.js</summary>

```
function Video() {
  return <div>Video</div>;
}

function Thumb() {
  return <div>Thumb</div>;
}

export { Video, Thumb };
```

</details>

<details><summary>App.js</summary>

```
import { Video, Thumb } from "./components/Video";
import "./App.css";

function App() {
  return (
    <div>
      <div>Hello</div>
      <Video></Video>
      <Thumb></Thumb>
    </div>
  );
}

export default App;
```

</details>

```
https://loremipsum.io/21-of-the-best-placeholder-image-generators/
```

<details><summary>Video.js</summary>

```
function Video() {
  return (
    <div>
      <img src="http://placeimg.com/160/90/any" alt="Katherine Johnson" />
      <div>React JS Tutorial - Componts</div>
    </div>
  );
}

export default Video;
```

</details>

<details><summary>App.js</summary>

```
import Video from "./components/Video";
import "./App.css";

function App() {
  return (
    <div>
      <div>Hello</div>
      <Video></Video>
    </div>
  );
}

export default App;
```

</details>

#### Writing Markup with JSX, JavaScript in JSX with Curly Braces

<details><summary>video.css</summary>

```
.dark {
  background-color: gray;
  color: white;
}
```

</details>

<details><summary>Video.js</summary>

```
import "./Video.css";

function Video() {
  let topic = "React JS";
  let bg = "dark";
  return (
    <>
      <img src="http://placeimg.com/160/90/any" alt="Katherine Johnson" />
      <div className={bg} >    // Try : <div className={bg} style={{ backgroundColor: "red" }}>
        {topic} React JS Tutorial - Components
      </div>
    </>
  );
}

export default Video;
```

</details>

#### Passing Props to a Component

<details><summary>Video.js</summary>

```
import "./Video.css";

function Video(props) {
  let bg = "dark";
  return (
    <>
      <img src="http://placeimg.com/160/90/any" alt="Katherine Johnson" />
      <div className={bg} style={{ backgroundColor: "red" }}>
        {props.title}
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

function App() {
  return (
    <div>
      <div>Hello</div>
      <Video title="React JS tutorial"></Video>
      <Video title="Node JS tutorial"></Video>
    </div>
  );
}

export default App;
```

</details>

<details><summary>Video.js</summary>

```
import "./Video.css";

function Video({ title }) {
  let bg = "dark";
  return (
    <>
      <img src="http://placeimg.com/160/90/any" alt="Katherine Johnson" />
      <div className={bg} style={{ backgroundColor: "red" }}>
        {title}
      </div>
    </>
  );
}

export default Video;
```

</details>

---

<details><summary>App.js</summary>

```
import Video from "./components/Video";
import "./App.css";

function App() {
  return (
    <div>
      <div>Hello</div>
      <Video bgColor="red" title="React JS tutorial"></Video>
      <Video bgColor="green" title="Node JS tutorial"></Video>
    </div>
  );
}

export default App;
```

</details>

<details><summary>Video.js</summary>

```
import "./Video.css";

function Video({ title, bgColor }) {
  let bg = "dark";
  return (
    <>
      <img src="http://placeimg.com/160/90/any" alt="Katherine Johnson" />
      <div className={bg} style={{ backgroundColor: bgColor }}>
        {title}
      </div>
    </>
  );
}

export default Video;
```

</details>

Try...

<details><summary>Video.js</summary>

```
import "./Video.css";

function Video({ title, bgColor }) {
  let bg = "dark";
  bgColor = "blue";
  return (
    <>
      <img src="http://placeimg.com/160/90/any" alt="Katherine Johnson" />
      <div className={bg} style={{ backgroundColor: bgColor }}>
        {title}
      </div>
    </>
  );
}

export default Video;
```

</details>

---

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
```

</details>

<details><summary>Video.js</summary>

```
import "./Video.css";

function Video({ title, channel = "Coder Dost", views, time }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="http://placeimg.com/160/90/1" alt="Katherine Johnson" />
          <div className="title">{title}</div>
          <div className="channel">{channel}</div>
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

<details><summary>App.css</summary>

```
.App {
  background-color: #333;
  width: 100%;
  height: 100vh;
}
```

</details>

<details><summary>App.js</summary>

```
import Video from "./components/Video";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>Video</div>
      <Video
        title="React JS tutorial"
        views="10K"
        time="1 year ago"
        channel="Coder Dost"
      ></Video>
      <Video
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
      ></Video>
    </div>
  );
}

export default App;
```

</details>

---
