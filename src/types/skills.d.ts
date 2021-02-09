interface Skill {
    id: number;
    skillName: string;
}

interface MySkills extends Array<Skill> {}