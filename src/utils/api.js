/* eslint-disable */
module.exports = {
  REGIST_CHECK: '/student/login/register-check',      //判断是否注册
  LOGIN: '/student/login/login',                      //登录
  GET_CODE: '/student/login/getVerifyCode',           //获取验证码
  REGIST: '/student/login/register',                  //注册
  SCHOOL_LIST: '/student/login/getSchoolList',        //获取学校列表
  EXT_INFO: '/student/login/register-ext',            //补全信息
  GET_EXERCISE: '/student/practice/getExercise',      //获取作业列表--作业练习
  GET_QUESTION: '/student/practice/getQuestion',      //获取题目列表--作业练习
  SUBMIT_PRACTICE: '/student/practice/submitWarmUp',  //提交答案--热身
  SUBMIT_EXERCISE: '/student/practice/submitExercise',//提交答案--练习
  GET_DONE: '/student/practice/doneExerciseList',     //获取已完成练习题列表
  GET_RESULT: '/student/practice/getExerciseResult',  //获取练习题结果
  SUB_SUPPLY: '/student/practice/extraAnswer',        //补交答案
  SUB_REVISE: '/student/practice/revisalResult',      //订正答案
  GET_GRADE: '/student/pass/getGrade',                //选择年级范围
  GET_UNIT: '/student/pass/selectGrade',              //年级单元知识点闯关
  RESET: '/student/login/resetPassword',              //重置密码
  GET_PASS_QUESTION: '/student/pass/getQuestion',     //闯关出题
  GET_PASS_RESULT: '/student/pass/getResult',         //闯关结果
  GET_GRADE_CLASS: '/student/login/getGradeAndClassInfo',//重名之后获取年级班级列表
  GET_STAR: '/student/star/getKnowledgeStar',         //知识星空数据
  GET_TEST_QUESTION: '/student/test/getQuestion',     //知识测评出题
  GET_TEST_RESULT: '/student/test/getResult',         // 问卷出题
  GET_GAME_QUESTION_NAIR: '/student/games/getQuestionnaire',// 问卷结果
  GET_TEST_RESULT_NAIR: '/student/test/todo_getResult',
  SUBMIT_QUESTION_NAIR_COMMNET: '/student/games/submitEvaluate',
  SUBMIT_QUESTION_NAIR: '/student/games/submitQuestionnaire',
  GET_TEST_GRADE: '/student/test/getGrade',           //年级列表--知识测评
  GveET_TEST_UNIT: '/student/test/selectGrade',         //单元列表--知识测评
  SELECT_GRADE_AND_BOOK: '/student/test/selectGradeAndBook', // 选择年级-综合测评
  GET_MESG_LIST: '/student/message/getMessage',       //获取消息列表
  READ_MSG: '/student/message/readMessage',           //消息已读
  DAILY_STATUS: '/student/dailyTest/getPointTestStatus',               //获取学生是否能进行天天练
  GET_DAILY_PATH: '/student/dailyTest/getStudyPath',                   //获取关卡
  GET_PATH_GAME: '/student/dailyTest/getCheckpoint',                   //获取关卡内容
  GET_DAILY_QUES: '/student/dailyTest/getPointStudy',                  //获取知识闯关题目
  SUBMIT_DAILY_QUES: '/student/practice/submitExercise',               //提交知识闯关
  GET_KNOEWLEGE_MODEL: '/student/dailyTest/statusCheck',       //知识点训练弹窗
  GET_DAILY_RESULT: '/student/dailyTest/getExerciseResult',            //获取练习结果
  SUB_EXTRA: '/student/practice/extraAnswer',                          //天天学补做
  SUB_REVERSE: '/student/dailyTest/revisalResult',                     //天天学订正
  REPEAT_TEST: '/student/dailyTest/repractice',                        //重新练习
  SUB_DAILY_GAME: '/student/dailyTest/updateGameStatus',               //认知结束调用
  GET_STAGE_INFO: '/student/dailyTest/stagePassInfo',                  //阶段通关
  GET_TEST_RESULT_LIST: '/student/test/getTestResult',                      //综合测评结果

  WRONG_LIST: '/student/mistake/defaultQuery',         //错题集列表
  WRONG_QUESTION: '/student/mistake/getQuestions',            //举一反三题目
  WRONG_QUESTION_SUBMIT: '/student/mistake/submitQuestions', //提交举一反三题目
  WRONG_REMOVE_QUESTION: '/student/mistake/removeQuestion',  //移出错题集
  WRONG_SUBMIT_REASON: '/student/mistake/submitReason',      //提交错误原因

  LOGINOUT: '/student/login/logout',    //退出登录
  CENTER_INFOR: '/student/analyse/getDetail',    //个人中心
  CENTER_CHANGE_PSW: '/student/login/changePassword',   //个人中心修改密码
  CENTER_CHANGE_PHONE: '/student/login/changePhone',    //个人中心修改手机号

  PIC_ORIGIN: 'http://obs.zjbdos.com/obs-jingzhunjiaoyu',//图片域名
  PIC_QUESTION_ORIGIN: 'http://obs.zjbdos.com/obs-jingzhunjiaoyu', // 图片域名

  GET_GRADE_AND_BOOK: '/student/test/getGradeAndBook', // 获取教材和年级列表


  GET_CORSI_TEST: '/student/games/getCorsiTest', // 获取corsi游戏数据

  SUBMIT_CORSI_TEST: '/student/games/submitCorsiTest', // 提交corsi游戏一轮结果
  GET_GAME_IDS: '/student/test/getStartGame', // 获取游戏IDs
  GET_COMP_ASSESS_RESULT: '/student/test/getResult', // 获取综合测评结果
  GET_POINT_TEST_STATUS: '/student/test/getPointTestStatus', // 综合测评-学生当前测评状态

  GET_GAME_OPERATE: '/student/games/getCalculateTest',                   //获取运算广度出题
  SUB_OPERATE_PRCTICE: '/student/games/newSubmitCalculateTest',         //提交运算广度答案--练习
  SUB_GAME_OPERATE_TEST: '/student/games/submitCalculateTest',          //提交运算广度答案--正式+天天练
  GET_GAME_RECALL: '/student/games/getMemoryTest',                      //获取回忆广度出题
  SUB_RECALL_PRACTICE: '/student/games/newSubmitMemoryTest',            //提交回忆广度答案--练习
  SUB_GAME_RECALL_TEST: '/student/games/submitMemoryTest',              //提交回忆广度答案--正式+天天练
  SET_CLASS_CODE: '/student/center/setClassInfo',                       //班级码设置班级
  GET_PROVINCE: '/student/center/getCountryAddress',                    //获取省市区信息
  GET_SCHOOL: '/student/center/getSchoolInfo',                          //获取学校列表
  SUB_INFO: '/student/center/setSchoolClassInfo',                       //设置学校班级信息
  CHECK_NICKNAME: '/student/center/checkNickName',                      //昵称是否注册
  SET_PERSON_INFO: '/student/center/setPersonalData',                   //设置个人资料
  GET_PERSON_DATA: '/student/center/getPersonalData',                   //获取个人资料
  GET_PASSSUC_RESULT: '/student/dailyTest/getPassResult',               //已完全关口关卡
  GET_SIMPLE_QUES: '/student/dailyTest/getSampleQuestion',              //获取例题
  GET_TEST_DETAIL: '/student/dailyTest/getPassDetail',                  //训练详情
  GET_GAME_INFO: '/student/dailyTest/getIntroducePage',                 //获取游戏信息

  POST_PHONE_LOGIN: '/student/login/phoneLogin',                        // 验证码登录
  POST_VC_REGISTER: '/student/login/verifyCodeRegister',                // 验证码注册

  GET_TEST_PRICE: '/student/order/getTestPrice',                        // 支付 --- 费用查询
  GET_STUDENT_TEST_ORDER: '/student/order/studentTestOrder',            // 支付 --- 评测付款
  GET_ORDER_STATUS: '/student/order/status',                            // 支付 --- 评测付款状况查询

  //toB接口
  GET_TOB_UNIT_QUES: '/student-toB/unitTest/getRelQuestion',               //获取单元测评出题
  GET_TOB_UNIT_RESULT: '/student-toB/unitTest/getTestResult',           //获取单元测评结果
  GET_TOB_UNIT_TRAIN: '/student-toB/practice/getExerciseList',          //获取单个单元训练的练习列表
  GET_TOB_TRAIN_QUES: '/student-toB/practice/getRelPointStudy',            //单元训练获取题目
  SUB_TOB_TRAIN: '/student-toB/practice/submitExercise',                //单元训练提交答案
  SUB_CENTER_NAME: '/student-toB/center/setPersonalData',               //设置个人资料
  GET_CENTER_INFO: '/student-toB/center/getNameAndNickInfo',             //获取个人资料
  GET_TOB_STATUS: '/student-toB/unitTest/getStudentStatus',             //获取测评和练习状态
  GET_TRAIN_RESULT: '/student-toB/practice/getExerciseDetail',          //训练结果

  GET_UNITTEST_TESTLIST: '/student-toB/unitTest/testList',              // 单元评测 --- 单元测评列表（首页）
  GET_UNITTEST_DONETESTLIST: '/student-toB/unitTest/doneTestList',      // 单元评测 --- 单元测评列表（已完成）
  GET_PRACTICE_GETTESTLIST: '/student-toB/practice/getTestList',        // 单元训练 --- 单元训练列表（首页）
  GET_PRACTICE_GETDONETESTLIST: '/student-toB/practice/getDoneTestList',// 单元训练 --- 单元训练列表（已完成）

  GET_CENTER_SCHOOLCLASSINFO: '/student-toB/center/getSchoolClassInfo', // 获取班级信息
  GET_CENTER_CLASSINFO: '/student-toB/center/getClassInfo',             // 获取班级码对应信息
  POST_CENTER_CLASSINFO: '/student-toB/center/setClassInfo',            // 班级码设置班级

  GET_MY_FILE: '/student/center/getMyArchives',                         // 获取我的学习档案
  GET_STUDENT_FILE: '/student/center/getStudentArchives',               // 获取学生填写的学习档案
  SAVE_MY_FILE: '/student/center/saveMyArchives',                       // 保存我的学习档案
}
