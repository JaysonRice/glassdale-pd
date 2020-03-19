let criminals = []

export const useCriminals = () => {
    return criminals.slice()
}

export const getCriminals = () => {
    // Request the data
    return fetch("https://criminals.glassdale.us/criminals")
    // Convert the JSON string response to a JavaScript data structure (object or array)
        .then(response => response.json())
        // Do something with the data
        .then(
            parsedCriminals => {
                criminals = parsedCriminals
            }
        )
}