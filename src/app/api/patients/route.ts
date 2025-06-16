import {patients} from "@/data/patients";
import { Patient } from "@/types/patient";

export async function GET(request: Request) {
  // For example, fetch data from your DB here
  
  await new Promise(resolve => setTimeout(resolve, 2000))

  return new Response(JSON.stringify(patients), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
 
export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json();
  //const { name } = body;
 
  // e.g. Insert new user into your DB
  //const newUser = { id: Date.now(), name };
  const patientID="00000";
  const patient = body;
  patient.patientID = patientID;
  console.log(patient)
  patients.unshift(patient)
 
  return new Response(JSON.stringify(patient), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}