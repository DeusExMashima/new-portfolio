import React from 'react';
import {
  Header,
  Footer,
  About,
  SkillList,
  Projects,
  Contact
} from './components';
import { DATA } from './data'

function App() {

  const { ABOUT, MY_SKILLS, PROJECTS, CONTACT } = DATA

  return (
    <>
    <Header />
    <About { ...ABOUT }/>
    <SkillList { ...MY_SKILLS } />
    <Projects { ...PROJECTS }/>
    <Contact { ...CONTACT }/>
    <Footer />
    </>
  );
}

export default App;
