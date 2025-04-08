import { motion } from "framer-motion";

const Hero = () => {
  const navList = [
    {
      title: "About",
      link: "about",
    },
    {
      title: "Gallery",
      link: "gallery",
    },
    {
      title: "Contact",
      link: "contact",
    },
  ];

  return (
    <section className="w-full min-h-screen sm:px-10 px-5 py-10 relative font-secondary">
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent to-black z-10"></div>

      <div className="max-w-[1500px] mx-auto w-full flex md:flex-row flex-col relative z-10">
        <div className="w-full">
          <ul className="flex gap-10 w-fit sm:mx-0 mx-auto">
            {navList.map((items) => (
              <a href={`#${items.link}`} className="" key={items.title}>
                <li className="">{items.title}</li>
              </a>
            ))}
          </ul>
        </div>
        <div className="sm:w-full w-fit mx-auto sm:mx-0">
          <div className="ml-auto w-fit">
            <h1 className="lg:text-9xl sm:text-7xl text-6xl font-semibold">
              JAIKA
            </h1>
            <div className="flex">
              <h1 className="sm:text-7xl lg:text-9xl text-6xl font-semibold">
                SANGUAL
              </h1>
              <div className="m-4 ml-6">
                <p className="">Tatuaodra</p>
                <p className="">@jaikasangual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
