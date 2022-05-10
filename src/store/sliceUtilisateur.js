import { createSlice  } from '@reduxjs/toolkit'

const sliceUtilisateur = createSlice({
    name: 'user',
    initialState:
        JSON.parse(localStorage.getItem('employes')) !== null
        ? [...JSON.parse(localStorage.getItem('employes'))] : [],
    reducers: {
        ajouteEmploye : (state, action) => {
            state.push(action.payload)
            localStorage.setItem('employes', JSON.stringify(state))
        }
    }
})

export const { actions, reducer } = sliceUtilisateur
export const { ajouteEmploye } = actions
export default reducer