// export default {
//   namespace: '', // 表示在全局 state 上的 key
//   state: {}, // 状态数据
//   reducers: {}, // 管理同步方法，必须是纯函数
//   effects: {}, // 管理异步操作，采用了 generator 的相关概念
//   subscriptions: {}, // 订阅数据源
// };
import request from '@/untils/request.js';
import { Effect, Reducer } from 'umi';

export interface IndexModelState {
  count: number;
}
export interface IndexModelType {
  namespace: 'Index';
  state: IndexModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
  };
}

function getTestData() {
  return request.get('http://localhost:8000/api/error');
}
function getData() {
  return request.get('/api/data');
}

const IndexModel: IndexModelType = {
  namespace: 'Index',
  state: {
    count: 99,
    data:[]
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    saveData(state,action){
      return {
        ...state,
        ...action.payload
      }
    }
  },
  effects: {
    *getList({ payload }, { call, put }) {
      const result = yield call(getTestData);
      console.log('result', result);
      yield put({ type: 'save', payload: result });
    },
    *getData({ payload }, { call, put }) {
      const result = yield call(getData);
      console.log('data', result);
      yield put({ type: 'saveData', payload: result });
    },
  },
};

export default IndexModel;
