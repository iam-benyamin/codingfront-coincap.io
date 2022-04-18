import { Fragment } from 'react';
import { Line } from 'react-chartjs-2';

const state = {
    labels: ['65', '59', '80', '81', '56', '82', '19', '25', '82', '92', '32', '53', '65', '74', '15'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56, 82, 19, 25, 82, 92, 32, 53, 65, 74, 15]
        }
    ]
}


export const LineChart = () => {
    return (
        <Fragment>
            <div >
                <Line
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        </Fragment>
    )
}