import React from "react";
import Left from "./Left";
import Right from "./Right";


export default function Home() {
  return (
    <>
      <div className="main">
        <Left />
        <Right/>
      </div>
       <div className="center">
       <img src="https://soledaddemo.pencidesign.net/wp-content/uploads/2021/08/banner-home.jpg" alt="" />
    </div>
    </>
  );
}
