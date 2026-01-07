import React, { useState } from "react";
import { GoMultiSelect } from "react-icons/go";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {

  const Navlinks = ({isActive}) => isActive ? "text-white/80" : "text-white"

  

  const [Show, setShow] = useState(false);

  // useState for desktop drop
  const [admission, setAdmission] = useState(false);
  const [Studentportal, setstudentportal] = useState(false);
  const [staffportal, setstaffportal] = useState(false);

  // usestate for mobile dropdown
   const [admissions, setAdmissions] = useState(false);
  const [Studentportals, setstudentportals] = useState(false);
  const [staffportals, setstaffportals] = useState(false);

  const Handlestaffportal = () => {
    setstaffportal(false);
  };

  const HandleSide = ()=>{
    setShow(false)
  }

  const Handleadmission = () => {
    setAdmission(false);
  };

  const Handlestudentportal = () => {
    setstudentportal(false);
  };

  const Handlestaffportals = () => {
    setstaffportals(false);
  };

   const Handleadmissions = () => {
    setAdmissions(false);
  };

  const Handlestudentportals = () => {
    setstudentportals(false);
  };

 
  return (
    <div className="relative">
      



      {/* Desktop Nav */}

      <div className="bg-linear-to-r from-white from-5% via-[#000345] via-30% to-[#000345] to-95% border-b-3 border-white/50 w-screen ">
        <nav className="flex items-center contain justify-between bg-linear-to-r from-white from-5% via-[#000345] via-30% to-[#000345] to-95% text-white px-1 py-3">
          <img src="/images/imgi_1_footerlogo.png" className="h-10 lg:h-15 rounded  " alt="" /> 

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6">
            <li className={`hover:text-white/80 cursor-pointer ${Navlinks}`}><Link to="/">Home</Link></li>
            
              <li
                className="hover:text-white/80 cursor-pointer flex items-center gap-2 relative  "
                
              >
               <Link to="/Aboutus">  <span className={`flex gap-1 justify-center items-center ${Navlinks}`}>
                  
                  <span>About Us</span>
                 
                </span></Link>
               
              </li>
            
            <ClickAwayListener onClickAway={Handleadmission}>
              <li
                className="hover:text-white/80 cursor-pointer flex items-center relative gap-2 "
                onClick={() => setAdmission(!admission)}
              >
            
                <span className="flex gap-1  justify-center items-center  ">
                  <span>Admissions</span>
                  <span className="mt-1 transition-all duration-500">
                   {
                    admission ?  <IoIosArrowUp /> :  <IoIosArrowDown/> 
                   }
                  </span>
                </span>
                <div
                  className={`absolute bg-[#000345] overflow-hidden rounded-md top-13 z-40 w-50 transition-all duration-400 text-white px-2  ${
                    admission ? "max-h-200" : "max-h-0"
                  }`}
                >
                <ul className="">
                    <li className="hover:text-white/80 border-b indent-3 py-2  border-white/40"> <Link to="/Admission">Undergraduate</Link></li>
                    <li className="hover:text-white/80 py-2 indent-3 ">JUPEB</li>
                     <a href="https://eportal.eauedoyo.edu.ng/ug/candidate" target="_blank" rel='noreferrer'> <li className="hover:text-white/80 py-2 indent-3 border-t  border-white/40 ">Application Portal</li></a>
                    
                </ul>
                 
                </div>
              </li>
            </ClickAwayListener>

              <ClickAwayListener onClickAway={Handlestudentportal}>
              <li
                className="hover:text-white/80 cursor-pointer flex items-center gap-2"
                onClick={() => setstudentportal(!Studentportal)}
              >
                
               <span className="flex  gap-1 justify-center items-center">
                  
                  <span>Student Portal</span>{" "}
                  <span className="mt-1 transition-all duration-500">
                   {
                    Studentportal ?  <IoIosArrowUp /> :  <IoIosArrowDown/> 
                   }
                  </span>
                </span>
                <div
                  className={`absolute bg-[#000345]  z-40 top-19 overflow-hidden rounded-md text-white px-2 ${
                    Studentportal ? "max-h-200" : "max-h-0"
                  } transition-all duration-500 `}
                >
                 <ul>
                   <a href="https://eportal.eauedoyo.edu.ng/" target="_blank" rel='noreferrer' ><li className="hover:text-white/80 border-b indent-3 py-2 border-white/40">  Payment Portal</li></a> 
                    <a href="https://eportal.eauedoyo.edu.ng/" target="_blank" rel='noreferrer'><li className="hover:text-white/80 py-2 indent-3">Eportal</li></a>
                 </ul>
                </div>
              </li>
            </ClickAwayListener>



            
               <ClickAwayListener onClickAway={Handlestaffportal}>
              <li
                className="hover:text-white/80 cursor-pointer flex items-center relative gap-2 "
                onClick={() => setstaffportal(!staffportal)}
              >
            
               <span className="flex gap-1  justify-center items-center  ">
                  <span>Staff portal</span>
                  <span className="mt-1 transition-all duration-500">
                   {
                    staffportal ?  <IoIosArrowUp /> :  <IoIosArrowDown/> 
                   }
                  </span>
                </span>
                <div
                  className={`absolute bg-[#000345] overflow-hidden rounded-md top-13 z-40 w-50 transition-all duration-400 text-white px-2  ${
                    staffportal ? "max-h-200" : "max-h-0"
                  }`}
                >
                <ul className="">
                    <li className="hover:text-white/80 border-b indent-3 py-2 border-white/40">  <Link to="/Staffpage">Staff-portal </Link></li>
                    <a href="https://webmail.eauedoyo.edu.ng/" target="_blank" rel='noreferrer'> <li className="hover:text-white/80 py-2 indent-3"> Staff-Email</li></a>
                </ul>
                 
                </div>
              </li>
            </ClickAwayListener>




                       <ClickAwayListener >
              <li
                className="hover:text-white/80 cursor-pointer flex items-center gap-2"
                
              >
                
               <Link to="/Event"> <span className="flex  gap-1 justify-center items-center">
                  
                  <span>Event/News</span>
                 
                </span></Link>
               
              </li>
            </ClickAwayListener>


          </ul>

          <div>
                       <button className="border py-2 px-3 rounded-lg hidden lg:block" > Contact Us
                       </button>
                        <ToastContainer  />
          </div>

         



               

            



          


          

          

          {/* Desktop Button */}
          <span className="hidden lg:block"></span>

          {/* Mobile Menu Toggle */}
          <button
            id="showbutton"
            className="lg:hidden transition-all hover:text-white/80"
            onClick={() => setShow(!Show)}
          >
            {Show ? (
              <MdOutlineCancelPresentation size={26} />
            ) : (
              <GoMultiSelect size={26} />
            )}
          </button>
        </nav>
      </div>





      {/* Mobile Dropdown Menu */}
      {/* <ClickAwayListener onClickAway={HandleSide}> */}
      <div
        id="sidebar"
        className={`bg-[#000345] text-white  lg:hidden  transition-all duration-700 ease-in-out right-0   z-50 w-full h-100 absolute overflow-y-scroll scrollbar-hide
    ${Show ? "max-h-200   " : "max-h-0 "}
  `}
      >
        <ul className="flex flex-col gap-4 p-6  pl-7">
        
         
            <li className="hover:text-white/80 cursor-pointer"><Link to="/">Home</Link></li>
           
              <li
                className="hover:text-white/80 cursor-pointer flex items-center gap-2 relative  "
                
              >
               <Link to="/Aboutus">  <span className="flex gap-1 justify-center items-center">
                  
                  <span>About Us</span>
                 
                </span></Link>
               
              </li>
           <ClickAwayListener onClickAway={Handleadmissions}>
              <li
                className="hover:text-white/80 cursor-pointer flex flex-col items-start  relative gap-2 "
                onClick={() => setAdmissions(!admissions)}
              >
            
                <span className="flex gap-1  justify-center items-center  ">
                  <span>Admissions</span>
                  <span className="mt-1 transition-all duration-500">
                   {
                    admissions ?  <IoIosArrowUp /> :  <IoIosArrowDown/> 
                   }
                  </span>
                </span>
                <div
                  className={`  bg-black/30  rounded-md overflow-hidden px-2  w-50 transition-all duration-400 text-white  ${
                    admissions ? "max-h-40" : "max-h-0"
                  }`}
                >
                <ul className="">
                    <li className="border-b indent-3 py-2 border-white/40"> <Link to="/Admission">Undergraduate</Link></li>
                    <li className="py-2 indent-3">JUPEB</li>
                     <a href="https://eportal.eauedoyo.edu.ng/ug/candidate" target="_blank" rel='noreferrer'> <li className="hover:text-white/80 py-2 indent-3 border-t  border-white/40 ">Application Portal</li></a>
                </ul>
                 
                </div>
              </li>
              </ClickAwayListener>
            
            <ClickAwayListener onClickAway={Handlestudentportals}>
              <li
                className="hover:text-white/80 cursor-pointer flex flex-col items-start gap-2"
                onClick={() => setstudentportals(!Studentportals)}
              >
                
               <span className="flex  gap-1 justify-center items-center">
                  
                  <span>Student Portal</span>{" "}
                  <span className="mt-1 transition-all duration-500">
                   {
                    Studentportals ?  <IoIosArrowUp /> :  <IoIosArrowDown/> 
                   }
                  </span>
                </span>
                <div
                  className={` bg-black/30   overflow-hidden rounded-md text-white px-2 ${
                    Studentportals ? "max-h-200" : "max-h-0"
                  } transition-all duration-500 `}
                >
                 <ul>
                    <a href="https://eportal.eauedoyo.edu.ng/" target="_blank" rel='noreferrer' ><li className="hover:text-white/80 border-b indent-3 py-2 border-white/40">  Payment Portal</li></a> 
                    <a href="https://eportal.eauedoyo.edu.ng/" target="_blank" rel='noreferrer'><li className="hover:text-white/80 py-2 indent-3">Eportal</li></a>
                 </ul>
                </div>
              </li>
              </ClickAwayListener>
          
            <ClickAwayListener onClickAway={Handlestaffportals}>
              <li
                className="hover:text-white/80 cursor-pointer flex flex-col items-start relative gap-2 "
                onClick={() => setstaffportals(!staffportals)}
              >
            
               <span className="flex gap-1  justify-center items-center  ">
                  <span>Staff portal</span>
                  <span className="mt-1 transition-all duration-500">
                   {
                    staffportals ?  <IoIosArrowUp /> :  <IoIosArrowDown/> 
                   }
                  </span>
                </span>
                <div
                  className={` bg-black/30 overflow-hidden rounded-md  w-50 transition-all duration-400 text-white  ${
                    staffportals ? "max-h-200" : "max-h-0"
                  }`}
                >
                <ul className="">
                    <li className="hover:text-white/80 border-b indent-3 py-2 border-white/40">  <Link to="/Staffpage">Staff-portal </Link></li>
                    <a href="https://webmail.eauedoyo.edu.ng/" target="_blank" rel='noreferrer'> <li className="hover:text-white/80 py-2 indent-3"> Staff-Email</li></a>
                </ul>
                 
                </div>
              </li>
              </ClickAwayListener>
           
              <li
                className="hover:text-white/80 cursor-pointer flex items-center gap-2"
                
              >
                
               <Link to="/Event"> <span className="flex  gap-1 justify-center items-center">
                  
                  <span>Event/News</span>
                 
                </span></Link>
               
              </li>

        </ul>

         <div className="indent-6">
                       <button className="border  py-2 px-3 rounded-lg  lg:hidden" > Contact Us
                       </button>
                        <ToastContainer  />
          </div>
      </div>
      {/* </ClickAwayListener> */}

   

    </div>
  );
};

export default Navbar;
