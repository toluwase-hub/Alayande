import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";

const Keystatistic = () => {

  const[conutStaff, setCountStaff ] = useState(0)
  const[graduate, setGraduate] = useState(0)
  const[male, setMale] = useState(0)
  const[female, setfemale] = useState(0)
  const[totalStudent, setTotalStudent] = useState(6700)
  const [campus, setcampus] = useState(0)


  useEffect(() =>{
    if (conutStaff < 40){
     const interval = setInterval( () =>{
        setCountStaff(prev => prev + 1)
      },50)
    
      
      return () => clearInterval(interval)
    }
  },[conutStaff])

  useEffect(() =>{
    if (graduate < 60){
     const interval1 = setInterval( () =>{
        setGraduate(prev => prev + 1)
      },30)
    
      
      return () => clearInterval(interval1)
    }
  },[graduate])

   useEffect(() =>{
    if (male < 30){
     const interval2 = setInterval( () =>{
        setMale(prev => prev + 1)
      },60)
    
      
      return () => clearInterval(interval2)
    }
  },[male])

   useEffect(() =>{
    if (female   < 70){
     const interval3 = setInterval( () =>{
        setfemale(prev => prev + 1)
      },26)
    
      
      return () => clearInterval(interval3)
    }
  },[female])

  useEffect(() =>{
    if (totalStudent   < 7000){
     const interval4 = setInterval( () =>{
        setTotalStudent(prev => prev + 1)
      },1)
    
      
      return () => clearInterval(interval4)
    }
  },[totalStudent])

   useEffect(() =>{
    if (campus   < 2){
     const interval5 = setInterval( () =>{
        setcampus(prev => prev + 1)
      },1000)
    
      
      return () => clearInterval(interval5)
    }
  },[campus])

  

   useEffect(() => {
      ScrollReveal().reveal(".reveal", {
        distance: "600px",
        duration: 2000,
        easing: "ease-out",
        origin: "bottom",
        interval: 600,
        reset: false,
      });
    }, []);
  return (
    <div className="py-10 bg-black/10 pb-20">
      <h1 className="text-center font-bold text-5xl py-4 pb-5">
        Our Statistics
      </h1>
      <div className="reveal contains grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-5">
        <div className="flex flex-col justify-center items-center bg-[#000345] gap-3  rounded py-3 px-3 hover:-translate-y-2 transition-all duration-150">
          <h1 className="text-white text-2xl font-bold text-center italic">
            No. of students per staff
          </h1>
          <h1 className="font-bold text-gray-400 text-3xl shadow-blue-300">
            {conutStaff}
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#000345] gap-3  rounded py-3 px-3 hover:-translate-y-2 transition-all duration-150">
          <h1 className="text-white text-2xl font-bold text-center italic">
            Percentage of Employed Graduates
          </h1>
          <h1 className="font-bold text-gray-400 text-3xl shadow-blue-300">
            {graduate}%
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#000345] gap-3  rounded py-3 px-3 hover:-translate-y-2 transition-all duration-150">
          <h1 className="text-white text-2xl font-bold text-center italic">
            student ratio of Females to Males
          </h1>
          <h1 className="font-bold text-gray-400 text-3xl shadow-blue-300">
            {female}:{male}
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#000345] gap-3  rounded py-3 px-3 hover:-translate-y-2 transition-all duration-150">
          <h1 className="text-white text-2xl font-bold text-center italic">
            Total number of Student
          </h1>
          <h1 className="font-bold text-gray-400 text-3xl shadow-blue-300">
            {totalStudent}+
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#000345] gap-3 rounded py-3 px-3 hover:-translate-y-2 transition-all duration-150">
          <h1 className="text-white text-2xl font-bold text-center italic">
            No. of campus
          </h1>
          <h1 className="font-bold text-gray-400 text-3xl shadow-blue-300">
            {campus}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Keystatistic;
