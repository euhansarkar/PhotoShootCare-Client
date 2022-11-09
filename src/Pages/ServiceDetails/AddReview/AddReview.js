import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const AddReview = ({ serviceDetails }) => {
  const { _id, title, img, service_id, price, description, facility } =
    serviceDetails;
  const { user } = useContext(AuthContext);

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const reviewText = form.reviewText.value;
    const address = form.address.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const email = form.email.value;
    // console.log(name, phone, reviewText, address, rating, image, email);

    const review = {
        service: _id,
        service_id,
        serviceName: title,
        reviewer: name,
        email,
        phone,
        address,
        image,
        rating,
        reviewText 
    }

    fetch(`http://localhost:5000/reviews`, {
        method: `POST`,
        headers: {
            'Content-Type': `application/json`
        },
        body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.acknowledged){
            form.reset();
            toast(`your review added successfully`)
        }
    })
    .catch(err => console.error(err))
  };

  return (
    <div className="my-7">
      <h2 className="font-bold text-4xl capitalize text-pink-600 text-center">
        add a review
      </h2>
      <form onSubmit={handleAddReview}>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            className="input input-bordered input-secondary w-full"
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            className="input input-bordered input-secondary w-full"
          />
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            className="input input-bordered input-secondary w-full"
          />
          <input
            type="email"
            placeholder="Email"
            defaultValue={user?.email || `undefined`}
            readOnly
            name="email"
            className="input input-bordered input-secondary w-full"
          />
          <input
            type="text"
            name="rating"
            placeholder={`rating on ${title} service`}
            className="input input-bordered input-secondary w-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            className="input input-bordered input-secondary w-full"
          />
        </div>
        <div>
          <textarea
            className="textarea textarea-error w-full my-4"
            placeholder="Write Your Review Here"
            name="reviewText"
          ></textarea>
        </div>
        <div className="mx-auto w-30 text-center">
          <button
            
            className="btn btn-outline btn-secondary"
          >
            Add Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
