interface Story {
    id: string,
    text: string
}

interface Stories extends Array<Story> {}

interface UserStory {
    id: string,
    name: string,
    code: string,
    stories: Stories
}

interface UserStories extends Array<UserStory> {}