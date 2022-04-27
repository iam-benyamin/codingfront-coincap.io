import { TableInfo, IntervalDiv } from "./style";
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
    Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import { api } from "../../../utils/api";
import { displayTime } from "../../../utils/timeDisplay";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
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
    const [assets, setAssets] = useState([]);
    const [interval, setInterval] = useState("h1");
    let today = new Date();
    let date = today.getFullYear() + ' ' + (today.getMonth() + 1) + ' ' + today.getDate();
    useEffect(() => {
        async function getApi() {
            const responseOfHistory = await api.get(`assets/${coinId}/history?interval=${interval}`);
            const CoinDetail = await api.get(`assets/${coinId}`)
            setCoinInfo(CoinDetail.data.data)
            setAssets(responseOfHistory.data.data);
        }
        getApi();
    }, [interval]);

    const labels = assets.map(item => displayTime(item.time));
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: assets.map(item => item.priceUsd),
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
            <IntervalDiv>
                <span onClick={() => {setInterval('d1')}}>1D</span>
                <span onClick={() => {setInterval('h6')}}>3M</span>
                <span onClick={() => {setInterval('d1')}}>6M</span>
                <span onClick={() => {setInterval('h6')}}>1W</span>
                <span onClick={() => {setInterval('d1')}}>1Y</span>
                <span onClick={() => {setInterval('h6')}}>ALL</span>
            </IntervalDiv>
        </Fragment>
    );
}
