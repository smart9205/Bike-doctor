import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div class="bg-gradient-to-b from-green-50 to-green-100">
        <div class="py-10 sm:py-16 lg:py-24">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <motion.div>
                <h1 class="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  Find parts for, your
                  <br />
                  <div class="relative inline-flex">
                    <span class="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                    <h1 class="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                      motorbike.
                    </h1>
                  </div>
                </h1>

                <p class="mt-8 text-base text-black sm:text-xl">
                  We have more than 219.087 parts online.We sell parts for your
                  motorbike.Sell all the usefull parts Online at our website
                </p>

                <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <a
                    href="/Parts"
                    title=""
                    class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                    role="button"
                  >
                    {" "}
                    Start exploring{" "}
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 600 }}
                animate={{ rotate: 0, scale: 1, x: -10 }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 20,
                }}
              >
                <img
                  class="w-full"
                  src="https://i.ibb.co/M75Qmdw/Motocross-bro.png"
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
