import { Link } from "react-router-dom"
import { useState } from "react"
import { useForm } from "react-hook-form"

function CreeEmploye() {

    const { register, handleSubmit } = useForm()
    const [data, setData] = useState("")

    return (
        <div className="container">
            <Link to="/liste-employes">View Current Employees</Link>
            <h2>Create Employee</h2>
            <form id="create-employee" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" {...register("firstName")} placeholder="First name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" {...register("lastName")} placeholder="Last name" />

                <label htmlFor="date-of-birth">Date of Birth</label>              
                <input type="date" id="date-of-birth" {...register("dateOfBirth")} placeholder="Date of birth" />

                <label htmlFor="start-date">Start Date</label>
                <input type="date" id="start-date" {...register("startDate")} placeholder="Start date" />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" {...register("street")} placeholder="Street" />

                    <label htmlFor="city">City</label>
                    <input type="text" id="city" {...register("city")} placeholder="City" />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state"></select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input type="text" id="zip-code" {...register("zipCode")} placeholder="Zip code" />
                    
                </fieldset>
                <label htmlFor="department">Department</label>
                <select name="department" id="department" {...register("department")}>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Engineering">Engineering</option>
                    <option value="HumanResource">Human Resources</option>
                    <option value="Legal">Legal</option>
                </select>
                <p>{data}</p>
                <input type="submit" value="save" />
            </form>
    </div>
    )
}

export default CreeEmploye