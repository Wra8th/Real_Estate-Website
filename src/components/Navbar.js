import React  from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar(){
  return(
    <header className="greyish">
    <div className="container mx-auto flex justify-between">
    <nav className="flex">
          <NavLink to='/' exact activeClassName="text-white" className="inline-flex items-center py-3 px-3 mr-4 text-red-100 hover:text-blue-700 text-4xl font-bold tracking-widest">
            Gharvale Estates
          </NavLink>
          <NavLink to='/estate' activeClassName="text-pink-500  " className="inline-flex items-center py-3 px-3 rounded text-red-200 bold hover:text-blue-700 text-2xl">
            Properties
          </NavLink>
          <NavLink to='/about' activeClassName="text-pink-500  "className="inline-flex items-center py-3 px-3 rounded text-red-200 bold hover:text-blue-700 text-2xl">
            Contact Us
          </NavLink>
        </nav>
    <div className="inline-flex my-6">
      <SocialIcon url="https://instagram.com" className="mr-4" target="_blank" fgColor="#fff" style={{height:35 , width:35}}/>
    </div>
    </div>
    </header>
  )
}