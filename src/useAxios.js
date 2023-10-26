import axios from "axios";

const options = {
  method: "GET",
  url: "https://dinmaegler.onrender.com/homes",
  headers: { "User-Agent": "Insomnia/2023.5.7" },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
