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

const IndexModel: IndexModelType = {
  namespace: 'Index',
  state: {
    count: 99,
  },
  effects: {
    *getList({ payload }, { call, put }) {
      const result = yield call(getTestData);
      console.log('result', result);
      yield put({ type: 'save', payload: result });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default IndexModel;
