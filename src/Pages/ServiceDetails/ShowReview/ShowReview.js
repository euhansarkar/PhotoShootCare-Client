import React, { useEffect, useState } from 'react';
import PerReview from "../PerReview/PerReview"

const ShowReview = ({serviceDetails}) => {
  const {service_id} = serviceDetails;

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://service-review-server-five.vercel.app/reviews/${service_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [service_id]);


  return (
    <div>
      <h2 className='text-center text-5xl font-bold my-12'>Customer Review</h2>
      <div className="grid gap-5 grid-cols-3">
        {reviews.map((review, index) => (
          <PerReview review={review} key={index}></PerReview>
        ))}
      </div>
    </div>
  );
};

export default ShowReview;