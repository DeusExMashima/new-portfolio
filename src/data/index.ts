import ABOUT from './about.json';
import CONTACT from './contact.json';
import PROJECTS from './projects.json';
import SKILLS from './skills.json';
import USER_STORIES from './user-stories.json';
import NAV_MENU from './menu.json'
import MY_TESTIMONIALS from './testimonial.json'

export const ABOUT_ME = "ABOUT"
export const CONTACT_ME = "CONTACT"
export const MY_PROJECTS = "MY_PROJECTS"
export const MY_SKILLS = "MY_SKILLS"
export const ALL_ICONS = "ICONS"
export const MY_USER_STORIES = "MY_USER_STORIES"
export const TESTIMONIALS = "TESTIMONIALS"

export const DATA = {
    ABOUT_ME: ABOUT,
    CONTACT_ME: CONTACT,
    MY_PROJECTS: PROJECTS,
    MY_SKILLS: SKILLS,
    MY_USER_STORIES: USER_STORIES,
    TESTIMONIALS: MY_TESTIMONIALS
}

export const TITLE = {
    ABOUT_ME: "A Little Bit About Me",
    MY_SKILLS: "My Proficiencies...",
    MY_PROJECTS: "Projects I worked on...",
    MY_USER_STORIES: "My User Stories...",
    CONTACT_ME: "Contact Me",
    TESTIMONIALS: "Colleagues' Testimonials..."
}

export const MENU = NAV_MENU

export const MAIN_CONFIG = {
    "IMG_BASE": "../../assets/",
    "IMG_ICON_FILEPATH": "svg-icons/",
    "IMG_PHOTO_FILEPATH": "",
}

export const CODES = [ ABOUT_ME, MY_SKILLS, MY_PROJECTS, CONTACT_ME ]
