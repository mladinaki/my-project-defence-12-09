import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/catalog";

export const getAll = async () => {
  const result = await request.get(baseUrl);
  return result;
};

export const filterItem = async () => {
  const result = await request.post(baseUrl);
  return result;
};

export const getOne = async (shoseId) => {
  const response = await request.get(`${baseUrl}/${shoseId}`);
  return response;
};

export const cerate = async (shoseData) => {
  const result = await request.post(`${baseUrl}`, shoseData);
  return result;
};

export const edit = async (shoseId, shoseData) => {
  const result = await request.put(`${baseUrl}/${shoseId}`, shoseData);
  return result;
};

export const removeOne = async (shoseId) => await request.del(`${baseUrl}/${shoseId}`)

export const serach = async (serachItem) => {
  const result = await request.post(`${baseUrl}/serach`, {
    serachItem,
  });
  return result;
};


