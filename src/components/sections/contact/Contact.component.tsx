export const Contact: React.FC<{ contacts: Contacts }> = ({ contacts }) => {
    return (
        <div>
            { contacts.map((contact: Contact) => (<div>{contact.name}</div>)) }
        </div>
    )
};
