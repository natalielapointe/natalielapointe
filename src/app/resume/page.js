export default function Resume() {
  return (
    <div className="background-white" id="resume">
      <section id="experience">
        <h1 className="gradient-text" >Experience</h1>
        <div className="body-padding body-text-font">
          <article>
            <h2>Senior Software Engineer</h2>
            <p>
              <strong>Allianz Life</strong>
              | Golden Valley, MN |
              <time datetime="2022-05">May 2022</time>–<time datetime="2023-08">August 2023</time>
            </p>
            <ul>
              <li>Created and maintained Allianz Life’s component library AXL-UI using React, Pattern Lab, and SCSS.</li>
              <li>Led the accessibility team to coordinate accessibility issues, auditing, and learning opportunities.</li>
              <li>Tested and audited components to ensure compliance with WCAG standards.</li>
              <li>Developed customer-facing calculators using React.</li>
            </ul>
          </article>

          <article>
            <h2>Owner</h2>
            <p>
              <strong>NatKatCraftsCo</strong>
              | Etsy | Minneapolis, MN |
              <time datetime="2020-06">June 2020</time>–Present</p>
            <ul>
              <li>Creating and selling stickers and trinkets based on pop culture and original designs.</li>
              <li>Achieved over 500 consecutive 5-star reviews since opening.</li>
              <li>Fulfilled over 2,000 orders.</li>
            </ul>
          </article>

          <article>
            <h2>Front End Developer II</h2>
            <p>
              <strong>Best Buy</strong>
              | Richfield, MN |
              <time datetime="2019-07">July 2019</time>–<time datetime="2020-01">January 2020</time>
            </p>
            <ul>
              <li>Improved online shopping experience for Best Buy customers across multiple teams using React.</li>
              <li>Created new Cypress end-to-end tests to ensure stability.</li>
            </ul>
          </article>

          <article>
            <h2>Software Engineer</h2>
            <p>
              <strong>Allianz Life</strong>
              | Golden Valley, MN |
              <time datetime="2017-10">October 2017</time>–<time datetime="2019-07">July 2019</time>
            </p>
            <ul>
              <li>Created and maintained multiple component libraries for Allianz properties using React, Pattern Lab, and SCSS.</li>
              <li>Established development and accessibility standards for the component library.</li>
              <li>Developed consumer and business calculators using React and Mobx.</li>
            </ul>
          </article>

          <article>
            <h2>Software Engineer</h2>
            <p>
              <strong>RAZR Marketing</strong>
              | Minnetonka, MN |
              <time datetime="2016-09">September 2016</time>–<time datetime="2017-08">August 2017</time>
            </p>
            <ul>
              <li>Built Angular component library for RAZR developers to streamline development processes.</li>
              <li>Led front-end development for templatizing US Bank’s rewards site using Angular and PHP.</li>
            </ul>
          </article>

          <article>
            <h2>Front End Design Intern</h2>
            <p>
              <strong>SportsEngine</strong>
              | Minneapolis, MN |
              <time datetime="2016-05">May 2016</time>–<time datetime="2016-08">August 2016</time>
            </p>
          </article>
        </div>
      </section>

    </div>
  )
};
