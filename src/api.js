import axios from "axios";
import stravaApi from "strava-v3";
const ACCESS_KEY = "7a393e09ede24fd9435f0c8159cb2e2b";

export const getWeather = async (setWeather, setLocation) => {
  return axios
    .get(
      `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=Sydney`
    )
    .then((result) => {
      setWeather(result.data.current);
      setLocation(result.data.location);
    })
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
};

export const getToken = async (setTokenResponse, previousTokenResponse) => {
  const url = document.URL;
  if (url.includes("exchange")) {
    const code = url.split("code=").pop().split("&")[0];
    if (previousTokenResponse.expires_in > 0) {
      window.location = "https://zac-lew.github.io/dashboard-app/";
    } else {
      try {
        const tokenResponse = await stravaApi.oauth.getToken(code);
        setTokenResponse(tokenResponse);
      } catch (e) {
        const tokenResponse = await stravaApi.oauth.refreshToken(previousTokenResponse.refresh_token);
        setTokenResponse(tokenResponse);
      }
    }
  } else if (!previousTokenResponse.expires_in || previousTokenResponse.expires_in < 0) {
    try {
      const url = await stravaApi.oauth.getRequestAccessURL({ scope: "read,activity:read" });
      window.location = url;
    } catch (e) {}
  }
  return null;
};

export const getActivities = async (tokenResponse, setActivities, startDate, setTokenResponse) => {
  if (tokenResponse.expires_in > 0) {
    try {
      const stravaAuth = new stravaApi.client(tokenResponse.access_token);
      const activities = await stravaAuth.athlete.listActivities({ after: startDate });
      setActivities(activities);
    } catch (e) {}
  } else if (tokenResponse.refresh_token) {
    // If token is expired
    try {
      const refreshToken = await stravaApi.oauth.refreshToken(tokenResponse.refresh_token);
      setTokenResponse(refreshToken);
    } catch (e) {}
  } else {
    getToken(setTokenResponse, tokenResponse);
  }
};
