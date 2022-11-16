import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import PartsCard from "./PartsCard";

const Parts = () => {
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery("services", () =>
    fetch("https://young-beyond-90942.herokuapp.com/service").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div class="mx-auto max-w-screen-xl px-4 py-8 ">
      <div class="relative mx-auto max-w-3xl text-center">
        <span class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-black/10"></span>
        <h2 class="relative inline-block bg-white px-4 text-center text-2xl font-bold">
          Products
        </h2>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8  lg:grid-cols-4 ">
        {services
          .slice(0, 8)
          .reverse()
          .map((service) => (
            <PartsCard key={service._id} service={service}></PartsCard>
          ))}
      </div>
    </div>
  );
};

export default Parts;
