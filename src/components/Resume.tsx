import React from 'react';
import { FaCode, FaTools } from 'react-icons/fa';

const Resume: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-gray-100 min-h-screen px-4 sm:px-6 ">
      {/* Download Resume Button */}
      <a
        href="/resume.pdf"
        download
        className="
          mt-8 bg-gradient-to-r from-purple-600
          to-violet-600 text-white px-8 py-3 rounded-full
          shadow-lg hover:shadow-2xl hover:from-purple-700
          hover:to-violet-700 transition duration-300 transform hover:scale-105
        "
      >
        Download Resume
      </a>

      {/* Resume Header */}
      <div className="text-4xl sm:text-5xl font-extrabold text-white mt-16">
        My Resume
      </div>

      {/* Skills Section */}
      <section className="w-full mt-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-400 mb-8 flex items-center gap-3">
          <FaCode className="text-purple-500" /> Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-base sm:text-lg leading-relaxed">
          <p>
            <span className="font-bold text-purple-300">Languages:</span>{' '}
            JavaScript/TypeScript | Java | Python | C/C++ | Rust | Nix
          </p>
          <p>
            <span className="font-bold text-purple-300">Development:</span>{' '}
            Git | CI/CD | Linux | Windows | Terraform | Docker
          </p>
          <p>
            <span className="font-bold text-purple-300">Non-technical:</span>{' '}
            Agile | Time management | Typing speed | Self-starter
          </p>
          <p>
            <span className="font-bold text-purple-300">Personal:</span>{' '}
            Problem-Solving | Adaptability | Collaboration | Communication | Leadership
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full mt-16 mb-16">
        <hr className="border-gray-700" />
      </div>

      {/* Experience Section */}
      <section className="w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-400 mb-8 flex items-center gap-3">
          <FaTools className="text-purple-500" /> Experience
        </h2>

        {/* Experience Cards */}
        <ExperienceCard
          company="StateFarm"
          role="Software Engineer (Hybrid)"
          duration="Feb 2024 - Present"
          responsibilities={[
            'Collaborated on the successful deflection of 1M+ customer contacts per month via AI-powered bots and self-service knowledge portals, exceeding team efficiency targets and reducing manual workload.',
            'Spearheaded the reduction of technical debt by personally removing over 200 AWS Lambdas across environments and updating over 100 necessary Lambdas to the most recent runtime.',
            'Designed and implemented a modular AWS Secrets Manager pipeline to facilitate seamless and secure transportation of secrets between AWS and Azure, enhancing cross-cloud integration and operational efficiency.',
          ]}
        />

        <ExperienceCard
          company="Fort Worth Gasket"
          role="Contract Full-Stack Engineer (Remote)"
          duration="April 2023 - Feb 2024"
          responsibilities={[
            'Lead the design and development of a containerized, full-stack, natural language processing application.',
            'Vectorized inventory data using ChromaDB for use in resource-augmented generation.',
            'Trained custom named entity recognition language models capable of 97% accuracy.',
            'Created an HTML/JS front end for the chatbot utilizing a back-end API written in Python with Flask.',
            'Separated each service into its own Docker container and orchestrated containers with Docker Compose.',
            'Consulted management on hardware choice for natural language processing solutions.',
            'Deployed containerized application on a virtualized Linux environment to employer hardware.',
          ]}
        />

        <ExperienceCard
          company="MuseWork"
          role="Contract Full-Stack Engineer (Remote)"
          duration="July 2022 - Dec 2023"
          responsibilities={[
            'Consulted management to plan a custom AWS chatbot for a client: Waterloo-Greenway Conservancy.',
            'Lead solo development of client chatbot which utilizes Lex v2, Lambda, SNS, Pinpoint, and Cloudwatch.',
            'Automated testing of chatbot with local JS functions. Handled thousands of texts for a year without fail.',
            'Collaborated with the design team to build ReactJS components for a TXDOT educational website.',
            'Pair-programmed with a senior developer to create the final layout and integrate components.',
          ]}
        />
      </section>

      {/* Add space at the bottom */}
      <div className="mt-16"></div>
    </div>
  );
};

interface ExperienceCardProps {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  duration,
  responsibilities,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 mb-10 hover:shadow-2xl transition duration-300 transform hover:scale-105">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h3 className="text-xl sm:text-2xl font-bold text-white">{company}</h3>
        <p className="text-sm text-gray-400 mt-2 sm:mt-0">{duration}</p>
      </div>
      <p className="italic text-gray-300 mt-2">{role}</p>
      <ul className="list-disc list-inside mt-4 pl-5 space-y-3 text-gray-200 text-sm sm:text-base">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;

