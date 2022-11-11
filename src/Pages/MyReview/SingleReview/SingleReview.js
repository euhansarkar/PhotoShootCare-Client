import React from "react";
import toast from "react-hot-toast";

const SingleReview = ({ review, handleDelete, handleUpdate }) => {
  const { serviceName, _id, reviewer, address, image, rating, reviewText } =
    review;


  return (
    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={image}
              alt=""
              className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">
              {reviewer?.length > 10 ? reviewer.slice(0, 10) : reviewer}
            </h4>
            <span className="text-xs dark:text-gray-400">{address}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 dark:text-yellow-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5 h-5 fill-current"
          >
            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
          </svg>
          <span className="text-xl font-bold">
            {rating?.length > 5 ? rating.slice(0, 5) : rating}
          </span>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm dark:text-gray-400">
        <p>{reviewText}</p>
      </div>
      <div className="flex justify-between">
        {/* The button to open modal */}
        <label onClick={() => handleUpdate(_id)} htmlFor="my-modal-6" className="btn btn-primary">
          update
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <form className="modal-box">
          <textarea className="textarea textarea-info text-black w-full h-32" placeholder="Bio" name="text" defaultValue={reviewText}></textarea>
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
