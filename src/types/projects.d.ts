interface Project {
    project_id: number;
    title: string;
    url: string;
    githubURL: string;
    image: string;
    caption: string;
    description: string;
    technology: string[];
    teamOrIndividual: string;
    role: string;
    projectType: string;
}

interface Projects extends Array<Project> {}