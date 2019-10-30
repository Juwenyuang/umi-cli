import React, { useState, useEffect } from "react";
import { connect } from "dva";
import { routerRedux, withRouter } from 'dva/router';
import { Modal } from 'antd';
import styles from './unitTest.less';
// import { imgs } from '../../../utils/img';
// import Unit from 'src/base/components/unit';
// import API from '../../../utils/api';
// import CommUtil from '../../../utils/common';s
// import { listenerCount } from "cluster";
import * as usersService from '../services/unitTestService';


function UnitTest(props) {
  const { history } = props;

  const SIZE = 4;

  const [ currentPage, setCurrentPage ] = useState(1);

  const [ currentList, setCurrentList ] = useState([]);

  const [ totalNum, setTotalNum ] = useState('');

  useEffect(()=> {
    (async ()=> {
      const result = await usersService.getUnitTestTestList({ pageNo: currentPage, rowsCount: SIZE });
      if(result && result.code === 10000) {
        setCurrentList(result.data.unitTestList);
        setTotalNum(result.data.totalCount);
      }
    })();
  }, [currentPage]);

  const header_left_func = ()=> {
    history.replace({
      pathname: '/'
    });
  }

  const header_right_func = ()=> {
    history.push('/kidUnitTestDone');
  }

  const [ uVisible, setUVsible ] = useState(false);

  const [ itemValue, setItemValue ] = useState({});

  const card_btnFunc = (uItem)=> {
    setItemValue(uItem);
    setUVsible(true);
  }

  let theUnit;
  if(itemValue.unitList && itemValue.unitList.length) {
    let _unitStr = '';
    (itemValue.unitList).map((_iItem, _iIndex)=> {
      if(_iIndex > 0) {
        _unitStr = _unitStr + '、' + _iItem.unitName;
      }else {
        _unitStr = _unitStr + _iItem.unitName;
      }
      return _unitStr;
    })
    theUnit = itemValue.gradeName + _unitStr;
  }else {
    theUnit = itemValue.gradeName;
  }

  const closeModal = ()=> {
    setUVsible(false);
  }

  const getReady = ()=> {
    closeModal();
    history.push({
      pathname: '/kidUnitTestQuesTion',
      query: {
        testId: itemValue.testID,
        isTest: itemValue.status,
        number: itemValue.number
      }
    });
  }

  const pagChange = (current, size)=> {
    setCurrentPage(current);
  }

  return (
    <div
      className={
        currentList &&
        currentList.length
          ? `${styles.unitTest} ${styles.test}`
          : styles.unitTest
      }
    >
      {/* <Unit 
        currentList={currentList}
        totalNum={totalNum}
        header_left_icon={imgs.unit_goBack_pink}
        header_left_func={header_left_func}
        header_middle_title={imgs.unitTest}
        header_middle_des={''}
        header_isNeedRight={true}
        header_right_text={'已完成的测评'}
        header_right_func={header_right_func}
        card_btnText={'进入评测'}
        card_btnFunc={card_btnFunc}
        SIZE={SIZE}
        pagChange={pagChange}
        emptyText={'暂无单元测评，等待老师布置'}
      /> */}
      <Modal
        className={styles.unitTest__modal}
        centered={true}
        maskClosable={false}
        footer={null}
        visible={uVisible}
        onCancel={closeModal}
      >
        <div className={styles.unitTest__modal__container}>
          <p className={styles.modal__container__title}>
            即将进入单元测评
          </p>
          <p className={styles.modal__container__theUnit}>
            测评范围：{theUnit}
          </p>
          <p className={styles.modal__container__hintTitle}>
            准备好了么？
          </p>
          <p className={styles.modal__container__hint}>
            小提示：别忘了准备好纸和笔，<br/>
            计算好把答案填到输入框中哦～
          </p>
          <div className={styles.modal__container__btnBox}>
            <div className={styles.btnBox__leftBtn}
              onClick={closeModal}
            >
              我再想想
            </div>
            <div className={styles.btnBox__rightBtn}
              onClick={getReady}
            >
              准备好了
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
 
const mapStateToProps = function (state) {
  return {
    // unitTestModel: state.unitTestModel,
    // loading: state.loading.models.unitTestModel,
  };
};
export default withRouter(
  connect(
    mapStateToProps
  )(UnitTest)
);
