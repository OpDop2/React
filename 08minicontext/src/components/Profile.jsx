import React, { useContext } from "react";
import UserContext from "/workspaces/React/08minicontext/src/context/Usercontext.js";
import { Navigate } from "react-router-dom";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>please login</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
