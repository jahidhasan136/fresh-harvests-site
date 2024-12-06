import { Link } from "react-router-dom";
import blogImage from "../assets/blog/image.svg";
import { FaArrowRight } from "react-icons/fa";

const BlogCards = () => {
  return (
    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="max-w-[384px]">
        <img
          className="w-[384px] h-[260px] object-cover rounded-[20px] mb-6"
          src={blogImage}
          alt="Blog Image"
        />
        <p className="text-b2 text-grey100 mb-2">May 23, 2024</p>
        <h6 className="text-black mb-4">
          Exploring Seasonal Delights: A Guide to What&apos;s Fresh Right Now
        </h6>
        <Link to="#" className="flex items-center gap-3 text-primary button1">
          Read More <FaArrowRight />
        </Link>
      </div>
      <div className="max-w-[384px]">
        <img
          className="w-[384px] h-[260px] object-cover rounded-[20px] mb-6"
          src={blogImage}
          alt="Blog Image"
        />
        <p className="text-b2 text-grey100 mb-2">May 23, 2024</p>
        <h6 className="text-black mb-4">
          Exploring Seasonal Delights: A Guide to What&apos;s Fresh Right Now
        </h6>
        <Link to="#" className="flex items-center gap-3 text-primary button1">
          Read More <FaArrowRight />
        </Link>
      </div>
      <div className="max-w-[384px]">
        <img
          className="w-[384px] h-[260px] object-cover rounded-[20px] mb-6"
          src={blogImage}
          alt="Blog Image"
        />
        <p className="text-b2 text-grey100 mb-2">May 23, 2024</p>
        <h6 className="text-black mb-4">
          Exploring Seasonal Delights: A Guide to What&apos;s Fresh Right Now
        </h6>
        <Link to="#" className="flex items-center gap-3 text-primary button1">
          Read More <FaArrowRight />
        </Link>
      </div>
      <div className="max-w-[384px]">
        <img
          className="w-[384px] h-[260px] object-cover rounded-[20px] mb-6"
          src={blogImage}
          alt="Blog Image"
        />
        <p className="text-b2 text-grey100 mb-2">May 23, 2024</p>
        <h6 className="text-black mb-4">
          Exploring Seasonal Delights: A Guide to What&apos;s Fresh Right Now
        </h6>
        <Link to="#" className="flex items-center gap-3 text-primary button1">
          Read More <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogCards;
