import { DefaultLayout } from "../../components/layouts/defaultLayout";
import { SwapStyle, Box } from "./style";

export function Swap() {
  document.title = window.location.href;
  return (
    <DefaultLayout>
      <SwapStyle>
        <Box>
          <div className="head">
            <h3>Swap</h3>
            <button>
              <i className="bi bi-gear-fill"></i>
            </button>
          </div>
          <div className="swaper-wrapper">
            <div className="sell">
              <div>
                <label>Your Sell</label>
              </div>
              <div className="sell--input">
                <input type="text" placeholder="0" />
                <button className="sell--input__button">
                  <span>
                    <img
                      src="https://assets.coincap.io/assets/icons/eth@2x.png"
                      alt="image "
                    />
                    <span>ETH</span>
                  </span>
                  <i class="bi bi-chevron-down"></i>
                </button>
              </div>
            </div>
            <div className="swap-icon">
              <img src="https://coincap.io/static/icons/shuffle.svg" />
            </div>
            <div className="get">
              <div>
                <label>Your Sell</label>
              </div>
              <div className="get--input">
                <input type="text" placeholder="0" />
                <button className="get--input__button">
                  <span className="get--input__button__span">
                    <span>select token </span>
                  </span>
                  <i class="bi bi-chevron-down"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="connect-to-wallet">
            <button>Connect Wallet</button>
          </div>
        </Box>
      </SwapStyle>
    </DefaultLayout>
  );
}
