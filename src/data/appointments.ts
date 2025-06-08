import { Appointment, AppointmentType, Status } from "@/types/appointment";

const appointments: Appointment[] = [
  {
    id: "1",
    datetime: new Date("2023-10-01T10:00:00"),
    appointmentType: AppointmentType.Consultation,
    status: Status.Scheduled,
    patientID: "12345",
  },
  {
    id: "2",
    datetime: new Date("2023-10-02T11:00:00"),
    appointmentType: AppointmentType.Checkup,
    status: Status.Attended,
    patientID: "67890",
  },
  {
    id: "3",
    datetime: new Date("2023-10-03T12:00:00"),
    appointmentType: AppointmentType.Surgery,
    status: Status.Cancelled,
    patientID: "12345",
  },
    {
        id: "4",
        datetime: new Date("2023-10-04T13:00:00"),
        appointmentType: AppointmentType.Consultation,
        status: Status.Scheduled,
        patientID: "67890",
    },
    {
        id: "5",
        datetime: new Date("2023-10-05T14:00:00"),
        appointmentType: AppointmentType.Checkup,
        status: Status.Attended,
        patientID: "12345",
    },

    {
        id: "6",
        datetime: new Date("2023-10-06T09:30:00"),
        appointmentType: AppointmentType.Surgery,
        status: Status.Scheduled,
        patientID: "67890",
    },
    {
        id: "7",
        datetime: new Date("2023-10-07T15:45:00"),
        appointmentType: AppointmentType.Consultation,
        status: Status.Attended,
        patientID: "12345",
    },
    {
        id: "8",
        datetime: new Date("2023-10-08T08:15:00"),
        appointmentType: AppointmentType.Checkup,
        status: Status.Cancelled,
        patientID: "67890",
    },
    {
        id: "9",
        datetime: new Date("2023-10-09T16:00:00"),
        appointmentType: AppointmentType.Surgery,
        status: Status.Attended,
        patientID: "12345",
    },
    {
        id: "10",
        datetime: new Date("2023-10-10T11:30:00"),
        appointmentType: AppointmentType.Consultation,
        status: Status.Scheduled,
        patientID: "67890",
    },
    ...Array.from({ length: 100 }, (_, i) => {
      const id = (11 + i).toString();
      const baseDate = new Date("2023-10-11T09:00:00");
      baseDate.setDate(baseDate.getDate() + i);
      const appointmentTypes = [
        AppointmentType.Consultation,
        AppointmentType.Checkup,
        AppointmentType.Surgery,
      ];
      const statuses = [
        Status.Scheduled,
        Status.Attended,
        Status.Cancelled,
      ];
      const patientIDs = ["12345", "67890", "55667", "11223", "44556"];
      return {
        id,
        datetime: new Date(baseDate),
        appointmentType: appointmentTypes[i % appointmentTypes.length],
        status: statuses[i % statuses.length],
        patientID: patientIDs[i % patientIDs.length],
      };
    }),
];

export default appointments