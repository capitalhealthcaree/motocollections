import Image from "next/image";
import { TestimonialData } from "@/data/Testimonial";
import SlickSlider from "@/components/elements/SlickSlider";

const TestimonialOne = () => {
  return (
    <div className="container py-5 my-5">
      <h2 className="text-center text-dark">Customer Reviews</h2>
      <SlickSlider
        class="testimonial-style-one-wrapper slick-layout-wrapper--20 axil-slick-arrow arrow-top-slide"
        responsive={[
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {TestimonialData.map((data, index) => (
          <div className="testimonial-style-one" key={index}>
            <div>
              <div className="review-speech">
                <p>{data.reviewText}</p>
              </div>
              <div className="media">
                <div className="thumbnail">
                  <Image
                    src={data.authorThumb}
                    width="60"
                    height="60"
                    alt={data.authorName}
                  />
                </div>
                <div className="media-body">
                  <span className="designation">{data.authorDesignation}</span>
                  <h6 className="title">{data.authorName}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default TestimonialOne;
