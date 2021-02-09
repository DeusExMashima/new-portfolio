import { ExecFileSyncOptionsWithBufferEncoding } from "child_process";

interface Skill {
    id: number;
    skills: string;
}

interface Skills extends Array<Skill> {}