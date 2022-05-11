import DataTable from 'react-data-table-component';

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
        selector: row => row.service['value'],
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
        selector: row => row.etat['value'],
    },
    {
        name: 'Zip Code',
        selector: row => row.codePostal,
    },
]

const data = [
    /*
    {
        id: 1652193284089,
        prenom: 'Julien',
        nom: 'Marcel',
        rue: '25 rue Malleret',
        ville: 'Bordeaux',
        codePostal: '33000',
        service: {
          value: 'Engineering',
          label: 'Engineering'
        }
      },
    {
        id: 1652198389801,
        prenom: 'Bob',
        nom: 'Morane',
        rue: 'quai Voltaire',
        ville: 'Paris',
        codePostal: '75001',
        service: {
          value: 'Engineering',
          label: 'Engineering'
        }
      },
      */
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

function TableEmployes() {
    return (
        <DataTable
            columns={columns}
            data={data}
        />
    )
}

export default TableEmployes