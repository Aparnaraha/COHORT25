import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  const [username, setUsername] = useState("John Doe");

  const AdduserName = () => {
    const newUser =  "aparna" ;
    setUsername([newUser]);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;




