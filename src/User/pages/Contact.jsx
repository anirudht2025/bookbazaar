import { IoMdPin } from "react-icons/io";
import { FaEnvelope, FaPhoneAlt, FaArrowRight } from "react-icons/fa";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Header />

      {/* CONTACT PAGE */}
      <div className="w-full">
        <section className="my-3 w-full px-6 py-10 md:px-30">
          <h1 className="mb-3 text-center text-3xl font-bold">CONTACT US</h1>

          <p className="text-justify leading-7 text-gray-600">
            Have a question, suggestion, or simply want to get in touch? We
            would love to hear from you. Whether you need help finding a book,
            have feedback about BookBazaar, or just want to say hello, feel free
            to reach out to us.
          </p>

          {/* Contact Details */}
          <div className="mt-8 flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            {/* Address */}
            <div className="flex w-80 items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                <IoMdPin className="text-2xl" />
              </div>
              <span className="text-gray-700">
                BookBazaar, Your City, India
              </span>
            </div>

            {/* Phone */}
            <div className="flex w-80 items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                <FaPhoneAlt className="text-xl" />
              </div>
              <span className="text-gray-700">+91 9876543210</span>
            </div>

            {/* Email */}
            <div className="flex w-80 items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                <FaEnvelope className="text-xl" />
              </div>
              <span className="text-gray-700">bookbazaarindia@gmail.com</span>
            </div>
          </div>

          {/* CONTACT FORM + MAP */}
          <section className="mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-lg bg-gray-800 px-5 py-6">
              <h2 className="mb-4 text-center text-2xl text-white font-semibold ">
                SEND US A MESSAGE
              </h2>

              <input
                type="text"
                placeholder="Name"
                className="mb-3 w-full rounded-md bg-white px-4 py-3 outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="mb-3 w-full rounded-md bg-white px-4 py-3 outline-none"
              />

              <textarea
                placeholder="Message"
                rows="5"
                className="mb-3 w-full rounded-md bg-white px-4 py-3 outline-none"
              ></textarea>

              <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-orange-400 py-3 font-semibold text-white hover:bg-orange-500">
                SEND MESSAGE
                <FaArrowRight />
              </button>
            </div>

            {/* Google Map */}
            <div className="h-full min-h-87.5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.032971607798!2d75.783742!3d11.258984799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65900d568d853%3A0x86dc9f15ee869de3!2sLuminar%20Technolab%20-%20Software%20training%20institute%20in%20Calicut!5e0!3m2!1sen!2sin!4v1788260583432!5m2!1sen!2sin"
                className="h-full min-h-87.5 w-full rounded-lg border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </section>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
