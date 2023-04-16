import axios from 'axios';

const BASE_URL = 'https://6436fb728205915d3401eb87.mockapi.io';

async function fetchData(pathParams) {

  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}${pathParams}`,
    headers: { 'Content-Type': 'application/json' },
  });

  return await axiosInstance.get();
}

async function patchUser(pathParams, body) {

  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}${pathParams}`,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

console.log(axiosInstance)

  return await axiosInstance.put();
}


export { fetchData, patchUser };