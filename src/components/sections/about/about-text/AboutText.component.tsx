export const AboutText: React.FC<{aboutMe: AboutMe, mySkills: MySkills}> = ({ aboutMe, mySkills }) => {

    return (
        <div className="about-text m-2" id="aboutText">
            {
                aboutMe.map(
                    (each: About) => (
                        <div className="mb-5">
                            <h4 className="text-primary">{ each.subtitle } </h4>
                            { each.paragraph.map((el: AboutText) => (<p>{el.text}</p>) )}
                        </div>)
                )
            }
        </div>
    )
};
