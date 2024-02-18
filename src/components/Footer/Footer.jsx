import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#12141e] pt-12">
      {/*Top Footer*/}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful product?
            </h2>
            <a href="#contact">
              <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                <i class="ri-mail-line"></i> Hire me!
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              consequuntur tempora quos maxime rerum obcaecati. Reprehenderit
              perspiciatis quae repellendus nihil magni impedit voluptates nam
              eaque veniam voluptatibus consectetur, dicta minima.
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-8">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow me
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="#github"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i class="ri-github-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="#instagram"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="#linkedin"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="#twitter"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i class="ri-twitter-x-line"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-10 mt-10">
            <li className="text-gray-400 font-[600]">
              <a href="#about">About</a>
            </li>
            <li className="text-gray-400 font-[600]">
              <a href="#service">Service</a>
            </li>
            <li className="text-gray-400 font-[600]">
              <a href="#project">Project</a>
            </li>
            <li className="text-gray-400 font-[600]">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End Top Footer */}

      {/* Bottom Footer*/}
      <div className="bg-[#1b1329] py-3 mt-14">
        <div className="container">
          <div className="flex items-center justify-center">
            <div className="text-gray-400 text-[14px] text-center">
              Copyright {year} by Irmansyah Muslimin - All right reserved
            </div>
          </div>
        </div>
      </div>
      {/* End Bottom Footer */}
    </footer>
  );
};

export default Footer;
