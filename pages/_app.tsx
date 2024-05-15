import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <div className="relative max-w-[480px] min-w-[280px] h-full mx-auto border border-y-0 box-content">
        <Head>
          <link
            rel="icon"
            href={
              "https://imagedelivery.net/Fxbz5xV7vyEmqagr1Ejwow/ee3e812e-0841-4f78-5432-45848ea0e800/public"
            }
            sizes="any"
          />
        </Head>
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}
``;
