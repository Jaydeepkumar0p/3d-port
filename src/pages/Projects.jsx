import { projects } from "../constatnts";
import arrow from "../assets/icons/arrow.svg"; // Ensure correct path
import CTA from "../components/CTA"; // Import CTA component

const Projects = () => {
  return (
    <section className="max-container px-6 py-16 md:py-24">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        My  
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 font-semibold">
          {" "}Projects
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl">
        Over the years, I’ve developed several projects, but these are the ones closest to my heart.  
        Many of them are open-source, so feel free to explore, contribute, and bring in your own ideas!
      </p>

      {/* Projects Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(({ name, iconUrl, theme, description, link }) => (
          <div
            key={name}
            className={`relative p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out ${theme}`}
          >
            {/* Project Icon */}
            <div className="w-16 h-16 flex justify-center items-center bg-white rounded-xl shadow-md mx-auto">
              <img src={iconUrl} alt={`${name} icon`} className="w-12 h-12 object-contain" />
            </div>

            {/* Project Details */}
            <h3 className="mt-6 text-2xl font-semibold text-gray-900 text-center">{name}</h3>
            <p className="mt-3 text-gray-600 text-center">{description}</p>

            {/* Live Link */}
            {link && (
              <div className="mt-4 flex justify-center items-center gap-2">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-500 flex items-center gap-1 hover:text-indigo-600 transition-all"
                >
                  Live Project
                  <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <CTA />
    </section>
  );
};

export default Projects;
