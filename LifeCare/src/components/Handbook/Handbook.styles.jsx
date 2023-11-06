import styled from "styled-components";

export const PatientInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: #b9c1d6;
  margin-top: 10px;
  border-radius: 20px;
`;

export const PatientData = styled.span`
  font-size: 25px;
  font-weight: 500;
  color: red;
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;

  thead {
    background: #ccc;
    font-weight: bold;
    color: black;
  }

  tbody {
    margin: 1px;
    border-color: black;
  }

  th,
  td {
    padding: 2px 0;
  }

  tbody tr td img {
    max-width: 80%;
    height: auto;
  }

  tbody tr:last-child td {
    font-weight: bold;
  }

  @media screen and (max-width: 480px) {
    thead {
      display: none;
    }

    tbody td {
      display: flex;
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 1200px) {
    tbody tr td:nth-child(1) {
      width: 15%;
    }
    tbody tr td:nth-child(2) {
      width: 50%;
    }
    tbody tr td:nth-child(3) {
      width: 10%;
    }
    tbody tr td:nth-child(4) {
      width: 5%;
    }
    tbody tr td:nth-child(5) {
      width: 15%;
    }
  }
`;
