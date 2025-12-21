import React, { useEffect } from "react";
import { FcGraduationCap } from "react-icons/fc";
import { BsPersonFill } from "react-icons/bs";
import ScrollReveal from "scrollreveal";

const Welcomegreetings = () => {
   useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "200px",
      duration: 2000,
      easing: "ease-in-out",
      origin: "left",
      interval: 600,
      reset: true,
    });
  }, []);
  return (
    <div className="pt-20 bg-black/10 pb-5 reveal">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 contains">
        <div className="">
          <h1 className="flex  gap-2">
            <span>
              <FcGraduationCap size={35} />
            </span>{" "}
            <span className="font-bold text-lg text-[#000345] ">
              Our University
            </span>
          </h1>
          <h1 className="text-2xl font-bold">
            Where Knowledge Meets Innovation
          </h1>
          <p className="line-clamp-6 text-justify">
            {" "}
            Emmanuel Alayande University of Education, Oyo is an offshoot of the
            St. Andrew's College, Oyo formerly a Grade II Teachers' College
            established by the Church Missionary Society (C.M.S.) in 1896 and it
            ranked as the oldest Teachers' Training College in Nigeria. In 1976,
            the clamour for its upgrading to an NCE awarding institution began.
            The Oyo State Government acceded to this request in October 1980 by
            upgrading the College to a campus of the then Oyo State College of
            Education, Ilesa. In March 1983, the supervision of the College was
            transferred to the Oyo State College of Education, Ila Orangun. The
            College gained full autonomy as a full-fledged College of Education
            on 1st October 1985. At various times, the College had been renamed
            as St. Andrew's College of Education, Oyo; Oyo State College of
            Education, Oyo; Emmanuel Alayande College of Education, Oyo in 2008
            in memory of the renowned educationist and an Andrian, Rev. Canon
            Emmanuel Alayande without affecting the core mandate as stipulated
            in the College Law and now Emmanuel Alayande University of
            Education, Oyo. It is noteworthy that since the College was
            relocated to its present site in 2003, it has grown in leaps and
            bounds through funding by the Oyo State Government and the Normal
            and Special Interventions by the Tertiary Education Trust Fund
            (TETFund). The major purpose of the establishment of the University
            is to serve essentially as an academic centre for the production of
            highly qualified teachers. The transformation from a Teachers' Grade
            II awarding Institution to a Nigeria Certificate in Education and
            then Degree awarding institution is an undeniable fact that the
            institution has been responding to the needs of society and time. As
            at today, this institution has produced thousands of very skillful
            teachers and professionals in other fields of endeavour making
            useful contributions to nation-building. The St. Andrew's College,
            Oyo (now Emmanuel Alayande University of Education, Oyo) was
            established as a Grade II Teacher's College by the Church Missionary
            Society (C.M.S.) in 1896 and it ranked as the oldest Teachers'
            Training College in Nigeria. In 1976, the clamour for its upgrading
            to an NCE awarding institution began. The Oyo State Government
            acceded to this request in October 1980 by upgrading the College to
            a campus of the then Oyo State College of Education, Ilesa. In March
            1983, the supervision of the College was transferred to the Oyo
            State College of Education, Ila Orangun. The College gained full
            autonomy as a full-fledged College of Education on 1st October 1985.
          </p>

          <p className="flex   items-center gap-2 pt-3">
            <span>
              <BsPersonFill />
            </span>
            <span className="font-bold text-lg">
              Prof. Olarenwaju O. Olaniyan Vice Chancellor
            </span>
          </p>

          <button className="bg-linear-to-r from-white/40  from-5% via-[#000345] via-30% to-[#000345] to-95% py-3 rounded-sm px-3 font-bold text-white mt-6">
            Read More
          </button>
        </div>

        <div>
          <img
            src="../src/assets/Components/imgi_2_vice chancellor.jpg"
            className="h-75 w-175 rounded object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Welcomegreetings;
