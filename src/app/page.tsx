import patients from "@/data/patients";
import Link from "next/link"

export default function Home() {
  return (
   <div>
    <h1>Patient Records</h1>
    <div className="patients">
      {patients.map((patient,index) =>(
        <Link href={`/patient/${patient.patientID}`} key={index}>
        <div  className="patient-record">
          <div className="patient-ID">
            {patient.patientID}
          </div>
          <div className="patient-name">
            {patient.name}
          </div>

          {patient.dob.toLocaleDateString()}

        </div>

        </Link>
      ))}

    </div>
    </div>
  );
}
