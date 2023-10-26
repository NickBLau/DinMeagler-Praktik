import axios from "axios";
import { useEffect, useState } from "react";

const GetHomes = () => {
  const [HomesData, setHomesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dinmaegler.onrender.com/homes")
      .then((response) => {
        if (response.status === 200) {
          console.log("Response data:", response.data);
          setHomesData(response.data);
        } else {
          throw new Error(response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error fetching homes:", error);
      });
  }, []);

  return HomesData;
};

export default GetHomes;
