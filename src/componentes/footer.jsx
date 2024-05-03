export function Footer() {
    return (
      <div className="bg-black p-8 container-fluid mx-auto p-4">
      <div className="container mx-auto flex justify-between">
        <div className="order-2">
        <h1 className="text-white text-3xl">
  SOCIAL
</h1>


          <div className="flex mt-5">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/rammcodes"
            >
              <img
                className="w-8 h-8 mr-2"
                src="src/assets/linkedin-ico.png"
                alt=""
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/rammcodes"
            >
              <img
                className="w-8 h-8 mr-2"
                src="src/assets/github-ico.png"
                alt=""
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/rammcodes"
            >
              <img
                className="w-8 h-8 mr-2"
                src="src/assets/twitter-ico.png"
                alt=""
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://dev.to/rammcodes">
              <img
                className="w-8 h-8 mr-2"
                src="src/assets/blog-ico.png"
                alt=""
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCIb8_J9lqtiWGMIOdQ5DVsg"
            >
              <img
                className="w-8 h-8"
                src="src/assets/yt-ico.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className=" order-1 max-w-50rem">
        <h2 className="text-white text-3xl">
  Ram Maheshwari
</h2>

          <p className=" mt-5 w-[530px] text-white">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
      </div>

      <div className="container mx-auto p-4 mt-8">
        
        <hr />
        <p className="text-white text-center text-sm mt-5">© Copyright 2024 . Made by Ram Maheshwari</p>
      </div>
    </div>
      
      
    );
  }