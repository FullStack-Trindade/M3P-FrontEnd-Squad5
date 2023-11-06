import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetRecordsID } from "../../services/MedicalRecord/MedicalRecord.service";

export const PatientHandbookComponent = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState();
  const [appointments, setAppointments] = useState();
  const [exercise, setExercise] = useState();
  const [diet, setDiet] = useState();
  const [medicine, setMedicine] = useState();
  const [exams, setExam] = useState();

  useEffect(() => {
    if (id) {
      const getRecords = async () => {
        await GetRecordsID(id).then((res) => {
          setPatient(res.data);
          setAppointments(res.data.appointments);
          setExercise(res.data.physicalExercises);
          setDiet(res.data.diets);
          setMedicine(res.data.medicines);
          setExam(res.data.exams);
        });
      };
      getRecords();
    }
  }, []);

  return (
    <section>
      {patient && (
        <div className="patientRecordsContent" key={patient.id}>
          <h1> {patient.fullName} </h1>
          <span>Convênio: {patient.healthInsurance} </span>
          <span>Telefone: {patient.emergency} </span>
          <span>Alergia: {patient.listOfAllergies} </span>
          <span>Cuidado Especifico: {patient.specificCare} </span>
        </div>
      )}

      <div className="patientRecordsContent">
        <h1>Consultas</h1>

        <div>
          {appointments &&
            appointments.map((appointment) => {
              return (
                <div className="patientRecordsContent" key={appointment.id}>
                  <div className=" PatientRecordsRow">
                    <h2>Motivo da Consulta: {appointment.appointmentReason}</h2>
                    <Link
                      className="LinkPatientRecord"
                      to={`/cadastro/consulta/${appointment.id}`}
                    >
                      Editar
                    </Link>
                  </div>
                  <span>Descrição:</span>
                  <p> {appointment.description}</p>
                  <span>Receita prescrevida:</span>
                  <p> {appointment.prescriptionMedication} </p>
                  <p> {appointment.dosagePrecautions} </p>
                  <div>
                    <span>Data da Consulta:{appointment.appointmentDate}</span>
                    <span>
                      Horário da Consulta:{appointment.appointmentTime}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="patientRecordsContent">
          <h1>Exames</h1>
          {exams &&
            exams.map((exam) => {
              return (
                <div className="patientRecordsContent" key={exam.id}>
                  <div className=" PatientRecordsRow">
                    <h2>{exam.laboratory}</h2>
                    <Link
                      className="LinkPatientRecord"
                      to={`/cadastro/exame/${exam.id}`}
                    >
                      Editar
                    </Link>
                  </div>
                  <span>{exam.name}</span>
                  <span>Tipo do Exame:{exam.examType}</span>
                  <span>Resultado:</span>
                  <p>{exam.results}</p>
                  <div>
                    <span>Data do Exame:{exam.examDate}</span>
                    <span>Horário do Exame:{exam.examTime}</span>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="patientRecordsContent">
          <h1>Dietas</h1>
          {diet &&
            diet.map((diet) => {
              return (
                <div className="patientRecordsContent" key={diet.id}>
                  <div className=" PatientRecordsRow">
                    <h2>Nome da Dieta: {diet.name}</h2>
                    <Link
                      className="LinkPatientRecord"
                      to={`/cadastro/dieta/${diet.id}`}
                    >
                      Editar
                    </Link>
                  </div>
                  <span>Tipo de Dieta:{diet.dietType}</span>
                  <span>Descrição da Dieta:{diet.description}</span>

                  <div>
                    <span>Data do Exame:{diet.date}</span>
                    <span>Horário do Exame:{diet.time}</span>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="patientRecordsContent">
          <h1>Exercício</h1>
          {exercise &&
            exercise.map((exercise) => {
              return (
                <div className="patientRecordsContent" key={exercise.id}>
                  <div className=" PatientRecordsRow">
                    <h2>
                      Nome do Série de Exercícios: {exercise.exerciseName}
                    </h2>
                    <Link
                      className="LinkPatientRecord"
                      to={`/cadastro/exercicio/${exercise.id}`}
                    >
                      Editar
                    </Link>
                  </div>
                  <span>Tipo de exercício:{exercise.exerciseType}</span>
                  <span>Quantidade por Semana:{exercise.quantityPerWeek}</span>
                  <span>Descrição da Dieta:{exercise.description}</span>

                  <div>
                    <span>Data do Exercício:{exercise.date}</span>
                    <span>Horário do Exercício:{exercise.time}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="patientRecordsContent">
        <h1>Medicamento</h1>
        {medicine &&
          medicine.map((medicine) => {
            return (
              <div className="patientRecordsContent" key={medicine.id}>
                <div className=" PatientRecordsRow">
                  <h2>Nome do Medicamento: {medicine.name}</h2>
                  <Link
                    className="LinkPatientRecord"
                    to={`/cadastro/exercicio/${medicine.id}`}
                  >
                    Editar
                  </Link>
                </div>
                <span>Tipo de medicação:{medicine.medicineType}</span>
                <span>Quantidade de medicação:{medicine.amount}</span>
                <span>Unidade de medicação:{medicine.unit}</span>
                <span>Observações :{medicine.comments}</span>

                <div>
                  <span>Data :{exercise.date}</span>
                  <span>Horário :{exercise.time}</span>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};
