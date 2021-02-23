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
                <Button
                    className="bg-white border-white m-1"
                    onClick={(e)=> {e.preventDefault(); e.stopPropagation();}}>
                    <Image imgCode={ skill.imageCode } altText={ skill.name } />
                </Button>
            </OverlayTrigger>
        </div>
    )
};
