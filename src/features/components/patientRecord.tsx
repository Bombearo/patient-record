"use client"
import Link from "next/link"
import {Patient} from "@/types/patient"
import {useState} from "react"
import "./patientRecord.css"

interface PatientRecordProps{
    patient:Patient,
    key:number
}

function PatientRecord({patient,key}:PatientRecordProps) {
    const [isHover, setHover] = useState(false);

    return <Link href={`/patient/${patient.patientID}`}>
          <div
          key={key}
          className={"patient-record" + (isHover?" hover":"")}
          onMouseEnter={()=>setHover(true)}
          onMouseLeave={()=>setHover(false)}
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
        </Link>;
}

export default PatientRecord;