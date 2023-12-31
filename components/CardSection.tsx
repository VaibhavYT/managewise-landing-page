"use client";
import React, { useRef } from "react";
import Image from "next/image";

import Five from "../public/images/3rd.png";
import Third from "../public/images/4th.png";
import Fourth from "../public/images/5th.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CardSection = () => {
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
      className="flex pr-40 pl-40 pb-32 bg-white -mt-10 "
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 1.0 }}
      viewport={{ root: scrollRef }}
    >
      <motion.div className="border rounded-3xl pr-0 mr-6">
        <Image src={Third} alt="3rd" width={450} />
        <div className=" p-7">
          <p className=" font-bold text-lg">Flexible Scheduling</p>
          <p className="opacity-70">
            Stay productive with our flexible <br />
            scheduling system
          </p>
        </div>
      </motion.div>

      <div className="border rounded-3xl pr-0 mr-6">
        <Image src={Fourth} alt="4th" width={450} />
        <div className=" p-7">
          <p className=" font-bold text-lg">Easy Communication</p>
          <p className="opacity-70">
            Collaborate seamlessly with your team <br /> in real-time
          </p>
        </div>
      </div>

      <div className="border rounded-3xl pr-0">
        <Image src={Five} alt="5th" width={450} />
        <div className=" p-7">
          <p className=" font-bold text-lg">Analytics</p>
          <p className="opacity-70">
            Gain valuable insights with our advanced <br /> analytics feature
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CardSection;
