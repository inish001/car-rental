// deps
import { memo } from "react";
import { Link } from "react-router-dom";

// styles
import "./index.scss";

// constants
import { HERO_PAGES } from "../../constants/hero";

interface IHeroPages {
  name: string;
}

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
