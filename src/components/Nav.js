import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/bbqs"> Bbq Restaurants</Link>
        </li>
        <li>
          <Link to="/bbqs/new"> Add a Bbq Restaurant</Link>
        </li>
      </ul>
    </div>
  );
}
