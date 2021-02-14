

export const ContactCard: React.FC<{ contact: Contact }> = ({ contact }) => {
    return (
        <div>
            { contact.name }
        </div>
    )
};
