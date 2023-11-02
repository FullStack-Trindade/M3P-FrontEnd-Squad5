import { useEffect, useRef, useState } from "react";
import { axiosInstance } from "../helper/axiosInstance";

export function useAxios(props) {
  const { method, resource, payload } = props;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const useEffectRunOnce = useRef(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await axiosInstance[method](
          resource,
          { headers: { Authorization: `Bearer ${token}` } },
          {
            ...payload,
            signal: controller.signal,
          }
        );
        setData(response.data);
      } catch (err) {
        console.log(err.message);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    useEffectRunOnce && fetchData();
    return () => {
      controller.abort(), (useEffectRunOnce.current = true);
    };
  }, []);

  return [data, isLoading, error];
}
