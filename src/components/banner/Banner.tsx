// constants
import { BANNER } from "../../constants";

// styles
import "./index.scss";

const Banner = () => {
  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="banner-content">
            <div className="banner-content__text">
              <h2>{BANNER.SAVE_BIG}</h2>
              <p>
                {BANNER.TOP_SUPPLIERS} {BANNER.GET}{" "}
                <span>{BANNER.ALL_DAY}</span> {BANNER.SUPPORT}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
