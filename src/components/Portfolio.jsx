import React from "react";
// import desktop from "../assets/test.png";
import { Link } from "react-router-dom";
import { webPortfolio } from "../data";
// import { BsLink45Deg } from "react-icons/bs";
// import { webPortfolio } from "../data";

const Portfolio = () => {
  return (
    <section name="Projects" className=" w-full  lg:py-10   ">
      <div className=" mb-5 mx-auto w-[90%]  lg:w-[80%]">
        <div className=" flex flex-col justify-center items-center mb-6 ">
          <div className=" font-bold text-3xl text-gray-300">PROJECTS</div>
          <div className="w-[40px] m rounded-lg h-[4px] bg-purple-600"></div>

          <p className=" text-sm lg:text-xl lg:max-w-2xl text-center my-4 text-gray-400">
            Here you will find some of the personal and clients projects that I
            created
          </p>
        </div>

        {webPortfolio.map((project) => {
          const { id, name, desc, img, link } = project;
          return (
            <div
              key={id}
              className=" flex-col  lg:flex-row flex justify-between items-center mb-14"
            >
              <a
                className=" border-[12px] rounded shadow-md border-[#404040] lg:w-[50%]"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={img} alt="" />
              </a>

              <div className=" lg:w-[45%]">
                <h1 className=" font-bold text-gray-300 text-lg mt-2 lg:text-2xl">
                  {name}
                </h1>
                <p className=" my-3 text-gray-400 lg:text-xl">{desc}</p>

                <div className=" flex  gap-5 mt-3">
                  <Link to={"/project/" + id}>
                    <button className="  rounded uppercase bg-purple-700 lg:text-lg font-semibold text-white px-8 py-2 lg:py-4  hover:bg-purple-100 hover:text-purple-700   ">
                      View more
                    </button>
                  </Link>

                  <a
                    className="  rounded uppercase bg-purple-700 lg:text-lg font-semibold text-white px-8 py-2 lg:py-4  hover:bg-purple-100 hover:text-purple-700   "
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    use demo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
