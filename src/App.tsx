import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCode,
  faSchool,
  faCircleCheck,
  faEnvelope,
  faAnglesUp,
  faAnglesDown,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { useState } from "react";
// img
import avatar1 from "./assets/avt1.jpg";
import avatar2 from "./assets/avt2.jpg";
import TextLogo from "./assets/TextLogo.png";
// cv
import myCv from "./assets/CV.pdf";
import {
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Snippet,
} from "@nextui-org/react";
import { FrontendList, BackendList, ProjectList } from "./constant";
import ProjectCard from "./components/ProjectCard";

function App() {
  const [toggleIcon, setToggleIcon] = useState<Boolean>(false);
  return (
    <div className="mx-5 md:mx-48 scroll-smooth ">
      <nav className="flex justify-between items-center min-h-fit h-[17vh] ">
        <div className="select-none">
          <img
            src={TextLogo}
            alt="Aika Text Logo"
            className="sm:w-[150px] w-[100px]"
          />
        </div>
        <div
          onClick={() => setToggleIcon(!toggleIcon)}
          className="block sm:hidden relative"
        >
          {toggleIcon ? (
            <div>
              <FontAwesomeIcon icon={faTimes} size="2x" />
              <div className="absolute  right-6 top-10 border border-gray-200 max-w-fit bg-white p-2 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">
                <ul>
                  <li className="text-[20px] text-black ">
                    <a href={"#about"}>About</a>
                  </li>
                  <li className="text-[20px] text-black ">
                    <a href={"#experience"}>Experience</a>
                  </li>
                  <li className="text-[20px] text-black ">
                    <a href={"#projects"}>Projects</a>
                  </li>
                  <li className="text-[20px] text-black ">
                    <a href={"#contact"}>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </div>
        <ul className="hidden md:flex justify-between gap-[2rem] ">
          <li className="text-[24px] text-black hover:text-gray-300 hover:underline transition-all duration-500">
            <a href={"#about"}>About</a>
          </li>
          <li className="text-[24px] text-black hover:text-gray-300 hover:underline transition-all duration-500">
            <a href={"#experience"}>Experience</a>
          </li>
          <li className="text-[24px] text-black hover:text-gray-300 hover:underline transition-all duration-500">
            <a href={"#projects"}>Projects</a>
          </li>
          <li className="text-[24px] text-black hover:text-gray-300 hover:underline transition-all duration-500">
            <a href={"#contact"}>Contact</a>
          </li>
        </ul>
      </nav>
      <section id="intro" className="pt-[15vh] sm:pt-0 relative ">
        <div className="flex-row sm:flex justify-center  items-center sm:gap-24 gap-16  sm:h-[80vh] h-[83vh] py-2 ">
          <div className="flex my-2 sm:my-0 justify-center items-center">
            <img
              src={avatar1}
              alt="avatar1"
              className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] object-cover rounded-[100%] "
            />
          </div>
          <div className="text-center my-2 sm:my-0">
            <div className="my-4">
              <p className="text-[16px] text-gray-700 my-2 hidden sm:block">
                Hello, I'm
              </p>
              <p className="text-5xl my-2">Hoang Nhan</p>
              <p className="text-gray-600 font-bold my-2 tracking-widest">
                Web Developer
              </p>
            </div>
            <div className="my-2 sm:my-4">
              <button className="text-sm p-2 rounded-2xl text-center border border-gray-600 mx-2 hover:bg-black transition-all duration-500 bg-white hover:text-white">
                <a href={myCv} download={true}>
                  Download CV
                </a>
              </button>
              <Popover placement="bottom" color="default" backdrop="opaque">
                <PopoverTrigger>
                  <button className="text-sm p-2 rounded-2xl text-center border border-gray-600 mx-2 hover:bg-white hover:text-black transition-all duration-500 text-white bg-black">
                    Contact Info
                  </button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="min-w-[300px] grid grid-flow-row-dense grid-cols-3 gap-2">
                    <div className="col-span-1 content-center font-bold">
                      Full Name
                    </div>
                    <div className="col-span-2 content-center uppercase text-green-700 font-bold">
                      Dinh Hoang Nhan
                    </div>
                    <div className="col-span-1 content-center font-bold">
                      Phone Number
                    </div>
                    <div className="col-span-2  content-center">
                      <Snippet
                        color="secondary"
                        symbol=""
                        size="sm"
                        className="w-full"
                      >
                        0707004827
                      </Snippet>
                    </div>
                    <div className="col-span-1 content-center font-bold">
                      Email
                    </div>
                    <div className="col-span-2 content-center">
                      <Snippet
                        symbol="✉️"
                        color="warning"
                        variant="flat"
                        size="sm"
                      >
                        dinhhoangnhan202@gmail.com
                      </Snippet>
                    </div>
                    <div className="col-span-1 content-center font-bold">
                      FaceBook
                    </div>
                    <div className="col-span-2 content-center">
                      <Link
                        color="primary"
                        href="https://www.facebook.com/nhan.gas.5/"
                        size="sm"
                        className="italic underline text-sm font-light"
                      >
                        Đinh Hoàng Nhân
                      </Link>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/dinh-hoang-nhan-210931301/"
                className="mx-2"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077b6" />
              </a>
              <a href="https://github.com/Aikadev27" className="mx-2">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 py-2 animate-bounce sm:block hidden">
          <a href="#about">
            <FontAwesomeIcon icon={faAnglesDown} size="2x" />
          </a>
        </div>
      </section>
      <section
        id="about"
        className="h-[63vh] sm:h-[96vh] relative sm:flex justify-center items-center"
      >
        <div>
          <div className="text-center sm:mb-20 mb-10 sm:pt-[4vh] ">
            <p className="text-sm text-gray-600 mb-4">Get To Know More</p>
            <p className="text-[32px] sm:text-[48px] font-bold">About Me</p>
          </div>
          <div className="block sm:flex gap-8 justify-between items-center">
            <div className="flex justify-center items-center sm:block sm:flex-none my-6 sm:my-0">
              <img
                src={avatar2}
                alt="about avatar"
                className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] object-cover object-top rounded-lg"
              />
            </div>
            <div className="flex-auto">
              <div className="flex gap-4 flex-wrap mb-4 justify-center">
                <div className="text-center flex flex-col gap-2 border border-gray-400 rounded-lg px-2 py-6 flex-1">
                  <div>
                    <FontAwesomeIcon icon={faCode} size="1x" color="#1d3557" />
                  </div>
                  <p className="font-bold">Experience</p>
                  <p className="text-sm text-gray-600">Frontend Development</p>
                </div>
                <div className="text-center flex flex-col gap-2 border border-gray-400 rounded-lg px-2 py-3 flex-1">
                  <div>
                    <FontAwesomeIcon
                      icon={faSchool}
                      size="1x"
                      color="#1d3557"
                    />
                  </div>
                  <p className="font-bold">Can Tho University</p>
                  <p className="text-sm text-gray-600">Computer Science </p>
                </div>
              </div>
              <p className="text-[12px] text-gray-600 sm:tracking-widest text-justify pb-2 sm:pb-0">
                I'm a 4th-year student at Can Tho University majoring in
                Computer Science. I have over a year of experience in Web
                Development. My expertise includes more than one year of
                programing with NodeJS, ReactJS, VueJS, NextJS and NestJS. With
                my knowledge, I am looking for a practical internship
                opportunity at a company to consolidate my knowledge, improve
                programming skills and gain practical experience.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 py-2 animate-bounce sm:block hidden">
            <a href="#experience">
              <FontAwesomeIcon icon={faAnglesDown} size="2x" />
            </a>
          </div>
        </div>
      </section>
      <section
        id="experience"
        className="h-fit mt-20 sm:mt-0 sm:h-[100vh] p-8 relative sm:flex justify-center items-center"
      >
        <div>
          <div>
            <p className="text-[16px] text-gray-600 text-center">Explore My</p>
            <p className="text-[48px] text-black font-bold text-center">
              Experience
            </p>
          </div>
          <div className="sm:flex sm:gap-4">
            <div className="flex-1 p-4 border border-gray-400 rounded-lg my-4">
              <h2 className="text-[28px] text-black my-4 text-center">
                Front-end
              </h2>
              <ul className="flex flex-wrap justify-between  gap-5 ">
                {FrontendList.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center     gap-2 sm:w-[10rem] w-full ml-20 sm:ml-0  p-2"
                  >
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      size="1x"
                      color="#14213d"
                    />
                    <p className="mx-4 text-gray-700 text-[16px] ">
                      {item.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 p-4 border border-gray-400 rounded-lg my-4">
              <h2 className="text-[28px] text-black my-4 text-center">
                Front-end
              </h2>
              <ul className="flex flex-wrap justify-between  gap-5 ">
                {BackendList.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center    gap-2 sm:w-[10rem] w-full ml-20 sm:ml-0  p-2"
                  >
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      size="1x"
                      color="#14213d"
                    />
                    <p className="mx-4 text-gray-700 text-[16px] ">
                      {item.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 py-2 animate-bounce sm:block hidden">
            <a href="#projects">
              <FontAwesomeIcon icon={faAnglesDown} size="2x" />
            </a>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="sm:h-[96vh] relative sm:flex justify-center items-center"
      >
        <div>
          <div>
            <p className="text-[16px] text-gray-600 text-center">
              Browse My Recent
            </p>
            <p className="text-[48px] text-black font-bold text-center">
              Projects
            </p>
          </div>
          <div className="sm:flex justify-between gap-8 my-5 ">
            {ProjectList.map((item) => (
              <ProjectCard
                name={item.name}
                image={item.image}
                FElink={item.FElink}
                BElink={item.BElink}
                demo={item.demo}
                key={item.name}
              />
            ))}
          </div>
          <div className="absolute bottom-0 right-0 py-2 animate-bounce sm:block hidden">
            <a href="#contact">
              <FontAwesomeIcon icon={faAnglesDown} size="2x" />
            </a>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="flex justify-center items-center sm:h-[100vh] sm:mb-0 mb-[100px] mt-32 pt-2 sm:mt-0 relative"
      >
        <div>
          <div>
            <div>
              <p className="text-[16px] text-gray-600 text-center">
                Get in Touch
              </p>
              <p className="text-[48px] text-black font-bold text-center">
                Contact Me
              </p>
            </div>
            <div className="sm:flex gap-4 my-8">
              <div className=" flex sm:justify-around justify-center gap-2 items-center my-3 sm:my-0">
                <FontAwesomeIcon icon={faEnvelope} />
                <p className="text-gray-700 hover:underline hover:text-gray-500 transition-all duration-200 cursor-pointer">
                  dinhhoangnhan202@gmail.com
                </p>
              </div>
              <div className=" flex sm:justify-around justify-center gap-2 items-center my-3 sm:my-0">
                <FontAwesomeIcon icon={faLinkedin} />
                <a
                  className="text-gray-700 hover:underline hover:text-gray-500 transition-all duration-200 cursor-pointer"
                  href="https://www.linkedin.com/in/dinh-hoang-nhan-210931301/"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 py-2 animate-bounce sm:block hidden">
            <a href="#">
              <FontAwesomeIcon icon={faAnglesUp} size="2x" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
