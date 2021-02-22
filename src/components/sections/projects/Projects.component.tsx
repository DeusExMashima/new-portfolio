
import { Title } from "../../layout";
import { TITLE } from "../../../data";
import { Badge, Button, Carousel, CarouselItem } from 'react-bootstrap';
import { Image } from "../../image/Image.component";

export const Projects: React.FC<{myProjects: Projects}> = ({ myProjects }) => {
    
    return (
        <section className="projects" id="project">
            <Title titleText={ TITLE.MY_PROJECTS } />
            <Carousel>
                {
                    myProjects.map((project: Project)=> 
                        // import image 
                        (
                        <CarouselItem>
                            <div className="project-img">
                            <Image imgCode={ project.imageCode } altText={`{ Screenshot of ${project.title} }`}/>
                            </div>
                            <Carousel.Caption>
                                <div className="project-caption p-2">
                                    <h4> { project.title } </h4>
                                    <p> { project.caption } </p>
                                    {
                                        project.technology.map(tech => (
                                            <Badge variant="warning" className={`badge-${tech} m-1 p-1`}>
                                                { tech }
                                            </Badge>
                                        ))
                                    }
                                    <div className="actions">
                                        <Button href={ project.githubUrl } className="m-2" variant="info">GitHub Repo</Button>
                                        <Button href={ project.url } className="m-2" variant="info">Live Demo</Button>
                                    </div>
                                </div>
                                
                                </Carousel.Caption>
                            </CarouselItem>
                    )
                    )   
                };
            </Carousel>
            
            
        </section>
    );
};