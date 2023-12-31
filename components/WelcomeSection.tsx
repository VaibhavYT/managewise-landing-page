"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Second from "../public/images/image2.jpg";
import First1 from "../public/images/image1.png";
import { motion, useAnimation, useScroll } from "framer-motion";
const WelcomeSection = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls, scrollYProgress]);
  return (
    <div className="pt-24 bg-fdf4ef" >
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center flex-col bg-gradient-to-b from-fdf4ef to-white"
        id="in this div all things should be placed"
      >
        <div className="py-1 px-2.5 uppercase text-sm bg-white  w-fit  text-blue-600 font-medium border rounded-lg ">
          👋🏻 Welcome to Manage wise!
        </div>
        <motion.div className="text-7xl mt-5 font-semibold">
          Empower your business with <br />
          <span className="block pt-4 pb-8 text-center">
            <span className="text-orange-400">Strategic</span> insights
          </span>
        </motion.div>
        <div className="text-xl opacity-70">
          Powerful management platform designed to streamline your business{" "}
          <br />
          <span className="block text-center">
            <span className="">
              operations, boost productivity, and drive success
            </span>
          </span>
        </div>
        <div className="pt-8 ">
          <button className="mx-3 bg-purple-600 text-white font-bold px-10 py-4 border-2 rounded-3xl">
            Get Started
          </button>
          <button className="mx-3 bg-white font-bold px-10 py-4 rounded-3xl  border-2 border-black">
            Watch Demo
          </button>
        </div>
        <div>
          <motion.div
            className="flex items-center justify-center px-0 pt-14 pb-24 "
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <Image src={First1} alt="hello" />
          </motion.div>
        </div>
      </motion.div>
      <div
        className="flex items-center justify-center flex-col bg-white "
        id="in this div all things should be placed"
      >
        <div className="flex justify-center items-center flex-col pt-20 pb-6 mb-4">
          <div className=" py-1.5 px-2.5  w-fit  bg-white rounded-lg text-xs mb-7 border text-center">
            <p className=" text-purple-500 text-md  font-semibold capitalize">
              🔥 PREMIER FEATURES
            </p>
          </div>
          <motion.div
            className="mb-2 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 className="text-6xl">
              Discover our products&apos;s{" "}
              <motion.span className="text-orange-500">
                Capabilities
              </motion.span>{" "}
            </motion.h2>
          </motion.div> 

          <div className="opacity-70">
            <p>
              Don&apos;t settle for mediocrity - embrace the future of
              management
            </p>
            <p className=" text-center">with Manage Wise.</p>
          </div>
        </div>
        <motion.div className=" pb-24 flex "
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8 }}
        >
          <div className=" pt-20 pr-11 pb-9 pl-9 w-fit flex flex-col bg-purple-100 rounded-3xl">
            <div className="mb-2 flex items-center ">icon</div>
            <div>
              <h3 className=" text-4xl">
                Boost productivity and <br /> streamline workflow with <br />
                us. Enjoy our intuitive <br />
                interface and robust <br />
                features.
              </h3>
            </div>
          </div>
          <div className=" ml-8 rounded-3xl bg-white">
            <Image
              src={Second}
              alt="second"
              width={600}
              className=" rounded-3xl"
            />
            <div className="pl-10">
              <p className=" text-xl font-semibold">Smart Task Management</p>
              <p className="mb-5">
                Say goodbye to chaos with our smart task management system
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeSection;
