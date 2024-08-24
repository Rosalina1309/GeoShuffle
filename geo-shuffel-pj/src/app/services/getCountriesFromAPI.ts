import axios from "axios";
const apiURL = "https://restcountries.com/v3.1/all?fields=name";

export default async function getCountriesFromAPI () {
  const response = await axios.get(apiURL);
  const data = response.data;
  return data;
}