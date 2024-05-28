export function AboutMe() {
    return (
      <div className="container mx-auto p-4 ">
        <h2 className="text-center text-4xl lg:text-6xl font-bold">ABOUT ME</h2>
        <div className="flex flex-col items-center">
          <div className="border-b-4 border-b-purple-400 w-20 flex my-2"></div>
        </div>
        
        <p className="mb-5 text-center">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        <div className="flex flex-col lg:flex-row">
          <div className="p-5 lg:w-1/2">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">Get to know me!</h3>
            <p>I'm a <strong>Frontend Focused Web Developer</strong> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.</p>
            <p>I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <strong>Linkedin</strong> and <strong>Instagram</strong> where I post useful content related to Web Development and Programming.</p>
            <p>I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.</p>
            <button className="py-3 px-8 mt-4 font-bold text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50">CONTACT</button>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="w-3/4">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">My Skills</h3>
              <div className="skills grid grid-cols-3 lg:grid-cols-5">
                <div className="bg-gray-200 p-2 rounded m-1 flex justify-center items-center">HTML</div>
                <div className="bg-gray-200 p-2 rounded m-1 flex justify-center items-center">CSS</div>
                <div className="bg-gray-200 p-2 rounded m-1 flex justify-center items-center">JavaScript</div>
                <div className="bg-gray-200 p-2 rounded m-1 flex justify-center items-center">React</div>
                <div className="bg-gray-200 p-2 rounded m-1 flex justify-center items-center">Wordpress</div>
                <div className="bg-gray-200 p-2 rounded m-1 flex justify-center items-center">PHP</div>
                <div className="bg-gray-200 p-2 rounded m-1 flex justify-center items-center">SASS</div>
                <div className="bg-gray-200 p-2 rounded m-1 flex justify-center items-center">GIT</div>
                <div className="bg-gray-200 p-2 rounded m-1 flex justify-center items-center">Github</div>
                <div className="bg-gray-200 p-2 rounded m-1 flex justify-center items-center">Responsive Design</div>
                <div className="bg-gray-200 p-2 rounded m-1 flex justify-center items-center">SEO</div>
                <div className="bg-gray-200 p-2 rounded m-1 flex justify-center items-center">Terminal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }