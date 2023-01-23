import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./providers/userProvider";
import { redirect } from "react-router-dom";
import { logOut } from "./Service/firebase";
export default function Dashboard() {
  const user = useContext(UserContext);
  const [redirected, setredirected] = useState(null);

  useEffect(() => {
    if (!user) {
      setredirected("/");
    }
  }, [user]);
  if (redirected) {
    <redirect to={redirected} />;
  }
  return (
    <div className="dashboard">
      <h1 className="dashboard-text">Welcome Home</h1>
      <button className="logout-button" onClick={logOut}>
        <img
          src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z29vZ2xlJTIwbG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
          alt="google icon"
        />
        <span> logout</span>
      </button>
    </div>
  );
}
