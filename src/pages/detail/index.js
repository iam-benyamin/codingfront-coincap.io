import { DefaultLayout } from "../../components/layouts/defaultLayout";
import { useParams } from "react-router-dom";
import { Banner, Chart } from './style';
import { api } from "../../utils/api";
import { useEffect, useState } from 'react';
import { LineChart } from './chart'

export function Detail() {
    // TODO render farm 
    // TODO style date 
    // TODO chart section 
    // TODO swap section
    // TODO table section
    const coin = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [assets, setAssets] = useState([]);
    useEffect(() => {
        async function getApi() {
            setIsLoading(true);
            const response = await api.get(`assets/${coin.id}`)
            setAssets(response.data.data);
            setIsLoading(false);
        }
        getApi();
    }, []);
    return(
        <DefaultLayout>
            <div style={{display: isLoading ? "none" : "block"}}>
                <Banner>
                    <div className="container">
                        <div className="banner-content">
                            <p>{assets.rank}</p>
                            <p>{assets.name}</p>
                            <p>{assets.symbol}</p>
                            <p>{assets.priceUsd}</p>
                        </div>
                    </div>
                </Banner>
                <div className="container">
                    <Chart>
                        <LineChart />
                    </Chart>
                </div>
            </div>
        </DefaultLayout>
    )
}
