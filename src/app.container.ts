import {container} from 'inversify-props';
import {AxiosFactory} from '@/api/axios/axios.factory';
import {AxiosService} from '@/api/axios/axios.service';
import {UserApiImpl} from '@/api/user/user.api.impl';
import {IAxiosService} from '@/api/axios/IAxios.service';
import 'reflect-metadata';
import IAxiosFactory from '@/api/axios/IAxiosFactory';
import {UserApi} from '@/api';


export default function buildDependencyContainer(): void {
  container.addSingleton<IAxiosFactory>(AxiosFactory);
  container.addSingleton<IAxiosService>(AxiosService);
  container.addSingleton<UserApi>(UserApiImpl);
}

