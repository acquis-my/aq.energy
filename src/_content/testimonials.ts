interface Testimonial {
  quote: string;
  src?: string;
  size?: number;
  author: string;
  location: string;
  company?: string;
}

export const testimonials = [
  {
    quote:
      "Professional team with good response time. Even after sales service is good when i have log in issues with the app.  Enjoyed engaging them.",
    src: "https://g.co/kgs/NJ31RL",
    author: "Alex Wong",
    location: "",
  },
  {
    quote:
      "Smooth and fast process from application until commissioning of my solar power system. They also follow up on system's performance a few months after.",
    src: "https://g.co/kgs/sLFCdf",
    author: "Iqbal Shamsudin",
    location: "",
  },
  {
    quote:
      "Good and efficient service. Very quickly they found out the inverter was not working properly and replace a new one for us.",
    src: "https://g.co/kgs/icPXHd",
    author: "Soo Soo",
    location: "",
  },
] satisfies Testimonial[];
