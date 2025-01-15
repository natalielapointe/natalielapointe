import laptopIcon from './images/laptopIcon.svg';
import a11yIcon from './images/a11yIcon.svg';
import graphicDesignerIcon from './images/graphicDesignerIcon.svg';

export default function Home() {
  return (
    <div className='background-white flex-column'>
      <h1 className="gradient-text">Natalie <br/> LaPointe</h1>
      <div className="gradient-text padding-bottom">
        <span className="title-wrapper">
          <img src={laptopIcon} />
          <h2>Front End Developer</h2>
        </span>
        <span className="title-wrapper">
          <img src={a11yIcon} />
          <h2>Accessibility Expert</h2>
        </span>
        <span className="title-wrapper">
          <img src={graphicDesignerIcon} />
          <h2>Graphic Designer</h2>
        </span>
      </div>
    </div>
  );  
};