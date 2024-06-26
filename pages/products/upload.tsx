import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import useMutation from "@/libs/client/useMutation";
import { Product } from "@prisma/client";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface UploadProductForm {
  name: string;
  price: number;
  description: string;
  photo: FileList;
}
interface UploadProductMutation {
  ok: boolean;
  product: Product;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm<UploadProductForm>();
  const [upLoadProduct, { loading, data, error }] =
    useMutation<UploadProductMutation>("/api/products");
  const onValid = async ({
    name,
    price,
    description,
    photo,
  }: UploadProductForm) => {
    if (loading) return;
    if (photo && 0 < photo.length) {
      const { uploadURL } = await (await fetch(`/api/files`)).json();
      const form = new FormData();
      form.append("file", photo[0], name);
      const {
        result: { id },
      } = await (await fetch(uploadURL, { method: "POST", body: form })).json();

      upLoadProduct({ name, price, description, photoId: id });
    } else {
      upLoadProduct({ name, price, description });
    }
  };

  useEffect(() => {
    if (data?.ok) {
      router.replace(`/products/${data.product.id}`);
    }
  }, [data, router]);

  const photo = watch("photo");
  const [photoPreview, setPhotoPreview] = useState("");
  useEffect(() => {
    if (photo && 0 < photo.length) {
      const file = photo[0];
      setPhotoPreview(URL.createObjectURL(file));
    }
  }, [photo]);

  return (
    <Layout canGoBack title="상품 등록">
      <form className="px-4 space-y-5" onSubmit={handleSubmit(onValid)}>
        <div>
          {photoPreview ? (
            <div className="relative h-48">
              <Image
                src={photoPreview}
                className="w-full text-gray-600 rounded-md object-contain"
                layout="fill"
                alt="product_img"
              />
            </div>
          ) : (
            <label className="w-full cursor-pointer text-gray-600 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
              <svg
                className="h-12 w-12"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                {...register("photo")}
                className="hidden"
                type="file"
                accept="image/*"
              />
            </label>
          )}
        </div>
        <Input
          register={register("name", { required: true })}
          label="이름"
          name="name"
          kind="text"
          type="text"
          required
        />
        <Input
          register={register("price", { required: true })}
          label="가격"
          name="price"
          kind="price"
          type="number"
          required
        />
        <TextArea
          register={register("description", { required: true })}
          name="Description"
          label="설명"
        />
        <Button text={loading ? "상품 등록 중..." : "상품 등록"} />
      </form>
    </Layout>
  );
};

export default Upload;
