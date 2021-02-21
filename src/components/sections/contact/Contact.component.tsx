import { ContactBadge } from './contact-badge/ContactBadge.component';
import { Title } from "../../layout";
import { TITLE } from "../../../data";


export const Contact: React.FC<{ contacts: Contacts }> = ({ contacts }) => {
    return (
        <section className="contact" id="contact">
            <Title titleText={ TITLE.CONTACT_ME } />
            <div className="contact d-flex justify-content-center ">
            { contacts.map((contact: Contact) => (<ContactBadge key={contact.id} contact={ contact } />)) }
            </div>
        </section>
    )
};
