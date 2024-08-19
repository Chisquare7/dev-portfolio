import "./about.css";
import webdev from "../../img/webdev.jpg";
import fullstackcert from "../../img/zuri_fullstack.png";
import sidehustlecert from "../../img/side_hustle.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about_left">
        <div className="about_card big"></div>
        <div className="about_card">
          <img src={webdev} alt="" className="about_image" />
        </div>
      </div>
      <div className="about_right">
        <h1 className="about_title">About Me</h1>
        <p className="about_content">
          I am a Fullstack Developer with extensive experience in both frontend
          and backend development. My passion lies in creating immersive and
          beautiful web experiences through user-centric design. Whether it's
          small business sites or rich interactive web applications, I enjoy
          building solutions that resonate with users.
        </p>
        <p className="about_content about_second">
          If you are a business seeking a strong web presence or an employer
          looking to hire, feel free to get in touch with me.
        </p>
        <div className="about_cert">
          <img src={fullstackcert} alt="pythoncert" className="cert_img" />
          <div className="cert_texts">
            <h4 className="cert_title">
              I4G & Zuri Training Certification of Completion - Fullstack
              Development
            </h4>
            <p className="cert_desc">
              Certificate awarded for participating in Fullstack Web Development
              Training
            </p>
          </div>
        </div>
        <div className="about_cert">
          <img src={sidehustlecert} alt="awscert" className="cert_img" />
          <div className="cert_texts">
            <h4 className="cert_title">
              SideHustle Certification of Completion for Frontend Web
              Development - ReactJS
            </h4>
            <p className="cert_desc">
              Certificate awarded for participating in Frontend Web Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
