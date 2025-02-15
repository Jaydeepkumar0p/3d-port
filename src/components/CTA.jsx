import { Link } from "react-router-dom";
import { socialLinks } from "../constatnts";

const CTA = () => {
  return (
    <div className="mt-16 flex flex-col items-center text-center bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-lg">
      {/* CTA Message */}
      <p className="text-lg font-semibold text-white">
        Have a project in mind? <br className="sm:block hidden" />
        Let's build something amazing together!
      </p>

      {/* Contact Button */}
      <Link
        to="/contact"
        className="mt-4 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-all"
      >
        Contact Me
      </Link>

      {/* Social Links */}
      <div className="mt-6 flex gap-5">
        {socialLinks.map(({ name, iconUrl, link }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
            title={name}
          >
            <img src={iconUrl} alt={name} className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default CTA;
