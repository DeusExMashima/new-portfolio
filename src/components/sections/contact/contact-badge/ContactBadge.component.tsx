import { Image } from '../../../image/Image.component';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

export const ContactBadge: React.FC<{ contact: Contact }> = ({ contact }) => {
    
    console.log(contact)

    return (
        <div className={`${contact.name}`} id={`img-container ${ contact.name }`}>
            <OverlayTrigger
                key={ contact.name }
                placement="top"
                overlay={
                    <Tooltip id={`tooltip-${ contact.name }`}>
                        <strong>{ contact.name }</strong>
                    </Tooltip>
                }
            >
                <Button variant="light" href={ contact.url }>
                    <Image imgCode={ contact.imageCode } altText={ contact.name } />
                </Button>
            </OverlayTrigger>
        </div>
    )
};
