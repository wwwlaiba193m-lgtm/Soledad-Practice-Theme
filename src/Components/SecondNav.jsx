import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function SecondNav() {
  const navdata = [
    { item: "Home" },
    { item: "Life Style" },
    { item: "Esports" },
    { item: "Food" },
    { item: "Entertainment" },
    { item: "Health" },
    { item: "Money" },
    { item: "Travel" },
    { item: "Tech" },
    { item: "Travel" },
  ];
  return (
    <>
      <header>
        <nav className="secondnav">
          <ul>
            {navdata.map((ele) => (
              <li>
                <a href="/">{ele.item} <RiArrowDropDownLine /></a>
              </li>
            ))}
          </ul>
          <p>Wednesday, August 13, 2025</p>
        </nav>
      </header>
      <hr />
    </>
  );
}
