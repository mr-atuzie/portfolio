import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_keu82gf", "template_hslu977", form.current, {
        publicKey: "5bwkLkCC1c3TQELzA",
      })
      .then(
        () => {
          toast.success("Email has been sent");
          console.log("SUCCESS!");
        },
        (error) => {
          toast.error(error.text);
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="Contact" name="contact" className=" w-full  lg:py-10  ">
      <div className="  w-[90%] lg:w-[80%]  mx-auto  ">
        <div className=" flex flex-col justify-center items-center  mb-6">
          <div className=" font-bold text-3xl text-gray-300">CONTACT</div>
          <div className="w-[40px] m rounded-lg h-[4px] bg-purple-600"></div>

          <p className=" text-sm lg:text-xl max-w-2xl text-center my-4 text-gray-400">
            Feel free to Contact me by submitting the form below and I will get
            back to you
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" lg:w-[60%] mx-auto rounded shadow-md bg-[#404040] my-8 py-6 lg:py-12 px-4 lg:px-8"
        >
          <div className=" mb-8">
            <label className=" font-semibold text-gray-300" htmlFor="from_name">
              Name
            </label>
            <input
              name="from_name"
              type="text"
              className=" bg-gray-200 rounded block p-3 w-full placeholder:text-gray-500 placeholder:font-semibold "
              placeholder="Enter Your Name"
            />
          </div>

          <div className=" mb-8">
            <label
              className=" font-semibold text-gray-300"
              htmlFor="from_email"
            >
              Email
            </label>
            <input
              name="from_email"
              type="email"
              placeholder="Enter Your Email"
              className=" bg-gray-200 rounded block p-3 w-full placeholder:text-gray-500 placeholder:font-semibold "
            />
          </div>

          <div className=" mb-8">
            <label className=" font-semibold text-gray-300" htmlFor="message">
              Message
            </label>

            <textarea
              name="message"
              id="message"
              placeholder="Enter Your Message"
              className=" bg-gray-200 rounded h-48 block p-3 w-full placeholder:text-gray-500 placeholder:font-semibold "
            ></textarea>
          </div>

          <div className=" w-full flex justify-end">
            <button
              type="submit"
              className="  rounded uppercase bg-purple-700 text-lg font-semibold text-white px-8 py-2 lg:py-4  hover:bg-white hover:text-purple-700 hover:border-2 hover:border-purple-700 "
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
