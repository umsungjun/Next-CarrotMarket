import Layout from "@/components/layout";
import Message from "@/components/message";
import useMutation from "@/libs/client/useMutation";
import useUser from "@/libs/client/useUser";
import { Stream, User } from "@prisma/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

interface StreamMessage {
  id: number;
  message: string;
  user: {
    avatar?: string;
    id: number;
  };
}
interface StreamWithMessages extends Stream {
  messages: StreamMessage[];
}
interface StreamResponse {
  ok: boolean;
  stream: StreamWithMessages;
}
interface MessageForm {
  message: string;
}

const StreamDetail: NextPage = () => {
  const { user } = useUser();
  console.log(user);
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<MessageForm>();
  const { data, mutate } = useSWR<StreamResponse>(
    router.query.id ? `/api/streams/${router.query.id}` : null,
    {
      // refreshInterval: 1000,
    }
  );

  const [sendMessage, { loading, data: sendMessageData }] = useMutation(
    `/api/streams/${router.query.id}/messages`
  );

  const onValid = (form: MessageForm) => {
    if (loading) return;
    mutate(
      (prev) =>
        prev &&
        ({
          ...prev,
          stream: {
            ...prev.stream,
            messages: [
              ...prev.stream.messages,
              { id: Date.now(), message: form.message, user: { ...user } },
            ],
          },
        } as any),
      false
    );
    sendMessage(form);
    reset();
  };

  return (
    <Layout canGoBack>
      <div className="px-4 space-y-4">
        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
        <h1 className="text-xl font-bold text-gray-900">
          {data?.stream?.name}
        </h1>
        <span className="text-xl block mt-3 text-gray-900">
          ${data?.stream?.price}
        </span>
        <p className=" my-6 text-gray-700">{data?.stream?.description}</p>
        <h1 className="text-xl font-bold text-gray-900">Live Chat</h1>
        <div className="py-10 pb-20 h-[50vh] px-4 space-y-4 overflow-y-scroll">
          {data?.stream?.messages.map((message) => (
            <Message
              key={message.id}
              message={message.message}
              reversed={message.user.id === user?.id}
            />
          ))}
        </div>
        <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
          <form
            className="flex relative items-center"
            onSubmit={handleSubmit(onValid)}
          >
            <input
              type="text"
              required
              {...register("message", { required: true })}
              className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500 pr-12"
            />
            <div className="absolute inset-y-0 flex py-1.5 px-1.5 right-0">
              <button className="flex items-center focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 bg-orange-500 hover:bg-orange-600 rounded-full px-3 text-sm text-white cursor-pointer">
                &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default StreamDetail;
