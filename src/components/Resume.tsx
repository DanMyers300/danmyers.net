import React from 'react';
import Hero from './Hero.tsx';

const Resume: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-13 min-h-screen">
        <Hero />
        <a
          href="/resume.pdf"
          download
          className="
          mt-10 bg-gradient-to-r from-purple-600
          to-violet-600 text-white px-6 py-3 rounded-lg
          shadow-lg hover:shadow-xl hover:from-purple-700
          hover:to-violet-700 transition duration-200 inline-block"
        >
          Download Resume
        </a>

        {/* Skills */}
        <div className="text-3xl underline text-white mt-10">Resume</div>
        <p className="text-lg text-white mt-10">Skills:</p>
        <p>
          Languages: JavaScript/TypeScript | Java | Python | C/C++ | Rust | Nix
        </p>
        <p className="mt-3">
          Development: Git | CI/CD | Linux | Windows | Terraform | Docker
        </p>
        <p className="mt-3">
          Non-technical: Agile | Time management | Typing speed | Self-starter
        </p>

        {/* StateFarm */}
        <section className="w-full mt-5 text-white">
          <div className="flex justify-between">
            <h2 className="font-bold">StateFarm</h2>
            <p>Feb 2024 - Present</p>
          </div>
          <p className="text-start italic">Software Engineer (Hybrid)</p>
          <ul className="list-disc list-inside mt-5 pl-5">
            <li className="mb-5">
              Collaborated on the successful deflection of 1M+ customer contacts
              per month via AI-powered bots and self-service knowledge portals,
              exceeding team efficiency targets and reducing manual workload.
            </li>
            <li className="mb-5">
              Spearheaded the reduction of technical debt by personally removing
              over 200 AWS Lambdas across environments and updating over 100
              necessary Lambdas to most recent runtime.
            </li>
            <li className="mb-5">
              Designed and implemented a modular AWS Secrets Manager pipeline to
              facilitate seamless and secure transportation of secrets between AWS
              and Azure, enhancing cross-cloud integration and operational
              efficiency.
            </li>
          </ul>
        </section>

        {/* Fort Worth Gasket */}
        <section className="w-full mt-5 text-white">
          <div className="flex justify-between">
            <h2 className="font-bold">Fort Worth Gasket</h2>
            <p>April 2023 - Feb 2024</p>
          </div>
          <p className="text-start italic">Contract Full-Stack Engineer (Remote)</p>
          <ul className="list-disc list-inside mt-5 pl-5">
            <li className="mb-5">
              Lead the design and development of a containerized, full-stack,
              natural language processing application.
            </li>
            <li className="mb-5">
              Vectorized inventory data using ChromaDB for use in
              resource-augmented generation.
            </li>
            <li className="mb-5">
              Trained custom named entity recognition language models capable of
              97% accuracy.
            </li>
            <li className="mb-5">
              Created an HTML/JS front end for the chatbot utilizing a back-end
              API written in Python with Flask.
            </li>
            <li className="mb-5">
              Separated each service into its own Docker container and
              orchestrated containers with Docker Compose.
            </li>
            <li className="mb-5">
              Consulted management on hardware choice for natural language
              processing solutions.
            </li>
            <li className="mb-5">
              Deployed containerized application on a virtualized Linux
              environment to employer hardware.
            </li>
          </ul>
        </section>

        {/* MuseWork */}
        <section className="w-full mt-5 text-white">
          <div className="flex justify-between">
            <h2 className="font-bold">MuseWork</h2>
            <p>July 2022 - December 2023</p>
          </div>
          <p className="text-start italic">Contract Full-Stack Engineer (Remote)</p>
          <ul className="list-disc list-inside mt-5 pl-5">
            <li className="mb-5">
              Consulted management to plan a custom AWS chatbot for a client:
              Waterloo-Greenway Conservancy.
            </li>
            <li className="mb-5">
              Lead solo development of client chatbot which utilizes Lex v2,
              lambda, SNS, Pinpoint, and Cloudwatch.
            </li>
            <li className="mb-5">
              Automated testing of chatbot with local JS functions. Handled
              thousands of texts for a year without fail.
            </li>
            <li className="mb-5">
              Collaborated with the design team to build ReactJS components for
              a TXDOT educational website.
            </li>
            <li className="mb-5">
              Pair-programmed with a senior developer to create the final layout
              and integrate components.
            </li>
          </ul>
        </section>

        {/* Add space at the bottom */}
        <div className="mb-10"></div>
      </div>
    </>
  );
};

export default Resume;

