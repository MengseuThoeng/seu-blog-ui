import React from "react";

const AboutMe = () => {
  return (
    <div className="w-full min-h-screen flex items-center bg-gray-100 dark:bg-black">
      <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-4 pt-10 pb-20 dark:text-white">
        {/* Title */}
        <div className="flex flex-col gap-2 mb-2 md:mb-4">
          <h2 className="text-4xl font-serif font-semibold">About Me</h2>
          <span className="w-16 h-[4px] bg-rose-500 rounded"></span>
          <span className="w-8 h-[4px] bg-rose-500 rounded"></span>
        </div>

        <h4 className="capitalize text-xl font-semibold">
          I'm Thoeng Mengseu and I'm
          <span className="text-rose-500"> a Web Developer</span>
        </h4>
        <p>
          I am a dedicated and innovative FullStack Developer passionate about
          creating impactful digital experiences. With a keen eye for detail and
          a commitment to excellence, I specialize in designing and developing
          solutions that combine creativity with functionality.
        </p>

        <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-4 lg:gap-6 justify-between">
          {/* Col 1 */}
          <div className="w-full flex flex-col items-stretch gap-4">
            {/* col 1 */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-6 items-center justify-between font-serif">
              {/* 1 */}
              <ul className="w-full text-gray-900 dark:text-gray-200">
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Birthday :</span> 19 Jan
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Website :</span>{" "}
                  mengseu-thoeng.vercel.app
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Degree :</span> MIS
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Location :</span> Phnom Penh,
                  Cambodia
                </li>
              </ul>
              {/* 2 */}
              <ul className="w-full text-gray-900 dark:text-gray-200 font-serif">
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Email :</span>{" "}
                  mengseu2004@gmail.com
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Phone No :</span> +855 774 415 77
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Employment :</span> ACLEDA
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Freelance :</span> Unavailable
                </li>
              </ul>
            </div>

            {/* col 2 Buttons */}
            <div className="flex gap-4 justify-center sm:justify-start">
              <button className="px-4 sm:px-6 py-2 bg-rose-600 rounded-full text-white font-bold">
                Download CV
              </button>
              <button className="px-4 sm:px-6 py-2 bg-rose-600 rounded-full text-white font-bold">
                Hire me
              </button>
            </div>
          </div>

          {/* col 2 */}
          <div className="w-full flex flex-col gap-2">
            {/* Progress bar 1 */}
            <div className="flex flex-col gap-2">
              <div className="w-full flex justify-between font-semibold">
                <span>Spring Boot</span>
                <span>95 %</span>
              </div>
              {/* Progress bar */}
              <div className="w-full bg-gray-300 rounded-full">
                <div className="w-[95%] h-2 bg-rose-500 rounded-full"></div>
              </div>
            </div>

            {/* Progress bar 2 */}
            <div className="flex flex-col gap-2">
              <div className="w-full flex justify-between font-semibold">
                <span>HTML/CSS/Javascript</span>
                <span>90 %</span>
              </div>
              {/* Progress bar */}
              <div className="w-full bg-gray-300 rounded-full">
                <div className="w-[90%] h-2 bg-rose-500 rounded-full"></div>
              </div>
            </div>

            {/* Progress bar 3 */}
            <div className="flex flex-col gap-2">
              <div className="w-full flex justify-between font-semibold">
                <span>PHP/Laravel</span>
                <span>80 %</span>
              </div>
              {/* Progress bar */}
              <div className="w-full bg-gray-300 rounded-full">
                <div className="w-[80%] h-2 bg-rose-500 rounded-full"></div>
              </div>
            </div>

            {/* Progress bar 4 */}
            <div className="flex flex-col gap-2">
              <div className="w-full flex justify-between font-semibold">
                <span>NextJS</span>
                <span>85 %</span>
              </div>
              {/* Progress bar */}
              <div className="w-full bg-gray-300 rounded-full">
                <div className="w-[85%] h-2 bg-rose-500 rounded-full"></div>
              </div>
            </div>

            {/* Progress bar 5 */}
            <div className="flex flex-col gap-2">
              <div className="w-full flex justify-between font-semibold">
                <span>C# Programming</span>
                <span>70 %</span>
              </div>
              {/* Progress bar */}
              <div className="w-full bg-gray-300 rounded-full">
                <div className="w-[70%] h-2 bg-rose-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
