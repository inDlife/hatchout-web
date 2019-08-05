import {AxiosInstance} from 'axios';
import 'reflect-metadata';
import {Inject, injectable} from 'inversify-props';
import {IAxiosService} from '@/api/axios/IAxios.service';
import IAxiosFactory from '@/api/axios/IAxiosFactory';

@injectable()
export class AxiosService implements IAxiosService {
  @Inject() public axiosFactory!: IAxiosFactory;
  private axiosInstance: AxiosInstance;
  constructor(
  ) {
    // todo: move config to config file
    this.axiosInstance = this.axiosFactory.create('http://localhost:3000/');
  }
  public get(): AxiosInstance {
    return this.axiosInstance;
  }
}
