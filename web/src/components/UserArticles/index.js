import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UserArticle from "../UserArticle";

const UserArticles = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      // transitionDuration={500}
      // customTransition="all .5"
      //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
      //   containerClass="carousel-container"
      //   removeArrowOnDeviceType={["tablet", "mobile"]}
      //   deviceType={this.props.deviceType}
    >
      <div>
        <UserArticle>Item 1</UserArticle>
      </div>
      <div>
        <UserArticle>Item 2</UserArticle>
      </div>
    </Carousel>
  );
};

export default UserArticles;
