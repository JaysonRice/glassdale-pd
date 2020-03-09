import { useConvictions } from "./ConvictionProvider.js";

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

const ConvictionSelect = () => {
    // Get all convictions from application state
    const convictions = useConvictions()

    const render = convictionsCollection => {

    contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${ convictions.map() }
            </select>
    }
            render(convictions)
}

export default ConvictionSelect