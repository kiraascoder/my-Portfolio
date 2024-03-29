import React from "react";
import heroImg from "../../assets/images/hero.svg";
// import CountUp from "react-countup/build/CountUp";

const Hero = () => {
  return (
    <div>
      <section className="pt-0" id="about">
        <div className="container pt-14">
          <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
            {/* Left Content*/}
            <div className="w-full md:basis-1/2">
              <h5
                data-aos="fade-right"
                data-aos-duration="1500"
                className="text-headingColor font-[600] text-[16px]"
              >
                Hello Everyone!
              </h5>
              <h1
                data-aos="fade-up"
                data-aos-duration="1500"
                className=" text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
              >
                I'm Irmansyah Muslimin
                <br /> Web Developer
              </h1>

              <div
                data-aos="fade-right"
                data-aos-duration="1800"
                data-aos-delay="200"
                className="flex items-center gap-6 mt-7"
              >
                <a href="#contact">
                  <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                    <i class="ri-mail-line"></i> Hire Me
                  </button>
                </a>
                <a
                  href="#project"
                  className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
                >
                  See Project
                </a>
              </div>
              <p
                data-aos="fade-left"
                data-aos-duration="1500"
                className="flex gap-2 text-headingColor font-[500] text-[15px] leading-7 mt-14 sm:pl-14 sm:pr-10 "
              >
                <span>
                  <i class="ri-apps-line"></i>
                </span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur omnis perferendis repellendus unde recusandae
                dignissimos eum explicabo.
              </p>
              <div className="flex items-center gap-9 mt-14">
                <span className="text-smallTextColor text-[15px] font-[600]">
                  Follow Me :
                </span>
                <span>
                  <a
                    href="#instagram"
                    className="text-smallTextColor text-[18px] font-[600]"
                  >
                    <i class="ri-instagram-line"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="#github"
                    className="text-smallTextColor text-[18px] font-[600]"
                  >
                    <i class="ri-github-line"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="#linkedin"
                    className="text-smallTextColor text-[18px] font-[600]"
                  >
                    <i class="ri-linkedin-line"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="#twitter"
                    className="text-smallTextColor text-[18px] font-[600]"
                  >
                    <i class="ri-twitter-x-line"></i>
                  </a>
                </span>
              </div>
            </div>
            {/* End Left Content*/}
            {/* Right Image */}
            <div className="basis-1/3 mt-10 sm:mt-0">
              <figure className="flex items-center justify-center">
                <img src={heroImg} alt="" />
              </figure>
            </div>
            {/* End Right Image */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
