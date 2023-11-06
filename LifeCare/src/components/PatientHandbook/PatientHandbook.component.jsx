import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetRecordsID } from "../../services/MedicalRecord/MedicalRecord.service";
import * as Styled from "./PatientHandbook.styles";
import { ThemeContext } from "../../contexts/ThemeContext/Theme.context";

export const PatientHandbookComponent = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState();
  const [appointments, setAppointments] = useState();
  const [exercise, setExercise] = useState();
  const [diet, setDiet] = useState();
  const [medicine, setMedicine] = useState();
  const [exams, setExam] = useState();
  const { theme, setTheme } = useContext(ThemeContext);

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
    <Styled.Form $colors={theme.cores}>
      {patient && (
        <Styled.FormColumn key={patient.id}>
          <Styled.FormTitle $colors={theme.texto}>
            {" "}
            {patient.fullName}{" "}
          </Styled.FormTitle>
          <Styled.FormSubTitle $colors={theme.texto}>
            Convênio: {patient.healthInsurance}{" "}
          </Styled.FormSubTitle>
          <Styled.FormSubTitle $colors={theme.texto}>
            Telefone: {patient.emergencyContact}{" "}
          </Styled.FormSubTitle>
          <Styled.FormSubTitle $colors={theme.texto}>
            Alergia: {patient.listOfAllergies}{" "}
          </Styled.FormSubTitle>
          <Styled.FormSubTitle $colors={theme.texto}>
            Cuidado Especifico: {patient.specificCare}{" "}
          </Styled.FormSubTitle>
        </Styled.FormColumn>
      )}

      <Styled.FormColumn>
        <Styled.FormTitle $colors={theme.texto}>Consultas</Styled.FormTitle>

        <div>
          {appointments &&
            appointments.map((appointment) => {
              return (
                <div key={appointment.id}>
                  <Styled.FormRow>
                    <Styled.FormTitle $colors={theme.texto}>
                      Motivo da Consulta: {appointment.appointmentReason}
                    </Styled.FormTitle>
                    <Link
                      className="LinkPatientRecord"
                      to={`/cadastro/consulta/${appointment.id}`}
                    >
                      Editar
                    </Link>
                  </Styled.FormRow>
                  <Styled.FormSubTitle $colors={theme.texto}>
                    Descrição:
                  </Styled.FormSubTitle>
                  <Styled.FormSubTitle $colors={theme.texto}>
                    {" "}
                    {appointment.description}
                  </Styled.FormSubTitle>
                  <Styled.FormSubTitle $colors={theme.texto}>
                    Receita prescrevida:
                  </Styled.FormSubTitle>
                  <Styled.FormSubTitle $colors={theme.texto}>
                    {" "}
                    {appointment.prescriptionMedication}{" "}
                  </Styled.FormSubTitle>
                  <Styled.FormSubTitle $colors={theme.texto}>
                    {" "}
                    {appointment.dosagePrecautions}{" "}
                  </Styled.FormSubTitle>
                  <Styled.ButtonWrapper>
                    <Styled.FormSubTitle $colors={theme.texto}>
                      Data da Consulta:{appointment.appointmentDate}
                    </Styled.FormSubTitle>
                    <Styled.FormSubTitle $colors={theme.texto}>
                      Horário da Consulta:{appointment.appointmentTime}
                    </Styled.FormSubTitle>
                  </Styled.ButtonWrapper>
                </div>
              );
            })}
        </div>
      </Styled.FormColumn>

      <Styled.FormColumn>
        <Styled.FormTitle $colors={theme.texto}>Exames</Styled.FormTitle>
        {exams &&
          exams.map((exam) => {
            return (
              <div className="patientRecordsContent" key={exam.id}>
                <Styled.FormRow>
                  <Styled.FormTitle $colors={theme.texto}>
                    {exam.laboratory}
                  </Styled.FormTitle>
                  <Link
                    className="LinkPatientRecord"
                    to={`/cadastro/exame/${exam.id}`}
                  >
                    Editar
                  </Link>
                </Styled.FormRow>
                <Styled.FormSubTitle $colors={theme.texto}>
                  {exam.name}
                </Styled.FormSubTitle>
                <Styled.FormSubTitle $colors={theme.texto}>
                  Tipo do Exame:{exam.examType}
                </Styled.FormSubTitle>
                <Styled.FormSubTitle $colors={theme.texto}>
                  Resultado:
                </Styled.FormSubTitle>
                <Styled.FormSubTitle $colors={theme.texto}>
                  {exam.results}
                </Styled.FormSubTitle>
                <Styled.ButtonWrapper>
                  <Styled.FormSubTitle $colors={theme.texto}>
                    Data do Exame:{exam.examDate}
                  </Styled.FormSubTitle>
                  <Styled.FormSubTitle $colors={theme.texto}>
                    Horário do Exame:{exam.examTime}
                  </Styled.FormSubTitle>
                </Styled.ButtonWrapper>
              </div>
            );
          })}
      </Styled.FormColumn>
      <Styled.FormColumn>
        <Styled.FormTitle $colors={theme.texto}>Dietas</Styled.FormTitle>
        {diet &&
          diet.map((diet) => {
            return (
              <div className="patientRecordsContent" key={diet.id}>
                <Styled.FormRow>
                  <Styled.FormTitle $colors={theme.texto}>
                    Nome da Dieta: {diet.name}
                  </Styled.FormTitle>
                  <Link
                    className="LinkPatientRecord"
                    to={`/cadastro/dieta/${diet.id}`}
                  >
                    Editar
                  </Link>
                </Styled.FormRow>
                <Styled.FormSubTitle $colors={theme.texto}>
                  Tipo de Dieta:{diet.dietType}
                </Styled.FormSubTitle>
                <Styled.FormSubTitle $colors={theme.texto}>
                  Descrição da Dieta:{diet.description}
                </Styled.FormSubTitle>

                <Styled.ButtonWrapper>
                  <Styled.FormSubTitle $colors={theme.texto}>
                    Data do Exame:{diet.date}
                  </Styled.FormSubTitle>
                  <Styled.FormSubTitle $colors={theme.texto}>
                    Horário do Exame:{diet.time}
                  </Styled.FormSubTitle>
                </Styled.ButtonWrapper>
              </div>
            );
          })}
      </Styled.FormColumn>
      <Styled.FormColumn>
        <Styled.FormTitle $colors={theme.texto}>Exercício</Styled.FormTitle>
        {exercise &&
          exercise.map((exercise) => {
            return (
              <div className="patientRecordsContent" key={exercise.id}>
                <Styled.FormRow>
                  <Styled.FormTitle $colors={theme.texto}>
                    Nome do Série de Exercícios: {exercise.exerciseName}
                  </Styled.FormTitle>
                  <Link
                    className="LinkPatientRecord"
                    to={`/cadastro/exercicio/${exercise.id}`}
                  >
                    Editar
                  </Link>
                </Styled.FormRow>
                <Styled.FormSubTitle $colors={theme.texto}>
                  Tipo de exercício:{exercise.exerciseType}
                </Styled.FormSubTitle>
                <Styled.FormSubTitle $colors={theme.texto}>
                  Quantidade por Semana:{exercise.quantityPerWeek}
                </Styled.FormSubTitle>
                <Styled.FormSubTitle $colors={theme.texto}>
                  Descrição da Dieta:{exercise.description}
                </Styled.FormSubTitle>

                <Styled.ButtonWrapper>
                  <Styled.FormSubTitle $colors={theme.texto}>
                    Data do Exercício:{exercise.date}
                  </Styled.FormSubTitle>
                  <Styled.FormSubTitle $colors={theme.texto}>
                    Horário do Exercício:{exercise.time}
                  </Styled.FormSubTitle>
                </Styled.ButtonWrapper>
              </div>
            );
          })}
      </Styled.FormColumn>

      <Styled.FormColumn>
        <Styled.FormTitle $colors={theme.texto}>Medicamento</Styled.FormTitle>
        {medicine &&
          medicine.map((medicine) => {
            return (
              <Styled.FormColumn key={medicine.id}>
                <Styled.FormRow>
                  <Styled.FormTitle $colors={theme.texto}>
                    Nome do Medicamento: {medicine.name}
                  </Styled.FormTitle>
                  <Link
                    className="LinkPatientRecord"
                    to={`/cadastro/exercicio/${medicine.id}`}
                  >
                    Editar
                  </Link>
                </Styled.FormRow>
                <Styled.FormSubTitle $colors={theme.texto}>
                  Tipo de medicação:{medicine.medicineType}
                </Styled.FormSubTitle>
                <Styled.FormSubTitle $colors={theme.texto}>
                  Quantidade de medicação:{medicine.amount}
                </Styled.FormSubTitle>
                <Styled.FormSubTitle $colors={theme.texto}>
                  Unidade de medicação:{medicine.unit}
                </Styled.FormSubTitle>
                <Styled.FormSubTitle $colors={theme.texto}>
                  Observações :{medicine.comments}
                </Styled.FormSubTitle>

                <Styled.ButtonWrapper>
                  <Styled.FormSubTitle $colors={theme.texto}>
                    Data :{medicine.date}
                  </Styled.FormSubTitle>
                  <Styled.FormSubTitle $colors={theme.texto}>
                    Horário :{medicine.time}
                  </Styled.FormSubTitle>
                </Styled.ButtonWrapper>
              </Styled.FormColumn>
            );
          })}
      </Styled.FormColumn>
    </Styled.Form>
  );
};
