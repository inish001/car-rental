import Navbar from "./Navbar";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/Car-Rental",
  component: Navbar,
};

export const BasicNavbar = (): ReactElement => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};
