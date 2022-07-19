import axios from "axios";
const host = "http://localhost:3030";

const client = {
  //   get: (path) => {
  //     const url = `${host}${path}`;
  //     const headers = {
  //       Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
  //     };

  //     return axios.get(url, { headers });
  //   },

  //   patch: (path, data) => {
  //     const url = `${host}${path}`;
  //     const headers = {
  //       Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
  //     };
  //     return axios.patch(url, data, { headers });
  //   },

  //   delete: (path) => {
  //     const url = `${host}${path}`;
  //     const headers = {
  //       Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
  //     };
  //     return axios.delete(url, { headers });
  //   },

  post: (path, data) => {
    const url = `${host}${path}`;
    return axios.post(url, data);
  },
};

export default client;

// IF I WANT TO ADD LOGIN
// post: (path, data, withToken = true) => {
//     const url = `${host}${path}`;
//     const token = localStorage.getItem(tokenKey);
//     let headers = {};
//     if (withToken) {
//       headers["Authorization"] = `Bearer ${token}`;
//     }
//     return axios.post(url, data, { headers });
//   }
