import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <div className="relative w-[480px] h-full mx-auto border border-y-0 box-content">
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}
``;
