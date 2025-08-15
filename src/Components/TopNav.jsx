import React from "react";
import { CiFacebook, CiFaceFrown, CiSearch } from "react-icons/ci";
export default function TopNav() {
  return (
    <>
      <header>
        <nav className="topnav">
          <h1>24 News</h1>
          <div className="search">
            <input type="text" name="" id="" />
            <button><CiSearch className="ser"/></button>
          </div>
          <ul>
            <li>
              <a href="">
                <CiFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <CiFaceFrown />
              </a>
            </li>
            <li>
              <a href="">
                <CiFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <CiFaceFrown />
              </a>
            </li>
            <li>
              <a href="">
                <CiFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <CiFaceFrown />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
