import { useState } from "react";
import { useDispatch } from "react-redux";
import { allCountries, errorHandler } from "../reducers/countriesReducer";

export function useFetch(baseUrl: string, initialType: string) {
  const [data, setData] = useState<any[] | null>(null);

  const dispatch = useDispatch();

  const fetchUrl = (type: string) => {
    fetch(baseUrl + "/" + type)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        if (response.status > 400) {
          dispatch(errorHandler(true));
        }
        //dispatch(allCountries(response));
      })
      .catch((err) => {
        console.log(err);
      });
  };
   
  return {
    data,
    fetchUrl,
  };
}
