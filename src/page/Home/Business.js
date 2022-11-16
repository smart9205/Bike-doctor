import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const Business = () => {
  // React CountUp Add
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 100000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <section class="py-10 bg-gray-50  sm:py-16 lg:py-24">
        <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Numbers tell our Business
            </h2>
            <p class="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              Our Business Goal.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
            <div>
              <h3 class="font-bold text-7xl">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
                  <CountUp duration={5} start={0} end={16} /> +{" "}
                </span>
              </h3>
              <p class="mt-4 text-xl font-medium text-gray-900">
                Years in business
              </p>
              <p class="text-base mt-0.5 text-gray-500">
                Creating the successful path
              </p>
            </div>

            <div>
              <h3 class="font-bold text-7xl">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
                  <CountUp start={0} end={5000} duration={5} />+{" "}
                </span>
              </h3>
              <p class="mt-4 text-xl font-medium text-gray-900">
                World Wide Sells
              </p>
              <p class="text-base mt-0.5 text-gray-500">In last 6 years</p>
            </div>

            <div>
              <h3 class="font-bold text-7xl">
                <span class="text-transparent bg-clip-text bg-gradient-to-r   from-green-500 to-blue-600">
                  <CountUp start={50} end={100} duration={5} /> +{" "}
                </span>
              </h3>
              <p class="mt-4 text-xl font-medium text-gray-900">Products</p>
              <p class="text-base mt-0.5 text-gray-500">
                Working for your success
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;
