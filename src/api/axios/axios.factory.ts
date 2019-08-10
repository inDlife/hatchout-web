import axios, {AxiosInstance} from 'axios';
import {injectable} from 'vue-typescript-inject';
import 'reflect-metadata';


@injectable()
export class AxiosFactory {

  public create(baseUrl: string): AxiosInstance {
    return axios.create({
      baseURL: baseUrl,
    });
  }
}
