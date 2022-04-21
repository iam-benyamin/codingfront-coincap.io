import { DefaultLayout } from "../../components/layouts/defaultLayout";
import { api } from "../../utils/api";
import { Fragment, useState, useEffect, useRef } from "react";
import { Content, Banner, Table, Btn } from "./style";
import { abbreviateNumber } from "../../utils/abbreviateNumber";
import { Link } from "react-router-dom";

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [assets, setAssets] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isShowButton, setIsShowButton] = useState(true);
  const [coinDetailDisplay, setCoinDetailDisplay] = useState("none");
  document.title =
    "CoinCap.io | Reliable Cryptocurrency Prices and Market Capitalizations";
  useEffect(() => {
    async function getApi() {
      setIsLoading(true);
      const response = await api.get("assets/", { limit: 10, offset: offset });
      setAssets(response.data.data);
      setIsLoading(false);
    }
    getApi();
  }, []);
  const showCoinDetail = () => {
    setCoinDetailDisplay(coinDetailDisplay == "block" ? "none" : "block");
  };
  function renderFarm() {
    return assets.map((item) => {
      const {
        id,
        rank,
        name,
        symbol,
        priceUsd,
        marketCapUsd,
        vwap24Hr,
        supply,
        volumeUsd24Hr,
        changePercent24Hr,
      } = item;
      return (
        <Fragment>
          <tr key={id} onClick={showCoinDetail}>
            <td>{rank}</td>
            <td className="name">
              <div className="coin-logo">
                <img
                  src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
                  alt={`coin ${name}`}
                />
              </div>
              <Link className="name-content" to={`/assets/${id}`}>
                <span>{name}</span>
                <br />
                <span className="symbol">{symbol}</span>
              </Link>
            </td>
            <td>${Math.round(priceUsd * 100) / 100}</td>
            <td>${abbreviateNumber(Math.round(marketCapUsd * 100) / 100)}</td>
            <td>${Math.round(vwap24Hr * 100) / 100}</td>
            <td>{abbreviateNumber(Math.round(supply * 100) / 100)}</td>
            <td>{abbreviateNumber(Math.round(volumeUsd24Hr * 100) / 100)}</td>
            <td
              style={{ color: changePercent24Hr > 0 ? "#18c683" : "#f44336" }}
            >
              {Math.round(changePercent24Hr * 100) / 100}
            </td>
          </tr>
          <tr
            id="coin-detail"
            style={{
              display: coinDetailDisplay,
              background: "brown",
              height: 50,
            }}
          ></tr>
        </Fragment>
      );
    });
  }
  async function viewMore() {
    setOffset(offset + 10);
    const response = await api.get("assets/", {
      limit: 10,
      offset: offset + 10,
    });
    setAssets([...assets, ...response.data.data]);
    if (response.data.data.length < 10) {
      setIsShowButton(false);
    }
  }
  return (
    <DefaultLayout>
      <Content style={{ display: isLoading ? "none" : "" }}>
        <Banner>
          {/* TODO dynamick banner values */}
          <div className="container">
            <div className="column">
              <div>
                <p className="title">MARKET CAP</p>
                <p className="value">$1.80T</p>
              </div>
              <div>
                <p className="title">EXCHANGE VOL</p>
                <p className="value">$60.62B</p>
              </div>
              <div>
                <p className="title">ASSETS</p>
                <p className="value">2,295</p>
              </div>
              <div>
                <p className="title">EXCHANGES</p>
                <p className="value">73</p>
              </div>
              <div>
                <p className="title">MARKETS</p>
                <p className="value">17,282</p>
              </div>
              <div>
                <p className="title">BTC DOM INDEX</p>
                <p className="value">41.0%</p>
              </div>
            </div>
          </div>
        </Banner>
        <div className="container">
          {/* TODO sort functionality */}
          <Table>
            <div className="container">
              <div className="content">
                <table>
                  <tr>
                    <th>rank</th>
                    <th>name</th>
                    <th>price</th>
                    <th>market Cap</th>
                    <th>VWAP (24Hr)</th>
                    <th>supply</th>
                    <th>Volume (24Hr)</th>
                    <th>Change (24Hr)</th>
                  </tr>
                  {renderFarm()}
                </table>
              </div>
            </div>
          </Table>
        </div>
        <div className="container">
          <div style={{ height: isShowButton ? "auto" : 50 }}>
            <Btn style={{ display: isShowButton ? "block" : "none" }}>
              <button onClick={viewMore}>View More</button>
            </Btn>
          </div>
        </div>
      </Content>
    </DefaultLayout>
  );
}
