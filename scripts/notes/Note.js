export const Note = (noteObject, criminal) => {
    return `
        <section class="note">
            <header>
                <h2>${criminal.name}</h2>
            </header>
            <p>${noteObject.noteText}</p>
            <p>${new Date(noteObject.timestamp).toLocaleDateString()}</p>
            <p>
            <button class="delete--button" id="deleteNote--${noteObject.id}">Delete Note</button>
        </p>
        </section>
    `
}