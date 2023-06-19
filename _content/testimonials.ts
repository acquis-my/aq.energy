interface Testimonial {
    quote: string;
    src?: string;
    size?: number;
    author: string;
    location: string;
    company?: string;
}

export const testimonials: Testimonial[] = [
    {
        quote: "Professional team with good response time. Even after sales service is good when i have log in issues with the app.  Enjoyed engaging them.",
        src: "https://g.co/kgs/NJ31RL",
        author: "Alex Wong",
        location: ""
    },
    {
        quote: "Smooth and fast process from application until commissioning of my solar power system. They also follow up on system's performance a few months after.",
        src: "https://g.co/kgs/sLFCdf",
        author: "Iqbal Shamsudin",
        location: ""
    },
    {
        quote: "From first meeting to installation, we were well informed. Installation team was good, took care of our house and cleaned up after.",
        src: "https://g.co/kgs/1vmUNp",
        author: "Hellen Fong",
        location: ""
    }
]