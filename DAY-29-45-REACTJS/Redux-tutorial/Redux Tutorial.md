  
---

# 📘 React + Redux + Redux Toolkit – Full Tutorial Guide

---

## 🧠 What Is Redux?

### ✅ **What**

Redux is a **predictable state container** for JavaScript applications. It helps manage state in a centralized way.

### ❓ Why Use Redux

* Complex apps have **multiple components** needing access to the **same data** (e.g., auth, theme, cart).
* **Avoids prop drilling** (passing props deep down).
* Makes state changes **predictable** and **traceable** via actions.
* Great for **debugging** and **testing**.

### 📍 Where to Use Redux

* Medium to large apps
* When multiple components share or update the same state
* If app needs global state: user login, shopping cart, UI preferences, etc.

---

## 🎯 Redux Toolkit (RTK)

### ✅ What

Redux Toolkit is the **official, recommended way** to write Redux logic. It simplifies setup and reduces boilerplate code.

### ❓ Why RTK

* Reduces boilerplate (`createSlice`, `configureStore`)
* Built-in **Immer** support for immutable state
* Great DevTools integration
* Includes tools for async logic like `createAsyncThunk`

---

## 📦 1. Setting Up Redux with RTK in React

### 🛠️ Step-by-step

#### Install Dependencies

```bash
npm install @reduxjs/toolkit react-redux
```

---

## 🗂️ 2. Setup Redux Store

### ✅ What

A **store** is the single source of truth that holds your app’s state.

### 📍 Where

Create `src/app/store.js`

### ⚙️ How to Implement

```js
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

### 🧠 Why

* `configureStore` automatically sets up Redux DevTools
* Combines reducers and applies good defaults

---

## 🧩 3. Create a Slice

### ✅ What

A **slice** is a piece of Redux state + its logic. It includes:

* initial state
* reducers (logic)
* action creators

### 📍 Where

Create `src/features/counter/counterSlice.js`

### ⚙️ How to Implement

```js
// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

### 🧠 Why

* `createSlice` reduces code duplication
* Auto-generates action creators

---

## 🏗️ 4. Connect Redux to React

### ✅ What

Wrap your app with Redux’s `<Provider>` to make the store accessible throughout the component tree.

### 📍 Where

Edit `src/index.js`

### ⚙️ How to Implement

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

---

## 🎛️ 5. Access Redux State & Dispatch Actions

### ✅ What

* **`useSelector`** lets you access state.
* **`useDispatch`** lets you trigger actions.

### 📍 Where

Create `src/features/counter/Counter.js`

### ⚙️ How to Implement

```js
// src/features/counter/Counter.js
import React from 'react';
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
```

---

## 🧪 6. Use the Component in App

### 📍 Where

Edit `src/App.js`

```js
// src/App.js
import React from 'react';
import Counter from './features/counter/Counter';

function App() {
  return (
    <div>
      <h1>Redux Toolkit Counter Example</h1>
      <Counter />
    </div>
  );
}

export default App;
```

---

## ⏳ 7. Handle Asynchronous Logic (API Calls)

### ✅ What

Use `createAsyncThunk` for async operations (e.g. fetch, POST).

### 📍 Where

Update your slice file (e.g. `postsSlice.js` or `userSlice.js`)

### ⚙️ Example: Fetch Posts from API

```js
// src/features/posts/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await res.json();
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
```

---

## 🔍 8. DevTools & Debugging

### ✅ What

Redux DevTools lets you:

* See all actions dispatched
* Inspect state changes
* Time-travel through states

### 🛠️ Setup

No setup needed if using `configureStore()` — it enables DevTools automatically.

---

## 📦 Bonus: Structure Recommendation

```
src/
├── app/
│   └── store.js
├── features/
│   └── featureName/
│       ├── FeatureComponent.js
│       └── featureSlice.js
├── components/
│   └── SharedComponent.js
├── App.js
└── index.js
```

---

## 📘 Key Takeaways

| Concept     | Purpose                    | Tool / Hook          |
| ----------- | -------------------------- | -------------------- |
| Store       | Global state container     | `configureStore()`   |
| Slice       | State + reducers + actions | `createSlice()`      |
| Dispatch    | Trigger actions            | `useDispatch()`      |
| Selector    | Read state                 | `useSelector()`      |
| Async Thunk | Handle async logic         | `createAsyncThunk()` |
| Provider    | Connect store to React     | `<Provider>`         |

---

## 📚 Recommended Reading

* [Redux Toolkit Docs](https://redux-toolkit.js.org/)
* [Redux Fundamentals](https://redux.js.org/tutorials/fundamentals)
* [RTK Best Practices](https://redux.js.org/style-guide/style-guide)

---

Would you like this exported as a `README.md` file or want to go deeper into topics like `middleware`, `selectors`, `RTK Query`, or `normalize` state?
