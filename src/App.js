import './style.css';
 import video1 from "../src/video.mp4";
 import imageInSrc from "../src/imageInSrc.jpg";
 function App() {
  return (
<>
<div className="App"> 
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">Ben Gharbia Mhamad</h1>
  <br />
    <img src={imageInSrc} alt="imageInSrc" className="imageSrc" />
  <br />
    <img src={'/imageInPublic.jpg'} alt="imageInPublic" className="imagepublic"  />
 </div>
  <video controls autoplay src={video1}  type="video/mp4" />
</div>
</>
  );
}

export default App;
