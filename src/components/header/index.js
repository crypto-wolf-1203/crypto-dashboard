import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./index.scss";
import Logo from "../../assets/images/logo.png"
import { Wallet } from "../icons";

const Header = () => {
  const navigate = useNavigate();
  const bnb = 'https://assets.coingecko.com/coins/images/12591/large/binance-coin-logo.png?1600947313';
  const meo = 'https://assets.coingecko.com/coins/images/18620/large/logo_200x200_%283%29.png?1632701201';

  return (
    <header className="container-fluid">
      <Navbar>
        <Navbar.Brand className="logo" href="/">
          <img src={Logo} alt='logo' />
          <h6>Stonks Inu</h6>
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link>
            <div className="token d-flex align-items-center">
              <img src={bnb} alt='bnb' />
              <span>BNB</span>
            </div>
            <span>${400.7504}</span>
          </Nav.Link>
          {/* <Nav.Link>
            <div className="token d-flex align-items-center">
              <img src={meo} alt='bnb' />
              <span>MEO</span>
            </div>
            <span>${400.7504}</span>
          </Nav.Link> */}
          <hr className="divider" />
          <Nav.Link>
            <Wallet width='30px' height='30px' />
          </Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;