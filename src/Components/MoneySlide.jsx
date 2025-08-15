import React from "react";

export default function MoneySlide() {
  const data = [
    {
      img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
    {
      img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
    {
      img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
    {
      img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
     {
      img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
    {
      img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
    {
      img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
    {
      img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
     {
      img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
    {
      img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
    {
      img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
    {
      img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore culpa, obcaecati corrupti dicta quidem! Eaque, quasi explicabo consequuntur blanditiis iusto odio suscipit nostrum sint voluptatem cum",
      author: " Coders ",
    },
  ];
  return (
    <div>
      <div className="container2">
        {data.map((ele) => (
          <div className="img-card2">
            <img src={ele.img} alt="" />
            <div className="content">
              <p>{ele.title.slice(0,80)}</p>
              <a href="">By {ele.author}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
