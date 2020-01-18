import React from "react";
import Head from "next/head";

export default function PageHead(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Head>
  );
}
