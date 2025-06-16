
"use client"
import PatientRecord from "@/features/components/patientRecord";
import { Patient } from "@/types/patient";
import AddPatientForm from "@/features/components/addPatientForm";

import { useEffect, useState } from "react";

import "./home.css"



export default function Home() {
  const [patientRecords,setPatientRecords] = useState<Patient[]|null>(null);
  const [isLoading, setLoading] = useState<boolean>(true)

  useEffect(()=> {
      setInterval(() =>{
        setLoading(true);
        fetch("/api/patients")
        .then(data => data.json())
        .then(
          (data) => {
            const patients = data.map((item:Patient) => ( {...item,dob:new Date(item.dob)}))
            setPatientRecords(patients)
            setLoading(false)
          }
        )
      }, 5000
      )

      

      
  },[])



  return (
   <div className="main">
    <h1>Patient Records</h1>
    <div className="patients">
      <div className="header patient-record">
          <div className="patient-ID">ID</div>
          <div className="patient-name">Name</div>
          <div className="patient-dob">Date of birth (dd/mm/yyyy)</div>
      </div>
      
      {isLoading && <div>Loading</div>}

      <AddPatientForm/>


      {patientRecords && patientRecords.map((patient,index) =>(
        <div key={index}>
          <PatientRecord patient={patient}/>
        </div>
      ))}

    </div>
    </div>

  );
}
