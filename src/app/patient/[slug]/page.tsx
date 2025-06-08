"use client"
import patients from "@/data/patients"
import appointments from "@/data/appointments"
import {Patient} from "@/types/patient"
import {useEffect, useState} from "react"

interface PatientPageProps{
    params:{
        slug:string;
    }
}

function getPatient(patientID:string){
    const possiblePeople:Patient[] = patients.filter((person) => person.patientID === patientID)
    if (possiblePeople.length === 0){
        return null;
    }
    return possiblePeople[0]

}


function PatientPage({params: {slug}}:PatientPageProps) {
    
    const patient:Patient|null = getPatient(slug)
    if (patient == null){
        return "Patient Not Found"
    }

    const [currentPatient,setCurrentPatient] = useState<Patient>(patient)

    useEffect(() =>{

    }, [])

    return (<div>
        {currentPatient.name}

    </div>  );
}

export default PatientPage;