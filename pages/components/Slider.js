import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import cat from "../../assets/gato.jpg";

export function Slider() {
  return (
    <Carousel autoPlay infiniteLoop interval={3000} >
      <div key={1}>
        <Image src={cat} width={600} height={250} style={{}}/>
      </div>
      <div key={2}>
        <Image src={cat} width={600} height={250} style={{}}/>
      </div>
      <div key={3}>
        <Image src={cat} width={600} height={250} style={{}}/>
      </div>
      <div key={4}>
        <Image src={cat} width={600} height={250} style={{}}/>
      </div>
    </Carousel>
  );
}
