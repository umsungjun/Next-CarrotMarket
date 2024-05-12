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
      <div className="relative w-full max-w-[480px] mx-auto h-screen border border-y-0">
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}
``;
