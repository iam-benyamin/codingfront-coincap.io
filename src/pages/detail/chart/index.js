import { TableInfo } from "./style";
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import { api } from "../../../utils/api";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'right',
        },
        title: {
            display: false,
        },

    },
};

export function LineChart(coin) {
    let coinId = coin.id.id;
    const [coinInfo, setCoinInfo] = useState([])
    const [assetsHistory, setAssetsHistory] = useState([]);
    let thisCoinLowerCaseSymbol;
    let today = new Date();
    let date = today.getFullYear() + ' ' + (today.getMonth() + 1) + ' ' + today.getDate();
    useEffect(() => {
        async function getApi() {
            const responseOfHistory = await api.get(`assets/${coinId}/history?interval=d1`);
            const CoinDetail = await api.get(`assets/${coinId}`)
            setCoinInfo(CoinDetail.data.data)
            setAssetsHistory(responseOfHistory.data.data);
            thisCoinLowerCaseSymbol = coinInfo.symbol.toLowerCase()
        }
        getApi();
    }, []);

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => Math.random() * (1000)),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };
    return (
        <Fragment>
            <TableInfo >
                <div className="coin-logo">
                    <img
                        src={`https://assets.coincap.io/assets/icons/btc@2x.png`}
                    />
                </div>
                <div className="date">
                    {coinInfo.name}
                    {coinInfo.symbol}<br />
                    {date}
                </div>
                <div className="statistics">
                    <div>
                        <p>HEIGHT $39,979.86</p>
                        <p>LOW $39,535.60</p>
                    </div>
                    <div>
                        <p>AVERAGE $39,776.52</p>
                        <p>CHANGE $0.8%</p>
                    </div>
                </div>
            </TableInfo>
            <Line options={options} data={data} />
        </Fragment>
    );
}
