import { useContext, useEffect, useState } from "react";
import { StarWarsContext } from "../context/starWars.context";

export const useFetch = ({
  service,
  callback = () => {},
  callNow = false,
  transform,
}) => {
  const { setIsLoading, setError } = useContext(StarWarsContext);

  const [resp, setResp] = useState(null);

  const apiCall = async (extraProps) => {
    try {
      setIsLoading(true);
      const response = await service(extraProps);
      if (transform) {
        setResp(transform(response));
      } else {
        setResp(response?.data);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setError("Ocurrió un error!");
    }
  };

  useEffect(() => {
    if (resp) {
      setIsLoading(false);
      callback();
    }
  }, [resp]);

  useEffect(() => {
    if (callNow) {
      apiCall();
    }
  }, []);

  return { resp, apiCall };
};
