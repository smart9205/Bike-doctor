import React, { useEffect, useState } from "react";
import ReviewRow from "./ReviewRow";

const Review = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = `https://young-beyond-90942.herokuapp.com/review`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 3)));
  }, []);

  return (
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <h2 class="text-xl font-bold sm:text-2xl">Customer Reviews</h2>

      <div class="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-3">
        {services.map((service) => (
          <ReviewRow key={service._id} service={service}></ReviewRow>
        ))}
      </div>
    </div>
  );
};

export default Review;
