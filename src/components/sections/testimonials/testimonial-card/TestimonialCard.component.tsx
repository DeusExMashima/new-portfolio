import { Card } from "react-bootstrap";

export const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {

    
    return (
        <Card border="primary" className={`testimonial-card testimonial-${testimonial.name} p-4`} id={`testimonial-${ testimonial.name }`}>
            { testimonial.testimonials.map((each: string) => (<p>{ each }</p>))}
            <div className="people text-info text-right">
            <strong>{testimonial.name}</strong>, {` `}
            <em>{testimonial.position}</em>
            </div>
        </Card>
    )
};
