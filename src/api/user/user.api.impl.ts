import {SignInDto, User} from '@/types';
import {AxiosInstance, AxiosResponse} from 'axios';
import {AxiosService} from '@/api/axios/axios.service';
import {DeleteResultDto} from '@/types/dto/DeleteResultDto';
import {UserApi} from '@/api';
import 'reflect-metadata';
import {Inject, inject, injectable} from 'inversify-props';
import {AxiosFactory} from '@/api/axios/axios.factory';
import {IAxiosService} from '@/api/axios/IAxios.service';

@injectable()
export class UserApiImpl implements UserApi {
  private axiosInstance: AxiosInstance;
  @Inject() private axiosService!: IAxiosService;
  private domain = 'users';
  constructor() {
    this.axiosInstance = this.axiosService.get();
  }
  public async signIn(): Promise<SignInDto> {
    return {} as SignInDto;
  }

  public async get(id: number): Promise<User> {
    const response: AxiosResponse<User> = await this.axiosInstance.get<User>(`${this.domain}/${id}`);
    return response.data;
  }
  public async delete(id: number): Promise<DeleteResultDto> {
    const response: AxiosResponse<DeleteResultDto> =
      await this.axiosInstance.delete<DeleteResultDto>(`${this.domain}/${id}`);
    return response.data;
  }
  public async increaseLevel(id: number, amount: number): Promise<User> {
    const response: AxiosResponse<User> = await this.axiosInstance.put<User>
    (`${this.domain}/${id}/increase-level`, null, { params: {amount}});
    return response.data;
  }
  public async increasePoint(id: number, amount: number): Promise<User> {
    const response: AxiosResponse<User> = await this.axiosInstance.put<User>
    (`${this.domain}/${id}/increase-point`, null, { params: {amount}});
    return response.data;
  }
  public async decreasePoint(id: number, amount: number): Promise<User> {
    const response: AxiosResponse<User> = await this.axiosInstance.put<User>
    (`${this.domain}/${id}/decrease-point`, null, { params: {amount}});
    return response.data;
  }


}
