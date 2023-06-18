import {createApi, fetchBaseQuary} from '@reduxjs/toolkit/query/react'

const options = { method: 'GET', headers: { 'X-RapidAPI-Host': '' } };

fetch('https://echo.paw.cloud/', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

  export const shazamCoreApi =
