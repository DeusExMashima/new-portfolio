import { SkillBadge } from './skill-badge/SkillBadge.component';

export const SkillList: React.FC<{ mySkills: MySkills}> = ({ mySkills }) => {
    return (
        <section>
            { mySkills.map(
                (skill: Skill)=> <SkillBadge { ...skill }/>
            )}
        </section>
    )
};
