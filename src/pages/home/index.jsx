import { DefaultLayout } from "../../components/layouts/defaultLayout";
import { api } from "../../utils/api";
import { Fragment, useState, useEffect } from "react";
import { Content, Banner, Table, Btn } from "./style";

export function Home() {
  // TODO set loading
  const [assets, setAssets] = useState([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    async function getApi() {
      const response = await api.get("assets/", { limit: 10, offset: offset });
      setAssets(response.data.data);
    }
    getApi();
  }, []);
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
          {/* TODO change values display */}
          <tr key={id}>
            <td>{rank}</td>
            <td className="name">
              <img
                src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
                alt={`coin ${name}`}
              />
              {name}
              {symbol}
            </td>
            <td>${Math.round(priceUsd * 100) / 100}</td>
            <td>${Math.round(marketCapUsd * 100) / 100}</td>
            <td>${Math.round(vwap24Hr * 100) / 100}</td>
            <td>{Math.round(supply * 100) / 100}</td>
            <td>{Math.round(volumeUsd24Hr * 100) / 100}</td>
            <td
              style={{ color: changePercent24Hr > 0 ? "#18c683" : "#f44336" }}
            >
              {Math.round(changePercent24Hr * 100) / 100}
            </td>
          </tr>
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
  }
  return (
    <DefaultLayout>
      <Content>
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
          <Btn>
            <button onClick={viewMore}>View More</button>
          </Btn>
        </div>
      </Content>
    </DefaultLayout>
  );
}
