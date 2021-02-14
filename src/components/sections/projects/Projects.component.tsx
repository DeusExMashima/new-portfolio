import { Title } from "../../layout";
import { TITLE } from "../../../data";
import { Carousel, CarouselItem } from 'react-bootstrap';
import { Image } from "../../image/Image.component";

export const Projects: React.FC<{myProjects: Projects}> = ({ myProjects }) => {
    
    return (
        <section className="projects" id="project">
            <Title titleText={ TITLE.MY_PROJECTS } />
            <Carousel>
                {
                    myProjects.map((project: Project)=> 
                        // import image 
                        (<CarouselItem>
                            <Image imgCode={ project.imageCode }/>
                                <Carousel.Caption>
                                    <h3> { project.title } </h3>
                                    <p> { project.caption } </p>
                                </Carousel.Caption>
                            </CarouselItem>)
                    )   
                };
            </Carousel>
        </section>
    );
};