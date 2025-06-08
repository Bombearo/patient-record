import patients from "@/data/patients";


export default function Home() {
  return (
   <div>
    <h1>Patient Records</h1>
    <div className="patients">
      {patients.map((patient,index) =>(
        <div key={index} className="patient-record">
          <div className="patient-ID">
            {patient.patientID}
          </div>
          <div className="patient-name">
            {patient.name}
          </div>

          {patient.dob.toLocaleDateString()}

        </div>
      ))}

    </div>
    </div>
  );
}
