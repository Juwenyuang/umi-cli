import * as usersService from '../services/login';
import { routerRedux } from 'dva/router';
import { message } from 'antd'
export default {
  namespace: 'login',
  state: {
    isRegister: null,
    loginStatus: true,
    isLogin: false,
    isIntegrity: null,
    id: null,
    name: null,
    passWord: null
  },
  reducers: {
    saveCheck(state, { payload: { isRegister } }) {
      return { ...state, isRegister };
    },
    saveLogin(state, { payload: { loginStatus, isIntegrity, isLogin, passWord } }) {
      return { ...state, loginStatus, isIntegrity, isLogin, passWord };
    },
    saveId(state, { payload: { id } }) {
      return { ...state, id };
    },
    saveName(state, { payload: { name } }) {
      return { ...state, name };
    },
    reset(state, { payload: { isRegister, loginStatus, isLogin, isIntegrity, id, name } }) {
      return { ...state, isRegister, loginStatus, isLogin, isIntegrity, id, name };
    }
  },
  effects: {
    *check({ payload: values, resolve }, { call, put }) {
      const res = (yield call(usersService.check, values))
      if (res && res.code === 10000) {
        const datas = res.data;
        resolve && resolve(res.data.isRegister)
        sessionStorage.setItem('phone', values.phoneNumber);
        yield put({ type: 'saveCheck', payload: { isRegister: datas.isRegister } })
      }
    },
    *loginOut({ payload: values }, { call, put }) {
      const res = (yield call(usersService.loginout, values))
      if (res && res.code === 10000) {
        message.success("退出登录成功！", 1, () => {
          sessionStorage.clear();
        })
        localStorage.setItem('isstorename', 'no');
        localStorage.setItem('password', '');
        yield put({ type: 'reset', payload: { isRegister: null, loginStatus: true, isLogin: false, isIntegrity: null, id: null, name: null } })
        yield put(routerRedux.push("/login"));
      }
    },
    *login({ payload: values, resolve }, { call, put }) {
      const res = (yield call(usersService.login, values))
      if (res) {
        resolve && resolve(res.code);
        if (res.code === 10000) {
          const datas = res.data;
          yield put({ type: 'saveLogin', payload: { loginStatus: true, isIntegrity: datas.isIntegrity, isLogin: true, passWord: values.password } })
          sessionStorage.setItem('endTime', datas.eyeProtectionTime);
          sessionStorage.setItem('loginTime', datas.loginTime);
          sessionStorage.setItem("termId", datas.termID);
          sessionStorage.setItem("token", datas.token);
          sessionStorage.setItem('integratedTestInfo', datas.integratedTestInfo);
          // if (datas && datas.isIntegrity === '1') {
            sessionStorage.setItem("name", datas.name || '');
            sessionStorage.setItem("schoolName", datas.schoolName || '');
            sessionStorage.setItem("className", datas.className || '');
            sessionStorage.setItem('testGradeId', datas.termID || '');
            yield put({ type: 'saveName', payload: { name: datas.name } })
            window.location.pathname === '/login' ? yield put(routerRedux.replace("/")) : window.location.pathname === '/regist' ? yield put(routerRedux.replace("/kidCenter")) : yield put(routerRedux.replace(window.location.pathname));
          // } else {
          //   yield put({ type: 'saveId', payload: { id: datas.id } })
          //   yield put(routerRedux.push('/regist'));
          // }
        } else {
          yield put({ type: 'saveLogin', payload: { loginStatus: false, isIntegrity: null, isLogin: false } })
        }

      }
    },

    *postPhoneLogin({ payload: values, resolve }, { call, put }) {
      const res = (yield call(usersService.postPhoneLogin, values))
      if(res) {
        if(res.code === 10000) {
          const datas = res.data;
          yield put({ type: 'saveLogin', payload: { loginStatus: true, isIntegrity: datas.isIntegrity, isLogin: true, passWord: values.password } })
          sessionStorage.setItem('endTime', datas.eyeProtectionTime);
          sessionStorage.setItem('loginTime', datas.loginTime);
          sessionStorage.setItem("termId", datas.termID);
          sessionStorage.setItem("token", datas.token);
          sessionStorage.setItem('integratedTestInfo', datas.integratedTestInfo);
          sessionStorage.setItem("name", datas.name || '');
          sessionStorage.setItem("schoolName", datas.schoolName || '');
          sessionStorage.setItem("className", datas.className || '');
          sessionStorage.setItem('testGradeId', datas.termID || '');
          yield put({ type: 'saveName', payload: { name: datas.name } })
          yield put(routerRedux.push('/'));
        }else {
          yield put({ type: 'saveLogin', payload: { loginStatus: false, isIntegrity: null, isLogin: false } })
        }
      }
    },
    *postVCRegister({ payload: values }, { call, put }) {
      const res = (yield call(usersService.postVCRegister, values));
      if(res) {
        if(res.code === 10000) {
          const datas = res.data;
          yield put({ type: 'saveLogin', payload: { loginStatus: true, isIntegrity: datas.isIntegrity, isLogin: true, passWord: values.password } })
          sessionStorage.setItem('endTime', datas.eyeProtectionTime);
          sessionStorage.setItem('loginTime', datas.loginTime);
          sessionStorage.setItem("termId", datas.termID);
          sessionStorage.setItem("token", datas.token);
          sessionStorage.setItem('integratedTestInfo', datas.integratedTestInfo);
          sessionStorage.setItem("name", datas.name || '');
          sessionStorage.setItem("schoolName", datas.schoolName || '');
          sessionStorage.setItem("className", datas.className || '');
          sessionStorage.setItem('testGradeId', datas.termID || '');
          yield put({ type: 'saveName', payload: { name: datas.name } })
          yield put(routerRedux.push('/'));
        }else {
          yield put({ type: 'saveLogin', payload: { loginStatus: false, isIntegrity: null, isLogin: false } })
        }
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // return history.listen(({ pathname, query }) => {
      //   if (pathname === '/login') {
      //     dispatch({ type: 'save', payload: query });
      //   }
      // });
    },
  },
};
