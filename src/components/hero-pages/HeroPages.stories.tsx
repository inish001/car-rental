import { ReactElement } from "react";
import HeroPages from "./HeroPages";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/HeroPages",
  component: HeroPages,
};

export const HeroPagesComponent = (): ReactElement => {
  return (
    <BrowserRouter>
      <HeroPages name="About" />
    </BrowserRouter>
  );
};
