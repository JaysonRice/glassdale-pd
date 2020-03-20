import { useCriminals } from "./CriminalProvider.js"

const contentTarget = document.querySelector(".knownAssociatesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("knownAssociatesClicked", customEvent => {
    // Get the criminal id
    const criminalId = customEvent.detail.chosenCriminal
    const criminalArray = useCriminals()
    
    // Find returns the very first object that matches the condition in the callback function
    const iFoundYou = criminalArray.find(
        (currentCriminal) => {
            if (currentCriminal.id === parseInt(criminalId)) {
                return true
            }
            return false
        }
    )

    KnownAssociatesDialog(iFoundYou)

    const associateDialog = document.querySelector("#associateDialog")
    associateDialog.showModal()

    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
})

export const KnownAssociatesDialog = (criminalObject) => {
    contentTarget.innerHTML = `
        <dialog id="associateDialog">
            ${
                criminalObject.known_associates.map(
                    (currentAssociate) => {
                        return `<div class="associateDetails">
                        <div>Name: ${currentAssociate.name}</div>
                        <div>Alibi: ${currentAssociate.alibi}</div>
                        <div class="informationBreak"></div>
                        </div>
                        `

                    }
                ).join("")
            }
            <button class='button--close'>Close</button>
        </dialog>
    `
}