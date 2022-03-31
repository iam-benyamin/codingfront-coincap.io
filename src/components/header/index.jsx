import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { HeaderDiv } from "./style";

export function Header() {
  return (
    <HeaderDiv>
      <div id="menu">
        <ul>
          <li>
            <Link to="/">Coins</Link>
          </li>
          <li>
            <Link to="/">Exchanges</Link>
          </li>
          <li>
            <Link to="/swap">Swap</Link>
          </li>
        </ul>
      </div>
      <div id="logo">
        <a href="https://coincap.io/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div id="buttons">
        <button>
          <i className="bi bi-search"></i>
        </button>
        <button>
          <i className="bi bi-gear-fill"></i>
        </button>
        <button>Connect Wallet</button>
      </div>
    </HeaderDiv>
  );
}
