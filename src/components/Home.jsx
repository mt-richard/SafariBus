import React from "react";
import pic1 from "../images/home.png";

const Home = () => {
    return (  
        <div className="home md:flex px-5 mt-10 md:px-20 py-10">
          <div className="content  text-left md:px-10">
                <div className="w-100 flex ">
                    <h2 className="text-2xl">Welcome to</h2>
                    <div className="line mt-4 ml-5"></div>
                </div>
                <h1 className="text-gray-800 text-3xl font-bold ">SafariBus platform</h1>
                <p>An integrated platform inspired by technology to contribute to lasting solutions.</p>
                <button className="btn1 text-white rounded px-5 py-1">Discover More</button>
          </div>
          <div className="banner mt-5 w-100  md:px-40">
            <img src={pic1} alt="Home" srcset="" className="h-60"/>
            <div className="btns flex">
                <button className=" text-white rounded px-3 py-1 mr-5">Card Pre-Register</button>
                <button className=" text-white rounded px-3 py-1 mr-5">Card Topup</button>
                <button className=" text-white rounded px-3 py-1 mr-5">Balance</button>
            </div>
          </div>
        </div>
    );
}
 
export default Home;