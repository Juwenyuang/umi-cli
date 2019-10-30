import { get, post } from '../../../utils/axios';
import API from '../../../utils/api';
//检验是否注册
export function check(values) {
  let url = API.REGIST_CHECK;
  return get({ url, data: values });
}
//登录
export function login(values) {
  let url = API.LOGIN;
  return post({ url, data: values });
}
export function loginout() {
  return post({ url: API.LOGINOUT })
}

// 验证码登录
export function postPhoneLogin(values) {
  let url = API.POST_PHONE_LOGIN;
  return post({ url, data: values });
}
// 验证码注册
export function postVCRegister(values) {
  let url = API.POST_VC_REGISTER;
  return post({ url, data: values });
}