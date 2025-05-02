import React from 'react'
import {cardContents} from "../constants"
export const Cards = () => {
  return (
    <div>
      <h1 className='mt-6 text-3xl font-semibold text-center text-black'>Your Internship Search Made Easy</h1>
    <div className="flex items-center p-8 mt-5 ml-6 bg-gray-100">
      
    <div className="grid grid-cols-1 gap-y-6 gap-x-32 sm:grid-cols-2 md:grid-cols-3 ">
      {cardContents.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-10 bg-white shadow-lg w-96 rounded-2xl"
        >
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center p-4 mr-4 text-white bg-blue-500 rounded-full">
              {card.icon}
            </div>
            <h2 className="text-xl font-semibold text-black">{card.title}</h2>
          </div> {/*flex cardtitle and icon*/ }
          <p className="text-sm text-gray-600">{card.content}</p>
        </div>
      ))}
    </div>
  </div>
  </div>
  );
}
