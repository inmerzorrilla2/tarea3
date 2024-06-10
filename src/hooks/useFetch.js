import { useState } from "react";
import axios from "axios";

const useFetch = (initialUrl) => {
  const [apiData, setApiData] = useState();
  const [isLoading, setisLoading] = useState();
  const [hasError, setHasError] = useState();

  const getApi = (url) => {
    setisLoading(true);
    axios
      .get(url)
      .then((res) => {
        setHasError(false);
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
      })
      .finally(() => {
        setTimeout(() => {
          setisLoading(false);
        }, 500);
      });
  };

  return [apiData, getApi, isLoading, hasError];
};

export default useFetch;
