import React from "react";
import resume from "../../src/assets/rex atuzie fullstack dev july.pdf";
import toast from "react-hot-toast";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Redux",
    "TypeScript",
    "Node JS",
    "Express JS",
    "MongoDB",
    "Firebase",
    "GIT",
    "Responsive Design",
    "SEO",
  ];

  const downloadResume = () => {
    toast.success("rex atuzie fullstack dev resume  downloded");
  };
  return (
    <section id="About" name="about" className=" w-full  ">
      <div className=" w-[90%] lg:w-[80%]  mx-auto lg:py-10">
        <div className=" flex flex-col justify-center items-center mb-6 ">
          <div className=" font-bold text-gray-300  text-3xl">ABOUT ME</div>
          <div className="w-[40px] m rounded-lg h-[4px] bg-purple-600"></div>

          <p className=" text-sm lg:text-xl lg:max-w-2xl text-center font-medium my-4 text-gray-400">
            Here you will find more information about me, what I do, and my
            current skills
          </p>
        </div>

        <div className="  lg:flex lg:justify-between my-8">
          <div className=" lg:w-[45%]">
            <h1 className=" font-bold text-xl lg:text-2xl mb-2 lg:mb-4 text-gray-300">
              Get to know me
            </h1>

            <p className=" lg:text-lg text-gray-400">
              I'm a <strong>Fullstack Developer </strong> with over 2 years of
              experience,that specializes on using the MERN stack{" "}
              <strong>(MongoDB,Express Js,React Js,Node Js)</strong> in building
              and managing Web Applications. enabling me to handle both frontend
              and backend development with ease.
            </p>

            <p className=" text-gray-400 lg:text-lg my-4 lg:my-8">
              My primary tools for frontend development are{" "}
              <strong> React Js</strong> and <strong>Tailwind CSS</strong> which
              enable me build dynamic and visually appealing user interface that
              provide an excellent user experience across all devices.I use{" "}
              <strong>Redux</strong> for efficient state management, ensuring
              seamless and predictable data flow within my applications. <br />{" "}
              On the backend, I primarily work with <strong>Node Js</strong> and{" "}
              <strong>Express Js</strong> and <strong>MongoDB</strong> to design{" "}
              <strong>RESTful APIs</strong>, managing databases, and ensuring
              secure and efficient data handling.
              <br />
            </p>

            <p className=" text-gray-400 lg:text-lg">
              I'm open to <strong>Job</strong> opportunities where I can
              contribute to projects that challeneges my abilities and expand my
              expertise.
            </p>

            <div className=" my-7">
              <a
                className="  rounded uppercase bg-purple-700 text-lg font-semibold text-white px-8 py-2 lg:py-4  hover:bg-purple-100 hover:text-purple-700  "
                href={resume}
                download
                onClick={downloadResume}
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className=" lg:w-[45%]">
            <h1 className=" font-bold text-gray-300 text-xl lg:text-2xl mb-4">
              My Skills
            </h1>

            <div className=" flex gap-4 flex-wrap">
              {skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className=" bg-gray-100 font-medium text-gray-700 rounded p-2 lg:p-4"
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* <p className=" text-gray-600 leading-7 text-sm lg:text-base">
          I'm a MERN Stack Developer with a proven track record of building
          full-stack web applications using MongoDB, Express.js, React, and
          Node.js. With 2 years of hands-on experience, I specialize in creating
          scalable and responsive web solutions that provide exceptional user
          experiences. Proficient in both frontend and backend development, I
          excel at designing intuitive user interfaces, implementing robust
          APIs, and optimizing application performance.
        </p> */}
        {/* <p className=" text-gray-600 my-7 text-sm lg:text-base leading-7">
          My technical skill set includes proficiency in{" "}
          <span className=" text-blue-600">HTML</span> ,{" "}
          <span className=" text-blue-600">CSS</span> and
          <span className=" text-blue-600"> JavaScript.</span> I am particularly
          skilled in working with JavaScript frameworks such as{" "}
          <span className=" text-blue-600"> React Js</span>
          <span className=" text-blue-600"> Tailwind CSS </span> ,{" "}
          <span className=" text-blue-600"> Redux</span>,
          <span className=" text-blue-600">
            Ensure cross browser and cross-platform compatibility{" "}
          </span>
          and building{" "}
          <span className=" text-blue-600">Responsive web applications</span> to
          fit any screen size. Im also have experience working with{" "}
        </p> */}

        {/* <p className=" text-sm text-gray-600 leading-7 lg:text-base">
          For backend Development,I am familar with server side tools like{" "}
          <span className=" text-blue-600">Node Js</span>,
          <span className=" text-blue-600">Express Js</span> for Building
          RESTFUL API'S and <span className=" text-blue-600">Mongo DB</span>. My
          passion for staying up-to-date with the latest technologies and best
          practices ensures that I can contribute effectively to any dynamic
          development team. Ready to leverage my expertise to drive innovation
          and deliver high-quality software solutions.
        </p> */}
        {/* <div className=" mt-8">
          <a
            className=" rounded-full  bg-black text-white px-4 py-3 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black "
            href={resume}
            download
          >
            Download Resume
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default About;
