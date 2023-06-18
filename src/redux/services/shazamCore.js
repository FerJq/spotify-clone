import {createApi, fetchBaseQuary} from '@reduxjs/toolkit/query/react'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8f7e390fb4msh1a60784d6969a9ep1a49d5jsne71b2a788436',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://echo.paw.cloud/', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

  export const shazamCoreApi = createApi({reducerPath: 'shazamCoreApi'})
