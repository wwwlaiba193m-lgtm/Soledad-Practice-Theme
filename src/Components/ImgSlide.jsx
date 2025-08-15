import React from "react";

export default function ImgSlide(ele) {
  const data = [
    {
      img: ele.img
        ? "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
        : ele.img,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
    {
      img: ele.img
        ? ele.img
        : "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
    {
      img: ele.img
        ? ele.img
        : "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
    {
      img: ele.img
        ? "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
        : ele.img,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
  ];
  return (
    <div>
      <div className="container">
        {data.map((ele) => (
          <div className="img-card">
            <img src={ele.img} alt="" />
            <p>{ele.title}</p>
            <a href="">By {ele.author}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
