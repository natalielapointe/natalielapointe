import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <nav aria-label="Main">
        <button type="button">Web</button>
        <button type="button">Art Work</button>
      </nav>
      <header>
        <h1>Natalie LaPoint</h1>
        <h2>Front End Developer</h2>
        <h2>Accessibility Expert</h2>
        <h2>Graphic Designer</h2>
      </header>
      <main>
        <div id="about-me">
          <h3>A little about me...</h3>
          <div>
            {`I'm a Twin Cities native with a passion for creating accessible, user-centered front-end experiences. I specialize in          developing and implementing robust component libraries that streamline workflows and enhance usability.

            When I'm not diving into code, you'll find me honing my artistic skills, exploring new creative techniques, and finding inspiration in the world around me.

            Accessibility and creativity are at the heart of everything I do, and I’m always excited to tackle new challenges that push the boundaries of innovation and inclusivity.`}
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
          {/* Add Code Block Here */}
        </div>
      </main>
      <footer>
        <h3>Contact Me~</h3>
        <div>
          <div>Link to LinkedIn</div>
          <div>Link to Github</div>
          <div>list email</div>
        </div>
      </footer>
    </Fragment>
  );  
};