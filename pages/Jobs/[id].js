import { useRouter } from "next/router";

export default function Jobs({ job }) {
  const {query} = useRouter();
  
  return (
    <div>
      <h1>{query.id}</h1>
      <div>{job.name}</div>
    </div>
  );
}

export async function getServerSideProps(params) {
  const response = await fetch(
    `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`
  );
  const job = await response.json();
  return {
    props: { job },
  };
}
