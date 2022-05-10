import { createSlice  } from '@reduxjs/toolkit'

const sliceUtilisateur = createSlice({
    name: 'user',
    initialState:
        JSON.parse(sessionStorage.getItem('employes')) !== null
        ? [...JSON.parse(sessionStorage.getItem('employes'))] : [],
    reducers: {
        ajouteEmploye : (state, action) => {
            state.push(action.payload)
            sessionStorage.setItem('employes', JSON.stringify(state))
        }
    }
})

export const { actions, reducer } = sliceUtilisateur
export const { ajouteEmploye } = actions
export default reducer