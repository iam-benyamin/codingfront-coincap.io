import { Link } from "react-router-dom";
import { Style } from "./style";
import appleStore from "assets/images/appleStore.svg";

export function Footer() {
  return (
    <div style={{background: "linear-gradient(90deg, rgba(63, 81, 181, 1) 0%, rgba(100, 181, 246, 1) 100%)"}}>
      <div className="container">
        <Style>
          <div className="col">
            <h4>COINCAP.IO</h4>
            <ul>
              <li>
                <Link to="/methodology">Methodology</Link>
              </li>
              <li>
                <a href="https://shapeshift.zendesk.com/hc/en-us/requests/new">Support</a>
              </li>
              <li>
                <a href="https://docs.coincap.io/">Our API</a>
              </li>
              <li>
                <Link to="/rate-compare">Rate Comparision</Link>
              </li>
              <li>
                <a href="https://shapeshift.com/careers?_ga=2.223084955.1809366574.1645875692-199164662.1643960911">Careers</a>
              </li>
            </ul>
          </div>
          <div className="col legals-disclimer">
            <h4>LEGALS</h4>
            <ul>
              <li>
                {/* Download PDF */}
                <a href="https://assets.coincap.io/documents/terms_of_service.pdf">Terms of Service</a>
              </li>
              <li>
                <a href="https://shapeshift.com/privacy?_ga=2.193726509.1809366574.1645875692-199164662.1643960911">Privacy Policy</a>
              </li>
            </ul>
            <h4>DISCLAIMER</h4>
            <span>
              Neither ShapeShift AG nor CoinCap are in any way associated with
              CoinMarketCap, LLC or any of its goods and services.
            </span>
          </div>
          <div className="col social-media">
            <h4>FOLLOW US</h4>
            {/* put next two icon in single line */}
            <ul>
              <li>
                <a href="https://twitter.com/CoinCap_io">
                  <i class="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/coincapmarketdata/videos/365220420785166/">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col get-app">
            <h4>COINCAP APP AVAILABLE ON</h4>
            <a href="https://itunes.apple.com/us/app/coincap/id1074052280?mt=8&ign-mpt=uo%3D4">
              <img src={appleStore} alt="apple store banner link" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=io.coinCap.coinCap">
              <img src="https://coincap.io/static/images/stores/google_play.svg" alt="google app store banner link" />
            </a>
          </div>
        </Style>
      </div>
    </div>
  );
}
