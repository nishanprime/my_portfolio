import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
const username = ({ data }) => {
  // if (!data) {
  //   console.log('Loading');
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="h-screen">
      <h1>hi</h1>
      <div
     
        className="h-1/5 overflow-scroll"
      >
        <ul>
          {data.map((eachData, index) => (
            <li key={index}>
              <a
                href={`/portfolio/${eachData.id}`}
                style={{
                  color: "blue",
                  marginTop: "100px",
                }}
              >
                <h1 className="text-blue">{eachData.id}</h1>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* <h1>Hi</h1> */}
    </div>
  );
};
// username.getInitialProps = async (ctx) => {
//   return ctx.query;
// };
export async function getStaticProps({ params }) {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return {
    props: { data },
    revalidate: 10,
    // notFound: true,
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "id" } },
      { params: { id: "nishan" } },
      { params: { id: "bishal" } },
    ],
    fallback: "blocking",
  };
}
// export const getStaticPaths = async () => {
//   return {
//     paths: ['portfolio/nishan'],
//     fallback: true,
//   };
// };
export default username;
