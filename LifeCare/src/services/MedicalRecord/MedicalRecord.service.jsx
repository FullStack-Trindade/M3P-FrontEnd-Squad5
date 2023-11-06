import { axiosInstance } from "../../helper/axiosInstance";

export const GetRecordsID = async (id) => {
  try {
    const recordsData = await axiosInstance
      .get(`/prontuarios?patientId=${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return recordsData;
  } catch (error) {
    console.log(error);
  }
};
