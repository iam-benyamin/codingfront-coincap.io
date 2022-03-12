import { DefaultLayout } from "../../components/layouts/defaultLayout";
import { api } from "../../utils/api";
import { Fragment, useState, useEffect } from "react";
import { Content, Banner, Table } from "./style";

export function Home() {
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
          <tr key={id}>
            <td>{rank}</td>
            <td>{name}</td>
            <td>{symbol}</td>
            <td>{Math.round(priceUsd * 100) / 100}</td>
            <td>{Math.round(marketCapUsd * 100) / 100}</td>
            <td>{Math.round(vwap24Hr * 100) / 100}</td>
            <td>{Math.round(supply * 100) / 100}</td>
            <td>{Math.round(volumeUsd24Hr * 100) / 100}</td>
            <td>{Math.round(changePercent24Hr * 100) / 100}</td>
          </tr>
          <br />
        </Fragment>
      );
    });
  }
  return (
    <DefaultLayout>
      <Content>
        <Banner>
          <div className="container">
            <div className="column">
              <div>
                <p className="title">MARKET CAP</p>
                <p className="value">$1.80T</p>
              </div>
              <div>
                <p className="title">MARKET CAP</p>
                <p className="value">$1.80T</p>
              </div>
              <div>
                <p className="title">MARKET CAP</p>
                <p className="value">$1.80T</p>
              </div>
              <div>
                <p className="title">MARKET CAP</p>
                <p className="value">$1.80T</p>
              </div>
              <div>
                <p className="title">MARKET CAP</p>
                <p className="value">$1.80T</p>
              </div>
              <div>
                <p className="title">MARKET CAP</p>
                <p className="value">$1.80T</p>
              </div>
            </div>
          </div>
        </Banner>
        <div className="container">
          <Table>
            <thead>
              <td>rank</td>
              <td>name</td>
              <td>symbol</td>
              <td>priceUsd</td>
              <td>marketCapUsd</td>
              <td>vwap24Hr</td>
              <td>supply</td>
              <td>volumeUsd24Hr</td>
              <td>changePercent24Hr</td>
            </thead>
            <tbody>{renderFarm()}</tbody>
          </Table>
        </div>
      </Content>
    </DefaultLayout>
  );
}
