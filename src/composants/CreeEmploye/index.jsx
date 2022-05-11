import { Link } from "react-router-dom"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { ajouteEmploye } from "../../store/sliceUtilisateur"
import Select from 'react-select'
import Modale from "../Modale"
import {states, services, prenoms, noms, rues, villes } from '../../utils/Datas'

function CreeEmploye() {

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    function formateDate(date) {

    }

    const [etatModale, setModale] = useState(false)
    const ouvertureModale = () => setModale(true)
    const fermetureModale = () => setModale(false)

    // Filling placeholder random data
    const [id, setId] = useState(Date.now())
    const [prenom, setPrenom] = useState(prenoms[Math.floor(Math.random() * prenoms.length)])
    const [nom, setNom] = useState(noms[Math.floor(Math.random() * noms.length)])
    const [naissance, setNaissance] = useState(randomDate(new Date(1950,0 ,1), new Date(2004,0,1)).toISOString().split('T')[0])
    const [debut, setDebut] = useState(randomDate(new Date(2010,0 ,1), new Date()).toISOString().split('T')[0])
    const [rue, setRue] = useState(Math.round(Math.random() * 100 + 1) + ' ' + rues[Math.floor(Math.random() * rues.length)])
    const [ville, setVille] = useState(villes[Math.floor(Math.random() * villes.length)])
    const [etat, setEtat] = useState(states[Math.floor(Math.random() * states.length)].value)
    const [codePostal, setCodePostal] = useState(Math.round(Math.random() * 90000) + 1000)
    const [service, setService] = useState(services[Math.floor(Math.random() * services.length)].label)

    const dispatch = useDispatch()

    const champsEmploye = {
        id,
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

    const nouvelEmploye = (e) => {
        e.preventDefault()
        setId(Date.now())
        dispatch(ajouteEmploye(champsEmploye))
        ouvertureModale()
      }

    const ajoute100Employes = (e) => {
        e.preventDefault()
        for (let employe = 0; employe < 100; employe++) {
            const id = Date.now() + Math.round(Math.random() * 100000)
            const prenom = prenoms[Math.floor(Math.random() * prenoms.length)]
            const nom = noms[Math.floor(Math.random() * noms.length)]
            const naissance = randomDate(new Date(1950,0 ,1), new Date(2004,0,1)).toISOString().split('T')[0]
            const debut = randomDate(new Date(2010,0 ,1), new Date()).toISOString().split('T')[0]
            const rue = Math.round(Math.random() * 100 + 1) + ' ' + rues[Math.floor(Math.random() * rues.length)]
            const ville = villes[Math.floor(Math.random() * villes.length)]
            const etat = states[Math.floor(Math.random() * states.length)].value
            const codePostal = Math.round(Math.random() * 90000) + 100
            const service = services[Math.floor(Math.random() * services.length)].label
            dispatch(ajouteEmploye({'id':id, "prenom":prenom, "nom":nom, "naissance":naissance,
                "debut":debut, "rue":rue, "ville":ville, "etat":etat, "codePostal":codePostal, "service":service}))
        }
        console.log('100 employés ajoutés !')
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
                        onChange={(e) => setEtat(e.value)}
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
                    onChange={(e) => setService(e.label)}
                    value={services.value}
                    options={services}
                    defaultValue={services[1]}
                />
                <br /><button>Save</button>
                {etatModale && (<Modale texte={'Employee Created!'} fermetureModale={fermetureModale} />)}
            </form>
            <form onSubmit={(e) => ajoute100Employes(e)}>
                <br />
                <button>Add 100 random employees</button>
            </form>
    </div>
    )
}

export default CreeEmploye