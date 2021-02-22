import { Image } from '../../../image/Image.component';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

export const SkillBadge: React.FC<{ skill: Skill }> = ({ skill }) => {

    return (
        <div className={`${skill.name}`} id={`img-container ${ skill.name }`}>
            <OverlayTrigger
                key={ skill.name }
                placement="top"
                overlay={
                    <Tooltip id={`tooltip-${ skill.name }`}>
                        <strong>{ skill.name }</strong>
                    </Tooltip>
                }
            >
                <Button variant="light">
                    <Image imgCode={ skill.imageCode } altText={ skill.name } />
                </Button>
            </OverlayTrigger>
        </div>
    )
};
