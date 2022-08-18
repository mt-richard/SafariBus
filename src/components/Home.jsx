import React from "react";
import pic1 from "../images/home.png";

const Home = () => {
    return (  
        <div className="home md:flex px-[10px] mt-1 md:px-20 py-10">
          <div className="content p-[5px] md:p-[25px] w-full text-left md:px-10">
                <div className="w-100 flex ">
                    <h2 className="text-2xl md:text-3xl">Welcome to</h2>
                    <div className="line mt-5 ml-5"></div>
                </div>
                <h1 className="text-gray-800 text-2xl md:text-3xl font-bold ">SafariBus platform</h1>
                <p className="w-full">An integrated platform inspired by technology to contribute to lasting solutions.</p>
                <button className="btn1 text-white w-50 rounded px-5 py-1">Discover More</button>
          </div>
          <div className="banner mt-5 w-full">
            <img src={pic1} alt="Home" srcset="" className="photo w-100 h-[21opx] w-[320px] md:w-[320px] md:h-[210px] "/>
            <div className="btns flex">
                <button className=" text-white rounded  text-[14px] md:text-[15px] md:px-5 py-1  mr-5 md:mr-5">Card Pre-Register</button>
                <button className=" text-white rounded  text-[14px] md:text-[15px] md:px-5 py-1  mr-5 md:mr-5">Card Topup</button>
                <button className=" text-white rounded  text-[14px] md:text-[15px] md:px-5 py-1   md:mr-5">Balance</button>
            </div>
          </div>
        </div>
    );
}
 
export default Home;