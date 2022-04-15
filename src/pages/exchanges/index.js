import { DefaultLayout } from "../../components/layouts/defaultLayout";
import { Banner, Table, Content, Circle, Btn } from "./style";
import { useState, useEffect } from 'react';
import { Fragment } from "react";
import { api } from "../../utils/api";

export function Exchanges() {
    const [isShowButton, setIsShowButton] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [assets, setAssets] = useState([]);
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        async function getApi() {
            setIsLoading(true);
            const response = await api.get("exchanges/", { limit: 10, offset: offset });
            setAssets(response.data.data);
            setIsLoading(false);
        }
        getApi();
    }, []);
    function renderFarm() {
        return assets.map((item) => {
            const {
                id,
                rank,
                name,
                tradingPairs,
            } = item;
            return (
                <Fragment>
                    <tr key={id}>
                        <td>{rank}</td>
                        <td className="name">{name}</td>
                        <td>{Math.round(tradingPairs * 100) / 100}</td>
                        {/* Not fount VWAP (24Hr), total status */}
                        <td>BSD/USDT</td>
                        <td>$9.6b</td>
                        <td>29.8%</td>
                        <td><Circle /></td>
                    </tr>
                </Fragment>
            );
        });
    }
    async function viewMore() {
        setOffset(offset + 10);
        const response = await api.get("exchanges/", {
          limit: 10,
          offset: offset + 10,
        });
        setAssets([...assets, ...response.data.data]);
        console.log(response.data.data);
        if(response.data.data.length < 10) {
            setIsShowButton(false);
        }
      }
    return (
        <DefaultLayout>
            <Content style={{ display: isLoading ? "none" : "" }}>
                {/* make banner as component */}
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
                                        <th>top Pair</th>
                                        <th>VWAP (24Hr)</th>
                                        <th>total</th>
                                        <th>status</th>
                                    </tr>
                                    {renderFarm()}
                                </table>
                            </div>
                        </div>
                    </Table>
                </div>
                <div className="container">
                    <div style={{height: isShowButton ? 'auto' : 50}}>
                        <Btn style={{display: isShowButton ? 'block' : 'none'}}>
                            <button onClick={viewMore}>View More</button>
                        </Btn>
                    </div>
                </div>
            </Content>
        </DefaultLayout>
    );
};