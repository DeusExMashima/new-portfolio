import { Badge } from 'react-bootstrap'

export const SkillBadge = (skill: Skill) => {

    return (
        <Badge variant="primary">
            { skill.skillName }
        </Badge>
    )
};
