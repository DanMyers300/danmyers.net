import Hero from './components/Hero'

function App() {
  return (
    <>
      <main className="bg-black absolute w-screen h-screen">

        {/* Hero Container */}
        <div className="flex flex-col mt-15 items-center justify-center">
          <Hero />
          <p className="text-white mt-5 text-2xl font-bold"> Dan Myers </p>
          <p className="text-white mt-2"> Software Engineer </p>
        </div>
        <div className="flex justify-center space-x-8 mt-8">
        <a
          href="https://www.linkedin.com/in/danpmyers/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-600 transition-colors"
        >
          <FaLinkedin className="text-4xl" />
        </a>
        <a
          href="https://git.danmyers.net"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-600 transition-colors"
        >
          <FaGithub className="text-4xl" />
        </a>
      </div>


      </main>
    </>
  )
}

export default App
