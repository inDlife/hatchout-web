import {Action, getModule, Module, VuexModule} from 'vuex-module-decorators';
import {AxiosFactory} from '@/api/axios/axios.factory';
import {store} from '@/store';
import {Component} from 'vue-property-decorator';



@Module({namespaced: true, name: 'userModule', store, dynamic: true})
export class Users extends VuexModule {



  // @Action({ rawError: true, commit: 'updateSelf'})
  // public loadSelf() {
  // }
}


export const UserModule = getModule(Users);
