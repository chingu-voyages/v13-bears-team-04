import React from "react";
import Head from "next/head";

export default function PageHead(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="canonical" href={`${props.url}`} />
    </Head>
  );
}

PageHead.defaultProps = {
  title: "reddit: the front page of the internet",
  description: `Reddit is a network of communities based on people's interests. 
    Find communities you're interested in, and become a part of an online
    community!`,
  url: "www.reddit.com/page",
};
