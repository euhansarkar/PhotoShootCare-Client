import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import SingleReview from "./SingleReview/SingleReview";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = id => {
    const proceed = window.confirm(`are you sure you want to delete this review?`);
    if(proceed){
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: `DELETE`,
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                toast(`your review deleted successfully`);
                const remaining = reviews.filter(revi => revi._id !== id);
                setReviews(remaining);
            }
        })
    }
  }

  return (
    <div>
      <h2>this i s my review </h2>
      <h2 className="text-5xl">{reviews.length}</h2>
      <div className="grid grid-cols-3 gap-7 my-7">
        {reviews.map((review) => (
          <SingleReview review={review} handleDelete={handleDelete} key={review._id}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default MyReview;