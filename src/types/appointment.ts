
enum AppointmentType{
    Consultation,
    Checkup,
    Surgery
}

enum Status{
    Scheduled,
    Attended,
    Cancelled
}


interface Appointment{
    datetime:Date,
    appointmentType:AppointmentType,
    status:Status,
    patientID:string
}