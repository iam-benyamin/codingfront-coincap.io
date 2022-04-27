import { DefaultLayout } from "components/layouts/defaultLayout";
import { useParams } from "react-router-dom";
import { Banner, Chart, Swap, StyleData, Table, Btn, Circle } from './style';
import { api } from "utils/api";
import { Fragment, useEffect, useState } from 'react';
import { abbreviateNumber } from "utils/abbreviateNumber";
import { LineChart } from "./chart";

export function Detail() {
    const coin = useParams();
    const [isShowButton, setIsShowButton] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [assetsId, setAssetsId] = useState([]);
    const [assets, setAssets] = useState([]);
    const [offset, setOffset] = useState(0);
    document.title = `${assetsId.name} (${assetsId.symbol}) | CoinCap.io`
    useEffect(() => {
        async function getApi() {
            setIsLoading(true);
            const response = await api.get(`assets/${coin.id}`);
            setAssetsId(response.data.data);
        }
        async function getApiMarkets() {
            const response = await api.get("exchanges/", { limit: 20, offset: offset });
            setAssets(response.data.data);
            setIsLoading(false);
        }
        getApi();
        getApiMarkets();
    }, []);
    function renderFarm() {
        return assets.map((item) => {
            const {
                id,
                name,
                tradingPairs,
                percentTotalVolume,
                volumeUsd,
            } = item;
            return (
                <Fragment>
                    <tr key={id}>
                        <td className="name">{name}</td>
                        <td>{tradingPairs > 0 ? `${Math.round(tradingPairs * 100) / 100}$` : "0"}</td>
                        <td>{tradingPairs > 0 ? `BSD/USDT` : "N/A"}</td>
                        <td>{tradingPairs > 0 ? `${abbreviateNumber(Math.round(volumeUsd * 100) / 100)}` : "-"}</td>
                        <td>{tradingPairs > 0 ? `${Math.round(percentTotalVolume * 100) / 100}%` : "-"}</td>
                        <td><Circle style={{ background: tradingPairs > 0 ? "#18c683" : "#f44336" }} /></td>
                    </tr>
                </Fragment>
            );
        });
    }
    async function viewMore() {
        setOffset(offset + 20);
        const response = await api.get("assets/", {
            limit: 20,
            offset: offset + 20,
        });
        setAssets([...assets, ...response.data.data]);
        if (response.data.data.length < 20) {
            setIsShowButton(false);
        }
    }
    return (
        <DefaultLayout>
            <div style={{ display: isLoading ? "none" : "block" }}>
                <Banner>
                    <div className="container">
                        <div className="banner-content">
                            <div className="coin-rank">
                                <span className="hat">   </span>
                                <span>{assetsId.rank}</span>
                                <p>rank</p>
                            </div>
                            <div className="coin">
                                <p>{assetsId.name}({assetsId.symbol})</p>
                                <p>${Math.round(assetsId.priceUsd * 100) / 100}
                                    <span
                                        style={{ color: assetsId.changePercent24Hr > 0 ? "#18c683" : "#f44336" }}
                                    >
                                        {Math.round(assetsId.changePercent24Hr * 100) / 100}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p>Market Cap</p>
                                <span>${abbreviateNumber(Math.round(assetsId.marketCapUsd * 100) / 100)}</span><br />
                                <Btn>
                                    <button>Website</button>
                                </Btn>
                            </div>
                            <div>
                                <p>Volume (24Hr)</p>
                                <span>${abbreviateNumber(Math.round(assetsId.volumeUsd24Hr * 100) / 100)}</span><br />
                                <Btn>
                                    <button>Explore</button>
                                </Btn>
                            </div>
                            <div>
                                <p>supply</p>
                                <span>{abbreviateNumber(Math.round(assetsId.supply * 100) / 100)}{assetsId.symbol}</span>
                            </div>
                        </div>
                    </div>
                </Banner>
                <div className="container">
                    <StyleData>
                        <Chart>
                            <LineChart id={coin} />
                        </Chart>
                        <Swap>
                            <div className="head">
                                <h3>Swap</h3>
                                <button>
                                    <i className="bi bi-gear-fill"></i>
                                </button>
                            </div>
                            <div className="swaper-wrapper">
                                <div className="sell">
                                    <div ><label>Your Sell</label></div>
                                    <div className="sell--input">
                                        <input type="text" placeholder="0" />
                                        <button className="sell--input__button">
                                            <span>
                                                <img src="https://assets.coincap.io/assets/icons/eth@2x.png" alt="image " />
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
                                    <div><label>Your Sell</label></div>
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
                        </Swap>
                    </StyleData>
                </div>
                <div style={{ borderTop: "1px solid #d4d4d5", background: "#eceff1" }}>
                    <div className="container">
                        <Table>
                            <div className="container">
                                <div className="content">
                                    <table>
                                        <tr>
                                            <td>Exchange</td>
                                            <td>Price</td>
                                            <td>Pair</td>
                                            <td>Volume (24Hr)</td>
                                            <td>Volume (%)</td>
                                            <td>Status</td>
                                        </tr>
                                        {renderFarm()}
                                    </table>
                                </div>
                            </div>
                        </Table>
                    </div>
                    <div className="container">
                        <div style={{ height: isShowButton ? "auto" : 50, textAlign: "center" }}>
                            <Btn style={{ display: isShowButton ? "block" : "none" }}>
                                <button onClick={viewMore}>View More</button>
                            </Btn>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}
