import EnTete from "../../composants/EnTete"
import CreeEmploye from "../../composants/CreeEmploye"

function Accueil() {
    return (
      <div className="App container">
        <EnTete />
        <CreeEmploye />
      </div>
    )
  }
  
  export default Accueil