let criminals = []

export const useCriminals = () => {
    // Sort by criminal last name before the copy happens
    criminals.sort(
        (currentThing, nextThing) => {
            // Get the last name on both objects
            const [currFirstName, currLastName] = currentThing.name.split(" ")
            const [nextFirstName, nextLastName] = nextThing.name.split(" ")

            if (currLastName < nextLastName) { return -1; }
            if (currLastName > nextLastName) { return 1; }
            return 0;
        }
    )

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