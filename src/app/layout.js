'use client';
export const dynamic = 'force-static';

import React, { useEffect, useState, useRef } from 'react';
import "./globals.scss";
import Link from 'next/link';
import folderIcon from './images/folderIcon.svg';
import folderIconOrange from './images/folderIconOrange.svg';
import folderIconPurple from './images/folderIconPurple.svg';
import folderIconPink from './images/folderIconPink.svg';
import folderIconOpen from './images/folderIconOpen.svg';
import folderIconOrangeOpen from './images/folderIconOrangeOpen.svg';
import folderIconPurpleOpen from './images/folderIconPurpleOpen.svg';
import folderIconPinkOpen from './images/folderIconPinkOpen.svg';

const RootLayout = ({ children }) => {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    const updatePathname = () => setPathname(window.location.pathname);
    updatePathname();
    window.addEventListener('popstate', updatePathname);
    return () => {
      window.removeEventListener('popstate', updatePathname);
    };
  }, []);

  useEffect(() => {
    const scrollableDiv = document.getElementById('scrollable-div');
    if (scrollableDiv) {
      scrollableDiv.scrollTop = 0;
    }
    console.log(document.querySelectorAll('h1'))
    document.querySelector('h1')?.focus();
  }, [pathname]);

  return (
    <html lang="en">
      <body id="appRoot" style={{ display: 'none' }}>
        <div className="app-wrapper">
          <div className="container-wrapper">
            <div className="pixel-corners--wrapper">
              <div id="scrollable-div" className="overflow">
                <div className="file-name-container shimmer">
                  <span id="fileName" aria-hidden="true">portfolio.html</span>
                  <span className="close-button"></span>
                </div>
                {children}
              </div>
            </div>
          </div>
          <nav className="nav-wrapper">
            <Link href="/" onClick={() => setPathname("/")}>
              <div className="nav-item-wrapper">
                {pathname === "/" ? <img src={folderIconOpen} /> : <img src={folderIcon} />}
                <span>Home</span>
              </div>
            </Link>
            <Link href="/about-me" onClick={() => setPathname("/about-me")}>
              <div className="nav-item-wrapper">
                {pathname === "/about-me" ? <img src={folderIconOrangeOpen} /> : <img src={folderIconOrange} />}
                <span>About <br /> me</span>
              </div>
            </Link>
            <Link href="/resume" onClick={() => setPathname("/resume")}>
              <div className="nav-item-wrapper">
                {pathname === "/resume" ? <img src={folderIconPurpleOpen} /> : <img src={folderIconPurple} />}
                <span>Resume</span>
              </div>
            </Link>
            <Link href="/contact" onClick={() => setPathname("/contact")}>
              <div className="nav-item-wrapper">
                {pathname === "/contact" ? <img src={folderIconPinkOpen} /> : <img src={folderIconPink} />}
                <span>Contact</span>
              </div>
            </Link>
          </nav>
        </div>
        <div className="background-pixel-grid gird-shift"></div>
        <div className="background shimmer"></div>
      </body>
    </html>
  );
};

export default RootLayout;
