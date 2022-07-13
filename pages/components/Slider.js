import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'

export function Slider() {
    return (
        <Carousel>
            <div>
                <Image
                    src="/gato.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={200}
                />
            </div>
        </Carousel>
    );
}
