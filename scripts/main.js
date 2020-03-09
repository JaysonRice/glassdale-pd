import { getOfficers } from "./officers/OfficerProvider.js";
import { getCriminals } from "./criminals/CriminalProvider.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import CriminalList from "./criminals/CriminalList.js";


getOfficers()
getConvictions()
getCriminals().then(criminal => CriminalList())
