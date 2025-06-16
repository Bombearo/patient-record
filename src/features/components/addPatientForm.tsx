"use client"

import "./addPatientForm.css"
import { useState } from "react"

function addPatientForm() {
    const [name, setName] = useState<string>("Jaden")
    const [dob, setDob] = useState<string>("2024-07-06")


    const addPatient = () => 
    {
        

        console.log(name,dob)

        fetch("/api/patients", {
            method:"POST", 
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify(
                {name,
                 dob,
                }
            )
        })
    }


    return <div className="form">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" onChange={(e)=> setName(e.target.value)} value={name}></input>
        <label htmlFor="dob">Date of Birth</label>
        <input id="dob" type="date" onChange={(e) => setDob(e.target.value)} value={dob}></input>
        <button onClick={addPatient}>Submit</button>
    </div>;
}

export default addPatientForm;