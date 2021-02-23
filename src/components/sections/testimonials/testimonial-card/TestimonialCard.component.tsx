import { Card} from "react-bootstrap";

export const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {

    
    return (
        <Card className={`testimonial-card d-flex flex-column justify-content-between testimonial-${testimonial.name} p-4 text-center`} id={`testimonial-${ testimonial.name }`}>
           <em>
            <h3 className="text-dark"><strong>&ldquo;</strong></h3>
            { testimonial.testimonials.map((each: string) => (<p>{ each }</p>))}
            <h3 className="text-info"><strong>&rdquo;</strong></h3>
            </em>
            <div className="text-dark m-3 d-flex flex-column text-center">
            <strong>{testimonial.name}</strong>
            {testimonial.position}
            </div>
        </Card>
    )
};
