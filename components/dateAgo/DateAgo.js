import React from "react";
import Moment from "react-moment";

export default function DateAgo(props) {
    return (
        <div className={props.class}>
      {props.item}
        <Moment className={props.classDate} fromNow>
          {props.date}
        </Moment>
      </div>
    )
}