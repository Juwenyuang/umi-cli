import mockjs from 'mockjs';
export default {
  // 使用 mockjs 等三方库
  'GET /student/login/register-check'(req, res) {
    const data = mockjs.mock({
      'data': {
        'isRegister': '0',
      }
    });
    res.json({
      code: 10000,
      data: data.data
    });
  }
};
