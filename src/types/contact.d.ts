interface Contact {
    id: number;
    name: string;
    imageCode: string;
    url: string,
}

interface Contacts extends Array<Contact> {}