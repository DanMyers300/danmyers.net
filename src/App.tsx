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

      </main>
    </>
  )
}

export default App
