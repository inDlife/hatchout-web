import axios, {AxiosInstance} from 'axios';
import 'reflect-metadata';
import {injectable} from 'inversify-props';
import IAxiosFactory from '@/api/axios/IAxiosFactory';

@injectable()
export class AxiosFactory implements IAxiosFactory {
  public create(baseUrl: string): AxiosInstance {
    return axios.create({
      baseURL: baseUrl,
    });
  }
}
