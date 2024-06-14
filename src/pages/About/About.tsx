// styles
import "./index.scss";

// images and icons
import { IconPhone } from "@tabler/icons-react";
import AboutMain from "/assets/about/about-main.jpg";
import Box1 from "/assets/about/icon1.png";
import Box2 from "/assets/about/icon2.png";
import Box3 from "/assets/about/icon3.png";

// components
import { Footer, HeroPages, PlanTrip } from "../../components";

// constants
import { ABOUT } from "../../constants";

const About = () => {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>{ABOUT.ABOUT_COMPANY}</h3>
              <h2>{ABOUT.COMPANY_MOTTO}</h2>
              <p>{ABOUT.COMPANY_DESC}</p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>{ABOUT.CAR_TYPES_NO}</h4>
                    <p>{ABOUT.CAR_TYPES}</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="car-icon" />
                  <span>
                    <h4>{ABOUT.RENTAL_OUTLETS_NO}</h4>
                    <p>{ABOUT.RENTAL_OUTLETS}</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="car-icon" className="last-fk" />
                  <span>
                    <h4>{ABOUT.WORKSHOPS_NO}</h4>
                    <p>{ABOUT.WORKSHOPS}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>{ABOUT.BOOK_CAR}</h2>
            <span>
              <IconPhone width={40} height={40} />
              <h3>{ABOUT.CONTACT_NO}</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
