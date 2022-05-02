import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from '../pages/Accueil'
import AjouteEmploye from '../pages/AjouteEmploye'
import Erreur404 from '../composants/Erreur404'

export default function MyRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/ajoute-employe" element={<AjouteEmploye />} />
                <Route path="*" element={<Erreur404 />} />
            </Routes>
        </Router>
    )
}