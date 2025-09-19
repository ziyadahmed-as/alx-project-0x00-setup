import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">    
        <h1 className="text-2xl font-bold">Airbnb Clone</h1>
        <nav></nav> 
            <ul className="flex space-x-4 hover:underline cursor-pointer "> 

                <li><a href="#" className="text-gray-700 hover:text-gray-900">Home</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900">Contact</a></li>
            </ul>    
    </header>
  );
}