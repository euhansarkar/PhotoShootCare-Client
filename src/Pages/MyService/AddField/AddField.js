import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const AddField = () => {

    const {user} = useContext(AuthContext);

    
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const service_id = form.service_id.value;
    const title = form.title.value;
    const img = form.image.value;
    const price = form.price.value;
    const description = form.description.value;
    const feature1Name = form.feature1name.value;
    const feature1des = form.feature1des.value;
    const feature2Name = form.feature2name.value;
    const feature2des = form.feature2des.value;
    const feature3Name = form.feature3name.value;
    const feature3des = form.feature3des.value;
    const feature4Name = form.feature4name.value;
    const feature4des = form.feature4des.value;
    console.log(service_id, title, img, description);
    // console.log(name, phone, reviewText, address, rating, image, email);

    const service = {
         service_id,
         title,
         img,
         price,
         description,
         facility : [
            {
                name: feature1Name,
                details: feature1des
            },
            {
                name: feature2Name,
                details: feature2des
            },
            {
                name: feature3Name,
                details: feature3des
            },
            {
                name: feature4Name,
                details: feature4des
            },
         ],
         email: user.email,
    }

    fetch(`https://service-review-server-five.vercel.app/services`, {
        method: `POST`,
        headers: {
            'Content-Type': `application/json`
        },
        body: JSON.stringify(service)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.acknowledged){
            form.reset();
            toast(`your service added successfully`)
        }
    })
    .catch(err => console.error(err))
  };

  return (
    <div className="my-7">
      <h2 className="font-bold text-4xl capitalize text-pink-600 text-center">
        add a review
      </h2>
      <form onSubmit={handleAddService}>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Service Id"
            name="service_id"
            className="input input-bordered input-secondary w-full"
          />
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="input input-bordered input-secondary w-full"
          />
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            className="input input-bordered input-secondary w-full"
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            className="input input-bordered input-secondary w-full"
          />
          <input
            type="text"
            name="feature1name"
            placeholder="Feature 1 name"
            className="input input-bordered input-secondary w-full"
          />
          <input
            type="text"
            name="feature1des"
            placeholder="Feature 1 description"
            className="input input-bordered input-secondary w-full"
          />
          <input
            type="text"
            placeholder="Feature 2 Name"
            name="feature2name"
            className="input input-bordered input-secondary w-full"
          />
          <input
            type="text"
            placeholder="Feature 2 Description"
            name="feature2des"
            className="input input-bordered input-secondary w-full"
          />
          <input
            type="text"
            name="feature3name"
            placeholder="Feature 3 name"
            className="input input-bordered input-secondary w-full"
          />
          <input
            type="text"
            name="feature3des"
            placeholder="Feature 3 description"
            className="input input-bordered input-secondary w-full"
          />
          <input
            type="text"
            placeholder="Feature 4 Name"
            name="feature4name"
            className="input input-bordered input-secondary w-full"
          />
          <input
            type="text"
            placeholder="Feature 4 Description"
            name="feature4des"
            className="input input-bordered input-secondary w-full"
          />
        </div>
        <div>
          <textarea
            maxLength="120"
            className="textarea textarea-error w-full my-4"
            placeholder="Description"
            name="description"
          ></textarea>
        </div>
        <div className="mx-auto w-30 text-center">
          <button className="btn btn-outline btn-secondary">Add Service</button>
        </div>
      </form>
    </div>
  );
};

export default AddField;
