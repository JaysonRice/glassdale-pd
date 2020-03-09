let crimes = []

export const useCrimes = () => {
    return crimes.slice()
}

export const getCrimes = () => {
    // Request the data
    return fetch("https://criminals.glassdale.us/crimes")
    // Convert the JSON string response to a JavaScript data structure (object or array)
        .then(response => response.json())
        // Do something with the data
        .then(
            parsedCrimes => {
                console.table(parsedCrimes)
                crimes = parsedCrimes
            }
        )
}