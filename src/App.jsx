import Hero from './components/Hero.jsx'

function App() {


  return (
    <> 

      <main class="main" id="top" scroll-to-top="scroll-to-top">
        <div class="content">
        
            {/* <Nav/> */}

        <div data-bs-target="#navbar" data-bs-spy="scroll" tabindex="0">
            <Hero/>
            {/* <Other components/> */}
        </div>

      </div>
      </main>

    </>
  )
}

export default App
