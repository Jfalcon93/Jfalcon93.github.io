const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Bad bad tings a gwan')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch(`http://restcountries.eu/rest/v2/all`)
    
    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('unable to fetch things')
    }
}

const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=ede5fd5863ce4f')
    
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error ('unable to fetch things')
    }
}


const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}