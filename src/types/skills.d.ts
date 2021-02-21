interface Skill {
    id: number;
    name: string;
    imageCode: string;
}

interface MySkills extends Array<Skill> {}