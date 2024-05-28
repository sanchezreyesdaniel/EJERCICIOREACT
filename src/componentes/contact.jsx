import React from 'react';

export function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">CONTACT</h2>
      <div className="flex justify-center items-center mb-6">
        <div className="border-b-4 border-purple-500 pb-2 w-1/3 lg:w-1/6"></div>
      </div>
      <p className="text-center mb-6">
        Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
      </p>
      <div className="bg-white shadow-lg p-4 sm:p-8 lg:p-16 mt-5 mx-auto w-full max-w-md sm:max-w-lg lg:max-w-4xl text-left rounded-md">
        <form action="#" className="contact__form" method="post">
          <input type="hidden" name="form-name" value="form 1" />

          <div className="mb-4 sm:mb-8">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              required
              placeholder="Enter Your Name"
              type="text"
              className="w-full p-3 sm:p-4 lg:p-7 leading-tight border border-gray-300 rounded appearance-none bg-gray-100 text-gray-700 font-semibold"
              name="name"
              id="name"
            />
          </div>

          <div className="mb-4 sm:mb-8">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              required
              placeholder="Enter Your Email"
              type="email"
              className="w-full p-3 sm:p-4 lg:p-7 leading-tight border border-gray-300 rounded bg-gray-100 text-gray-700 font-semibold"
              name="email"
              id="email"
            />
          </div>

          <div className="mb-4 sm:mb-8">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              required
              cols="30"
              rows="5"
              className="w-full p-3 sm:p-4 lg:p-7 leading-tight border border-gray-300 rounded bg-gray-100 text-gray-700 font-semibold"
              placeholder="Enter Your Message"
              name="message"
              id="message"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button className="py-3 px-8 mt-4 font-bold text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
