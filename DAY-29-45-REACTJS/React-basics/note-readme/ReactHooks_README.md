# 🔧 Introduction to React Hooks
React Hooks are functions that let you “hook into” React state and lifecycle features from **function components**.

Before Hooks, these features were only available in **class components**. Hooks were introduced in **React 16.8** to allow function components to be just as powerful.

---

## 🪝 Commonly Used Hooks

| Hook         | Purpose                                  |
|--------------|------------------------------------------|
| `useState`   | Adds local state to a component          |
| `useEffect`  | Side effects like fetching data or timers|
| `useContext` | Access React context                     |
| `useRef`     | Get a reference to DOM elements or values|
| `useReducer` | Manage complex state logic               |

---

# 🔁 React `useState` Hook

The `useState` hook is the most basic and commonly used hook in React. It lets function components manage state — data that changes over time and re-renders the component.

---

## 📘 What is State?

In React, **state** refers to data that determines how a component renders and behaves. When state changes, React updates the component to reflect the change.

---

## 🔧 What is `useState`?

`useState` is a Hook that allows you to add state to functional components.

### ✅ Syntax

```jsx
const [stateVariable, setStateFunction] = useState(initialValue);

# 📘 React `useState` Hook Guide

## 🧩 Terminology

- **stateVariable**: The current state value.
- **setStateFunction**: A function used to update the state.
- **initialValue**: The initial/default value of the state.

---

## ✍️ Basic Example

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}


# 🧠 Rules of Hooks

- Only call hooks at the top level of your React functions.

- Only call hooks from React functional components or custom hooks.
- Hooks must be called in the same order on every render.

---

# 🛠️ Managing Multiple State Variables

```jsx  
const [name, setName] = useState('John');
const [age, setAge] = useState(25);


# 🔄 Updating Arrays or Objects

```jsx

const [user, setUser] = useState({ name: 'Alice', age: 25 });

// ✅ Correct way to update
setUser({ ...user, age: 26 });
