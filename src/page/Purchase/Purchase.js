import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Purchase = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("https://young-beyond-90942.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          toast("order confirmed");
        } else {
          toast("order confirmed");
        }
      });
  };

  const { PartsCardId } = useParams();

  const [service, setService] = useState({});
  const [user] = useAuthState(auth);

  useEffect(() => {
    const url = `https://young-beyond-90942.herokuapp.com/service/${PartsCardId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              PRODUCT NAME
            </h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
              {service.p_name}
            </h1>
            <div class="flex mb-4">
              <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Description
              </a>
            </div>
            <p class="leading-relaxed mb-4">{service.description}</p>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Available Product</span>
              <span class="ml-auto text-gray-900">
                {service.available_quantity}
              </span>
            </div>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Minium Order</span>
              <span class="ml-auto text-gray-900">{service.min}</span>
            </div>
            <div className="border-t mb-2"></div>
            <div class="flex">
              <span class="title-font font-medium text-4xl text-gray-900">
                ${service.price}.<span className="text-lg "> Price</span>
              </span>
              <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">
                Order
              </button>
            </div>
          </div>
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={service?.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Purchase;

{
  /* <div class="card w-96 bg-base-100 shadow-xl row-01">
                <figure class="px-10 pt-10">
                    <img src={service.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-left">
                    <p>Name: {service.p_name}</p>
                    <p> Description:{service.description}</p>
                    <p>Per unit Price: ${service.price}</p>
                    <p> Available quantity :{service.available_quantity}</p>
                    <p>Min-order :{service.min}</p>
                </div>
            </div>
            <div>
            <form className='flex flex-col w-72 mx-10 mt-10' onSubmit={handleSubmit(onSubmit)}>
                <input className='bg-slate-100 text-black'   value={user?.displayName || ''} {...register("name")} />
                <br/>
                <span>Email</span>
                <input className='bg-slate-100 text-dark'  value={user?.email || ''} {...register("email")} />
                <br/>
                <span>phone</span>
                <input className='bg-slate-100 text-dark'  type="number" {...register("phone")} />
                <br/>
                <span>address</span>
                <input className='bg-slate-100 text-dark' type="text" {...register("address")} />
                <br/>
                <span>quantity</span>
                <input className='bg-slate-100 text-dark' placeholder="quantity" type="number"  {...register("quantity" , { min:60 , max: 3000 })} />
                <br/>
                <span>price</span>
                <input className='bg-slate-100 text-dark'  value={service?.price || ''}  type="text" {...register("price")} />
                <br/>
                <input className='bg-indigo-700 text-white' type="submit"  value="order"/>
            </form>

            </div> */
}
