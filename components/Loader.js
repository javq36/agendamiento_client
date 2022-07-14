import React, { Component } from "react";
import Image from "next/image";
import loader from "../assets/loader2.gif";


export function Loader() {
    return (
        <div className="loader">
            <Image src={loader} style={{}} />
        </div>
    );
}
