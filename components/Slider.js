import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import banner from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

export function Slider() {
  return (
    <Carousel autoPlay infiniteLoop showArrows={false} swipeable={true} showStatus={false} showThumbs={false} interval={6000} >
      <div key={2}>
        <Image src={banner} width={1200} height={500} style={{}} />
      </div>
      <div key={3}>
        <Image src={banner2} width={1200} height={500} style={{}} />
      </div>
      <div key={4}>
        <Image src={banner3} width={1200} height={500} style={{}} />
      </div>
    </Carousel>
  );
}
