import { useCriminals } from "./CriminalProvider.js";
import Criminal from "./Criminal.js";

const CriminalList = () => {

    const criminalElement = document.querySelector(".criminalsContainer")
    const criminals = useCriminals()

    let criminalHTMLRepresentations = ""
    for (const criminalObjects of criminals) {
        criminalHTMLRepresentations += Criminal(criminalObjects)
    }

    criminalElement.innerHTML = `
        ${criminalHTMLRepresentations}
`
}

export default CriminalList