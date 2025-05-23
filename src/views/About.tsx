import TechStack from "../components/TechStack";
import { FadeIn, FadeInLeft, FadeInRight, ParallaxY } from "../components/ScrollAnimations";

const About = () => {
  return (
    <>
      <section className="w-full h-fit px-5 py-10 sm:pb-[10rem] font-secondary relative" id="about">
        <div className="max-w-[1400px] mx-auto w-full mt-10 relative z-10">
          <FadeIn>
            <div className="flex gap-5">
              <h1 className="text-5xl font-semibold">ABOUT</h1>
              <svg
                viewBox="0 0 263 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-64 invert"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M182.764 0.15354C173.529 0.115331 165.759 0.0746242 161.749 0.0384913C153.827 -0.0328871 135.034 -0.00222449 119.984 0.107546C108.415 0.191621 89.4547 0.401787 72.242 0.618017C67.4288 0.603015 62.5535 0.584235 57.7492 0.561714C14.8297 0.360559 9.32448 0.390636 7.15262 0.838144C4.90273 1.302 4.89421 1.34147 7.04158 1.35569C7.63071 1.35959 8.23504 1.38767 8.7519 1.43061C7.79347 1.49448 7.23877 1.57077 6.81858 1.66275C6.72492 1.68327 6.63527 1.70298 6.54963 1.72192C3.24112 1.59555 2.76371 1.66679 3.29769 2.1763C3.41734 2.29044 3.40706 2.42187 3.28959 2.5564C2.96774 2.60206 2.87742 2.68324 2.94694 2.81008C2.62526 2.98572 2.14099 3.1512 1.54652 3.27369C-0.670458 3.73052 -0.608796 3.7695 2.41571 3.82339L2.55867 3.82589C2.28754 3.9414 1.94665 4.04775 1.55128 4.1343C-0.601611 4.60559 -0.534602 4.64415 2.49601 4.67798C4.29004 4.69798 6.20823 4.6997 6.75859 4.68183C7.21504 4.66698 8.77045 4.89128 10.4715 5.20838C9.16665 5.2488 9.60747 5.31143 11.4644 5.46332C11.665 5.47973 11.8616 5.49726 12.0535 5.51575C12.9553 5.68249 13.9104 5.81859 14.9184 5.92402C15.9633 6.14858 16.1506 6.35275 14.8306 6.36289C10.9748 6.39249 15.7359 6.95289 24.7101 7.52577C34.4746 8.14909 35.0201 8.14956 82.6215 7.57661C92.7626 7.45456 103.19 7.31319 112.657 7.17227C117.974 7.21823 124.408 7.25712 130.987 7.28316C135.983 7.33553 141.05 7.38087 145.762 7.41383C173.546 7.60892 242.975 7.70029 233.725 7.52959C225.855 7.38437 229.951 7.0828 242.397 6.89116C248.814 6.79236 254.303 6.56851 254.597 6.39375C254.89 6.21898 256.838 6.08731 258.925 6.10113C261.751 6.11984 262.742 5.97319 262.804 5.52725C262.827 5.35717 262.664 5.22251 262.24 5.11135C262.779 5.0167 263 4.87048 263 4.65745C263 4.25425 261.981 4.05673 258.928 3.9132C260.265 3.90478 260.565 3.87356 259.982 3.79289C260.405 3.72021 260.347 3.57583 260.015 3.32726C259.902 3.2427 259.858 3.1473 259.875 3.04725C260.346 3.02624 260.343 2.99335 259.916 2.93942C260.068 2.6768 260.603 2.39814 261.394 2.20752C263.415 1.72043 263.343 1.68239 260.387 1.67123C258.768 1.66514 257.047 1.67549 256.377 1.6945C255.921 1.58375 254.678 1.42835 252.805 1.24795C252.37 1.17203 251.92 1.08952 251.473 1.00281C248.945 0.511987 246.034 0.273657 242.746 0.28822C242.012 0.291476 241.061 0.29369 239.922 0.294943C233.14 -0.0559573 224.935 -0.0256605 185.827 0.140102C184.809 0.14442 183.787 0.148902 182.764 0.15354Z"
                  fill="black"
                />
              </svg>
            </div>
          </FadeIn>
          <ParallaxY delay={0.2}>
            <p className="font-medium leading-[1.7rem] mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
          </ParallaxY>

          <div className="mt-8 flex gap-8 md:flex-row flex-col">
            <FadeInLeft delay={0.3} className="md:w-[90rem] relative overflow-hidden">
              <div className="w-full h-[300px] bg-gray-800 border flex items-center justify-center">
                <p className="text-gray-400">Image placeholder</p>
              </div>
            </FadeInLeft>
            <FadeInRight delay={0.4} className="">
              <p className="font-medium leading-[1.7rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <a href="#contact" className="">
                <button className="mt-10 relative transition-all ease-in-out duration-300 hover:scale-[1.1] bg-white text-black px-6 py-2 rounded">
                  Contact Me
                </button>
              </a>
            </FadeInRight>
          </div>
        </div>
      </section>
      <TechStack />
    </>
  );
};

export default About;
