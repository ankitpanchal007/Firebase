import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";
import { Login } from "./login";
import firebase from "./Service/firebase";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      {/* <UserProvider> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login details={user} />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
      {/* </UserProvider> */}
    </div>
  );
}

export default App;
