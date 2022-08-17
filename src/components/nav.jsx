import React, { useState } from "react";
import logo from "../images/logo.png"


const Nav = () => {

    let links = [
        {name:"Home",link:"/"},
        {name:"About Us",link:"/"},
        {name:"Products",link:"/"},
        {name:"Request",link:"/"}
    ];
let [open,setOpen] =useState(false);

    return (  
        <nav className="w-100 px-10 py-5 md:flex justify-between">
            <div className="logos">
                <div onClick={()=>setOpen(!open)} className="hdn">
                    <span className="font-bold mt-2 icon"><ion-icon name={open ? 'close':'menu'}></ion-icon></span> 
                     <span className="px-10 " >SafariBus</span>
                </div>
                
                <a href="/" className="logodiv">
                <img src={logo} className="logo" alt="logo"/>
                </a>
            </div>
            <div className={` w-100  ${open ? 'bg-white opacity-95 absolute mt-10 responce':' '}`}>
                    <ul className={`md:flex justify-between absolute left-0  inks md:flex md:items-center px-12 md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0  w-full md:w-auto ${open ? 'top-20 opacity-100':'top-[-490px] opacity-100 '}`}>
                        { links.map((e) =>(
                        <li className="text-center py-2 px-10 text-gray-500">
                            <a className="text-xl link" href={e.link}>{e.name}</a>
                        </li>
                        ))}
                    </ul>
            </div>
        </nav>
    );
}
 
export default Nav;