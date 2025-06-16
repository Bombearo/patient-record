import { Patient } from '@/types/patient';

export const patients: Patient[] = [
  {
    name: 'John Doe',
    dob: new Date('1980-01-01'),
    patientID: '12345',
  },
  {
    name: 'Jane Smith',
    dob: new Date('1990-02-02'),
    patientID: '67890',
  },
  {
    name: 'Alice Johnson',
    dob: new Date('1975-03-15'),
    patientID: '11223',
  },
  {
    name: 'Bob Williams',
    dob: new Date('1985-04-20'),
    patientID: '33445',
  },
  {
    name: 'Carol Martinez',
    dob: new Date('1992-05-30'),
    patientID: '55667',
  },
  {
    name: 'David Lee',
    dob: new Date('1978-06-10'),
    patientID: '77889',
  },
  {
    name: 'Emily Clark',
    dob: new Date('1983-07-25'),
    patientID: '99001',
  },
  {
    name: 'Frank Harris',
    dob: new Date('1969-08-12'),
    patientID: '22334',
  },
  {
    name: 'Grace Kim',
    dob: new Date('1995-09-18'),
    patientID: '44556',
  },
  {
    name: 'Henry Turner',
    dob: new Date('1988-10-05'),
    patientID: '66778',
  },
  {
    name: 'Irene Scott',
    dob: new Date('1972-11-22'),
    patientID: '88990',
  },
  {
    name: 'Jack Evans',
    dob: new Date('1993-12-14'),
    patientID: '10112',
  },
];


export const patientsById:Record<string,Patient> = {}

for (let patient of patients){
  patientsById[patient.patientID] = patient;
}


