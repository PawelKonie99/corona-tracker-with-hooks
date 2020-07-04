import axios from 'axios'

const url = 'https://api.covid19api.com/summary'
const countriesUrl = 'https://api.covid19api.com/countries'
const today = new Date().toISOString().slice(0, 10);
const yestarday = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().slice(0, 10)

export const fetchData = async () => {
    try {
        const { data: { Date, Global: { TotalConfirmed, TotalDeaths, TotalRecovered } } } = await axios.get(url)

        const modifiedData = {
            confirmed: TotalConfirmed,
            deaths: TotalDeaths,
            recovered: TotalRecovered,
            date: Date,
        }

        return modifiedData
    } catch (error) {
        console.log(error)
    }
}

export const fetchCountries = async () => {
    try {
        const { data } = await axios.get(countriesUrl)

        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchCountry = async (country) => {
    if (!country) return
    // console.log(country)
    try {
        const { data } = await axios.get(`https://api.covid19api.com/country/${country}?from=${yestarday}T00:00:00Z&to=${today}T00:00:00Z`)

        const modifiedData = {
            confirmed: data[0].Confirmed,
            deaths: data[0].Deaths,
            recovered: data[0].Recovered,
            countryName: data[0].Country
        }
        // console.log(modifiedData)
        return modifiedData
    } catch (error) {
        console.log('Brak Danych')
        // return 'Brak Danych'
    }
}