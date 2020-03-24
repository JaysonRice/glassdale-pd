export const Note = (noteObject, criminal) => {
    return `
        <section class="note">
            <header>
                <h2>${criminal.name}</h2>
            </header>
            <p>${noteObject.noteText}</p>
            <p>${new Date(noteObject.timestamp).toLocaleDateString()}</p>
        </section>
    `
}