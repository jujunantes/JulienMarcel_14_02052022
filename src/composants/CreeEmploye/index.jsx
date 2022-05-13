import { Link } from "react-router-dom"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { ajouteEmploye } from "../../store/sliceUtilisateur"
import Select from 'react-select'
import Modale from "../Modale"
import {states, services, prenoms, noms, rues, villes } from '../../utils/Datas'
import EnTete from "../../composants/EnTete"

function CreeEmploye() {

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    // Modale ajout 1 employé
    const [etatModale, setModale] = useState(false)
    const ouvertureModale = () => setModale(true)
    const fermetureModale = () => setModale(false)

    // Modale ajout 100 employés
    const [etatModale2, setModale2] = useState(false)
    const ouvertureModale2 = () => setModale2(true)
    const fermetureModale2 = () => setModale2(false)

    // Filling placeholder random data
    const randomService = Math.floor(Math.random() * services.length) // re-used to set the select's random value on first render
    const randomState = Math.floor(Math.random() * states.length) // re-used to set the select's random value on first render
    const [id, setId] = useState(Date.now())
    const [prenom, setPrenom] = useState(prenoms[Math.floor(Math.random() * prenoms.length)])
    const [nom, setNom] = useState(noms[Math.floor(Math.random() * noms.length)])
    const [naissance, setNaissance] = useState(randomDate(new Date(1950,0 ,1), new Date(2004,0,1)).toISOString().split('T')[0])
    const [debut, setDebut] = useState(randomDate(new Date(2010,0 ,1), new Date()).toISOString().split('T')[0])
    const [rue, setRue] = useState(Math.round(Math.random() * 100 + 1) + ' ' + rues[Math.floor(Math.random() * rues.length)])
    const [ville, setVille] = useState(villes[Math.floor(Math.random() * villes.length)])
    const [etat, setEtat] = useState(states[randomState].value)
    const [codePostal, setCodePostal] = useState(Math.round(Math.random() * 90000) + 1000)
    const [service, setService] = useState(services[randomService].label)

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
        ouvertureModale2()
    }

    const monSelect = {
        control: styles => ({...styles, paddingTop: '9px', paddingBottom: '9px', border: 'none',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1)', borderRadius:'4px'})
    }

    return (
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-7 py-5">
                    <EnTete />
                    <Link to="/liste-employes" className="sticky-link">
                        <div className="sticky-tab">
                            View Current Employees
                        </div>
                    </Link>
                    <div className="row text-center marge-titre">
                        <h3>Create Employee</h3>
                    </div>                    
                    <form action="#" id="create-employee" onSubmit={(e) => nouvelEmploye(e)}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group first">
                                    <label htmlFor="first-name">First Name</label>
                                    <input type="text" className="form-control" id="first-name" placeholder={prenom} onChange={(e) => setPrenom(e.target.value)} />
                                </div>    
                            </div>
                            <div className="col-md-6">
                                <div className="form-group first">
                                    <label htmlFor="last-name">Last Name</label>
                                    <input type="text" className="form-control" id="last-name" placeholder={nom} onChange={(e) => setNom(e.target.value)} />
                                </div>    
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group first">
                                    <label htmlFor="date-of-birth">Date of Birth</label>
                                    <input id="date-of-birth" type="text" className="form-control" placeholder={naissance}
                                        onFocus={(e) => (e.target.type = "date")} onMouseEnter={(e) => (e.target.type = "date")}
                                        onBlur={(e) => (e.target.type = "text")} onMouseLeave={(e) => (e.target.type = "text")}
                                        onChange={(e) => setNaissance(e.target.value)} />
                                </div>    
                            </div>
                            <div className="col-md-6">
                                <div className="form-group first">
                                    <label htmlFor="start-date">Start Date</label>
                                    <input id="start-date" type="text" className="form-control" placeholder={debut}
                                        onFocus={(e) => (e.target.type = "date")} onMouseEnter={(e) => (e.target.type = "date")}
                                        onBlur={(e) => (e.target.type = "text")} onMouseLeave={(e) => (e.target.type = "text")}
                                        onChange={(e) => setDebut(e.target.value)} />
                                </div>    
                            </div>
                        </div>

                        <fieldset className="address form-group border p-3">
                            <legend className="w-auto px-2">Address</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group first">
                                        <label htmlFor="street">Street</label>
                                        <input id="street" type="text" className="form-control" placeholder={rue} onChange={(e) => setRue(e.target.value)}  />
                                    </div>    
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group first">
                                        <label htmlFor="city">City</label>
                                        <input id="city" type="text" className="form-control" placeholder={ville} onChange={(e) => setVille(e.target.value)}  />
                                    </div>    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group first">
                                        <label htmlFor="state">State</label>
                                        <Select
                                            name="state"
                                            id="state"
                                            onChange={(e) => setEtat(e.value)}
                                            value={states.value}
                                            options={states}
                                            defaultValue={states[randomState]}
                                            styles={monSelect}
                                        />
                                    </div>    
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group first">
                                        <label htmlFor="zip-code">Zip Code</label>
                                        <input id="zip-code" type="number" className="form-control" placeholder={codePostal} onChange={(e) => setCodePostal(e.target.value)} />
                                    </div>    
                                </div>
                            </div>
                        </fieldset>
                        <label htmlFor="department">Department</label>
                        <Select
                            name="department"
                            id="department"
                            onChange={(e) => setService(e.label)}
                            value={services.value}
                            options={services}
                            defaultValue={services[randomService]}
                            styles={monSelect}
                        />
                        <div className="row">
                            <div className="col-md-6 col-12 text-md-left text-center marge-boutons"><input type ='submit' value='Save' className="btn btn-primary full-width float-md-start" /></div>
                            <div className="col-md-6 col-12 text-md-right text-center marge-boutons"><input type ='submit' value='Add 100 random employees' className="btn btn-primary float-md-end full-width"
                                onClick={(e) => ajoute100Employes(e)} /></div>
                        </div>
                        {etatModale && (<Modale texte={'Employee Created!'} fermetureModale={fermetureModale} />)}
                        {etatModale2 && (<Modale texte={'100 Employés Ajoutés !'} fermetureModale={fermetureModale2} />)}
                    </form>
                </div>
                
            </div>
            
    </div>
    )
}

export default CreeEmploye