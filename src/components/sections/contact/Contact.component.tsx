import { ContactCard } from "./contact-card/ContactCard.component";

export const Contact: React.FC<{ contacts: Contacts }> = ({ contacts }) => {
    return (
        <div>
            { contacts.map((contact: Contact) => (<ContactCard contact={ contact } />)) }
        </div>
    )
};
