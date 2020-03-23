export const Criminal = (criminalObject) => {
    return `
    <div class="criminal">
        <h4 class="criminal__name">${criminalObject.name}</h4>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObject.age}</p>
            <div class="informationBreak"></div>
            <div class="buttonContainer">
            <button class="associates--button" id="associates--${criminalObject.id}">Show Associates</button>
            </div>
        </div>
    </div>
    `
}