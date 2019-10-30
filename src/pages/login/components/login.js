import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from 'dva/router';
import { Input, Icon, Button, Tooltip } from 'antd';
import styles from './login.less';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      passWord: '',
      isRegist: '0',
      codeCheck: true,
      loginStatus: true,
      length: 4,
      checked: true,
      toolVisible: false,
      showParentOfficialAccount: false,
      isVCLogin: false,
      codeClick: false,
      seconds: 60,
      // registCode: null,
      autoTimeout: null,
      studentName: null,
      code: '',
      step: '',
    };
  }
  render() {
    const {
      isRegist,
      codeCheck,
      loginStatus,
      length,
      phone,
      checked,
      passWord,
      toolVisible,
      isVCLogin,
      codeClick,
      seconds,
      step,
      code,
      studentName,
    } = this.state;
    return <div className={styles.loginPage}>
      <div className={styles.bg}>
        <div className={styles.loginbox}>
          <label className={styles.type}>学生端</label>
          <div className={styles.content}>
            <div className={styles.tabbox}>
              <Link to='/login'>
                <div className={styles.cur}>登录</div>
              </Link>
              <Link to='/regist'>
                <div>注册</div>
              </Link>
            </div>
            {
              isVCLogin
                ? <Fragment>
                  {
                    step === '2'
                      ? <Fragment>
                        <div className={styles.inputbox} style={{ marginTop: '22px', marginBottom: '158px' }}>
                          <Input
                            type="text"
                            value={studentName}
                            onChange={this.nameChange}
                            placeholder="请输入你的真实姓名"
                          />
                        </div>
                      </Fragment>
                      : <Fragment>
                        {/* <Tooltip 
                              overlayClassName='tools' 
                              placement="right" 
                              title="账号还未注册，请先注册哦" 
                              visible={toolVisible}
                            > */}
                        <div className={styles.inputbox}>
                          <Input
                            id='username'
                            onBlur={this.registCheck}
                            value={phone}
                            onChange={this.phoneChange}
                            placeholder='请输入你的手机号'
                            type='text'
                          />
                        </div>
                        {/* </Tooltip> */}
                        <div className={styles.login__VCBox}>
                          <div className={`${styles.inputbox} ${styles.login__VCInput}`}>
                            <Input
                              type="text"
                              value={code}
                              onChange={this.codeChange}
                              placeholder='请输入手机验证码'
                            />
                          </div>
                          <Button
                            onClick={this.getMesCode}
                            disabled={codeClick}
                            className={codeClick ? `${styles.getBut} ${styles.disbutton}` : styles.getBut}
                            type='primary'
                          >
                            {
                              !codeClick
                                ? '获取验证码'
                                : `${seconds}s后重新获取`
                            }
                          </Button>
                        </div>
                      </Fragment>
                  }
                </Fragment>
                : <Fragment>
                  <Tooltip
                    overlayClassName='tools'
                    placement="right"
                    title="账号还未注册，请先注册哦"
                    visible={toolVisible}
                  >
                    <div className={styles.inputbox}>
                      <Input
                        id='username'
                        onBlur={this.registCheck}
                        value={phone}
                        onChange={this.phoneChange}
                        placeholder='请输入你的手机号/昵称'
                        type='text'
                      />
                    </div>
                  </Tooltip>
                  <div className={styles.inputbox} style={{ marginTop: '14px' }}>
                    <Input
                      type="password"
                      id='password'
                      onChange={this.passChange}
                      placeholder="请输入密码"
                    />
                  </div>
                </Fragment>
            }
            {
              !step &&
              <p className={styles.tips}>在一步数学公众号注册的账号可直接登录哦~</p>
            }
            <div className={styles.btnbox}>
              <Button
                onClick={this.login}
                disabled={
                  isVCLogin
                    ? !code
                    : !passWord || !codeCheck || length !== 4
                }
                className={
                  ((!isVCLogin && passWord && codeCheck) || (isVCLogin && code))
                    ? styles.button
                    : `${styles.button} ${styles.disbutton}`
                }
                type='primary'
              >
                {
                  isVCLogin && toolVisible && !step
                    ? '下一步'
                    : '登录'
                }
              </Button>
            </div>
            <div style={{ width: '400px', margin: '10px auto 0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <p className={styles['remeber-btn']}>
                {
                  checked
                    ? <Icon onClick={this.remeberMe}
                      style={{ marginRight: '4px', cursor: 'pointer', color: 'rgba(255,201,30,1)' }}
                      type="check-circle"
                    />
                    : <a onClick={this.remeberMe} href='javascript:;'></a>
                }
                下次自动登录
              </p>
              <p className={styles.login__choice}>
                <span onClick={this.changeIsVCLogin}>
                  {
                    isVCLogin
                      ? '账号密码登录'
                      : '手机验证码登录'
                  }
                </span>
                <span className={styles.login__line}>|</span>
                <Link className={styles.forgotbtn} to='/forgot'>忘记密码？</Link>
              </p>
            </div>
            <div className={styles.codeboxs}>
              <div className={styles.codeboxs__left} >
                <Icon type="qrcode" />
                <p>关注<br />家长<br />端公<br />众号</p>
              </div>
              <div className={styles.parentOfficialAccount}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }

}

const mapStateToProps = function (state) {
  return {
    loginState: state.login
  }
}
export default connect(
  mapStateToProps
)(Login);
