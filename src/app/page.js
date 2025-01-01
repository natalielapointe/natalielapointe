import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <div className="background-pixel-grid gird-shift">
        <div className="header-wrapper">
          <div className="pixel-corners--wrapper">
          <div className='file-name-container shimmer'>
            <h2>portfolio.js</h2>
          </div>
            <div className='header-content-wrapper'>
              <h1 className="header-name">Natalie <br/> LaPointe</h1>
              <div className="header-titles">
                <h2>Front End Developer</h2>
                <h2>Accessibility Expert</h2>
                <h2>Graphic Designer</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <main>
        <div id="about-me">
          <h3>A little about me...</h3>
          <div>
            {`Hi there! 👋 I’m a Twin Cities local with a huge passion for crafting front-end experiences that are not just beautiful, but accessible and user-friendly, too. Think clean, intuitive interfaces and robust component libraries that make workflows smoother than buttery scroll performance at 60fps.

            When I’m not lost in a sea of code (or cheering when things finally work 🎉), you’ll catch me flexing my creative muscles—whether it’s sketching, experimenting with new artistic techniques, or soaking up inspiration from the world around me.

            For me, creativity and accessibility go hand-in-hand, and I’m always ready to jump into exciting challenges that redefine what’s possible. Let’s build something innovative, inclusive, and just plain awesome together! 🚀`}
          </div>
        </div>
        <div id="work-experience">
          <h3>Work Experience</h3>
          <h4>Allianz Life</h4>
          <h5>Senior Software Engineer</h5>
          <h5>May 2022-August 2023</h5>
          <div>
            <ul>
              <li>Created and maintained Allianz Life’s component library AXL-UI.</li>
              <li>Led the accessibility team to coordinate accessibility issues, auditing, and learning opportunities.</li>
              <li>Tested and audited components to ensure compliance with WCAG standards.</li>
              <li>Developed customer-facing calculators.</li>
            </ul>
          </div>
          <span>Add Code Block Here</span>
        </div>
      </main> */}
      {/* <footer>
        <h3>Contact Me~</h3>
        <div>
          <div>Link to LinkedIn</div>
          <div>Link to Github</div>
          <div>list email</div>
        </div>
      </footer> */}
    </Fragment>
  );  
};