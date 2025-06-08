"use client"
import patients from "@/data/patients"
import appointments from "@/data/appointments"
import {Patient} from "@/types/patient"
import { Appointment } from "@/types/appointment"
import {useEffect, useState, use} from "react"

interface PatientPageProps{
    params:Promise<{slug:string}>
}

function getPatient(patientID:string){
    const possiblePeople:Patient[] = patients.filter((person) => {return person.patientID === patientID})
    if (possiblePeople.length === 0){
        return null;
    }
    return possiblePeople[0]

}

function getAppointments(patientID:string){
    const patientAppointments:Appointment[] = appointments.filter((appointment) =>{
        return appointment.patientID === patientID
    })
    return patientAppointments;
}


function PatientPage({params}:PatientPageProps) {
    const slug = use(params)
    const [currentPatient,setCurrentPatient] = useState<Patient|null>(null)
    const [patientAppointments, setPatientAppointments] = useState<Appointment[]|null>(null)

    useEffect(() =>{
        
        const id:string = slug.slug

        const patient:Patient|null = getPatient(id)
        setCurrentPatient(patient)
        console.log(currentPatient)
        
    }, [])


    // Update the appointment state when currentPatient exists
    useEffect(() =>{
        console.log(currentPatient)
        if (currentPatient !== null){

            const apps = getAppointments(currentPatient.patientID)
            console.log(apps)
            setPatientAppointments(apps)
        }

    }, [currentPatient]
    
    )
    


    if (currentPatient == null){
        return "Patient Not Found"
    }
    return (<div>
        {currentPatient.name}
        <div>
            {patientAppointments && patientAppointments.map((app,index) => (
                <div key={index}>
                    {app.id}
                    {app.status}

                </div>
            ))}
        </div>
    </div>  );
}

export default PatientPage;