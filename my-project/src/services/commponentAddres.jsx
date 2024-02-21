import * as request from "../lib/request"


const baseUrl = "http://localhost:3030/data/catalog"

export const cerateAddress = async (shoseData) => {
    const result = await request.post(`${baseUrl}`,shoseData);
    return result;
  };

  export const getOnes = async (shoseId) => {
    const response = await request.get(`${baseUrl}/${shoseId}`);
    return response;
  };

