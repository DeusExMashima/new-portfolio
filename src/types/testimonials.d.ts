interface Testimonial {
    name: string,
    position: string,
    testimonials: string[]
}

interface Testimonials extends Array<Testimonial> {}