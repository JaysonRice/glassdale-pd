import { getOfficers } from "./officers/OfficerProvider.js";
import { getCriminals } from "./criminals/CriminalProvider.js";
import { getCrimes } from "./convictions/CrimeProvider.js";
import CriminalList from "./criminals/CriminalList.js";


getOfficers()
getCrimes()
getCriminals().then(criminal => CriminalList())
