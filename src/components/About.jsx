const About = () => {
    return ( 
        <div className="about">
           <center>
            <div className="all center py-20 md:px-40">
                    <div className="head w-[1900px] flex md:px-[30%]">
                        <div className="line hidden md:block md:w-[100px]  mt-7 "></div>
                        <span className="text-2xl md:text-[2.125rem] md:w-[350px] px-5 font-bold  text-center">About SafariBus</span>
                        <div className="line md:w-[100px] mt-7  "></div>
                </div>
                <div className="pa px-5 md:px-40 py-10 bg-yellow-300" >
                <p className="text-center px-5 md:px-[30%]">SafariBus is an Rwandan based bus ticketing platform providing ticket booking facility through its website, iOS and Android mobile apps. a product of Centrika company headquartered in Kigali,Rwanda, it connects bus travellers with a network across the country.</p>
                </div>
                <div className="containerabout md:flex md:px-[15%] bg-yellow-200">
                    <div className="cont1 w-100 px-10 w-[80%] md:w-[30%] bg-yellow-100 m-3">
                        <div className="ico">
                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></svg>
                        </div>
                        <h2>About Us</h2>
                        <p>We use an enabling software and hardware infrastructure, to provide crucial services in finance, transport, events and sports, all in a bid to improve …</p>
                    </div>
                    <div className="cont2 px-10 w-[80%] md:w-[30%]  bg-yellow-100 m-3">
                        <div className="ico">
                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"></path></svg>
                        
                        </div>
                        <h2>About Us</h2>
                        <p>With all the information in place you will be presented with an action plan that your company needs to follow and achieve its goals with us ...</p>
                    </div>
                    <div className="cont3 px-10 w-[80%] md:w-[30%]  bg-yellow-100 m-3">
                        <div className="ico">
                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"></path></svg>
                        </div>
                        <h2>Our partners</h2>
                        <p>Most of our partners and suppliers are the largest in the business and they give us a powerful advantage to serve you better and cater to your needs.</p>
                    </div>
                </div>
            </div>
            </center>
        </div>
     );
}
 
export default About;
