import React from 'react'
import Image from "next/image";
import Six from "../public/images/6th.png";
const TryOutSection = () => {
  return (
    <div className=" w-full flex justify-center bg-gradient-to-b from-white to-fdf4ef">
    <div className=" p-24 flex border rounded-3xl">
      <div className="flex-col  mr-14">
        <div className=" py-1 px-2.5  w-fit  bg-white rounded-lg text-xs mb-7 border flex justify-start">
          <p className=" text-purple-500 text-md capitalize font-semibold">
            👋🏻 Don&apos;t miss it out
          </p>
        </div>
        <div>
          <p className=" text-6xl font-medium">
            Unleash your <br />{" "}
            <span className=" text-orange-400">Potential</span> with us{" "}
          </p>
        </div>
        <div className="mt-4 mb-4">
          <p className=" opacity-60 text-2xl ">
            Join our community of ambitious <br /> individuals and
            organizations eager to <br /> make a difference.
          </p>
        </div>
        <button className=" bg-purple-500 py-3 px-16 rounded-3xl text-white font-bold text-xl ">
          Try It Out
        </button>
      </div>

      <div>
        <Image src={Six} alt="image" height={200} width={450}></Image>
      </div>
    </div>
  </div>
  )
}

export default TryOutSection