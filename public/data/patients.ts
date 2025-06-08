import { Patient } from '@/types/patient';

const patients: Patient[] = [
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
];

export default patients;
