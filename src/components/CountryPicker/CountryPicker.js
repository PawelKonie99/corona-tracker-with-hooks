import React, { useEffect, useState } from 'react'
import { fetchCountries } from '../../api/api'
import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleCountry }) => {
    const [allCountries, setAllCountries] = useState([])
    // const [country, setCountry] = useState('')

    const getData = async () => {
        setAllCountries(await fetchCountries())
    }

    useEffect(() => {
        getData()
    }, [])



    return (
        <div>
            <select className={styles.selectRoll} onChange={(e) => handleCountry(e.target.value)}>{allCountries.map((country, i) => <option key={i} value={country.Country}>{country.Country}</option>)}</select>
        </div>
    )
}

export default CountryPicker

