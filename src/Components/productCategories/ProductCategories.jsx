import { productCategoriesData } from "../../dummyData";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProductCategories.scss";
import { useEffect } from "react";

const ProductCategories = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      disable: false,
      startEvent: "DOMContentLoaded",
      offset: 120,
      easing: "ease",
      mirror: false,
      anchorPlacement: "center-bottom",
    });
  }, []);

  // Slick slider area starts from here
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplayspeed: 3000,
    breakpoint: 1160,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1150, // tablet breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 950, // mobile breakpoint
        settings: {
          mobileFirst: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 700, // small mobile breakpoint
        settings: {
          mobileFirst: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="product_categories_section" data-aos="fade-top">
        {/* product categories side title starts from here */}
        <div className="product_categories_side_title">
          <h2>CATEGORIES</h2>
          <h1>PRODUCT</h1>
        </div>
        {/* product categories side title ends here */}

        {/* product categories container starts from here */}

        <div className="product_categories_container">
          <Slider {...settings}>
            {productCategoriesData.map((item) => (
              <div className="product_categories_contents d-flex" key={item.id}>
                <div className="product_categories_img">
                  <img src={item.image} alt="productCategoriesImg" />
                </div>
                <div className="product_categories_title">
                  <h4>{item.title}</h4>
                </div>
                <div className="product_categories_desc">
                  <h6>{item.desc}</h6>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* product categories container ends here */}
        <div className="product_categories_btn">
          <button className="common_btn_one">View More</button>
        </div>
      </section>
    </>
  );
};

export default ProductCategories;
