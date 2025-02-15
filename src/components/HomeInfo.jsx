import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box flex flex-col items-center gap-3 px-4 py-3 rounded-xl 
      bg-white/20 backdrop-blur-md text-white text-center border border-white/30 
      shadow-sm transition-all duration-300 hover:scale-105 max-w-xs">
    
    <p className="font-medium text-sm sm:text-lg">{text}</p>

    <Link 
      to={link} 
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium 
      bg-white/30 text-white rounded-lg shadow-md hover:bg-white/40 
      transition-all duration-300">
      {btnText}
      <img src={arrow} alt="arrow icon" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-lg sm:leading-snug text-center 
      bg-white/20 text-white py-3 px-6 rounded-lg shadow-sm backdrop-blur-md">
      Hi, I am <span className="font-semibold">Jaydeep</span> 👋
      <br />
      A software developer from India.
    </h1>
  ),
  2: <InfoBox text="Led multiple projects to success. Curious about new things!" link="/projects" btnText="Portfolio" />,
  3: <InfoBox text="Worked with various technologies and built a diverse skill set." link="/about" btnText="Learn More" />,
  4: <InfoBox text="Need a project done or looking for a developer? Let's connect!" link="/contact" btnText="Let's Talk" />,
};

const HomeInfo = ({ currentStage }) => {
  return (
    <div className="absolute top-20 left-0 right-0 flex justify-center z-10">
      {renderContent[currentStage] || null}
    </div>
  );
};

export default HomeInfo;
