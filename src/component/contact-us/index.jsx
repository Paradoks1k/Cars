import React from "react";
import "./style.css";
import { BlogSection } from "../Blog-section";

export const ContactUs = () => {
  return (
    <div className="contacts py-24 ">
      <div className="container bg-cover max-w-screen-xl  mx-auto pt-12 pb-8">
        <h2 className="section-title mb-5 text-5xl font-bold text-center">
          Contact Us
        </h2>
        <p className="contact-text text-center text-xl font-bold mb-10 px-24">
          {" "}
          Feel free to contact us with questions, potencial partnerships or
          media inquiries
        </p>
        <form
          className="form max-w-[580px] mx-auto flex justify-between flex-wrap"
          action="#"
        >
          <input type="text" placeholder="Name" className="form-input "></input>
          <input
            type="email"
            placeholder="E-mail"
            className="form-input"
          ></input>
          <textarea
            className="form-textarea w-full"
            placeholder="Your text"
          ></textarea>
          <button
            type="submit"
            className="btn form-btn uppercase text-almost-white bg-almost-black py-3 px-16 mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
      <BlogSection />
    </div>
  );
};
