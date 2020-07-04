import React, { useState, useEffect } from 'react'
import { fetchData, fetchCountry } from './api/api'
import { GlobalChart, Cards, CountryChart, CountryPicker } from './components'
import styles from './App.module.css'

const App = () => {
    const [data, setData] = useState([])
    const [showGlobalInfo, setShowGlobalInfo] = useState(false)
    const [country, setCountry] = useState('')
    const [countryData, setCountryData] = useState([])

    const fetchAllData = async () => {
        setData(await fetchData())
    }

    useEffect(() => {
        fetchAllData()
    }, [])

    const fetchCountryData = async (country) => {
        setCountryData(await fetchCountry(country))
    }

    useEffect(() => {
        fetchCountryData(country)
    }, [country])

    const changeView = () => {
        setShowGlobalInfo(!showGlobalInfo)
    }

    const handleCountry = (country) => {
        setCountry(country)
        fetchCountry(country)
    }



    return (
        <div className={styles.container}>
            <button className={styles.swapButton} onClick={changeView}>Zmień widok</button>
            {showGlobalInfo ?
                <div className={styles.globalContainer}><Cards data={data} />
                    <GlobalChart data={data} /></div>
                :
                <div className={styles.countryContainer}>
                    <CountryPicker handleCountry={handleCountry} />
                    <CountryChart countryData={countryData} />
                </div>}
        </div>
    )
}

export default App