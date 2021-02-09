export const About = (aboutMe: AboutText[]) => {
    return (
        <div>
            {
                aboutMe.map(
                    (paragraph: AboutText) => <p>{ paragraph.text }</p>)
            }
        </div>
    )
};
