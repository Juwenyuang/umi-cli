import React from 'react';
import { connect } from "dva";
import { withRouter } from 'dva/router';
import styles from './index.less';
class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (<div className={styles.normal}>
      <div className={styles.content}>
        {this.props.children}
      </div>
    </div>
    );
  }
}
const mapStateToProps = function (state) {
  return {}
}
export default withRouter(
  connect(
    mapStateToProps
  )(MainLayout)
);
