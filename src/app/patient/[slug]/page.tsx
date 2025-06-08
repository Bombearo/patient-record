"use client"
import patients from "@/data/patients"
import appointments from "@/data/appointments"
import {Patient} from "@/types/patient"
import { Appointment } from "@/types/appointment"

import {useEffect, useState, use} from "react"
import PatientRecord from "@/features/components/patientRecord"
import Link from "next/link"
import "./patient.css"

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
        <Link href="/">Go Back!</Link>
        <div>
            <h1>Patient Records for {currentPatient.name}</h1>
            <p>Patient info below: ID, name and DOB</p>
            <PatientRecord patient={currentPatient} key={0}/>
        </div>
        
        <div>
            <h2>Appointments for {currentPatient.name}</h2>
            <div className="appointments">
                <div className="appointment-record">
                    <div>AppointmentID</div>
                <div>Status</div>
                <div>Date</div>
                <div>Time</div>

                </div>
                
            
            {patientAppointments && patientAppointments.map((app,index) => (
                <div key={index} className="appointment-record">
                    <div>
                    {app.id}
                    </div>
                    
                    <div>
                        {app.status}
                    </div>
                    <div>
                    {app.datetime.toLocaleDateString()}
                    </div>
                    <div>
                    {app.datetime.toLocaleTimeString()}
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>  );
}

export default PatientPage;