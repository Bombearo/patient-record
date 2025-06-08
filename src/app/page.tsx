import patients from "@/data/patients";
import Link from "next/link"

import "./home.css"



export default function Home() {
  return (
   <div className="main">
    <h1>Patient Records</h1>
    <table className="patients">
      <thead>
  <tr className="header">
          <th>ID</th>
          <th>Name</th>
          <th>Date of birth</th>

        </tr>
      </thead>
      
      <tbody>
        
      {patients.map((patient,index) =>(
        
        <tr
          className="patient-record"
        >
          
          <td className="patient-ID">
            <Link href={`/patient/${patient.patientID}`} key={index}></Link>
            {patient.patientID}
          </td>
          <td className="patient-name">
            <Link href={`/patient/${patient.patientID}`} key={index}></Link>
            {patient.name}
          </td>
          <td>
        <Link href={`/patient/${patient.patientID}`} key={index}> 
          {patient.dob.toLocaleDateString()}

          </Link>
          </td>

        </tr>

      ))}
      </tbody>

    </table>
    </div>
  );
}
