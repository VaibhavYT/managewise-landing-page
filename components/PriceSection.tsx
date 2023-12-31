"use client"
import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const PriceSection = () => {
  const scrollRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures animation only happens once
  });
  React.useEffect(() => {
    if (inView) {
      // Delay the animation by 2 seconds
      setTimeout(() => {
        controls.start({ opacity: 1, y: 0 });
      }, 800);
    }
  }, [controls, inView]);
  return (
    <motion.div
      className=" pt-20 pb-28  w-full text-center justify-center items-center flex-col"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 1.8 }}
      viewport={{ root: scrollRef }}
    >
      <div className=" mb-4">
        <h2 className="mb-7 text-6xl font-medium">
          Select your ideal <span className=" text-orange-400">Pricing</span>{" "}
          plan
        </h2>
        <p className=" text-xl opacity-60 font-medium text-center">
          At Manage Wise, we believe in providing you with <br />
          pricing plans that adapt to your unique needs.
        </p>
      </div>
      <div className=" pl-28 pr-28 pt-8 flex justify-between ">
        <div className=" py-10 pl-8 pr-32 bg-purple-200 rounded-3xl w-fit flex-col justify-start items-start">
          <div className=" py-1 px-2.5  w-fit  bg-white rounded-lg text-xs mb-2 border flex justify-start">
            <p className=" text-purple-500 text-md capitalize font-medium">
              FREE
            </p>
          </div>
          <div className="flex items-baseline">
            <p className=" text-7xl font-medium mr-2">$0</p>
            <p>/month</p>
          </div>
          <div className=" pt-5">
            <div className="flex ">
              <span className="mr-2">✅</span>{" "}
              <p className=" opacity-50">Access to all basic features</p>
            </div>
          </div>
          <div className=" py-1">
            <div className="flex ">
              <span className="mr-2">✅</span>{" "}
              <p className=" opacity-50">Reporting and analytics</p>
            </div>
          </div>
          <div className=" py-1">
            <div className="flex ">
              <span className="mr-2">✅</span>{" "}
              <p className=" opacity-50">Up to 5 individual users</p>
            </div>
          </div>
          <div className=" py-1">
            <div className="flex ">
              <span className="mr-2">✅</span>{" "}
              <p className=" opacity-50">Chat and email support</p>
            </div>
          </div>
          <div className=" pt-20">
            <div className=" bg-white w-fit p-3 rounded-xl">Get Started</div>
          </div>
        </div>
        <div className=" py-10 pl-8 pr-32 bg-black rounded-3xl w-fit flex-col justify-start items-start text-white">
          <div className=" py-1 px-2.5  w-fit  bg-white rounded-lg text-xs mb-2 border flex justify-start">
            <p className=" text-purple-500 text-md capitalize font-medium">
              FREE
            </p>
            3
          </div>
          <div className="flex items-baseline">
            <p className=" text-7xl font-medium mr-2">$0</p>
            <p>/month</p>
          </div>
          <div className=" pt-5">
            <div className="flex ">
              <span className="mr-2">✅</span>{" "}
              <p className=" opacity-50">Access to all basic features</p>
            </div>
          </div>
          <div className=" py-1">
            <div className="flex ">
              <span className="mr-2">✅</span>{" "}
              <p className=" opacity-50">Reporting and analytics</p>
            </div>
          </div>
          <div className=" py-1">
            <div className="flex ">
              <span className="mr-2">✅</span>{" "}
              <p className=" opacity-50">Up to 5 individual users</p>
            </div>
          </div>
          <div className=" py-1">
            <div className="flex ">
              <span className="mr-2">✅</span>{" "}
              <p className=" opacity-50">Chat and email support</p>
            </div>
          </div>
          <div className=" py-1">
            <div className="flex ">
              <span className="mr-2">✅</span>{" "}
              <p className=" opacity-50">Chat and email support</p>
            </div>
          </div>
          <div className=" py-1">
            <div className="flex ">
              <span className="mr-2">✅</span>{" "}
              <p className=" opacity-50">Chat and email support</p>
            </div>
          </div>
          <div className=" pt-20">
            <div className=" bg-white w-fit p-3 rounded-xl text-black">
              Get Started
            </div>
          </div>
        </div>
        <div className=" py-10 pl-8 pr-32 bg-purple-200 rounded-3xl w-fit flex-col justify-start items-start">
          <div className=" py-1 px-2.5  w-fit  bg-white rounded-lg text-xs mb-2 border flex justify-start">
            <p className=" text-purple-500 text-md capitalize font-medium">
              FREE
            </p>
          </div>
          <div className="flex items-baseline">
            <p className=" text-7xl font-medium mr-2">$0</p>
            <p>/month</p>
          </div>
          <div className=" pt-5">
            <div className="flex ">
              <span className="mr-2">✅</span>{" "}
              <p className=" opacity-50">Access to all basic features</p>
            </div>
          </div>
          <div className=" py-1">
            <div className="flex ">
              <span className="mr-2">✅</span>{" "}
              <p className=" opacity-50">Reporting and analytics</p>
            </div>
          </div>
          <div className=" py-1">
            <div className="flex ">
              <span className="mr-2">✅</span>{" "}
              <p className=" opacity-50">Up to 5 individual users</p>
            </div>
          </div>
          <div className=" py-1">
            <div className="flex ">
              <span className="mr-2">✅</span>{" "}
              <p className=" opacity-50">Chat and email support</p>
            </div>
          </div>
          <div className=" pt-20">
            <div className=" bg-white w-fit p-3 rounded-xl">Get Started</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PriceSection;
