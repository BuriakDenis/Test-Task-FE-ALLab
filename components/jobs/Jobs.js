import React from "react";
import useSWR from "swr";
import Link from "next/link";
import StarRate from "../starRate/StarRate";
import BookMark from "../bookmark/Bookmark";
import Image from "../image/Image";
import DateAgo from "../dateAgo/DateAgo";
import Location from "../location/location";

export default function Jobs({ item }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${item.location.lat}&longitude=${item.location.lat}&localityLanguage=en`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);
  return (
    <>
      <div className="flex flex-row flex-auto pl-4 ">
        <div className="w-20.5 h-20.5 mb-8">
          <Image
            src={item.pictures[0]}
            alt="job picture"
            class="rounded-full w-20.5 h-20.5 "
          />
        </div>
        <div className="flex flex-col items-start justify-center pl-6">
          <Link href={`/jobsItem/${item.id}`}>{item.title}</Link>
          <p>{item.name}</p>
          <Location item={data} class="flex flex-row flex-auto pl-4"/>
        </div>
      </div>
      <StarRate class="flex pt-8 pb-8 pr-2" fill="#38415D" />
      <div className="flex flex-col h-28 pr-6 pl-6">
        <BookMark class="flex justify-end " />
        <DateAgo
          classDate="pl-1"
          class="flex flex-auto items-end"
          item="Posted"
          date={item.createdAt}
        />
      </div>
    </>
  );
}
