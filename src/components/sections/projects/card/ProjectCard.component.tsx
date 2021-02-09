interface ProjectCardProps {
    project: Project
}

export const ProjectCard = (project: Project) => {

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
