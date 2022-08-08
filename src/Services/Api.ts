import axios from "axios";
const API_KEY = "6678381eaab84a7983f130d746a4f13e";


export async function getLocation():Promise<string> {
 return await axios
    .get<{country_code:string}>("https://ipapi.co/json/")
    .then((response) => {
      const data = response.data.country_code.toLowerCase();
      return data
    //   return data.country_code.toLowerCase();
    })
    .catch((error) => {
      return ""
    });
}

export const getAllTopHeadlinesSources = async (country: string) => {
  axios
    .get(
      `https://newsapi.org/v2/top-headlines/sources?country=${country}apiKey=6678381eaab84a7983f130d746a4f13e`
    )
    .then((response) => {
      let data = response.data;
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
