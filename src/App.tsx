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


  return (
    <>
    <Header />
    <About aboutMe={ DATA.ABOUT }/>
    <SkillList mySkills={ DATA.MY_SKILLS } />
    <Projects myProjects={ DATA.PROJECTS }/>
    <Contact contacts={ DATA.CONTACT }/>
    <Footer />
    </>
  );
}

export default App;
