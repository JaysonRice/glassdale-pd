const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id="note-text">
        <button id="saveNote">Save Note</button>
    `
}

const NoteForm = () => {
    render()
}

export default NoteForm