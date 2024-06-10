import Navbar from "./Navbar";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/Navbar",
  component: Navbar,
};

export const NavbarComponent = (): ReactElement => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};
