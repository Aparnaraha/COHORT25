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

  return (
    <div>
      <h1>User List</h1>
      {users.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  )
}

export default App
