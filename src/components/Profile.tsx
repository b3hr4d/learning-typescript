import React from "react";
import { User } from "../interfaces/User.interface";

const Profile: React.FC<User> = ({ userName }) => {
  return <div>{userName}</div>;
};
export default Profile;
