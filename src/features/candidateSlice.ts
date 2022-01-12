import axios from "axios";

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { Candidate, CandidateState, Query, } from '../common/interfaces';
import { SortingTypes, FiltersTypes, QueryTypes } from '../common/types';


const initialState: CandidateState = {
    loading: false,
    error: "",
    query: {
        name: "",
        position_applied: "",
        status: undefined
    },
    value: [{ id: 1, name: "Alvin Satterfield", email: "cornellbartell@connellyleannon.biz", birth_date: "1997-09-07", year_of_experience: 5, position_applied: "Technician", application_date: "2018-07-02", status: "rejected" }, { id: 2, name: "Colette Morar", email: "corinnestark@pacocha.co", birth_date: "1998-08-03", year_of_experience: 3, position_applied: "Designer", application_date: "2017-11-18", status: "waiting" }, { id: 3, name: "Rosalind Rath DDS", email: "sandyankunding@marks.io", birth_date: "1980-03-28", year_of_experience: 15, position_applied: "Orchestrator", application_date: "2018-01-31", status: "approved" }, { id: 4, name: "Cyrstal Kunze", email: "lavernokon@stroman.name", birth_date: "1997-10-30", year_of_experience: 8, position_applied: "Analyst", application_date: "2018-09-12", status: "rejected" }, { id: 5, name: "Henrietta Fisher V", email: "lewis@sipes.biz", birth_date: "1974-09-14", year_of_experience: 14, position_applied: "Producer", application_date: "2018-04-25", status: "waiting" }, { id: 6, name: "Michal Kiehn Sr.", email: "ruelmarks@prohaska.co", birth_date: "1976-08-04", year_of_experience: 1, position_applied: "Planner", application_date: "2018-04-05", status: "rejected" }, { id: 7, name: "Lavonda Murazik", email: "mayesimonis@white.name", birth_date: "1984-04-25", year_of_experience: 6, position_applied: "Administrator", application_date: "2018-10-06", status: "waiting" }, { id: 8, name: "Herman Altenwerth", email: "wavavonrueden@brekkecasper.org", birth_date: "1996-08-08", year_of_experience: 2, position_applied: "Liaison", application_date: "2018-09-14", status: "waiting" }, { id: 9, name: "Ernestina Dicki", email: "lawrencekunze@pouros.io", birth_date: "1971-09-01", year_of_experience: 14, position_applied: "Associate", application_date: "2018-07-13", status: "approved" }, { id: 10, name: "Deedee Kuhic", email: "karisa@mertz.co", birth_date: "1973-08-30", year_of_experience: 2, position_applied: "Strategist", application_date: "2018-10-08", status: "waiting" }, { id: 11, name: "Carmela Hilll Sr.", email: "hermelindalang@barrows.org", birth_date: "1984-10-04", year_of_experience: 11, position_applied: "Assistant", application_date: "2018-10-10", status: "waiting" }, { id: 12, name: "Brandon Hilll", email: "vondalangosh@bosco.org", birth_date: "1986-02-03", year_of_experience: 5, position_applied: "Representative", application_date: "2018-04-11", status: "rejected" }, { id: 13, name: "Sam Donnelly", email: "marya@cronin.com", birth_date: "1994-04-18", year_of_experience: 5, position_applied: "Assistant", application_date: "2018-10-15", status: "waiting" }, { id: 14, name: "Mr. Rolando Davis", email: "blainecormier@jacobslangworth.biz", birth_date: "1977-11-30", year_of_experience: 15, position_applied: "Developer", application_date: "2018-02-14", status: "rejected" }, { id: 15, name: "Gay Ullrich II", email: "denis@mills.info", birth_date: "1972-05-26", year_of_experience: 7, position_applied: "Executive", application_date: "2018-02-02", status: "approved" }, { id: 16, name: "Ollie Bednar PhD", email: "chong@gleichner.net", birth_date: "1979-07-09", year_of_experience: 3, position_applied: "Executive", application_date: "2017-11-11", status: "rejected" }, { id: 17, name: "Gonzalo Mueller", email: "jonathanwilderman@creminschumm.org", birth_date: "1973-03-05", year_of_experience: 5, position_applied: "Agent", application_date: "2018-03-21", status: "rejected" }, { id: 18, name: "Kristopher Mills", email: "latiaschowalter@hammes.com", birth_date: "1980-02-19", year_of_experience: 11, position_applied: "Manager", application_date: "2018-09-02", status: "approved" }, { id: 19, name: "Filiberto Williamson", email: "wanetta@ruecker.co", birth_date: "1976-05-14", year_of_experience: 10, position_applied: "Orchestrator", application_date: "2018-07-30", status: "approved" }, { id: 20, name: "Ester Treutel", email: "hugh@kuvalis.net", birth_date: "1995-12-02", year_of_experience: 4, position_applied: "Manager", application_date: "2018-01-20", status: "waiting" }, { id: 21, name: "Marlys Larkin", email: "lowell@ritchie.org", birth_date: "1986-01-26", year_of_experience: 4, position_applied: "Liaison", application_date: "2018-01-25", status: "approved" }, { id: 22, name: "Kitty Tillman", email: "shirleyschumm@blickhintz.com", birth_date: "1978-12-02", year_of_experience: 4, position_applied: "Coordinator", application_date: "2018-05-16", status: "waiting" }, { id: 23, name: "Felton Kovacek", email: "bernettayost@greenholt.biz", birth_date: "1977-10-30", year_of_experience: 13, position_applied: "Director", application_date: "2018-01-09", status: "rejected" }, { id: 24, name: "Larry Bruen", email: "molly@harvey.name", birth_date: "1995-01-08", year_of_experience: 1, position_applied: "Facilitator", application_date: "2018-10-15", status: "rejected" }, { id: 25, name: "Stephan Trantow", email: "henriette@lowe.io", birth_date: "2000-09-15", year_of_experience: 10, position_applied: "Architect", application_date: "2018-03-07", status: "waiting" }, { id: 26, name: "Jacquelynn Bernhard II", email: "annisvandervort@watsica.io", birth_date: "1981-02-20", year_of_experience: 13, position_applied: "Agent", application_date: "2018-09-24", status: "waiting" }, { id: 27, name: "Winston Glover Jr.", email: "saulschneider@hamillbarton.co", birth_date: "1980-12-12", year_of_experience: 13, position_applied: "Officer", application_date: "2018-05-30", status: "rejected" }, { id: 28, name: "Ross Hagenes MD", email: "dakotacrona@lang.info", birth_date: "1970-02-02", year_of_experience: 14, position_applied: "Developer", application_date: "2018-07-08", status: "approved" }, { id: 29, name: "Judson Keebler", email: "dinalynch@cruickshanklang.io", birth_date: "1974-11-03", year_of_experience: 9, position_applied: "Consultant", application_date: "2018-02-08", status: "waiting" }, { id: 30, name: "Avery Ruecker", email: "bailey@greenholt.biz", birth_date: "1995-12-29", year_of_experience: 4, position_applied: "Director", application_date: "2018-06-02", status: "rejected" }, { id: 31, name: "Nelson Miller DDS", email: "amado@abbott.org", birth_date: "1976-10-09", year_of_experience: 7, position_applied: "Agent", application_date: "2018-10-03", status: "approved" }, { id: 32, name: "Sung Rempel IV", email: "sammieokuneva@koelpinlangosh.info", birth_date: "1995-01-09", year_of_experience: 14, position_applied: "Analyst", application_date: "2018-05-22", status: "rejected" }, { id: 33, name: "Dominica Haley", email: "scottyrath@orn.com", birth_date: "1973-08-19", year_of_experience: 14, position_applied: "Consultant", application_date: "2018-08-04", status: "approved" }, { id: 34, name: "Cordell Bogisich", email: "gerryhane@mayer.name", birth_date: "1983-07-04", year_of_experience: 12, position_applied: "Architect", application_date: "2018-08-26", status: "waiting" }, { id: 35, name: "Miss Jerrold Prohaska", email: "emiliahaley@hansenschimmel.name", birth_date: "1977-10-15", year_of_experience: 7, position_applied: "Strategist", application_date: "2017-10-17", status: "approved" }, { id: 36, name: "Carlton Kuvalis", email: "yoshie@yundt.io", birth_date: "1996-09-07", year_of_experience: 14, position_applied: "Supervisor", application_date: "2018-01-02", status: "approved" }, { id: 37, name: "Trinidad Hamill II", email: "mckinley@runolfon.name", birth_date: "1970-12-05", year_of_experience: 4, position_applied: "Liaison", application_date: "2018-03-13", status: "approved" }, { id: 38, name: "Gertie Haley", email: "blancahermiston@pacocha.com", birth_date: "1983-04-20", year_of_experience: 8, position_applied: "Administrator", application_date: "2018-05-25", status: "waiting" }, { id: 39, name: "Lucinda Trantow", email: "milan@bernierdonnelly.io", birth_date: "1999-07-15", year_of_experience: 1, position_applied: "Executive", application_date: "2018-06-08", status: "approved" }, { id: 40, name: "Richard Frami", email: "omar@labadie.org", birth_date: "1985-02-11", year_of_experience: 3, position_applied: "Liaison", application_date: "2018-09-17", status: "waiting" }, { id: 41, name: "Brant Marvin", email: "harry@greenholt.io", birth_date: "1982-08-19", year_of_experience: 4, position_applied: "Liaison", application_date: "2018-03-11", status: "waiting" }, { id: 42, name: "Grant Schuppe", email: "curtisbernhard@dubuque.co", birth_date: "1973-07-18", year_of_experience: 7, position_applied: "Administrator", application_date: "2017-12-20", status: "waiting" }, { id: 43, name: "Gaston Homenick", email: "buena@schuppe.info", birth_date: "1973-08-30", year_of_experience: 13, position_applied: "Producer", application_date: "2018-08-27", status: "rejected" }, { id: 44, name: "Dr. Denyse Walsh", email: "lynna@donnelly.net", birth_date: "1980-10-16", year_of_experience: 1, position_applied: "Orchestrator", application_date: "2018-04-25", status: "approved" }, { id: 45, name: "Toshiko Gusikowski", email: "davismueller@muller.info", birth_date: "1986-05-14", year_of_experience: 4, position_applied: "Representative", application_date: "2018-10-15", status: "waiting" }, { id: 46, name: "Jarred Donnelly Jr.", email: "jarrodrolfson@baumbachlesch.org", birth_date: "1990-07-09", year_of_experience: 4, position_applied: "Designer", application_date: "2018-01-20", status: "waiting" }, { id: 47, name: "Barabara Rolfson", email: "nicolette@swiftframi.info", birth_date: "1974-06-30", year_of_experience: 9, position_applied: "Manager", application_date: "2018-08-19", status: "waiting" }, { id: 48, name: "Mrs. Quentin Batz", email: "kermit@smitham.org", birth_date: "1990-11-21", year_of_experience: 7, position_applied: "Planner", application_date: "2018-02-08", status: "rejected" }, { id: 49, name: "Corey Kunze Jr.", email: "leroy@brakustorphy.co", birth_date: "1971-07-30", year_of_experience: 7, position_applied: "Administrator", application_date: "2018-02-05", status: "rejected" }, { id: 50, name: "Lamar McDermott", email: "blair@kunderath.org", birth_date: "1989-10-03", year_of_experience: 10, position_applied: "Architect", application_date: "2018-02-11", status: "waiting" }, { id: 51, name: "Kami Jerde", email: "alexisjones@handklein.io", birth_date: "1968-12-09", year_of_experience: 1, position_applied: "Engineer", application_date: "2018-07-25", status: "waiting" }, { id: 52, name: "Eloise Goyette", email: "walter@larsonrobel.co", birth_date: "1993-06-09", year_of_experience: 1, position_applied: "Assistant", application_date: "2018-09-12", status: "rejected" }, { id: 53, name: "Weston Welch", email: "josef@carterrodriguez.net", birth_date: "1989-08-06", year_of_experience: 8, position_applied: "Officer", application_date: "2017-12-25", status: "approved" }, { id: 54, name: "Ms. Ignacio Olson", email: "claude@abbott.biz", birth_date: "1972-12-18", year_of_experience: 8, position_applied: "Orchestrator", application_date: "2018-04-12", status: "approved" }, { id: 55, name: "Mr. Fausto Bednar", email: "gilberte@mills.co", birth_date: "1975-10-27", year_of_experience: 10, position_applied: "Administrator", application_date: "2018-07-29", status: "waiting" }, { id: 56, name: "Jarod Funk", email: "todd@simonis.info", birth_date: "1970-04-03", year_of_experience: 9, position_applied: "Supervisor", application_date: "2018-06-07", status: "approved" }, { id: 57, name: "Lewis Mann", email: "tameika@powlowski.com", birth_date: "1971-04-14", year_of_experience: 9, position_applied: "Manager", application_date: "2018-06-16", status: "approved" }, { id: 58, name: "Marcelina Powlowski I", email: "josef@rice.io", birth_date: "1985-11-27", year_of_experience: 10, position_applied: "Associate", application_date: "2018-05-10", status: "approved" }, { id: 59, name: "Ms. Reda Murazik", email: "jolynn@ebertmonahan.io", birth_date: "1973-02-14", year_of_experience: 8, position_applied: "Specialist", application_date: "2018-06-16", status: "rejected" }, { id: 60, name: "Terrance Boyle Jr.", email: "paul@medhurstgraham.name", birth_date: "1996-07-12", year_of_experience: 14, position_applied: "Administrator", application_date: "2018-06-14", status: "rejected" }, { id: 61, name: "Leota Heaney", email: "mandalesch@daugherty.biz", birth_date: "1991-07-09", year_of_experience: 15, position_applied: "Strategist", application_date: "2018-01-24", status: "waiting" }, { id: 62, name: "Madeleine Sauer", email: "lenore@mcdermottrenner.co", birth_date: "1997-05-14", year_of_experience: 6, position_applied: "Engineer", application_date: "2018-01-05", status: "waiting" }, { id: 63, name: "Edward Pouros", email: "robbiyundt@labadie.info", birth_date: "2000-05-26", year_of_experience: 8, position_applied: "Consultant", application_date: "2018-08-08", status: "waiting" }, { id: 64, name: "Rex Fisher V", email: "matildegerlach@friesen.info", birth_date: "1994-12-19", year_of_experience: 11, position_applied: "Analyst", application_date: "2018-04-19", status: "approved" }, { id: 65, name: "Odell Roberts", email: "lorna@thiel.org", birth_date: "1981-12-07", year_of_experience: 13, position_applied: "Representative", application_date: "2018-07-02", status: "approved" }, { id: 66, name: "Rayford Bogan", email: "coyrempel@murazik.io", birth_date: "1978-05-09", year_of_experience: 14, position_applied: "Architect", application_date: "2018-03-12", status: "waiting" }, { id: 67, name: "Julio Borer", email: "suanne@krajcik.co", birth_date: "1973-12-19", year_of_experience: 8, position_applied: "Manager", application_date: "2018-03-18", status: "waiting" }, { id: 68, name: "Ms. Helga Hessel", email: "ariana@beahan.biz", birth_date: "1994-05-16", year_of_experience: 15, position_applied: "Representative", application_date: "2017-11-11", status: "approved" }, { id: 69, name: "Ms. Harold Wolff", email: "john@kub.org", birth_date: "1991-10-26", year_of_experience: 14, position_applied: "Technician", application_date: "2018-09-03", status: "rejected" }, { id: 70, name: "Ms. Noah Quitzon", email: "augustus@erdman.biz", birth_date: "1972-06-16", year_of_experience: 9, position_applied: "Producer", application_date: "2017-11-13", status: "waiting" }, { id: 71, name: "Lizabeth Hoeger", email: "rosendobashirian@zulaufzieme.com", birth_date: "1972-05-06", year_of_experience: 9, position_applied: "Manager", application_date: "2017-12-30", status: "rejected" }, { id: 72, name: "Cristy Raynor", email: "porfiriohansen@schustermayer.org", birth_date: "1996-08-15", year_of_experience: 14, position_applied: "Developer", application_date: "2018-10-09", status: "rejected" }, { id: 73, name: "Miss Miles Dietrich", email: "moriahjohnson@nicolasweinat.io", birth_date: "1981-07-29", year_of_experience: 9, position_applied: "Agent", application_date: "2018-10-05", status: "waiting" }, { id: 74, name: "Jordon Cremin", email: "zita@gutmann.info", birth_date: "1995-02-05", year_of_experience: 9, position_applied: "Representative", application_date: "2018-04-04", status: "waiting" }]
};

export const fetchCandidates = createAsyncThunk("getCandidates", async (data, { rejectWithValue }) => {
    let res = await axios.get("https://sumit-back-end-env.herokuapp.com/api/v1/candidates")
    if (res.data.data.error) rejectWithValue("Something went wrong")
    return res.data.data.data;
});

const candidateSlice = createSlice({
    name: "candidates",
    initialState,
    reducers: {
        sortCandidates: (state, action: PayloadAction<SortingTypes | undefined>) => {
            if (action.payload === undefined && !state.query.sortBy) return
            let sortBy = action.payload || state.query.sortBy || "position_applied"
            if (action.payload && state.query.sortBy === sortBy) state.value = state.value.reverse()
            else state.value = state.value.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1)
            state.query.sortBy = sortBy
        },
        filterCandidates: (state, action?: PayloadAction<QueryTypes>) => {
            if (action?.payload) state.query = { ...state.query, ...action.payload }
            state.value = initialState.value.filter((item) => {
                let { sortBy = "position_applied", ...filters } = state.query
                let filterName: keyof FiltersTypes
                let hasMatch = true

                for (filterName in filters) {
                    const filterValue = filters[filterName] || ""

                    if (filterName === 'status' && filterValue !== "")
                        hasMatch = item[filterName].toLowerCase() === filterValue.toLowerCase()
                    else hasMatch = item[filterName].toLowerCase().includes(filterValue.toLowerCase())

                    if (!hasMatch) break
                }
                return hasMatch
            })
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCandidates.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchCandidates.fulfilled, (state, action: PayloadAction<Candidate[]>) => {
            state.value = action.payload
            state.loading = false
        })
        builder.addCase(fetchCandidates.rejected, (state) => {
            state.loading = false
            state.error = "Something went wrong"
        });
    },
});

export const { filterCandidates, sortCandidates } = candidateSlice.actions
export default candidateSlice.reducer;

