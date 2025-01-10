import { Fragment } from 'react';
import Image from "next/image";
import folderIcon from '../../public/folderIcon.svg';
// import pixelStar from '../../public/pixelStar.svg';

export default function Home() {
  return (
    <Fragment>
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
                  <Image width={24} height={24} src="/laptopIcon.png" alt="" />
                  <h2>Front End Developer</h2>
                </span>
                <span className="title-wrapper">
                  <img width={24} height={24} src="/a11yIcon.png" alt="" />
                  <h2>Accessibility Expert</h2>
                </span>
                <span className="title-wrapper">
                  <Image width={24} height={24} src="/graphicDesignerIcon.png" alt="" />
                  <h2>Graphic Designer</h2>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-wrapper">
          <div className='nav-item-wrapper'>
            <img src='/folderIcon.svg' />
            <h3>About <br/> Me</h3>
          </div>
          <div className='nav-item-wrapper'>
            <img src='/folderIconOrange.svg' />
            <h3>Resume</h3>
          </div>
          <div className='nav-item-wrapper'>
            <img src='/folderIconPurple.svg' />
            <h3>Shop</h3>
          </div>
          <div className='nav-item-wrapper'>
            <img src='/folderIconPink.svg' />
            <h3>Contact</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );  
};