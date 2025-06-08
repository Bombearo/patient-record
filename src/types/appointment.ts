
enum AppointmentType{
    Consultation="Consultation",
    Checkup="Checkup",
    Surgery="Surgery"
}

enum Status{
    Scheduled="Scheduled",
    Attended="Attended",
    Cancelled="Cancelled"
}


interface Appointment{
    id:string
    datetime:Date,
    appointmentType:AppointmentType,
    status:Status,
    patientID:string
}

export type {Appointment}
export {AppointmentType, Status};