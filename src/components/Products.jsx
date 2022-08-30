import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import pic4 from "../images/pic4.png";
import pic5 from "../images/pic5.png";
import pic6 from "../images/pic6.png";

const Products = () => {
    return (  
        <div className="product">
            <div className="all center py-10 md:px-40">
            <div className="head md:w-[1280px] flex md:px-[28%] ">
                        <div className="line hidden md:block mt-7 "></div>
                        <span className="md:text-[2.125rem] md:w-[450px]  font-bold px-5 md:px-0 text-center">SafariBus products</span>
                        <div className="line mt-4 md:mt-7  "></div>
                </div>
                <div className="pa px-5 md:px-40 py-10 " >
                <p className="text-gray-800 text-center  px-5 md:px-[15%]">Our products and solutions available.</p>
                </div>
                <div className="container md:grid grid-cols-3">
                    <div className="cont1 bg-white rounded m-5 py-3">
                        <div className="image h-[200px] w-[300px] px-5 ">
                            <img src={pic4} alt="Images of" className="h-[170px]"/>
                        </div>
                        <h3 className="text-xl text-left px-5 ">SafariBus App</h3>
                        <p className="text-left text-gray-500  px-5 py-3">This game changer app basically enables a client to either book or hire a bus beforehand. The exciting part …</p>
                        <a className="mr-[175px] text-green-400 pointer py-2" href="#">Learn More</a>
                    </div>
                    <div className="cont1 bg-white rounded m-5 py-3">
                        <div className="image h-[170px] w-[300px] px-5">
                            <img src={pic3} alt="Images of" className="h-[170px]"/>
                        </div>
                        <h3 className="text-xl text-left px-5 mt-7 ">Safaribus Online</h3>
                        <p className="text-left text-gray-500  px-5 py-3">You are in an office or you don't have a smartphone, don't worry, you can still book your tickets on the go.</p>
                        <a className="mr-[175px] text-green-400 pointer py-2" href="#">Learn More</a>
                    </div>
                    <div className="cont1 bg-white rounded m-5 py-3 ">
                        <div className="image h-[170px] w-[300px] px-5">
                            <img src={pic2} alt="Images of" className="h-[170px]"/>
                        </div>
                        <h3 className="text-xl text-left px-5 mt-7">Safaribus Portal</h3>
                        <p className="text-left text-gray-500  px-5 py-3">Distributed solution designed for service providers in our transport with it's efficient of use..</p>
                        <a className="mr-[175px] text-green-400 pointer py-2" href="#">Learn More</a>
                    </div>
                    <div className="cont1 bg-white rounded m-5 py-3">
                        <div className="image h-[170px] w-[300px] px-5">
                            <img src={pic1} alt="Images of" className="h-[170px]"/>
                        </div>
                        <h3 className="text-xl text-left px-5 mt-7">Safaribus Cards</h3>
                        <p className="text-left text-gray-500  px-5 py-3">Integrated next level cards which can be used from paying a bus ticket to paying your gloceries on your local market..</p>
                        <a className="mr-[175px] text-green-400 pointer py-2" href="#">Learn More</a>
                    </div>
                    <div className="cont1 bg-white rounded m-5 py-3">
                        <div className="image h-[170px] w-[200px]  ml-[6rem]">
                            <img src={pic6} alt="Images of" className="h-[170px]"/>
                        </div>
                        <h3 className="text-xl text-left px-5 mt-7">Safaribus KeyKiosk</h3>
                        <p className="text-left text-gray-500  px-5 py-3">This is a self-service top- notch payment mode system that provides a great deal of services that are entirely …</p>
                        <a className="mr-[175px] text-green-400 pointer py-2" href="#">Learn More</a>
                    </div>
                     <div className="cont1 bg-white rounded m-5 py-3">
                        <div className="image h-[170px] w-[200px]  ml-[6rem]">
                            <img src={pic5} alt="Images of" className="absolute h-[170px]"/>
                        </div>
                        <h3 className="text-xl text-left px-5 mt-7">Safaribus USSD</h3>
                        <p className="text-left text-gray-500  px-5 py-3">No smartphone or a computer yet? you can still book your ticket using whatever mobile phone you might be using..'</p>
                        <a className="mr-[175px] text-green-400 pointer py-2" href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Products;