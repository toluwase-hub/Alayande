import React, { useEffect } from 'react'
import ScrollReveal from "scrollreveal";


   

const Aboutus = () => {

  useEffect(() => {
      ScrollReveal().reveal(".reveal", {
        distance: "300px",
        duration: 2000,
        easing: "ease-out",
        origin: "bottom",
        interval: 600,
        reset: false,
      });
    }, []);
  return (
    <div>

   
    <div className="flex  justify-center relative h-100 ">
              <div>
                <img
                  src="/images/whats-6.jpeg"
                  className="object-cover h-100 w-screen "
                  alt=""
                />
              </div>
    
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="absolute inset-0 text-white flex flex-col justify-center gap-5  px-5 lg:px-16 md:px-16">
               <h1 className=' font-bold text-3xl  text-center lg:text-6xl'>About Emmanuel Alayande University Of Education</h1>  
               
    

              </div>
            </div>

            <div className='contains text-justify py-10 reveal'>
              <h1 className='text-center font-bold text-4xl lg:text-5xl text-blue-950 py-5 '>
                Our History
              </h1>
              <div className='flex justify-center'>
                <img src="/images/school-logo_icon.png" className='w-80 h-80 object-cover' alt="" />
              </div>
              <p >
                Emmanuel Alayande University of Education, Oyo is an offshoot of the St. Andrew's College, Oyo formerly a Grade II Teachers' College established by the Church Missionary Society (C.M.S.) in 1896 and it ranked as the oldest Teachers' Training College in Nigeria. In 1976, the clamour for its upgrading to an NCE awarding institution began. The Oyo State Government acceded to this request in October 1980 by upgrading the College to a campus of the then Oyo State College of Education, Ilesa. In March 1983, the supervision of the College was transferred to the Oyo State College of Education, Ila Orangun. The College gained full autonomy as a full-fledged College of Education on 1st October 1985.

At various times, the College had been renamed as St. Andrew's College of Education, Oyo; Oyo State College of Education, Oyo; Emmanuel Alayande College of Education, Oyo in 2008 in memory of the renowned educationist and an Andrian, Rev. Canon Emmanuel Alayande without affecting the core mandate as stipulated in the College Law and now Emmanuel Alayande University of Education, Oyo.

It is noteworthy that since the College was relocated to its present site in 2003, it has grown in leaps and bounds through funding by the Oyo State Government and the Normal and Special Interventions by the Tertiary Education Trust Fund (TETFund).

The major purpose of the establishment of the University is to serve essentially as an academic centre for the production of highly qualified teachers. The transformation from a Teachers' Grade II awarding Institution to a Nigeria Certificate in Education and then Degree awarding institution is an undeniable fact that the institution has been responding to the needs of society and time. As at today, this institution has produced thousands of very skillful teachers and professionals in other fields of endeavour making useful contributions to nation-building.

The St. Andrew's College, Oyo (now Emmanuel Alayande University of Education, Oyo) was established as a Grade II Teacher's College by the Church Missionary Society (C.M.S.) in 1896 and it ranked as the oldest Teachers' Training College in Nigeria. In 1976, the clamour for its upgrading to an NCE awarding institution began. The Oyo State Government acceded to this request in October 1980 by upgrading the College to a campus of the then Oyo State College of Education, Ilesa. In March 1983, the supervision of the College was transferred to the Oyo State College of Education, Ila Orangun. The College gained full autonomy as a full-fledged College of Education on 1st October 1985.
              </p>
            </div>

    </div>
  )
}

export default Aboutus