import "./index.scss";
import { memo } from "react";
import { IHeroPages } from "./type";
import { Link } from "react-router-dom";
import { HERO_PAGES } from "../../constants/hero";

const HeroPages: React.FC<IHeroPages> = ({ name }) => {
  return (
    <section className="hero-pages">
      <div className="hero-pages__overlay"></div>
      <div className="container">
        <div className="hero-pages__text">
          <h3>{name}</h3>
          <p>
            <Link to="/">{HERO_PAGES.HOME}</Link> / {name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroPages);
