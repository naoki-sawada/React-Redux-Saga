import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Test.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { testIncrement, testDecrement, testClear } from 'actions';

@connect(state => ({
  count: state.test.counter
}), {
  increment: testIncrement,
  decrement: testDecrement,
  clear: testClear,
})
export default class Test extends React.Component {
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
