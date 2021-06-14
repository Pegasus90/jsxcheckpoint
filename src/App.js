import "./App.css";
import "./style.css";
import Video from "./video.mp4";
import imagesrc from "./imageInSrc.jpg";
function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">JSX APP</h1>
        <br />
        <img src={imagesrc} alt="imageInSrc" />
        <br />
        <img src="/imageInPublic.jpg" alt="imagepublic" />
      </div>
      <video controls src={Video} type="video/mp4" width={320} height={240} />
    </div>
  );
}

export default App;
