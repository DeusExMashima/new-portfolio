import React from 'react';
import {
  Header,
  Footer,
  About,
  Skills,
  Projects,
  Contact
} from './components';
import { DATA } from './data'
function App() {

  const { ABOUT, SKILLS, PROJECTS, CONTACT } = DATA

  return (
    <>
    <Header />
    <About aboutMe={ ABOUT }/>
    <Skills skills={ SKILLS } />
    <Projects projects={ PROJECTS }/>
    <Contact contacts={ CONTACT }/>
    <Footer />
    </>
  );
}

export default App;
