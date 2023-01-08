import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | 오늘의 서울</title>
    </Head>
  );
}
