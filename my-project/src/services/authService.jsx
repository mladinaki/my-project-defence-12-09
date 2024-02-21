import * as request from "../lib/request";

const baseURL = "http://localhost:3030/users";

export const login = async (email, password) => {
  const result = await request.post(`${baseURL}/login`, {
    name,
    email,
    password,
  });
  return result;
};

export const register = async (email, password) => {
  const result = await request.post(`${baseURL}/register`, { email, password });
  return result;
}

export const logout = () => request.get(`${baseURL}/logout`);