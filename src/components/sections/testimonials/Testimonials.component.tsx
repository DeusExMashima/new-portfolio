import { TestimonialCard } from './testimonial-card/TestimonialCard.component';
import { Title } from '../../layout/title/Title.component';
import { TITLE } from '../../../data';
import { Carousel } from 'react-bootstrap';

export const Testimonials: React.FC<{ myTestimonials: Testimonials}> = ({ myTestimonials }) => {
    return (
        <section className="testimonials" id="testimonials">
            <Title titleText={ TITLE.TESTIMONIALS } />
            <div className="testimonials-container" id="testimonials">
                <Carousel>
                { myTestimonials.map(
                    (el: Testimonial)=> (<Carousel.Item><TestimonialCard key={ el.name } testimonial={ el } /></Carousel.Item>)
                )}
                </Carousel>
            </div>
        </section>
    )
};
