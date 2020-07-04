import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'
import styles from './CountryChart.module.css'

const CountryChart = ({ countryData }) => {
    if (!countryData) return <div className={styles.noInfo}> Brak danych :( </div>

    const data = {
        labels: ['Zakażeni ludzie', 'Wyleczeni ludzie', 'Zmarli ludzie'],
        datasets: [
            {
                label: countryData.countryName,
                backgroundColor: ['rgb(0, 0, 255, 0.5)', 'rgb(0, 255, 0, 0.5)', 'rgb(255, 0, 0, 0.5)'],
                borderWidth: 1,
                hoverBackgroundColor: ['rgb(0, 0, 200, 0.8)', 'rgb(0, 200, 0, 0.8)', 'rgb(200, 0, 0, 0.8)'],
                hoverBorderColor: ['rgb(0, 0, 200, 0.8)', 'rgb(0, 200, 0, 0.8)', 'rgb(200, 0, 0, 0.8)'],
                data: [countryData.confirmed, countryData.recovered, countryData.deaths]
            }
        ]
    };
    return (
        <div className={styles.container}>
            <HorizontalBar data={data} />
        </div>
    )
}

export default CountryChart