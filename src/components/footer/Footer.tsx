import { FOOTER } from "../../constants";
import "./index.scss";
import { IconMail, IconPhoneCall } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>{FOOTER.CAR}</span> {FOOTER.RENTAL}
              </li>
              <li>{FOOTER.DESC}</li>
              <li>
                <a
                  href="tel:123456789"
                  className="footer-content__icon-container"
                >
                  <IconPhoneCall /> &nbsp; {FOOTER.CONTACT}
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental@gmail.com"
                  className="footer-content__icon-container"
                >
                  <IconMail />
                  &nbsp; {FOOTER.EMAIL}
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>{FOOTER.COMPANY}</li>
              {FOOTER?.COMPANY_TAB?.map((tab) => {
                return (
                  <li>
                    <a href="#home">{tab}</a>
                  </li>
                );
              })}
            </ul>

            <ul className="footer-content__2">
              {FOOTER.WORKING_HOURS.map((data) => (
                <li>{data}</li>
              ))}
            </ul>

            <ul className="footer-content__2">
              <li>{FOOTER.SUBSCRIPTION}</li>
              <li>
                <p>{FOOTER.SUBSCRIPTION_MSG}</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">{FOOTER.SUBMIT}</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
