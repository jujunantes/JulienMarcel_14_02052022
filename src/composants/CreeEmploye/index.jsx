import { Link } from "react-router-dom"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { ajouteEmploye } from "../../store/sliceUtilisateur"
import Select from 'react-select'

function CreeEmploye() {

    const [prenom, setPrenom] = useState()
    const [nom, setNom] = useState()
    const [naissance, setNaissance] = useState()
    const [debut, setDebut] = useState()
    const [rue, setRue] = useState()
    const [ville, setVille] = useState()
    const [etat, setEtat] = useState()
    const [codePostal, setCodePostal] = useState()
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

    const nouvelEmploye = (e) => {
        e.preventDefault()
        dispatch(ajouteEmploye(champsEmploye))
      }

    return (
        <div className="container">
            <Link to="/liste-employes">View Current Employees</Link>
            <h2>Create Employee</h2>

            <form action="#" id="create-employee" onSubmit={(e) => nouvelEmploye(e)}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" onChange={(e) => setPrenom(e.target.value)} />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" onChange={(e) => setNom(e.target.value)} />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="date" onChange={(e) => setNaissance(e.target.value)} />

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="date" onChange={(e) => setDebut(e.target.value)} />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" onChange={(e) => setRue(e.target.value)}  />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" onChange={(e) => setVille(e.target.value)}  />

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
                    <input id="zip-code" type="number" onChange={(e) => setCodePostal(e.target.value)} />
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
            </form>
        
    </div>
    )
}

export default CreeEmploye