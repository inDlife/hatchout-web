import {AxiosInstance} from 'axios';

export default interface IAxiosFactory {
  create(baseUrl: string): AxiosInstance;
}
