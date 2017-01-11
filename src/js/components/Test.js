import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Test.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions';

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.test}>
        <div className={styles.count}>{this.props.count}</div>
        <div className={styles.button}>
          <button onClick={this.props.increment}>INCREMENT</button>
          <button onClick={this.props.decrement}>DECREMENT</button>
          <button onClick={this.props.clear}>CLEAR</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.test.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(actions.testIncrement()),
    decrement: () => dispatch(actions.testDecrement()),
    clear: () => dispatch(actions.testClear())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
