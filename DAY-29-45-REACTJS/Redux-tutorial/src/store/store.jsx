import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../reducers/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
// This code sets up a Redux store using Redux Toolkit's configureStore function.
// It imports a counter reducer from a separate file and includes it in the store's configuration.
// The store is then exported for use in the application, allowing components to access and manipulate the
// counter state through Redux's state management system.
// This approach simplifies the setup of Redux by automatically configuring the store with good defaults and
// enabling features like Redux DevTools integration and middleware support.
// The store can be used in a React application to manage global state, making it easier to
// share data and actions across components without prop drilling.
// The counterReducer is expected to handle actions related to a counter, such as incrementing or
// decrementing a value, and will be responsible for updating the state accordingly.
// This setup is a common pattern in modern React applications that use Redux for state management,
// providing a clear and maintainable structure for managing application state.
// By using Redux Toolkit, developers can focus on writing reducers and actions without worrying about
// the boilerplate code typically associated with setting up Redux, leading to cleaner and more efficient codebases.
// Overall, this code snippet demonstrates a straightforward way to create a Redux store with a single
// counter reducer, making it easy to manage and access the counter state throughout a React application.
// The store can be integrated with React components using the Provider component from react-redux,
// allowing components to connect to the Redux store and dispatch actions to update the counter state.
// This setup is particularly useful for applications that require centralized state management,
// enabling features like undo/redo functionality, time travel debugging, and more complex state interactions.
// Additionally, the use of Redux Toolkit's configureStore function helps to streamline the process of
// setting up the store, reducing the amount of boilerplate code needed and promoting best practices in
// Redux development. 
// It also allows for easy integration of middleware, such as thunk or saga,
// for handling asynchronous actions, further enhancing the capabilities of the Redux store.
// Overall, this code snippet serves as a foundational piece for building a Redux-powered React application,
