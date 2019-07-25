import Vue from 'vue';
import Vuex from 'vuex';
import {Ghost, User} from '@/types';
import {Tx} from '@/types/tx';
import {UserApi} from '@/api';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    myGhosts: [
      {gene: 'token ID', evilPoint: 90, angelPoint: 80, name: 'Token Name', level: 2},
      {gene: 'token ID2', evilPoint: 90, angelPoint: 80, name: 'Token Name2', level: 2},
      {gene: 'token ID3', evilPoint: 90, angelPoint: 80, name: 'Token Name', level: 2},
      {gene: 'token ID4', evilPoint: 90, angelPoint: 80, name: 'Token Name2', level: 2},
      {gene: 'token ID5', evilPoint: 90, angelPoint: 80, name: 'Token Name', level: 2},
      {gene: 'token ID6', evilPoint: 90, angelPoint: 80, name: 'Token Name2', level: 2},
    ] as Ghost[],
    myTxList: [
      {
        timestamp: '19-06-07 14:39:01',
        txHash: '0x76B4b17F3…',
        fromNickname: 'Nettie Keller',
        fromAddress: '',
        toNickname: 'HATCHOUT1',
        toAddress: '',
        purpose: 'bidding',
        txFee: 0.0003610,
        status: 'success',
      },
      {
        timestamp: '19-06-07 14:39:01',
        txHash: '0x76B4b17F3…',
        fromNickname: 'Julia Howell',
        fromAddress: '',
        toNickname: 'HATCHOUT4',
        toAddress: '',
        purpose: 'get NFT in game',
        txFee: 0.0003610,
        status: 'fail',
      },
    ] as Tx[],
    self: {} as User,
  },
  mutations: {
    syncSelf(state, self) {
      state.self = self;

    },
  },
  actions: {
    async syncSelf(context) {
      // todo: dependency injection.
      const instance = axios.create({
        baseURL: 'http://localhost:3000/',
      });
      const userApi = new UserApi(instance);
      // todo: not 4, fix it.
      const user = await userApi.get(4);
      context.commit('syncSelf', user);
    },
  },
  getters: {
    getSelf: (state) => {
      return state.self;
    },
  },
});
