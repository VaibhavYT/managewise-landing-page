"use client"
import React from 'react'
import { useState } from "react";
const AskMeSection = () => {
    const [isExpanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };
  return (
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
  )
}

export default AskMeSection