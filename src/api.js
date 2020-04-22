import axios from "axios";
const ACCESS_KEY = "7a393e09ede24fd9435f0c8159cb2e2b";

export const getWeather = async (setWeather, setLocation) => {
  return axios
    .get(`https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=Sydney`)
    .then((result) => {
      setWeather(result.data.current);
      setLocation(result.data.location);
    })
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
};
