import { Link } from "react-router-dom"
import React, { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { ajouteEmploye } from "../../store/sliceUtilisateur"
import Select from 'react-select'
import Modale from "../Modale"

function CreeEmploye() {

    const states = [
        { label: "Alabama", value: "AL" },                          { label: "Alaska", value: "AK" },
        { label: "American Samoa", value: "AS" },                   { label: "Arizona", value: "AZ" },
        { label: "Arkansas", value: "AR" },                         { label: "California", value: "CA" },
        { label: "Colorado", value: "CO" },                         { label: "Connecticut", value: "CT" },
        { label: "Delaware", value: "DE" },                         { label: "District Of Columbia", value: "DC" },
        { label: "Federated States Of Micronesia", value: "FM" },   { label: "Florida", value: "FL" },
        { label: "Georgia", value: "GA" },                          { label: "Guam", value: "GU" },
        { label: "Hawaii", value: "HI" },                           { label: "Idaho", value: "ID" },
        { label: "Illinois", value: "IL" },                         { label: "Indiana", value: "IN" },
        { label: "Iowa", value: "IA" },                             { label: "Kansas", value: "KS" },
        { label: "Kentucky", value: "KY" },                         { label: "Louisiana", value: "LA" },
        { label: "Maine", value: "ME" },                            { label: "Marshall Islands", value: "MH" },
        { label: "Maryland", value: "MD" },                         { label: "Massachusetts", value: "MA" },
        { label: "Michigan", value: "MI" },                         { label: "Minnesota", value: "MN" },
        { label: "Mississippi", value: "MS" },                      { label: "Missouri", value: "MO" },
        { label: "Montana", value: "MT" },                          { label: "Nebraska", value: "NE" },
        { label: "Nevada", value: "NV" },                           { label: "New Hampshire", value: "NH" },
        { label: "New Jersey", value: "NJ" },                       { label: "New Mexico", value: "NM" },
        { label: "New York", value: "NY" },                         { label: "North Carolina", value: "NC" },
        { label: "North Dakota", value: "ND" },                     { label: "Northern Mariana Islands", value: "MP" },
        { label: "Ohio", value: "OH" },                             { label: "Oklahoma", value: "OK" },
        { label: "Oregon", value: "OR" },                           { label: "Palau", value: "PW" },
        { label: "Pennsylvania", value: "PA" },                     { label: "Puerto Rico", value: "PR" },
        { label: "Rhode Island", value: "RI" },                     { label: "South Carolina", value: "SC" },
        { label: "South Dakota", value: "SD" },                     { label: "Tennessee", value: "TN" },
        { label: "Texas", value: "TX" },                            { label: "Utah", value: "UT" },
        { label: "Vermont", value: "VT" },                          { label: "Virgin Islands", value: "VI" },
        { label: "Virginia", value: "VA" },                         { label: "Washington", value: "WA" },
        { label: "West Virginia", value: "WV" },                    { label: "Wisconsin", value: "WI" },
        { label: "Wyoming", value: "WY" }
    ]

    const services = [
        { value: 'Sales', label: 'Sales' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'HumanResources', label: 'Human Resources' },
        { value: 'Legal', label: 'Legal' }
      ]
    
    const prenoms = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"]
    const noms = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"]
    const villes = ["New York", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim", "Santa Ana",
    "Riverside", "Stockton", "Chula Vista", "Irvine", "Chicago", "Aurora", "Rockford", "Joliet", "Naperville", "Springfield", "Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso", "Philadelphia",
    "Pittsburgh", "Allentown", "Erie", "Reading",  "Phoenix", "Tucson", "Mesa", "Chandler", "Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Hialeah", "Tallahassee", "Fort Lauderdale"]
    const rues = ["Abby Park Street", "Adelaide Avenue", "Airplane Avenue", "Airport Avenue", "Airport Street", "Andreas Avenue", "Arthur Street",
    "Auerbach Avenue", "Auburn Avenue", "Barn Street", "Bay Avenue", "Beatles Avenue", "Belby Road", "Bus Avenue", "California Street",
    "Camp Street", "Cavour Avenue", "Central Cesta", "Central Street", "China Avenue", "Communal Square", "Constitution Street", "Copper Street",
    "Corn Street", "Costume Street", "Cresson Crescent", "Danish Avenue", "Dean Avenue", "Delaware Avenue", "Delta Street", "Democracy Avenue",
    "Department Street", "Dimitri Street", "Dock Street", "Dubnitz Road", "Eastern Cesta", "East Hills Avenue", "Easy Street", "Elgin Avenue",
    "Elisabeth Street", "Empire Avenue", "Eppink Square", "Farmer's Lane", "Federation Avenue", "Federation Square", "Flower Avenue",
    "Forest Street", "Francis II Street", "Freedom Avenue", "French Street", "Galghard Road", "Gateway Street", "Glider Avenue", "Gold Street",
    "Greenpark Avenue", "Hazlett Avenue", "Hendrix Avenue", "Heritage Avenue", "Highway Avenue", "History Avenue", "Hospital Street",
    "Hot-air Ballon Avenue", "Hurbadome Avenue", "Hurbanova Street", "Hurricane Avenue", "Ida Street", "Impressionist Avenue", "Industry Street",
    "Innovation Avenue", "Jamal Hustróva Street", "Jameson's Crossing", "Katrina Street", "King Arthur I street", "Kings Street", "Law Street",
    "Libertas Avenue", "Long Road Avenue", "Lucy Street", "Mandarin Park Lane", "Maple Street", "Marine Avenue", "Mayores Road",
    "McCrooke Avenue", "Medieval Street", "Mill Place", "Millstreet", "Mitch Cromwood Avenue", "Monorail Street", "Museum Avenue",
    "Newhaven Avenue", "New Orleans Street", "Newport Street", "New Street", "Noble City Path", "Northern Abby Avenue", "Ocean Avenue",
    "Oceana Side-street", "Old Port Avenue", "Old Wharf", "Overbanken Road", "Paul Hladovka Avenue", "Pažkoliť Úskalie Avenue", "People's Avenue",
    "Pine Avenue", "Pine Street", "Plaza Street", "Poet's Street", "Prachstreet", "Prague Avenue", "Princess Avenue", "Quarry Avenue",
    "Queen Mary Elisabeth Alley", "Rail Avenue", "Railway Street", "River Side Road", "River Street", "Rome Avenue", "Sebastian Street",
    "School Street", "Shall Street", "Shopping Avenue", "Shopping Street", "Silver Street", "Sobrance Path", "Southern Abby Avenue",
    "Southern Avenue", "Southern Millstreet Avenue", "Southern Street", "Square Street", "State Avenue", "Stone Street", "Storm Alley",
    "Subway Street", "Swamp Street", "Swit Street", "Sycamore Drive", "Sylvania Avenue", "Technology Avenue", "Temmar Eastwood Avenue",
    "Theater Street", "Venice Street", "Vienna Street", "Vlackstreet", "Walden Alley", "Wallstreet", "Water-lily Avenue", "Water Street",
    "Western Cesta", "William Street", "Woodstock Street", "Zosnul Street"]

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    const [etatModale, setModale] = useState(false)
    const ouvertureModale = () => setModale(true)
    const fermetureModale = () => setModale(false)

    const [prenom, setPrenom] = useState(prenoms[Math.floor(Math.random() * prenoms.length)])
    const [nom, setNom] = useState(noms[Math.floor(Math.random() * noms.length)])
    const [naissance, setNaissance] = useState(randomDate(new Date(1950,0 ,1), new Date(2004,0,1)).toLocaleDateString())
    const [debut, setDebut] = useState(randomDate(new Date(2010,0 ,1), new Date()).toLocaleDateString())
    const [rue, setRue] = useState(Math.round(Math.random() * 100) + ' ' + rues[Math.floor(Math.random() * rues.length)])
    const [ville, setVille] = useState(villes[Math.floor(Math.random() * villes.length)])
    const [etat, setEtat] = useState()
    const [codePostal, setCodePostal] = useState(Math.round(Math.random() * 90000) + 1000)
    const [service, setService] = useState()

    const dispatch = useDispatch()

    const champsEmploye = {
        id: Date.now(),
        prenom,
        nom,
        naissance,
        debut,
        rue,
        ville,
        etat,
        codePostal,
        service
    }

    const refNaissance = useRef(naissance)
    const refDebut = useRef(debut)

    const nouvelEmploye = (e) => {
        e.preventDefault()
        dispatch(ajouteEmploye(champsEmploye))
        ouvertureModale()
      }

    return (
        <div className="container">
            <Link to="/liste-employes">View Current Employees</Link>
            <h2>Create Employee</h2>

            <form action="#" id="create-employee" onSubmit={(e) => nouvelEmploye(e)}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" placeholder={prenom} onChange={(e) => setPrenom(e.target.value)} />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" placeholder={nom} onChange={(e) => setNom(e.target.value)} />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" placeholder={naissance} onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")} onChange={(e) => setNaissance(e.target.value)} />

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="text" placeholder={debut} onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")} onChange={(e) => setDebut(e.target.value)} />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" placeholder={rue} onChange={(e) => setRue(e.target.value)}  />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" placeholder={ville} onChange={(e) => setVille(e.target.value)}  />

                    <label htmlFor="state">State</label>
                    <Select
                        name="state"
                        id="state"
                        onChange={(e) => setEtat(e)}
                        value={states.value}
                        options={states}
                        defaultValue={states[1]}
                    />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" placeholder={codePostal} onChange={(e) => setCodePostal(e.target.value)} />
                </fieldset>
                <label htmlFor="department">Department</label>
                <Select
                    name="department"
                    id="department"
                    onChange={(e) => setService(e)}
                    value={services.value}
                    options={services}
                    defaultValue={services[1]}
                />
                <button>Save</button>
                {etatModale && (<Modale texte={'Employee Created!'} fermetureModale={fermetureModale} />)}
            </form>
        
    </div>
    )
}

export default CreeEmploye