import { getOfficers } from "./officers/OfficerProvider.js";
import { getCriminals } from "./criminals/CriminalProvider.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import { CriminalList } from "./criminals/CriminalList.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";
import NoteForm from "./notes/NoteForm.js";


getOfficers()
NoteForm()
getCriminals().then(CriminalList)
getConvictions().then(ConvictionSelect)
