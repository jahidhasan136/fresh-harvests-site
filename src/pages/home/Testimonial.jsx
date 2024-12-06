import CenterHeading from "../../components/subHeading/CenterHeading";
import TestimonialCards from "../../sections/TestimonialCards";

const Testimonial = () => {
  return (
    <div className="container xs:mt-[64px] lg:mt-[150px]">
      {/* sub heading */}
      <div className="grid gap-4 text-center">
        <CenterHeading value="Testimonial" />
        <h2 className="xs:text-h4 lg:text-h2">What Our Customers Say</h2>
        <p className="xs:text-xs lg:text-b3 text-grey100">
          Don&apos;t just take our word for it&#45;here&apos;s what some of our
          customers have to say about their experience with Fresh Harvest:
        </p>
      </div>

      {/* testimonials card */}
      <div className="xs:mt-[41px] lg:mt-[74px]">
        <TestimonialCards />
      </div>
    </div>
  );
};

export default Testimonial;
