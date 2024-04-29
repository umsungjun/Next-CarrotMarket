import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import useMutation from "@/libs/client/useMutation";
import { Stream } from "@prisma/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface CreateForm {
  name: string;
  price: string;
  description: string;
}

interface CreateResponse {
  ok: boolean;
  stream: Stream;
}

const Create: NextPage = () => {
  const router = useRouter();
  const [createStream, { data, loading, error }] =
    useMutation<CreateResponse>(`/api/streams`);
  const { register, handleSubmit } = useForm<CreateForm>();

  const onValid = (form: CreateForm) => {
    if (loading) return;
    console.log(form);
    createStream(form);
  };

  useEffect(() => {
    if (data && data.ok) {
      router.push(`/streams/${data.stream.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack title="라이브 생성">
      <form onSubmit={handleSubmit(onValid)} className="space-y-5 px-4">
        <Input
          register={register("name", { required: true })}
          required
          label="제목"
          name="name"
          type="text"
        />
        <Input
          register={register("price", { required: true })}
          required
          label="가격"
          name="price"
          kind="price"
          type="number"
        />
        <TextArea
          register={register("description", { required: true })}
          required
          label="설명"
          name="description"
        />
        <Button text={loading ? "로딩중..." : "라이브 생성"} />
      </form>
    </Layout>
  );
};

export default Create;
