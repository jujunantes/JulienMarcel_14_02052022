import TableEmployes from '../../composants/TableEmployes'
import { Link } from "react-router-dom"
import EnTete from "../../composants/EnTete"

function ListeEmployes() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 py-5">
              <EnTete />
              <Link to="/" className="sticky-link">
                  <div className="sticky-tab">
                      Home
                  </div>
              </Link>
              <div className="row text-center marge-titre">
                  <h3>Current Employees</h3>
              </div>
              <div className="tableau" >
                <TableEmployes />
              </div>             
          </div>
        </div>
      </div>
    )
  }
  
  export default ListeEmployes