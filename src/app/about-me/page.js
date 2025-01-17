import facePhoto from '../images/face-photo.png';

export default function AboutMe() {
  return (
    <section id="aboutMe" className="background-white">
      <div className="flex-row flex-justify-center">
        <img id="facePhoto" src={facePhoto} />
        <h1 className="gradient-text text-left-align">A little <br/> about me</h1>
      </div>
      <div className="flex-column body-padding">
        <div className="body-text-font">
          Hi, I'm Natalie LaPointe, a passionate Senior Software Engineer based in Minneapolis, MN, with a strong focus on accessibility, front-end development, and creating efficient, user-friendly solutions. 
          <br/><br/>
          With a solid foundation in React, JavaScript, and component libraries, I specialize in developing intuitive, accessible, and scalable applications. I’m also certified in Accessibility (CPACC) and have a keen eye for ensuring my projects meet WCAG standards.
          <br/><br/>
          Over the years, I’ve honed my skills through diverse experiences, from creating and maintaining component libraries at Allianz Life, to enhancing online shopping experiences at Best Buy. My journey also includes founding NatKatCraftsCo, an Etsy shop where I design and sell pop culture-inspired stickers and trinkets, earning over 500 consecutive 5-star reviews.
          <br/><br/>
          Whether I’m building robust, maintainable code or curating creative designs, I’m driven by a passion for making a positive impact through technology. I enjoy collaborating with teams and continuously improving my skills to stay ahead of the ever-evolving tech landscape.
          <br/><br/>
          Feel free to browse my portfolio and reach out if you’d like to work together!
        </div>
      </div>
    </section>
  )
};

