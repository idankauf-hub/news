import axios from "axios";

export const getLocation = async () => {
  axios
    .get("https://ipapi.co/json/")
    .then((response) => {
      let data = response.data;
      console.log(data.country_code.toLowerCase());
      return data.country_code.toLowerCase()
       
    })
    .catch((error) => {
      console.log(error);
    });
};
