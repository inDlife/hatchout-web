import {User} from '@/types';
import {UserApi} from '@/api';
import {Action, getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import 'reflect-metadata';
import {Inject, inject} from 'inversify-props';




@Module({namespaced: true, name: 'userModule'})
export class Users extends VuexModule {
  @Inject() private userApi!: UserApi;

  private self = {} as User;

  @Mutation
  public updateSelf(self: User) {
    this.self = self;
  }

  @Action({ rawError: true, commit: 'updateSelf'})
  public async loadSelf() {
    return null;
  }

  get getSelf() {
    return this.self;
  }
}

// export const userModule = {
//   namespaced: true,
//   state: {
//     self: {} as User,
//   },
//   mutations: {
//     syncSelf(state, self) {
//       state.self = self;
//     },
//   },
//   actions: {
//     async syncSelf({commit}) {
//       const userApi = container.get<UserApi>(TYPES.UserApi);
//       // todo: fix parameter
//       const user = await userApi.get(4);
//       commit('syncSelf', user);
//     },
//   },
//   getters: {
//     getSelf(state) {
//       return state.self;
//     },
//   },
// };

// export const UserModule = getModule(Users);
