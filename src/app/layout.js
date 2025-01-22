'use client'
export const dynamic = 'force-static';

import "./globals.scss";
import Link from 'next/link'
import React, { useState } from 'react';
import folderIcon from './images/folderIcon.svg';
import folderIconOrange from './images/folderIconOrange.svg';
import folderIconPurple from './images/folderIconPurple.svg';
import folderIconPink from './images/folderIconPink.svg';
import folderIconOpen from './images/folderIconOpen.svg';
import folderIconOrangeOpen from './images/folderIconOrangeOpen.svg';
import folderIconPurpleOpen from './images/folderIconPurpleOpen.svg';
import folderIconPinkOpen from './images/folderIconPinkOpen.svg';

const RootLayout = ({ children }) => {
  const [activeNav, setActiveNav] = useState('home');
  console.log(activeNav);

  return (
    <html lang="en">
      <body id="appRoot" className="background shimmer" style={{ display: 'none' }}> 
        <div className="background-pixel-grid gird-shift">
          <div className="container-wrapper">
            <div className="pixel-corners--wrapper">
              <div className="overflow">
                <div className='file-name-container shimmer'>
                  <span id="fileName" aria-hidden="true">portfolio.html</span>
                  <span className="close-button"></span>
                </div>
                {children}
              </div>
            </div>
          </div>
          <nav className="nav-wrapper">
            <Link href="/" onClick={() => setActiveNav("home")}>
              <div className='nav-item-wrapper'>
                {activeNav === "home" ? <img src={folderIconOpen} /> : <img src={folderIcon} /> }
                <span>Home</span>
              </div>
            </Link>
            <Link href="/about-me" onClick={() => setActiveNav("aboutMe")}>
              <div className='nav-item-wrapper'>
                {activeNav === "aboutMe" ? <img src={folderIconOrangeOpen} /> : <img src={folderIconOrange} /> }
                <span>About <br/> me</span>
              </div>
            </Link>
            <Link href="/resume" onClick={() => setActiveNav("resume")}>
              <div className='nav-item-wrapper'>
                {activeNav === "resume" ? <img src={folderIconPurpleOpen} /> : <img src={folderIconPurple} /> }
                <span>Resume</span>
              </div>
            </Link>
            <Link href="/contact" onClick={() => setActiveNav("contact")}>
              <div className='nav-item-wrapper'>
                {activeNav === "contact" ? <img src={folderIconPinkOpen} /> : <img src={folderIconPink} /> }
                <span>Contact</span>
              </div>
            </Link>
          </nav>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
