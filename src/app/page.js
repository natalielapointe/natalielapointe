import { Fragment } from 'react';
import Link from 'next/link'
import laptopIcon from './images/laptopIcon.svg';
import a11yIcon from './images/a11yIcon.svg';
import graphicDesignerIcon from './images/graphicDesignerIcon.svg';
import folderIcon from './images/folderIcon.svg';
import folderIconOrange from './images/folderIconOrange.svg';
import folderIconPurple from './images/folderIconPurple.svg';
import folderIconPink from './images/folderIconPink.svg';

export default function Home() {
  return (
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
  );  
};