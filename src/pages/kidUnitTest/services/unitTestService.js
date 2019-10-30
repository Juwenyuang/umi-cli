import { get } from '../../../utils/axios';
import API from '../../../utils/api';

// 单元评测 --- 选择年级教材
export function getUnitTestTestList(values) {
  let url = API.GET_UNITTEST_TESTLIST;
  return get({ url, data: values });
}