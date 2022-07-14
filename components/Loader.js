import React, { Component } from "react";
import Image from "next/image";
import banner from "../assets/banner1.jpg";


export function Loader() {
    return (
        <div class="loader">
            <Image src={banner} style={{}} />
        </div>
    );
}
