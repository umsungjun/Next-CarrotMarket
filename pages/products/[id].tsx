import Button from "@/components/button";
import Layout from "@/components/layout";
import Title from "@/components/title";
import useMutation from "@/libs/client/useMutation";
import useUser from "@/libs/client/useUser";
import { cls } from "@/libs/client/utils";
import { Product, User } from "@prisma/client";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";

interface ProductWithUser extends Product {
  user: User;
}

interface ItemDetailResponse {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: Product[];
  isLiked: boolean;
}

const ItemDetail: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { data, mutate: boundMutate } = useSWR<ItemDetailResponse>(
    router.query.id ? `/api/products/${router.query.id}` : null
  );

  const [toggleFav] = useMutation(`/api/products/${router.query.id}/fav`);

  const onFavClick = () => {
    if (!data) return;
    boundMutate((prev) => prev && { ...prev, isLiked: !prev.isLiked }, false);
    // mutate("/api/users/me", (prev: any) => ({ ok: !prev.ok }), false);
    toggleFav({});
  };

  return (
    <>
      <Title pageTitle={"매물 상세"} />
      <Layout canGoBack>
        <div className="px-4 pt-4 pb-16 overflow-y-scroll h-screen">
          <div className="mb-8">
            <div className="relative h-80 bg-slate-50 rounded-sm">
              <Image
                src={`https://imagedelivery.net/Fxbz5xV7vyEmqagr1Ejwow/${data?.product.image}/public`}
                alt="product_img"
                className="object-contain"
                fill={true}
                priority={true}
                sizes="(max-width: 448px)"
                quality={100}
              />
            </div>
            <div className="flex py-4 cursor-pointer border-t border-b items-center space-x-3">
              <Image
                width={48}
                height={48}
                quality={100}
                src={`https://imagedelivery.net/Fxbz5xV7vyEmqagr1Ejwow/${data?.product?.user?.avatar}/avatar`}
                alt="profile_img"
                className="w-12 h-12 rounded-full bg-slate-300"
              />
              <div className="h-full">
                <p className="text-sm font-medium text-gray-700">
                  {data?.product?.user?.name}
                </p>
                <Link
                  href={`/users/profiles/${data?.product?.user?.id}`}
                  className="text-sm font-medium text-gray-500"
                >
                  프로필 보러가기 &rarr;
                </Link>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-3xl font-bold text-gray-900">
                {data?.product?.name}
              </h1>
              <span className="text-sm block mt-6 text-gray-900">
                {data?.product.price &&
                  `${Number(data?.product?.price).toLocaleString()}원`}
              </span>
              <p className="text-base my-6 text-gray-700">
                {data?.product?.description}
              </p>
              {user?.id !== data?.product.userId && (
                <div className="flex items-center justify-between space-x-2">
                  <Button large text="판매자에게 연락하기" />
                  <button
                    onClick={onFavClick}
                    className={cls(
                      "p-3 rounded-md flex items-center justify-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500",
                      data?.isLiked
                        ? "text-red-500  hover:text-red-600'"
                        : "text-gray-400  hover:text-gray-500"
                    )}
                  >
                    <svg
                      className="h-6 w-6 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill={data?.isLiked ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div>
            {data && 0 < data.relatedProducts.length && (
              <>
                <h2 className="text-2xl font-bold text-gray-900">추천 매물</h2>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {data.relatedProducts.map((product) => (
                    <Link key={product?.id} href={`/products/${product?.id}`}>
                      <div className="relative h-56 mb-4 w-full bg-slate-50">
                        <Image
                          src={`https://imagedelivery.net/Fxbz5xV7vyEmqagr1Ejwow/${product.image}/public`}
                          alt="product_img"
                          className="object-contain"
                          fill={true}
                          priority={true}
                          sizes="(max-width: 448px)"
                          quality={100}
                        />
                      </div>
                      <h3 className="-mb-1 text-gray-700">{product?.name}</h3>
                      <span className="text-sm font-medium text-gray-900">
                        {Number(product.price).toLocaleString()}원
                      </span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ItemDetail;
