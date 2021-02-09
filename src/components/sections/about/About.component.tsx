export const About = (aboutMe: AboutMe) => {
    return (
        <div>
            {
                aboutMe.map(
                    (paragraph: AboutText) => <p>{ paragraph.text }</p>)
            }
        </div>
    )
};
