import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
};

export default Counter;
// providing a clear and maintainable structure for managing application state.
// The store can be integrated with React components using the Provider component from react-redux,
// allowing components to connect to the Redux store and dispatch actions to update the counter state.
// This setup is particularly useful for applications that require centralized state management,
// enabling features like undo/redo functionality, time travel debugging, and more complex state interactions.
// Additionally, the use of Redux Toolkit's configureStore function helps to streamline the process of
// setting up the store, reducing the amount of boilerplate code needed and promoting best practices in
// Redux development.