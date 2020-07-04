import React from 'react'
import { Pie } from 'react-chartjs-2'
import styles from './GlobalChart.module.css'

const GlobalChart = ({ data: { confirmed, deaths, recovered } }) => {

    const data = {
        labels: ['Zakażeni', 'Zmarli', 'Wyleczeni'],
        datasets: [{
            data: [confirmed, deaths, recovered],
            backgroundColor: ['rgb(0, 0, 255, 0.5)', 'rgb(255, 0, 0, 0.5)', 'rgb(0, 255, 0, 0.5)'],
        }]
    };

    return (
        <div className={styles.container}>
            <Pie data={data} />
        </div>
    )
}

export default GlobalChart