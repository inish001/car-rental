// deps
import { memo } from "react";

// styles
import "./index.scss";

// constants
import { PLAN_TRIP } from "../../constants";

// images
import SelectCar from "/assets/plan-trip/icon1.png";
import Contact from "/assets/plan-trip/icon2.png";
import Drive from "/assets/plan-trip/icon3.png";

interface IBoxProps {
  image: string;
  title: string;
  desc: string;
}

const Box: React.FC<IBoxProps> = memo(({ image, title, desc }) => {
  return (
    <div className="plan-container__boxes__box">
      <img src={image} alt="icon_img" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
});

const PlanTrip = () => {
  return (
    <section className="plan-section">
      <div className="container">
        <div className="plan-container">
          <div className="plan-container__title">
            <h3>{PLAN_TRIP.PLAN}</h3>
            <h2>{PLAN_TRIP.EASY_RENTAL}</h2>
          </div>
          <div className="plan-container__boxes">
            <Box
              image={SelectCar}
              title={PLAN_TRIP.SELECT_CAR}
              desc={PLAN_TRIP.OUR_OFFERS}
            />
            <Box
              image={Contact}
              title={PLAN_TRIP.CONTACT}
              desc={PLAN_TRIP.CONCERNS}
            />
            <Box
              image={Drive}
              title={PLAN_TRIP.LETS_DRIVE}
              desc={PLAN_TRIP.ENSURE}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTrip;
