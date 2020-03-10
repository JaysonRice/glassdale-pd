import { useConvictions } from "./ConvictionProvider.js";


const contentTarget = document.querySelector(".filters__crime")

const ConvictionSelect = () => {

    const convictions = useConvictions()

    const render = convictionsCollection => {

        contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(singleConviction => {
                        return `<option value="${singleConviction.id}">${singleConviction.name}</option>`
                })
            }
        </select>
        `
    }
            render(convictions)
}

export default ConvictionSelect