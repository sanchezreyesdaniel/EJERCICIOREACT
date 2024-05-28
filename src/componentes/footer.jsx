import linkedinIcon from '../assets/linkedin-ico.png';
import githubIcon from '../assets/github-ico.png';
import twitterIcon from '../assets/twitter-ico.png';
import devToIcon from '../assets/blog-ico.png';
import youtubeIcon from '../assets/yt-ico.png';

export function Footer() {
  return (
    <div className="bg-black p-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center">
        
        <div className="order-1 lg:order-1 max-w-lg lg:max-w-none text-center lg:text-left">
          <h2 className="text-white text-3xl">Ram Maheshwari</h2>
          <p className="mt-5 text-white lg:w-[530px]">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product.
          </p>
        </div>
        <div className="order-2 lg:order-2 mb-8 lg:mb-0">
          <h1 className="text-white text-3xl mb-4 lg:mb-0">SOCIAL</h1>
          <div className="flex mt-2">
            <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/rammcodes">
              <img className="w-8 h-8 mr-2" src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/rammcodes">
              <img className="w-8 h-8 mr-2" src={githubIcon} alt="GitHub" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/rammcodes">
              <img className="w-8 h-8 mr-2" src={twitterIcon} alt="Twitter" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://dev.to/rammcodes">
              <img className="w-8 h-8 mr-2" src={devToIcon} alt="Dev.to" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCIb8_J9lqtiWGMIOdQ5DVsg">
              <img className="w-8 h-8" src={youtubeIcon} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 mt-8">
        <hr className="border-gray-700" />
        <p className="text-white text-center text-sm mt-5">
          © Copyright 2024. Made by Ram Maheshwari
        </p>
      </div>
    </div>
  );
}
