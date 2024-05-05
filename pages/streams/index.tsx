import FloatingButton from "@/components/floating-button";
import Layout from "@/components/layout";
import { Stream } from "@prisma/client";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useSWR from "swr";

interface StreamsResponse {
  ok: boolean;
  streams: Stream[];
  totalCount: number;
}

const Streams: NextPage = () => {
  const [streamsData, setStreamsData] = useState<Stream[]>([]);
  const [page, setPage] = useState<number>(0);
  const { data, isLoading } = useSWR<StreamsResponse>(
    `/api/streams?page=${page}`
  );

  useEffect(() => {
    if (data && data.ok) {
      setStreamsData([...streamsData, ...data.streams]);
    }
  }, [data]);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (!isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView]);

  return (
    <Layout title="라이브" hasTabBar>
      <div className="flex flex-col gap-4">
        {0 < streamsData.length &&
          streamsData.map((stream) => {
            return (
              <Link
                href={`/streams/${stream.id}`}
                key={stream.id}
                className="pt-4 px-4"
              >
                <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
                <h3 className="text-gray-700 font-semibold text-xl mt-2">
                  {stream?.name}
                </h3>
              </Link>
            );
          })}
        {data && streamsData.length < data?.totalCount && <div ref={ref} />}
        <FloatingButton href="/streams/create">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Streams;
