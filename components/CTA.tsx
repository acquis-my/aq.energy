import { ButtonVariant } from "./Button";
import Container from "./Container";
import PrimaryCard from "./PrimaryCard";

const CTA: React.FC<{ caption: string }> = ({ caption }) => {
  return (
    <section className="pb-16">
      <Container className="py-4">
        <PrimaryCard className="relative overflow-hidden">
          <figure className="absolute inset-0 ">
            <img src="sun.svg" className="w-full h-96 mx-auto" />
          </figure>
          <div className="relative flex flex-col items-center mx-auto gap-14 py-14">
            <p className="text-3xl lg:text-4xl text-white font-bold">
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
