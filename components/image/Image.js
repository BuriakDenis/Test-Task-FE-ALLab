import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import React from "react";

export default function Image(props) {
    return (
        <>
        <img src={props.src} alt={props.alt} className={props.class}/>
        </>
    )
}