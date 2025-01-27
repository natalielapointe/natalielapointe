import laptopIcon from './images/laptopIcon.svg';
import a11yIcon from './images/a11yIcon.svg';
import graphicDesignerIcon from './images/graphicDesignerIcon.svg';

export default function Home() {
  return (
    <section id="home" className='background-white flex-column'>
      <h1 tabIndex="0" className="gradient-text">Natalie <br/> LaPointe</h1>
      <ul className="gradient-text padding-bottom home-list">
        <li className="title-wrapper">
          <img src={laptopIcon} alt="" />
          <span>Front End Developer</span>
        </li>
        <li className="title-wrapper">
          <img src={a11yIcon} alt=""/>
          <span>Accessibility Expert</span>
        </li>
        <li className="title-wrapper">
          <img src={graphicDesignerIcon} alt=""/>
          <span>Graphic Designer</span>
        </li>
      </ul>
    </section>
  );  
};