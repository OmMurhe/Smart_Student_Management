import axios from "axios";

const API_URL = "http://localhost:8080";

export const getAllStudents = () => {
  return axios.get(`${API_URL}/students`);
};

export const getStudentById = (id) => {
  return axios.get(`${API_URL}/student/${id}`);
};

export const addStudent = (student) => {
  return axios.post(`${API_URL}/student`, student);
};

export const updateStudent = (id, student) => {
  return axios.put(`${API_URL}/student/${id}`, student);
};

export const deleteStudent = (id) => {
  return axios.delete(`${API_URL}/student/${id}`);
};