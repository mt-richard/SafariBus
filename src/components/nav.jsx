import React, { useState } from "react";
import logo from "../images/logo.png"


const Nav = () => {

    let links = [
        {name:"Home",link:"#home", classUsed:"homelink text-xl link"},
        {name:"About Us",link:"#about", classUsed:"text-xl link"},
        {name:"Products",link:"/product", classUsed:"text-xl link"},
        {name:"Request",link:"/request", classUsed:"text-xl link"}
    ];
let [open,setOpen] =useState(false);
let [menu,setMenu] =useState();


    return (  
        <nav onClick={() =>setMenu(!menu)} className="w-100 px-5 md:px-10 py-5 md:flex justify-between">
            <div className="logos">
                <div className="hdn">
                    <span onClick={()=>setOpen(!open)}  className="font-bold absolute text-3xl text-green-600"><ion-icon name={open ? 'close':'menu-outline'}></ion-icon></span> 
                     <span className="px-10 " >SafariBus</span>
                </div>
                
                <a href="/" className="logodiv">
                <img src={logo} className="logo" alt="logo"/>
                </a>
            </div>
            
                   
                 
            <div className={` w-100  ${open ? 'bg-white absolute mt-10 responce':' '}`}>
                      
                    <ul className={`md:flex justify-between absolute left-0  inks md:flex md:items-center md:px-12 md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0  w-full md:w-auto ${open ? 'top-20 text-yellow-400 opacity-[1]':'top-[-490px] opacity-100 '}`}>
                        { links.map((e) =>(
                        <li className="md:text-center py-2 px-10 text-gray-500">
                            <a className={e.classUsed} href={e.link}>{e.name}</a>
                        </li>
                        ))}
                    </ul>

            </div>
        </nav>
    );
}
 
export default Nav;