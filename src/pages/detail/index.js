import { DefaultLayout } from "../../components/layouts/defaultLayout";
import { useParams } from "react-router-dom";
import { Banner, Chart, Swap, StyleData, Table, Btn, Circle } from './style';
import { api } from "../../utils/api";
import { Fragment, useEffect, useState } from 'react';

export function Detail() {
    // TODO chart section
    const coin = useParams();
    const [isShowButton, setIsShowButton] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [assetsId, setAssetsId] = useState([]);
    const [assets, setAssets] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        async function getApi() {
            const response = await api.get(`assets/${coin.id}`);
            setAssetsId(response.data.data);
        }
        async function getApiMarkets() {
            const response = await api.get(`assets/${coin.id}/markets/`, { limit: 20, offset: offset })
            setAssets(response.data.data);
        }
        setIsLoading(true);
        getApi();
        getApiMarkets();
        setIsLoading(false);
    }, []);
    function renderFarm() {
        return assets.map((item) => {
            const {
                id,
                exchangeId,
            } = item;
            return (
                <Fragment>
                    <tr key={id}>
                        <td>{exchangeId}</td>
                        <td>$1,826.83</td>
                        <td>USDT/BTC</td>
                        <td>$182,826.83</td>
                        <td>17%</td>
                        <td><Circle style={{ background: 1 > 0 ? "#18c683" : "#f44336" }} /></td>
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
    console.log(`assets id`)
    console.log(assetsId)
    console.log(`assets`)
    console.log(assets)
    return (
        <DefaultLayout>
            <div style={{ display: isLoading ? "none" : "block" }}>
                <Banner>
                    <div className="container">
                        <div className="banner-content">
                            <p>{assetsId.rank}</p>
                            <p>{assetsId.name}</p>
                            <p>{assetsId.symbol}</p>
                            <p>{assetsId.priceUsd}</p>
                        </div>
                    </div>
                </Banner>
                <div className="container">
                    <StyleData>
                        <Chart>
                            {/* <LineChart /> */}
                        </Chart>
                        <Swap>
                            <div className="head">
                                <h3>Swap</h3>
                                <button>
                                    <i className="bi bi-gear-fill"></i>
                                </button>
                            </div>
                            {/* TODO make this input dynamic */}
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
