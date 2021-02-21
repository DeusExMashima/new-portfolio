import { AboutPic } from "./aboout-pic/AboutPic.component";
import { AboutText } from "./about-text/AboutText.component";

export const About: React.FC<{aboutMe: AboutMe, mySkills: MySkills}> = ({ aboutMe, mySkills }) => {

    return (
        <section className="about" id="about">
            <div className="about-content d-flex">
                <AboutPic />
                <AboutText aboutMe={ aboutMe } mySkills={ mySkills }/>
            </div>
        </section>
    )
};
