import axios from 'axios';
import {getConfig} from '../constants/config';

export const initAxios = (): void => {
  axios.defaults.baseURL = getConfig().general.apiUrl;
};

export default axios;
