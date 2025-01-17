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
              <time dateTime="2022-05">May 2022</time>–<time dateTime="2023-08">August 2023</time>
            </p>
            <ul>
              <li>Created and maintained Allianz Life’s component library <a href="https://www.axl-ui.com/?path=/docs/introduction--docs">AXL-UI</a> using React, Pattern Lab, and SCSS.</li>
              <li>Led the accessibility team to coordinate accessibility issues, auditing, and learning opportunities.</li>
              <li>Tested and audited components to ensure compliance with WCAG standards.</li>
              <li>Developed customer-facing calculators using React.</li>
            </ul>
          </article>

          <article>
            <h2>Owner</h2>
            <p>
              <strong><a href="https://www.etsy.com/shop/NatKatCraftsCo?ref=seller-platform-mcnav">NatKatCraftsCo</a></strong>
              | Etsy | Minneapolis, MN |
              <time dateTime="2020-06">June 2020</time>–Present</p>
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
              <time dateTime="2019-07">July 2019</time>–<time dateTime="2020-01">January 2020</time>
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
              <time dateTime="2017-10">October 2017</time>–<time dateTime="2019-07">July 2019</time>
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
              <time dateTime="2016-09">September 2016</time>–<time dateTime="2017-08">August 2017</time>
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
              <time dateTime="2016-05">May 2016</time>–<time dateTime="2016-08">August 2016</time>
            </p>
            <ul>
              <li>Developed and updated clients' sites through SportsEngine’s CMS.</li>
              <li>Produced a fully custom site template for <a href="https://www.waya.org/">West Austin Youth Association (WAYA).</a></li>
              <li>Collaborated with a small team to creatively solve problems on a complex code base.</li>
            </ul>
          </article>
        </div>
      </section>

    </div>
  )
};
