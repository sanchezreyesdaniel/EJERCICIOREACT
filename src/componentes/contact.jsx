export function Contact() {
  return (
    <div className="container mx-auto p-4">
      
      <h2 className="text-center text-6xl font-bold mb-6">CONTACT</h2>
      <div className="flex justify-center items-center mb-6">
        <div className="border-b-4 border-purple-500 pb-2 w-[50px]"></div>
      </div>
      <p className="text-center">
      Feel free to Contact me by submitting the form below and I will get back to you as soon as <br /> possible
      </p>
      <div className="bg-white shadow-lg p-16 mt-24 mx-auto max-w-4xl text-left rounded-md">
        <form action="#" className="contact__form" method="post">
          <input type="hidden" name="form-name" value="form 1" />

          <div className="mb-8">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              required
              placeholder="Enter Your Name"
              type="text"
              className="w-full p-7 leading-tight border border-gray-300 rounded appearance-none bg-gray-100  text-gray-700 font-semibold"
              name="name"
              id="name"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              required
              placeholder="Enter Your Email"
              type="email"
              className="p-7 w-full px-3 leading-tight border border-gray-300 rounded bg-gray-100  text-gray-700 font-semibold"
              name="email"
              id="email"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              required
              cols="30"
              rows="10"
              className="w-full px-3 py-2 leading-tight border border-gray-300 rounded bg-gray-100 text-gray-700 font-semibold"
              placeholder="Enter Your Message"
              name="message"
              id="message"
            ></textarea>
          </div>

          <div className="flex justify-end">
  <button
    className="py-5 px-14 mt-4 font-bold text-white bg-purple-600 rounded-md shadow-md"
  >
    SUBMIT
  </button>
</div>


        </form>
      </div>
    </div>
  );
}
