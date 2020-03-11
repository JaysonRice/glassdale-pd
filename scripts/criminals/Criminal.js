const Criminal = (criminal) => {
    return `
    <div class="criminal__card">
        <h3>${criminal.name}</h3>
        <div>Age: ${criminal.age}</div>
        <div>Crime: ${criminal.conviction}</div>
        <div>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
        <div>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
    </div>
    `
}

export default Criminal