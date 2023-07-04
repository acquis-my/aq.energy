import { ButtonVariant } from "./Button";
import Container from "./Container";
import PrimaryCard from "./PrimaryCard";
import SunGraphic from "~/../public/images/sun.svg";
import AnimatedImage from "./AnimatedImage";

const CTA: React.FC<{ caption: string }> = ({ caption }) => {
  return (
    <section className="">
      <Container className="py-4">
        <PrimaryCard className="relative overflow-hidden">
          <figure className="absolute inset-0 ">
            <AnimatedImage
              alt=""
              src={SunGraphic}
              className="w-full h-96 mx-auto"
              fill
            />
          </figure>
          <div className="relative flex flex-col items-center mx-auto gap-14 py-12 md:py-14 px-4">
            <p className="text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center">
              {caption}
            </p>
            <div>
              <ButtonVariant href="/quote">Get a Quote</ButtonVariant>
            </div>
          </div>
        </PrimaryCard>
      </Container>
    </section>
  );
};

export default CTA;
