import React from "react";
import toast from "react-hot-toast";
import { BsStarFill } from "react-icons/bs";

const SingleReview = ({ review, handleDelete, handleUpdate }) => {
  const { serviceName, _id, reviewer, address, image, rating, reviewText } =
    review;

  const loopRating = (rating) => {
    const arr = [];
    for (let i = 0; i < rating; i++) {
      if (i) {
        arr.push(<BsStarFill className="text-amber-400" />);
      }
    }
    return arr;
  };

  return (
    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto rounded-md bg-sky-100">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={image}
              alt=""
              className="object-cover w-12 h-12 rounded-full"
            />
          </div>
          <div>
            <h4 className="font-bold">
              {reviewer?.length > 10 ? reviewer.slice(0, 10) : reviewer}
            </h4>
            <span className="text-xs">{address}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold flex">
            {rating && loopRating(rating)?.map((m) => m)}
          </span>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <p>{reviewText}</p>
      </div>
      <div className="flex justify-between">
        {/* The button to open modal */}
        <label
          onClick={() => handleUpdate(_id)}
          htmlFor="my-modal-6"
          className="btn btn-primary"
        >
          update
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <form className="modal-box">
            <textarea
              className="textarea textarea-info text-black w-full h-32"
              placeholder="Bio"
              name="text"
              defaultValue={reviewText}
            ></textarea>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">
                Update!
              </label>
            </div>
          </form>
        </div>
        <button onClick={() => handleDelete(_id)} className="btn btn-error">
          delete
        </button>
      </div>
    </div>
  );
};

export default SingleReview;
