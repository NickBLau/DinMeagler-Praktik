import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosTest = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://dinmaegler.onrender.com/homes",
        };

        const { data } = await axios.request(options);
        setResponse(data);
        // console.log(data); // Add console.log statement here
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>{response[1]?.adress1}</h1>

      <img src={response[1]?.images[0].url} />
    </>
  );
};

export default AxiosTest;
