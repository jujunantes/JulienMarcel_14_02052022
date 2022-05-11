import DataTable from 'react-data-table-component'
import { useSelector } from "react-redux"

const columns = [
    {
        name: 'First Name',
        selector: row => row.prenom,
    },
    {
        name: 'Last Name',
        selector: row => row.nom,
    },
    {
        name: 'Start Date',
        selector: row => row.debut,
    },
    {
        name: 'Department',
        selector: row => row.service,
    },
    {
        name: 'Date of Birth',
        selector: row => row.naissance,
    },
    {
        name: 'Street',
        selector: row => row.rue,
    },
    {
        name: 'City',
        selector: row => row.ville,
    },
    {
        name: 'State',
        selector: row => row.etat,
    },
    {
        name: 'Zip Code',
        selector: row => row.codePostal,
    },
]

/*
const data = [
    {
        id: 1652201809579,
        prenom: 'Maylis',
        nom: 'Marcel',
        naissance: '1980-08-27',
        debut: '2020-05-23',
        rue: '25 rue Malleret',
        ville: 'Bordeaux',
        etat: {
          label: 'Vermont',
          value: 'VT'
        },
        codePostal: '33000',
        service: {
          value: 'Marketing',
          label: 'Marketing'
        }
      },

    {
        id: 1652202387406,
        prenom: 'Marie-Reine',
        nom: 'Marcel',
        naissance: '2023-08-27',
        debut: '2041-05-23',
        rue: '25 rue Malleret',
        ville: 'Bordeaux',
        etat: {
          label: 'Vermont',
          value: 'VT'
        },
        codePostal: '33000',
        service: {
          value: 'Marketing',
          label: 'Marketing'
        }
      }
]
*/

//const data = JSON.parse(window.localStorage.getItem('user')[0])


function TableEmployes() {
    const data = useSelector((state) => state.user)
    return (
        <DataTable
            columns={columns}
            data={data}
        />
    )
}

export default TableEmployes