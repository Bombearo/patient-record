"use client"
import patients from "@/data/patients";
import Link from "next/link"
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
          <div className="patient-dob">Date of birth</div>
      </div>
      
      {patients.map((patient,index) =>(
        
          <Link href={`/patient/${patient.patientID}`}>
          <div
          key={index}
          className={"patient-record"}
        >
          <div className="patient-ID">
            
            {patient.patientID}
          </div>
          <div className="patient-name">
            
            {patient.name}
          </div>
          <div className="patient-dob">
          {patient.dob.toLocaleDateString()}

          </div>
          </div>
          </Link>


      ))}

    </div>
    </div>

  );
}
