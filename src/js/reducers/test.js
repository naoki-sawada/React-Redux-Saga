import { TEST_INCREMENT, TEST_DECREMENT, TEST_CLEAR } from 'actions';

const initialState = {
  counter: 0
};

export default function test(state = initialState, action) {
  switch (action.type) {
    case TEST_INCREMENT:
      return { counter: state.counter + 1 };
    case TEST_DECREMENT:
      return { counter: state.counter - 1 };
    case TEST_CLEAR:
      return { counter: state.counter - state.counter };
    default:
      return state;
  }
}
