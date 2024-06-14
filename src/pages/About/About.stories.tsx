import { ReactElement } from "react";
import About from "./About";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Pages/About",
  component: About,
};

export const AboutPage = (): ReactElement => {
  return (
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
};
