import React from "react";

export default function Left() {
  const repeatdata = [
    {
      img: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
      title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      author: "Coders Here",
    },
    {
      img: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
      title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      author: "Coders Here",
    },
    {
      img: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
      title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      author: "Coders Here",
    },
    {
      img: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
      title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      author: "Coders Here",
    },
  ];
  return (
    <>
      <div className="left">
        <div className="imag">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            perspiciatis dolore repellat repellendus cupiditate quos eos
            excepturi delectus doloribus dolorem labore voluptas et sint vel
            tempore! Minus veniam tempora asperiores.
          </p>
        </div>
        <div className="parent">
          {repeatdata.map((ele) => (
            <div className="child">
              <img src={ele.img} alt="" />
              <div className="content">
                <p>{ele.title}</p>
                <a href="">{ele.author} </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
