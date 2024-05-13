import Head from "next/head";

interface Title {
  pageTitle: string;
}

export default function Title({ pageTitle }: Title) {
  return (
    <Head>
      <title>댱근 마켓 - {pageTitle}</title>
    </Head>
  );
}
