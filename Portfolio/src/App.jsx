import React from 'react';
import  Navbar  from './assets/components/Navbar';
import  Hero  from './assets/components/Hero';
import  Tech  from './assets/components/Tech';
import Projects  from './assets/components/Projects';
import Contact  from './assets/components/Contact';


function App() {
  return (
    <>
    <div className="fixed -z-10 min-h-screen w-full[background:radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <main
        className='flex flex-col items-center px-4 md:px-8 lg:px-16'>
          <Navbar />
          <Hero />
          <Tech />
          <Projects />
          <Contact /> 
      </main>
    </>
  );
}

export default App;
