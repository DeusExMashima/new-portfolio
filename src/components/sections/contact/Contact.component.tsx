import { ContactCard } from "./contact-card/ContactCard.component";
import { Title } from "../../layout";
import { TITLE } from "../../../data";


export const Contact: React.FC<{ contacts: Contacts }> = ({ contacts }) => {
    return (
        <section className="contact" id="contact">
            <Title titleText={ TITLE.CONTACT_ME } />
            { contacts.map((contact: Contact) => (<ContactCard contact={ contact } />)) }
        </section>
    )
};
