import CenterHeading from "../../components/subHeading/CenterHeading";
import TestimonialCards from "../../sections/TestimonialCards";

const Testimonial = () => {
  return (
    <div className="container mt-[240px]">
      {/* sub heading */}
      <div className="grid gap-4 text-center">
        <CenterHeading value="Testimonial" />
        <h2>What Our Customers Say</h2>
        <p className="text-b3 text-grey100">
          Don&apos;t just take our word for it&#45;here&apos;s what some of our
          customers have to say about their experience with Fresh Harvest:
        </p>
      </div>

      {/* testimonials card */}
      <div className="mt-[74px]">
        <TestimonialCards />
      </div>
    </div>
  );
};

export default Testimonial;
