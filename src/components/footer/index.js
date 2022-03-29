import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Telegram } from "../icons";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="d-flex">
        <p>Copyright © <strong>Stonks Inu</strong> 2022. Version 1.0</p>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={
            <Tooltip id="tooltip">
              Go to Telegram channel
            </Tooltip>
          }
        >
          <div><Telegram width='24px' height='24px' /></div>
        </OverlayTrigger>
      </div>
    </footer>
  );
};

export default Footer;
