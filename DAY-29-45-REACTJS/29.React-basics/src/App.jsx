// import React, { useState } from 'react'

// const App = () => {

//   return (
//     <div>App</div>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([
    { name: 'john', age: 12 },
    { name: 'mohn', age: 22 },
    { name: 'rohn', age: 14 }
  ])

  // Function to add a new user
  const addUser = () => {
    const newUser = { name: 'new user', age: 18 }
    setUsers([...users, newUser]) // Add new user to the existing array
  }

  return (
    <div>
      <h1>User List</h1>

      {users.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      ))}

      <button onClick={addUser}>Add User</button>
    </div>
  )
}

export default App
