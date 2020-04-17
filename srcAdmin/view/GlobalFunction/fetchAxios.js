import 'babel-polyfill';
import axios from 'axios';

/* GET */
const getPromise = (data) => new Promise((resolve) => {
  const url = data.url || '';
  axios.get(`${__API__}${url}`, { withCredentials: true })
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      resolve(err);
    });
});

/* PUT */
const putPromise = (data) => new Promise((resolve) => {
  const dataRead = data || {};
  const url = data.url || '';
  axios.put(`${__API__}${url}`, dataRead, { withCredentials: true })
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      resolve(err);
    });
});

/* POST */
const postPromise = (data) => new Promise((resolve) => {
  const dataRead = data || {};
  const url = data.url || '';
  axios.post(`${__API__}${url}`, dataRead, { withCredentials: true })
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      resolve(err);
    });
});

/* DELETE */
const delPromise = (data) => new Promise((resolve) => {
  const url = data.url || '';
  axios.delete(`${__API__}${url}`, { withCredentials: true })
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      resolve(err);
    });
});

const get = async (data) => await getPromise(data);
const put = async (data) => await putPromise(data);
const del = async (data) => await delPromise(data);
const post = async (data) => await postPromise(data);

export {
  get, put, post, del
};
