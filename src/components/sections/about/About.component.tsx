import { Title } from "../../layout";
import { TITLE } from "../../../data";

export const About: React.FC<{aboutMe: AboutMe}> = ({ aboutMe }) => {

    return (
        <section className="about" id="about">
            <Title titleText={ TITLE.ABOUT_ME } />
            {
                aboutMe.map(
                    (paragraph: AboutText) => <p>{ paragraph.text }</p>)
            }
        </section>
    )
};
