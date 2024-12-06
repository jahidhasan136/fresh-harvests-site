import CenterHeading from "../../components/subHeading/CenterHeading";
import BlogCards from "../../sections/BlogCards";

const Blog = () => {
  return (
    <div className="container xs:mt-[64px] lg:mt-[150px]">
      {/* sub heading */}
      <div className="grid gap-4 text-center">
        <CenterHeading value="Our Blog" />
        <h2 className="text-black xs:text-h4 md:text-h2">
          Fresh Harvests Blog
        </h2>
        <p className="xs:text-xs md:text-b3 text-grey100">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </div>

      {/* Blog cards */}
      <BlogCards />
    </div>
  );
};

export default Blog;
