import { Container, Row, Col } from "react-bootstrap";
import { AboutPic } from "./aboout-pic/AboutPic.component";
import { AboutText } from "./about-text/AboutText.component";

export const About: React.FC<{aboutMe: AboutMe, mySkills: MySkills}> = ({ aboutMe, mySkills }) => {

    return (
        <section className="about" id="about">
            <Container>
                <Row>
                <Col md={12} lg={6}><AboutPic /></Col>
                <Col md={12} lg={6}><AboutText aboutMe={ aboutMe } mySkills={ mySkills }/></Col>
                </Row>
            </Container>
        </section>
    )
};
