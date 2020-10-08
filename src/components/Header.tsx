import React from "react";
import { Link } from "react-router-dom";
import { User } from "../interfaces/User.interface";

const Header: React.FC<User> = ({ userName }) => {
  return (
    <div style={{ display: "flex", width: "100vw", padding: "5px" }}>
      <div
        style={{
          display: "flex",
          width: "90vw",
          justifyContent: "space-evenly",
        }}
      >
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/list"}>
          <p>List</p>
        </Link>
        <Link to={"/search"}>
          <p>Search</p>
        </Link>
      </div>
      <div style={{ width: "10vw" }}>
        {userName ? <Link to={"/profile"}>{userName}</Link> : <p>Guest</p>}
      </div>
    </div>
  );
};
export default Header;
