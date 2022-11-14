import React from "react";
import { useRouter } from "next/router";

export default function Jobs({ job }) {
  const {query} = useRouter();
  
  return (
    <div>
      <h1>{query.id}</h1>
      <div> post id{job.id}</div>
      <div>{job.title}</div>
      <div>{job.body}</div>
    </div>
  );
}



export async function getServerSideProps({params}) {
  const id = params.id
   const response = await fetch(
     `http://localhost:3000/api/zapaska`
  ); 
   const job = await response.json();
  return {
    props: { job },
  };
}
