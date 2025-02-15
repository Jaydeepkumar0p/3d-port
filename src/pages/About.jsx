import { experiences, skills } from "../constatnts";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Ensure styles are included
import { div } from "three/src/nodes/TSL.js";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container px-6 py-16 md:py-24">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Hello, I am{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 font-semibold">
          Jaydeep
        </span>
      </h1>

      {/* Introduction */}
      <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
        I'm a passionate software engineer from India, specializing in building
        applications and fostering technical education through hands-on learning.  
        Currently, I am pursuing my Bachelor's degree at  
        <span className="font-semibold text-gray-800"> Chandigarh University</span>,
        one of India's most trusted and highly ranked private universities.
      </p>

      {/* Skills Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800">My Skills</h3>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map(({ name, imageUrl }, index) => (
            <div
              key={name || index}
              className="flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={imageUrl}
                alt={name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              <p className="mt-3 text-gray-700 font-medium text-center">{name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="py-16">
        <h3 className="text-2xl font-semibold text-gray-800">Work Experience</h3>
        <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-3xl">
          I have worked on various web projects, handling both frontend and backend
          technologies. Collaborating with talented teams, I have gained experience
          in leading projects, optimizing performance, and scaling applications to
          meet real-world demands.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="mt-12">
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              icon={<div>
                <img src={exp.icon}></img>
              </div>
                }
              date={exp.date}
              iconStyle={{ background: exp.iconBg}}
              contentStyle={{ background: "#f3f4f6", color: "#1f2937" }}
              contentArrowStyle={{ borderRight: "7px solid #f3f4f6" }}
            >
              <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
              <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      
        <CTA/>
      
    </section>
  );
};

export default About;
