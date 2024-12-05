import personImg from "../assets/testimonial/person.svg";
import vectorIcon from "../assets/testimonial/vector.svg";

const TestimonialCards = () => {
  return (
    <div className="flex items-center gap-[83px]">
      <div className="relative w-full">
        <img
          className="absolute right-0 -top-16"
          src={vectorIcon}
          alt="Vector Icon"
        />
        <img
          className="rounded-[200px] w-[287px] h-[397px] object-cover"
          src={personImg}
          alt="Person Image"
        />
      </div>
      <div className="p-8 bg-grey20 rounded-3xl">
        <p className="text-grey100 text-b1 mb-8">
          &#34;I absolutely love Fresh Harvest! The quality of their produce is
          outstanding. It&apos;s always fresh, flavorful, and delicious. The
          convenience of ordering online and having it delivered to my doorstep
          saves me so much time. Fresh Harvest has become my go-to for all my
          fruit and vegetable needs.
        </p>
        <p className="text-b2 font-bold">
          Jane Doe - <span className="font-normal">Professional chef</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCards;