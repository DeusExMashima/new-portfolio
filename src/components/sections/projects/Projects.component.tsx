import { ProjectCard } from './card/ProjectCard.component';

export const Projects = (projects: Projects) => {
    return (
        <div>
            { projects.map((project: Project) => <ProjectCard {...project}/>) }
        </div>
    )
};