import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PartsCard = ({ service }) => {
  const { _id, p_name, img, description, min, available_quantity, price } =
    service;
  const navigate = useNavigate();

  const navigateToPurchase = (id) => {
    navigate(`/PartsCard/${id}`);
  };

  return (
    <div>
      <a href="#" class="relative block border border-gray-100">
        <img
          className="hover:scale-110 transform transition duration-500"
          alt="Toy"
          src={img}
        />

        <div class="p-6">
          <p class="text-sm font-medium text-gray-600">{price}$</p>

          <h5 class="mt-1 text-lg font-bold">{p_name}</h5>

          <button
            name="add"
            onClick={() => navigateToPurchase(_id)}
            type="button"
            class="mt-4 flex w-full items-center justify-center rounded-sm bg-[#4ADE80] px-8 py-4  text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
          >
            <span class="text-sm font-medium"> Buy Now </span>

            <svg
              class="ml-1.5 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
      </a>
    </div>
  );
};

export default PartsCard;
