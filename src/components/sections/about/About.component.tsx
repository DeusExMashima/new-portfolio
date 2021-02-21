import { Container, Row, Col } from "react-bootstrap";
import { AboutPic } from "./aboout-pic/AboutPic.component";
import { AboutText } from "./about-text/AboutText.component";

export const About: React.FC<{aboutMe: AboutMe, mySkills: MySkills}> = ({ aboutMe, mySkills }) => {

    return (
        <section className="about" id="about">
            <Container>
                <Row>
                <Col xs={12} md={6}><AboutPic /></Col>
                <Col xs={12} md={6}><AboutText aboutMe={ aboutMe } mySkills={ mySkills }/></Col>
                </Row>
            </Container>
        </section>
    )
};
