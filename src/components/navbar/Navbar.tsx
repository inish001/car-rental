// styles
import "./index.scss";

// deps
import { useState } from "react";
import { Link } from "react-router-dom";

// type
import { IRenderTabs } from "./type";

// constants
import { NAVBAR } from "../../constants";

// icons and images
import Logo from "/assets/logo/logo.png";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = (): JSX.Element => {
  const [nav, setNav] = useState<boolean>(false);

  const openNav = () => {
    setNav(!nav);
  };

  const RenderTabs: React.FC<IRenderTabs> = ({ isMobile }): JSX.Element => {
    return (
      <>
        {NAVBAR?.tabs?.map((tab) => (
          <li key={tab?.path}>
            <Link to={tab?.path} {...(isMobile && { onClick: openNav })}>
              {tab?.label}
            </Link>
          </li>
        ))}
      </>
    );
  };

  return (
    <>
      <nav>
        {/* mobile-navbar */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <IconX width={30} height={30} />
          </div>
          <ul className="mobile-navbar__links">
            <RenderTabs isMobile={true} />
          </ul>
        </div>

        {/* desktop-navbar */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <RenderTabs isMobile={false} />
          </ul>
          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/">
              {NAVBAR.SIGN_IN}
            </Link>
            <Link className="navbar__buttons__register" to="/">
              {NAVBAR.REGISTER}
            </Link>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <IconMenu2 width={30} height={30} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
