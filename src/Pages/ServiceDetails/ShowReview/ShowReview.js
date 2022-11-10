import React, { useEffect, useState } from "react";
import PerReview from "../PerReview/PerReview";

const ShowReview = ({ serviceDetails }) => {
  const { _id, title, img, service_id, price, description, facility } =
    serviceDetails;

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://service-review-server-five.vercel.app/reviews/${service_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);

  return (
    <div>
      <h2>this is show review page</h2>
      <div className="grid gap-5 grid-cols-3">
        {reviews.map((review, index) => (
          <PerReview review={review} key={index}></PerReview>
        ))}
      </div>
    </div>
  );
};

export default ShowReview;
