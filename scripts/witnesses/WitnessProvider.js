let witnesses = []

export const useWitnesses = () => {
    return witnesses.slice()
}

export const getWitnesses = () => {
    // Request the data
    return fetch("https://criminals.glassdale.us/witnesses")
    // Convert the JSON string response to a JavaScript data structure (object or array)
        .then(response => response.json())
        // Do something with the data
        .then(
            parsedWitnesses => {
                witnesses = parsedWitnesses
            }
        )
}