export function AboutMe(){
  return(
      <div className="container-fluid mx-auto p-4 bg-gray-100">
          <h2 className="text-center text-6xl font-bold">ABOUT ME</h2>
          <div className="flex justify-center items-center">
    <div className="border-b-4 border-purple-500 pb-2 w-[100px]"></div>
</div>
          <p className='text-center'>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms <br />of programming and technology
        </p>
        

          <div className=" container mx-auto p-8 flex mt-8">
              <div className="p-5 w-2/4">
                  <h3 className="text-3xl font-bold mb-2">Get to know me!</h3>
                  <p>I'm a <strong>Frontend Focused Web Developer</strong> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
                  I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <strong>Linkedin</strong> and <strong>Instagram</strong> where I post useful content related to Web Development and Programming

                  I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.</p>
                  <button className="py-5 px-14 mt-4 font-bold text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                        PROYECTOS
                    </button>              
                    </div>
              <div className="w-2/4 flex justify-center items-center">
                  <div className="w-3/4">
                      <h3 className="text-3xl font-bold mb-2">My Skills</h3>
                      <div className="skills grid grid-cols-5">
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
  )
}