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
            <Link to="/">Swap</Link>
          </li>
        </ul>
      </div>
      <div id="logo">
        <img src={logo} alt="logo" />
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
