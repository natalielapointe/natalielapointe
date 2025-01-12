import { Fragment } from 'react';
import laptopIcon from './images/laptopIcon.svg';
import a11yIcon from './images/a11yIcon.svg';
import graphicDesignerIcon from './images/graphicDesignerIcon.svg';
import folderIcon from './images/folderIcon.svg';
import folderIconOrange from './images/folderIconOrange.svg';
import folderIconPurple from './images/folderIconPurple.svg';
import folderIconPink from './images/folderIconPink.svg';
import MyComponent from './about-me.js';


export default function Home() {
  return (
    <Fragment>
      <MyComponent />
      <div className="background-pixel-grid gird-shift">
        <div className="header-wrapper">
          <div className="pixel-corners--wrapper">
          <div className='file-name-container shimmer'>
            <h2>portfolio.html</h2>
            <span className="close-button"></span>
          </div>
            <div className='header-content-wrapper'>
              <div className="header-name-wrapper">
                <h1 className="header-name">Natalie <br/> LaPointe</h1>
              </div>
              <div className="header-titles">
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
          </div>
        </div>
        <div className="nav-wrapper">
          <div className='nav-item-wrapper'>
            <img src={folderIcon} />
            <h3>About <br/> Me</h3>
          </div>
          <div className='nav-item-wrapper'>
            <img src={folderIconOrange} />
            <h3>Resume</h3>
          </div>
          <div className='nav-item-wrapper'>
            <img src={folderIconPurple} />
            <h3>Shop</h3>
          </div>
          <div className='nav-item-wrapper'>
            <img src={folderIconPink} />
            <h3>Contact</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );  
};