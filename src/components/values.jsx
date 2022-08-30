const values = () => {
    return ( 
        <div className="about" id="about">
        <center>
         <div className="all center py-10 md:px-40">
                 <div className="head md:w-[1400px] flex md:px-[23%]">
                    
                     <span className="md:text-[2.125rem] px-10 font-bold  text-left">Our Values</span>
                     <div className="line md:w-[100px] mt-4 md:mt-7  "></div>
             </div>
             <div className="pa px-5 md:px-40 py-10 " >
             <p className="text-gray-800 text-left  px-5 md:px-[15%]">One thing that defines the most successful companies is their values. At SafariBus, the values we stand by that shape our culture, our work ethics, and our decisions that help us be more than what we were yesterday are:</p>
             </div>
             <div className="containerabout text-left ml-10 md:ml-[25%] font-light ">
                 <div className="">
                     <li><b>Customer centric:</b> To focus on the customers’ needs and surpass their expectations consistently.</li>
                     <li><b>Innovation:</b> To continuously develop solutions that solve customers’ needs.</li>
                     <li><b>Integrity and Transparency:</b> To be ethical and sincere in all our transactions.</li>
                    <li><b>Excellence:</b> To strive relentlessly;- constantly improve ourselves, our teams, and our products and services to become the best.</li>
                 
                 </div>
                 <div className="cobtn text-white pointer md:w-40 bg-green-500 rounded px-5 py-1 mt-5">Contact Us</div>
                
             </div>


            <div className="boxes gap-3 md:w-[100%] py-3 md:py-10 px-5 md:px-20 md:flex ">
                    <div className="flex1 rounded bg-gray-500  md:w-[50%] py-20">
                        <h3 className="text-[40px] h-10 text-green-400">"</h3>
                        <h3 className="text-3xl text-white font-bold">Testimonials</h3>
                        <p className="text-xl text-white m-2">Success stories of customersfeel. </p>
                    </div>
                    <div className="box2 rounded bg-white md:w-[50%]  p-5">
                        
                    <div className="profile flex  py-3">
                        <div className="dprofile text-3xl text-white bg-gray-400"> <span className="mt-[-6px] ml-[-9px] absolute">D</span></div>
                        <div className="name">
                        <h3 className="text-left ml-2">Drake NKUNDA</h3>
                        <p className="text-left ml-2">Tech guru</p>
                        </div>
                         </div>

                        <h3 className="text-left mt-2">TIMELY, EFFICIENT, AND USE THE BEST PRACTICES IN THEIR WORK.</h3>
                        <p className="text-left mt-5 py-5 text-gray-500 font-light">I have been involved in big projects for major corporations but the team at CENTRIKA is the best that I have worked with. They are timely, efficient and use best practices in their TECH projects. Their society inclusion in most of their projects is outstanding. I would recommend them to anyone.</p>
                   
                    </div>
            </div>

            <div className="boxes inputs gap-3 md:w-[100%] py0 md:py-10 px-5 md:px-20 md:flex ">
                    <div className="flex1 rounded  px-3 md:w-[50%] py-5 md:py-20">
                       
                        <h3 className="text-3xl text-left font-bold">Interested in our services?</h3>
                        <p className="text-xl text-left m-2">free to request a meeting with us.</p>
                       <li className="text-left ml-5 mt-3 font-light">Streamline all your dairly operations with efficient technologeis.</li> 
                        <li className="text-left ml-5 mt-3 font-light">Automated ticket control,validation & payment solutions.</li>
                        <li className="text-left ml-5 mt-3 font-light">Save precious time and invest it where you need it the most.</li>

                    </div>

                    <div className="box2 rounded bg-white md:w-[50%]  p-5">
                        
                    <div className="profile py-3">
                        
                                                    <form action="">
                                <input className="mt-2 w-100" type="text" name="" id="" placeholder="Enter Name "  />
                                <input className="mt-2 w-100" type="email" name="" id="" placeholder="Enter Email " />
                                <input className="mt-2 w-100" type="text" name="" id="" placeholder="Enter Phone Number" />
                                <input className="mt-2 w-100" type="text" name="" id="" placeholder="Entrested In" /><br/><br/>
                                <input className="mt-2 w-100 mt-5 " type="checkbox" name="" id="" /><span className="px-3 mt-4 font-light">Agree to our Terms&Conditions?</span><br/>
                                <input className="mt-2 w-100 bg-green-500 mt-6 py-2 px-5 rounded" type="submit" value="Send Request" />
                            </form>
                        </div>
                    </div>
            </div>


         </div>
         </center>
     </div>
     );
}
 
export default values;