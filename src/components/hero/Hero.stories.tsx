import Hero from "./Hero";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const HeroComponent = (): ReactElement => {
  return (
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );
};
