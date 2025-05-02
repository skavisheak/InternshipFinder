import React from 'react'
import {cardContents} from "../constants"
export const Cards = () => {
  return (
    <div className="flex items-center p-8 bg-gray-100">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {cardContents.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-64 p-4 bg-white shadow-lg rounded-2xl"
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
  );
}
