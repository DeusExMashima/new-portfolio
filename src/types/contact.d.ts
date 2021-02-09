interface Contact {
    name: string;
    contactId: string;
    url: string,
}

interface Contacts extends Array<Contact> {}