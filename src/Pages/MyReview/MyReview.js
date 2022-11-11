import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../Hooks/useTitle";
import SingleReview from "./SingleReview/SingleReview";

const MyReview = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle(`myreview`);
  console.log(reviews); 
  useEffect(() => {
    fetch(
      `https://service-review-server-five.vercel.app/reviews?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('photoShootToken')}`
        }
      }
    )
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          logOut();
        }
        return res.json()})
      .then((data) => {
        setReviews(data)
      });
  }, [user?.email]);


  const handleDelete = (id) => {
    const proceed = window.confirm(
      `are you sure you want to delete this review?`
    );
    if (proceed) {
      fetch(`https://service-review-server-five.vercel.app/reviews/${id}`, {
        method: `DELETE`,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast(`your review deleted successfully`);
            const remaining = reviews.filter((revi) => revi._id !== id);
            setReviews(remaining);
          }
        });
    }
  };


  const handleUpdate = id => {
    const go_id = reviews.find(revie => revie._id === id);
    const reviText = go_id.reviewText;
    if(go_id){
      fetch(`https://service-review-server-five.vercel.app/reviews/${id}`, {
        method: `PATCH`,
        headers: {
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(reviText) 
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast(`your review deleted successfully`);
            const remaining = reviews.filter((revi) => revi._id !== id);
            setReviews(remaining);
          }
        });
    }
  }



  return (
    <div>
      <h2 className="text-5xl font-bold text-center mt-12">Your Reviews</h2>
      {
        reviews.length <= 0 ? <h2 className="text-5xl font-semibold text-center my-28 text-red-600">you don't add any review yet</h2> : null
      }
      <div className="grid md:grid-cols-3 md:gap-7 md:my-7">
        {reviews.map((review) => (
          <SingleReview
            review={review}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            key={review._id}
          ></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
