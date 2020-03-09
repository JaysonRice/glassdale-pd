const Criminal = (criminal) => {
    return `
        <h3>${criminal.name}</h3>
        <div>Age: ${criminal.age}</div>
        <div>Conviction: ${criminal.conviction}</div>
        <div>${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
        <div>${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
    `
}

export default Criminal