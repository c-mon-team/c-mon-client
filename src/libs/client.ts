import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import config from 'configs/config';

interface IAxiosConfig {
  baseURL: string;
  headers: {
    'Content-Type': 'application/json' | 'multipart/form-data';
  };
}

const axiosConfig: AxiosRequestConfig<IAxiosConfig> = {
  baseURL: config.API_URL,
  headers: { 'Content-Type': 'application/json' },
};

export const client: AxiosInstance = axios.create(axiosConfig);
