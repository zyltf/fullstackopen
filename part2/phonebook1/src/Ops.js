import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () =>
  axios.get(baseUrl).then(res => res.data)

const createPerson = newObject =>
  axios.post(baseUrl, newObject).then(res => res.data)

const deleteOp = id =>
  axios.delete(`${baseUrl}/${id}`).then(res => res.data)

const update = (id, newObject) =>
    axios.put(`${baseUrl}/${id}`, newObject).then(res => res.data)

export { getAll, createPerson, deleteOp }