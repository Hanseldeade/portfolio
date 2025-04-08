import WordRotate from "../components/WordRotate";

const Hero = () => {
  const navList = [
    {
      title: "About",
      link: "about",
    },
    {
      title: "Projects",
      link: "projects",
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
          <div className="ml-auto w-fit relative">
            <h1 className="lg:text-9xl sm:text-7xl text-6xl font-semibold">
              JAIKA
            </h1>
            <div className="absolute -left-[32rem] top-1/2 -translate-y-1/2">
              <WordRotate
                className="text-4xl font-semibold text-black dark:text-white sm:text-5xl md:text-7xl whitespace-nowrap"
                words={[
                  "Hello I'm",
                  "Hola, soy",
                  "Bonjour, je suis",
                  "Hallo, ich bin",
                  "Ciao, sono",
                  "Olá, eu sou",
                  "你好, 我是",
                  "こんにちは、私は",
                  "안녕하세요, 저는",
                  "Привет, я",
                  "مرحبًا، أنا",
                ]}
              />
            </div>
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
