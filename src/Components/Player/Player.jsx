import React, { useState } from 'react';

const Player = ({ player,setAvailableBalance }) => {
    const [isSelected,SetIsSelected] = useState(false)
    // Destructuring object properties
    const { name, battingStyle, country, image, price, rating, role } = player;

    return (
     
       <div className="p-4 md:p-8 flex justify-center">
  {/* Card Container */}
  <div className="w-full max-w-[340px] sm:max-w-[320px] border border-gray-100 rounded-2xl p-4 bg-white font-sans shadow-sm">
    
    {/* 1. Player Image */}
    <img
      src={image}
      alt={name}
      className="w-full h-48 sm:h-[200px] object-cover rounded-xl"
    />

    {/* 2. Name Section */}
    <div className="flex items-center mt-4 gap-2">
      <span className="text-lg sm:text-xl">👤</span>
      <h3 className="text-lg sm:text-xl text-black font-bold truncate">{name}</h3>
    </div>

    {/* 3. Country and Role */}
    <div className="flex justify-between items-center mt-3">
      <div className="text-black text-sm sm:text-base flex items-center gap-1.5">
        <span>🚩</span> {country}
      </div>
      <div className="bg-gray-100 px-3 py-1 rounded-lg text-xs sm:text-[0.85rem] font-medium text-black">
        {role}
      </div>
    </div>

    <hr className="border-t border-gray-100 my-4" />

    {/* 4. Rating Section */}
    <div className="font-bold mb-2 text-sm flex justify-items-start text-black sm:text-base">Rating: {rating}</div>

    {/* 5. Batting Style Section */}
    <div className="flex justify-between mb-3 text-sm sm:text-base">
      <span className="font-bold text-black">Batting Style</span>
      <span className="text-black">{battingStyle}</span>
    </div>

    {/* 6. Price & Button Section */}
    <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-3 mt-4">
      <div className="font-bold text-base text-black">
        Price: ${price?.toLocaleString()}
      </div>
      <button 
  disabled={isSelected} 
  onClick={() => {
    SetIsSelected(true)
    setAvailableBalance(100000000000)
}} 
  className={`w-full xs:w-auto px-4 py-2 rounded-lg border font-semibold text-sm transition-all duration-200 
    ${isSelected 
      ? "bg-gray-300 border-gray-300 text-gray-500 cursor-not-allowed" 
      : "bg-emerald-800 border-emerald-800 text-white hover:bg-emerald-900 active:scale-95 cursor-pointer"
    }`}
>
  {isSelected ? "Selected" : "Choose player"}
</button>
    </div>
  </div>
</div>
    );
}; 

export default Player;