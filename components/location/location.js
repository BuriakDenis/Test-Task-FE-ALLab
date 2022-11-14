import React from "react";

export default function Location(item, props ) {
  return (
    <ul className={props.class}>
      <li>{item.countryName}</li>
      <li>{item.city}</li>
    </ul>
  );
}
