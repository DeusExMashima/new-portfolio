import { About } from './about/About.component';
import { SkillList } from './skills/SkillList.component';
import { Projects } from './projects/Projects.component';
import { Contact } from './contact/Contact.component';
import { UserStories } from './user-stories/UserStories.component';
import { DATA } from '../../data'
import { Container } from 'react-bootstrap';
import { Testimonials } from './testimonials/Testimonials.component';

export const Sections = () => {
    
    return (
        <Container>
            <About aboutMe={ DATA.ABOUT_ME } mySkills={ DATA.MY_SKILLS } />
            <SkillList mySkills={ DATA.MY_SKILLS }/>
            <UserStories myUserStories={ DATA.MY_USER_STORIES } />
            <Projects myProjects={ DATA.MY_PROJECTS } />
            <Testimonials myTestimonials={ DATA.TESTIMONIALS } />
            <Contact contacts={ DATA.CONTACT_ME } />
        </Container>
    )
}