import { ProjectCard } from './project-card/ProjectCard.component';

export const Projects: React.FC<{myProjects: Projects}> = ({ myProjects }) => {
    return (
        <div>
            { myProjects.map((project: Project) => <ProjectCard project={project}/>) }
        </div>
    )
};