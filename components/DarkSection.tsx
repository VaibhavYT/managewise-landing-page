import React from 'react'
import Six from "../public/images/6th.png";
import Image from "next/image";
const DarkSection = () => {
  return (
    <div className="flex flex-col bg-1c1c1c w-full justify-center items-center pt-32 px-36">
          <div className=" py-1 px-2.5  w-fit  bg-white rounded-lg text-xs mb-7">
            <p className=" text-purple-500 text-lg capitalize font-medium">
              🤩 And more
            </p>
          </div>
          <div>
            <p className=" text-5xl text-fdf2ec mb-2 font-semibold">
              Explore an array of features that elevate your{" "}
            </p>
            <p className="text-fdf2ec text-5xl font-semibold mb-4">
              <span className=" text-red-400">Productivity </span>to new heights
            </p>
            <p className="text-white opacity-60 text-xl">
              Discover the tools that will revolutionize the way you{" "}
            </p>
            <p className="text-white opacity-60 text-xl">
              manage and optimize your operations
            </p>
          </div>
          <div className="flex  pb-32 pt-24">
            <div className=" rounded-3xl pr-0 text-white bg-212121 mr-10">
              <div className=" p-10 pb-0 text-center ">
                <p className=" text-6xl mb-2">👨‍💻</p>
                <p className=" font-bold text-2xl mb-2">
                  Cross-Platform <br />
                  Compatibility
                </p>
                <p className="opacity-70">
                  Enjoy the flexibility of cross-platform compatibility. Our
                  product works <br /> seamlessly across desktop, web, and{" "}
                  <br /> mobile devices, allowing you to work <br />
                  from your preferred device.
                </p>
              </div>
            </div>
            <div className=" rounded-3xl pr-0 text-white bg-212121 mr-10  ">
              <div className=" p-10 text-center ">
                <p className=" text-6xl mb-2">👨‍💻</p>
                <p className=" font-bold text-2xl mb-2">
                  Stay Informed with Essential Notifications
                </p>
                <p className="opacity-70">
                  Automate support from first customer <br /> contact to closing
                  the ticket. Drastically
                  <br /> improve time to resolution.Automate <br />
                  support from first customer contact to <br /> closing the
                  ticket.
                </p>
              </div>
            </div>
            <div className=" rounded-3xl pr-0 text-white bg-212121 ">
              <div className=" p-10 text-center ">
                <p className=" text-6xl mb-2">👨‍💻</p>
                <p className=" font-bold text-2xl mb-2">
                  Secure Data Encryption <br /> at all times
                </p>
                <p className="opacity-70">
                  Trust in our robust data encryption <br /> to keep your
                  sensitive information safe and secure. Rest easy knowing your
                  data is <br />
                  protected at all times.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center flex-col">
              <div className=" py-1 px-2.5  w-fit  bg-white rounded-lg text-xs mb-7 ">
                <p className=" text-purple-500 text-lg capitalize font-semibold ">
                  ✂️ INTEGRATION
                </p>
              </div>
              <div>
                <h4 className="text-6xl text-fdf2ec text-bold mb-4">
                  Enable <span className=" text-orange-600">integration</span>{" "}
                  with <br /> other popular tools and <br />{" "}
                  <div className=" text-center">platforms</div>
                </h4>
                <p className=" text-center opacity-50 text-white text-xl">
                  Seamlessly connect and amplify your workflow <br /> by
                  enabling integration with a diverse array of <br />{" "}
                  widely-used tools and platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 align-bottom border border-black">
            <Image src={Six} alt="image here" height={550} width={550}></Image>
          </div>
        </div>
  )
}

export default DarkSection