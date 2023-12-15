"use client";

import { useState } from "react";

import Image from "next/image";
import Second from "../public/images/image2.jpg";
import First1 from "../public/images/image1.png";
import Five from "../public/images/3rd.png";
import Third from "../public/images/4th.png";
import Fourth from "../public/images/5th.png";
export default function Home() {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };
  return (
    <div className="pt-24 ">
      <div
        className="flex items-center justify-center flex-col bg-gradient-to-b from-fdf4ef to-white"
        id="in this div all things should be placed"
      >
        <div className="py-1 px-2.5 uppercase text-sm bg-white rounded w-fit ">
          Welcome to Manage wise
        </div>
        <div className="text-7xl mt-5 font-semibold">
          Empower your business with <br />
          <span className="block pt-4 pb-8 text-center">
            <span className="text-orange-400">Strategic</span> insights
          </span>
        </div>
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
          <button className="mx-3 bg-purple-600 text-white font-bold px-10 py-4 border-2 rounded-lg">
            Get Started
          </button>
          <button className="mx-3 bg-white font-bold px-10 py-4 rounded-lg  border-2 border-black">
            Watch Demo
          </button>
        </div>
        <div>
          <Image
            src={First1}
            alt="hello"
            className=" flex items-center justify-center px-0 pt-14 pb-24 hover:scale-105"
          ></Image>
        </div>
      </div>
      <div
        className="flex items-center justify-center flex-col bg-white "
        id="in this div all things should be placed"
      >
        <div className="flex justify-center items-center flex-col pt-20 pb-8 mb-4">
          <div className=" py-1 px-2.5  w-fit  bg-white rounded-lg text-xs mb-2">
            <p>PREMIER FEATURES</p>
          </div>
          <div className="mb-2">
            <h2 className=" text-5xl">
              Discover our products&apos;s{" "}
              <span className=" text-orange-500">Capabilities</span>{" "}
            </h2>
          </div>
          <div className="opacity-70">
            <p>
              Don&apos;t settle for mediocrity - embrace the future of
              management
            </p>
            <p className=" text-center">with Manage Wise.</p>
          </div>
        </div>
        <div className=" pb-24 flex ">
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
        </div>
        {
          //NOTE - Here the cards div started
        }
        <div className="flex pr-40 pl-40 pb-32  ">
          <div className=" border rounded-3xl pr-0 mr-6">
            <Image src={Third} alt="3rd" width={450} />
            <div className=" p-7">
              <p className=" font-bold text-lg">Flexible Scheduling</p>
              <p className="opacity-70">
                Stay productive with our flexible <br />
                scheduling system
              </p>
            </div>
          </div>

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
                Gain valuable insights with our advanced <br /> analytics
                feature
              </p>
            </div>
          </div>
        </div>
        {
          //!SECTION =  dark theme here
        }

        <div className="flex flex-col bg-1c1c1c w-full py-32 px-36">
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
                <p className=" text-center opacity-50 text-white text-lg">
                  Seamlessly connect and amplify your workflow <br /> by
                  enabling integration with a diverse array of <br />{" "}
                  widely-used tools and platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
        {
          //NOTE - Ask me answer section starts here
        }
        <div className=" pt-36 pb-32 bg-white w-full ">
          <div className="flex mx-52">
            <div id="for need answer " className=" mr-32">
              <div className=" py-1 px-2.5  w-fit  bg-white rounded-lg text-xs mb-7 border flex justify-start">
                <p className=" text-purple-500 text-md capitalize font-medium">
                  🙋🏻‍♂️ FAQ
                </p>
              </div>
              <h5 className=" text-5xl font-semibold">Need</h5>
              <h5 className=" text-5xl font-semibold text-amber-600 mb-7">
                Answers ?
              </h5>
              <p className=" text-xl opacity-60 font-medium">
                Check out our most commonly
                <br />
                asked questions below to find the
                <br />
                information you need.
              </p>
            </div>
            <div id="for question and answer">
              <div className=" w-fit bg-f7f8fd p-4 mb-4 rounded-3xl">
                <h1
                  className="cursor-pointer text-2xl font-semibold mb-4"
                  onClick={toggleExpand}
                >
                  What is Manage Wise and What does it offer ?
                </h1>
                {isExpanded && (
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque vel eleifend ligula.
                  </p>
                )}
              </div>
              <div className=" w-fit bg-f7f8fd p-4 mb-4 rounded-3xl">
                <h1
                  className="cursor-pointer text-2xl font-semibold mb-4"
                  onClick={toggleExpand}
                >
                  What is Manage Wise and What does it offer ?
                </h1>
                {isExpanded && (
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque vel eleifend ligula.
                  </p>
                )}
              </div>
              <div className=" w-fit bg-f7f8fd p-4 mb-4 rounded-3xl">
                <h1
                  className="cursor-pointer text-2xl font-semibold mb-4"
                  onClick={toggleExpand}
                >
                  What is Manage Wise and What does it offer ?
                </h1>
                {isExpanded && (
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque vel eleifend ligula.
                  </p>
                )}
              </div>
              <div className=" w-fit bg-f7f8fd p-4 mb-4 rounded-3xl">
                <h1
                  className="cursor-pointer text-2xl font-semibold mb-4"
                  onClick={toggleExpand}
                >
                  What is Manage Wise and What does it offer ?
                </h1>
                {isExpanded && (
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque vel eleifend ligula.
                  </p>
                )}
              </div>
              <div className=" w-fit bg-f7f8fd p-4 rounded-3xl">
                <h1
                  className="cursor-pointer text-2xl font-semibold mb-4"
                  onClick={toggleExpand}
                >
                  What is Manage Wise and What does it offer ?
                </h1>
                {isExpanded && (
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque vel eleifend ligula.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        {
          //NOTE - Price section here
        }
        <div className=" pt-20 pb-28 flex justify-center items-center w-full">
          <div className="">
            <div className=" py-1 px-2.5  w-fit  bg-white rounded-lg text-xs mb-7 border text-center">
              <p className=" text-purple-500 text-md  font-semibold capitalize">
                💲PRICING
              </p>
            </div>
            <h2 className="mb-7 text-6xl font-medium">Select your ideal <span className=" text-orange-400">Pricing</span> plan</h2>
            <p className=" text-xl opacity-60 font-medium text-center">
            At Manage Wise, we believe in providing you with <br />pricing plans that adapt to your unique needs.
            </p>
          </div>
        </div>
        {
          //NOTE - last here
        }
      </div>
    </div>
  );
}
