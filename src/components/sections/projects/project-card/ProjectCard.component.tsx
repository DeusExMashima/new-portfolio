export const ProjectCard: React.FC<{project: Project}> = ({ project }) => {

    const {
        title,
        url,
        githubURL,
        image,
        caption,
        description,
        technology,
        teamOrIndividual,
        role,
        projectType
    } = project

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            {technology.map((tech: string) => (<span>{tech}</span>))}
        </div>
    )
};
