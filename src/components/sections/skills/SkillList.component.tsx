import { TITLE } from '../../../data';
import { Title } from '../../layout';
import { SkillBadge } from './skill-badge/SkillBadge.component';

export const SkillList: React.FC<{ mySkills: MySkills}> = ({ mySkills }) => {
    return (
        <section className="skills" id="skills">
            <Title titleText={ TITLE.MY_SKILLS } />
            <div className="skills d-flex flex-wrap justify-content-center" id="skills">
                { mySkills.map(
                    (skill: Skill)=> <SkillBadge key={ skill.id } skill={ skill } />
                )}
            </div>
        </section>
    )
};
