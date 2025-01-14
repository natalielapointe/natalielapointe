import facePhoto from '../images/face-photo.png';

export default function AboutMe() {
  return (
    <div className="content-wrapper">
      <h1 className="header-name">A little <br/> about me</h1>
      <img id="facePhoto" src={facePhoto} />
    </div>
  )
};

