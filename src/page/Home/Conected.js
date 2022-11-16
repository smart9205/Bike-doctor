import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Conected = () => {
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
      <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
            <motion.div
              initial={{ x: -600 }}
              animate={{ rotate: 0, scale: 1, x: 10 }}
              transition={{
                delay: 1,
                x: { duration: 1 },
                default: { ease: "linear" },
              }}
            >
              <img
                class="w-full max-w-md mx-auto"
                src="https://i.ibb.co/Thr5SqB/Virtual-Networking.png"
                alt=""
              />
            </motion.div>

            <div class="text-center lg:text-left">
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Grow business with us.
              </h2>
              <p class="mt-6 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <button
                href=""
                title=""
                class="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 rounded-md mt-9  text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                role="button"
              >
                Check all{" "}
                <CountUp className="p-1" duration={5} start={0} end={1486} />
                Business{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conected;
