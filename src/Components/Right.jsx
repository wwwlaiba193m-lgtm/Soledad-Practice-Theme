import React from "react";

export default function Right() {
  const titles = [
    {
      title:
        "How tech companies are trying to woo employees returning to work after...",
      img: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?cs=srgb&dl=pexels-minan1398-906150.jpg&fm=jpg",
    },
    {
      title:
        "How tech companies are trying to woo employees returning to work after...",
      img: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?cs=srgb&dl=pexels-minan1398-906150.jpg&fm=jpg",
    },
    {
      title:
        "How tech companies are trying to woo employees returning to work after...",
      img: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?cs=srgb&dl=pexels-minan1398-906150.jpg&fm=jpg",
    },
    {
      title:
        "How tech companies are trying to woo employees returning to work after...",
      img: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?cs=srgb&dl=pexels-minan1398-906150.jpg&fm=jpg",
    },
    {
      title:
        "How tech companies are trying to woo employees returning to work after...",
      img: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?cs=srgb&dl=pexels-minan1398-906150.jpg&fm=jpg",
    },
    {
      title:
        "How tech companies are trying to woo employees returning to work after...",
      img: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?cs=srgb&dl=pexels-minan1398-906150.jpg&fm=jpg",
    },
  ];
  return (
    <>
      <div className="right">
        <div className="img-main">
          <div className="img1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id e ut
              dolor delectus minima magni molestiae reprehenderit quod.
            </p>
          </div>
          <div className="img1">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              porro autem illo provident consectetur, maiores eius illutia!
            </p>
          </div>
        </div>
        <div className="main-box">
          <div className="img-box">
            <h1>Trending Now</h1>
            <hr />
            {titles.map((ele) => (
              <p>{ele.title}</p>
            ))}
          </div>
          <div className="img-box">
            {titles.slice(0,3).map((ele) => (
              <div className="boxes">
                <img
                  src={ele.img}
                  alt=""
                />
                <div className="content">
                  <p>
                   {ele.title.slice(0,50)}
                  </p>
                  <a href=""> by penci design</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
