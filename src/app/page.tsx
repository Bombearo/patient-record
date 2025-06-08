"use client"
import patients from "@/data/patients";
import PatientRecord from "@/features/components/patientRecord";
import {useState} from "react"

import "./home.css"



export default function Home() {
  const [isHover, setHover] = useState(false)




  return (
   <div className="main">
    <h1>Patient Records</h1>
    <div className="patients">
      <div className="header patient-record">
          <div className="patient-ID">ID</div>
          <div className="patient-name">Name</div>
          <div className="patient-dob">Date of birth (dd/mm/yyyy)</div>
      </div>
      
      {patients.map((patient,index) =>(
        <PatientRecord patient={patient} key={index}/>
      ))}

    </div>
    </div>

  );
}
