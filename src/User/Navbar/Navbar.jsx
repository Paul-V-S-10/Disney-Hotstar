import React from 'react'
import './Navbar.css'
import { GoHomeFill } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { MdOutlineLocalMovies } from "react-icons/md";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { TbCategory } from "react-icons/tb";


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo center">
        <img src="/logo.svg" alt="" />
        <div className="subscribe">Subscribe ＞</div>
      </div>
      <div className="pageIcons ">
        <div className="userWraper wraper">
          <FaRegUserCircle className='icon' />
          <div className="userTag tag">My Space</div>
        </div>
        <div className="searchWraper wraper">
          <CiSearch className='icon' />
          <div className="searchTag tag">Search</div>
        </div>
        <div className="homeWraper wraper">
          <GoHomeFill className='icon' />
          <div className="homeTag tag">Home</div>
        </div>
        <div className="tvWraper wraper">
          <PiTelevisionSimpleLight className='icon' />
          <div className="tvTag tag">TV</div>
        </div>
        <div className="moviesWraper wraper">
          <MdOutlineLocalMovies className='icon' />
          <div className="moviesTag tag">Movies</div>
        </div>
        <div className="sportsWraper wraper">
          <MdOutlineSportsBaseball className='icon' />
          <div className="sportsTag tag">Sports</div>
        </div>
        <div className="categoriesWraper wraper">
          <TbCategory className='icon' />
          <div className="categoriesTag tag">Categories</div>
        </div>
      </div>
      <div className="grad"></div>
    </div>
  )
}

export default Navbar