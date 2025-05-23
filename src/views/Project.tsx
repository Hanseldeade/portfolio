import MarqueeComponent from "@/components/magicui/marqueeComponent";
import ShineBorder from "@/components/magicui/shine-border";

const Gallery = () => {
  const projects = {
    tech: [
      {
        title: "CICS Faculty C-DocS",
        description: "Course Document Submission System for Centralized Review and Approval Process of Course Plans, Weekly Class Expectations, Test Questionnaires, and Table of Specifications",
        technologies: ["Vite", "Firebase", "Vercel"],
        liveUrl: "https://cics-cdocs.vercel.app/login",
        githubUrl: "https://github.com/keni-uyehara/Software-Engineering-2-CICS-Faculty-C-DocS-",
        image: "/projects/Tech/Cdocs.png"
      },
      // Add more tech projects here
    ],
    arts: [
      // Add arts projects here when ready
    ]
  };

  return (
    <section className="w-full min-h-screen px-5 py-10 font-secondary relative bg-[#020817]" id="projects">
      <div className="max-w-[1400px] mx-auto w-full mt-10">
        <div className="flex gap-5">
          <h1 className="text-5xl font-semibold">Projects</h1>
          <svg
            viewBox="0 0 263 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-64 invert"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M182.764 0.15354C173.529 0.115331 165.759 0.0746242 161.749 0.0384913C153.827 -0.0328871 135.034 -0.00222449 119.984 0.107546C108.415 0.191621 89.4547 0.401787 72.242 0.618017C67.4288 0.603015 62.5535 0.584235 57.7492 0.561714C14.8297 0.360559 9.32448 0.390636 7.15262 0.838144C4.90273 1.302 4.89421 1.34147 7.04158 1.35569C7.63071 1.35959 8.23504 1.38767 8.7519 1.43061C7.79347 1.49448 7.23877 1.57077 6.81858 1.66275C6.72492 1.68327 6.63527 1.70298 6.54963 1.72192C3.24112 1.59555 2.76371 1.66679 3.29769 2.1763C3.41734 2.29044 3.40706 2.42187 3.28959 2.5564C2.96774 2.60206 2.87742 2.68324 2.94694 2.81008C2.62526 2.98572 2.14099 3.1512 1.54652 3.27369C-0.670458 3.73052 -0.608796 3.7695 2.41571 3.82339L2.55867 3.82589C2.28754 3.9414 1.94665 4.04775 1.55128 4.1343C-0.601611 4.60559 -0.534602 4.64415 2.49601 4.67798C4.29004 4.69798 6.20823 4.6997 6.75859 4.68183C7.21504 4.66698 8.77045 4.89128 10.4715 5.20838C9.16665 5.2488 9.60747 5.31143 11.4644 5.46332C11.665 5.47973 11.8616 5.49726 12.0535 5.51575C12.9553 5.68249 13.9104 5.81859 14.9184 5.92402C15.9633 6.14858 16.1506 6.35275 14.8306 6.36289C10.9748 6.39249 15.7359 6.95289 24.7101 7.52577C34.4746 8.14909 35.0201 8.14956 82.6215 7.57661C92.7626 7.45456 103.19 7.31319 112.657 7.17227C117.974 7.21823 124.408 7.25712 130.987 7.28316C135.983 7.33553 141.05 7.38087 145.762 7.41383C173.546 7.60892 242.975 7.70029 233.725 7.52959C225.855 7.38437 229.951 7.0828 242.397 6.89116C248.814 6.79236 254.303 6.56851 254.597 6.39375C254.89 6.21898 256.838 6.08731 258.925 6.10113C261.751 6.11984 262.742 5.97319 262.804 5.52725C262.827 5.35717 262.664 5.22251 262.24 5.11135C262.779 5.0167 263 4.87048 263 4.65745C263 4.25425 261.981 4.05673 258.928 3.9132C260.265 3.90478 260.565 3.87356 259.982 3.79289C260.405 3.72021 260.347 3.57583 260.015 3.32726C259.902 3.2427 259.858 3.1473 259.875 3.04725C260.346 3.02624 260.343 2.99335 259.916 2.93942C260.068 2.6768 260.603 2.39814 261.394 2.20752C263.415 1.72043 263.343 1.68239 260.387 1.67123C258.768 1.66514 257.047 1.67549 256.377 1.6945C255.921 1.58375 254.678 1.42835 252.805 1.24795C252.37 1.17203 251.92 1.08952 251.473 1.00281C248.945 0.511987 246.034 0.273657 242.746 0.28822C242.012 0.291476 241.061 0.29369 239.922 0.294943C233.14 -0.0559573 224.935 -0.0256605 185.827 0.140102C184.809 0.14442 183.787 0.148902 182.764 0.15354ZM22.3978 2.1241C22.2353 2.13063 22.0743 2.13721 21.915 2.14384C21.5227 2.1257 21.1328 2.10673 20.7467 2.08697C21.3003 2.09839 21.8516 2.11081 22.3978 2.1241ZM12.0784 1.29663C12.9552 1.27443 13.9796 1.25454 15.1827 1.23658C12.9664 1.20872 12.0134 1.22141 12.0784 1.29663Z"
              fill="black"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-16 mt-10">
          {/* Tech Projects Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold mb-6">Tech</h2>
            <div className="flex justify-center">
              {projects.tech.map((project, index) => (
                <div key={index} className="w-full max-w-2xl">
                  <ShineBorder
                    borderRadius={12}
                    borderWidth={2}
                    duration={8}
                    color={["#3b82f6", "#06b6d4"]}
                  >
                    <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 w-full">
                      <div className="relative w-full h-48">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white flex items-center gap-2"
                          >
                            <span>live website</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white flex items-center gap-2"
                          >
                            <span>github repo</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </ShineBorder>
                </div>
              ))}
              {projects.tech.length === 0 && (
                <p className="text-gray-400">Tech projects coming soon...</p>
              )}
            </div>
          </div>

          {/* Arts & Design Projects Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold mb-6">Arts & Design</h2>

            <MarqueeComponent />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
