interface AboutText {
    "text": string;
}

interface About {
    "subtitle": string;
    "paragraph": AboutText[]
}

interface AboutMe extends Array<About> {}