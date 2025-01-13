import "./globals.scss";
import Link from 'next/link'
import folderIcon from './images/folderIcon.svg';
import folderIconOrange from './images/folderIconOrange.svg';
import folderIconPurple from './images/folderIconPurple.svg';
import folderIconPink from './images/folderIconPink.svg';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="background shimmer">
        <div className="background-pixel-grid gird-shift">
          <div className="header-wrapper">
            <div className="pixel-corners--wrapper">
              <div className='file-name-container shimmer'>
                <h2>portfolio.html</h2>
                <span className="close-button"></span>
              </div>
                {children}
            </div>
          </div>
          <div className="nav-wrapper">
            <Link href="/about-me">
              <div className='nav-item-wrapper'>
                <img src={folderIcon} />
                <h3>About <br/> Me</h3>
              </div>
            </Link>
            <Link href="/resume">
              <div className='nav-item-wrapper'>
                <img src={folderIconOrange} />
                <h3>Resume</h3>
              </div>
            </Link>
            <Link href="/shop">
              <div className='nav-item-wrapper'>
                <img src={folderIconPurple} />
                <h3>Shop</h3>
              </div>
            </Link>
            <Link href="/contact">
              <div className='nav-item-wrapper'>
                <img src={folderIconPink} />
                <h3>Contact</h3>
              </div>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
