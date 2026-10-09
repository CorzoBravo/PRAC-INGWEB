import api from "./axios";

export const login = (email, password) =>
  api.post("/users/login", { email, password }).then((r) => r.data);

// El rol se fija en PACIENTE: el registro público no permite elegirlo.
export const register = (email, password) =>
  api.post("/users/register", { email, password, role: "PACIENTE" }).then((r) => r.data);

export const getDoctors = () =>
  api.get("/users/doctors").then((r) => r.data);

export const getAllUsers = () =>
  api.get("/users").then((r) => r.data);

export const updateUser = (id, data) =>
  api.patch(`/users/${id}`, data).then((r) => r.data);
