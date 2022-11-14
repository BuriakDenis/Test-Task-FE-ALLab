import React from "react";
import Jobs from "../components/jobs/Jobs";

import useSWR from "swr";

export default function Index() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("http://localhost:3000/api/zapaska", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <section className="pt-3">
      {data.map((item) => (
        <div
          className="flex flex-row  h-40.1 justify-center items-center   pt-6 pb-6 bg-white mb-2 rounded-lg shadow-cst"
          key={item.id}
        >
          <Jobs item={item} />
        </div>
      ))}
    </section>
  );
}
