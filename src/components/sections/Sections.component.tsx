import { About } from './about/About.component';
import { SkillList } from './skills/SkillList.component';
import { Projects } from './projects/Projects.component';
import { Contact } from './contact/Contact.component';

import { DATA } from '../../data'
import { Container } from 'react-bootstrap';

export const Sections = () => {
    
    return (
        <Container>
            <About aboutMe={ DATA.ABOUT_ME } />
            <SkillList mySkills={ DATA.MY_SKILLS }/>
            <Projects myProjects={ DATA.MY_PROJECTS } />
            <Contact contacts={ DATA.CONTACT_ME } />
        </Container>
    )
}