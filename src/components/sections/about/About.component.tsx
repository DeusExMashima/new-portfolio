export const About: React.FC<{aboutMe: AboutMe}> = ({ aboutMe }) => {
    return (
        <div>
            {
                aboutMe.map(
                    (paragraph: AboutText) => <p>{ paragraph.text }</p>)
            }
        </div>
    )
};
