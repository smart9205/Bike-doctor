import React from "react";

const Reply = () => {
  return (
    <div name="contact" className=" body-font relative">
      <div class="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          style={{ filter: "grayscale(1)" + " contrast(1.2)" + "opacity(0.4)" }}
        ></iframe>
      </div>
      <div class="container px-5 py-24 mx-auto flex ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-300 ">
          <div className="card-body">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Comments</span>
              </label>
              <input
                type="text"
                placeholder="comments"
                className="input input-bordered input-lg w-full max-w-xs"
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-[#001858]  0 text-white">
                Leave a Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reply;
