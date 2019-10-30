// import * as usersService from '../services/unitTestService';
// import { message } from 'antd';
// import { routerRedux } from 'dva/router';

export default {
  namespace: 'unitTestModel',
  state: {
    // textBookList: [],
    // gradeList: [],
    // stateInfo: {},
    // gradeAndBook: {},
    // classList: [],
    // classTest: {},
    // choiceStep: 'ONE',
  },
  reducers: {
    // saveList(state, { payload: { textBookList, gradeList } }) {
    //   return { ...state, textBookList, gradeList };
    // },
    // saveGradeAndBook(state, { payload: { gradeAndBook } }) {
    //   return { ...state, gradeAndBook };
    // },
    // saveClassList(state, { payload: { classList } }) {
    //   return { ...state, classList };
    // },
    // saveClassTest(state, { payload: { classTest } }) {
    //   return { ...state, classTest };
    // },
  },
  effects: {
    // *getGradeAndBook({ payload: values, callback }, { call, put }) {
    //   const res = (yield call(usersService.getGradeAndBook, values));
    //   if (res && res.code === 10000) {
    //     const datas = res.data;
    //     if (datas) {
    //       yield put({ type: 'saveList', 
    //                   payload: { 
    //                     textBookList: datas.textBookList, gradeList: datas.gradeList, stateInfo: datas.stateInfo
    //                   } 
    //                 });
    //       if(callback && typeof callback === 'function') {
    //         callback(datas);
    //       }
    //     } else {
    //       yield put({ type: 'saveList', payload: { textBookList: [], gradeList: [], stateInfo: {} } });
    //     }
    //   }
    // },
    // *postSelectGradeAndBook({ payload: values, callback }, { call, put }) {
    //   const res = (yield call(usersService.postSelectGradeAndBook, values));
    //   if (res && res.code === 10000) {
    //     const datas = res.data;
    //     if (datas) {
    //       yield put({ type: 'saveGradeAndBook', payload: { gradeAndBook: datas, choiceStep: 'TWO' } });
    //       if(callback && typeof callback === 'function') {
    //         callback(datas);
    //       }
    //     } else {
    //       yield put({ type: 'saveGradeAndBook', payload: { gradeAndBook: {} } });
    //     }
    //   }
    // },
    // *getSelectClass({ payload: values, callback }, { call, put }) {
    //   const res = (yield call(usersService.getSelectClass, values));
    //   if (res && res.code === 10000) {
    //     const datas = res.data;
    //     if (datas) {
    //       yield put({ type: 'saveClassList', payload: { classList: datas.classList } });
    //       if(callback && typeof callback === 'function') {
    //         callback(datas);
    //       }
    //     } else {
    //       yield put({ type: 'saveClassList', payload: { classList: [] } });
    //     }
    //   }
    // },
    // *postSubmitClassTest({ payload: values, callback }, { call, put }) {
    //   const res = (yield call(usersService.postSubmitClassTest, values));
    //   if (res && res.code === 10000) {
    //     const datas = res.data;
    //     if (datas) {
    //       yield put({ type: 'saveClassTest', payload: { classTest: datas } });
    //       if(callback && typeof callback === 'function') {
    //         callback(res);
    //       }
    //     } else {
    //       yield put({ type: 'saveClassTest', payload: { classTest: {} } });
    //     }
    //   }
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
    },
  },
};
