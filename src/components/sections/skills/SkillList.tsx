import { SkillBadge } from './skill-badge/SkillBadge.component';

export const SkillList = (mySkills: MySkills) => {
    return (
        <section>
            { mySkills.map(
                (skill: Skill)=> <SkillBadge { ...skill }/>
            )}
        </section>
    )
};
