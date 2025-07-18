import { useState } from "react";


const App = () => {
  const [username, setUsername] = useState("John Doe");

  const AdduserName = () => {
    const newUser =  "aparna" ;
    setUsername([newUser]);
  };

  return (
    <div>
      <h1 className="text-3xl font-medium ">Username</h1>
      <h2 className="m-2 p-2">{username}</h2>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 py-2 border border-blue-500 hover:border-transparent rounded shadow" onClick={AdduserName}>
        Add User  
      </button>
    </div>
  );
};

export default App;
