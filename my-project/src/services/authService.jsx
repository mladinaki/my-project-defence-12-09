import * as request from "../lib/request";

const baseURL = "http://localhost:3030/users";

export const login = async (email, password) => {
  const result = await request.post(`${baseURL}/login`, {
    email,
    password,
  });
  return result;
};

export const register = (email, password) =>
  request.post(`${baseURL}/register`, { email, password });

export const logout = () => request.get(`${baseURL}/logout`);
