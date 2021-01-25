import axios from "axios";
const API = 'http://localhost:5000';


export const LoadItems = () => axios.get(API);
export const AddItems = (post) => axios.post(API, post);
export const DeleteItems = (id) => axios.delete(`${ API }/delete/${ id }`);
export const UpdateItems = (id, post) => axios.patch(`${ API }/update/${ id }`, post);