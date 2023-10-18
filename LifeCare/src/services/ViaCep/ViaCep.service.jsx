import axios from "axios";
import { useEffect } from "react";
const API_VIACEP = `http://viacep.com.br/ws/CEP/json/`;

export const ViaCEP = async (cep) => {
  let data;
  useEffect(() => {
    axios.get(API_VIACEP.replace("CEP", cep)).then((res) => {
      data = res.data;
    });
  }) 
  return data;
};
