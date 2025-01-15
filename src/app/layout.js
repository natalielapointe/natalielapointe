import "./globals.scss";
import Link from 'next/link'
import folderIcon from './images/folderIcon.svg';
import folderIconOrange from './images/folderIconOrange.svg';
import folderIconPurple from './images/folderIconPurple.svg';
import folderIconPink from './images/folderIconPink.svg';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="background shimmer" style={{ display: 'none' }}>
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
            <Link href="/">
              <div className='nav-item-wrapper'>
                <img src={folderIcon} />
                <span>Home</span>
              </div>
            </Link>
            <Link href="/about-me">
              <div className='nav-item-wrapper'>
                <img src={folderIconOrange} />
                <span>About <br/> me</span>
              </div>
            </Link>
            <Link href="/resume">
              <div className='nav-item-wrapper'>
                <img src={folderIconPurple} />
                <span>Resume</span>
              </div>
            </Link>
            <Link href="/contact">
              <div className='nav-item-wrapper'>
                <img src={folderIconPink} />
                <span>Contact</span>
              </div>
            </Link>
          </nav>
        </div>
      </body>
    </html>
  );
}
