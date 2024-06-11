// styles
import "./index.scss";

// deps
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// images and icons
import BgShape from "/assets/hero/hero-bg.png";
import HeroCar from "/assets/hero/BMW.avif";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";

// constants
import { HERO } from "../../constants/hero";

const Hero = () => {
  const [goUp, setGoUp] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <img className="bg-shape" src={BgShape} alt="bg-shape" />
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>{HERO.PLAN_TRIP}</h4>
              <h1>
                {HERO.SAVE} <span>{HERO.BIG}</span> {HERO.OUR_RENTALS}
              </h1>
              <p>{HERO.DESC}</p>
              <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  {HERO.BOOK_RIDE} &nbsp; <IconCircleCheck />
                </Link>
                <Link className="hero-content__text__btns__learn-more" to="/">
                  {HERO.FIND_MORE} &nbsp; <IconChevronRight />
                </Link>
              </div>
            </div>

            <img
              src={HeroCar}
              alt="car-img"
              className="hero-content__car-img"
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          ^
        </div>
      </section>
    </>
  );
};

export default Hero;
