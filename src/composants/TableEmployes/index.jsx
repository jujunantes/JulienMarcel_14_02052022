import DataTable from 'react-data-table-component'
import { useSelector } from "react-redux"
import React, { useState } from "react"

const columns = [
    {
        name: 'First Name',
        selector: row => row.prenom,
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: row => row.nom,
        sortable: true,
    },
    {
        name: 'Start Date',
        selector: row => row.debut,
        sortable: true,
    },
    {
        name: 'Department',
        selector: row => row.service,
        sortable: true,
    },
    {
        name: 'Date of Birth',
        selector: row => row.naissance,
        sortable: true,
    },
    {
        name: 'Street',
        selector: row => row.rue,
        sortable: true,
    },
    {
        name: 'City',
        selector: row => row.ville,
        sortable: true,
    },
    {
        name: 'State',
        selector: row => row.etat,
        sortable: true,
    },
    {
        name: 'Zip Code',
        selector: row => row.codePostal,
        sortable: true,
    },
]

function filtre(item, searchTerm) {
    if (item.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.debut.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.naissance.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.rue.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ville.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.etat.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.etat.toString().includes(searchTerm.toLowerCase()))
        { return true}
    else {return false}
}

function TableEmployes() {
    const [searchTerm, setSearchTerm] = useState("")
    const data = useSelector((state) => state.user)
    return (
    <div>
        <label>
          Search:
          <input type='text' name='recherche' onChange={(e) => setSearchTerm(e.target.value)}></input>
        </label>
        <DataTable
            columns={columns}
            data={data.filter((item) => {
                if (searchTerm === "") {
                  return item
                } else if (
                  filtre(item, searchTerm)
                ) {
                  return item
                }
              })}
              pagination
              responsive
              subHeaderAlign="right"
              subHeaderWrap
        />
    </div>
        
    )
}

export default TableEmployes