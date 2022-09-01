import logo from "../images/centlogo.png";


const Footer = () => {
    return ( 
        <div className="footer md:px-20 py-5 bg-gray-600">
            <div className="all md:flex w-[100%] gap-10 px-10 py-5">
                <div className="logo md:w-[25%]">
                    <h3 className="text-green-600 py-5 text-xl text-left">Powered by</h3>
                    <img src={logo} alt="" className="w-[120px]"/>
                </div>
                <div className="bio mt-[180px] md:mt-0 md:w-[50%]">
                    <h3 className="text-green-600 py-5 text-xl text-left">Centrika</h3>
                    <p className="text-left text-white font-light">Centrika is a private software development entity, which since its inception in 2016, has been working to actively use its technology solutions and human resources along with enabling software and hardware infrastructure, to provide crucial financial services in an innovative way to improve the financial welfare of the Rwandan population.</p>
                </div>
                <div className="location md:w-[30%] ">
                    <h3 className="text-green-600 py-5 text-xl text-left">Our contacts</h3>
                    <div className="links  grid grid-cols-1">
                        <a className="text-left text-white" href=""> <span className="text-green-600 px-3 "><ion-icon name="location-outline"></ion-icon></span> KN 2,2nd Floor - Room F42A</a>
                        <a className="text-left text-white" href=""> <span className="text-green-600 px-3 "><ion-icon name="business-outline"></ion-icon></span> CHIC Building Kigali-Rwanda</a>
                        <a className="text-left text-white" href=""> <span className="text-green-600 px-3 "><ion-icon name="mail-outline"></ion-icon></span> info@safaribus.rw</a>
                        <a className="text-left text-white" href=""> <span className="text-green-600 px-3 "><ion-icon name="call-outline"></ion-icon></span> +250 731-000-100</a>
                    </div>
                </div>

            </div>
            <div className="copyright py-5 md:flex gap-80">
                <p className="text-white md:ml-80">Copyright@2022 Centrika All Right Reserved</p>
                <div className="socialmedia py-5 md:py-0">
                <a href="#"> <span className="text-green-600 text-2xl ml-5"><ion-icon name="logo-facebook"></ion-icon></span></a>
                <a href="#"><span className="text-green-600 text-2xl ml-5"><ion-icon name="logo-twitter"></ion-icon></span></a>
                <a href="#"><span className="text-green-600 text-2xl ml-5"><ion-icon name="logo-instagram"></ion-icon></span></a>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;