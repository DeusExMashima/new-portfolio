import { SkillBadge } from './skill-badge/SkillBadge.component';
import { Title } from "../../layout";
import { TITLE } from "../../../data";

export const SkillList: React.FC<{ mySkills: MySkills}> = ({ mySkills }) => {
    return (
        <section className="skills" id="skills">
            <Title titleText={ TITLE.MY_SKILLS } />
            { mySkills.map(
                (skill: Skill)=> <SkillBadge { ...skill }/>
            )}
        </section>
    )
};
