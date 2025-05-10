import React from 'react';
import Hero from './Hero.tsx';

const Resume: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 text-gray-100 min-h-screen px-4 sm:px-6 py-8">
      {/* Hero Section */}
      <Hero />

      {/* Download Resume Button */}
      <a
        href="/resume.pdf"
        download
        className="
          mt-8 bg-gradient-to-r from-purple-600
          to-violet-600 text-white px-6 py-3 rounded-lg
          shadow-lg hover:shadow-xl hover:from-purple-700
          hover:to-violet-700 transition duration-200 inline-block
        "
      >
        Download Resume
      </a>

      {/* Resume Header */}
      <div className="text-3xl sm:text-4xl font-extrabold text-white mt-12">
        Resume
      </div>

      {/* Skills Section */}
      <section className="w-full mt-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-purple-400 mb-6">
          Skills
        </h2>
        <div className="text-base sm:text-lg leading-relaxed space-y-4">
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
        </div>
      </section>

      {/* Divider */}
      <div className="w-full mt-10 mb-10">
        <hr className="border-gray-700" />
      </div>

      {/* Experience Section */}
      <section className="w-full">
        <h2 className="text-2xl sm:text-3xl font-semibold text-purple-400 mb-6">
          Experience
        </h2>

        {/* StateFarm */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-5 sm:p-6 mb-8 hover:shadow-xl transition duration-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              StateFarm
            </h3>
            <p className="text-sm text-gray-400 mt-2 sm:mt-0">
              Feb 2024 - Present
            </p>
          </div>
          <p className="italic text-gray-300 mt-2">
            Software Engineer (Hybrid)
          </p>
          <ul className="list-disc list-inside mt-4 pl-5 space-y-3 text-gray-200 text-sm sm:text-base">
            <li>
              Collaborated on the successful deflection of 1M+ customer contacts
              per month via AI-powered bots and self-service knowledge portals,
              exceeding team efficiency targets and reducing manual workload.
            </li>
            <li>
              Spearheaded the reduction of technical debt by personally removing
              over 200 AWS Lambdas across environments and updating over 100
              necessary Lambdas to the most recent runtime.
            </li>
            <li>
              Designed and implemented a modular AWS Secrets Manager pipeline to
              facilitate seamless and secure transportation of secrets between
              AWS and Azure, enhancing cross-cloud integration and operational
              efficiency.
            </li>
          </ul>
        </div>

        {/* Fort Worth Gasket */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-5 sm:p-6 mb-8 hover:shadow-xl transition duration-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Fort Worth Gasket
            </h3>
            <p className="text-sm text-gray-400 mt-2 sm:mt-0">
              April 2023 - Feb 2024
            </p>
          </div>
          <p className="italic text-gray-300 mt-2">
            Contract Full-Stack Engineer (Remote)
          </p>
          <ul className="list-disc list-inside mt-4 pl-5 space-y-3 text-gray-200 text-sm sm:text-base">
            <li>
              Lead the design and development of a containerized, full-stack,
              natural language processing application.
            </li>
            <li>
              Vectorized inventory data using ChromaDB for use in
              resource-augmented generation.
            </li>
            <li>
              Trained custom named entity recognition language models capable of
              97% accuracy.
            </li>
            <li>
              Created an HTML/JS front end for the chatbot utilizing a back-end
              API written in Python with Flask.
            </li>
            <li>
              Separated each service into its own Docker container and
              orchestrated containers with Docker Compose.
            </li>
            <li>
              Consulted management on hardware choice for natural language
              processing solutions.
            </li>
            <li>
              Deployed containerized application on a virtualized Linux
              environment to employer hardware.
            </li>
          </ul>
        </div>

        {/* MuseWork */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-5 sm:p-6 mb-8 hover:shadow-xl transition duration-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h3 className="text-lg sm:text-xl font-bold text-white">MuseWork</h3>
            <p className="text-sm text-gray-400 mt-2 sm:mt-0">
              July 2022 - Dec 2023
            </p>
          </div>
          <p className="italic text-gray-300 mt-2">
            Contract Full-Stack Engineer (Remote)
          </p>
          <ul className="list-disc list-inside mt-4 pl-5 space-y-3 text-gray-200 text-sm sm:text-base">
            <li>
              Consulted management to plan a custom AWS chatbot for a client:
              Waterloo-Greenway Conservancy.
            </li>
            <li>
              Lead solo development of client chatbot which utilizes Lex v2,
              Lambda, SNS, Pinpoint, and Cloudwatch.
            </li>
            <li>
              Automated testing of chatbot with local JS functions. Handled
              thousands of texts for a year without fail.
            </li>
            <li>
              Collaborated with the design team to build ReactJS components for
              a TXDOT educational website.
            </li>
            <li>
              Pair-programmed with a senior developer to create the final layout
              and integrate components.
            </li>
          </ul>
        </div>
      </section>

      {/* Add space at the bottom */}
      <div className="mt-16"></div>
    </div>
  );
};

export default Resume;

