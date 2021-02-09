import { ProjectCard } from './cards/ProjectCard.component';

export const Projects = (projects: Projects) => {
    return (
        <div>
            { projects.map((project: Project) => <ProjectCard project={project}/>) }
        </div>
    )
};