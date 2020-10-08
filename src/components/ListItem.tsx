import React from "react";
import { Link } from "react-router-dom";

interface ItemProps {
  name: string;
  url: string;
}

const ListItem: React.FC<ItemProps> = ({ name, url }) => {
  return (
    <li>
      <Link to={`/${name}`}>{name}</Link>
    </li>
  );
};
export default ListItem;
